import React from 'react';
import { Link } from 'react-router-dom';

interface LogoProps {
  className?: string;
  variant?: 'light' | 'dark';
}

export function Logo({ className = '', variant = 'dark' }: LogoProps) {
  return (
    <Link to="/" className={`flex items-center ${className}`}>
      <img 
        src={variant === 'light' ? '/logo.png' : '/logo-2.png'} 
        alt="SOCO PWA" 
        className="h-12 w-auto"
        style={{ maxWidth: '240px' }}
      />
    </Link>
  );
}