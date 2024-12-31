import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Clock, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export function ContactInfo() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="space-y-8"
    >
      <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl p-8 text-white shadow-xl">
        <h2 className="text-2xl font-bold mb-8">Contact Information</h2>
        
        <div className="space-y-6">
          <motion.a
            href="mailto:contact@socopwa.com"
            className="flex items-start gap-4 p-4 rounded-xl bg-white/5 hover:bg-white/10 transition-colors group"
            whileHover={{ x: 4 }}
          >
            <Mail className="w-6 h-6 text-blue-400 flex-shrink-0" />
            <div className="flex-grow">
              <p className="font-medium mb-1">Email Us</p>
              <p className="text-gray-300">contact@socopwa.com</p>
            </div>
            <ArrowRight className="w-4 h-4 text-gray-400 transform group-hover:translate-x-1 transition-transform" />
          </motion.a>

          <motion.a
            href="tel:+18058641517"
            className="flex items-start gap-4 p-4 rounded-xl bg-white/5 hover:bg-white/10 transition-colors group"
            whileHover={{ x: 4 }}
          >
            <Phone className="w-6 h-6 text-blue-400 flex-shrink-0" />
            <div className="flex-grow">
              <p className="font-medium mb-1">Call Us</p>
              <p className="text-gray-300">+1 (805) 864-1517</p>
            </div>
            <ArrowRight className="w-4 h-4 text-gray-400 transform group-hover:translate-x-1 transition-transform" />
          </motion.a>

          <motion.div
            className="p-4 rounded-xl bg-white/5"
            whileHover={{ x: 4 }}
          >
            <div className="flex items-start gap-4">
              <MapPin className="w-6 h-6 text-blue-400 flex-shrink-0" />
              <div>
                <p className="font-medium mb-1">Visit Us</p>
                <p className="text-gray-300">
                  Avenida Insurgentes Sur. 2453 int. 201<br />
                  Col. Tizapán Alcaldía Álvaro Obregón<br />
                  CP 01090 CDMX
                </p>
              </div>
            </div>
          </motion.div>
        </div>

        <div className="mt-12 pt-8 border-t border-white/10">
          <h3 className="font-medium mb-4">Business Hours</h3>
          <div className="space-y-2 text-gray-300">
            <div className="flex justify-between">
              <span>Monday - Friday</span>
              <span>9:00 AM - 6:00 PM (PST)</span>
            </div>
            <div className="flex justify-between">
              <span>Saturday</span>
              <span>10:00 AM - 2:00 PM (PST)</span>
            </div>
            <div className="flex justify-between text-gray-400">
              <span>Sunday</span>
              <span>Closed</span>
            </div>
          </div>
        </div>

        <div className="mt-12">
          <Link
            to="/about"
            className="inline-flex items-center gap-2 text-sm text-gray-300 hover:text-white group"
          >
            Learn more about us
            <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </motion.div>
  );
}