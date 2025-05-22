import React from 'react';
import { motion } from 'framer-motion';
import { Zap } from 'lucide-react';
import { Link } from 'react-router-dom';

export function ServicesHero() {
  return (
    <div className="relative bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900 pt-32 pb-24 overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80')] bg-cover bg-center opacity-10" />
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900/50 via-blue-900/50 to-gray-900/50" />
      </div>

      <div className="container mx-auto px-6 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto text-center"
        >
          <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-white to-blue-400">
            Professional IT Solutions
          </h1>
          <p className="text-xl text-gray-300 mb-8 leading-relaxed">
            Transform your business with our comprehensive range of IT services. From AI integration to cloud solutions, we deliver innovation that drives growth.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 bg-blue-600 text-white px-8 py-4 rounded-lg hover:bg-blue-700 transition-colors"
          >
            Get Started
            <Zap className="w-5 h-5" />
          </Link>
        </motion.div>
      </div>
    </div>
  );
}