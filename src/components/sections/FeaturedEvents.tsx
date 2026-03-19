import Link from 'next/link';
import { Calendar, MapPin, ArrowRight } from 'lucide-react';

export default function FeaturedEvents() {
  return (
    <section className="bg-slate-900 rounded-[3rem] p-8 md:p-16 text-white relative overflow-hidden">
      <div className="relative z-10 flex flex-col lg:flex-row lg:items-center justify-between gap-10">
        <div className="max-w-2xl">
          <span className="bg-orange-500 text-white px-4 py-1 rounded-full text-sm font-bold uppercase tracking-wider mb-6 inline-block">
            Upcoming Event
          </span>
          <h2 className="text-3xl md:text-5xl font-black mb-6 leading-tight">
            श्रीमद् भागवत कथा <br/> <span className="text-orange-400">ज्ञान यज्ञ, वृंदावन</span>
          </h2>
          <div className="space-y-4 mb-8">
            <div className="flex items-center gap-3 text-gray-300">
              <Calendar className="text-orange-500" />
              <span>15 अक्टूबर - 21 अक्टूबर 2026</span>
            </div>
            <div className="flex items-center gap-3 text-gray-300">
              <MapPin className="text-orange-500" />
              <span>श्री राधा रानी मंदिर प्रांगण, वृंदावन</span>
            </div>
          </div>
          <Link 
            href="/events/shrimad-bhagwat-katha" 
            className="inline-flex items-center gap-3 bg-white text-slate-900 px-8 py-4 rounded-full font-black hover:bg-orange-400 hover:text-white transition-all shadow-lg"
          >
            यजमान बनें <ArrowRight size={20} />
          </Link>
        </div>
        <div className="hidden lg:block w-72 h-72 rounded-full border-8 border-orange-500/20 bg-orange-500/10 backdrop-blur-3xl animate-pulse"></div>
      </div>
    </section>
  );
}