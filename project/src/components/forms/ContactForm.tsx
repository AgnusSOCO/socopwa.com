import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, Phone, Building, MessageSquare, Send } from 'lucide-react';
import { useContactForm } from './useContactForm';
import { FormAlert } from './FormAlert';

export function ContactForm() {
  const { register, handleSubmit, errors, isSubmitting, submitStatus, setSubmitStatus } = useContactForm();

  return (
    <>
      <motion.form
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        onSubmit={handleSubmit}
        className="space-y-6"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium mb-2">First Name *</label>
            <input
              type="text"
              {...register('firstName', { required: 'First name is required' })}
              className="w-full px-4 py-3 bg-white border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
              placeholder="John"
            />
            {errors.firstName && (
              <p className="mt-1 text-sm text-red-500">{errors.firstName.message}</p>
            )}
          </div>

          <div>
            <label className="block text-sm font-medium mb-2">Last Name *</label>
            <input
              type="text"
              {...register('lastName', { required: 'Last name is required' })}
              className="w-full px-4 py-3 bg-white border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
              placeholder="Doe"
            />
            {errors.lastName && (
              <p className="mt-1 text-sm text-red-500">{errors.lastName.message}</p>
            )}
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium mb-2">
            <span className="flex items-center gap-2">
              <Mail className="w-4 h-4 text-blue-600" />
              Email *
            </span>
          </label>
          <input
            type="email"
            {...register('email', {
              required: 'Email is required',
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: 'Invalid email address'
              }
            })}
            className="w-full px-4 py-3 bg-white border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
            placeholder="john@example.com"
          />
          {errors.email && (
            <p className="mt-1 text-sm text-red-500">{errors.email.message}</p>
          )}
        </div>

        <div>
          <label className="block text-sm font-medium mb-2">
            <span className="flex items-center gap-2">
              <Phone className="w-4 h-4 text-blue-600" />
              Phone Number
            </span>
          </label>
          <input
            type="tel"
            {...register('phone')}
            className="w-full px-4 py-3 bg-white border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
            placeholder="+1 (555) 000-0000"
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-2">
            <span className="flex items-center gap-2">
              <Building className="w-4 h-4 text-blue-600" />
              Company Name *
            </span>
          </label>
          <input
            type="text"
            {...register('company', { required: 'Company name is required' })}
            className="w-full px-4 py-3 bg-white border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
            placeholder="Your Company"
          />
          {errors.company && (
            <p className="mt-1 text-sm text-red-500">{errors.company.message}</p>
          )}
        </div>

        <div>
          <label className="block text-sm font-medium mb-2">
            <span className="flex items-center gap-2">
              <MessageSquare className="w-4 h-4 text-blue-600" />
              Message *
            </span>
          </label>
          <textarea
            {...register('message', { required: 'Please provide a message' })}
            rows={6}
            className="w-full px-4 py-3 bg-white border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors resize-none"
            placeholder="How can we help you?"
          ></textarea>
          {errors.message && (
            <p className="mt-1 text-sm text-red-500">{errors.message.message}</p>
          )}
        </div>

        <motion.button
          type="submit"
          disabled={isSubmitting}
          className="w-full bg-blue-600 text-white py-4 rounded-lg font-semibold hover:bg-blue-700 transition-all disabled:opacity-50 relative overflow-hidden group"
          whileHover={{ scale: 1.01 }}
          whileTap={{ scale: 0.99 }}
        >
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-12"
            animate={{
              x: ['-100%', '100%'],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
          
          <span className="relative inline-flex items-center gap-2">
            {isSubmitting ? 'Sending...' : 'Send Message'}
            <Send className="w-4 h-4" />
          </span>
        </motion.button>
      </motion.form>

      <AnimatePresence>
        {submitStatus !== 'idle' && (
          <FormAlert
            status={submitStatus === 'success' ? 'success' : 'error'}
            onClose={() => setSubmitStatus('idle')}
          />
        )}
      </AnimatePresence>
    </>
  );
}