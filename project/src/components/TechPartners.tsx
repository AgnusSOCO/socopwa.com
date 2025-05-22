import React from 'react';
import { motion } from 'framer-motion';

const partners = [
  {
    name: "Google Cloud",
    logo: "https://www.gstatic.com/images/branding/product/2x/google_cloud_64dp.png",
    description: "Premier Partner"
  },
  {
    name: "Microsoft",
    logo: "https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE1Mu3b?ver=5c31",
    description: "Gold Partner"
  },
  {
    name: "Amazon Web Services",
    logo: "https://upload.wikimedia.org/wikipedia/commons/9/93/Amazon_Web_Services_Logo.svg",
    description: "Advanced Partner"
  },
  {
    name: "OpenAI",
    logo: "https://upload.wikimedia.org/wikipedia/commons/4/4d/OpenAI_Logo.svg",
    description: "AI Innovation Partner"
  }
];

export function TechPartners() {
  return (
    <div className="py-24 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 text-gray-900">Technology Partners</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We collaborate with industry leaders to deliver cutting-edge solutions.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {partners.map((partner, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="flex flex-col items-center bg-white p-6 rounded-xl shadow-sm"
            >
              <div className="h-16 flex items-center justify-center mb-4 w-full">
                <img
                  src={partner.logo}
                  alt={partner.name}
                  className="h-full w-auto object-contain max-w-[120px] grayscale hover:grayscale-0 transition-all"
                />
              </div>
              <p className="text-sm text-gray-600 text-center font-medium mt-2">{partner.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}