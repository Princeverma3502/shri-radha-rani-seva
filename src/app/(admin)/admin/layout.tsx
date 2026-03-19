import React from "react";
import Link from "next/link";
import { LayoutDashboard, Users, Heart, Calendar } from "lucide-react";

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-screen bg-gray-50">
      {/* Sidebar */}
      <aside className="w-64 bg-white border-r border-gray-200 p-6">
        <h2 className="text-xl font-bold text-orange-600 mb-8">Admin Panel</h2>
        <nav className="space-y-4">
          <Link href="/admin" className="flex items-center gap-3 text-gray-700 hover:text-orange-600">
            <LayoutDashboard size={20} /> Dashboard
          </Link>
          <Link href="/admin/donations" className="flex items-center gap-3 text-gray-700 hover:text-orange-600">
            <Heart size={20} /> Donations
          </Link>
          <Link href="/admin/members" className="flex items-center gap-3 text-gray-700 hover:text-orange-600">
            <Users size={20} /> Members
          </Link>
          <Link href="/admin/events" className="flex items-center gap-3 text-gray-700 hover:text-orange-600">
            <Calendar size={20} /> Events
          </Link>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1">
        {children}
      </main>
    </div>
  );
}