import Link from 'next/link';
import { Heart, Home, ArrowRight } from 'lucide-react';

export default function SevaShowcase() {
  const sevas = [
    {
      title: "गौ सेवा (Gau Seva)",
      desc: "Protecting and serving our sacred cows with love, shelter, and medical care in our dedicated Gaushala.",
      href: "/seva/gau-seva",
      icon: <Heart className="text-red-600" size={32} />,
      bg: "bg-orange-50",
      border: "border-orange-200"
    },
    {
      title: "वृद्धाश्रम (Old Age Home)",
      desc: "Providing a dignified, peaceful, and loving environment for the elderly to live their golden years with joy.",
      href: "/seva/old-age-home",
      icon: <Home className="text-orange-600" size={32} />,
      bg: "bg-red-50",
      border: "border-red-200"
    }
  ];

  return (
    <section className="space-y-12">
      <div className="text-center max-w-3xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-black text-red-900 mb-4">हमारी सेवा गतिविधियाँ</h2>
        <p className="text-gray-600 font-medium">Shri Radha Rani Seva Sansthan is dedicated to the service of all living beings.</p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-10">
        {sevas.map((seva) => (
          <div key={seva.title} className={`${seva.bg} ${seva.border} p-8 md:p-12 rounded-[2.5rem] border-2 shadow-sm hover:shadow-xl transition-all group`}>
            <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center mb-8 shadow-inner">
              {seva.icon}
            </div>
            <h3 className="text-2xl md:text-3xl font-bold text-slate-800 mb-4">{seva.title}</h3>
            <p className="text-gray-600 mb-8 leading-relaxed text-lg">{seva.desc}</p>
            <Link 
              href={seva.href} 
              className="inline-flex items-center gap-2 text-red-900 font-black text-lg group-hover:gap-4 transition-all"
            >
              अधिक जानकारी <ArrowRight size={20} />
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
}