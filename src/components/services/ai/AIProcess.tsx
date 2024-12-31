import React from 'react';
import { motion } from 'framer-motion';
import { Lightbulb, Database, Brain, LineChart, Check } from 'lucide-react';

const steps = [
  {
    icon: <Lightbulb className="w-6 h-6" />,
    title: "Discovery & Planning",
    description: "We analyze your business needs and identify AI opportunities"
  },
  {
    icon: <Database className="w-6 h-6" />,
    title: "Data Preparation",
    description: "Collection and preparation of data for AI model training"
  },
  {
    icon: <Brain className="w-6 h-6" />,
    title: "Model Development",
    description: "Development and training of custom AI models"
  },
  {
    icon: <LineChart className="w-6 h-6" />,
    title: "Implementation",
    description: "Seamless integration and deployment of AI solutions"
  },
  {
    icon: <Check className="w-6 h-6" />,
    title: "Optimization",
    description: "Continuous monitoring and improvement of AI performance"
  }
];

export function AIProcess() {
  return (
    <div className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Implementation Process</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A structured approach to implementing AI solutions in your business
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