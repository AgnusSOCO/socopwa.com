import React from 'react';
import { motion } from 'framer-motion';
import { Rocket, Shield, Brain, Globe } from 'lucide-react';

export function AboutHero() {
  return (
    <div className="relative min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900 text-white overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80')] bg-cover bg-center opacity-5" />
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
      
      <div className="container mx-auto px-6 relative pt-32 pb-24">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h1 className="text-5xl md:text-7xl font-bold mb-8 text-white">
              Transforming the Future of Technology
            </h1>
            <p className="text-xl md:text-2xl text-gray-100 leading-relaxed">
              Since 2009, we've been at the forefront of digital innovation, helping businesses 
              across the globe embrace the power of technology.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                icon: <Brain className="w-8 h-8" />,
                title: "Innovation Leaders",
                description: "Pioneering AI and cloud solutions that define industry standards"
              },
              {
                icon: <Shield className="w-8 h-8" />,
                title: "Trusted Partner",
                description: "Securing and transforming critical government infrastructure"
              },
              {
                icon: <Globe className="w-8 h-8" />,
                title: "Global Impact",
                description: "Delivering excellence across borders and industries"
              },
              {
                icon: <Rocket className="w-8 h-8" />,
                title: "Future Ready",
                description: "Building tomorrow's digital solutions today"
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 + index * 0.1 }}
                className="bg-white/20 backdrop-blur-lg p-6 rounded-xl border border-white/20"
              >
                <div className="flex items-center gap-4">
                  <div className="text-white">{item.icon}</div>
                  <div>
                    <h3 className="text-xl font-semibold mb-1 text-white">{item.title}</h3>
                    <p className="text-gray-100">{item.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}