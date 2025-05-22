import { Brain, Box, Shield, Cloud, Users, Wallet, Fingerprint, Gamepad2 } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

interface Service {
  icon: LucideIcon;
  title: string;
  description: string;
  link: string;
  features: string[];
}

export const services: Service[] = [
  {
    icon: Brain,
    title: "AI Integration",
    description: "Transform your business with cutting-edge AI solutions. We help you implement machine learning, natural language processing, and predictive analytics.",
    link: "/services/ai-integration",
    features: [
      "Machine Learning Solutions",
      "Natural Language Processing",
      "Computer Vision",
      "Predictive Analytics"
    ]
  },
  {
    icon: Wallet,
    title: "FinTech Solutions",
    description: "Modernize your financial services with cutting-edge technology. From digital payments to blockchain integration, we help you innovate.",
    link: "/services/fintech",
    features: [
      "Digital Payments",
      "Blockchain Integration",
      "Financial Analytics",
      "Risk Management"
    ]
  },
  {
    icon: Fingerprint,
    title: "Digital ID",
    description: "Implement secure and efficient digital identity solutions. From biometric authentication to identity management systems.",
    link: "/services/digital-id",
    features: [
      "Biometric Authentication",
      "Identity Verification",
      "Access Management",
      "Secure Onboarding"
    ]
  },
  {
    icon: Box,
    title: "Google Workspace",
    description: "Modernize your company with Google Workspace. We assist with training, implementation, and ongoing support.",
    link: "/services/google-workspace",
    features: [
      "Email & Calendar",
      "Document Management",
      "Team Collaboration",
      "Cloud Storage"
    ]
  },
  {
    icon: Shield,
    title: "Cybersecurity",
    description: "Protect your digital assets with our robust cybersecurity measures, ensuring your business stays secure and resilient against threats.",
    link: "/services/cybersecurity",
    features: [
      "Threat Detection",
      "Data Protection",
      "Security Audits",
      "Compliance Management"
    ]
  },
  {
    icon: Gamepad2,
    title: "Cybersecurity Training",
    description: "Transform your team's security skills with our innovative, game-based cybersecurity training solutions.",
    link: "/services/cybersecurity-training",
    features: [
      "Game-Based Learning",
      "Simulated Environments",
      "Certification Alignment",
      "Progress Tracking"
    ]
  },
  {
    icon: Cloud,
    title: "Cloud Services",
    description: "Enhance flexibility and scalability with our cloud solutions, tailored to meet the demands of your growing business.",
    link: "/services/cloud-services",
    features: [
      "Cloud Migration",
      "Infrastructure Management",
      "Cloud Security",
      "Performance Optimization"
    ]
  },
  {
    icon: Users,
    title: "IT Consulting",
    description: "Strategic technology consulting to help your business innovate, grow, and stay competitive in the digital age.",
    link: "/services/it-consulting",
    features: [
      "Strategic Planning",
      "Technology Assessment",
      "Digital Transformation",
      "Process Optimization"
    ]
  }
];