import React from 'react';
import { motion } from 'framer-motion';
import { Cloud, Database, Shield, Server } from 'lucide-react';

const features = [
  {
    icon: <Cloud className="w-6 h-6" />,
    title: "Cloud Migration",
    description: "Seamless transition to cloud infrastructure",
    capabilities: [
      "Infrastructure Assessment",
      "Migration Planning",
      "Data Transfer",
      "Post-Migration Support"
    ]
  },
  {
    icon: <Server className="w-6 h-6" />,
    title: "Cloud Infrastructure",
    description: "Scalable and reliable cloud solutions",
    capabilities: [
      "Auto-scaling",
      "Load Balancing",
      "High Availability",
      "Disaster Recovery"
    ]
  },
  {
    icon: <Database className="w-6 h-6" />,
    title: "Cloud Storage",
    description: "Secure and scalable storage solutions",
    capabilities: [
      "Data Replication",
      "Automated Backups",
      "File Sharing",
      "Version Control"
    ]
  },
  {
    icon: <Shield className="w-6 h-6" />,
    title: "Cloud Security",
    description: "Comprehensive cloud security measures",
    capabilities: [
      "Access Control",
      "Data Encryption",
      "Security Monitoring",
      "Compliance Management"
    ]
  }
];

export function CloudFeatures() {
  return (
    <div className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">Cloud Solutions</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive cloud services for modern businesses
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
              <h3 className="text-xl font-semibold mb-4">{feature.title}</h3>
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