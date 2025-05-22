import React from 'react';
import { motion } from 'framer-motion';
import { Cloud, Zap } from 'lucide-react';
import { SEO } from '../../components/SEO';
import { Link } from 'react-router-dom';
import { CloudFeatures } from '../../components/services/cloud/CloudFeatures';
import { CloudProviders } from '../../components/services/cloud/CloudProviders';
import { CloudBenefits } from '../../components/services/cloud/CloudBenefits';
import { CloudProcess } from '../../components/services/cloud/CloudProcess';

export default function CloudServices() {
  return (
    <>
      <SEO 
        title="Cloud Services"
        description="Transform your business with our comprehensive cloud solutions."
      />
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="pt-20"
      >
        {/* Hero Section */}
        <div className="relative bg-gradient-to-b from-gray-900 to-gray-800 text-white py-24">
          <div className="absolute inset-0">
            <img
              src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80"
              alt="Cloud Computing"
              className="w-full h-full object-cover opacity-10"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-gray-900/50 to-gray-900/90" />
          </div>
          
          <div className="container mx-auto px-6 relative">
            <div className="max-w-3xl">
              <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.2 }}
              >
                <div className="flex items-center gap-4 mb-6">
                  <Cloud className="w-12 h-12 text-blue-400" />
                  <h1 className="text-5xl font-bold">Cloud Services</h1>
                </div>
                <p className="text-xl text-gray-300 mb-8">
                  Transform your business with scalable, secure, and efficient cloud solutions.
                  Our expertise spans across major cloud platforms to deliver the perfect infrastructure for your needs.
                </p>
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
                >
                  Get Started
                  <Zap className="w-5 h-5" />
                </Link>
              </motion.div>
            </div>
          </div>
        </div>

        <CloudFeatures />
        <CloudBenefits />
        <CloudProcess />
        <CloudProviders />

        {/* CTA Section */}
        <div className="bg-blue-600 text-white py-24">
          <div className="container mx-auto px-6 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold mb-6">Ready to Move to the Cloud?</h2>
              <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
                Let's discuss how our cloud solutions can transform your business operations.
              </p>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors"
              >
                Schedule a Consultation
                <Zap className="w-5 h-5" />
              </Link>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </>
  );
}