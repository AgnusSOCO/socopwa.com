import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Zap, Gamepad2, Award, BookOpen, Users, Code, Server, Database, Lock, FileCheck, Layers, Cpu, Network, BarChart, CheckCircle, Briefcase } from 'lucide-react';
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
                  engaging, interactive experiences designed for everyone from beginners to experts.
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
              {/* Training Product 1 - Haiku Online */}
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
                    Learn real-world skills like password cracking, network scanning, and vulnerability 
                    assessment through engaging video games designed for all skill levels.
                  </p>
                  
                  <div className="space-y-6 mb-8">
                    <div className="flex items-start gap-3">
                      <div className="bg-blue-100 p-2 rounded-lg text-blue-600 mt-1">
                        <Network className="w-5 h-5" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900">The Grid</h4>
                        <p className="text-gray-600">Our simulated Linux OS and network environment where you'll complete both defensive and offensive hacking missions. Practice real commands in a safe, controlled environment with immediate feedback.</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-3">
                      <div className="bg-blue-100 p-2 rounded-lg text-blue-600 mt-1">
                        <Award className="w-5 h-5" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900">NICE Framework Aligned</h4>
                        <p className="text-gray-600">Training aligned with the National Initiative for Cybersecurity Education (NICE) Framework and industry certifications like CompTIA Security+, ensuring real-world applicability and career advancement.</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-3">
                      <div className="bg-blue-100 p-2 rounded-lg text-blue-600 mt-1">
                        <Users className="w-5 h-5" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900">Interactive NPCs</h4>
                        <p className="text-gray-600">Engage with non-playing characters that guide your learning journey, provide challenges, and create an immersive storyline that makes security concepts easier to understand and remember.</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-3">
                      <div className="bg-blue-100 p-2 rounded-lg text-blue-600 mt-1">
                        <Server className="w-5 h-5" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900">Browser-Based Access</h4>
                        <p className="text-gray-600">No downloads or special hardware required. Access your training environment from any modern browser, making it easy to learn at your own pace from anywhere.</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-blue-50 p-4 rounded-lg mb-8">
                    <h4 className="font-semibold text-gray-900 mb-2">Skills You'll Learn:</h4>
                    <div className="grid grid-cols-2 gap-2">
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                        <span className="text-gray-700">Network Scanning</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                        <span className="text-gray-700">Password Cracking</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                        <span className="text-gray-700">Linux Commands</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                        <span className="text-gray-700">Vulnerability Assessment</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                        <span className="text-gray-700">Social Engineering</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                        <span className="text-gray-700">Incident Response</span>
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

              {/* Training Product 2 - Haiku Pro */}
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
                    Designed for established or aspiring cybersecurity professionals and teams looking 
                    to master advanced skills without the typical time and cost constraints.
                  </p>
                  
                  <div className="space-y-6 mb-8">
                    <div className="flex items-start gap-3">
                      <div className="bg-purple-100 p-2 rounded-lg text-purple-600 mt-1">
                        <Server className="w-5 h-5" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900">Cloud-Based Networks</h4>
                        <p className="text-gray-600">Practice on intricate cloud-based networks with multiple servers and realistic configurations. Our open-world design allows you to train skills freely in environments that mirror real enterprise systems.</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-3">
                      <div className="bg-purple-100 p-2 rounded-lg text-purple-600 mt-1">
                        <Server className="w-5 h-5" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900">AWS Ranges</h4>
                        <p className="text-gray-600">Access specialized AWS-based training environments with pre-configured security challenges. Develop your Skillz Resume as you master competencies like advanced Linux commands and exploit modifications.</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-3">
                      <div className="bg-purple-100 p-2 rounded-lg text-purple-600 mt-1">
                        <Award className="w-5 h-5" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900">Certification Paths</h4>
                        <p className="text-gray-600">Master skills needed for prestigious certifications, including OSCP, Security+, and CEH. Our structured learning paths ensure you're prepared for certification exams and real-world security challenges.</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-3">
                      <div className="bg-purple-100 p-2 rounded-lg text-purple-600 mt-1">
                        <Cpu className="w-5 h-5" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900">Real Kali Linux Environment</h4>
                        <p className="text-gray-600">Access a full Kali Linux environment directly in your browser, complete with all the professional penetration testing tools used by security professionals worldwide.</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-purple-50 p-4 rounded-lg mb-8">
                    <h4 className="font-semibold text-gray-900 mb-2">Advanced Challenges Include:</h4>
                    <div className="grid grid-cols-2 gap-2">
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-purple-600 rounded-full"></div>
                        <span className="text-gray-700">CVE Discovery</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-purple-600 rounded-full"></div>
                        <span className="text-gray-700">Exploit Development</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-purple-600 rounded-full"></div>
                        <span className="text-gray-700">Buffer Overflow</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-purple-600 rounded-full"></div>
                        <span className="text-gray-700">Advanced Persistence</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-purple-600 rounded-full"></div>
                        <span className="text-gray-700">Cyber Defense</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-purple-600 rounded-full"></div>
                        <span className="text-gray-700">Forensic Analysis</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-blue-50 p-4 rounded-lg mb-8">
                    <p className="text-gray-700 italic">
                      <span className="font-semibold">Bonus:</span> Haiku Pro includes full access to Haiku Online, giving you a complete training ecosystem from beginner to advanced levels.
                    </p>
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
              {/* Training Product 3 - Haiku Forge */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-white rounded-xl shadow-xl overflow-hidden border border-gray-100"
              >
                <div className="h-64 bg-gradient-to-r from-blue-600 to-green-600 relative">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <Layers className="w-24 h-24 text-white/80" />
                  </div>
                </div>
                <div className="p-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Haiku Forge</h3>
                  <p className="text-gray-600 mb-6">
                    Build custom, gamified cybersecurity training tailored to your organization's specific needs. 
                    Create engaging training scenarios on simulated networks mirrored to your technology stack 
                    without the high costs typically associated with custom cyber ranges.
                  </p>
                  
                  <div className="space-y-6 mb-8">
                    <div className="flex items-start gap-3">
                      <div className="bg-green-100 p-2 rounded-lg text-green-600 mt-1">
                        <Code className="w-5 h-5" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900">No Code Required</h4>
                        <p className="text-gray-600">Our intuitive drag-and-drop interface allows anyone to create sophisticated training scenarios without programming knowledge. Build complex network simulations with just a few clicks.</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-3">
                      <div className="bg-green-100 p-2 rounded-lg text-green-600 mt-1">
                        <Network className="w-5 h-5" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900">Simulated Devices</h4>
                        <p className="text-gray-600">Create virtual networks with a wide range of devices including servers, workstations, IoT devices, and network equipment. Configure each device to mirror your actual infrastructure.</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-3">
                      <div className="bg-green-100 p-2 rounded-lg text-green-600 mt-1">
                        <Database className="w-5 h-5" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900">WiFi Module Emulation</h4>
                        <p className="text-gray-600">Simulate wireless networks and security challenges with our advanced WiFi emulation module. Train teams on wireless security protocols, attacks, and defenses in a controlled environment.</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-3">
                      <div className="bg-green-100 p-2 rounded-lg text-green-600 mt-1">
                        <Lock className="w-5 h-5" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900">Customizable Access Permissions</h4>
                        <p className="text-gray-600">Define granular access controls for different user roles and training scenarios. Create progressive learning paths that unlock new challenges as skills develop.</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-gray-100 p-6 rounded-lg mb-8">
                    <h4 className="font-semibold text-gray-900 mb-4">Three Ways to Build Your Training:</h4>
                    
                    <div className="space-y-4">
                      <div className="flex items-start gap-3">
                        <div className="bg-blue-100 p-2 rounded-full text-blue-600">
                          <span className="font-bold">1</span>
                        </div>
                        <div>
                          <h5 className="font-medium text-gray-900">Build Your Own Content</h5>
                          <p className="text-gray-600">Create your own applications and tools to train employees on the specific systems they use daily.</p>
                        </div>
                      </div>
                      
                      <div className="flex items-start gap-3">
                        <div className="bg-blue-100 p-2 rounded-full text-blue-600">
                          <span className="font-bold">2</span>
                        </div>
                        <div>
                          <h5 className="font-medium text-gray-900">We Build It For You</h5>
                          <p className="text-gray-600">Our experts can build custom training environments that precisely match your requirements.</p>
                        </div>
                      </div>
                      
                      <div className="flex items-start gap-3">
                        <div className="bg-blue-100 p-2 rounded-full text-blue-600">
                          <span className="font-bold">3</span>
                        </div>
                        <div>
                          <h5 className="font-medium text-gray-900">Access Community Content</h5>
                          <p className="text-gray-600">Leverage training modules shared by the Haiku community to quickly implement best practices.</p>
                        </div>
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

              {/* Training Product 4 - Admin Panel */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="bg-white rounded-xl shadow-xl overflow-hidden border border-gray-100"
              >
                <div className="h-64 bg-gradient-to-r from-indigo-600 to-blue-600 relative">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <BarChart className="w-24 h-24 text-white/80" />
                  </div>
                </div>
                <div className="p-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Admin Panel</h3>
                  <p className="text-gray-600 mb-6">
                    Measure and improve your organization's cybersecurity resilience with our 
                    data-driven employee evaluation solution. Identify team strengths, skill gaps, 
                    and competencies to optimize your security workforce and training investments.
                  </p>
                  
                  <div className="space-y-6 mb-8">
                    <div className="flex items-start gap-3">
                      <div className="bg-indigo-100 p-2 rounded-lg text-indigo-600 mt-1">
                        <Users className="w-5 h-5" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900">Training Management</h4>
                        <p className="text-gray-600">Create and track multiple teams and groups in one centralized dashboard. Easily manage team curriculum, assign training modules, and monitor progress across your entire organization.</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-3">
                      <div className="bg-indigo-100 p-2 rounded-lg text-indigo-600 mt-1">
                        <FileCheck className="w-5 h-5" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900">Detailed Analytics</h4>
                        <p className="text-gray-600">Access comprehensive data on each learner's progress, including hours trained, completed challenges, areas of specialty, and growth opportunities. Generate custom reports for stakeholders and compliance needs.</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-3">
                      <div className="bg-indigo-100 p-2 rounded-lg text-indigo-600 mt-1">
                        <Briefcase className="w-5 h-5" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900">Workforce Management</h4>
                        <p className="text-gray-600">Determine skill competencies in real-time and identify talent for specific security roles. Ensure optimal responses to incidents by knowing exactly who has mastered critical security skills.</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-3">
                      <div className="bg-indigo-100 p-2 rounded-lg text-indigo-600 mt-1">
                        <CheckCircle className="w-5 h-5" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900">Compliance Support</h4>
                        <p className="text-gray-600">Meet regulatory requirements with built-in compliance reporting for standards like NIST, ISO 27001, and industry-specific regulations. Document your security training efforts with detailed audit trails.</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-indigo-50 p-4 rounded-lg mb-8">
                    <h4 className="font-semibold text-gray-900 mb-2">Key Features:</h4>
                    <div className="grid grid-cols-2 gap-y-2 gap-x-4">
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-indigo-600 rounded-full"></div>
                        <span className="text-gray-700">Canvas Integration</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-indigo-600 rounded-full"></div>
                        <span className="text-gray-700">Individual Reports</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-indigo-600 rounded-full"></div>
                        <span className="text-gray-700">Group Reports</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-indigo-600 rounded-full"></div>
                        <span className="text-gray-700">User Management</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-indigo-600 rounded-full"></div>
                        <span className="text-gray-700">Custom Dashboard</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-indigo-600 rounded-full"></div>
                        <span className="text-gray-700">Security Awareness Module</span>
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

        {/* Comparison Table */}
        <div className="py-24 bg-gray-50">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">How We Compare</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                See how Haiku Forge outperforms traditional cyber ranges
              </p>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full bg-white rounded-xl shadow-lg">
                <thead>
                  <tr className="bg-gray-100">
                    <th className="px-6 py-4 text-left text-gray-900 font-bold">Features</th>
                    <th className="px-6 py-4 text-center text-gray-900 font-bold">Traditional Cyber Ranges</th>
                    <th className="px-6 py-4 text-center text-blue-600 font-bold">Haiku Forge</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  <tr>
                    <td className="px-6 py-4 text-gray-900">Comprehensive Training</td>
                    <td className="px-6 py-4 text-center text-gray-500">Only Tests Existing Skills</td>
                    <td className="px-6 py-4 text-center text-blue-600">
                      <CheckCircle className="w-6 h-6 mx-auto" />
                    </td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 text-gray-900">Quick Setup of New Scenarios</td>
                    <td className="px-6 py-4 text-center text-gray-500">
                      <svg className="w-6 h-6 mx-auto text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                      </svg>
                    </td>
                    <td className="px-6 py-4 text-center text-blue-600">
                      <CheckCircle className="w-6 h-6 mx-auto" />
                    </td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 text-gray-900">Wireless Capabilities Emulation</td>
                    <td className="px-6 py-4 text-center text-gray-500">
                      <svg className="w-6 h-6 mx-auto text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                      </svg>
                    </td>
                    <td className="px-6 py-4 text-center text-blue-600">
                      <CheckCircle className="w-6 h-6 mx-auto" />
                    </td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 text-gray-900">No Technical Resources Required</td>
                    <td className="px-6 py-4 text-center text-gray-500">
                      <svg className="w-6 h-6 mx-auto text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                      </svg>
                    </td>
                    <td className="px-6 py-4 text-center text-blue-600">
                      <CheckCircle className="w-6 h-6 mx-auto" />
                    </td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 text-gray-900">Minimal Maintenance</td>
                    <td className="px-6 py-4 text-center text-gray-500">
                      <svg className="w-6 h-6 mx-auto text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                      </svg>
                    </td>
                    <td className="px-6 py-4 text-center text-blue-600">
                      <CheckCircle className="w-6 h-6 mx-auto" />
                    </td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 text-gray-900">Tests Non-Technical Skills</td>
                    <td className="px-6 py-4 text-center text-gray-500">
                      <svg className="w-6 h-6 mx-auto text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                      </svg>
                    </td>
                    <td className="px-6 py-4 text-center text-blue-600">
                      <CheckCircle className="w-6 h-6 mx-auto" />
                    </td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 text-gray-900">Embedded Learning Engineering</td>
                    <td className="px-6 py-4 text-center text-gray-500">
                      <svg className="w-6 h-6 mx-auto text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                      </svg>
                    </td>
                    <td className="px-6 py-4 text-center text-blue-600">
                      <CheckCircle className="w-6 h-6 mx-auto" />
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* Testimonials Section */}
        <div className="py-24 bg-white">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">What Our Users Say</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Hear from professionals who've transformed their cybersecurity skills with our training
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-gray-50 p-6 rounded-xl shadow-md"
              >
                <div className="flex items-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 text-yellow-400 fill-current" viewBox="0 0 24 24">
                      <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                    </svg>
                  ))}
                </div>
                <p className="text-gray-700 mb-4">
                  "Haiku Online completely changed how I approach cybersecurity learning. The gamified environment made complex concepts easy to understand, and I was able to earn my Security+ certification in just 3 months."
                </p>
                <div>
                  <p className="font-semibold text-gray-900">Michael Chen</p>
                  <p className="text-gray-500 text-sm">Security Analyst</p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="bg-gray-50 p-6 rounded-xl shadow-md"
              >
                <div className="flex items-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 text-yellow-400 fill-current" viewBox="0 0 24 24">
                      <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                    </svg>
                  ))}
                </div>
                <p className="text-gray-700 mb-4">
                  "As a CISO, I needed a solution to train my entire security team efficiently. Haiku Pro and Admin Panel gave us exactly what we needed - comprehensive training with detailed analytics to track progress and identify skill gaps."
                </p>
                <div>
                  <p className="font-semibold text-gray-900">Sarah Johnson</p>
                  <p className="text-gray-500 text-sm">Chief Information Security Officer</p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="bg-gray-50 p-6 rounded-xl shadow-md"
              >
                <div className="flex items-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 text-yellow-400 fill-current" viewBox="0 0 24 24">
                      <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                    </svg>
                  ))}
                </div>
                <p className="text-gray-700 mb-4">
                  "Haiku Forge allowed us to create custom training scenarios that perfectly matched our company's infrastructure. The drag-and-drop interface made it easy to build complex simulations without any coding knowledge."
                </p>
                <div>
                  <p className="font-semibold text-gray-900">David Rodriguez</p>
                  <p className="text-gray-500 text-sm">IT Training Manager</p>
                </div>
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
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors"
                >
                  Start Your Free Trial
                  <Zap className="w-5 h-5" />
                </Link>
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 bg-transparent border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white/10 transition-colors"
                >
                  Schedule a Demo
                  <Gamepad2 className="w-5 h-5" />
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </>
  );
}