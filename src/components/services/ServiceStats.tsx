import React from 'react';
import { motion } from 'framer-motion';
import { Users, CheckCircle, Award } from 'lucide-react';

const stats = [
  {
    icon: <Users className="w-8 h-8" />,
    value: "500+",
    label: "Clients Worldwide",
    color: "from-blue-600 to-blue-400"
  },
  {
    icon: <CheckCircle className="w-8 h-8" />,
    value: "98%",
    label: "Client Satisfaction",
    color: "from-green-600 to-green-400"
  },
  {
    icon: <Award className="w-8 h-8" />,
    value: "15+",
    label: "Years Experience",
    color: "from-purple-600 to-purple-400"
  }
];

export function ServiceStats() {
  return (
    <div className="py-16 bg-gray-900">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="relative group"
            >
              <div className={`absolute inset-0 bg-gradient-to-r ${stat.color} opacity-0 group-hover:opacity-10 rounded-xl transition-opacity duration-300`} />
              <div className="relative bg-gray-800 rounded-xl p-8">
                <div className={`text-gradient-to-r ${stat.color} mb-4`}>{stat.icon}</div>
                <div className="text-4xl font-bold text-white mb-2">{stat.value}</div>
                <div className="text-gray-400">{stat.label}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}