import React from 'react';
import { motion } from 'framer-motion';
import { Users, Rocket, Heart, GraduationCap } from 'lucide-react';
import { Link } from 'react-router-dom';

const benefits = [
  {
    icon: <Rocket className="w-6 h-6" />,
    title: "Innovation",
    description: "Work with cutting-edge technologies"
  },
  {
    icon: <Heart className="w-6 h-6" />,
    title: "Work-Life Balance",
    description: "Flexible schedules and remote options"
  },
  {
    icon: <GraduationCap className="w-6 h-6" />,
    title: "Growth",
    description: "Continuous learning opportunities"
  }
];

export function CareersHero() {
  return (
    <div className="relative min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900 pt-32 overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80')] bg-cover bg-center opacity-10" />
        
        {/* Animated gradient overlay */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-blue-600/20 via-purple-600/20 to-blue-600/20"
          animate={{
            backgroundPosition: ['0% 0%', '100% 0%'],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "linear"
          }}
          style={{ backgroundSize: '200% 100%' }}
        />
        
        {/* Animated circles */}
        {[...Array(3)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-gradient-to-r from-blue-500/20 to-purple-500/20 blur-xl"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{
              scale: [0.8, 1.2, 0.8],
              opacity: [0.3, 0.6, 0.3],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              delay: i * 2,
              ease: "easeInOut",
            }}
            style={{
              left: `${20 + i * 25}%`,
              top: `${30 + i * 15}%`,
              width: `${200 + i * 50}px`,
              height: `${200 + i * 50}px`,
            }}
          />
        ))}
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
            <Users className="w-8 h-8 text-blue-400" />
          </motion.div>
          
          <h1 className="text-5xl md:text-7xl font-bold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-white via-blue-200 to-white">
            Join Our Team of Innovators
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-100 mb-12 leading-relaxed">
            Be part of a team that's shaping the future of technology. We're always looking 
            for talented individuals who share our passion for innovation.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 + index * 0.1 }}
                className="bg-white/10 backdrop-blur-md p-6 rounded-xl border border-white/20"
              >
                <div className="w-12 h-12 bg-blue-600/20 rounded-lg flex items-center justify-center mb-4 mx-auto">
                  <div className="text-blue-400">{benefit.icon}</div>
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">{benefit.title}</h3>
                <p className="text-gray-300">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}