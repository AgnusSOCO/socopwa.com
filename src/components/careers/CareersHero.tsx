import React from 'react';
import { motion } from 'framer-motion';
import { Users, Rocket, Heart, GraduationCap } from 'lucide-react';

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
  },
  {
    icon: <Users className="w-6 h-6" />,
    title: "Culture",
    description: "Collaborative and inclusive environment"
  }
];

export function CareersHero() {
  return (
    <div className="relative min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900 pt-32 overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80')] bg-cover bg-center opacity-5" />
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
        <div className="max-w-4xl mx-auto text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-5xl md:text-7xl font-bold mb-8 text-white">
              Join Our Team of Innovators
            </h1>
            <p className="text-xl md:text-2xl text-gray-100 leading-relaxed mb-12">
              Be part of a team that's shaping the future of technology. We're always looking 
              for talented individuals who share our passion for innovation.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="inline-flex gap-4"
          >
            <a
              href="#positions"
              className="px-8 py-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
            >
              View Open Positions
            </a>
            <a
              href="#culture"
              className="px-8 py-4 bg-white/10 text-white rounded-lg hover:bg-white/20 transition-colors backdrop-blur-sm"
            >
              Our Culture
            </a>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 pb-24">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 + index * 0.1 }}
              className="bg-white/10 backdrop-blur-md p-6 rounded-xl border border-white/20"
            >
              <div className="w-12 h-12 bg-blue-600/20 rounded-lg flex items-center justify-center mb-4">
                <div className="text-blue-400">{benefit.icon}</div>
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">{benefit.title}</h3>
              <p className="text-gray-300">{benefit.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}