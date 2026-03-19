"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X, Heart } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  // Restored your full list with Hindi & English
  const navLinks = [
    { name: "होम (Home)", href: "/" },
    { name: "हमारे बारे में (About)", href: "/about" },
    { name: "गौ सेवा (Gau Seva)", href: "/seva/gau-seva" },
    { name: "वृद्धाश्रम (Old Age Home)", href: "/seva/old-age-home" },
    { name: "गैलरी (Gallery)", href: "/gallery" },
    { name: "संपर्क (Contact)", href: "/contact" },
  ];

  return (
    <nav className="sticky top-0 z-[100] bg-white/95 backdrop-blur-md shadow-md border-b border-orange-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          
          {/* LOGO SECTION */}
          <Link href="/" className="flex items-center gap-3 shrink-0 group">
            <div className="relative h-12 w-12 md:h-14 md:w-14">
              <img 
                src="/assets/icons/logo.png" 
                alt="Shri Radha Rani Logo" 
                className="h-full w-full rounded-full border-2 border-red-900 object-cover shadow-sm group-hover:scale-105 transition-transform"
                onError={(e) => (e.currentTarget.src = "https://placehold.co/100x100/fef2e2/991b1b?text=Logo")}
              />
            </div>
            <div className="flex flex-col">
              <span className="font-black text-red-900 text-lg md:text-xl leading-tight tracking-tight">
                श्री राधा रानी सेवा संस्थान
              </span>
            </div>
          </Link>

          {/* DESKTOP TABS - Visible on md screens and up */}
          <div className="hidden md:flex items-center gap-1 lg:gap-4">
            {navLinks.map((link) => (
              <Link 
                key={link.name} 
                href={link.href}
                className="px-3 py-2 text-gray-700 hover:text-red-900 font-bold text-[13px] lg:text-sm transition-all rounded-lg hover:bg-orange-50"
              >
                {link.name}
              </Link>
            ))}
            
            {/* Donate Button */}
            <Link 
              href="/donate"
              className="ml-2 bg-red-900 hover:bg-red-800 text-white px-5 py-2.5 rounded-full font-bold shadow-md transition-all hover:shadow-lg flex items-center gap-2 text-sm"
            >
              <Heart size={16} fill="white" /> दान करें
            </Link>
          </div>

          {/* MOBILE TOGGLE BUTTON */}
          <div className="flex items-center md:hidden">
            <button 
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 text-red-900 hover:bg-orange-50 rounded-xl transition-colors"
              aria-label="Toggle Menu"
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* MOBILE MENU DROPDOWN */}
      {isOpen && (
        <div className="md:hidden absolute top-20 left-0 w-full bg-white border-b-2 border-orange-100 shadow-2xl animate-in slide-in-from-top duration-300">
          <div className="px-4 pt-2 pb-6 space-y-1 bg-[#FFFCF5]">
            {navLinks.map((link) => (
              <Link 
                key={link.name} 
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="block px-4 py-4 text-base font-bold text-gray-800 hover:bg-orange-100 hover:text-red-900 rounded-xl transition-colors"
              >
                {link.name}
              </Link>
            ))}
            <div className="pt-4">
              <Link 
                href="/donate"
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