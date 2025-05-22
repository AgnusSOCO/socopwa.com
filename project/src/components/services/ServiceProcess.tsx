import React from 'react';
import { motion } from 'framer-motion';
import { MessageSquare, Search, Cog, CheckCircle } from 'lucide-react';

const steps = [
  {
    icon: <MessageSquare className="w-6 h-6" />,
    title: "Consultation",
    description: "Initial discussion to understand your needs"
  },
  {
    icon: <Search className="w-6 h-6" />,
    title: "Analysis",
    description: "Thorough assessment of requirements"
  },
  {
    icon: <Cog className="w-6 h-6" />,
    title: "Implementation",
    description: "Seamless solution deployment"
  },
  {
    icon: <CheckCircle className="w-6 h-6" />,
    title: "Support",
    description: "Ongoing maintenance and assistance"
  }
];

export function ServiceProcess() {
  return (
    <div className="py-24 bg-gray-900">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-white mb-4">Our Process</h2>
          <p className="text-xl text-gray-400">How we deliver exceptional results</p>
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
                <h3 className="text-xl font-semibold text-white mb-2">{step.title}</h3>
                <p className="text-gray-400">{step.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}