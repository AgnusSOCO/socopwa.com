import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { LucideIcon } from 'lucide-react';

interface ServiceCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  link: string;
  features: string[];
  index: number;
}

export function ServiceCard({ icon: Icon, title, description, link, features, index }: ServiceCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      className="group relative bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300"
    >
      <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-blue-600 to-purple-600" />
      
      <div className="relative p-8">
        <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mb-6 text-blue-600 transform group-hover:scale-110 transition-transform duration-300">
          <Icon className="w-8 h-8" />
        </div>
        
        <h3 className="text-2xl font-bold mb-4 text-gray-900">{title}</h3>
        <p className="text-gray-600 mb-6">{description}</p>
        
        <ul className="space-y-2 mb-8">
          {features.map((feature, i) => (
            <li key={i} className="flex items-center gap-2 text-gray-600">
              <div className="w-1.5 h-1.5 bg-blue-600 rounded-full" />
              {feature}
            </li>
          ))}
        </ul>
        
        <Link
          to={link}
          className="inline-flex items-center gap-2 text-blue-600 font-semibold group-hover:gap-3 transition-all"
        >
          Learn More
          <ArrowRight className="w-5 h-5" />
        </Link>
      </div>
    </motion.div>
  );
}