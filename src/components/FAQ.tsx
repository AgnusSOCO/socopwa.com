import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface FAQItem {
  question: string;
  answer: string;
}

const faqData: FAQItem[] = [
  {
    question: '¿Qué servicios de tecnología ofrece SOCO PWA?',
    answer: 'SOCO PWA ofrece una amplia gama de servicios de tecnología empresarial, incluyendo Integración de IA, Ciberseguridad, Servicios en la Nube, Soluciones FinTech, y Transformación Digital. Trabajamos con empresas en CDMX y toda México para implementar soluciones tecnológicas de vanguardia.'
  },
  {
    question: 'What technology services does SOCO PWA offer?',
    answer: 'SOCO PWA offers a comprehensive range of enterprise technology services, including AI Integration, Cybersecurity, Cloud Services, FinTech Solutions, and Digital Transformation. We work with businesses in CDMX and throughout Mexico to implement cutting-edge technology solutions.'
  },
  {
    question: '¿Cuánto tiempo toma implementar una solución de IA?',
    answer: 'El tiempo de implementación varía según la complejidad del proyecto. Proyectos básicos de IA pueden tomar 4-8 semanas, mientras que soluciones empresariales complejas pueden requerir 3-6 meses. Ofrecemos una consulta gratuita para evaluar sus necesidades específicas y proporcionar un cronograma detallado.'
  },
  {
    question: 'How long does it take to implement an AI solution?',
    answer: 'Implementation time varies based on project complexity. Basic AI projects can take 4-8 weeks, while complex enterprise solutions may require 3-6 months. We offer a free consultation to assess your specific needs and provide a detailed timeline.'
  },
  {
    question: '¿Ofrecen soporte continuo después de la implementación?',
    answer: 'Sí, ofrecemos planes de soporte continuo que incluyen monitoreo 24/7, actualizaciones de seguridad, mantenimiento preventivo, y soporte técnico dedicado. Nuestros planes se adaptan a las necesidades específicas de su empresa.'
  },
  {
    question: 'Do you offer ongoing support after implementation?',
    answer: 'Yes, we offer ongoing support plans that include 24/7 monitoring, security updates, preventive maintenance, and dedicated technical support. Our plans are tailored to your company\'s specific needs.'
  },
  {
    question: '¿Trabajan con empresas de todos los tamaños?',
    answer: 'Sí, trabajamos con empresas de todos los tamaños, desde startups hasta grandes corporaciones. Ofrecemos paquetes escalables diseñados para adaptarse a diferentes presupuestos y necesidades empresariales.'
  },
  {
    question: 'Do you work with companies of all sizes?',
    answer: 'Yes, we work with companies of all sizes, from startups to large corporations. We offer scalable packages designed to fit different budgets and business needs.'
  },
  {
    question: '¿Qué certificaciones tienen?',
    answer: 'Contamos con certificaciones de los principales proveedores de tecnología, incluyendo Microsoft, Cisco, Palo Alto Networks, Fortinet, y más. Nuestro equipo mantiene certificaciones actualizadas en ciberseguridad, cloud computing, y tecnologías emergentes.'
  },
  {
    question: 'What certifications do you have?',
    answer: 'We hold certifications from major technology providers, including Microsoft, Cisco, Palo Alto Networks, Fortinet, and more. Our team maintains up-to-date certifications in cybersecurity, cloud computing, and emerging technologies.'
  },
  {
    question: '¿Cómo puedo solicitar una cotización?',
    answer: 'Puede solicitar una cotización completando nuestro formulario de contacto, enviándonos un correo a juan@socopwa.com, o programando una consulta gratuita a través de nuestro calendario en línea. Respondemos a todas las solicitudes dentro de 24 horas.'
  },
  {
    question: 'How can I request a quote?',
    answer: 'You can request a quote by completing our contact form, emailing us at juan@socopwa.com, or scheduling a free consultation through our online calendar. We respond to all inquiries within 24 hours.'
  }
];

const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqData.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  };

  return (
    <section id="faq" className="py-20 px-4 sm:px-6 lg:px-8">
      {/* FAQ Schema for SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-white via-gray-200 to-gray-400 bg-clip-text text-transparent">
            Preguntas Frecuentes / FAQ
          </h2>
          <p className="text-gray-400 text-lg">
            Respuestas a las preguntas más comunes sobre nuestros servicios
          </p>
        </div>

        <div className="space-y-4">
          {faqData.map((faq, index) => (
            <div
              key={index}
              className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-lg overflow-hidden hover:border-gray-700 transition-colors duration-200"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-6 py-4 flex items-center justify-between text-left hover:bg-gray-800/30 transition-colors duration-200"
                aria-expanded={openIndex === index}
                aria-controls={`faq-answer-${index}`}
              >
                <h3 className="text-lg font-semibold text-white pr-4">
                  {faq.question}
                </h3>
                {openIndex === index ? (
                  <ChevronUp className="flex-shrink-0 text-gray-400" size={24} />
                ) : (
                  <ChevronDown className="flex-shrink-0 text-gray-400" size={24} />
                )}
              </button>

              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    id={`faq-answer-${index}`}
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 pb-4 text-gray-300 leading-relaxed">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-gray-400 mb-4">
            ¿No encuentra la respuesta que busca? / Can't find what you're looking for?
          </p>
          <a
            href="#contact"
            className="inline-block bg-white hover:bg-gray-200 text-black px-8 py-3 rounded-lg font-medium transition-all duration-200 transform hover:scale-105"
          >
            Contáctenos / Contact Us
          </a>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
