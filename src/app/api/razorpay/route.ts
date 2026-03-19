import { NextResponse } from "next/server";
import Razorpay from "razorpay";

// Using our reliable direct relative paths from before!
import { db } from "../../../lib/db";
import { donations } from "../../../lib/db/schema";

export async function POST(request: Request) {
  try {
    // 1. CRITICAL CHECK: Load keys INSIDE the function and verify them
    const keyId = process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID;
    const keySecret = process.env.RAZORPAY_KEY_SECRET;

    if (!keyId || !keySecret) {
      console.error("❌ SEVERE ERROR: Razorpay keys are MISSING from your .env file!");
      return NextResponse.json(
        { error: "Server configuration error: Missing API keys" },
        { status: 500 }
      );
    }

    console.log("👉 DEBUG KEY ID:", keyId);
    console.log("👉 DEBUG SECRET:", keySecret ? "Ends with: " + keySecret.slice(-4) : "MISSING");

    // Initialize Razorpay safely with guaranteed keys
    const razorpay = new Razorpay({
      key_id: keyId,
      key_secret: keySecret,
    });

    // 2. Get the donation amount AND donor details from the frontend
    const body = await request.json();
    const { amount, donorName, email, phone, cause, panNumber } = body;

    // Validate that we have the required fields
    if (!amount || !donorName || !phone || !cause) {
      return NextResponse.json(
        { error: "Amount, Name, Phone, and Cause are required" }, 
        { status: 400 }
      );
    }

    // 3. Create an order in Razorpay
    const options = {
      amount: amount * 100, // Razorpay works in paise (₹1 = 100 paise)
      currency: "INR",
      receipt: `receipt_${Date.now()}`,
    };

    const order = await razorpay.orders.create(options);

    // 4. Save the PENDING donation to our Neon Database using Drizzle!
    await db.insert(donations).values({
      donorName,
      email: email || null,
      phone,
      amount: Number(amount),
      cause,
      panNumber: panNumber || null,
      razorpayOrderId: order.id, // We save this ID so we can verify the payment later
      paymentStatus: 'PENDING',
    });

    // 5. Send the order back to the frontend to open the payment popup
    return NextResponse.json({ success: true, order });

  } catch (error) {
    console.error("Razorpay API Error Details:", error);
    return NextResponse.json(
      { success: false, error: "Payment initiation failed" },
      { status: 500 }
    );
  }
}