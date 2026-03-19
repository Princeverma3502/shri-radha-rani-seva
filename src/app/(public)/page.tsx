import Link from "next/link";
import { Heart, Home, Leaf, HandHeart, Users, Sun } from "lucide-react";
import FadeIn from "../../components/animations/FadeIn"; // Adjust path if your FadeIn is somewhere else

export default function HomePage() {
  return (
    <div className="min-h-screen pb-20">
      
      {/* 1. MAIN HERO SECTION - Bright, Warm, and Welcoming */}
      <div className="relative py-32 lg:py-48 border-b-4 border-orange-500 overflow-hidden flex items-center justify-center text-center">
        {/* Subtle background image */}
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1604603616641-073c68dfb7d8?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center opacity-15" />
        {/* Warm light overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-orange-100/90 to-[#FFFCF5]/95" /> 
        
        <div className="max-w-5xl mx-auto px-4 relative z-10">
          <FadeIn direction="up">
            <div className="inline-flex items-center justify-center px-6 py-2 rounded-full bg-orange-100 border border-orange-300 text-orange-800 font-bold mb-8 shadow-sm">
              <Sun className="w-5 h-5 mr-2" />
              श्री राधा रानी सेवा संस्थान में आपका स्वागत है
            </div>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-red-900 mb-8 leading-tight">
              निस्वार्थ सेवा ही <br className="hidden md:block" /> 
              <span className="text-orange-600">सच्चा धर्म है</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-800 max-w-3xl mx-auto font-medium mb-10 leading-relaxed">
              हमारा संकल्प बेसहारा गोवंश और असहाय बुजुर्गों को एक सम्मानजनक, सुरक्षित और प्रेमपूर्ण जीवन प्रदान करना है।
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link href="/donate" className="w-full sm:w-auto px-8 py-4 bg-orange-600 hover:bg-orange-700 text-white text-lg font-bold rounded-full shadow-lg transition-transform hover:-translate-y-1 flex items-center justify-center gap-2">
                <HandHeart size={24} />
                अभी दान करें
              </Link>
              <Link href="/about" className="w-full sm:w-auto px-8 py-4 bg-white hover:bg-orange-50 text-red-900 text-lg font-bold rounded-full shadow-md border-2 border-orange-200 transition-transform hover:-translate-y-1">
                हमारे बारे में जानें
              </Link>
            </div>
          </FadeIn>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-20">
        
        {/* 2. INTRODUCTION QUICK STATS */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24 -mt-32 relative z-20">
          {[
            { title: "गौ माता संरक्षित", count: "500+", icon: <Leaf className="w-10 h-10 text-orange-600" /> },
            { title: "बुजुर्गों को आश्रय", count: "150+", icon: <Users className="w-10 h-10 text-orange-600" /> },
            { title: "स्वयंसेवक जुड़े", count: "1000+", icon: <Heart className="w-10 h-10 text-orange-600" /> }
          ].map((stat, index) => (
            <FadeIn key={index} delay={index * 0.1} direction="up">
              <div className="bg-white rounded-3xl p-8 shadow-xl border border-orange-100 flex items-center gap-6 transform transition hover:-translate-y-2">
                <div className="p-4 bg-orange-50 rounded-2xl border border-orange-200">
                  {stat.icon}
                </div>
                <div>
                  <p className="text-3xl font-extrabold text-red-900">{stat.count}</p>
                  <p className="text-gray-600 font-medium">{stat.title}</p>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>

        {/* 3. OUR MAIN CAUSES (SEVA) */}
        <div className="text-center mb-16">
          <FadeIn direction="up">
            <h2 className="text-4xl font-bold text-red-900 mb-4">हमारे प्रमुख सेवा प्रकल्प</h2>
            <div className="w-24 h-1.5 bg-orange-500 mx-auto rounded-full mb-6"></div>
            <p className="text-lg text-gray-700 max-w-2xl mx-auto">
              हम समाज के उन वर्गों की सेवा के लिए समर्पित हैं जिन्हें हमारी सबसे अधिक आवश्यकता है।
            </p>
          </FadeIn>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-24">
          {/* Gau Seva Card */}
          <FadeIn direction="right">
            <div className="bg-white rounded-[2.5rem] overflow-hidden shadow-xl border border-orange-100 flex flex-col h-full group">
              <div className="h-64 overflow-hidden relative">
                <img 
                  src="https://images.unsplash.com/photo-1570525828453-294b308e2f07?q=80&w=1974&auto=format&fit=crop" 
                  alt="Gau Seva" 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full text-red-900 font-bold text-sm shadow-md flex items-center gap-2">
                  <Leaf size={16} className="text-orange-600" /> गौ सेवा
                </div>
              </div>
              <div className="p-8 flex flex-col flex-grow">
                <h3 className="text-2xl font-bold text-red-900 mb-4">गौ माता सेवा एवं संरक्षण</h3>
                <p className="text-gray-700 mb-8 flex-grow">
                  बेसहारा और बीमार गोवंश के लिए आश्रय, चारा और चिकित्सा की संपूर्ण व्यवस्था। शास्त्रों में गौ सेवा को सर्वोच्च धर्म माना गया है।
                </p>
                <Link href="/seva/gau-seva" className="inline-block text-center w-full bg-orange-50 hover:bg-orange-100 text-orange-800 border border-orange-200 font-bold py-3 rounded-xl transition-colors">
                  विस्तार से जानें (Learn More)
                </Link>
              </div>
            </div>
          </FadeIn>

          {/* Old Age Home Card */}
          <FadeIn direction="left">
            <div className="bg-white rounded-[2.5rem] overflow-hidden shadow-xl border border-orange-100 flex flex-col h-full group">
              <div className="h-64 overflow-hidden relative">
                <img 
                  src="https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?q=80&w=2070&auto=format&fit=crop" 
                  alt="Old Age Home" 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full text-red-900 font-bold text-sm shadow-md flex items-center gap-2">
                  <Home size={16} className="text-orange-600" /> वृद्धाश्रम
                </div>
              </div>
              <div className="p-8 flex flex-col flex-grow">
                <h3 className="text-2xl font-bold text-red-900 mb-4">वृद्धाश्रम सेवा एवं संरक्षण</h3>
                <p className="text-gray-700 mb-8 flex-grow">
                  असहाय बुजुर्गों को एक सम्मानजनक "घर" और "परिवार" जैसा वातावरण देना, जहाँ वे शांति और प्रेम के साथ अपना जीवन व्यतीत कर सकें।
                </p>
                <Link href="/seva/old-age-home" className="inline-block text-center w-full bg-orange-50 hover:bg-orange-100 text-orange-800 border border-orange-200 font-bold py-3 rounded-xl transition-colors">
                  विस्तार से जानें (Learn More)
                </Link>
              </div>
            </div>
          </FadeIn>
        </div>

        {/* 4. CALL TO ACTION (DONATE CTA) */}
        <FadeIn direction="up">
          <div className="bg-gradient-to-br from-orange-50 to-orange-100 rounded-[3rem] p-10 md:p-16 shadow-2xl border border-orange-200 text-center relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-full opacity-5 pointer-events-none flex justify-center items-center">
              <HandHeart size={400} className="text-orange-600" />
            </div>
            <div className="relative z-10 max-w-3xl mx-auto">
              <h2 className="text-4xl font-extrabold text-red-900 mb-6">आपके सहयोग की आवश्यकता है</h2>
              <p className="text-xl text-gray-800 mb-10">
                आपका एक छोटा सा योगदान किसी बेसहारा गोवंश या असहाय बुजुर्ग के जीवन में नई आशा की किरण ला सकता है। 
              </p>
              <Link href="/donate" className="inline-block px-10 py-5 bg-red-800 hover:bg-red-900 text-white text-xl font-bold rounded-full shadow-xl transition-transform hover:-translate-y-1">
                अभी अपना योगदान दें
              </Link>
            </div>
          </div>
        </FadeIn>

      </div>
    </div>
  );
}