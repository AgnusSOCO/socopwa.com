import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { X, ChevronRight, Calendar, Phone, Brain, Box, Shield, Cloud, Users, Wallet, Fingerprint } from 'lucide-react';

interface MobileNavProps {
  isOpen: boolean;
  onClose: () => void;
}

const CALENDAR_URL = 'https://cal.com/juan-carlos-r-cordero-cflxoe/soco-pwa-consultation-meeting';

const menuItems = [
  { 
    path: '/services', 
    label: 'Services', 
    submenu: [
      { 
        category: "Digital Innovation",
        items: [
          { path: '/services/ai-integration', label: 'AI Integration', icon: <Brain className="w-5 h-5" /> },
          { path: '/services/fintech', label: 'FinTech Solutions', icon: <Wallet className="w-5 h-5" /> }
        ]
      },
      {
        category: "Security & Identity",
        items: [
          { path: '/services/cybersecurity', label: 'Cybersecurity', icon: <Shield className="w-5 h-5" /> },
          { path: '/services/digital-id', label: 'Digital ID', icon: <Fingerprint className="w-5 h-5" /> }
        ]
      },
      {
        category: "Cloud & Infrastructure",
        items: [
          { path: '/services/cloud-services', label: 'Cloud Services', icon: <Cloud className="w-5 h-5" /> },
          { path: '/services/google-workspace', label: 'Google Workspace', icon: <Box className="w-5 h-5" /> },
          { path: '/services/it-consulting', label: 'IT Consulting', icon: <Users className="w-5 h-5" /> }
        ]
      }
    ]
  },
  { path: '/about', label: 'About' },
  { path: '/careers', label: 'Careers' },
  { path: '/blog', label: 'Blog' },
  { path: '/contact', label: 'Contact' }
];

export function MobileNav({ isOpen, onClose }: MobileNavProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-[998]"
            onClick={onClose}
          />
          
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 30, stiffness: 300 }}
            className="fixed right-0 top-0 bottom-0 w-full max-w-[320px] bg-white shadow-xl z-[999] overflow-y-auto"
          >
            <div className="flex flex-col min-h-screen">
              <div className="p-4 border-b flex items-center justify-between">
                <Link to="/" onClick={onClose} className="block w-32">
                  <img src="/logo.png" alt="SOCO PWA" className="w-full" />
                </Link>
                <button
                  onClick={onClose}
                  className="p-2 hover:bg-gray-100 rounded-full transition-colors"
                  aria-label="Close menu"
                >
                  <X className="w-6 h-6 text-gray-600" />
                </button>
              </div>

              <nav className="flex-1 overflow-y-auto py-6">
                <div className="px-4 mb-6">
                  <a
                    href={CALENDAR_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={onClose}
                    className="flex items-center gap-2 w-full bg-blue-600 text-white px-4 py-3 rounded-lg hover:bg-blue-700 transition-colors"
                  >
                    <Calendar className="w-5 h-5" />
                    <span>Book a Consultation</span>
                  </a>
                </div>

                <ul className="space-y-1">
                  {menuItems.map((item, index) => (
                    <motion.li
                      key={item.path}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                    >
                      {item.submenu ? (
                        <div className="mb-4">
                          <div className="px-4 py-2 text-sm font-semibold text-gray-400 uppercase tracking-wider">
                            {item.label}
                          </div>
                          {item.submenu.map((category) => (
                            <div key={category.category} className="mb-4">
                              <div className="px-4 py-1 text-xs font-medium text-gray-500">
                                {category.category}
                              </div>
                              <ul className="mt-1">
                                {category.items.map((subItem) => (
                                  <li key={subItem.path}>
                                    <Link
                                      to={subItem.path}
                                      onClick={onClose}
                                      className="flex items-center gap-3 px-4 py-2 text-gray-600 hover:bg-gray-50"
                                    >
                                      <span className="text-blue-600">{subItem.icon}</span>
                                      <span>{subItem.label}</span>
                                    </Link>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          ))}
                        </div>
                      ) : (
                        <Link
                          to={item.path}
                          onClick={onClose}
                          className="flex items-center gap-2 px-4 py-3 text-gray-700 hover:bg-gray-50"
                        >
                          {item.label}
                        </Link>
                      )}
                    </motion.li>
                  ))}
                </ul>
              </nav>

              <div className="p-4 border-t bg-gray-50">
                <a
                  href="tel:+18058641517"
                  className="flex items-center gap-2 text-gray-600 hover:text-blue-600"
                >
                  <Phone className="w-5 h-5" />
                  <span>+1 (805) 864-1517</span>
                </a>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}