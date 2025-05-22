import React from 'react';
import { motion } from 'framer-motion';
import { FileCheck, Shield } from 'lucide-react';

const standards = [
  {
    name: "ISO 27001",
    description: "Information Security Management",
    features: [
      "Risk Management",
      "Security Controls",
      "Regular Audits",
      "Continuous Improvement"
    ]
  },
  {
    name: "GDPR Compliance",
    description: "Data Protection Regulation",
    features: [
      "Data Privacy",
      "User Rights",
      "Breach Notification",
      "Impact Assessment"
    ]
  },
  {
    name: "SOC 2 Type II",
    description: "Service Organization Control",
    features: [
      "Security Controls",
      "Availability",
      "Processing Integrity",
      "Confidentiality"
    ]
  },
  {
    name: "PCI DSS",
    description: "Payment Card Security",
    features: [
      "Secure Networks",
      "Data Protection",
      "Access Control",
      "Regular Testing"
    ]
  }
];

export function SecurityCompliance() {
  return (
    <div className="py-24 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Security Standards & Compliance</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Meeting and exceeding industry security standards
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {standards.map((standard, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white p-6 rounded-xl shadow-lg"
            >
              <Shield className="w-8 h-8 text-blue-600 mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">{standard.name}</h3>
              <p className="text-gray-600 mb-4">{standard.description}</p>
              <ul className="space-y-2">
                {standard.features.map((feature, i) => (
                  <li key={i} className="flex items-center gap-2 text-gray-600">
                    <FileCheck className="w-4 h-4 text-blue-600" />
                    {feature}
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