import React from 'react';
import { motion } from 'framer-motion';
import { AlertCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

export function CareersOpenings() {
  return (
    <div className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto text-center bg-gray-50 p-8 rounded-xl shadow-lg"
        >
          <div className="text-blue-600 mb-6">
            <AlertCircle className="w-12 h-12 mx-auto" />
          </div>
          <h2 className="text-2xl font-bold mb-4 text-gray-900">No Current Openings</h2>
          <p className="text-gray-600 mb-8">
            While we don't have any open positions at the moment, we're always interested in connecting with talented professionals. Feel free to check back later or reach out to us.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
          >
            Contact Us
          </Link>
        </motion.div>
      </div>
    </div>
  );
}