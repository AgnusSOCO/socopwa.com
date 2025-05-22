import React from 'react';
import { motion } from 'framer-motion';

export function ContactMap() {
  return (
    <div className="bg-gray-50 py-24">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-white p-4 rounded-xl shadow-lg"
        >
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3764.9932708510714!2d-99.20239548469657!3d19.323844986945365!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85cdff8c11d3ec89%3A0x9b4c0db5c4d2a998!2sAv.%20Insurgentes%20Sur%202453%2C%20San%20%C3%81ngel%2C%20%C3%81lvaro%20Obreg%C3%B3n%2C%2001090%20Ciudad%20de%20M%C3%A9xico%2C%20CDMX%2C%20Mexico!5e0!3m2!1sen!2sus!4v1647887774745!5m2!1sen!2sus"
            width="100%"
            height="450"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Office Location"
            className="rounded-lg"
          />
        </motion.div>
      </div>
    </div>
  );
}