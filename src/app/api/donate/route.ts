import { NextResponse } from "next/server";
import { db } from "../../../lib/db"; 
import { donations } from "../../../lib/db/schema"; 

export async function POST(request: Request) {
  try {
    // 1. Get the data sent from the frontend after successful payment
    const body = await request.json();
    const { 
      name, 
      email, 
      phone, 
      amount, 
      razorpay_payment_id, 
      razorpay_order_id, 
      razorpay_signature,
      cause // Added this because your schema requires a 'cause'!
    } = body;

    // 2. Validate that we have the required fields
    if (!name || !phone || !amount || !razorpay_payment_id) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }

    // 3. Save the donation to the database using Drizzle
    const newDonation = await db.insert(donations).values({
      donorName: name,
      email: email || null,
      phone: phone,
      amount: Number(amount),
      paymentId: razorpay_payment_id,
      razorpayOrderId: razorpay_order_id,
      razorpaySignature: razorpay_signature,
      paymentStatus: "SUCCESS",
      cause: cause || "General Donation",
    }).returning();
    return NextResponse.json({ success: true, donation: newDonation[0] }, { status: 201 });

  } catch (error) {
    console.error("Error saving donation to database:", error);
    return NextResponse.json(
      { success: false, error: "Failed to save donation record" },
      { status: 500 }
    );
  }
}