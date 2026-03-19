import React from "react";
import { Users } from "lucide-react";

export default function MembersAdminPage() {
  return (
    <div className="p-8">
      <div className="flex items-center gap-3 mb-6">
        <Users className="h-8 w-8 text-blue-600" />
        <h1 className="text-3xl font-bold text-gray-800">Member Directory</h1>
      </div>
      <div className="bg-white p-6 rounded-xl shadow-md border border-gray-100">
        <p className="text-gray-600">Managing Shri Radha Rani Seva members.</p>
      </div>
    </div>
  );
}