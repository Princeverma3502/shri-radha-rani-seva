"use client";
import { Download } from "lucide-react";

export default function ExportCsvButton({ data }: { data: any[] }) {
  const exportToCSV = () => {
    const headers = ["Date", "Donor Name", "Phone", "Email", "Amount", "Status", "Cause"];
    const rows = data.map(d => [
      new Date(d.createdAt).toLocaleDateString(),
      d.donorName || "N/A",
      d.phone || "N/A",
      d.email || "N/A",
      d.amount || 0,
      d.paymentStatus || "PENDING",
      d.cause || "General"
    ]);
    
    let csvContent = "data:text/csv;charset=utf-8," 
      + headers.join(",") + "\n" 
      + rows.map(e => e.join(",")).join("\n");

    const encodedUri = encodeURI(csvContent);
    const link = document.createElement("a");
    link.setAttribute("href", encodedUri);
    link.setAttribute("download", `donations_report_${new Date().toLocaleDateString()}.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <button onClick={exportToCSV} className="flex items-center gap-2 bg-gray-900 text-white px-4 py-2 rounded-lg font-bold hover:bg-gray-800 transition-all text-sm">
      <Download size={16} /> Export CSV
    </button>
  );
}