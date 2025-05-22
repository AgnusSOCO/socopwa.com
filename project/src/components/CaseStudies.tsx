import React from 'react';
import { motion } from 'framer-motion';
import { Building2, Shield, Brain } from 'lucide-react';

const caseStudies = [
  {
    title: "AI-Driven Manufacturing Optimization",
    description: "Implemented AI solutions that reduced production costs by 35% and improved quality control accuracy by 45%.",
    icon: <Brain className="w-12 h-12" />,
    tags: ["AI Integration", "Manufacturing", "Process Optimization"]
  },
  {
    title: "Enterprise Security Transformation",
    description: "Comprehensive cybersecurity overhaul resulting in zero breaches and 99.9% threat detection rate.",
    icon: <Shield className="w-12 h-12" />,
    tags: ["Cybersecurity", "Finance", "Enterprise"]
  },
  {
    title: "Cloud Migration Success",
    description: "Seamless migration to cloud infrastructure, reducing operational costs by 40% and improving scalability.",
    icon: <Building2 className="w-12 h-12" />,
    tags: ["Cloud Services", "Retail", "Digital Transformation"]
  }
];

export function CaseStudies() {
  return (
    <div className="py-24 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 text-gray-900">Success Stories</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover how we've helped businesses transform and succeed in the digital age.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {caseStudies.map((study, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white p-8 rounded-xl shadow-lg border border-gray-100"
            >
              <div className="text-blue-600 mb-6">{study.icon}</div>
              <h3 className="text-xl font-semibold mb-2 text-gray-900">{study.title}</h3>
              <p className="text-gray-600 mb-6">{study.description}</p>
              <div className="flex flex-wrap gap-2">
                {study.tags.map((tag, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 bg-blue-50 text-blue-600 text-sm rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}