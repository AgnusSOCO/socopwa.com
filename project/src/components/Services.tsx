import React from 'react';
import { motion } from 'framer-motion';
import { ServiceCard } from './ServiceCard';
import { services } from '../data/services';

export function Services() {
  return (
    <div className="py-24 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 text-gray-900">Professional IT Solutions & Innovative Services</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            At SOCO PWA, we provide cutting-edge IT solutions and services designed to transform your business.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard
              key={service.title}
              icon={service.icon}
              title={service.title}
              description={service.description}
              link={service.link}
              features={service.features}
              index={index}
            />
          ))}
        </div>
      </div>
    </div>
  );
}