import React from 'react';
import { motion } from 'framer-motion';

const timeline = [
  {
    year: "2009",
    title: "Company Founded",
    description: "Started as a small IT consulting firm in Silicon Valley"
  },
  {
    year: "2012",
    title: "International Expansion",
    description: "Opened our first office in Mexico City"
  },
  {
    year: "2015",
    title: "Cloud Innovation",
    description: "Launched our cloud services division"
  },
  {
    year: "2018",
    title: "AI Integration",
    description: "Began offering AI implementation services"
  },
  {
    year: "2023",
    title: "Global Recognition",
    description: "Named one of the top IT consulting firms globally"
  }
];

export function AboutTimeline() {
  return (
    <div className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-16 text-gray-900">Our Journey</h2>
        <div className="relative">
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-blue-100" />
          {timeline.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={`relative flex items-center justify-${index % 2 === 0 ? 'end' : 'start'} mb-8`}
            >
              <div className={`w-1/2 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8'}`}>
                <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-200">
                  <span className="text-blue-600 font-bold">{item.year}</span>
                  <h3 className="text-xl font-semibold my-2 text-gray-900">{item.title}</h3>
                  <p className="text-gray-600">{item.description}</p>
                </div>
              </div>
              <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-blue-600 rounded-full border-4 border-white" />
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}