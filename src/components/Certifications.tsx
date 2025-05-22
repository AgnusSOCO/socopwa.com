import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Award, Lock, Brain, Cpu, Building2, Database, Cloud, FileCheck, Network, Server } from 'lucide-react';

const certifications = [
  {
    icon: <Shield className="w-8 h-8" />,
    title: "ISO 27001",
    description: "Information Security Management System certification ensuring highest security standards.",
    validUntil: "2027",
    category: "Security"
  },
  {
    icon: <Brain className="w-8 h-8" />,
    title: "OpenAI GPT Partner",
    description: "Certified implementation partner for OpenAI's GPT technology.",
    validUntil: "2027",
    category: "AI"
  },
  {
    icon: <Building2 className="w-8 h-8" />,
    title: "PCI DSS Level 1",
    description: "Payment Card Industry Data Security Standard compliance for financial transactions.",
    validUntil: "2027",
    category: "Fintech"
  },
  {
    icon: <Database className="w-8 h-8" />,
    title: "SOC 2 Type II",
    description: "Verified compliance with AICPA's TSC for security, availability, and confidentiality.",
    validUntil: "2027",
    category: "Compliance"
  },
  {
    icon: <Cpu className="w-8 h-8" />,
    title: "NVIDIA AI Enterprise",
    description: "Certified partner for enterprise AI implementation and optimization.",
    validUntil: "2027",
    category: "AI"
  },
  {
    icon: <Lock className="w-8 h-8" />,
    title: "FIPS 140-2",
    description: "Federal cryptographic security certification for sensitive data protection.",
    validUntil: "2027",
    category: "Security"
  },
  {
    icon: <Building2 className="w-8 h-8" />,
    title: "NIST CSF",
    description: "National Institute of Standards and Technology Cybersecurity Framework compliance.",
    validUntil: "2027",
    category: "Security"
  },
  {
    icon: <Cloud className="w-8 h-8" />,
    title: "Google Cloud AI",
    description: "Certified expertise in Google Cloud AI and ML solutions.",
    validUntil: "2027",
    category: "AI"
  },
  {
    icon: <Network className="w-8 h-8" />,
    title: "Cisco Security",
    description: "Advanced network security and infrastructure protection certification.",
    validUntil: "2027",
    category: "Security"
  },
  {
    icon: <FileCheck className="w-8 h-8" />,
    title: "GDPR Compliance",
    description: "Certified compliance with EU General Data Protection Regulation standards.",
    validUntil: "2027",
    category: "Compliance"
  },
  {
    icon: <Server className="w-8 h-8" />,
    title: "AWS Advanced Partner",
    description: "Advanced consulting partner for Amazon Web Services solutions.",
    validUntil: "2027",
    category: "Cloud"
  },
  {
    icon: <Shield className="w-8 h-8" />,
    title: "HIPAA Compliance",
    description: "Certified compliance with healthcare data protection standards.",
    validUntil: "2027",
    category: "Healthcare"
  }
];

export function Certifications() {
  return (
    <div className="py-24 bg-gray-900 text-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Industry Certifications</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Our comprehensive certifications demonstrate our commitment to excellence, security, and innovation across multiple domains.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {certifications.map((cert, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-gray-800 p-6 rounded-xl"
            >
              <div className="text-blue-400 mb-4">{cert.icon}</div>
              <div className="inline-block px-3 py-1 bg-blue-900/50 text-blue-300 text-xs rounded-full mb-4">
                {cert.category}
              </div>
              <h3 className="text-lg font-semibold mb-2">{cert.title}</h3>
              <p className="text-gray-400 text-sm mb-4">{cert.description}</p>
              <p className="text-gray-500 text-sm flex items-center gap-2">
                <span>Valid until:</span>
                <span className="text-blue-400">{cert.validUntil}</span>
              </p>
            </motion.div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="text-gray-400">
            Our certifications are regularly renewed and updated to maintain the highest standards of service delivery.
          </p>
        </div>
      </div>
    </div>
  );
}