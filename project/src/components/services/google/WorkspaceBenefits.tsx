import React from 'react';
import { motion } from 'framer-motion';
import { Users, Shield, TrendingUp } from 'lucide-react';

const benefits = [
  {
    icon: <Users className="w-8 h-8" />,
    title: "Enhanced Collaboration",
    description: "Transform how your team works together",
    metrics: [
      "30% faster project completion",
      "Real-time document collaboration",
      "Seamless file sharing",
      "Cross-device synchronization"
    ]
  },
  {
    icon: <Shield className="w-8 h-8" />,
    title: "Enterprise Security",
    description: "Advanced security and compliance features",
    metrics: [
      "2-step verification",
      "Advanced phishing protection",
      "Data loss prevention",
      "Security center analytics"
    ]
  },
  {
    icon: <TrendingUp className="w-8 h-8" />,
    title: "Business Growth",
    description: "Tools that scale with your business",
    metrics: [
      "25% increase in productivity",
      "Reduced IT costs",
      "Simplified administration",
      "24/7 support"
    ]
  }
];

export function WorkspaceBenefits() {
  return (
    <div className="py-24 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Benefits of Google Workspace</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover how Google Workspace can transform your business operations
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white p-8 rounded-xl shadow-lg"
            >
              <div className="text-blue-600 mb-4">{benefit.icon}</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">{benefit.title}</h3>
              <p className="text-gray-600 mb-6">{benefit.description}</p>
              <ul className="space-y-2">
                {benefit.metrics.map((metric, i) => (
                  <li key={i} className="flex items-center gap-2 text-gray-600">
                    <div className="w-1.5 h-1.5 bg-blue-600 rounded-full" />
                    {metric}
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