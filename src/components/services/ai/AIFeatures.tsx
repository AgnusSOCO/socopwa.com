import React from 'react';
import { motion } from 'framer-motion';
import { Brain, Bot, Cpu, Database } from 'lucide-react';

const features = [
  {
    icon: <Brain className="w-6 h-6" />,
    title: "Machine Learning Solutions",
    description: "Custom ML models for predictive analytics and automation",
    capabilities: [
      "Predictive Maintenance",
      "Customer Behavior Analysis",
      "Risk Assessment Models",
      "Anomaly Detection"
    ]
  },
  {
    icon: <Bot className="w-6 h-6" />,
    title: "Natural Language Processing",
    description: "Advanced NLP solutions for text analysis and automation",
    capabilities: [
      "Intelligent Chatbots",
      "Sentiment Analysis",
      "Text Classification",
      "Language Translation"
    ]
  },
  {
    icon: <Cpu className="w-6 h-6" />,
    title: "Computer Vision",
    description: "Visual recognition systems for quality control and security",
    capabilities: [
      "Object Detection",
      "Quality Inspection",
      "Facial Recognition",
      "OCR Solutions"
    ]
  },
  {
    icon: <Database className="w-6 h-6" />,
    title: "Big Data Analytics",
    description: "AI-powered data analytics for business insights",
    capabilities: [
      "Real-time Analytics",
      "Data Visualization",
      "Trend Analysis",
      "Predictive Modeling"
    ]
  }
];

export function AIFeatures() {
  return (
    <div className="py-24 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Our AI Solutions</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive AI services designed to transform your business operations
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white p-8 rounded-xl shadow-lg border border-gray-100"
            >
              <div className="text-blue-600 mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">{feature.title}</h3>
              <p className="text-gray-600 mb-6">{feature.description}</p>
              <ul className="space-y-2">
                {feature.capabilities.map((capability, i) => (
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