import React from 'react';
import { motion } from 'framer-motion';
import { Hero } from './Hero';
import { Services } from './Services';
import { Stats } from './Stats';
import { Contact } from './Contact';
import { Testimonials } from './Testimonials';
import { CaseStudies } from './CaseStudies';
import { TechPartners } from './TechPartners';
import { Certifications } from './Certifications';
import { InteractiveDemo } from './InteractiveDemo';
import { AIPlayground } from './AIPlayground';
import { SEO } from './SEO';

export function Home() {
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
        <InteractiveDemo />
        <CaseStudies />
        <Stats />
        <AIPlayground />
        <TechPartners />
        <Testimonials />
        <Certifications />
        <Contact />
      </motion.div>
    </>
  );
}