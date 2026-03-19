"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { LogOut, Users, Heart, IndianRupee, Loader2 } from "lucide-react";

export default function AdminDashboard() {
  const router = useRouter();
  const [isAuthorized, setIsAuthorized] = useState(false);
  const [donors, setDonors] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  const fetchDonors = async () => {
    try {
      const res = await fetch("/api/admin/donors"); // Ensure you created this API route
      const data = await res.json();
      setDonors(data);
    } catch (err) {
      console.error("Fetch error:", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    const loginStatus = localStorage.getItem("isAdminLoggedIn");
    if (loginStatus !== "true") {
      router.push("/admin/login");
    } else {
      setIsAuthorized(true);
      fetchDonors();
    }
  }, [router]);

  const totalAmount = donors.reduce((acc, curr) => acc + Number(curr.amount), 0);

  if (!isAuthorized) return null;

  return (
    <div className="min-h-screen bg-gray-50 p-4 md:p-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-black text-red-900 uppercase">Admin Dashboard</h1>
          <button onClick={() => { localStorage.removeItem("isAdminLoggedIn"); router.push("/admin/login"); }} className="flex items-center gap-2 bg-white border-2 border-red-900 text-red-900 px-5 py-2 rounded-xl font-bold">
            <LogOut size={18} /> Logout
          </button>
        </div>

        {loading ? (
          <div className="flex justify-center py-20"><Loader2 className="animate-spin text-red-900" size={40} /></div>
        ) : (
          <>
            {/* Stats Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="bg-white p-6 rounded-3xl shadow-sm border-b-4 border-orange-500 flex items-center gap-4">
                <div className="bg-orange-100 p-3 rounded-2xl text-orange-600"><Users size={28} /></div>
                <div><p className="text-gray-400 font-bold text-[10px] tracking-widest uppercase">Total Donors</p><p className="text-3xl font-black text-gray-800">{donors.length}</p></div>
              </div>
              <div className="bg-white p-6 rounded-3xl shadow-sm border-b-4 border-red-700 flex items-center gap-4">
                <div className="bg-red-100 p-3 rounded-2xl text-red-700"><IndianRupee size={28} /></div>
                <div><p className="text-gray-400 font-bold text-[10px] tracking-widest uppercase">Total Collection</p><p className="text-3xl font-black text-gray-800">₹{totalAmount.toLocaleString('en-IN')}</p></div>
              </div>
              <div className="bg-white p-6 rounded-3xl shadow-sm border-b-4 border-green-600 flex items-center gap-4">
                <div className="bg-green-100 p-3 rounded-2xl text-green-600"><Heart size={28} /></div>
                <div><p className="text-gray-400 font-bold text-[10px] tracking-widest uppercase">Status</p><p className="text-3xl font-black text-gray-800">LIVE</p></div>
              </div>
            </div>

            {/* Table */}
            <div className="bg-white rounded-3xl shadow-xl overflow-hidden border border-gray-100">
              <div className="overflow-x-auto">
                <table className="w-full text-left">
                  <thead className="bg-gray-50 text-gray-500 text-[10px] uppercase">
                    <tr>
                      <th className="py-4 px-6">Name</th>
                      <th className="py-4 px-6">Amount</th>
                      <th className="py-4 px-6">Cause/Occasion</th>
                      <th className="py-4 px-6">Status</th>
                      <th className="py-4 px-6">Payment ID</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-50">
                    {donors.map((donor, idx) => (
                      <tr key={idx} className="hover:bg-orange-50/30 transition-colors">
                        <td className="py-4 px-6 font-bold text-gray-800">{donor.donorName}</td>
                        <td className="py-4 px-6 text-green-700 font-black">₹{donor.amount}</td>
                        <td className="py-4 px-6 text-gray-600 text-xs">{donor.cause}</td>
                        <td className="py-4 px-6">
                          <span className={`px-3 py-1 rounded-full text-[10px] font-bold ${donor.paymentStatus === 'SUCCESS' ? 'bg-green-100 text-green-700' : 'bg-yellow-100 text-yellow-700'}`}>
                            {donor.paymentStatus}
                          </span>
                        </td>
                        <td className="py-4 px-6 text-[10px] font-mono text-blue-500">{donor.paymentId || "Pending"}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
}