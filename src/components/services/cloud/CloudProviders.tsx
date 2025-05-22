import React from 'react';
import { motion } from 'framer-motion';

const providers = [
  {
    name: "Google Cloud Platform",
    logo: "https://www.gstatic.com/images/branding/product/2x/google_cloud_64dp.png",
    services: ["Compute Engine", "Cloud Storage", "BigQuery", "Kubernetes"]
  },
  {
    name: "Amazon Web Services",
    logo: "https://upload.wikimedia.org/wikipedia/commons/9/93/Amazon_Web_Services_Logo.svg",
    services: ["EC2", "S3", "RDS", "Lambda"]
  },
  {
    name: "Microsoft Azure",
    logo: "https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE1Mu3b?ver=5c31",
    services: ["Virtual Machines", "Blob Storage", "SQL Database", "Functions"]
  }
];

export function CloudProviders() {
  return (
    <div className="py-24 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Cloud Platform Partners</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We work with leading cloud providers to deliver the best solutions
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {providers.map((provider, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white p-8 rounded-xl shadow-lg"
            >
              <div className="h-16 mb-6 flex items-center justify-center">
                <img
                  src={provider.logo}
                  alt={provider.name}
                  className="h-full w-auto object-contain"
                />
              </div>
              <h3 className="text-xl font-semibold mb-4 text-gray-900 text-center">{provider.name}</h3>
              <ul className="space-y-2">
                {provider.services.map((service, i) => (
                  <li key={i} className="flex items-center gap-2 text-gray-600">
                    <div className="w-1.5 h-1.5 bg-blue-600 rounded-full" />
                    {service}
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