import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle, XCircle } from 'lucide-react';

interface FormAlertProps {
  status: 'success' | 'error';
  onClose: () => void;
}

export function FormAlert({ status, onClose }: FormAlertProps) {
  const isSuccess = status === 'success';
  
  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className={`fixed top-4 right-4 p-4 rounded-lg shadow-lg ${
        isSuccess ? 'bg-green-50' : 'bg-red-50'
      }`}
    >
      <div className="flex items-center gap-3">
        {isSuccess ? (
          <CheckCircle className="w-5 h-5 text-green-500" />
        ) : (
          <XCircle className="w-5 h-5 text-red-500" />
        )}
        <p className={isSuccess ? 'text-green-700' : 'text-red-700'}>
          {isSuccess
            ? 'Message sent successfully!'
            : 'Failed to send message. Please try again.'}
        </p>
        <button
          onClick={onClose}
          className={`ml-4 text-sm font-medium ${
            isSuccess ? 'text-green-600' : 'text-red-600'
          }`}
        >
          Close
        </button>
      </div>
    </motion.div>
  );
}