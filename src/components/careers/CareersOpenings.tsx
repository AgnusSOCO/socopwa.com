import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Briefcase, CheckCircle, Calendar, MapPin, DollarSign, Plane, X } from 'lucide-react';

const jobOpenings = [
  {
    title: "Assistant Project Manager (Summer Internship)",
    type: "Temporary (Summer 2025)",
    location: "Remote",
    salary: "$12-15/hour",
    description: "Exciting opportunity for college students to gain hands-on experience in project management while working remotely with our dynamic technology team. Includes opportunity to travel to Mexico City to meet the team and clients, fostering international business experience.",
    responsibilities: [
      "Assist in coordinating project timelines and deliverables",
      "Help organize and schedule team meetings",
      "Maintain project documentation and status reports",
      "Support team communication and collaboration",
      "Track project milestones and updates",
      "Help prepare project presentations",
      "Assist with basic resource allocation"
    ],
    requirements: [
      "Currently enrolled college student",
      "Strong organizational skills",
      "Excellent written and verbal communication",
      "Familiarity with basic project management tools",
      "Ability to work independently",
      "Reliable internet connection",
      "Available for full-time summer work"
    ],
    benefits: [
      "$12-15/hour compensation",
      "Flexible remote work schedule",
      "Travel opportunity to Mexico City",
      "Real-world project experience",
      "Professional mentorship",
      "International business exposure",
      "Networking opportunities",
      "Performance evaluation",
      "Potential for future opportunities"
    ]
  }
];

export function CareersOpenings() {
  const [isApplicationOpen, setIsApplicationOpen] = useState(false);

  return (
    <div className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-5xl mx-auto"
        >
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Open Positions</h2>
          
          {jobOpenings.map((job, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="bg-white rounded-xl shadow-lg border border-gray-100 p-8 mb-8"
            >
              <div className="flex flex-wrap items-start justify-between gap-4 mb-6">
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{job.title}</h3>
                  <div className="flex flex-wrap gap-4 text-gray-600">
                    <div className="flex items-center gap-1">
                      <Briefcase className="w-4 h-4" />
                      <span>{job.type}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <MapPin className="w-4 h-4" />
                      <span>{job.location}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <DollarSign className="w-4 h-4" />
                      <span>{job.salary}</span>
                    </div>
                    <div className="flex items-center gap-1 text-blue-600">
                      <Plane className="w-4 h-4" />
                      <span>Mexico City Travel</span>
                    </div>
                  </div>
                </div>
                <button
                  onClick={() => setIsApplicationOpen(true)}
                  className="inline-flex items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
                >
                  Apply Now
                </button>
              </div>

              <p className="text-gray-600 mb-8">{job.description}</p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-4">Responsibilities</h4>
                  <ul className="space-y-2">
                    {job.responsibilities.map((item, i) => (
                      <li key={i} className="flex items-start gap-2 text-gray-600">
                        <CheckCircle className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-4">Requirements</h4>
                  <ul className="space-y-2">
                    {job.requirements.map((item, i) => (
                      <li key={i} className="flex items-start gap-2 text-gray-600">
                        <CheckCircle className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div>
                <h4 className="text-lg font-semibold text-gray-900 mb-4">Benefits</h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                  {job.benefits.map((benefit, i) => (
                    <div key={i} className="flex items-center gap-2 text-gray-600">
                      <CheckCircle className="w-5 h-5 text-blue-600 flex-shrink-0" />
                      <span>{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Application Modal */}
        <AnimatePresence>
          {isApplicationOpen && (
            <>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="fixed inset-0 bg-black/50 backdrop-blur-sm z-[60]"
                onClick={() => setIsApplicationOpen(false)}
              />
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                className="fixed inset-x-4 top-24 bottom-4 md:inset-x-10 md:bottom-10 bg-white rounded-xl shadow-2xl z-[70] overflow-hidden"
              >
                <div className="relative h-full flex flex-col">
                  <div className="absolute top-4 right-4 z-10">
                    <button
                      onClick={() => setIsApplicationOpen(false)}
                      className="p-2 hover:bg-gray-100 rounded-full transition-colors"
                      aria-label="Close application form"
                    >
                      <X className="w-6 h-6 text-gray-500" />
                    </button>
                  </div>
                  <div className="flex-1 overflow-hidden">
                    <iframe
                      src="https://socopwa.formaloo.co/cb6x84"
                      className="w-full h-full"
                      style={{ minHeight: "750px" }}
                      frameBorder="0"
                      allowTransparency
                      scrolling="yes"
                      onLoad={() => window.scrollTo(0, 0)}
                    />
                  </div>
                </div>
              </motion.div>
            </>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}