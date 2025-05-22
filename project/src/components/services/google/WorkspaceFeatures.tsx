import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Calendar, FileText, MessageSquare } from 'lucide-react';

const features = [
  {
    icon: <Mail className="w-6 h-6" />,
    title: "Gmail for Business",
    description: "Professional email with advanced collaboration features",
    capabilities: [
      "Custom Email Domain",
      "Advanced Spam Protection",
      "Email Filtering & Rules",
      "Large Attachment Support",
      "Email Templates",
      "Smart Compose & Reply"
    ]
  },
  {
    icon: <Calendar className="w-6 h-6" />,
    title: "Google Calendar",
    description: "Smart scheduling and resource management",
    capabilities: [
      "Intelligent Meeting Scheduling",
      "Resource Booking System",
      "Calendar Sharing & Permissions",
      "Meeting Room Management",
      "Automated Reminders",
      "Time Zone Intelligence"
    ]
  },
  {
    icon: <FileText className="w-6 h-6" />,
    title: "Google Docs & Drive",
    description: "Cloud-based document creation and storage",
    capabilities: [
      "Real-time Collaboration",
      "Version Control & History",
      "Advanced File Sharing",
      "Unlimited Cloud Storage",
      "Smart File Organization",
      "Offline Access"
    ]
  },
  {
    icon: <MessageSquare className="w-6 h-6" />,
    title: "Google Meet & Chat",
    description: "Secure video conferencing and team messaging",
    capabilities: [
      "HD Video Meetings",
      "Screen Sharing & Recording",
      "Team Chat & Spaces",
      "Meeting Transcription",
      "Virtual Backgrounds",
      "Live Captions"
    ]
  }
];

export function WorkspaceFeatures() {
  return (
    <div className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Google Workspace Applications</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A comprehensive suite of productivity and collaboration tools for your business
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white p-8 rounded-xl shadow-lg border border-gray-100"
            >
              <div className="text-blue-600 mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">{feature.title}</h3>
              <p className="text-gray-600 mb-6">{feature.description}</p>
              <ul className="space-y-2">
                {feature.capabilities.map((capability, i) => (
                  <li key={i} className="flex items-center gap-2 text-gray-600">
                    <div className="w-1.5 h-1.5 bg-blue-600 rounded-full" />
                    {capability}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}