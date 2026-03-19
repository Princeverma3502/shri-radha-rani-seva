"use client";

import { useState } from "react";
import { Calendar, MapPin, Clock, User, CheckCircle, HeartHandshake, X } from "lucide-react";
import FadeIn from "../../../../components/animations/FadeIn"; // Adjust path if needed

// MOCK DATA (Later, this will come from your Prisma Database based on the URL slug)
const mockEventData = {
  title: "श्रीमद् भागवत कथा ज्ञान यज्ञ",
  location: "श्री राधा रानी मंदिर प्रांगण, वृंदावन, उत्तर प्रदेश",
  dates: "15 अक्टूबर - 21 अक्टूबर 2026",
  time: "दोपहर 2:00 बजे से सायं 6:00 बजे तक",
  vachak: "पूज्य श्री मृदुल कृष्ण शास्त्री जी",
  description: "श्री राधा रानी सेवा संस्थान द्वारा आयोजित भव्य संगीतमय श्रीमद् भागवत कथा में सपरिवार पधारकर धर्म लाभ उठाएं। कथा व्यास पूज्य श्री मृदुल कृष्ण शास्त्री जी के श्रीमुख से कथा का रसपान करें।",
  days: [
    { day: 1, title: "कलश यात्रा, गोकर्ण आख्यान", status: "booked" },
    { day: 2, title: "सृष्टि वर्णन, वराह एवं कपिल अवतार", status: "available" },
    { day: 3, title: "सती चरित्र, ध्रुव चरित्र, प्रह्लाद चरित्र", status: "available" },
    { day: 4, title: "गजेंद्र मोक्ष, वामन अवतार, राम अवतार, कृष्ण जन्मोत्सव", status: "booked" },
    { day: 5, title: "बाल लीला, माखन चोरी, गोवर्धन पूजा", status: "available" },
    { day: 6, title: "रास पंचाध्यायी, रुक्मणी विवाह", status: "available" },
    { day: 7, title: "सुदामा चरित्र, परीक्षित मोक्ष, व्यास पूजन", status: "available" },
  ]
};

