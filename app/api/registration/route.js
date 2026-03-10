// app/api/registration/route.ts
import { NextResponse } from "next/server";
import { connectDB } from "@/app/lib/db";
import RegistrationSchema from "@/app/lib/models/RegistrationSchema";

export async function GET(request) {
  try {
    const { searchParams } = new URL(request.url);
    const reference = searchParams.get("ref");

    if (!reference) {
      return NextResponse.json(
        { success: false, error: "No ref" },
        { status: 400 },
      );
    }

    await connectDB();

    // Force lean() to ensure we get a plain JS object back
    const registration = await RegistrationSchema.findOne({
      paymentReference: reference,
    }).lean();

    if (!registration) {
      return NextResponse.json({ success: false }, { status: 404 });
    }

    return NextResponse.json({ success: true, data: registration });
  } catch (error) {
    return NextResponse.json({ success: false }, { status: 500 });
  }
}
