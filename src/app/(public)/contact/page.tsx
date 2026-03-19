"use client";

import FadeIn from "@/src/components/animations/FadeIn";
import { Mail, Phone, MapPin, Send } from "lucide-react";

export default function ContactPage() {
  return (
    <div className="bg-[#FFFCF5] min-h-screen py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <FadeIn direction="up">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-black text-red-900 mb-4">संपर्क करें (Contact Us)</h1>
            <div className="w-24 h-1.5 bg-orange-500 mx-auto rounded-full mb-6"></div>
            <p className="text-lg text-gray-700 max-w-2xl mx-auto font-medium">
              आपके सुझाव और सहयोग हमारे लिए अमूल्य हैं। हमसे जुड़ने के लिए नीचे दिए गए माध्यमों का उपयोग करें।
            </p>
          </div>
        </FadeIn>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          
          {/* Left Side: Contact Info */}
          <FadeIn direction="left">
            <div className="space-y-8">
              <div className="bg-white p-8 rounded-3xl shadow-xl border border-orange-100 transform transition-hover hover:scale-[1.02]">
                <h2 className="text-2xl font-bold text-red-900 mb-6 border-b-2 border-orange-100 pb-2">मुख्य कार्यालय</h2>
                
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="bg-orange-100 p-3 rounded-2xl text-orange-600">
                      <MapPin size={24} />
                    </div>
                    <div>
                      <p className="font-bold text-gray-800">पता (Address)</p>
                      <p className="text-gray-600">गोरखपुर, उत्तर प्रदेश - 273005</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="bg-orange-100 p-3 rounded-2xl text-orange-600">
                      <Phone size={24} />
                    </div>
                    <div>
                      <p className="font-bold text-gray-800">फ़ोन (Phone)</p>
                      <p className="text-gray-600">+91 9005844342</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="bg-orange-100 p-3 rounded-2xl text-orange-600">
                      <Mail size={24} />
                    </div>
                    <div>
                      <p className="font-bold text-gray-800">ईमेल (Email)</p>
                      <p className="text-gray-600">info@radharani-seva.org</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Simple Map Placeholder */}
              <div className="h-64 bg-orange-100 rounded-3xl overflow-hidden shadow-inner border-4 border-white flex items-center justify-center text-orange-300 font-bold">
                [ Google Map Coming Soon ]
              </div>
            </div>
          </FadeIn>

          {/* Right Side: Message Form */}
          <FadeIn direction="right">
            <form className="bg-white p-8 md:p-10 rounded-3xl shadow-2xl border-t-8 border-red-900">
              <h2 className="text-2xl font-bold text-gray-800 mb-6">हमें संदेश भेजें</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2">आपका नाम</label>
                  <input type="text" className="w-full bg-orange-50/50 border-2 border-orange-100 rounded-xl px-4 py-3 outline-none focus:border-red-900 transition-all" placeholder="John Doe" />
                </div>
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2">मोबाइल नंबर</label>
                  <input type="tel" className="w-full bg-orange-50/50 border-2 border-orange-100 rounded-xl px-4 py-3 outline-none focus:border-red-900 transition-all" placeholder="+91..." />
                </div>
              </div>

              <div className="mb-6">
                <label className="block text-sm font-bold text-gray-700 mb-2">विषय (Subject)</label>
                <input type="text" className="w-full bg-orange-50/50 border-2 border-orange-100 rounded-xl px-4 py-3 outline-none focus:border-red-900 transition-all" placeholder="Donation Query" />
              </div>

              <div className="mb-8">
                <label className="block text-sm font-bold text-gray-700 mb-2">आपका संदेश</label>
                <textarea rows={4} className="w-full bg-orange-50/50 border-2 border-orange-100 rounded-xl px-4 py-3 outline-none focus:border-red-900 transition-all" placeholder="लिखें..."></textarea>
              </div>

              <button className="w-full bg-red-900 text-white font-black py-4 rounded-xl shadow-lg hover:bg-red-800 transition-all flex items-center justify-center gap-3 active:scale-95">
                <Send size={20} /> संदेश भेजें (Send Message)
              </button>
            </form>
          </FadeIn>

        </div>
      </div>
    </div>
  );
}