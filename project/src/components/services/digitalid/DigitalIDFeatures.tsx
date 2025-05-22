import React from 'react';
import { motion } from 'framer-motion';
import { Fingerprint, Shield, Users, Scan } from 'lucide-react';

const features = [
  {
    icon: <Fingerprint className="w-6 h-6" />,
    title: "Biometric Authentication",
    description: "Advanced biometric identity verification",
    capabilities: [
      "Facial Recognition",
      "Fingerprint Scanning",
      "Voice Recognition",
      "Iris Scanning"
    ]
  },
  {
    icon: <Shield className="w-6 h-6" />,
    title: "Identity Verification",
    description: "Secure document and identity verification",
    capabilities: [
      "Document Authentication",
      "ID Validation",
      "Age Verification",
      "Address Verification"
    ]
  },
  {
    icon: <Users className="w-6 h-6" />,
    title: "Identity Management",
    description: "Comprehensive identity lifecycle management",
    capabilities: [
      "User Provisioning",
      "Access Management",
      "Single Sign-On",
      "Multi-factor Authentication"
    ]
  },
  {
    icon: <Scan className="w-6 h-6" />,
    title: "Digital Onboarding",
    description: "Streamlined digital onboarding solutions",
    capabilities: [
      "eKYC Process",
      "Remote Onboarding",
      "Identity Proofing",
      "Risk Assessment"
    ]
  }
];

export function DigitalIDFeatures() {
  return (
    <div className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Digital ID Solutions</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive digital identity services for modern businesses
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white p-8 rounded-xl shadow-lg border border-gray-100"
            >
              <div className="text-blue-600 mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">{feature.title}</h3>
              <p className="text-gray-600 mb-6">{feature.description}</p>
              <ul className="space-y-2">
                {feature.capabilities.map((capability, i) => (
                  <li key={i} className="flex items-center gap-2 text-gray-600">
                    <div className="w-1.5 h-1.5 bg-blue-600 rounded-full" />
                    {capability}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}