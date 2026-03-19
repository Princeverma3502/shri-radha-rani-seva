import Link from "next/link";
import { Heart, Home, Stethoscope, Sun, HandHeart } from "lucide-react";
import FadeIn from "../../../../components/animations/FadeIn"; 

export default function OldAgeHomePage() {
  return (
    <div className="min-h-screen pb-20">
      
      {/* 1. HERO BANNER - Removed the blackish overlay! Now using a warm, light overlay with DARK text */}
      <div className="relative py-24 border-b-4 border-orange-500 overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1573497619114-573531b7961b?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center opacity-15" />
        <div className="absolute inset-0 bg-gradient-to-b from-orange-100/90 to-[#FFFCF5]/95" /> 
        
        <div className="max-w-4xl mx-auto px-4 relative z-10 text-center">
          <FadeIn direction="up">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-red-900 mb-6">
              वृद्धाश्रम सेवा एवं संरक्षण
            </h1>
            <p className="text-xl text-gray-800 leading-relaxed max-w-2xl mx-auto font-medium">
              "मातृदेवो भव, पितृदेवो भव" - बुजुर्गों की सेवा ईश्वर की सर्वोच्च सेवा है। 
              श्री राधा रानी सेवा संस्थान असहाय बुजुर्गों को एक सम्मानजनक और प्रेमपूर्ण जीवन देने के लिए समर्पित है।
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
                src="https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?q=80&w=2070&auto=format&fit=crop" 
                alt="Old Age Home" 
                className="w-full h-full object-cover"
              />
            </div>
          </FadeIn>
          
          <FadeIn direction="left" delay={0.2}>
            <div className="premium-card bg-white/50 backdrop-blur-sm">
              <h2 className="text-3xl font-bold text-red-900 mb-6 flex items-center gap-3">
                <Sun className="text-orange-600" size={32} />
                वृद्धाश्रम सेवा का महत्व
              </h2>
              <p className="text-gray-700">
                भारतीय संस्कृति में बुजुर्गों का स्थान सर्वोपरि है। वे हमारे मार्गदर्शक और परिवार की नींव हैं। जीवन के अंतिम पड़ाव पर कई बुजुर्ग परिस्थितियोंवश अकेले रह जाते हैं, जिन्हें स्नेह और सम्मान की अत्यंत आवश्यकता होती है।
              </p>
              <p className="text-gray-700">
                हमारा संस्थान ऐसे असहाय बुजुर्गों के लिए "घर" जैसा वातावरण प्रदान करता है। हम केवल आश्रय ही नहीं, बल्कि एक नया "परिवार" देते हैं, जहाँ वे सम्मानपूर्वक और शांतिपूर्ण तरीके से अपना जीवन व्यतीत कर सकें।
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
              desc: "सुरक्षित और स्वच्छ आवास, पौष्टिक और सुपाच्य सात्विक भोजन की प्रतिदिन व्यवस्था।",
              icon: <Home className="text-red-800 w-8 h-8" />
            },
            {
              title: "चिकित्सा एवं देखभाल",
              desc: "नियमित स्वास्थ्य जांच, 24/7 चिकित्सा सहायता और अनुभवी देखभालकर्ताओं द्वारा स्नेहपूर्ण सेवा।",
              icon: <Stethoscope className="text-red-800 w-8 h-8" />
            },
            {
              title: "स्नेह एवं सम्मान",
              desc: "एक परिवार जैसा प्रेमपूर्ण वातावरण, जहाँ बुजुर्गों के सम्मान और स्वाभिमान का पूर्ण ध्यान रखा जाता है।",
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

        {/* 4. DONATION CARDS SECTION - Replaced blackish background with soft warm orange */}
        <FadeIn direction="up">
          <div className="bg-orange-50 rounded-[3rem] p-8 md:p-14 shadow-xl border border-orange-200 relative overflow-hidden">
            
            <div className="absolute top-0 right-0 p-10 opacity-10 pointer-events-none">
              <HandHeart size={300} className="text-orange-400" />
            </div>
            
            <div className="relative z-10">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-red-900 mb-4">वृद्धाश्रम सेवा में अपना योगदान दें</h2>
                <p className="text-gray-700 text-lg">आपके एक छोटे से सहयोग से किसी बुजुर्ग के जीवन में बड़ा बदलाव आ सकता है।</p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                
                {/* Card 1 */}
                <div className="bg-white rounded-3xl p-8 shadow-lg text-center flex flex-col transform transition hover:scale-105 border border-gray-100">
                  <h3 className="text-xl font-bold text-red-900 mb-3">एक दिन का भोजन</h3>
                  <p className="text-sm text-gray-600 mb-6 flex-grow">आश्रम के सभी बुजुर्गों के लिए एक दिन के सात्विक भोजन की व्यवस्था।</p>
                  <p className="text-3xl font-extrabold text-gray-900 mb-6">₹ 3,100</p>
                  {/* High Contrast Button */}
                  <Link href="/donate?cause=old-age-home-meals" className="block w-full bg-orange-600 hover:bg-orange-700 text-white font-bold py-3.5 rounded-full transition-colors shadow-md">
                    दान करें
                  </Link>
                </div>

                {/* Card 2 (Highlighted) */}
                <div className="bg-[#FFF8E7] rounded-3xl p-8 shadow-xl text-center flex flex-col relative transform md:-translate-y-4 border-2 border-orange-500 transition hover:scale-105">
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-orange-600 text-white text-sm font-bold px-6 py-1.5 rounded-full shadow-md">
                    विशेष सेवा
                  </div>
                  <h3 className="text-xl font-bold text-red-900 mb-3 mt-2">एक बुजुर्ग को गोद लें</h3>
                  <p className="text-sm text-gray-600 mb-6 flex-grow">एक बुजुर्ग के पूरे वर्ष के भरण-पोषण और देखभाल का संकल्प।</p>
                  <p className="text-3xl font-extrabold text-gray-900 mb-6">₹ 5,100 <span className="text-lg text-gray-500 font-medium">/ माह</span></p>
                  {/* High Contrast Button */}
                  <Link href="/donate?cause=old-age-home-adopt" className="block w-full bg-red-800 hover:bg-red-900 text-white font-bold py-3.5 rounded-full transition-colors shadow-lg">
                    गोद लें
                  </Link>
                </div>

                {/* Card 3 */}
                <div className="bg-white rounded-3xl p-8 shadow-lg text-center flex flex-col transform transition hover:scale-105 border border-gray-100">
                  <h3 className="text-xl font-bold text-red-900 mb-3">दवाइयां एवं स्वास्थ्य</h3>
                  <p className="text-sm text-gray-600 mb-6 flex-grow">बुजुर्गों के नियमित स्वास्थ्य जांच और दवाओं हेतु योगदान।</p>
                  <p className="text-3xl font-extrabold text-gray-900 mb-6">₹ 2,100</p>
                  {/* High Contrast Button */}
                  <Link href="/donate?cause=old-age-home-medical" className="block w-full bg-orange-600 hover:bg-orange-700 text-white font-bold py-3.5 rounded-full transition-colors shadow-md">
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