import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';

export function ContactDetails() {
  return (
    <div className="space-y-8">
      <div className="flex items-start gap-4">
        <MapPin className="w-6 h-6 text-blue-600 mt-1" />
        <div>
          <h3 className="font-semibold mb-1">Visit Us</h3>
          <p className="text-gray-600">
            Avenida Insurgentes Sur. 2453 int. 201<br />
            Col. Tizapán Alcaldía Álvaro Obregón<br />
            CP 01090 CDMX
          </p>
        </div>
      </div>

      <div className="flex items-start gap-4">
        <Mail className="w-6 h-6 text-blue-600 mt-1" />
        <div>
          <h3 className="font-semibold mb-1">Email Us</h3>
          <p className="text-gray-600">contact@socopwa.com</p>
        </div>
      </div>

      <div className="flex items-start gap-4">
        <Phone className="w-6 h-6 text-blue-600 mt-1" />
        <div>
          <h3 className="font-semibold mb-1">Call Us</h3>
          <p className="text-gray-600">+1 (805) 864-1517</p>
        </div>
      </div>
    </div>
  );
}