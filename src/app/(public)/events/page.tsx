import React from 'react';
import { CalendarDays, MapPin } from 'lucide-react';

export default function PublicEventsPage() {
  const upcomingEvents = [
    { id: 1, title: "Monthly Radha Rani Seva", date: "Every Ekadashi", location: "Main Temple" },
    { id: 2, title: "Holi Utsav 2026", date: "March 25, 2026", location: "Community Hall" }
  ];

  return (
    <div className="max-w-6xl mx-auto p-8">
      <div className="text-center mb-12">
        <CalendarDays className="h-12 w-12 text-orange-600 mx-auto mb-4" />
        <h1 className="text-4xl font-bold text-gray-900">Upcoming Seva Events</h1>
        <p className="mt-4 text-gray-600 text-lg">Join us in devotion and service.</p>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        {upcomingEvents.map((event) => (
          <div key={event.id} className="p-6 bg-white rounded-2xl shadow-sm border border-orange-100 hover:shadow-md transition-shadow">
            <h3 className="text-xl font-bold text-gray-800">{event.title}</h3>
            <div className="mt-4 flex flex-col gap-2 text-gray-500">
              <div className="flex items-center gap-2">
                <CalendarDays size={18} /> <span>{event.date}</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin size={18} /> <span>{event.location}</span>
              </div>
            </div>
            <button className="mt-6 w-full py-2 bg-orange-600 text-white rounded-lg font-medium hover:bg-orange-700">
              View Details
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}