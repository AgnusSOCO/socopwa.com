import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Brain, Users, Code } from 'lucide-react';

const values = [
  {
    icon: <Shield className="w-6 h-6" />,
    title: "Security First",
    description: "We prioritize the protection of our clients' digital assets with industry-leading security measures and protocols."
  },
  {
    icon: <Brain className="w-6 h-6" />,
    title: "Innovation",
    description: "Constantly exploring and implementing cutting-edge technologies to deliver transformative solutions."
  },
  {
    icon: <Users className="w-6 h-6" />,
    title: "Client Partnership",
    description: "Building lasting relationships through transparency, trust, and exceptional service delivery."
  },
  {
    icon: <Code className="w-6 h-6" />,
    title: "Technical Excellence",
    description: "Maintaining the highest standards of technical expertise and professional development."
  }
];

export function AboutValues() {
  return (
    <div className="py-24 bg-white relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-50 rounded-full mix-blend-multiply filter blur-xl opacity-70" />
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-50 rounded-full mix-blend-multiply filter blur-xl opacity-70" />
      </div>

      <div className="container mx-auto px-6 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold mb-4 text-gray-900">Our Core Values</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            The principles that guide our mission and shape our culture
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {values.map((value, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group relative bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300"
            >
              {/* Hover effect background */}
              <div className="absolute inset-0 bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity" />
              
              <div className="relative">
                <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <div className="text-blue-600">{value.icon}</div>
                </div>
                <h3 className="text-xl font-semibold mb-4 text-gray-900">{value.title}</h3>
                <p className="text-gray-600 leading-relaxed">{value.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}