import { NextResponse } from "next/server";
import { connectDB } from "@/app/lib/db";
import RegistrationSchema from "@/app/lib/models/RegistrationSchema";
import { paystackHeaders } from "@/app/utils/paystack";

export async function POST(req) {
  try {
    const body = await req.json();

    // Connect to MongoDB
    await connectDB();

    // Ensure track info exists
    if (!body.track || !body.track.price || !body.track.name) {
      return NextResponse.json(
        { error: "Track information is missing or incomplete" },
        { status: 400 },
      );
    }

    // Convert amount to kobo
    const amount = body.track.price * 100;

    // Save user registration in MongoDB
    const registration = await RegistrationSchema.create({
      name: body.name,
      email: body.email,
      whatsapp: body.whatsapp,
      track: body.track,
      paymentStatus: "pending", // initial status
    });

    // Initialize Paystack transaction
    const res = await fetch("https://api.paystack.co/transaction/initialize", {
      method: "POST",
      headers: paystackHeaders,
      body: JSON.stringify({
        email: body.email,
        amount,
        reference: registration._id.toString(),
        callback_url: process.env.PAYSTACK_CALLBACK_URL,
      }),
    });

    const data = await res.json();

    if (!data.status) {
      return NextResponse.json({ error: data.message }, { status: 400 });
    }

    // Return Paystack authorization URL
    return NextResponse.json(data.data);
  } catch (error) {
    console.error("Checkout API error:", error);
    return NextResponse.json(
      { error: error.message || "Server error" },
      { status: 500 },
    );
  }
}
