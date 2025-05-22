import React from 'react';
import { motion } from 'framer-motion';
import { Hero } from '../components/Hero';
import { Services } from '../components/Services';
import { CaseStudies } from '../components/CaseStudies';
import { TechPartners } from '../components/TechPartners';
import { Certifications } from '../components/Certifications';
import { Contact } from '../components/Contact';
import { SEO } from '../components/SEO';

function Home() {
  return (
    <>
      <SEO 
        title="Home"
        description="SOCO PWA - Leading provider of AI & Modern IT Solutions. Transform your business with our cutting-edge technology services."
      />
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <Hero />
        <Services />
        <CaseStudies />
        <TechPartners />
        <Certifications />
        <Contact />
      </motion.div>
    </>
  );
}

export default Home;