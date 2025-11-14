import React from 'react';
import { X, Download, Clock, Users } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { trackEvent } from '../utils/analytics';

interface CaseStudy {
  id: string;
  title: string;
  client: string;
  industry: string;
  challenge: string;
  solution: string;
  results: {
    metric: string;
    value: string;
    icon: React.ElementType;
  }[];
  timeline: string;
  teamSize: string;
  technologies: string[];
  testimonial: {
    quote: string;
    author: string;
    role: string;
  };
}

interface CaseStudyModalProps {
  caseStudy: CaseStudy | null;
  onClose: () => void;
}

const CaseStudyModal: React.FC<CaseStudyModalProps> = ({ caseStudy, onClose }) => {
  const { t } = useLanguage();

  if (!caseStudy) return null;

  const handleDownload = () => {
    trackEvent('case_study_download', { case_study: caseStudy.id });
    alert(t('caseStudyModal.downloadMessage'));
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 backdrop-blur-sm animate-fade-in overflow-y-auto">
      <div className="relative bg-gradient-to-br from-gray-900 to-black border border-white/20 rounded-2xl shadow-2xl max-w-4xl w-full mx-4 my-8 animate-scale-in">
        {/* Header */}
        <div className="sticky top-0 bg-gradient-to-r from-gray-900 to-black border-b border-white/20 rounded-t-2xl p-6 flex items-center justify-between z-10">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-white">{caseStudy.title}</h2>
            <p className="text-gray-400 mt-1">{caseStudy.client} • {caseStudy.industry}</p>
          </div>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-white transition-colors"
            aria-label="Close"
          >
            <X size={28} />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 md:p-8 space-y-8">
          {/* Key Metrics */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {caseStudy.results.map((result, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-white/10 to-white/5 border border-white/20 rounded-xl p-6 text-center"
              >
                <div className="inline-flex items-center justify-center w-12 h-12 bg-white/10 rounded-full mb-3">
                  <result.icon size={24} className="text-white" />
                </div>
                <div className="text-3xl font-bold text-white mb-1">{result.value}</div>
                <div className="text-gray-400 text-sm">{result.metric}</div>
              </div>
            ))}
          </div>

          {/* Challenge */}
          <div>
            <h3 className="text-xl font-bold text-white mb-3">{t('caseStudyModal.challenge')}</h3>
            <p className="text-gray-300 leading-relaxed">{caseStudy.challenge}</p>
          </div>

          {/* Solution */}
          <div>
            <h3 className="text-xl font-bold text-white mb-3">{t('caseStudyModal.solution')}</h3>
            <p className="text-gray-300 leading-relaxed">{caseStudy.solution}</p>
          </div>

          {/* Project Details */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white/5 border border-white/10 rounded-xl p-6">
              <div className="flex items-center space-x-3 mb-3">
                <Clock size={20} className="text-white" />
                <h4 className="font-bold text-white">{t('caseStudyModal.timeline')}</h4>
              </div>
              <p className="text-gray-300">{caseStudy.timeline}</p>
            </div>

            <div className="bg-white/5 border border-white/10 rounded-xl p-6">
              <div className="flex items-center space-x-3 mb-3">
                <Users size={20} className="text-white" />
                <h4 className="font-bold text-white">{t('caseStudyModal.teamSize')}</h4>
              </div>
              <p className="text-gray-300">{caseStudy.teamSize}</p>
            </div>
          </div>

          {/* Technologies */}
          <div>
            <h3 className="text-xl font-bold text-white mb-3">{t('caseStudyModal.technologies')}</h3>
            <div className="flex flex-wrap gap-2">
              {caseStudy.technologies.map((tech, index) => (
                <span
                  key={index}
                  className="px-3 py-1 bg-white/10 border border-white/20 text-white rounded-full text-sm"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Testimonial */}
          <div className="bg-gradient-to-br from-white/10 to-white/5 border border-white/20 rounded-xl p-6">
            <p className="text-white text-lg italic mb-4">"{caseStudy.testimonial.quote}"</p>
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-lg">
                  {caseStudy.testimonial.author.charAt(0)}
                </span>
              </div>
              <div>
                <p className="text-white font-bold">{caseStudy.testimonial.author}</p>
                <p className="text-gray-400 text-sm">{caseStudy.testimonial.role}</p>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="flex flex-col md:flex-row gap-4">
            <button
              onClick={handleDownload}
              className="flex-1 flex items-center justify-center space-x-2 bg-white/10 hover:bg-white/20 text-white border border-white/20 py-3 px-6 rounded-lg font-semibold transition-all duration-200"
            >
              <Download size={20} />
              <span>{t('caseStudyModal.downloadPDF')}</span>
            </button>
            <button
              onClick={() => {
                trackEvent('case_study_cta_click', { case_study: caseStudy.id });
                onClose();
                window.location.href = '#contact';
              }}
              className="flex-1 bg-white hover:bg-gray-200 text-black py-3 px-6 rounded-lg font-bold transition-all duration-200"
            >
              {t('caseStudyModal.startProject')}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CaseStudyModal;
