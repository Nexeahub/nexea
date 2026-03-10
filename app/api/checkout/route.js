import { NextResponse } from "next/server";
import { connectDB } from "@/app/lib/db";
import { User } from "@/app/lib/models/User";
import { paystackHeaders } from "@/app/utils/paystack";

export async function POST(req) {
  try {
    const body = await req.json();
    await connectDB();

    const amount = 500 * 100; // ₦5000 (edit this)

    const user = await User.create({
      ...body,
      amount,
      status: "pending",
    });

    const res = await fetch("https://api.paystack.co/transaction/initialize", {
      method: "POST",
      headers: paystackHeaders,
      body: JSON.stringify({
        email: body.email,
        amount,
        reference: user._id.toString(),
        callback_url: process.env.PAYSTACK_CALLBACK_URL,
      }),
    });

    const data = await res.json();
    return NextResponse.json(data.data);
  } catch (error) {
    return NextResponse.json({ error });
  }
}
