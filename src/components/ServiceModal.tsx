import React, { useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, CheckCircle, ArrowRight, Star } from 'lucide-react';
import { goToContact } from '../utils/navigation';

interface ServiceModalProps {
  isOpen: boolean;
  onClose: () => void;
  service: {
    icon: React.ComponentType<{ size?: number; className?: string }>;
    title: string;
    description: string;
    features: string[];
    gradient: string;
    iconBg: string;
    detailedInfo: {
      overview: string;
      benefits: string[];
      process: string[];
      technologies: string[];
      pricing: {
        starter: { price: string; features: string[] };
        professional: { price: string; features: string[] };
        enterprise: { price: string; features: string[] };
      };
    };
  };
}

const ServiceModal: React.FC<ServiceModalProps> = ({ isOpen, onClose, service }) => {
  const modalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleEscKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleEscKey);
      document.body.style.overflow = 'hidden';
    }

    return () => {
      document.removeEventListener('keydown', handleEscKey);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, onClose]);

  useEffect(() => {
    if (isOpen && modalRef.current) {
      const focusableElements = modalRef.current.querySelectorAll(
        'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
      );
      const firstElement = focusableElements[0] as HTMLElement;
      if (firstElement) {
        firstElement.focus();
      }
    }
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-50 flex items-center justify-center p-4"
        onClick={onClose}
        role="dialog"
        aria-modal="true"
        aria-labelledby="modal-title"
      >
        {/* Backdrop */}
        <div className="absolute inset-0 bg-black/80 backdrop-blur-md" />
        
        {/* Modal Container */}
        <motion.div
          ref={modalRef}
          initial={{ scale: 0.95, opacity: 0, y: 20 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          exit={{ scale: 0.95, opacity: 0, y: 20 }}
          transition={{ type: "spring", damping: 25, stiffness: 300 }}
          className="relative w-full max-w-4xl max-h-[90vh] bg-black/40 backdrop-blur-xl border border-white/20 rounded-2xl shadow-2xl overflow-hidden flex flex-col"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Fixed Header */}
          <div className="flex-shrink-0 p-6 border-b border-white/10 bg-gradient-to-r from-white/5 to-transparent">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <div className={`w-12 h-12 bg-gradient-to-br ${service.iconBg} rounded-xl flex items-center justify-center shadow-lg`}>
                  <service.icon size={24} className="text-white" />
                </div>
                <div>
                  <h2 id="modal-title" className="text-2xl font-bold text-white">{service.title}</h2>
                  <p className="text-gray-300 text-sm mt-1">{service.description}</p>
                </div>
              </div>
              <button
                onClick={onClose}
                className="w-10 h-10 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition-all duration-200 hover:scale-110"
              >
                <X size={20} className="text-white" />
              </button>
            </div>
          </div>

          {/* Scrollable Content */}
          <div className="flex-1 overflow-y-auto">
            <div className="p-6 space-y-8">
              {/* Overview */}
              <section>
                <h3 className="text-xl font-bold text-white mb-4">Overview</h3>
                <p className="text-gray-300 leading-relaxed">
                  {service.detailedInfo.overview}
                </p>
              </section>

              {/* Benefits */}
              <section>
                <h3 className="text-xl font-bold text-white mb-4">Key Benefits</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {service.detailedInfo.benefits.map((benefit, index) => (
                    <motion.div
                      key={benefit}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className="flex items-start space-x-3 p-4 bg-white/5 rounded-lg border border-white/10 hover:bg-white/10 transition-all duration-200"
                    >
                      <CheckCircle size={18} className="text-green-400 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-300 text-sm leading-relaxed">{benefit}</span>
                    </motion.div>
                  ))}
                </div>
              </section>

              {/* Process */}
              <section>
                <h3 className="text-xl font-bold text-white mb-4">Our Process</h3>
                <div className="space-y-3">
                  {service.detailedInfo.process.map((step, index) => (
                    <motion.div
                      key={step}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className="flex items-start space-x-4 p-4 bg-gradient-to-r from-white/5 to-transparent rounded-lg border border-white/10"
                    >
                      <div className="w-8 h-8 bg-gradient-to-br from-white/20 to-white/10 rounded-full flex items-center justify-center text-white font-bold text-sm flex-shrink-0">
                        {index + 1}
                      </div>
                      <span className="text-gray-300 text-sm leading-relaxed pt-1">{step}</span>
                    </motion.div>
                  ))}
                </div>
              </section>

              {/* Technologies */}
              <section>
                <h3 className="text-xl font-bold text-white mb-4">Technologies We Use</h3>
                <div className="flex flex-wrap gap-2">
                  {service.detailedInfo.technologies.map((tech, index) => (
                    <motion.span
                      key={tech}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: index * 0.05 }}
                      className="px-3 py-1.5 bg-gradient-to-r from-white/10 to-white/5 border border-white/20 rounded-full text-white font-medium text-sm hover:from-white/20 hover:to-white/10 transition-all duration-200 hover:scale-105"
                    >
                      {tech}
                    </motion.span>
                  ))}
                </div>
              </section>

              {/* Pricing */}
              <section>
                <h3 className="text-xl font-bold text-white mb-4">Service Packages</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {Object.entries(service.detailedInfo.pricing).map(([tier, details], index) => (
                    <motion.div
                      key={tier}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className={`p-6 rounded-xl border transition-all duration-300 hover:scale-105 ${
                        tier === 'professional' 
                          ? 'bg-gradient-to-br from-white/10 to-white/5 border-white/30 shadow-lg ring-1 ring-white/20' 
                          : 'bg-white/5 border-white/10 hover:border-white/20 hover:bg-white/10'
                      }`}
                    >
                      {tier === 'professional' && (
                        <div className="flex items-center justify-center mb-4">
                          <span className="px-3 py-1 bg-gradient-to-r from-yellow-400/20 to-orange-400/20 border border-yellow-400/30 rounded-full text-yellow-400 text-sm font-medium flex items-center">
                            <Star size={14} className="mr-1" />
                            Most Popular
                          </span>
                        </div>
                      )}
                      <h4 className="text-lg font-bold text-white mb-2 capitalize">{tier}</h4>
                      <div className="text-2xl font-bold text-white mb-4">{details.price}</div>
                      <ul className="space-y-2">
                        {details.features.map((feature) => (
                          <li key={feature} className="flex items-start space-x-2">
                            <CheckCircle size={16} className="text-green-400 mt-0.5 flex-shrink-0" />
                            <span className="text-gray-300 text-sm leading-relaxed">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </motion.div>
                  ))}
                </div>
              </section>
            </div>
          </div>

          {/* Fixed Footer */}
          <div className="flex-shrink-0 p-6 border-t border-white/10 bg-gradient-to-r from-white/5 to-transparent">
            <div className="flex flex-col sm:flex-row items-center justify-between space-y-4 sm:space-y-0 sm:space-x-4">
              <div className="text-center sm:text-left">
                <p className="text-white font-semibold mb-1">Ready to get started?</p>
                <p className="text-gray-400 text-sm">Contact us for a personalized consultation</p>
              </div>
              <div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto">
                <button 
                  onClick={() => {
                    onClose();
                    goToContact({ service: service.title, source: 'service_modal_learn_more' });
                  }}
                  className="px-6 py-3 bg-white/10 hover:bg-white/20 border border-white/20 text-white rounded-lg transition-all duration-200 hover:scale-105"
                >
                  Learn More
                </button>
                <button 
                  onClick={() => {
                    onClose();
                    goToContact({ service: service.title, source: 'service_modal_quote' });
                  }}
                  className="px-6 py-3 bg-white hover:bg-gray-200 text-black font-semibold rounded-lg transition-all duration-200 hover:scale-105 flex items-center justify-center space-x-2"
                >
                  <span>Get Quote</span>
                  <ArrowRight size={16} />
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default ServiceModal;
