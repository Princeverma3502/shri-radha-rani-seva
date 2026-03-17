import Link from "next/link";
import { ArrowRight, BookOpen, Heart, Users, Sun } from "lucide-react";
import FadeIn from "../../components/animations/FadeIn";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      
      {/* HERO SECTION */}
      <section className="relative w-full h-[85vh] flex items-center justify-center overflow-hidden bg-spiritual-dark">
        {/* Placeholder for Background Image/Video */}
        <div className="absolute inset-0 bg-gradient-to-r from-spiritual-maroon/90 to-spiritual-dark/80 z-10" />
        <div 
          className="absolute inset-0 bg-cover bg-center z-0 opacity-50" 
          style={{ backgroundImage: "url('https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?q=80&w=2070&auto=format&fit=crop')" }} 
        />
        
        <div className="relative z-20 text-center px-4 max-w-5xl mx-auto">
          <FadeIn direction="up">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 drop-shadow-lg leading-tight">
              श्री राधा रानी सेवा संस्थान में <br/>
              <span className="text-spiritual-gold">आपका स्वागत है</span>
            </h1>
          </FadeIn>
          
          <FadeIn direction="up" delay={0.2}>
            <p className="text-lg md:text-2xl text-gray-200 mb-10 max-w-3xl mx-auto drop-shadow-md">
              श्रीमद् भागवत कथा, गौ सेवा, और समाज कल्याण के माध्यम से धर्म और मानवता की सेवा।
            </p>
          </FadeIn>
          
          <FadeIn direction="up" delay={0.4} className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link href="/events" className="bg-spiritual-saffron hover:bg-spiritual-deepSaffron text-white text-lg font-semibold px-8 py-4 rounded-full shadow-xl transition-all hover:scale-105 flex items-center gap-2 w-full sm:w-auto justify-center">
              आगामी कथाएं देखें
              <ArrowRight size={20} />
            </Link>
            <Link href="/donate" className="bg-white hover:bg-gray-100 text-spiritual-maroon text-lg font-semibold px-8 py-4 rounded-full shadow-xl transition-all hover:scale-105 w-full sm:w-auto justify-center flex">
              गौ माता के लिए दान करें
            </Link>
          </FadeIn>
        </div>
      </section>

      {/* SEVA PILLARS SECTION */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full">
        <FadeIn direction="up">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-spiritual-maroon mb-4">हमारी प्रमुख सेवाएं</h2>
            <div className="w-24 h-1 bg-spiritual-saffron mx-auto rounded-full mb-4"></div>
            <p className="text-gray-600 max-w-2xl mx-auto">संस्थान द्वारा समाज और धर्म के उत्थान के लिए निरंतर किए जा रहे कार्य।</p>
          </div>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            { title: "गौ सेवा", desc: "बीमार एवं बेसहारा गौ माताओं का संरक्षण एवं चिकित्सा।", icon: <Heart className="text-spiritual-saffron w-10 h-10 mb-4" />, link: "/seva/gau-seva" },
            { title: "श्रीमद् भागवत कथा", desc: "पूज्य श्री मृदुल कृष्ण शास्त्री जी द्वारा संगीतमय कथा का आयोजन।", icon: <BookOpen className="text-spiritual-saffron w-10 h-10 mb-4" />, link: "/events" },
            { title: "वृद्धाश्रम सेवा", desc: "बुजुर्गों के लिए भोजन, वस्त्र और चिकित्सा की व्यवस्था।", icon: <Users className="text-spiritual-saffron w-10 h-10 mb-4" />, link: "/seva/old-age-home" },
            { title: "सीता-राम विवाह", desc: "निर्धन कन्याओं का विवाह एवं सामाजिक सहयोग।", icon: <Sun className="text-spiritual-saffron w-10 h-10 mb-4" />, link: "/events" },
          ].map((item, index) => (
            <FadeIn key={index} delay={index * 0.1} direction="up">
              <div className="bg-white p-8 rounded-2xl shadow-lg border border-spiritual-cream hover:border-spiritual-saffron/50 transition-colors h-full flex flex-col items-center text-center group">
                <div className="group-hover:scale-110 transition-transform duration-300">
                  {item.icon}
                </div>
                <h3 className="text-xl font-bold text-spiritual-dark mb-3">{item.title}</h3>
                <p className="text-gray-600 mb-6 flex-grow">{item.desc}</p>
                <Link href={item.link} className="text-spiritual-deepSaffron font-semibold inline-flex items-center gap-1 hover:gap-2 transition-all">
                  और जानें <ArrowRight size={16} />
                </Link>
              </div>
            </FadeIn>
          ))}
        </div>
      </section>

    </div>
  );
}