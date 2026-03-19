import React from 'react';
import { Star } from 'lucide-react';

export default function JajmaanPage() {
  return (
    <div className="max-w-4xl mx-auto p-8 text-center">
      <Star className="h-12 w-12 text-yellow-500 mx-auto mb-4" />
      <h1 className="text-4xl font-bold text-gray-900 mb-4">Our Jajmaans</h1>
      <p className="text-lg text-gray-600">
        Dedicated supporters who make the Shri Radha Rani Seva possible through their generous contributions.
      </p>
      <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="p-6 border rounded-xl bg-white shadow-sm">
          <h3 className="font-bold text-xl text-orange-600">Become a Jajmaan</h3>
          <p className="text-gray-500 mt-2">Support our monthly sevas and festivals.</p>
        </div>
      </div>
    </div>
  );
}