import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface BlurImageProps {
  src: string;
  alt: string;
  className?: string;
}

export function BlurImage({ src, alt, className = '' }: BlurImageProps) {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isError, setIsError] = useState(false);

  // Generate tiny placeholder
  const placeholderSrc = `${src}?auto=format&w=20&q=10`;

  return (
    <div className={`relative overflow-hidden ${className}`}>
      {/* Tiny placeholder */}
      <img
        src={placeholderSrc}
        alt={alt}
        className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-300 ${
          isLoaded ? 'opacity-0' : 'opacity-100'
        } filter blur-xl scale-105`}
      />

      {/* Main image */}
      <AnimatePresence>
        {!isError && (
          <motion.img
            src={src}
            alt={alt}
            className={`relative w-full h-full object-cover transition-opacity duration-300 ${
              isLoaded ? 'opacity-100' : 'opacity-0'
            }`}
            initial={{ opacity: 0 }}
            animate={{ opacity: isLoaded ? 1 : 0 }}
            exit={{ opacity: 0 }}
            onLoad={() => setIsLoaded(true)}
            onError={() => setIsError(true)}
            loading="lazy"
          />
        )}
      </AnimatePresence>
    </div>
  );
}