import React from 'react';
import { motion } from 'framer-motion';
import { Target, Code, Cloud, Shield } from 'lucide-react';

const services = [
  {
    icon: <Target className="w-6 h-6" />,
    title: "Strategic IT Planning",
    description: "Develop comprehensive IT strategies aligned with business goals",
    capabilities: [
      "Digital Transformation Roadmap",
      "Technology Stack Assessment",
      "IT Budget Optimization",
      "Risk Management Strategy",
      "Innovation Planning",
      "Performance Metrics"
    ]
  },
  {
    icon: <Code className="w-6 h-6" />,
    title: "Technology Assessment",
    description: "Evaluate and optimize your technology infrastructure",
    capabilities: [
      "Infrastructure Analysis",
      "System Performance Review",
      "Security Evaluation",
      "Scalability Assessment",
      "Integration Opportunities",
      "Legacy System Modernization"
    ]
  },
  {
    icon: <Cloud className="w-6 h-6" />,
    title: "Cloud Strategy",
    description: "Expert guidance on cloud adoption and migration",
    capabilities: [
      "Cloud Readiness Assessment",
      "Migration Planning",
      "Provider Selection",
      "Cost Optimization",
      "Security Architecture",
      "Performance Monitoring"
    ]
  },
  {
    icon: <Shield className="w-6 h-6" />,
    title: "Security Consulting",
    description: "Enhance your cybersecurity posture",
    capabilities: [
      "Security Architecture Review",
      "Compliance Assessment",
      "Risk Management",
      "Security Training",
      "Incident Response Planning",
      "Policy Development"
    ]
  }
];

export function ConsultingServices() {
  return (
    <div className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Consulting Services</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive IT consulting services tailored to your business needs
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white p-8 rounded-xl shadow-lg border border-gray-100"
            >
              <div className="text-blue-600 mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">{service.title}</h3>
              <p className="text-gray-600 mb-6">{service.description}</p>
              <ul className="space-y-2">
                {service.capabilities.map((capability, i) => (
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