import AdminTableWrapper from "@/src/components/AdminTableWrapper";
import ExportCsvButton from "@/src/components/ExportCsvButton";
import { db } from "@/src/lib/db";
import { donations } from "@/src/lib/db/schema";
import { desc, sql, gte, lte, and } from "drizzle-orm";
import { IndianRupee, Users } from "lucide-react";

export const dynamic = "force-dynamic";

export default async function AdminDonationsPage({ searchParams }: { searchParams: { [key: string]: string | string[] | undefined } }) {
  
  const filter = searchParams.filter;
  const from = searchParams.from;
  const to = searchParams.to;

  let whereClause = undefined;
  if (filter === "this-month") {
    const startOfMonth = new Date();
    startOfMonth.setDate(1);
    startOfMonth.setHours(0, 0, 0, 0);
    whereClause = gte(donations.createdAt, startOfMonth);
  } else if (filter === "last-7-days") {
    const sevenDaysAgo = new Date();
    sevenDaysAgo.setDate(sevenDaysAgo.getDate() - 7);
    sevenDaysAgo.setHours(0, 0, 0, 0);
    whereClause = gte(donations.createdAt, sevenDaysAgo);
  } else if (from && to) {
    const fromDate = new Date(from as string);
    const toDate = new Date(to as string);
    whereClause = and(gte(donations.createdAt, fromDate), lte(donations.createdAt, toDate));
  }

  // 1. Fetch live data from Neon
  const data = await db.select().from(donations).where(whereClause).orderBy(desc(donations.createdAt));

  // 2. Calculate Stats
  const totalAmount = data
    .filter(d => d.paymentStatus === "SUCCESS")
    .reduce((sum, d) => sum + (d.amount || 0), 0);
  
  const totalDonors = new Set(data.map(d => d.phone)).size;

  return (
    <div className="p-6 md:p-10 min-h-screen bg-gray-50">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
        <div>
          <h1 className="text-3xl font-extrabold text-gray-900">सभी दान (Live Ledger)</h1>
          <p className="text-gray-500">Real-time database records from Neon.</p>
        </div>

        <ExportCsvButton data={data} />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div className="bg-white p-6 rounded-2xl shadow-sm border border-orange-100">
          <p className="text-gray-500 font-bold text-sm flex items-center gap-2"><IndianRupee size={16}/> कुल दान (Total)</p>
          <p className="text-3xl font-extrabold text-green-600">₹ {totalAmount.toLocaleString()}</p>
        </div>
        <div className="bg-white p-6 rounded-2xl shadow-sm border border-orange-100">
          <p className="text-gray-500 font-bold text-sm flex items-center gap-2"><Users size={16}/> दानकर्ता (Donors)</p>
          <p className="text-3xl font-extrabold text-red-900">{totalDonors}</p>
        </div>
      </div>

      <AdminTableWrapper initialData={JSON.parse(JSON.stringify(data))} />
    </div>
  );
}