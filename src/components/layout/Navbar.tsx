"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X, Heart } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "होम (Home)", href: "/" },
    { name: "कार्यक्रम (Events)", href: "/events" },
    { name: "समिति (Committee)", href: "/committee" },
    { name: "गौ सेवा (Gau Seva)", href: "/seva/gau-seva" },
    { name: "वृद्धाश्रम (Old Age Home)", href: "/seva/old-age-home" },
    { name: "गैलरी (Gallery)", href: "/gallery" },
    { name: "संपर्क (Contact)", href: "/contact" },
  ];

  return (
    <nav className="sticky top-0 z-[100] bg-white/95 backdrop-blur-md shadow-md border-b border-orange-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          
          <Link href="/" className="flex items-center gap-3 shrink-0">
            <span className="font-black text-red-900 text-lg md:text-xl leading-tight">
              श्री राधा रानी सेवा संस्थान
            </span>
          </Link>

          {/* DESKTOP MENU */}
          <div className="hidden xl:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link 
                key={link.href} 
                href={link.href}
                className="px-3 py-2 text-gray-700 hover:text-red-900 font-bold text-sm transition-all rounded-lg hover:bg-orange-50 whitespace-nowrap"
              >
                {link.name}
              </Link>
            ))}
            <Link 
              href="/donations"
              className="ml-4 bg-red-900 hover:bg-red-800 text-white px-6 py-2.5 rounded-full font-bold shadow-md transition-all flex items-center gap-2 text-sm"
            >
              <Heart size={16} fill="white" /> दान करें
            </Link>
          </div>

          {/* MOBILE TOGGLE */}
          <div className="flex items-center xl:hidden">
            <button 
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 text-red-900 hover:bg-orange-50 rounded-xl transition-colors"
            >
              {isOpen ? <X size={30} /> : <Menu size={30} />}
            </button>
          </div>
        </div>
      </div>

      {/* MOBILE MENU DROPDOWN */}
      {isOpen && (
        <div className="xl:hidden absolute top-20 left-0 w-full bg-white border-b-2 border-orange-100 shadow-2xl animate-in slide-in-from-top duration-300">
          <div className="px-4 pt-2 pb-8 space-y-1 bg-[#FFFCF5] max-h-[85vh] overflow-y-auto">
            {navLinks.map((link) => (
              <Link 
                key={link.name} 
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="block px-4 py-4 text-base font-bold text-gray-800 hover:bg-orange-100 hover:text-red-900 rounded-xl transition-colors border-b border-orange-50 last:border-0"
              >
                {link.name}
              </Link>
            ))}
            <div className="pt-6">
              <Link 
                href="/donations"
                onClick={() => setIsOpen(false)}
                className="flex items-center justify-center gap-2 w-full bg-red-900 text-white py-4 rounded-2xl font-black shadow-lg"
              >
                <Heart size={20} fill="white" /> दान करें (Donate Now)
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}