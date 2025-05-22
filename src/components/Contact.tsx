import React from 'react';
import { motion } from 'framer-motion';
import { ContactForm } from './forms/ContactForm';
import { ContactDetails } from './contact/ContactDetails';

export function Contact() {
  return (
    <div className="py-24 bg-gray-900 text-white">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Get in touch with us.</h2>
          <p className="text-xl text-gray-300">
            We're Thrilled to Get Started on Your Project!
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="bg-gray-800 p-8 rounded-xl">
            <ContactForm />
          </div>

          <div className="text-white">
            <ContactDetails />
          </div>
        </div>
      </div>
    </div>
  );
}