import React from 'react';
import { Users } from 'lucide-react';

export default function CommitteePage() {
  return (
    <div className="max-w-4xl mx-auto p-8 text-center">
      <Users className="h-12 w-12 text-blue-600 mx-auto mb-4" />
      <h1 className="text-4xl font-bold text-gray-900 mb-4">Working Committee</h1>
      <p className="text-lg text-gray-600">
        The dedicated team managing the daily operations and spiritual activities of the Seva.
      </p>
      <div className="mt-8 p-6 bg-blue-50 rounded-lg inline-block">
        <p className="text-blue-800 font-medium">Coming Soon: Meet our committee members.</p>
      </div>
    </div>
  );
}