import React from 'react';
import { motion } from 'framer-motion';
import { SEO } from '../components/SEO';
import { AboutHero } from '../components/about/AboutHero';
import { AboutMissionVision } from '../components/about/AboutMissionVision';
import { AboutValues } from '../components/about/AboutValues';
import { AboutTimeline } from '../components/about/AboutTimeline';
import { AboutGlobalPresence } from '../components/about/AboutGlobalPresence';
import { AboutInnovation } from '../components/about/AboutInnovation';

export default function About() {
  return (
    <>
      <SEO 
        title="About Us"
        description="Learn about SOCO PWA's journey, mission, and commitment to excellence in IT solutions."
      />
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="bg-white"
      >
        <AboutHero />
        <AboutMissionVision />
        <AboutInnovation />
        <AboutValues />
        <AboutTimeline />
        <AboutGlobalPresence />
      </motion.div>
    </>
  );
}