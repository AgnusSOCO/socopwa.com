import React from 'react';
import { motion } from 'framer-motion';
import { Search, Shield, AlertTriangle, FileCheck, Settings } from 'lucide-react';

const steps = [
  {
    icon: <Search className="w-6 h-6" />,
    title: "Security Assessment",
    description: "Comprehensive evaluation of security posture"
  },
  {
    icon: <AlertTriangle className="w-6 h-6" />,
    title: "Threat Analysis",
    description: "Identification of potential security risks"
  },
  {
    icon: <Shield className="w-6 h-6" />,
    title: "Implementation",
    description: "Deployment of security measures"
  },
  {
    icon: <Settings className="w-6 h-6" />,
    title: "Monitoring",
    description: "Continuous security oversight"
  },
  {
    icon: <FileCheck className="w-6 h-6" />,
    title: "Compliance",
    description: "Regular audits and updates"
  }
];

export function SecurityProcess() {
  return (
    <div className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Security Implementation Process</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our systematic approach to implementing cybersecurity measures
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="flex items-center gap-8 mb-12"
            >
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center text-white flex-shrink-0">
                {step.icon}
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}