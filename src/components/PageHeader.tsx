import React from 'react';
import { motion } from 'framer-motion';
import { Breadcrumbs } from './Breadcrumbs';

interface PageHeaderProps {
  title: string;
  description: string;
}

export function PageHeader({ title, description }: PageHeaderProps) {
  return (
    <div className="bg-gradient-to-b from-gray-900 to-gray-800 text-white">
      <Breadcrumbs />
      <div className="container mx-auto px-6 py-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl"
        >
          <h1 className="text-5xl font-bold mb-6">{title}</h1>
          <p className="text-xl text-gray-300">{description}</p>
        </motion.div>
      </div>
    </div>
  );
}