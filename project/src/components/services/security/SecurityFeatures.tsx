import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Lock, Eye, Database } from 'lucide-react';

const features = [
  {
    icon: <Shield className="w-6 h-6" />,
    title: "Threat Detection & Prevention",
    description: "Advanced security systems to identify and prevent cyber threats",
    capabilities: [
      "Real-time Threat Monitoring",
      "AI-Powered Malware Protection",
      "Network Intrusion Detection",
      "Automated Vulnerability Scanning",
      "Security Information Management",
      "24/7 Security Operations Center"
    ]
  },
  {
    icon: <Lock className="w-6 h-6" />,
    title: "Data Encryption",
    description: "Enterprise-grade encryption for sensitive data protection",
    capabilities: [
      "End-to-end Encryption",
      "Key Management System",
      "Secure Data Transfer",
      "Multi-factor Authentication",
      "Zero Trust Architecture",
      "Secure Access Controls"
    ]
  },
  {
    icon: <Database className="w-6 h-6" />,
    title: "Data Loss Prevention",
    description: "Comprehensive solutions to prevent data breaches",
    capabilities: [
      "Content Monitoring & Filtering",
      "Policy Enforcement",
      "Data Classification",
      "Email Security",
      "Cloud App Security",
      "Device Management"
    ]
  },
  {
    icon: <Eye className="w-6 h-6" />,
    title: "Security Monitoring",
    description: "Continuous monitoring and incident response",
    capabilities: [
      "Security Event Monitoring",
      "Incident Response",
      "Threat Intelligence",
      "Compliance Reporting",
      "Security Analytics",
      "Audit Logging"
    ]
  }
];

export function SecurityFeatures() {
  return (
    <div className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Comprehensive Security Solutions</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Advanced cybersecurity measures to protect your digital assets
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