import React from 'react';
import { motion } from 'framer-motion';
import { Building2, Award, Shield } from 'lucide-react';

const partnerships = [
  {
    icon: <Building2 className="w-6 h-6" />,
    name: "INFONAVIT",
    role: "Strategic Technology Partner"
  },
  {
    icon: <Award className="w-6 h-6" />,
    name: "FMAA",
    role: "Digital Solutions Provider"
  },
  {
    icon: <Shield className="w-6 h-6" />,
    name: "Mexican Government",
    role: "Trusted IT Partner"
  }
];

export function HeroTrustedBy() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 1.2 }}
      className="mt-20"
    >
      <div className="flex flex-col items-center">
        <motion.div 
          initial={{ width: 0 }}
          animate={{ width: '40px' }}
          transition={{ delay: 1.4 }}
          className="h-px bg-gradient-to-r from-transparent via-blue-500 to-transparent mb-4"
        />
        <p className="text-blue-200/80 text-sm font-medium tracking-wider uppercase">
          Official Technology Partner
        </p>
      </div>
      
      <div className="flex flex-wrap justify-center gap-12 mt-8">
        {partnerships.map((partner, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.4 + index * 0.1 }}
            className="flex items-center gap-3"
          >
            <div className="text-blue-400">
              {partner.icon}
            </div>
            <div>
              <p className="font-semibold text-white">{partner.name}</p>
              <p className="text-blue-200/60 text-sm">{partner.role}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}