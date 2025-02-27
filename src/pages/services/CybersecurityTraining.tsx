import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Zap, Gamepad2, Award, BookOpen, Users } from 'lucide-react';
import { SEO } from '../../components/SEO';
import { Link } from 'react-router-dom';

export default function CybersecurityTraining() {
  return (
    <>
      <SEO 
        title="Cybersecurity Training Services"
        description="Transform your cybersecurity skills with our innovative, game-based training solutions."
      />
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="pt-20"
      >
        {/* Hero Section */}
        <div className="relative bg-gradient-to-b from-gray-900 to-gray-800 text-white py-24">
          <div className="absolute inset-0">
            <img
              src="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&q=80"
              alt="Cybersecurity Training"
              className="w-full h-full object-cover opacity-10"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-gray-900/50 to-gray-900/90" />
          </div>
          
          <div className="container mx-auto px-6 relative">
            <div className="max-w-3xl">
              <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.2 }}
              >
                <div className="flex items-center gap-4 mb-6">
                  <Gamepad2 className="w-12 h-12 text-blue-400" />
                  <h1 className="text-5xl font-bold">Cybersecurity Training</h1>
                </div>
                <p className="text-xl text-gray-300 mb-8">
                  Join the next generation of cybersecurity learning with our innovative, 
                  game-based training solutions. Learn real-world cybersecurity skills through 
                  engaging, interactive experiences.
                </p>
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
                >
                  Start Your Free Trial
                  <Zap className="w-5 h-5" />
                </Link>
              </motion.div>
            </div>
          </div>
        </div>

        {/* Training Products Section */}
        <div className="py-24 bg-white">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Training Solutions</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Comprehensive cybersecurity training solutions for individuals, teams, and organizations
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              {/* Training Product 1 */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-white rounded-xl shadow-xl overflow-hidden border border-gray-100"
              >
                <div className="h-64 bg-gradient-to-r from-blue-600 to-purple-600 relative">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <Gamepad2 className="w-24 h-24 text-white/80" />
                  </div>
                </div>
                <div className="p-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Haiku Online</h3>
                  <p className="text-gray-600 mb-6">
                    Revolutionize your cybersecurity training with our game-based learning platform. 
                    Learn real-world skills like password cracking and network scanning through 
                    engaging video games.
                  </p>
                  <div className="space-y-4 mb-8">
                    <div className="flex items-start gap-3">
                      <div className="bg-blue-100 p-2 rounded-lg text-blue-600 mt-1">
                        <Shield className="w-5 h-5" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900">The Grid</h4>
                        <p className="text-gray-600">Simulated Linux OS and network for both defensive and offensive hacking missions</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="bg-blue-100 p-2 rounded-lg text-blue-600 mt-1">
                        <Award className="w-5 h-5" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900">NICE Framework Aligned</h4>
                        <p className="text-gray-600">Training aligned with industry certifications for real-world applicability</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="bg-blue-100 p-2 rounded-lg text-blue-600 mt-1">
                        <Users className="w-5 h-5" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900">Interactive NPCs</h4>
                        <p className="text-gray-600">Strategically placed non-playing characters to gamify the experience</p>
                      </div>
                    </div>
                  </div>
                  <Link
                    to="/contact"
                    className="inline-flex items-center gap-2 text-blue-600 font-semibold hover:text-blue-700"
                  >
                    Learn More
                    <Zap className="w-5 h-5" />
                  </Link>
                </div>
              </motion.div>

              {/* Training Product 2 */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="bg-white rounded-xl shadow-xl overflow-hidden border border-gray-100"
              >
                <div className="h-64 bg-gradient-to-r from-purple-600 to-blue-600 relative">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <Shield className="w-24 h-24 text-white/80" />
                  </div>
                </div>
                <div className="p-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Haiku Pro</h3>
                  <p className="text-gray-600 mb-6">
                    Advance your cybersecurity expertise with our professional-grade training platform. 
                    Designed for established or aspiring cybersecurity professionals and teams.
                  </p>
                  <div className="space-y-4 mb-8">
                    <div className="flex items-start gap-3">
                      <div className="bg-purple-100 p-2 rounded-lg text-purple-600 mt-1">
                        <Shield className="w-5 h-5" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900">Cloud-Based Networks</h4>
                        <p className="text-gray-600">Practice on intricate cloud-based networks with multiple servers</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="bg-purple-100 p-2 rounded-lg text-purple-600 mt-1">
                        <Award className="w-5 h-5" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900">Certification Paths</h4>
                        <p className="text-gray-600">Master skills needed for OSCP, Security+, and CEH certifications</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="bg-purple-100 p-2 rounded-lg text-purple-600 mt-1">
                        <BookOpen className="w-5 h-5" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900">Real-World Challenges</h4>
                        <p className="text-gray-600">Tackle CVE discovery, cyber defense, and buffer overflow challenges</p>
                      </div>
                    </div>
                  </div>
                  <Link
                    to="/contact"
                    className="inline-flex items-center gap-2 text-purple-600 font-semibold hover:text-purple-700"
                  >
                    Learn More
                    <Zap className="w-5 h-5" />
                  </Link>
                </div>
              </motion.div>
            </div>
          </div>
        </div>

        {/* Advanced Solutions Section */}
        <div className="py-24 bg-gray-50">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Advanced Training Solutions</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Custom training solutions for organizations and enterprises
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              {/* Training Product 3 */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-white rounded-xl shadow-xl overflow-hidden border border-gray-100"
              >
                <div className="h-64 bg-gradient-to-r from-blue-600 to-green-600 relative">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <BookOpen className="w-24 h-24 text-white/80" />
                  </div>
                </div>
                <div className="p-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Haiku Forge</h3>
                  <p className="text-gray-600 mb-6">
                    Build custom, gamified cybersecurity training tailored to your organization's needs. 
                    Create training on simulated networks mirrored to your technology stack.
                  </p>
                  <div className="space-y-4 mb-8">
                    <div className="flex items-start gap-3">
                      <div className="bg-green-100 p-2 rounded-lg text-green-600 mt-1">
                        <Shield className="w-5 h-5" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900">Custom Training</h4>
                        <p className="text-gray-600">Create engaging, gamified training specific to your organization</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="bg-green-100 p-2 rounded-lg text-green-600 mt-1">
                        <Award className="w-5 h-5" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900">No Code Required</h4>
                        <p className="text-gray-600">Drag-and-drop interface for easy training creation</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="bg-green-100 p-2 rounded-lg text-green-600 mt-1">
                        <Users className="w-5 h-5" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900">Flexible Options</h4>
                        <p className="text-gray-600">Build your own content or let us build it for you</p>
                      </div>
                    </div>
                  </div>
                  <Link
                    to="/contact"
                    className="inline-flex items-center gap-2 text-green-600 font-semibold hover:text-green-700"
                  >
                    Learn More
                    <Zap className="w-5 h-5" />
                  </Link>
                </div>
              </motion.div>

              {/* Training Product 4 */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="bg-white rounded-xl shadow-xl overflow-hidden border border-gray-100"
              >
                <div className="h-64 bg-gradient-to-r from-indigo-600 to-blue-600 relative">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <Users className="w-24 h-24 text-white/80" />
                  </div>
                </div>
                <div className="p-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Admin Panel</h3>
                  <p className="text-gray-600 mb-6">
                    Measure and improve your organization's cybersecurity resilience with our 
                    data-driven employee evaluation solution. Identify team strengths and skill gaps.
                  </p>
                  <div className="space-y-4 mb-8">
                    <div className="flex items-start gap-3">
                      <div className="bg-indigo-100 p-2 rounded-lg text-indigo-600 mt-1">
                        <Shield className="w-5 h-5" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900">Training Management</h4>
                        <p className="text-gray-600">Create and track multiple teams and manage curriculum</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="bg-indigo-100 p-2 rounded-lg text-indigo-600 mt-1">
                        <Award className="w-5 h-5" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900">Detailed Analytics</h4>
                        <p className="text-gray-600">Access detailed data on each learner's progress and competencies</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="bg-indigo-100 p-2 rounded-lg text-indigo-600 mt-1">
                        <Users className="w-5 h-5" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900">Compliance Support</h4>
                        <p className="text-gray-600">Meet compliance needs with real-time cyber resilience testing</p>
                      </div>
                    </div>
                  </div>
                  <Link
                    to="/contact"
                    className="inline-flex items-center gap-2 text-indigo-600 font-semibold hover:text-indigo-700"
                  >
                    Learn More
                    <Zap className="w-5 h-5" />
                  </Link>
                </div>
              </motion.div>
            </div>
          </div>
        </div>

        {/* Learning Process Section */}
        <div className="py-24 bg-white">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">How Our Training Works</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                A simple, effective approach to cybersecurity skill development
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Gamepad2 className="w-10 h-10 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Learn</h3>
                <p className="text-gray-600">
                  Play the game and learn cybersecurity skills through engaging, interactive experiences
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="text-center"
              >
                <div className="w-20 h-20 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Shield className="w-10 h-10 text-purple-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Train</h3>
                <p className="text-gray-600">
                  Complete missions based on real-world scenarios to build practical skills
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="text-center"
              >
                <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Award className="w-10 h-10 text-green-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Level Up</h3>
                <p className="text-gray-600">
                  Improve skill mastery whether you're a beginner or expert in cybersecurity
                </p>
              </motion.div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-blue-600 text-white py-24">
          <div className="container mx-auto px-6 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold mb-6">Ready to Transform Your Cybersecurity Training?</h2>
              <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
                Start your free trial today and experience the future of cybersecurity learning.
              </p>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors"
              >
                Start Your Free Trial
                <Zap className="w-5 h-5" />
              </Link>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </>
  );
}
