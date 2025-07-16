import React from 'react';
import { Brain, Shield, Cloud, TrendingUp } from 'lucide-react';

const SuccessStories: React.FC = () => {
  const stories = [
    {
      icon: Brain,
      title: 'AI-Driven Manufacturing Optimization',
      description: 'Implemented AI solutions that reduced production costs by 35% and improved quality control accuracy by 45%.',
      tags: ['AI Integration', 'Manufacturing', 'Process Optimization'],
      metrics: [
        { label: 'Cost Reduction', value: '35%' },
        { label: 'Quality Improvement', value: '45%' }
      ]
    },
    {
      icon: Shield,
      title: 'Enterprise Security Transformation',
      description: 'Comprehensive cybersecurity overhaul resulting in zero breaches and 99.9% threat detection rate.',
      tags: ['Cybersecurity', 'Finance', 'Enterprise'],
      metrics: [
        { label: 'Security Breaches', value: '0' },
        { label: 'Threat Detection', value: '99.9%' }
      ]
    },
    {
      icon: Cloud,
      title: 'Cloud Migration Success',
      description: 'Seamless migration to cloud infrastructure, reducing operational costs by 40% and improving scalability.',
      tags: ['Cloud Services', 'Retail', 'Digital Transformation'],
      metrics: [
        { label: 'Cost Savings', value: '40%' },
        { label: 'Uptime', value: '99.99%' }
      ]
    }
  ];

  return (
    <section id="success" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">Success Stories</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Discover how we've helped businesses transform and succeed in the digital age.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {stories.map((story, index) => (
            <div
              key={story.title}
              className="bg-gradient-to-br from-gray-900/80 to-gray-800/80 backdrop-blur-sm rounded-xl p-8 hover:from-gray-800/80 hover:to-gray-700/80 transition-all duration-300 transform hover:-translate-y-2 border border-gray-700/50 hover:border-white/30"
            >
              <div className="mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-gray-600 to-gray-700 rounded-xl flex items-center justify-center mb-4">
                  <story.icon size={28} className="text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">{story.title}</h3>
                <p className="text-gray-300 leading-relaxed">{story.description}</p>
              </div>

              <div className="mb-6">
                <div className="flex flex-wrap gap-2">
                  {story.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 bg-white/20 text-white rounded-full text-sm font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                {story.metrics.map((metric) => (
                  <div key={metric.label} className="text-center">
                    <div className="text-2xl font-bold text-white mb-1">{metric.value}</div>
                    <div className="text-sm text-gray-400">{metric.label}</div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SuccessStories;