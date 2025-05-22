import React from 'react';
import { motion } from 'framer-motion';
import { Search, Lightbulb, Target, Settings, LineChart } from 'lucide-react';

const steps = [
  {
    icon: <Search className="w-6 h-6" />,
    title: "Discovery",
    description: "Understanding your business needs and objectives"
  },
  {
    icon: <Lightbulb className="w-6 h-6" />,
    title: "Analysis",
    description: "Evaluating current systems and opportunities"
  },
  {
    icon: <Target className="w-6 h-6" />,
    title: "Strategy",
    description: "Developing comprehensive solutions"
  },
  {
    icon: <Settings className="w-6 h-6" />,
    title: "Implementation",
    description: "Executing and optimizing solutions"
  },
  {
    icon: <LineChart className="w-6 h-6" />,
    title: "Monitoring",
    description: "Continuous improvement and support"
  }
];

export function ConsultingProcess() {
  return (
    <div className="py-24 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Consulting Process</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A structured approach to delivering effective IT solutions
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