import { NextResponse } from "next/server";
import crypto from "crypto";
import { db } from "../../../lib/db";
import { donations } from "../../../lib/db/schema";
import { eq } from "drizzle-orm";

export async function POST(req: Request) {
  try {
    const { razorpay_order_id, razorpay_payment_id, razorpay_signature } = await req.json();

    // 1. Ensure no missing data
    if (!razorpay_order_id || !razorpay_payment_id || !razorpay_signature) {
      return NextResponse.json({ error: "Missing payment details" }, { status: 400 });
    }

    // 2. Cryptographic Verification
    const secret = process.env.RAZORPAY_KEY_SECRET;
    if (!secret) {
      return NextResponse.json({ error: "Server config error" }, { status: 500 });
    }

    const body = razorpay_order_id + "|" + razorpay_payment_id;
    const expectedSignature = crypto
      .createHmac("sha256", secret)
      .update(body.toString())
      .digest("hex");

    const isAuthentic = expectedSignature === razorpay_signature;

    if (!isAuthentic) {
      console.error("SECURITY ALERT: Invalid payment signature detected.");
      return NextResponse.json({ error: "Invalid payment signature" }, { status: 400 });
    }

    // 3. Update the database record to SUCCESS
    await db
      .update(donations)
      .set({
        paymentId: razorpay_payment_id,
        paymentStatus: "SUCCESS",
      })
      .where(eq(donations.razorpayOrderId, razorpay_order_id));

    return NextResponse.json({ 
      success: true, 
      message: "Payment verified and recorded securely." 
    });

  } catch (error) {
    console.error("Verification Error:", error);
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}