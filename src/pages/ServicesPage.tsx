import React from 'react';
import { motion } from 'framer-motion';
import { Zap } from 'lucide-react';
import { Link } from 'react-router-dom';
import { SEO } from '../components/SEO';
import { ServiceCard } from '../components/services/ServiceCard';
import { ServiceHighlights } from '../components/services/ServiceHighlights';
import { ServiceProcess } from '../components/services/ServiceProcess';
import { services } from '../data/services';

export default function ServicesPage() {
  return (
    <>
      <SEO 
        title="Services"
        description="Explore our comprehensive range of IT solutions and services designed to transform your business."
      />
      <div className="pt-20">
        {/* Hero Section */}
        <div className="relative bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900 text-white py-24">
          <div className="absolute inset-0">
            <img
              src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80"
              alt="Services Hero"
              className="w-full h-full object-cover opacity-10"
            />
            <div className="absolute inset-0 bg-gradient-to-br from-gray-900/50 via-blue-900/50 to-gray-900/50" />
          </div>
          
          <div className="container mx-auto px-6 relative">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="max-w-3xl mx-auto text-center"
            >
              <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-white to-blue-400">
                Our Services
              </h1>
              <p className="text-xl text-gray-300 mb-8">
                Comprehensive IT solutions designed to transform your business and drive growth in the digital age.
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

        <ServiceHighlights />

        {/* Services Grid */}
        <div className="py-24 bg-gray-50">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-4xl font-bold text-gray-900 mb-4"
              >
                Transform Your Business
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="text-xl text-gray-600 max-w-3xl mx-auto"
              >
                Explore our comprehensive range of services designed to help your business thrive in the digital age.
              </motion.p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <ServiceCard key={index} {...service} index={index} />
              ))}
            </div>
          </div>
        </div>

        <ServiceProcess />
      </div>
    </>
  );
}