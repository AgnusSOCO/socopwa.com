import React from 'react';
import { motion } from 'framer-motion';
import { SEO } from '../components/SEO';
import { CareersHero } from '../components/careers/CareersHero';
import { CareersCulture } from '../components/careers/CareersCulture';
import { CareersOpenings } from '../components/careers/CareersOpenings';

export default function Careers() {
  return (
    <>
      <SEO 
        title="Careers"
        description="Join our team and be part of shaping the future of technology."
      />
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <CareersHero />
        <CareersCulture />
        <CareersOpenings />
      </motion.div>
    </>
  );
}