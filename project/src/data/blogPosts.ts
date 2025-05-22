export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  author: {
    name: string;
    avatar?: string;
    role: string;
  };
  date: string;
  image: string;
  tags: string[];
  readTime: number;
}

export const blogPosts: BlogPost[] = [
  {
    id: "ai-business-operations",
    title: "The Future of AI in Business Operations",
    excerpt: "Discover how artificial intelligence is revolutionizing business operations and decision-making processes.",
    content: `
# The Future of AI in Business Operations

Artificial Intelligence is transforming how businesses operate in fundamental ways. From automated customer service to predictive analytics, AI is becoming an integral part of modern business operations.

## Key Areas of Impact

### 1. Process Automation
- Streamlined workflows
- Reduced manual tasks
- Improved accuracy

### 2. Decision Making
- Data-driven insights
- Predictive analytics
- Risk assessment

### 3. Customer Experience
- Personalized interactions
- 24/7 support
- Improved response times

## Implementation Strategies

When implementing AI in your business operations, consider:

1. Start with clear objectives
2. Choose the right AI solutions
3. Ensure proper data management
4. Train your team
5. Monitor and optimize

Contact us to learn more about how we can help implement AI in your business.
    `,
    author: {
      name: "Dr. Sarah Chen",
      role: "AI Research Director",
      avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80"
    },
    date: "2024-03-15",
    image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&q=80",
    tags: ["AI", "Business", "Technology"],
    readTime: 5
  },
  {
    id: "cybersecurity-best-practices-2024",
    title: "Cybersecurity Best Practices for 2024",
    excerpt: "Stay ahead of cyber threats with our comprehensive guide to modern security practices.",
    content: `
# Cybersecurity Best Practices for 2024

As cyber threats continue to evolve, businesses must adapt their security practices. Here's our guide to staying secure in 2024.

## Essential Security Measures

### 1. Multi-Factor Authentication
- Implement across all systems
- Use biometric verification
- Regular security audits

### 2. Zero Trust Architecture
- Verify every request
- Limit access rights
- Monitor all activities

### 3. Employee Training
- Regular security workshops
- Phishing awareness
- Incident response training

## Emerging Threats

Stay vigilant against:

1. Ransomware evolution
2. AI-powered attacks
3. Supply chain vulnerabilities
4. IoT security risks

Contact our security team for a comprehensive security assessment.
    `,
    author: {
      name: "Michael Rodriguez",
      role: "Chief Security Officer",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80"
    },
    date: "2024-03-10",
    image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80",
    tags: ["Cybersecurity", "Technology", "Best Practices"],
    readTime: 7
  }
];

export const getPostById = (id: string): BlogPost | undefined => {
  return blogPosts.find(post => post.id === id);
};