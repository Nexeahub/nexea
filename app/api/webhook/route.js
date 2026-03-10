import { NextResponse } from "next/server";
import { connectDB } from "@/app/lib/db";
import RegistrationSchema from "@/app/lib/models/RegistrationSchema";

export async function POST(req) {
  try {
    const body = await req.json();

    // Only handle successful payments
    if (body.event === "charge.success") {
      await connectDB();

      const ref = body.data.reference;

      const updated = await RegistrationSchema.findByIdAndUpdate(
        ref,
        {
          paymentStatus: "paid",
          paymentReference: body.data.reference,
        },
        { new: true }, // returns the updated document (optional)
      );

      if (!updated) {
        console.warn(`Registration with reference ${ref} not found`);
      }
    }

    return NextResponse.json({ status: "ok" });
  } catch (error) {
    console.error("Webhook error:", error);
    return NextResponse.json(
      { error: error.message || "Server error" },
      { status: 500 },
    );
  }
}
