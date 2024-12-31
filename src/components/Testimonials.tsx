import React from 'react';
import { motion } from 'framer-motion';
import { Star } from 'lucide-react';

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "CTO, TechCorp",
    content: "SOCO PWA transformed our IT infrastructure. Their AI integration solutions have significantly improved our operational efficiency.",
    rating: 5
  },
  {
    name: "Michael Chen",
    role: "CEO, InnovateTech",
    content: "Outstanding cybersecurity services. They helped us implement robust security measures that give us peace of mind.",
    rating: 5
  },
  {
    name: "Emily Rodriguez",
    role: "Operations Director, DataFlow",
    content: "The Google Workspace migration was seamless. Their team's expertise and support made the transition smooth for our entire organization.",
    rating: 5
  }
];

export function Testimonials() {
  return (
    <div className="py-24 bg-gray-50">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-16 text-gray-900">What Our Clients Say</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              viewport={{ once: true }}
              className="bg-white p-8 rounded-xl shadow-lg border border-gray-100"
            >
              <div className="flex mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-gray-600 mb-6">{testimonial.content}</p>
              <div>
                <p className="font-semibold text-gray-900">{testimonial.name}</p>
                <p className="text-gray-500 text-sm">{testimonial.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}