import React from 'react';
import { Shield, Brain, CreditCard, CheckCircle, Award, Lock } from 'lucide-react';

const Certifications: React.FC = () => {
  const certifications = [
    {
      icon: Shield,
      title: 'ISO 27001',
      category: 'Security',
      description: 'Information Security Management System certification ensuring highest security standards.',
      validUntil: '2027'
    },
    {
      icon: Brain,
      title: 'OpenAI GPT Partner',
      category: 'AI',
      description: 'Certified implementation partner for OpenAI\'s GPT technology.',
      validUntil: '2027'
    },
    {
      icon: CreditCard,
      title: 'PCI DSS Level 1',
      category: 'Fintech',
      description: 'Payment Card Industry Data Security Standard compliance for financial transactions.',
      validUntil: '2027'
    },
    {
      icon: CheckCircle,
      title: 'SOC 2 Type II',
      category: 'Compliance',
      description: 'Verified compliance with AICPA\'s TSC for security, availability, and confidentiality.',
      validUntil: '2027'
    },
    {
      icon: Brain,
      title: 'NVIDIA AI Enterprise',
      category: 'AI',
      description: 'Certified partner for enterprise AI implementation and optimization.',
      validUntil: '2027'
    },
    {
      icon: Lock,
      title: 'FIPS 140-2',
      category: 'Security',
      description: 'Federal cryptographic security certification for sensitive data protection.',
      validUntil: '2027'
    },
    {
      icon: Shield,
      title: 'NIST CSF',
      category: 'Security',
      description: 'National Institute of Standards and Technology Cybersecurity Framework compliance.',
      validUntil: '2027'
    },
    {
      icon: Brain,
      title: 'Google Cloud AI',
      category: 'AI',
      description: 'Certified expertise in Google Cloud AI and ML solutions.',
      validUntil: '2027'
    },
    {
      icon: Shield,
      title: 'Cisco Security',
      category: 'Security',
      description: 'Advanced network security and infrastructure protection certification.',
      validUntil: '2027'
    },
    {
      icon: Lock,
      title: 'GDPR Compliance',
      category: 'Compliance',
      description: 'Certified compliance with EU General Data Protection Regulation standards.',
      validUntil: '2027'
    },
    {
      icon: Award,
      title: 'AWS Advanced Partner',
      category: 'Cloud',
      description: 'Advanced consulting partner for Amazon Web Services solutions.',
      validUntil: '2027'
    },
    {
      icon: Shield,
      title: 'HIPAA Compliance',
      category: 'Healthcare',
      description: 'Certified compliance with healthcare data protection standards.',
      validUntil: '2027'
    }
  ];

  const categoryColors = {
    Security: 'from-gray-600 to-gray-700',
    AI: 'from-gray-600 to-gray-700',
    Fintech: 'from-gray-600 to-gray-700',
    Compliance: 'from-gray-600 to-gray-700',
    Cloud: 'from-gray-600 to-gray-700',
    Healthcare: 'from-gray-600 to-gray-700'
  };

  return (
    <section id="certifications" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">Industry Certifications</h2>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto mb-8">
            Our comprehensive certifications demonstrate our commitment to excellence, security, and innovation across multiple domains.
          </p>
          <p className="text-gray-400">
            Our certifications are regularly renewed and updated to maintain the highest standards of service delivery.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {certifications.map((cert, index) => (
            <div
              key={cert.title}
              className="bg-gradient-to-br from-gray-900/80 to-gray-800/80 backdrop-blur-sm rounded-xl p-6 hover:from-gray-800/80 hover:to-gray-700/80 transition-all duration-300 transform hover:-translate-y-1 border border-gray-700/50 hover:border-white/50 group"
            >
              <div className="mb-4">
                <div className={`w-12 h-12 bg-gradient-to-br ${categoryColors[cert.category as keyof typeof categoryColors] || 'from-gray-600 to-gray-700'} rounded-lg flex items-center justify-center mb-3 group-hover:scale-110 transition-transform duration-300`}>
                  <cert.icon size={20} className="text-white" />
                </div>
                <div className="flex items-center justify-between mb-2">
                  <span className={`px-2 py-1 text-xs rounded-full font-medium bg-gradient-to-r ${categoryColors[cert.category as keyof typeof categoryColors] || 'from-gray-600 to-gray-700'} text-white`}>
                    {cert.category}
                  </span>
                  <span className="text-xs text-gray-400">Valid until: {cert.validUntil}</span>
                </div>
              </div>
              
              <h3 className="text-lg font-bold text-white mb-2 group-hover:text-gray-200 transition-colors duration-300">
                {cert.title}
              </h3>
              <p className="text-gray-300 text-sm leading-relaxed">
                {cert.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;