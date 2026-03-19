import Link from "next/link";
import { Mail, Phone, MapPin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-red-900 pt-16 pb-8 border-t-8 border-orange-500">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          
          {/* Brand & About */}
          <div>
            <h3 className="text-2xl font-extrabold !text-white mb-6 flex items-center gap-3">
              <img 
                src="/assets/icons/logo.png" 
                alt="Logo" 
                className="w-10 h-10 rounded-full border border-orange-400 object-contain bg-white"
              />
              श्री राधा रानी सेवा संस्थान (रजि०)
            </h3>
            <p className="!text-white font-medium leading-relaxed">
              हमारा संकल्प बेसहारा गोवंश और असहाय बुजुर्गों को एक सम्मानजनक, सुरक्षित और प्रेमपूर्ण जीवन प्रदान करना है। एक पंजीकृत संस्था के रूप में, हम पूरी पारदर्शिता के साथ समाज सेवा के लिए प्रतिबद्ध हैं।
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xl font-bold !text-white mb-6">त्वरित लिंक (Links)</h4>
            <ul className="space-y-3 font-medium">
              <li><Link href="/about" className="block !text-gray-200 hover:!text-white transition-colors">हमारे बारे में (About Us)</Link></li>
              <li><Link href="/seva/gau-seva" className="block !text-gray-200 hover:!text-white transition-colors">गौ सेवा (Gau Seva)</Link></li>
              <li><Link href="/seva/old-age-home" className="block !text-gray-200 hover:!text-white transition-colors">वृद्धाश्रम (Old Age Home)</Link></li>
              <li><Link href="/donate" className="block !text-orange-300 font-bold hover:!text-white transition-colors">दान करें (Donate Now)</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-xl font-bold !text-white mb-6">संपर्क करें (Contact)</h4>
            <ul className="space-y-4 font-medium">
              <li className="flex items-start gap-3">
                <MapPin className="!text-orange-400 shrink-0 mt-1" size={20} />
                <span className="!text-gray-200">
                  श्री राधा रानी सेवा संस्थान (रजि०),<br />
                  गोरखपुर, उत्तर प्रदेश, भारत
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="!text-orange-400 shrink-0" size={20} />
                <span className="!text-gray-200">+91 9005844342</span> {/* UPDATE YOUR PHONE NO HERE */}
              </li>
              <li className="flex items-center gap-3">
                <Mail className="!text-orange-400 shrink-0" size={20} />
                <span className="!text-gray-200">shreeradharanisewasansthan@gmail.com</span> {/* UPDATE YOUR EMAIL HERE */}
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-red-800 pt-8 text-center text-sm font-medium">
          <p className="!text-gray-300">© {new Date().getFullYear()} Shri Radha Rani Seva Sansthan, Gorakhpur. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}