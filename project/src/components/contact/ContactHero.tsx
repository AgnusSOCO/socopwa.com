import React from 'react';
import { motion } from 'framer-motion';
import { MessageCircle, ArrowRight } from 'lucide-react';

export function ContactHero() {
  return (
    <div className="relative bg-gradient-to-br from-blue-900 via-gray-900 to-purple-900 pt-32 pb-24 overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&q=80')] bg-cover bg-center opacity-10" />
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
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto text-center"
        >
          <motion.div 
            className="inline-flex items-center justify-center p-3 bg-blue-600/10 rounded-2xl backdrop-blur-sm border border-blue-500/20 mb-8"
            whileHover={{ scale: 1.05 }}
          >
            <MessageCircle className="w-8 h-8 text-blue-400" />
          </motion.div>
          
          <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-white to-purple-400">
            Let's Start a Conversation
          </h1>
          
          <p className="text-xl text-gray-300 mb-8 leading-relaxed">
            Have a project in mind? We'd love to hear about it. Let's discuss how we can help bring your ideas to life.
          </p>
          
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="flex flex-wrap justify-center gap-4 text-sm text-gray-400"
          >
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-green-500" />
              <span>Available 24/7</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-blue-500" />
              <span>Response within 24 hours</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-purple-500" />
              <span>Free initial consultation</span>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}