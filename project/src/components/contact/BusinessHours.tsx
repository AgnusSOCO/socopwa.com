import React from 'react';

export function BusinessHours() {
  return (
    <div className="bg-gray-50 p-6 rounded-lg mt-8">
      <h3 className="font-semibold mb-2">Business Hours</h3>
      <div className="space-y-2 text-gray-600">
        <p>Monday - Friday: 9:00 AM - 6:00 PM (PST)</p>
        <p>Saturday: 10:00 AM - 2:00 PM (PST)</p>
        <p>Sunday: Closed</p>
      </div>
    </div>
  );
}