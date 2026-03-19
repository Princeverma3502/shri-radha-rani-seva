"use client";

import { useState } from "react";
import { Calendar, MapPin, Clock, User, CheckCircle, HeartHandshake, X } from "lucide-react";

// MOCK DATA
const mockEventData = {
  title: "श्रीमद् भागवत कथा ज्ञान यज्ञ",
  location: "श्री राधा रानी मंदिर प्रांगण, वृंदावन, उत्तर प्रदेश",
  dates: "15 अक्टूबर - 21 अक्टूबर 2026",
  time: "दोपहर 2:00 बजे से सायं 6:00 बजे तक",
  vachak: "पूज्य श्री मृदुल कृष्ण शास्त्री जी",
  description: "श्री राधा रानी सेवा संस्थान द्वारा आयोजित भव्य संगीतमय श्रीमद् भागवत कथा में सपरिवार पधारकर धर्म लाभ उठाएं।",
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

// This is CRITICAL for GitHub Actions to build dynamic [slug] pages
export async function generateStaticParams() {
  return [{ slug: 'shrimad-bhagwat-katha' }];
}

export default function EventDetailsPage() {
  const [selectedDay, setSelectedDay] = useState<number | null>(null);

  return (
    <div className="min-h-screen bg-orange-50/30 pb-20">
      {/* HERO BANNER */}
      <div className="bg-slate-900 text-white py-16 border-b-4 border-orange-500 relative overflow-hidden">
        <div className="max-w-5xl mx-auto px-4 relative z-10 text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-orange-400 mb-4 uppercase">
              {mockEventData.title}
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto italic">
              {mockEventData.description}
            </p>
            
            <div className="flex flex-wrap justify-center gap-6 text-sm md:text-base font-medium">
              <div className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full border border-white/20">
                <Calendar className="text-orange-500" size={20} />
                <span>{mockEventData.dates}</span>
              </div>
              <div className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full border border-white/20">
                <Clock className="text-orange-500" size={20} />
                <span>{mockEventData.time}</span>
              </div>
              <div className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full border border-white/20">
                <MapPin className="text-orange-500" size={20} />
                <span>{mockEventData.location}</span>
              </div>
            </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 mt-12 grid grid-cols-1 lg:grid-cols-3 gap-10">
        {/* MAIN CONTENT */}
        <div className="lg:col-span-2 space-y-10">
            <h2 className="text-3xl font-bold text-red-900 mb-6 flex items-center gap-3">
              <HeartHandshake className="text-orange-500" size={32} />
              यजमान बनें (7-Day Schedule)
            </h2>

            <div className="space-y-4">
              {mockEventData.days.map((dayData, index) => (
                <div 
                  key={index} 
                  className={`p-5 rounded-xl border-2 flex flex-col md:flex-row items-start md:items-center justify-between transition-all shadow-sm ${
                    dayData.status === 'booked' 
                      ? 'bg-gray-100 border-gray-200 opacity-75' 
                      : 'bg-white border-orange-200 hover:border-orange-500'
                  }`}
                >
                  <div>
                    <div className="flex items-center gap-3 mb-1">
                      <span className="bg-red-800 text-white text-xs font-bold px-3 py-1 rounded-full">
                        दिवस {dayData.day}
                      </span>
                      <h3 className="font-bold text-lg text-slate-800">{dayData.title}</h3>
                    </div>
                  </div>
                  
                  {dayData.status === 'booked' ? (
                    <span className="flex items-center gap-2 text-gray-500 font-semibold bg-gray-200 px-4 py-2 rounded-full cursor-not-allowed">
                      <CheckCircle size={18} /> बुक हो चुका है
                    </span>
                  ) : (
                    <button 
                      onClick={() => setSelectedDay(dayData.day)}
                      className="bg-orange-500 hover:bg-orange-600 text-white font-semibold px-6 py-2.5 rounded-full shadow-md transition-all"
                    >
                      यजमान बनें
                    </button>
                  )}
                </div>
              ))}
            </div>
        </div>

        {/* SIDEBAR */}
        <div className="lg:col-span-1">
            <div className="bg-white rounded-2xl shadow-lg border border-orange-100 overflow-hidden sticky top-28">
              <div className="bg-red-900 h-24"></div>
              <div className="px-6 pb-6 text-center relative">
                <div className="w-32 h-32 mx-auto rounded-full border-4 border-white shadow-lg -mt-16 bg-gray-200 flex items-center justify-center text-gray-400">
                     <User size={48} />
                </div>
                <h3 className="text-xl font-bold text-slate-800 mt-4 mb-1">{mockEventData.vachak}</h3>
                <p className="text-orange-600 font-medium text-sm mb-4 text-center italic">कथा व्यास</p>
                <p className="text-gray-600 text-sm leading-relaxed mb-6">परम पूज्य श्री मृदुल कृष्ण शास्त्री जी के मधुर स्वर में भागवत कथा का श्रवण करें।</p>
                <button className="w-full border-2 border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white font-semibold py-2 rounded-full transition-colors">
                  कथा के लिए आमंत्रित करें
                </button>
              </div>
            </div>
        </div>
      </div>

      {/* MODAL */}
      {selectedDay && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center px-4 bg-black/60 backdrop-blur-sm">
            <div className="bg-white rounded-2xl shadow-2xl w-full max-w-md overflow-hidden">
              <div className="bg-red-900 px-6 py-4 flex justify-between items-center text-white">
                <h3 className="font-bold text-xl">यजमान पंजीकरण (दिवस {selectedDay})</h3>
                <button onClick={() => setSelectedDay(null)}><X size={24} /></button>
              </div>
              <div className="p-6">
                <form className="space-y-4" onSubmit={(e) => { e.preventDefault(); setSelectedDay(null); }}>
                  <input type="text" placeholder="पूरा नाम" required className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-orange-500" />
                  <input type="tel" placeholder="मोबाइल नंबर" required className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-orange-500" />
                  <button type="submit" className="w-full bg-orange-500 text-white font-bold py-3 rounded-lg hover:bg-orange-600 transition-colors">
                    पंजीकरण करें
                  </button>
                </form>
              </div>
            </div>
        </div>
      )}
    </div>
  );
}