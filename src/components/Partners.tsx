import React from 'react';
import { PARTNER_URLS } from '../config/constants';

const Partners: React.FC = () => {
  const partners = [
    {
      name: 'Microsoft',
      description: 'Cloud computing and enterprise software solutions',
      url: PARTNER_URLS['Microsoft'],
      logo: (
        <svg viewBox="0 0 24 24" className="w-8 h-8 text-white">
          <path fill="currentColor" d="M11.4 24H0V12.6h11.4V24zM24 24H12.6V12.6H24V24zM11.4 11.4H0V0h11.4v11.4zM24 11.4H12.6V0H24v11.4z"/>
        </svg>
      )
    },
    {
      name: 'Cisco',
      description: 'Networking technology and IT infrastructure solutions',
      url: PARTNER_URLS['Cisco'],
      logo: (
        <svg viewBox="0 0 24 24" className="w-8 h-8 text-white">
          <path fill="currentColor" d="M.5 12c0-.3.1-.5.3-.7L4.2 8c.4-.4 1-.4 1.4 0s.4 1 0 1.4L3.4 12l2.2 2.6c.4.4.4 1 0 1.4s-1 .4-1.4 0L.8 12.7c-.2-.2-.3-.4-.3-.7zm6.1 0c0-.3.1-.5.3-.7L10.3 8c.4-.4 1-.4 1.4 0s.4 1 0 1.4L9.5 12l2.2 2.6c.4.4.4 1 0 1.4s-1 .4-1.4 0L6.9 12.7c-.2-.2-.3-.4-.3-.7zm6.1 0c0-.3.1-.5.3-.7L16.4 8c.4-.4 1-.4 1.4 0s.4 1 0 1.4L15.6 12l2.2 2.6c.4.4.4 1 0 1.4s-1 .4-1.4 0L13 12.7c-.2-.2-.3-.4-.3-.7zm6.1 0c0-.3.1-.5.3-.7L22.5 8c.4-.4 1-.4 1.4 0s.4 1 0 1.4L21.7 12l2.2 2.6c.4.4.4 1 0 1.4s-1 .4-1.4 0L19.1 12.7c-.2-.2-.3-.4-.3-.7z"/>
        </svg>
      )
    },
    {
      name: 'Dell Technologies',
      description: 'Enterprise hardware and digital transformation solutions',
      url: PARTNER_URLS['Dell Technologies'],
      logo: (
        <svg viewBox="0 0 24 24" className="w-8 h-8 text-white">
          <path fill="currentColor" d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.6 0 12 0zm0 22C6.5 22 2 17.5 2 12S6.5 2 12 2s10 4.5 10 10-4.5 10-10 10zm-1-16h2v8h-2V6zm0 10h2v2h-2v-2z"/>
        </svg>
      )
    },
    {
      name: 'VMware',
      description: 'Virtualization and cloud infrastructure solutions',
      url: PARTNER_URLS['VMware'],
      logo: (
        <svg viewBox="0 0 24 24" className="w-8 h-8 text-white">
          <path fill="currentColor" d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
        </svg>
      )
    },
    {
      name: 'Palo Alto Networks',
      description: 'Next-generation cybersecurity solutions',
      url: PARTNER_URLS['Palo Alto Networks'],
      logo: (
        <svg viewBox="0 0 24 24" className="w-8 h-8 text-white">
          <path fill="currentColor" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
        </svg>
      )
    },
    {
      name: 'Fortinet',
      description: 'Advanced cybersecurity solutions and network security',
      url: PARTNER_URLS['Fortinet'],
      logo: (
        <svg viewBox="0 0 24 24" className="w-8 h-8 text-white">
          <path fill="currentColor" d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4z"/>
        </svg>
      )
    },
    {
      name: 'HPE',
      description: 'Enterprise technology and solutions provider',
      url: PARTNER_URLS['HPE'],
      logo: (
        <svg viewBox="0 0 24 24" className="w-8 h-8 text-white">
          <path fill="currentColor" d="M2 12h4v8H2v-8zm6-8h4v16H8V4zm6 4h4v12h-4V8zm6-6h4v20h-4V2z"/>
        </svg>
      )
    },
    {
      name: 'Verkada',
      description: 'Leading provider of enterprise security solutions',
      url: PARTNER_URLS['Verkada'],
      logo: (
        <svg viewBox="0 0 24 24" className="w-8 h-8 text-white">
          <path fill="currentColor" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-13h2v6h-2zm0 8h2v2h-2z"/>
        </svg>
      )
    }
  ];

  return (
    <section id="partners" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">Technology Partners</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            We collaborate with industry leaders to deliver cutting-edge solutions.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {partners.map((partner) => (
            <a
              key={partner.name}
              href={partner.url}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gray-900/80 backdrop-blur-sm rounded-xl p-6 text-center hover:bg-gray-800/80 transition-all duration-300 transform hover:-translate-y-1 group border border-gray-700/50 hover:border-white/20 cursor-pointer"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-gray-600 to-gray-700 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:from-gray-500 group-hover:to-gray-600 transition-all duration-300 group-hover:scale-110">
                {partner.logo}
              </div>
              <h3 className="text-lg font-bold text-white mb-2 group-hover:text-gray-200 transition-colors duration-300">
                {partner.name}
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                {partner.description}
              </p>
            </a>
          ))}
        </div>

        {/* Partnership Benefits */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-br from-gray-900/80 to-gray-800/80 backdrop-blur-sm rounded-2xl p-8 border border-gray-700/50">
            <h3 className="text-2xl font-bold text-white mb-4">Why Our Partnerships Matter</h3>
            <p className="text-gray-300 max-w-3xl mx-auto mb-6">
              Our strategic partnerships with industry leaders ensure you receive best-in-class solutions, 
              certified expertise, and enterprise-grade support for your technology initiatives.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
              <div className="text-center">
                <div className="w-12 h-12 bg-white/10 rounded-lg flex items-center justify-center mx-auto mb-3">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h4 className="text-lg font-semibold text-white mb-2">Certified Expertise</h4>
                <p className="text-gray-400 text-sm">Our team holds official certifications from all major technology partners.</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-white/10 rounded-lg flex items-center justify-center mx-auto mb-3">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h4 className="text-lg font-semibold text-white mb-2">Latest Technology</h4>
                <p className="text-gray-400 text-sm">Access to cutting-edge solutions and early adoption programs.</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-white/10 rounded-lg flex items-center justify-center mx-auto mb-3">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192L5.636 18.364M12 2.25a9.75 9.75 0 11-9.75 9.75 9.75 9.75 0 019.75-9.75z" />
                  </svg>
                </div>
                <h4 className="text-lg font-semibold text-white mb-2">Enterprise Support</h4>
                <p className="text-gray-400 text-sm">Direct access to vendor support and premium service levels.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Partners;
