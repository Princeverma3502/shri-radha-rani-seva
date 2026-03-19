import React from "react";
import { Calendar } from "lucide-react";

export default function EventsAdminPage() {
  return (
    <div className="p-8">
      <div className="flex items-center gap-3 mb-6">
        <Calendar className="h-8 w-8 text-orange-600" />
        <h1 className="text-3xl font-bold text-gray-800">Events Management</h1>
      </div>
      
      <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
        <p className="text-gray-600">
          Welcome to the Events Dashboard. Here you can manage upcoming Seva events.
        </p>
        <div className="mt-4 p-4 bg-orange-50 text-orange-700 rounded-lg border border-orange-100">
          Feature coming soon: Integration with volunteer management.
        </div>
      </div>
    </div>
  );
}