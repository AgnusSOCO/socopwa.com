import React from 'react';
import { motion } from 'framer-motion';
import { Box, Zap } from 'lucide-react';
import { SEO } from '../../components/SEO';
import { Link } from 'react-router-dom';
import { WorkspaceFeatures } from '../../components/services/google/WorkspaceFeatures';
import { WorkspaceBenefits } from '../../components/services/google/WorkspaceBenefits';

export default function GoogleWorkspace() {
  return (
    <>
      <SEO 
        title="Google Workspace Solutions"
        description="Transform your workplace with Google Workspace. Expert implementation, training, and support for seamless collaboration."
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
              src="https://images.unsplash.com/photo-1600267185393-e158a98703de?auto=format&fit=crop&q=80"
              alt="Google Workspace"
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
                  <Box className="w-12 h-12 text-blue-400" />
                  <h1 className="text-5xl font-bold">Google Workspace Solutions</h1>
                </div>
                <p className="text-xl text-gray-300 mb-8">
                  Transform your workplace with modern collaboration tools. We provide comprehensive 
                  Google Workspace implementation, training, and support services.
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

        <WorkspaceFeatures />
        <WorkspaceBenefits />

        {/* CTA Section */}
        <div className="bg-blue-600 text-white py-24">
          <div className="container mx-auto px-6 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold mb-6">Ready to Transform Your Workplace?</h2>
              <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
                Let's discuss how Google Workspace can enhance your team's productivity and collaboration.
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