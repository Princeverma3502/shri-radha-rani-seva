import Link from "next/link";
import { HeartHandshake, MapPin, Phone, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-spiritual-dark text-spiritual-cream pt-16 pb-8 border-t-4 border-spiritual-saffron">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          
          {/* About Column */}
          <div>
            <h3 className="text-2xl font-bold text-spiritual-saffron mb-4">श्री राधा रानी सेवा संस्थान</h3>
            <p className="text-gray-300 mb-6 leading-relaxed">
              समर्पित भाव से गौ सेवा, श्रीमद् भागवत कथा आयोजन, और समाज कल्याण (वृद्धाश्रम एवं नेत्रहीन सेवा) के लिए कार्यरत एक पंजीकृत संस्था।
            </p>
            <Link href="/donate" className="inline-flex items-center gap-2 bg-spiritual-saffron text-white px-4 py-2 rounded hover:bg-spiritual-deepSaffron transition">
              <HeartHandshake size={18} />
              सहयोग करें
            </Link>
          </div>

          {/* Quick Links Column */}
          <div>
            <h3 className="text-xl font-bold text-white mb-4 border-b border-gray-600 pb-2 inline-block">महत्वपूर्ण लिंक</h3>
            <ul className="space-y-3">
              <li><Link href="/about" className="text-gray-300 hover:text-spiritual-saffron transition">हमारे बारे में (About Us)</Link></li>
              <li><Link href="/seva/gau-seva" className="text-gray-300 hover:text-spiritual-saffron transition">गौ सेवा (Gau Seva)</Link></li>
              <li><Link href="/events" className="text-gray-300 hover:text-spiritual-saffron transition">आगामी कथाएं (Upcoming Kathas)</Link></li>
              <li><Link href="/jajmaan" className="text-gray-300 hover:text-spiritual-saffron transition">यजमान बनें (Become Jajmaan)</Link></li>
              <li><Link href="/committee" className="text-gray-300 hover:text-spiritual-saffron transition">समिति सदस्य (Committee)</Link></li>
            </ul>
          </div>

          {/* Contact Column */}
          <div>
            <h3 className="text-xl font-bold text-white mb-4 border-b border-gray-600 pb-2 inline-block">संपर्क करें</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-gray-300">
                <MapPin className="text-spiritual-saffron flex-shrink-0 mt-1" size={20} />
                <span>आपका पंजीकृत पता यहाँ आएगा (Your Registered Address Here)</span>
              </li>
              <li className="flex items-center gap-3 text-gray-300">
                <Phone className="text-spiritual-saffron flex-shrink-0" size={20} />
                <span>+91 98765 43210</span>
              </li>
              <li className="flex items-center gap-3 text-gray-300">
                <Mail className="text-spiritual-saffron flex-shrink-0" size={20} />
                <span>contact@radharaniseva.org</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-gray-400">
          <p>© {new Date().getFullYear()} Shri Radha Rani Seva Sansthan. All rights reserved.</p>
          <p className="mt-2 md:mt-0">Developed with Devotion.</p>
        </div>
      </div>
    </footer>
  );
}