import React from 'react';
import { motion } from 'framer-motion';
import { BookOpen, Hash } from 'lucide-react';

const categories = [
  "All",
  "AI & Machine Learning",
  "Cloud Computing",
  "Cybersecurity",
  "Digital Transformation"
];

export function BlogHero() {
  return (
    <div className="relative bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900 pt-32 pb-24 overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&q=80')] bg-cover bg-center opacity-5" />
        <motion.div
          className="absolute inset-0"
          animate={{
            backgroundPosition: ['0% 0%', '100% 100%'],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            repeatType: 'reverse',
          }}
          style={{
            background: 'radial-gradient(circle at center, rgba(59, 130, 246, 0.1) 0%, transparent 70%)',
          }}
        />
      </div>
      
      <div className="container mx-auto px-6 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="max-w-4xl mx-auto text-center"
        >
          <motion.div 
            className="inline-flex items-center justify-center p-3 bg-blue-600/10 rounded-2xl backdrop-blur-sm border border-blue-500/20 mb-8"
            whileHover={{ scale: 1.05 }}
          >
            <BookOpen className="w-8 h-8 text-blue-400" />
          </motion.div>
          
          <div className="mb-12">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 text-white">
              Insights & Innovation
            </h1>
            <p className="text-xl text-gray-300">
              Stay updated with the latest in technology, cybersecurity, and digital transformation
            </p>
          </div>

          {/* Category filter */}
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((category, index) => (
              <motion.button
                key={category}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 + index * 0.1 }}
                className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 hover:bg-white/20 backdrop-blur-md rounded-full text-white transition-colors"
              >
                <Hash className="w-4 h-4" />
                {category}
              </motion.button>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}