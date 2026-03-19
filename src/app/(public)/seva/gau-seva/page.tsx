import Link from "next/link";
import { Heart, Leaf, Stethoscope, Sun, HandHeart } from "lucide-react";
import FadeIn from "../../../../components/animations/FadeIn"; // Adjust path dots if needed

export default function GauSevaPage() {
  return (
    <div className="min-h-screen pb-20">
      
      {/* 1. HERO BANNER - Warm, light overlay with DARK text */}
      <div className="relative py-24 border-b-4 border-orange-500 overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1590055531615-f16d36ffe828?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center opacity-15" />
        <div className="absolute inset-0 bg-gradient-to-b from-orange-100/90 to-[#FFFCF5]/95" /> 
        
        <div className="max-w-4xl mx-auto px-4 relative z-10 text-center">
          <FadeIn direction="up">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-red-900 mb-6">
              गौ माता सेवा एवं संरक्षण
            </h1>
            <p className="text-xl text-gray-800 leading-relaxed max-w-2xl mx-auto font-medium">
              "गावो विश्वस्य मातरः" - गौ माता संपूर्ण विश्व की माता हैं। 
              श्री राधा रानी सेवा संस्थान बेसहारा और बीमार गोवंश के संरक्षण के लिए पूर्णतः समर्पित है।
            </p>
          </FadeIn>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mt-16">
        
        {/* 2. THE SIGNIFICANCE */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-20">
          <FadeIn direction="right">
            <div className="relative h-96 rounded-[2.5rem] overflow-hidden shadow-2xl border-8 border-white">
              <img 
                src="https://images.unsplash.com/photo-1570525828453-294b308e2f07?q=80&w=1974&auto=format&fit=crop" 
                alt="Gau Seva" 
                className="w-full h-full object-cover"
              />
            </div>
          </FadeIn>
          
          <FadeIn direction="left" delay={0.2}>
            <div className="premium-card bg-white/50 backdrop-blur-sm">
              <h2 className="text-3xl font-bold text-red-900 mb-6 flex items-center gap-3">
                <Sun className="text-orange-600" size={32} />
                गौ सेवा का महत्व
              </h2>
              <p className="text-gray-700">
                सनातन धर्म में गौ सेवा को मोक्ष का मार्ग बताया गया है। शास्त्रों के अनुसार गौ माता के शरीर में 33 कोटि देवी-देवताओं का वास होता है। जो मनुष्य निस्वार्थ भाव से गौ माता की सेवा करता है, उसके जीवन के सभी कष्ट दूर हो जाते हैं।
              </p>
              <p className="text-gray-700">
                आज के समय में कई गोवंश सड़कों पर बेसहारा और बीमार अवस्था में भटकते हैं। हमारा संस्थान ऐसे गोवंश को आश्रय देकर उनके चारे, पानी और चिकित्सा की संपूर्ण व्यवस्था करता है।
              </p>
            </div>
          </FadeIn>
        </div>

        {/* 3. OUR EFFORTS */}
        <div className="text-center mb-12">
          <FadeIn direction="up">
            <h2 className="text-3xl font-bold text-red-900 mb-4">संस्थान के प्रयास</h2>
            <div className="w-24 h-1.5 bg-orange-500 mx-auto rounded-full mb-8"></div>
          </FadeIn>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          {[
            {
              title: "आश्रय एवं भोजन",
              desc: "बेसहारा गायों के लिए सुरक्षित गौशाला और पौष्टिक चारे (हरा चारा, भूसा, गुड़) की प्रतिदिन व्यवस्था।",
              icon: <Leaf className="text-red-800 w-8 h-8" />
            },
            {
              title: "चिकित्सा सेवा",
              desc: "बीमार और दुर्घटनाग्रस्त गोवंश के लिए 24/7 एम्बुलेंस सेवा और पशु चिकित्सकों द्वारा मुफ्त इलाज।",
              icon: <Stethoscope className="text-red-800 w-8 h-8" />
            },
            {
              title: "गौ संरक्षण जागरूकता",
              desc: "समाज में गौ माता के प्रति प्रेम और सम्मान जगाने के लिए समय-समय पर जागरूकता अभियान।",
              icon: <Heart className="text-red-800 w-8 h-8" />
            }
          ].map((item, index) => (
            <FadeIn key={index} delay={index * 0.1} direction="up">
              <div className="premium-card text-center h-full flex flex-col border border-orange-100">
                <div className="w-20 h-20 bg-orange-50 rounded-full flex items-center justify-center mx-auto mb-6 border border-orange-200">
                  {item.icon}
                </div>
                <h3 className="text-xl font-bold text-red-900 mb-4">{item.title}</h3>
                <p className="flex-grow text-gray-700">{item.desc}</p>
              </div>
            </FadeIn>
          ))}
        </div>

        {/* 4. DONATION CARDS SECTION - Soft warm orange container */}
        <FadeIn direction="up">
          <div className="bg-orange-50 rounded-[3rem] p-8 md:p-14 shadow-xl border border-orange-200 relative overflow-hidden">
            
            <div className="absolute top-0 right-0 p-10 opacity-10 pointer-events-none">
              <HandHeart size={300} className="text-orange-400" />
            </div>
            
            <div className="relative z-10">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-red-900 mb-4">गौ सेवा में अपना योगदान दें</h2>
                <p className="text-gray-700 text-lg">आपके द्वारा दिया गया चारा एक बेसहारा गौ माता का जीवन बचा सकता है।</p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                
                {/* Card 1 */}
                <div className="bg-white rounded-3xl p-8 shadow-lg text-center flex flex-col transform transition hover:scale-105 border border-gray-100">
                  <h3 className="text-xl font-bold text-red-900 mb-3">एक दिन का चारा</h3>
                  <p className="text-sm text-gray-600 mb-6 flex-grow">गौशाला की सभी गायों के लिए एक दिन के पौष्टिक चारे की व्यवस्था।</p>
                  <p className="text-3xl font-extrabold text-gray-900 mb-6">₹ 2,100</p>
                  <Link href="/donate?cause=gau-seva-fodder" className="block w-full bg-orange-600 hover:bg-orange-700 text-white font-bold py-3.5 rounded-full transition-colors shadow-md">
                    दान करें
                  </Link>
                </div>

                {/* Card 2 (Highlighted) */}
                <div className="bg-[#FFF8E7] rounded-3xl p-8 shadow-xl text-center flex flex-col relative transform md:-translate-y-4 border-2 border-orange-500 transition hover:scale-105">
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-orange-600 text-white text-sm font-bold px-6 py-1.5 rounded-full shadow-md">
                    विशेष सेवा
                  </div>
                  <h3 className="text-xl font-bold text-red-900 mb-3 mt-2">गौ माता गोद लें</h3>
                  <p className="text-sm text-gray-600 mb-6 flex-grow">एक गाय के पूरे वर्ष के भरण-पोषण और चिकित्सा का संकल्प।</p>
                  <p className="text-3xl font-extrabold text-gray-900 mb-6">₹ 11,000 <span className="text-lg text-gray-500 font-medium">/ वर्ष</span></p>
                  <Link href="/donate?cause=gau-seva-adopt" className="block w-full bg-red-800 hover:bg-red-900 text-white font-bold py-3.5 rounded-full transition-colors shadow-lg">
                    गोद लें
                  </Link>
                </div>

                {/* Card 3 */}
                <div className="bg-white rounded-3xl p-8 shadow-lg text-center flex flex-col transform transition hover:scale-105 border border-gray-100">
                  <h3 className="text-xl font-bold text-red-900 mb-3">चिकित्सा सेवा</h3>
                  <p className="text-sm text-gray-600 mb-6 flex-grow">बीमार और दुर्घटनाग्रस्त गोवंश की औषधियों हेतु योगदान।</p>
                  <p className="text-3xl font-extrabold text-gray-900 mb-6">₹ 5,100</p>
                  <Link href="/donate?cause=gau-seva-medical" className="block w-full bg-orange-600 hover:bg-orange-700 text-white font-bold py-3.5 rounded-full transition-colors shadow-md">
                    दान करें
                  </Link>
                </div>

              </div>
            </div>
          </div>
        </FadeIn>

      </div>
    </div>
  );
}