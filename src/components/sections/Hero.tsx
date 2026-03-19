"use client";

import Link from "next/link";
import { Heart, Play } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative bg-[#FFFAF2] pt-10 pb-20 lg:pt-20 lg:pb-32 overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/4 w-96 h-96 bg-orange-200/30 rounded-full blur-3xl" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          
          {/* TEXT CONTENT */}
          <div className="flex-1 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-red-50 border border-red-100 text-red-900 text-sm font-bold mb-6">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-red-600"></span>
              </span>
              राधे राधे! स्वागत है आपका
            </div>
            
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-black text-slate-900 leading-[1.1] mb-6">
              श्री राधा रानी <br />
              <span className="text-red-900 italic">सेवा संस्थान</span>
            </h1>
            
            <p className="text-lg md:text-xl text-gray-600 mb-10 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
              वृंदावन की पावन धरा पर गौ सेवा, वृद्ध सेवा एवं श्रीमद् भागवत कथा के माध्यम से धर्म और समाज की निस्वार्थ सेवा।
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
              <Link 
                href="/donations" 
                className="w-full sm:w-auto px-8 py-4 bg-red-900 text-white rounded-full font-black text-lg shadow-xl hover:bg-red-800 transition-all flex items-center justify-center gap-2 hover:scale-105"
              >
                <Heart size={20} fill="white" /> अभी दान करें
              </Link>
              <Link 
                href="/gallery" 
                className="w-full sm:w-auto px-8 py-4 bg-white text-slate-900 border-2 border-slate-200 rounded-full font-bold text-lg hover:bg-orange-50 transition-all flex items-center justify-center gap-2"
              >
                <Play size={18} /> गैलरी देखें
              </Link>
            </div>
          </div>

          {/* IMAGE / DECORATIVE SECTION */}
          <div className="flex-1 relative w-full max-w-lg lg:max-w-none">
            <div className="relative aspect-square rounded-[3rem] overflow-hidden border-8 border-white shadow-2xl rotate-3 hover:rotate-0 transition-transform duration-500">
              <img 
                src="/assets/images/hero-main.jpg" 
                alt="Vrindavan Seva"
                className="w-full h-full object-cover"
                onError={(e) => (e.currentTarget.src = "https://placehold.co/600x600/991b1b/ffffff?text=Radha+Rani+Seva")}
              />
            </div>
            {/* Float Card */}
            <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-2xl shadow-xl border border-orange-100 hidden md:block animate-bounce-slow">
              <p className="text-red-900 font-black text-2xl">1000+</p>
              <p className="text-gray-500 font-bold text-sm uppercase">गौ सेवा लाभार्थी</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}