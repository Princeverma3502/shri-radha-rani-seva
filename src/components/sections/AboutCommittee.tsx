import { User, ShieldCheck, Mail } from "lucide-react";
import Link from "next/link";

export default function AboutCommittee() {
  const members = [
    { name: "अध्यक्ष (President)", role: "Chief Organizer", icon: <ShieldCheck size={24} /> },
    { name: "सचिव (Secretary)", role: "Operations Head", icon: <User size={24} /> },
    { name: "कोषाध्यक्ष (Treasurer)", role: "Finance Manager", icon: <Mail size={24} /> },
  ];

  return (
    <section className="py-12">
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
        <div className="max-w-xl">
          <h2 className="text-3xl md:text-5xl font-black text-slate-900 mb-4">हमारी प्रबंधन समिति</h2>
          <p className="text-gray-600 text-lg">Our dedicated committee members working tirelessly for the welfare of society.</p>
        </div>
        <Link 
          href="/committee" 
          className="text-red-900 font-black border-b-2 border-red-900 pb-1 hover:text-red-700 hover:border-red-700 transition-colors inline-block"
        >
          View Full Committee →
        </Link>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {members.map((member, index) => (
          <div 
            key={index} 
            className="bg-white p-8 rounded-3xl border border-slate-100 shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300 group"
          >
            <div className="w-14 h-14 bg-orange-50 text-orange-600 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-red-900 group-hover:text-white transition-colors">
              {member.icon}
            </div>
            <h3 className="text-xl font-black text-slate-900 mb-1">{member.name}</h3>
            <p className="text-gray-500 font-medium mb-4">{member.role}</p>
            <div className="w-12 h-1 bg-orange-100 rounded-full group-hover:w-full group-hover:bg-red-900 transition-all duration-500"></div>
          </div>
        ))}
      </div>
    </section>
  );
}