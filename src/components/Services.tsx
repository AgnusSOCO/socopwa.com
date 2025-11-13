import React from 'react';
import { useState, useEffect } from 'react';
import { 
  Brain, 
  CreditCard, 
  Shield, 
  Users, 
  Cloud, 
  Lock, 
  BookOpen, 
  Settings,
  ArrowRight
} from 'lucide-react';
import ServiceModal from './ServiceModal';
import { goToContact } from '../utils/navigation';

interface Service {
  icon: React.ComponentType<{ size?: number; className?: string }>;
  title: string;
  description: string;
  features: string[];
  gradient: string;
  iconBg: string;
  detailedInfo: {
    overview: string;
    benefits: string[];
    process: string[];
    technologies: string[];
    pricing: {
      starter: { price: string; features: string[] };
      professional: { price: string; features: string[] };
      enterprise: { price: string; features: string[] };
    };
  };
}

const Services: React.FC = () => {
  const [selectedService, setSelectedService] = useState<Service | null>(null);

  const services = [
    {
      icon: Brain,
      title: 'AI Integration',
      description: 'Transform your business with cutting-edge AI solutions. We help you implement machine learning, natural language processing, and predictive analytics.',
      features: [
        'Machine Learning Solutions',
        'Natural Language Processing',
        'Computer Vision',
        'Predictive Analytics'
      ],
      gradient: 'from-gray-800/20 to-gray-700/20',
      iconBg: 'from-gray-600 to-gray-700',
      detailedInfo: {
        overview: 'Transform your business operations with cutting-edge artificial intelligence solutions. Our AI integration services help you automate processes, gain valuable insights from data, and create intelligent systems that adapt and learn from your business patterns.',
        benefits: [
          'Increased operational efficiency by up to 40%',
          'Automated decision-making processes',
          'Real-time data analysis and insights',
          'Reduced human error and improved accuracy',
          'Scalable solutions that grow with your business',
          '24/7 intelligent system monitoring'
        ],
        process: [
          'Business Analysis & AI Readiness Assessment',
          'Custom AI Strategy Development',
          'Data Preparation & Model Training',
          'System Integration & Testing',
          'Deployment & Performance Monitoring',
          'Ongoing Optimization & Support'
        ],
        technologies: ['TensorFlow', 'PyTorch', 'OpenAI GPT', 'Azure AI', 'AWS SageMaker', 'Python', 'R', 'Jupyter'],
        pricing: {
          starter: { price: 'From $5,000', features: ['Basic AI consultation', 'Simple automation setup', 'Data analysis tools', '3 months support'] },
          professional: { price: 'From $15,000', features: ['Custom AI model development', 'Advanced automation', 'Real-time analytics', 'Integration support', '12 months support', 'Training included'] },
          enterprise: { price: 'Custom Quote', features: ['Enterprise-scale AI solutions', 'Multi-system integration', 'Dedicated AI team', 'Custom model training', 'Unlimited support', 'SLA guarantee'] }
        }
      }
    },
    {
      icon: CreditCard,
      title: 'FinTech Solutions',
      description: 'Modernize your financial services with cutting-edge technology. From digital payments to blockchain integration, we help you innovate.',
      features: [
        'Digital Payments',
        'Blockchain Integration',
        'Financial Analytics',
        'Risk Management'
      ],
      gradient: 'from-gray-800/20 to-gray-700/20',
      iconBg: 'from-gray-600 to-gray-700',
      detailedInfo: {
        overview: 'Revolutionize your financial services with modern FinTech solutions. From digital payments to blockchain integration, we help financial institutions and businesses innovate while maintaining security and compliance.',
        benefits: [
          'Faster transaction processing',
          'Enhanced security and fraud prevention',
          'Improved customer experience',
          'Regulatory compliance automation',
          'Real-time financial analytics',
          'Reduced operational costs'
        ],
        process: [
          'Financial System Assessment',
          'Compliance & Security Planning',
          'Solution Architecture Design',
          'Development & Integration',
          'Security Testing & Validation',
          'Go-Live Support & Monitoring'
        ],
        technologies: ['Blockchain', 'Stripe API', 'Plaid', 'React Native', 'Node.js', 'PostgreSQL', 'Redis', 'Docker'],
        pricing: {
          starter: { price: 'From $8,000', features: ['Basic payment integration', 'Security assessment', 'Compliance review', '6 months support'] },
          professional: { price: 'From $25,000', features: ['Custom payment solutions', 'Blockchain integration', 'Advanced analytics', 'Multi-platform support', '18 months support'] },
          enterprise: { price: 'Custom Quote', features: ['Enterprise payment platform', 'Custom blockchain solutions', 'Dedicated fintech team', 'Regulatory compliance', '24/7 support'] }
        }
      }
    },
    {
      icon: Users,
      title: 'Digital ID',
      description: 'Implement secure and efficient digital identity solutions. From biometric authentication to identity management systems.',
      features: [
        'Biometric Authentication',
        'Identity Verification',
        'Access Management',
        'Secure Onboarding'
      ],
      gradient: 'from-gray-800/20 to-gray-700/20',
      iconBg: 'from-gray-600 to-gray-700',
      detailedInfo: {
        overview: 'Implement secure and efficient digital identity solutions that streamline user verification while maintaining the highest security standards. Our digital ID systems provide seamless authentication experiences.',
        benefits: [
          'Streamlined user onboarding process',
          'Enhanced security with biometric authentication',
          'Reduced identity fraud',
          'Improved user experience',
          'Compliance with identity regulations',
          'Scalable identity management'
        ],
        process: [
          'Identity Requirements Analysis',
          'Security Architecture Planning',
          'Biometric System Integration',
          'Identity Verification Setup',
          'Testing & Validation',
          'Deployment & User Training'
        ],
        technologies: ['OAuth 2.0', 'SAML', 'JWT', 'Biometric APIs', 'Azure AD', 'Auth0', 'Firebase Auth', 'Face Recognition'],
        pricing: {
          starter: { price: 'From $6,000', features: ['Basic identity verification', 'Standard authentication', 'User management', '6 months support'] },
          professional: { price: 'From $18,000', features: ['Biometric authentication', 'Multi-factor authentication', 'Identity analytics', 'Custom integration', '12 months support'] },
          enterprise: { price: 'Custom Quote', features: ['Enterprise identity platform', 'Advanced biometrics', 'Compliance management', 'Dedicated support team', 'SLA guarantee'] }
        }
      }
    },
    {
      icon: Settings,
      title: 'Google Workspace',
      description: 'Modernize your company with Google Workspace. We assist with training, implementation, and ongoing support.',
      features: [
        'Email & Calendar',
        'Document Management',
        'Team Collaboration',
        'Cloud Storage'
      ],
      gradient: 'from-gray-800/20 to-gray-700/20',
      iconBg: 'from-gray-600 to-gray-700',
      detailedInfo: {
        overview: 'Modernize your workplace with Google Workspace implementation and optimization. We provide comprehensive training, migration services, and ongoing support to maximize your team\'s productivity.',
        benefits: [
          'Improved team collaboration',
          'Seamless document sharing',
          'Enhanced productivity tools',
          'Secure cloud storage',
          'Mobile accessibility',
          'Cost-effective communication'
        ],
        process: [
          'Current System Assessment',
          'Migration Planning & Strategy',
          'Google Workspace Setup',
          'Data Migration & Integration',
          'Team Training & Onboarding',
          'Ongoing Support & Optimization'
        ],
        technologies: ['Google Workspace', 'Gmail', 'Google Drive', 'Google Meet', 'Google Calendar', 'Google Docs', 'Admin Console', 'APIs'],
        pricing: {
          starter: { price: 'From $2,000', features: ['Basic workspace setup', 'Email migration', 'User training', '3 months support'] },
          professional: { price: 'From $5,000', features: ['Complete workspace migration', 'Custom configuration', 'Advanced training', 'Integration setup', '12 months support'] },
          enterprise: { price: 'From $12,000', features: ['Enterprise workspace deployment', 'Custom integrations', 'Advanced security setup', 'Dedicated support', 'Ongoing optimization'] }
        }
      }
    },
    {
      icon: Shield,
      title: 'Cybersecurity',
      description: 'Protect your digital assets with our robust cybersecurity measures, ensuring your business stays secure and resilient against threats.',
      features: [
        'Threat Detection',
        'Data Protection',
        'Security Audits',
        'Compliance Management'
      ],
      gradient: 'from-gray-800/20 to-gray-700/20',
      iconBg: 'from-gray-600 to-gray-700',
      detailedInfo: {
        overview: 'Protect your digital assets with comprehensive cybersecurity solutions. Our security experts implement multi-layered protection strategies to safeguard your business from evolving cyber threats.',
        benefits: [
          'Advanced threat detection and prevention',
          'Real-time security monitoring',
          'Compliance with security standards',
          'Reduced risk of data breaches',
          'Business continuity assurance',
          'Employee security awareness'
        ],
        process: [
          'Security Risk Assessment',
          'Vulnerability Analysis',
          'Security Architecture Design',
          'Implementation & Configuration',
          'Testing & Validation',
          'Monitoring & Incident Response'
        ],
        technologies: ['Palo Alto', 'Fortinet', 'CrowdStrike', 'Splunk', 'Nessus', 'Wireshark', 'SIEM', 'EDR'],
        pricing: {
          starter: { price: 'From $4,000', features: ['Security assessment', 'Basic firewall setup', 'Antivirus deployment', '6 months monitoring'] },
          professional: { price: 'From $12,000', features: ['Comprehensive security suite', 'Advanced threat protection', 'Security training', 'Incident response', '18 months support'] },
          enterprise: { price: 'Custom Quote', features: ['Enterprise security platform', '24/7 SOC monitoring', 'Dedicated security team', 'Compliance management', 'Custom security solutions'] }
        }
      }
    },
    {
      icon: BookOpen,
      title: 'Cybersecurity Training',
      description: 'Transform your team\'s security skills with our innovative, game-based cybersecurity training solutions.',
      features: [
        'Game-Based Learning',
        'Simulated Environments',
        'Certification Alignment',
        'Progress Tracking'
      ],
      gradient: 'from-gray-800/20 to-gray-700/20',
      iconBg: 'from-gray-600 to-gray-700',
      detailedInfo: {
        overview: 'Transform your team\'s cybersecurity knowledge with innovative, game-based training solutions. Our interactive training programs make learning engaging while building real-world security skills.',
        benefits: [
          'Engaging game-based learning experience',
          'Improved security awareness',
          'Reduced human error incidents',
          'Certification preparation',
          'Progress tracking and analytics',
          'Customizable training modules'
        ],
        process: [
          'Training Needs Assessment',
          'Custom Curriculum Development',
          'Platform Setup & Configuration',
          'Content Creation & Gamification',
          'Training Deployment',
          'Progress Monitoring & Reporting'
        ],
        technologies: ['Learning Management Systems', 'Gamification Platforms', 'Virtual Reality', 'Simulation Tools', 'Analytics Dashboards', 'Mobile Apps'],
        pricing: {
          starter: { price: 'From $3,000', features: ['Basic training modules', 'Progress tracking', 'Certificate generation', '6 months access'] },
          professional: { price: 'From $8,000', features: ['Custom training content', 'Advanced gamification', 'Detailed analytics', 'Multi-platform access', '12 months license'] },
          enterprise: { price: 'From $20,000', features: ['Enterprise training platform', 'Custom simulations', 'Advanced reporting', 'Dedicated training manager', 'Unlimited access'] }
        }
      }
    },
    {
      icon: Cloud,
      title: 'Cloud Services',
      description: 'Enhance flexibility and scalability with our cloud solutions, tailored to meet the demands of your growing business.',
      features: [
        'Cloud Migration',
        'Infrastructure Management',
        'Cloud Security',
        'Performance Optimization'
      ],
      gradient: 'from-gray-800/20 to-gray-700/20',
      iconBg: 'from-gray-600 to-gray-700',
      detailedInfo: {
        overview: 'Enhance your business flexibility and scalability with our comprehensive cloud solutions. We help you migrate, optimize, and manage your cloud infrastructure for maximum efficiency and cost-effectiveness.',
        benefits: [
          'Improved scalability and flexibility',
          'Reduced infrastructure costs',
          'Enhanced disaster recovery',
          'Better collaboration capabilities',
          'Automatic updates and maintenance',
          'Global accessibility'
        ],
        process: [
          'Cloud Readiness Assessment',
          'Migration Strategy Planning',
          'Infrastructure Design',
          'Migration Execution',
          'Testing & Optimization',
          'Ongoing Management & Support'
        ],
        technologies: ['AWS', 'Microsoft Azure', 'Google Cloud', 'Docker', 'Kubernetes', 'Terraform', 'CloudFormation', 'Monitoring Tools'],
        pricing: {
          starter: { price: 'From $4,000', features: ['Cloud assessment', 'Basic migration', 'Setup & configuration', '6 months support'] },
          professional: { price: 'From $15,000', features: ['Complete cloud migration', 'Infrastructure optimization', 'Security setup', 'Performance monitoring', '18 months support'] },
          enterprise: { price: 'Custom Quote', features: ['Enterprise cloud architecture', 'Multi-cloud strategy', 'Dedicated cloud team', 'Advanced monitoring', '24/7 support'] }
        }
      }
    },
    {
      icon: Lock,
      title: 'IT Consulting',
      description: 'Strategic technology consulting to help your business innovate, grow, and stay competitive in the digital age.',
      features: [
        'Strategic Planning',
        'Technology Assessment',
        'Digital Transformation',
        'Process Optimization'
      ],
      gradient: 'from-gray-800/20 to-gray-700/20',
      iconBg: 'from-gray-600 to-gray-700',
      detailedInfo: {
        overview: 'Strategic technology consulting to help your business innovate, grow, and stay competitive in the digital age. Our experts provide guidance on technology decisions, digital transformation, and process optimization.',
        benefits: [
          'Strategic technology roadmap',
          'Improved operational efficiency',
          'Cost optimization strategies',
          'Digital transformation guidance',
          'Technology risk mitigation',
          'Competitive advantage development'
        ],
        process: [
          'Business & Technology Assessment',
          'Strategic Planning & Roadmap',
          'Solution Architecture Design',
          'Implementation Planning',
          'Change Management Support',
          'Ongoing Strategic Guidance'
        ],
        technologies: ['Enterprise Architecture', 'Business Intelligence', 'Process Automation', 'Digital Platforms', 'Analytics Tools', 'Integration Platforms'],
        pricing: {
          starter: { price: 'From $3,000', features: ['Technology assessment', 'Strategic recommendations', 'Implementation roadmap', '3 months consultation'] },
          professional: { price: 'From $10,000', features: ['Comprehensive strategy development', 'Detailed implementation plan', 'Change management support', '12 months guidance'] },
          enterprise: { price: 'Custom Quote', features: ['Enterprise transformation strategy', 'Dedicated consulting team', 'Ongoing strategic support', 'Executive advisory', 'Custom solutions'] }
        }
      }
    }
  ];

  const openModal = (service: Service) => {
    setSelectedService(service);
  };

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const serviceParam = params.get('service');
    
    if (serviceParam) {
      const matchingService = services.find(
        s => s.title.toLowerCase().replace(/\s+/g, '-') === serviceParam.toLowerCase()
      );
      
      if (matchingService) {
        setSelectedService(matchingService);
      }
    }
  }, []);

  return (
    <section id="services" className="py-24 relative overflow-hidden">
      {/* Background decoration - now more subtle since main background is global */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-96 bg-white/3 rounded-full blur-3xl"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center px-4 py-2 bg-white/10 border border-white/20 rounded-full text-white text-sm font-medium mb-6">
            <span className="w-2 h-2 bg-white rounded-full mr-2 animate-pulse"></span>
            Our Services
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            Professional IT Solutions &
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-300">
              Innovative Services
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            At SOCO PWA, we provide cutting-edge IT solutions and services designed to transform your business and accelerate your digital journey.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <div
              key={service.title}
              className={`group relative bg-gradient-to-br ${service.gradient} backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:border-white/20 transition-all duration-500 transform hover:-translate-y-2 hover:shadow-2xl hover:shadow-white/10`}
              style={{
                animationDelay: `${index * 0.1}s`,
                animationFillMode: 'both'
              }}
            >
              {/* Background glow effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              {/* Content */}
              <div className="relative z-10">
                {/* Icon */}
                <div className={`w-14 h-14 bg-gradient-to-br ${service.iconBg} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                  <service.icon size={24} className="text-white" />
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-white mb-4 group-hover:text-gray-200 transition-colors duration-300">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="text-gray-300 text-sm leading-relaxed mb-6 line-clamp-4">
                  {service.description}
                </p>

                {/* Features */}
                <ul className="space-y-3 mb-8">
                  {service.features.map((feature) => (
                    <li key={feature} className="text-gray-400 text-sm flex items-center group/item">
                      <div className="w-1.5 h-1.5 bg-gradient-to-r from-white to-gray-300 rounded-full mr-3 group-hover/item:scale-125 transition-transform duration-200"></div>
                      <span className="group-hover/item:text-gray-300 transition-colors duration-200">
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>

                {/* Learn More Button */}
                <button 
                  onClick={() => openModal(service)}
                  className="group/btn flex items-center text-white hover:text-gray-200 font-medium text-sm transition-all duration-300 hover:gap-2"
                >
                  <span>Learn More</span>
                  <ArrowRight size={16} className="ml-1 group-hover/btn:translate-x-1 transition-transform duration-300" />
                </button>
              </div>

              {/* Hover border effect */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-white/20 via-gray-300/20 to-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10 blur-xl"></div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <p className="text-gray-400 mb-6">
            Ready to transform your business with our innovative solutions?
          </p>
          <button 
            onClick={() => goToContact({ source: 'services_cta' })}
            className="inline-flex items-center px-8 py-4 bg-white hover:bg-gray-200 text-black font-semibold rounded-xl transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-white/25"
          >
            <span>Get Started Today</span>
            <ArrowRight size={20} className="ml-2" />
          </button>
        </div>

        {/* Service Modal */}
        {selectedService && (
          <ServiceModal
            isOpen={!!selectedService}
            onClose={() => setSelectedService(null)}
            service={selectedService}
          />
        )}
      </div>
    </section>
  );
};

export default Services;
