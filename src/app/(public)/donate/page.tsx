"use client";

import { useState } from "react";
import Script from "next/script";
import { ShieldCheck, ArrowRight } from "lucide-react";

export default function DonatePage() {
  const [amount, setAmount] = useState<number>(500);
  const [customAmount, setCustomAmount] = useState<string>("");
  const [isLoading, setIsLoading] = useState(false);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [specialDate, setSpecialDate] = useState(""); 

  const predefinedAmounts = [500, 1100, 2100, 5100];

  const handlePayment = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    const finalAmount = customAmount ? parseInt(customAmount) : amount;

    if (!finalAmount || finalAmount < 1) {
      alert("कृपया एक वैध राशि दर्ज करें");
      setIsLoading(false);
      return;
    }

    try {
      // 1. Create Order in Backend (Saves PENDING record to Neon DB)
      const orderResponse = await fetch("/api/razorpay", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ 
          amount: finalAmount,
          donorName: name,
          phone: phone,
          email: email,
          cause: specialDate ? `Special Occasion: ${specialDate}` : "General Donation" 
        }),
      });

      const orderData = await orderResponse.json();
      if (!orderData.success) throw new Error("Order creation failed");

      const options = {
        key: process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID,
        amount: orderData.order.amount,
        currency: "INR",
        name: "Shri Radha Rani Seva Sansthan",
        description: "Donation for Gau Seva & Old Age Home",
        order_id: orderData.order.id,
        handler: async function (response: any) {
          try {
            // 2. Verify Payment (Updates Neon DB to SUCCESS)
            const verifyResponse = await fetch("/api/verify", {
              method: "POST",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify({
                razorpay_order_id: response.razorpay_order_id,
                razorpay_payment_id: response.razorpay_payment_id,
                razorpay_signature: response.razorpay_signature,
              }),
            });
            
            if (verifyResponse.ok) {
              // Redirect to success page
              window.location.href = `/donate/success?id=${response.razorpay_payment_id}`;
            } else {
              alert("Verification failed.");
            }
          } catch (err) {
            alert("Error verifying payment.");
          }
        },
        prefill: { name, email, contact: phone },
        theme: { color: "#7f1d1d" },
      };

      const paymentObject = new (window as any).Razorpay(options);
      paymentObject.open();
      
    } catch (error) {
      alert("Something went wrong!");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <Script src="https://checkout.razorpay.com/v1/checkout.js" strategy="lazyOnload" />
      <div className="min-h-screen bg-[#FFFCF5] pb-24">
        <div className="py-16 bg-red-900 text-center border-b-8 border-orange-500 px-4 shadow-inner">
          <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-4 italic">दान करें</h1>
          <p className="text-lg text-orange-100 max-w-2xl mx-auto">आपका एक योगदान किसी बेसहारा का जीवन संवार सकता है।</p>
        </div>

        <div className="max-w-3xl mx-auto px-4 mt-8">
          <div className="bg-white rounded-[2.5rem] shadow-2xl border-2 border-orange-100 p-6 md:p-12">
            
            <div className="flex items-center gap-2 mb-8 justify-center bg-green-50 py-2 rounded-full border border-green-100 max-w-xs mx-auto">
              <ShieldCheck className="text-green-600" size={18} />
              <span className="text-xs font-bold text-green-800 uppercase tracking-tight">100% Secure Payment</span>
            </div>

            <form onSubmit={handlePayment} className="space-y-8">
              <div>
                <label className="block text-xl font-bold text-red-900 mb-4 text-center">राशि चुनें (Select Amount)</label>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4">
                  {predefinedAmounts.map((amt) => (
                    <button
                      key={amt} type="button"
                      onClick={() => { setAmount(amt); setCustomAmount(""); }}
                      className={`py-4 rounded-2xl font-bold border-2 transition-all active:scale-95 ${amount === amt && !customAmount ? "bg-red-900 text-white border-red-900 shadow-lg" : "bg-orange-50/50 text-gray-700 border-orange-200"}`}
                    >₹ {amt}</button>
                  ))}
                </div>
                <input
                  type="number" placeholder="अन्य राशि (Custom Amount)" value={customAmount}
                  onChange={(e) => { setCustomAmount(e.target.value); setAmount(0); }}
                  className="w-full px-5 py-4 bg-gray-50 border-2 border-gray-200 rounded-2xl font-bold text-lg focus:ring-2 focus:ring-red-900 outline-none text-center"
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-6 border-t border-gray-100">
                <input type="text" placeholder="पूरा नाम (Name) *" required value={name} onChange={(e) => setName(e.target.value)} className="p-4 bg-gray-50 border border-gray-200 rounded-xl focus:bg-white transition-colors" />
                <input type="tel" placeholder="मोबाइल नंबर (Phone) *" required value={phone} onChange={(e) => setPhone(e.target.value)} className="p-4 bg-gray-50 border border-gray-200 rounded-xl focus:bg-white transition-colors" />
                <input type="email" placeholder="ईमेल (Email)" className="md:col-span-2 p-4 bg-gray-50 border border-gray-200 rounded-xl focus:bg-white transition-colors" value={email} onChange={(e) => setEmail(e.target.value)} />
                
                <div className="md:col-span-2 p-4 bg-orange-50 border border-orange-200 rounded-xl">
                  <label className="block text-sm font-bold text-orange-900 mb-2">विशेष अवसर तिथि (Birthday/Anniversary - Optional)</label>
                  <input type="date" value={specialDate} onChange={(e) => setSpecialDate(e.target.value)} className="w-full p-3 bg-white border border-orange-200 rounded-lg outline-none focus:ring-2 focus:ring-orange-500" />
                </div>
              </div>

              <button type="submit" disabled={isLoading} className="w-full bg-orange-600 hover:bg-orange-700 text-white font-extrabold text-xl py-5 rounded-2xl shadow-lg transition-all active:scale-95 flex items-center justify-center gap-2">
                {isLoading ? "प्रतीक्षा करें..." : `दान करें ₹${customAmount || amount} `}
                {!isLoading && <ArrowRight />}
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}