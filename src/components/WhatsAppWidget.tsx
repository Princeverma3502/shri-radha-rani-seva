"use client";

import { MessageCircle } from "lucide-react";
import Link from "next/link";

export default function WhatsAppWidget() {
  const phoneNumber = "918299735178";
  const defaultMessage = encodeURIComponent("राधे राधे! मैं संस्थान के बारे में जानना चाहता हूँ। (Radhe Radhe! I want to know more about the Sansthan.)");
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${defaultMessage}`;

  return (
    <Link 
      href={whatsappUrl} 
      target="_blank" 
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 bg-[#25D366] text-white p-4 rounded-full shadow-2xl hover:scale-110 transition-transform duration-300 flex items-center justify-center group"
      aria-label="Chat on WhatsApp"
    >
      <MessageCircle size={32} className="group-hover:animate-pulse" />
      {/* Tooltip */}
      <span className="absolute right-16 bg-white text-gray-800 text-sm font-bold px-3 py-1 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity shadow-md pointer-events-none whitespace-nowrap">
        हमें WhatsApp करें
      </span>
    </Link>
  );
}