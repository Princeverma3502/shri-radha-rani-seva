"use client";

import { useState } from "react";

export default function AutoTester() {
  const [status, setStatus] = useState("Idle");

  const runFullTest = async () => {
    setStatus("🚀 Starting Test...");
    
    try {
      // 1. Mock Data
      const testData = {
        amount: 501,
        donorName: "Automated Test Robot",
        phone: "9999999999",
        email: "bot@test.com",
        specialDate: "2026-08-15"
      };

      // 2. Test Order Creation API
      setStatus("📡 Testing /api/razorpay...");
      const orderRes = await fetch("/api/razorpay", {
        method: "POST",
        body: JSON.stringify(testData),
      });
      const orderJson = await orderRes.json();
      
      if (!orderJson.success) throw new Error("Order API Failed");

      // 3. Test Verification API (The "Bypass" logic)
      setStatus("🔐 Testing /api/verify...");
      const verifyRes = await fetch("/api/verify", {
        method: "POST",
        body: JSON.stringify({
          razorpay_order_id: orderJson.order.id,
          razorpay_payment_id: "pay_TEST_" + Date.now(),
          razorpay_signature: "MOCK_SIGNATURE_ACCEPTED_BY_TEST_MODE",
          isTest: true // We can use this flag in our API if needed
        }),
      });

      if (verifyRes.ok) {
        setStatus("✅ SUCCESS: Database Updated & Verified!");
        alert("Test Passed! Check your Admin Dashboard now.");
      } else {
        setStatus("❌ Verification Failed (Signature Mismatch)");
      }
    } catch (err: any) {
      setStatus(`"❌ Error: ${err.message}`);
    }
  };

  if (process.env.NODE_ENV === "production") return null;

  return (
    <div className="fixed bottom-4 right-4 z-50">
      <button 
        onClick={runFullTest}
        className="bg-black text-white p-4 rounded-full shadow-2xl font-mono text-xs hover:bg-gray-800"
      >
        {status}
      </button>
    </div>
  );
}