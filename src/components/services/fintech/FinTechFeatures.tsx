import React from 'react';
import { motion } from 'framer-motion';
import { CreditCard, Wallet, LineChart, Building2 } from 'lucide-react';

const features = [
  {
    icon: <CreditCard className="w-6 h-6" />,
    title: "Digital Payments",
    description: "Next-generation payment processing solutions",
    capabilities: [
      "Mobile Payment Integration",
      "Contactless Payments",
      "Digital Wallet Solutions",
      "Payment Gateway Integration"
    ]
  },
  {
    icon: <Wallet className="w-6 h-6" />,
    title: "Digital Banking",
    description: "Modern banking infrastructure and services",
    capabilities: [
      "Mobile Banking Apps",
      "Online Account Management",
      "Digital Onboarding",
      "Automated KYC Process"
    ]
  },
  {
    icon: <LineChart className="w-6 h-6" />,
    title: "Investment Technology",
    description: "Advanced investment and trading platforms",
    capabilities: [
      "Algorithmic Trading",
      "Portfolio Management",
      "Risk Analytics",
      "Market Data Integration"
    ]
  },
  {
    icon: <Building2 className="w-6 h-6" />,
    title: "Regulatory Technology",
    description: "Compliance and regulatory solutions",
    capabilities: [
      "Compliance Monitoring",
      "Regulatory Reporting",
      "Risk Management",
      "Anti-fraud Systems"
    ]
  }
];

export function FinTechFeatures() {
  return (
    <div className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">FinTech Solutions</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive financial technology services for modern businesses
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