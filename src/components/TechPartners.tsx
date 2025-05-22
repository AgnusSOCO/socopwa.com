import React from 'react';
import { motion } from 'framer-motion';

const partners = [
  {
    name: "Microsoft",
    logo: "https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE1Mu3b?ver=5c31",
    description: "Cloud computing and enterprise software solutions"
  },
  {
    name: "Cisco",
    logo: "https://upload.wikimedia.org/wikipedia/commons/0/08/Cisco_logo_blue_2016.svg",
    description: "Networking technology and IT infrastructure solutions"
  },
  {
    name: "Dell Technologies",
    logo: "https://upload.wikimedia.org/wikipedia/commons/1/18/Dell_logo_2016.svg",
    description: "Enterprise hardware and digital transformation solutions"
  },
  {
    name: "VMware",
    logo: "https://upload.wikimedia.org/wikipedia/commons/9/9a/Vmware.svg",
    description: "Virtualization and cloud infrastructure solutions"
  },
  {
    name: "Palo Alto Networks",
    logo: "https://www.paloaltonetworks.com/content/dam/pan/en_US/images/logos/brand/primary-company-logo-color-rgb.png",
    description: "Next-generation cybersecurity solutions"
  },
  {
    name: "Fortinet",
    logo: "https://upload.wikimedia.org/wikipedia/commons/6/62/Fortinet_logo.svg",
    description: "Advanced cybersecurity solutions and network security"
  },
  {
    name: "HPE",
    logo: "https://upload.wikimedia.org/wikipedia/commons/4/44/Hewlett_Packard_Enterprise_logo.svg",
    description: "Enterprise technology and solutions provider"
  },
  {
    name: "Verkada",
    logo: "https://assets-global.website-files.com/5e7c982b7518ee8a6c3c2d1b/5e7c982b7518ee7b913c2d5e_verkada-logo-black.svg",
    description: "Leading provider of enterprise security solutions"
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
