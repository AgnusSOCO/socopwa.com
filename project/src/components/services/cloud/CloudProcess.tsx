import React from 'react';
import { motion } from 'framer-motion';
import { Search, Database, Cloud, Settings, Check } from 'lucide-react';

const steps = [
  {
    icon: <Search className="w-6 h-6" />,
    title: "Assessment",
    description: "Evaluate current infrastructure and requirements"
  },
  {
    icon: <Database className="w-6 h-6" />,
    title: "Planning",
    description: "Develop migration strategy and timeline"
  },
  {
    icon: <Cloud className="w-6 h-6" />,
    title: "Migration",
    description: "Execute cloud migration in phases"
  },
  {
    icon: <Settings className="w-6 h-6" />,
    title: "Configuration",
    description: "Set up and optimize cloud resources"
  },
  {
    icon: <Check className="w-6 h-6" />,
    title: "Monitoring",
    description: "Continuous monitoring and optimization"
  }
];

export function CloudProcess() {
  return (
    <div className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Migration Process</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our structured approach to cloud migration ensures a smooth transition
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