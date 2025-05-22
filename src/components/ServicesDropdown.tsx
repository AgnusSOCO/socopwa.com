import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ChevronDown, Brain, Box, Shield, Cloud, Users, Wallet, Fingerprint, Gamepad2 } from 'lucide-react';

const services = [
  {
    category: "Digital Innovation",
    items: [
      {
        name: 'AI Integration',
        path: '/services/ai-integration',
        icon: <Brain className="w-4 h-4" />,
      },
      {
        name: 'FinTech Solutions',
        path: '/services/fintech',
        icon: <Wallet className="w-4 h-4" />,
      }
    ]
  },
  {
    category: "Security & Identity",
    items: [
      {
        name: 'Cybersecurity',
        path: '/services/cybersecurity',
        icon: <Shield className="w-4 h-4" />,
      },
      {
        name: 'Cybersecurity Training',
        path: '/services/cybersecurity-training',
        icon: <Gamepad2 className="w-4 h-4" />,
      },
      {
        name: 'Digital ID',
        path: '/services/digital-id',
        icon: <Fingerprint className="w-4 h-4" />,
      }
    ]
  },
  {
    category: "Cloud & Infrastructure",
    items: [
      {
        name: 'Cloud Services',
        path: '/services/cloud-services',
        icon: <Cloud className="w-4 h-4" />,
      },
      {
        name: 'Google Workspace',
        path: '/services/google-workspace',
        icon: <Box className="w-4 h-4" />,
      },
      {
        name: 'IT Consulting',
        path: '/services/it-consulting',
        icon: <Users className="w-4 h-4" />,
      }
    ]
  }
];

interface ServicesDropdownProps {
  isHomePage: boolean;
  isScrolled: boolean;
}

export function ServicesDropdown({ isHomePage, isScrolled }: ServicesDropdownProps) {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const getButtonTextColor = () => {
    if (isHomePage) {
      return isScrolled ? 'text-gray-700 hover:text-blue-600' : 'text-white hover:text-blue-200';
    }
    return 'text-gray-700 hover:text-blue-600';
  };

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        className={`flex items-center gap-1 font-medium transition-colors ${getButtonTextColor()}`}
        onClick={() => setIsOpen(!isOpen)}
      >
        Services
        <ChevronDown className={`w-4 h-4 transform transition-transform ${isOpen ? 'rotate-180' : ''}`} />
      </button>

      {isOpen && (
        <div className="absolute left-0 mt-2 w-64 bg-white rounded-lg shadow-lg py-2 z-50">
          {services.map((category, index) => (
            <div key={index} className="px-2">
              <div className="text-xs font-semibold text-gray-400 uppercase tracking-wider px-3 py-1">
                {category.category}
              </div>
              {category.items.map((service) => (
                <Link
                  key={service.path}
                  to={service.path}
                  className="flex items-center gap-2 px-3 py-1.5 text-sm text-gray-700 hover:bg-gray-50 rounded-md"
                  onClick={() => setIsOpen(false)}
                >
                  <span className="text-blue-600">{service.icon}</span>
                  {service.name}
                </Link>
              ))}
              {index < services.length - 1 && <div className="my-1 border-t border-gray-100" />}
            </div>
          ))}
          <div className="mt-1 pt-1 px-3 border-t border-gray-100">
            <Link
              to="/services"
              className="text-sm text-blue-600 hover:text-blue-700 font-medium"
              onClick={() => setIsOpen(false)}
            >
              View All Services
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}