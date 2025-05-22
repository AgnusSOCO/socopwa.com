import React from 'react';
import { motion } from 'framer-motion';
import { Brain, Shield, Cloud, Zap } from 'lucide-react';

const innovations = [
  {
    icon: <Brain className="w-6 h-6" />,
    title: "AI & Machine Learning",
    description: "Pioneering AI solutions that transform business operations"
  },
  {
    icon: <Shield className="w-6 h-6" />,
    title: "Advanced Security",
    description: "State-of-the-art cybersecurity measures"
  },
  {
    icon: <Cloud className="w-6 h-6" />,
    title: "Cloud Excellence",
    description: "Leading cloud transformation initiatives"
  },
  {
    icon: <Zap className="w-6 h-6" />,
    title: "Digital Innovation",
    description: "Driving digital transformation success"
  }
];

export function AboutInnovation() {
  return (
    <div className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4 text-gray-900">Innovation at Our Core</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We're at the forefront of technological advancement, constantly pushing boundaries
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {innovations.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group bg-white border border-gray-200 p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center mb-6 group-hover:bg-blue-100 transition-colors">
                <div className="text-blue-600">{item.icon}</div>
              </div>
              <h3 className="text-xl font-semibold mb-4 text-gray-900">{item.title}</h3>
              <p className="text-gray-600">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}