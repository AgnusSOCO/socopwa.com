import React from 'react';
import { motion } from 'framer-motion';
import { Rocket, Target } from 'lucide-react';

export function AboutMissionVision() {
  return (
    <div className="py-24 bg-white relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-1/2 bg-gradient-to-b from-blue-50 to-transparent opacity-50 blur-3xl" />
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1/2 h-1/2 bg-gradient-to-t from-purple-50 to-transparent opacity-50 blur-3xl" />
      </div>

      <div className="container mx-auto px-6 relative">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="group relative h-full"
          >
            {/* Card background with gradient border */}
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-blue-600 rounded-xl blur-[2px] opacity-20 group-hover:opacity-30 transition-opacity" />
            
            <div className="relative bg-white p-8 rounded-xl shadow-lg border border-blue-100 h-full">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Rocket className="w-6 h-6 text-white" />
              </div>
              <h2 className="text-2xl font-bold mb-4 text-gray-900">Our Mission</h2>
              <p className="text-gray-600 leading-relaxed">
                To empower businesses with innovative IT solutions that drive growth, enhance security, and streamline operations. We are committed to delivering personalized, cutting-edge technology services that meet the unique needs of each client, ensuring their success in the digital age.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="group relative h-full"
          >
            {/* Card background with gradient border */}
            <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-blue-500 rounded-xl blur-[2px] opacity-20 group-hover:opacity-30 transition-opacity" />
            
            <div className="relative bg-white p-8 rounded-xl shadow-lg border border-purple-100 h-full">
              <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-blue-500 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Target className="w-6 h-6 text-white" />
              </div>
              <h2 className="text-2xl font-bold mb-4 text-gray-900">Our Vision</h2>
              <p className="text-gray-600 leading-relaxed">
                To be the leading provider of transformative IT solutions globally, recognized for our expertise, reliability, and commitment to excellence. We strive to create a future where businesses of all sizes can leverage advanced technology to achieve unprecedented growth and innovation in an ever-evolving digital landscape.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}