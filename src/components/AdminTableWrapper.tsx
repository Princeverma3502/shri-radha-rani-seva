"use client";
import { useState } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import { Search, CheckCircle, Clock, Download, Calendar } from "lucide-react";
import * as XLSX from "xlsx";

export default function AdminTableWrapper({ initialData }: { initialData: any[] }) {
  const [search, setSearch] = useState("");
  const searchParams = useSearchParams();
  const router = useRouter();

  const handleDateFilter = (filter: string) => {
    const params = new URLSearchParams(searchParams.toString());
    params.set("filter", filter);
    router.push(`?${params.toString()}`);
  };

  const handleCustomDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    const params = new URLSearchParams(searchParams.toString());
    params.set(name, value);
    router.push(`?${params.toString()}`);
  };

  const filtered = initialData.filter(d => 
    d.donorName?.toLowerCase().includes(search.toLowerCase()) || 
    d.phone?.includes(search)
  );

  const exportToExcel = () => {
    const ws = XLSX.utils.json_to_sheet(filtered);
    const wb = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, "Donations");
    XLSX.writeFile(wb, "donations.xlsx");
  };

  return (
    <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
      <div className="p-4 bg-gray-50/50 flex flex-col md:flex-row justify-between items-center gap-4">
        <div className="relative max-w-md w-full">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
          <input 
            type="text" placeholder="नाम या नंबर से खोजें..." 
            className="w-full pl-10 pr-4 py-2 text-sm border rounded-xl"
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
        <div className="flex items-center gap-2">
            <button onClick={() => handleDateFilter("this-month")} className="text-sm font-bold bg-gray-200 text-gray-700 px-3 py-1 rounded-lg">This Month</button>
            <button onClick={() => handleDateFilter("last-7-days")} className="text-sm font-bold bg-gray-200 text-gray-700 px-3 py-1 rounded-lg">Last 7 Days</button>
            <div className="flex items-center gap-2">
                <input type="date" name="from" onChange={handleCustomDateChange} className="text-sm border rounded-lg p-1"/>
                <input type="date" name="to" onChange={handleCustomDateChange} className="text-sm border rounded-lg p-1"/>
            </div>
        </div>
        <button 
          onClick={exportToExcel}
          className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-xl font-bold text-sm flex items-center gap-2"
        >
          <Download size={16} />
          Export to Excel
        </button>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full text-left">
          <thead className="bg-gray-50 text-xs uppercase text-gray-500">
            <tr>
              <th className="px-6 py-4">Donor</th>
              <th className="px-6 py-4">Amount</th>
              <th className="px-6 py-4">Status</th>
              <th className="px-6 py-4">Payment ID</th>
              <th className="px-6 py-4">Date</th>
            </tr>
          </thead>
          <tbody className="divide-y">
            {filtered.map((d) => (
              <tr key={d.id} className="hover:bg-gray-50">
                <td className="px-6 py-4">
                    <div className="font-bold">{d.donorName}</div>
                    <div className="text-xs text-gray-400">{d.phone}</div>
                </td>
                <td className="px-6 py-4 font-bold text-green-600">₹{d.amount}</td>
                <td className="px-6 py-4">
                    {d.paymentStatus === "SUCCESS" ? 
                        <span className="text-green-600 flex items-center gap-1 text-sm"><CheckCircle size={14}/> Success</span> : 
                        <span className="text-orange-500 flex items-center gap-1 text-sm"><Clock size={14}/> Pending</span>
                    }
                </td>
                <td className="px-6 py-4 font-mono text-xs text-gray-400">{d.razorpayPaymentId || "N/A"}</td>
                <td className="px-6 py-4 text-xs text-gray-500">{new Date(d.createdAt).toLocaleDateString()}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}