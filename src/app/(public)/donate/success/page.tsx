"use client";

import { useSearchParams } from "next/navigation";
import Link from "next/link";
import { CheckCircle2, Home, Heart, Share2 } from "lucide-react";
import { Suspense } from "react";

function SuccessContent() {
  const searchParams = useSearchParams();
  const paymentId = searchParams.get("id");

  return (
    <div className="min-h-screen bg-[#FFFCF5] flex items-center justify-center px-4 py-12">
      <div className="max-w-md w-full bg-white rounded-[3rem] shadow-2xl p-8 md:p-12 text-center border-2 border-orange-100 relative overflow-hidden">
        <div className="bg-green-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 shadow-inner">
          <CheckCircle2 className="text-green-600" size={48} />
        </div>

        <h1 className="text-3xl font-black text-red-900 mb-2">धन्यवाद! (Thank You)</h1>
        <p className="text-gray-600 font-medium mb-8">
          आपका दान सफलतापूर्वक प्राप्त हुआ है। आपकी उदारता से किसी का जीवन संवर जाएगा।
        </p>

        <div className="bg-orange-50 rounded-2xl p-4 mb-8 border border-orange-100">
          <p className="text-[10px] uppercase tracking-widest font-bold text-orange-600 mb-1">Transaction ID</p>
          <p className="font-mono font-bold text-gray-800 break-all">{paymentId || "N/A"}</p>
        </div>

        <div className="space-y-4">
          <Link 
            href="/"
            className="flex items-center justify-center gap-2 w-full bg-red-900 text-white py-4 rounded-xl font-bold hover:bg-red-800 transition-all shadow-lg"
          >
            <Home size={18} /> मुख्य पृष्ठ (Home)
          </Link>
          <button onClick={() => window.print()} className="flex items-center justify-center gap-2 w-full border-2 border-orange-200 text-orange-700 py-4 rounded-xl font-bold hover:bg-orange-50 transition-all">
            <Share2 size={18} /> रसीद प्रिंट करें (Print Receipt)
          </button>
        </div>

        <p className="mt-8 text-sm text-gray-400 font-medium flex items-center justify-center gap-2">
          Made with <Heart size={14} className="fill-red-400 text-red-400" /> for Gau Seva
        </p>
      </div>
    </div>
  );
}

export default function SuccessPage() {
  return (
    <Suspense fallback={<div className="min-h-screen flex items-center justify-center">Loading...</div>}>
      <SuccessContent />
    </Suspense>
  );
}