export default function EventDetailsPage() {
  const [selectedDay, setSelectedDay] = useState<number | null>(null);

  return (
    <div className="min-h-screen bg-spiritual-cream pb-20">
      
      {/* 1. KATHA HERO BANNER */}
      <div className="bg-spiritual-dark text-white py-16 border-b-4 border-spiritual-saffron relative overflow-hidden">
        {/* Subtle background overlay */}
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center opacity-20" />
        <div className="absolute inset-0 bg-gradient-to-t from-spiritual-dark to-transparent" />
        
        <div className="max-w-5xl mx-auto px-4 relative z-10 text-center">
          <FadeIn direction="up">
            <h1 className="text-4xl md:text-5xl font-bold text-spiritual-gold mb-4 drop-shadow-md">
              {mockEventData.title}
            </h1>
            <p className="text-xl md:text-2xl text-gray-200 mb-8 max-w-3xl mx-auto">
              {mockEventData.description}
            </p>
            
            <div className="flex flex-wrap justify-center gap-6 text-sm md:text-base font-medium">
              <div className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full backdrop-blur-sm border border-white/20">
                <Calendar className="text-spiritual-saffron" size={20} />
                <span>{mockEventData.dates}</span>
              </div>
              <div className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full backdrop-blur-sm border border-white/20">
                <Clock className="text-spiritual-saffron" size={20} />
                <span>{mockEventData.time}</span>
              </div>
              <div className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full backdrop-blur-sm border border-white/20">
                <MapPin className="text-spiritual-saffron" size={20} />
                <span>{mockEventData.location}</span>
              </div>
            </div>
          </FadeIn>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 mt-12 grid grid-cols-1 lg:grid-cols-3 gap-10">
        
        {/* 2. MAIN CONTENT & JAJMAAN TIMELINE */}
        <div className="lg:col-span-2 space-y-10">
          <FadeIn direction="up">
            <h2 className="text-3xl font-bold text-spiritual-maroon mb-6 flex items-center gap-3">
              <HeartHandshake className="text-spiritual-saffron" size={32} />
              यजमान बनें (7-Day Schedule)
            </h2>
            <p className="text-gray-700 mb-8 text-lg">
              कथा के किसी भी एक दिन का मुख्य यजमान बनकर व्यास पीठ से आशीर्वाद प्राप्त करें। जो दिन उपलब्ध हैं, उनका चयन कर फॉर्म भरें।
            </p>

            <div className="space-y-4">
              {mockEventData.days.map((dayData, index) => (
                <div 
                  key={index} 
                  className={`p-5 rounded-xl border-2 flex flex-col md:flex-row items-start md:items-center justify-between transition-all shadow-sm ${
                    dayData.status === 'booked' 
                      ? 'bg-gray-100 border-gray-200 opacity-75' 
                      : 'bg-white border-spiritual-saffron/30 hover:border-spiritual-saffron hover:shadow-md'
                  }`}
                >
                  <div className="mb-4 md:mb-0">
                    <div className="flex items-center gap-3 mb-1">
                      <span className="bg-spiritual-maroon text-white text-xs font-bold px-3 py-1 rounded-full">
                        दिवस {dayData.day}
                      </span>
                      <h3 className="font-bold text-lg text-spiritual-dark">{dayData.title}</h3>
                    </div>
                  </div>
                  
                  {dayData.status === 'booked' ? (
                    <span className="flex items-center gap-2 text-gray-500 font-semibold bg-gray-200 px-4 py-2 rounded-full cursor-not-allowed">
                      <CheckCircle size={18} /> बुक हो चुका है
                    </span>
                  ) : (
                    <button 
                      onClick={() => setSelectedDay(dayData.day)}
                      className="flex items-center gap-2 bg-spiritual-saffron hover:bg-spiritual-deepSaffron text-white font-semibold px-6 py-2.5 rounded-full shadow-md hover:scale-105 transition-all w-full md:w-auto justify-center"
                    >
                      यजमान बनें
                    </button>
                  )}
                </div>
              ))}
            </div>
          </FadeIn>
        </div>

        {/* 3. SIDEBAR: KATHA VACHAK PROFILE */}
        <div className="lg:col-span-1">
          <FadeIn direction="up" delay={0.2}>
            <div className="bg-white rounded-2xl shadow-lg border border-spiritual-cream overflow-hidden sticky top-28">
              <div className="bg-spiritual-maroon h-24"></div>
              <div className="px-6 pb-6 text-center relative">
                {/* Profile Image (Placeholder) */}
                <div className="w-32 h-32 mx-auto rounded-full border-4 border-white shadow-lg -mt-16 bg-gray-200 overflow-hidden relative">
                   <div className="absolute inset-0 flex items-center justify-center text-gray-400">
                     <User size={48} />
                   </div>
                   {/* Add actual photo using Next Image later */}
                   {/* <Image src="/mridul-ji.jpg" alt="Shri Mridul Krishna Shastri Ji" fill className="object-cover" /> */}
                </div>
                
                <h3 className="text-xl font-bold text-spiritual-dark mt-4 mb-1">
                  {mockEventData.vachak}
                </h3>
                <p className="text-spiritual-deepSaffron font-medium text-sm mb-4">
                  कथा व्यास
                </p>
                <p className="text-gray-600 text-sm leading-relaxed mb-6">
                  परम पूज्य श्री मृदुल कृष्ण शास्त्री जी के मधुर स्वर में भागवत कथा का श्रवण कर अपने जीवन को कृतार्थ करें।
                </p>
                
                <button className="w-full border-2 border-spiritual-saffron text-spiritual-saffron hover:bg-spiritual-saffron hover:text-white font-semibold py-2 rounded-full transition-colors">
                  कथा के लिए आमंत्रित करें
                </button>
              </div>
            </div>
          </FadeIn>
        </div>
      </div>

      {/* 4. JAJMAAN BOOKING MODAL */}
      {selectedDay && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center px-4 bg-black/60 backdrop-blur-sm">
          <FadeIn direction="up">
            <div className="bg-white rounded-2xl shadow-2xl w-full max-w-md overflow-hidden">
              <div className="bg-spiritual-maroon px-6 py-4 flex justify-between items-center">
                <h3 className="text-white font-bold text-xl">यजमान पंजीकरण (दिवस {selectedDay})</h3>
                <button onClick={() => setSelectedDay(null)} className="text-white/80 hover:text-white">
                  <X size={24} />
                </button>
              </div>
              <div className="p-6">
                <p className="text-gray-600 mb-4 text-sm">
                  कृपया अपना विवरण भरें। संस्थान के सदस्य जल्द ही आपसे संपर्क करेंगे।
                </p>
                <form className="space-y-4" onSubmit={(e) => { e.preventDefault(); alert("Form Submitted!"); setSelectedDay(null); }}>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">पूरा नाम (Full Name)</label>
                    <input type="text" required className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-spiritual-saffron focus:outline-none" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">गोत्र (Gotra)</label>
                    <input type="text" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-spiritual-saffron focus:outline-none" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">मोबाइल नंबर (Phone)</label>
                    <input type="tel" required className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-spiritual-saffron focus:outline-none" />
                  </div>
                  <button type="submit" className="w-full bg-spiritual-saffron hover:bg-spiritual-deepSaffron text-white font-bold py-3 rounded-lg mt-4 transition-colors">
                    पंजीकरण करें (Submit Request)
                  </button>
                </form>
              </div>
            </div>
          </FadeIn>
        </div>
      )}

    </div>
  );
}