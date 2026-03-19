import React from 'react';
import { LayoutDashboard } from 'lucide-react';

export default function AdminDashboard() {
  return (
    <div className="p-8">
      <div className="flex items-center gap-3 mb-6">
        <LayoutDashboard className="h-8 w-8 text-indigo-600" />
        <h1 className="text-3xl font-bold text-gray-800">Admin Dashboard</h1>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="p-6 bg-white rounded-xl shadow-sm border border-gray-100">
          <h2 className="font-semibold text-gray-500">Quick Actions</h2>
          <p className="mt-2 text-sm text-gray-400">Select a section from the sidebar to manage donations, members, or events.</p>
        </div>
      </div>
    </div>
  );
}