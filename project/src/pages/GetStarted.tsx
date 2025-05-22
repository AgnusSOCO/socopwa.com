import React from 'react';
import { motion } from 'framer-motion';
import { PageHeader } from '../components/PageHeader';
import { SEO } from '../components/SEO';
import { GetStartedForm } from '../components/forms/GetStartedForm';

export function GetStarted() {
  return (
    <>
      <SEO 
        title="Get Started"
        description="Start your digital transformation journey with SOCO PWA. Let us help you innovate and grow."
      />
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="pt-20"
      >
        <PageHeader
          title="Get Started with SOCO PWA"
          description="Tell us about your project and we'll get back to you within 24 hours."
        />

        <div className="py-24 bg-white">
          <div className="container mx-auto px-6">
            <div className="max-w-3xl mx-auto">
              <GetStartedForm />
            </div>
          </div>
        </div>
      </motion.div>
    </>
  );
}