import React from 'react';
import { motion } from 'framer-motion';
import { Brain, Cloud, Shield, Box, Wallet, Fingerprint } from 'lucide-react';
import { ServiceCard } from './ServiceCard';

const services = [
  {
    icon: <Brain className="w-8 h-8" />,
    title: "AI Integration",
    description: "Transform your business with cutting-edge AI solutions. We help you implement machine learning, natural language processing, and predictive analytics."
  },
  {
    icon: <Wallet className="w-8 h-8" />,
    title: "FinTech Solutions",
    description: "Modernize your financial services with innovative technology solutions. From digital payments to blockchain integration."
  },
  {
    icon: <Fingerprint className="w-8 h-8" />,
    title: "Digital ID",
    description: "Secure digital identity solutions including biometric authentication, identity verification, and access management."
  },
  {
    icon: <Box className="w-8 h-8" />,
    title: "Google Workspace",
    description: "Modernize your company with Google Workspace. We assist with training, implementation, and ongoing support."
  },
  {
    icon: <Shield className="w-8 h-8" />,
    title: "Cybersecurity",
    description: "Protect your digital assets with our robust cybersecurity measures, ensuring your business stays secure and resilient against threats."
  },
  {
    icon: <Cloud className="w-8 h-8" />,
    title: "Cloud Services",
    description: "Enhance flexibility and scalability with our cloud solutions, tailored to meet the demands of your growing business."
  }
];

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
            <ServiceCard key={index} {...service} />
          ))}
        </div>
      </div>
    </div>
  );
}