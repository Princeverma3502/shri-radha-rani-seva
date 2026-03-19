import { Heart, Home, ShieldCheck, Users, Milestone, Eye } from "lucide-react";
import Image from "next/image";
import FadeIn from "../../../components/animations/FadeIn";

const teamMembers = [
  { name: "श्री अजय शर्मा", role: "संस्थापक और अध्यक्ष", image: "https://placehold.co/400x400/EBF4FF/333?text=अजय" },
  { name: "श्रीमती सुनीता देवी", role: "मुख्य प्रबंधक (गौशाला)", image: "https://placehold.co/400x400/EBF4FF/333?text=सुनीता" },
  { name: "श्री विकास गुप्ता", role: "मुख्य प्रबंधक (वृद्धाश्रम)", image: "https://placehold.co/400x400/EBF4FF/333?text=विकास" },
  { name: "डॉ. रमेश પટેલ", role: "मुख्य पशु चिकित्सक", image: "https://placehold.co/400x400/EBF4FF/333?text=रमेश" },
];

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-[#FFFCF5]">
      {/* Hero Header */}
      <div className="py-20 bg-red-900 text-center border-b-8 border-orange-500 px-4">
        <FadeIn direction="up">
          <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-4">हमारे बारे में (About Us)</h1>
          <p className="text-xl text-orange-100 max-w-3xl mx-auto font-medium">
            श्री राधा रानी सेवा संस्थान: गौ सेवा और मानवता की सेवा के लिए समर्पित।
          </p>
        </FadeIn>
      </div>

      <div className="max-w-6xl mx-auto px-6 py-16">
        {/* Our Story Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center mb-24">
          <FadeIn direction="right">
            <div>
              <h2 className="text-3xl font-bold text-red-900 mb-6">हमारी कहानी (Our Story)</h2>
              <p className="text-gray-700 leading-relaxed mb-6 text-lg">
                श्री राधा रानी सेवा संस्थान की स्थापना एक पावन संकल्प के साथ की गई थी—कि कोई भी गौवंश बेसहारा न रहे और कोई भी बुजुर्ग अकेलापन न महसूस करे। हम ब्रज की पवित्र भूमि की प्रेरणा से संचालित हैं।
              </p>
              <p className="text-gray-700 leading-relaxed text-lg">
                वर्तमान में हम 100+ गायों की सेवा कर रहे हैं और हमारे वृद्धाश्रम में अनेक बुजुर्गों को परिवार जैसा स्नेह और आश्रय मिल रहा है।
              </p>
            </div>
          </FadeIn>
          <FadeIn direction="left">
            <div className="relative">
              <div className="bg-orange-200 rounded-[3rem] w-full h-80 overflow-hidden shadow-2xl rotate-3">
                <Image 
                  src="https://placehold.co/800x600/FEF2E2/333?text=गौशाला+फोटो"
                  alt="Gau Seva at the Sansthan"
                  layout="fill"
                  objectFit="cover"
                  className="transform -rotate-3 scale-110"
                />
              </div>
            </div>
          </FadeIn>
        </div>

        {/* Our Vision Section */}
        <FadeIn direction="up">
          <div className="text-center mb-20">
            <h2 className="text-4xl font-bold text-red-900 mb-4">हमारा दृष्टिकोण (Our Vision)</h2>
            <div className="w-24 h-1.5 bg-orange-500 mx-auto rounded-full mb-6"></div>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              हम एक ऐसे समाज की कल्पना करते हैं जहाँ हर जीव का सम्मान हो, जहाँ कोई भी बेसहारा और अकेला न हो। हमारा दृष्टिकोण सिर्फ आश्रय प्रदान करना नहीं, बल्कि एक प्रेमपूर्ण, सम्मानित और आत्मनिर्भर समुदाय का निर्माण करना है।
            </p>
          </div>
        </FadeIn>

        {/* Mission Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24">
          {/* Card 1 */}
          <FadeIn direction="up" delay={0}>
            <div className="bg-white p-8 rounded-3xl shadow-lg border-b-4 border-red-900 h-full">
              <div className="bg-red-100 w-12 h-12 rounded-xl flex items-center justify-center mb-6 text-red-900">
                <Heart size={28} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">हमारा लक्ष्य (Mission)</h3>
              <p className="text-gray-600">प्रत्येक असहाय गाय को आश्रय, चिकित्सा और प्रेम प्रदान करना।</p>
            </div>
          </FadeIn>
          {/* Card 2 */}
          <FadeIn direction="up" delay={0.1}>
            <div className="bg-white p-8 rounded-3xl shadow-lg border-b-4 border-orange-500 h-full">
              <div className="bg-orange-100 w-12 h-12 rounded-xl flex items-center justify-center mb-6 text-orange-600">
                <Home size={28} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">वृद्धाश्रम (Old Age Home)</h3>
              <p className="text-gray-600">बुजुर्गों को सम्मानजनक जीवन और स्वास्थ्य सेवाएँ सुनिश्चित करना।</p>
            </div>
          </FadeIn>
          {/* Card 3 */}
          <FadeIn direction="up" delay={0.2}>
            <div className="bg-white p-8 rounded-3xl shadow-lg border-b-4 border-green-600 h-full">
              <div className="bg-green-100 w-12 h-12 rounded-xl flex items-center justify-center mb-6 text-green-700">
                <ShieldCheck size={28} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">पारदर्शिता (Transparency)</h3>
              <p className="text-gray-600">आपके द्वारा दिए गए दान का एक-एक पैसा सीधे सेवा कार्यों में उपयोग होता है।</p>
            </div>
          </FadeIn>
        </div>

        {/* Our Team Section */}
        <div className="text-center mb-24">
          <FadeIn direction="up">
            <h2 className="text-4xl font-bold text-red-900 mb-4">हमारी टीम (Our Team)</h2>
            <div className="w-24 h-1.5 bg-orange-500 mx-auto rounded-full mb-6"></div>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              हमारी टीम उन समर्पित लोगों से बनी है जो निस्वार्थ भाव से सेवा के लिए प्रतिबद्ध हैं।
            </p>
          </FadeIn>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <FadeIn key={index} direction="up" delay={index * 0.1}>
              <div className="bg-white p-6 rounded-3xl shadow-lg text-center h-full transform transition hover:-translate-y-2">
                <div className="relative w-32 h-32 mx-auto mb-4">
                  <Image
                    src={member.image}
                    alt={member.name}
                    layout="fill"
                    objectFit="cover"
                    className="rounded-full border-4 border-orange-200"
                  />
                </div>
                <h4 className="text-xl font-bold text-red-900">{member.name}</h4>
                <p className="text-orange-600 font-semibold">{member.role}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>

      {/* Trust Banner */}
      <div className="bg-orange-600 py-12 mt-12">
        <FadeIn direction="up">
          <div className="max-w-4xl mx-auto text-center px-4">
            <h2 className="text-3xl font-bold text-white mb-6">क्या आप हमारे परिवार का हिस्सा बनना चाहते हैं?</h2>
            <a href="/donate" className="inline-block bg-white text-orange-600 px-10 py-4 rounded-full font-extrabold text-lg shadow-xl hover:bg-orange-50 transition-all">
              आज ही दान करें (Donate Now)
            </a>
          </div>
        </FadeIn>
      </div>
    </div>
  );
}