import React from 'react';
import { motion } from 'framer-motion';
import { MapPin } from 'lucide-react';

export function AboutGlobalPresence() {
  return (
    <div className="py-24 bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900 text-white">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold mb-6">Global Presence</h2>
            <p className="text-gray-300 mb-8 leading-relaxed">
              With offices in the United States and Mexico, we serve clients worldwide, providing comprehensive IT solutions that transcend borders and drive international business success.
            </p>
            <div className="grid grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold mb-2 text-white">United States</h4>
                <div className="flex items-start gap-2 text-gray-300">
                  <MapPin className="w-5 h-5 mt-1 flex-shrink-0 text-blue-400" />
                  <div>
                    <p>Silicon Valley, CA</p>
                    <p>New York, NY</p>
                  </div>
                </div>
              </div>
              <div>
                <h4 className="font-semibold mb-2 text-white">Mexico</h4>
                <div className="flex items-start gap-2 text-gray-300">
                  <MapPin className="w-5 h-5 mt-1 flex-shrink-0 text-blue-400" />
                  <div>
                    <p>Mexico City</p>
                    <p>Monterrey</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
          <motion.div
            initial={{ x: 50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            className="relative h-96"
          >
            <img
              src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80"
              alt="Global Operations"
              className="w-full h-full object-cover rounded-lg"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/50 to-transparent rounded-lg" />
          </motion.div>
        </div>
      </div>
    </div>
  );
}