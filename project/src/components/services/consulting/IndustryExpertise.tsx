import React from 'react';
import { motion } from 'framer-motion';
import { Building2, LineChart, Settings, ShoppingBag } from 'lucide-react';

const industries = [
  {
    icon: <Building2 className="w-8 h-8" />,
    name: "Healthcare",
    solutions: [
      "EMR System Optimization",
      "HIPAA Compliance",
      "Telemedicine Integration",
      "Data Security"
    ]
  },
  {
    icon: <LineChart className="w-8 h-8" />,
    name: "Finance",
    solutions: [
      "FinTech Integration",
      "Security Compliance",
      "Digital Banking",
      "Risk Management"
    ]
  },
  {
    icon: <Settings className="w-8 h-8" />,
    name: "Manufacturing",
    solutions: [
      "IoT Implementation",
      "Process Automation",
      "Supply Chain Optimization",
      "Quality Control"
    ]
  },
  {
    icon: <ShoppingBag className="w-8 h-8" />,
    name: "Retail",
    solutions: [
      "E-commerce Solutions",
      "Inventory Management",
      "Customer Analytics",
      "POS Integration"
    ]
  }
];

export function IndustryExpertise() {
  return (
    <div className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Industry Expertise</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Specialized consulting services for your industry's unique challenges
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {industries.map((industry, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white p-8 rounded-xl shadow-lg border border-gray-100"
            >
              <div className="text-blue-600 mb-4">{industry.icon}</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">{industry.name}</h3>
              <ul className="space-y-2">
                {industry.solutions.map((solution, i) => (
                  <li key={i} className="flex items-center gap-2 text-gray-600">
                    <div className="w-1.5 h-1.5 bg-blue-600 rounded-full" />
                    {solution}
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