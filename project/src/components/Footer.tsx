import React from 'react';
import { Mail } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Logo } from './Logo';

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          <div>
            <Logo className="mb-4" />
            <p className="text-gray-400 mt-4">
              Transforming businesses with AI & modern IT solutions.
            </p>
          </div>
          
          <div>
            <h3 className="font-semibold text-lg mb-4">Services</h3>
            <ul className="space-y-2">
              <li><Link to="/services/ai-integration" className="text-gray-400 hover:text-white transition-colors">AI Integration</Link></li>
              <li><Link to="/services/google-workspace" className="text-gray-400 hover:text-white transition-colors">Google Workspace</Link></li>
              <li><Link to="/services/cybersecurity" className="text-gray-400 hover:text-white transition-colors">Cybersecurity</Link></li>
              <li><Link to="/services/cloud-services" className="text-gray-400 hover:text-white transition-colors">Cloud Services</Link></li>
              <li><Link to="/services/it-consulting" className="text-gray-400 hover:text-white transition-colors">IT Consulting</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold text-lg mb-4">Company</h3>
            <ul className="space-y-2">
              <li><Link to="/about" className="text-gray-400 hover:text-white transition-colors">About Us</Link></li>
              <li><Link to="/careers" className="text-gray-400 hover:text-white transition-colors">Careers</Link></li>
              <li><Link to="/blog" className="text-gray-400 hover:text-white transition-colors">Blog</Link></li>
              <li><Link to="/contact" className="text-gray-400 hover:text-white transition-colors">Contact</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold text-lg mb-4">Connect With Us</h3>
            <div className="flex space-x-4">
              <a href="mailto:contact@socopwa.com" className="text-gray-400 hover:text-white transition-colors">
                <Mail className="w-6 h-6" />
              </a>
            </div>
            <div className="mt-6">
              <p className="text-gray-400">Contact us:</p>
              <a href="mailto:contact@socopwa.com" className="text-gray-400 hover:text-white transition-colors">
                contact@socopwa.com
              </a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} SOCO PWA. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}