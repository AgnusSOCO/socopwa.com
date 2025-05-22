// Optimized image component
import React from 'react';
import { useImagePreload } from '../hooks/useImagePreload';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';

interface ImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  src: string;
  alt: string;
  placeholder?: string;
}

export const Image: React.FC<ImageProps> = ({ src, alt, placeholder, ...props }) => {
  const [ref, isVisible] = useIntersectionObserver({
    rootMargin: '50px',
    threshold: 0.1,
  });
  const isLoaded = useImagePreload(isVisible ? src : '');

  return (
    <div ref={ref as React.RefObject<HTMLDivElement>} className="relative overflow-hidden">
      {placeholder && (
        <img
          src={placeholder}
          alt={alt}
          className={`transition-opacity duration-300 ${
            isLoaded ? 'opacity-0' : 'opacity-100'
          }`}
          {...props}
        />
      )}
      {isVisible && (
        <img
          src={src}
          alt={alt}
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-300 ${
            isLoaded ? 'opacity-100' : 'opacity-0'
          }`}
          {...props}
        />
      )}
    </div>
  );
};