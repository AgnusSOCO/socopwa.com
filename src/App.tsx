import React, { Suspense } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { ScrollToTop } from './components/ScrollToTop';
import { LoadingSpinner } from './components/LoadingSpinner';
import { ErrorBoundary } from './components/ErrorBoundary';

// Lazy load pages
const Home = React.lazy(() => import('./pages/Home'));
const About = React.lazy(() => import('./pages/About'));
const Contact = React.lazy(() => import('./pages/Contact'));
const ServicesPage = React.lazy(() => import('./pages/ServicesPage'));
const AIIntegration = React.lazy(() => import('./pages/services/AIIntegration'));
const CloudServices = React.lazy(() => import('./pages/services/CloudServices'));
const Cybersecurity = React.lazy(() => import('./pages/services/Cybersecurity'));
const CybersecurityTraining = React.lazy(() => import('./pages/services/CybersecurityTraining'));
const GoogleWorkspace = React.lazy(() => import('./pages/services/GoogleWorkspace'));
const ITConsulting = React.lazy(() => import('./pages/services/ITConsulting'));
const FinTech = React.lazy(() => import('./pages/services/FinTech'));
const DigitalID = React.lazy(() => import('./pages/services/DigitalID'));
const Blog = React.lazy(() => import('./pages/Blog'));
const BlogPost = React.lazy(() => import('./components/blog/BlogPost'));
const Careers = React.lazy(() => import('./pages/Careers'));

export default function App() {
  return (
    <HelmetProvider>
      <ErrorBoundary>
        <BrowserRouter basename="/">
          <div className="min-h-screen flex flex-col relative bg-white">
            <Navbar />
            <main className="flex-grow relative z-0">
              <Suspense fallback={<LoadingSpinner />}>
                <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/about" element={<About />} />
                  <Route path="/contact" element={<Contact />} />
                  <Route path="/services" element={<ServicesPage />} />
                  <Route path="/services/ai-integration" element={<AIIntegration />} />
                  <Route path="/services/cloud-services" element={<CloudServices />} />
                  <Route path="/services/cybersecurity" element={<Cybersecurity />} />
                  <Route path="/services/cybersecurity-training" element={<CybersecurityTraining />} />
                  <Route path="/services/google-workspace" element={<GoogleWorkspace />} />
                  <Route path="/services/it-consulting" element={<ITConsulting />} />
                  <Route path="/services/fintech" element={<FinTech />} />
                  <Route path="/services/digital-id" element={<DigitalID />} />
                  <Route path="/blog" element={<Blog />} />
                  <Route path="/blog/:id" element={<BlogPost />} />
                  <Route path="/careers" element={<Careers />} />
                </Routes>
              </Suspense>
            </main>
            <Footer />
            <ScrollToTop />
          </div>
        </BrowserRouter>
      </ErrorBoundary>
    </HelmetProvider>
  );
}