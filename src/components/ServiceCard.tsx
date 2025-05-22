import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import type { LucideIcon } from 'lucide-react';

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
      {/* Animated gradient border */}
      <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-blue-600 to-purple-600" />
      
      <div className="relative p-8">
        {/* Animated icon container */}
        <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mb-6 text-blue-600 transform group-hover:scale-110 transition-transform duration-300">
          <Icon className="w-8 h-8" />
        </div>
        
        <h3 className="text-2xl font-bold mb-4 text-gray-900">{title}</h3>
        <p className="text-gray-600 mb-6">{description}</p>
        
        {/* Feature list with animated dots */}
        <ul className="space-y-2 mb-8">
          {features.map((feature, i) => (
            <li key={i} className="flex items-center gap-2 text-gray-600">
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: (index * 0.1) + (i * 0.1) }}
                className="w-1.5 h-1.5 bg-blue-600 rounded-full"
              />
              {feature}
            </li>
          ))}
        </ul>
        
        {/* Animated link */}
        <Link
          to={link}
          className="inline-flex items-center gap-2 text-blue-600 font-semibold group-hover:gap-3 transition-all"
        >
          Learn More
          <ArrowRight className="w-5 h-5" />
        </Link>

        {/* Hover effect background */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"
          initial={false}
          animate={{ 
            backgroundPosition: ['0% 0%', '100% 100%'],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "linear"
          }}
        />

        {/* Decorative elements */}
        <div className="absolute top-4 right-4 w-20 h-20 bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-full blur-2xl transform group-hover:scale-150 transition-transform duration-500" />
        <div className="absolute bottom-4 left-4 w-16 h-16 bg-gradient-to-tr from-blue-500/10 to-purple-500/10 rounded-full blur-2xl transform group-hover:scale-150 transition-transform duration-500" />
      </div>
    </motion.div>
  );
}