import { NextResponse } from "next/server";
import { connectDB } from "@/app/lib/db";
import { User } from "@/app/lib/models/User";

export async function POST(req) {
  const body = await req.json();

  if (body.event === "charge.success") {
    await connectDB();

    const ref = body.data.reference;

    await User.findByIdAndUpdate(ref, {
      status: "paid",
      paymentReference: body.data.reference,
    });
  }

  return NextResponse.json({ status: "ok" });
}
