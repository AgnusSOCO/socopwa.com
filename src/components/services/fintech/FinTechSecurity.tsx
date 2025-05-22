import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Lock, FileCheck } from 'lucide-react';

const securityFeatures = [
  {
    icon: <Shield className="w-8 h-8" />,
    title: "Data Security",
    features: [
      "End-to-end encryption",
      "Secure data storage",
      "Real-time monitoring",
      "Intrusion detection"
    ]
  },
  {
    icon: <Lock className="w-8 h-8" />,
    title: "Compliance",
    features: [
      "PCI DSS compliance",
      "GDPR compliance",
      "KYC/AML regulations",
      "Financial regulations"
    ]
  },
  {
    icon: <FileCheck className="w-8 h-8" />,
    title: "Transaction Security",
    features: [
      "Fraud detection",
      "Secure authentication",
      "Transaction monitoring",
      "Risk assessment"
    ]
  }
];

export function FinTechSecurity() {
  return (
    <div className="py-24 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Security & Compliance</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Enterprise-grade security for financial technology solutions
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {securityFeatures.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white p-8 rounded-xl shadow-lg"
            >
              <div className="text-blue-600 mb-6">{feature.icon}</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">{feature.title}</h3>
              <ul className="space-y-2">
                {feature.features.map((item, i) => (
                  <li key={i} className="flex items-center gap-2 text-gray-600">
                    <div className="w-1.5 h-1.5 bg-blue-600 rounded-full" />
                    {item}
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