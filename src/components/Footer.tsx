import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="relative border-t border-gray-800/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center mb-4">
              <img 
                src="https://res.cloudinary.com/dunndxabk/image/upload/v1752686851/logo-white_tkyh0d.png" 
                alt="SOCO PWA Logo" 
                className="w-10 h-10 object-contain"
              />
              <span className="text-xl font-bold text-white ml-3">SOCO PWA</span>
            </div>
            <p className="text-gray-300 mb-6 max-w-md">
              Empowering businesses with next-generation technology solutions. Transform your digital future with our innovative IT services.
            </p>
            <div className="space-y-2">
              <div className="flex items-center text-gray-300">
                <Mail size={16} className="mr-2" />
                <span>contact@socopwa.com</span>
              </div>
              <div className="flex items-center text-gray-300">
                <MapPin size={16} className="mr-2" />
                <span>CDMX, Mexico</span>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Services</h3>
            <ul className="space-y-2">
              <li><a href="#services" className="text-gray-300 hover:text-white transition-colors">AI Integration</a></li>
              <li><a href="#services" className="text-gray-300 hover:text-white transition-colors">FinTech Solutions</a></li>
              <li><a href="#services" className="text-gray-300 hover:text-white transition-colors">Cybersecurity</a></li>
              <li><a href="#services" className="text-gray-300 hover:text-white transition-colors">Cloud Services</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Company</h3>
            <ul className="space-y-2">
              <li><a href="#success" className="text-gray-300 hover:text-white transition-colors">Success Stories</a></li>
              <li><a href="#partners" className="text-gray-300 hover:text-white transition-colors">Partners</a></li>
              <li><a href="#certifications" className="text-gray-300 hover:text-white transition-colors">Certifications</a></li>
              <li><a href="#contact" className="text-gray-300 hover:text-white transition-colors">Contact</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800/50 mt-12 pt-8 text-center">
          <p className="text-gray-400">
            © 2025 SOCO PWA. All rights reserved. Empowering businesses with innovative technology solutions.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
