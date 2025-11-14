import React, { useState } from 'react';
import { Calculator, TrendingUp, DollarSign, Clock } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { trackEvent, trackFormStart, trackFormComplete } from '../utils/analytics';

const ROICalculator: React.FC = () => {
  const { t } = useLanguage();
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    currentITSpend: '',
    employees: '',
    industry: 'technology',
    challenges: [] as string[],
    email: '',
    company: '',
  });
  const [results, setResults] = useState<{
    estimatedSavings: number;
    roiPercentage: number;
    paybackMonths: number;
    productivityGain: number;
  } | null>(null);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleChallengeToggle = (challenge: string) => {
    const challenges = formData.challenges.includes(challenge)
      ? formData.challenges.filter(c => c !== challenge)
      : [...formData.challenges, challenge];
    
    setFormData({ ...formData, challenges });
  };

  const calculateROI = () => {
    const spend = parseFloat(formData.currentITSpend) || 0;
    const employees = parseInt(formData.employees) || 0;
    
    const savingsMultiplier = 0.25 + (formData.challenges.length * 0.05);
    const estimatedSavings = Math.round(spend * savingsMultiplier);
    const roiPercentage = Math.round((estimatedSavings / spend) * 100);
    const paybackMonths = Math.round(12 / (roiPercentage / 100));
    const productivityGain = Math.round(employees * 0.15); // 15% productivity gain per employee
    
    setResults({
      estimatedSavings,
      roiPercentage,
      paybackMonths,
      productivityGain,
    });
    
    trackFormComplete('roi_calculator');
    trackEvent('roi_calculated', {
      spend: spend,
      employees: employees,
      industry: formData.industry,
      challenges: formData.challenges.length,
    });
  };

  const handleNext = () => {
    if (step === 1) {
      trackFormStart('roi_calculator');
    }
    setStep(step + 1);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    try {
      await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...formData,
          firstName: formData.company,
          lastName: 'ROI Calculator',
          message: `ROI Calculator Lead - Estimated Savings: $${results?.estimatedSavings}`,
          source: 'roi_calculator',
        }),
      });
    } catch (error) {
      console.error('ROI calculator submission error:', error);
    }
    
    calculateROI();
    setStep(4);
  };

  return (
    <section id="roi-calculator" className="py-20 relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-white/20 to-white/10 rounded-full mb-4">
            <Calculator size={32} className="text-white" />
          </div>
          <h2 className="text-4xl font-bold text-white mb-4">{t('roiCalculator.title')}</h2>
          <p className="text-xl text-gray-300">{t('roiCalculator.subtitle')}</p>
        </div>

        <div className="bg-gradient-to-br from-gray-900/80 to-gray-800/80 backdrop-blur-sm rounded-2xl p-8 border border-gray-700/50">
          {/* Progress Bar */}
          <div className="mb-8">
            <div className="flex justify-between mb-2">
              {[1, 2, 3].map((s) => (
                <div
                  key={s}
                  className={`flex-1 h-2 rounded-full mx-1 ${
                    s <= step ? 'bg-white' : 'bg-gray-700'
                  }`}
                />
              ))}
            </div>
            <p className="text-gray-400 text-sm text-center">
              {t('roiCalculator.step')} {Math.min(step, 3)} {t('roiCalculator.of')} 3
            </p>
          </div>

          {/* Step 1: Basic Info */}
          {step === 1 && (
            <div className="space-y-6">
              <div>
                <label className="block text-white font-medium mb-2">
                  {t('roiCalculator.currentSpend')}
                </label>
                <div className="relative">
                  <DollarSign className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                  <input
                    type="number"
                    name="currentITSpend"
                    value={formData.currentITSpend}
                    onChange={handleInputChange}
                    placeholder="50000"
                    className="w-full pl-10 pr-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:border-white focus:outline-none"
                  />
                </div>
              </div>

              <div>
                <label className="block text-white font-medium mb-2">
                  {t('roiCalculator.employees')}
                </label>
                <input
                  type="number"
                  name="employees"
                  value={formData.employees}
                  onChange={handleInputChange}
                  placeholder="50"
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:border-white focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-white font-medium mb-2">
                  {t('roiCalculator.industry')}
                </label>
                <select
                  name="industry"
                  value={formData.industry}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white focus:border-white focus:outline-none"
                >
                  <option value="technology" className="bg-gray-900">{t('roiCalculator.industryTech')}</option>
                  <option value="finance" className="bg-gray-900">{t('roiCalculator.industryFinance')}</option>
                  <option value="healthcare" className="bg-gray-900">{t('roiCalculator.industryHealthcare')}</option>
                  <option value="retail" className="bg-gray-900">{t('roiCalculator.industryRetail')}</option>
                  <option value="manufacturing" className="bg-gray-900">{t('roiCalculator.industryManufacturing')}</option>
                  <option value="other" className="bg-gray-900">{t('roiCalculator.industryOther')}</option>
                </select>
              </div>

              <button
                onClick={handleNext}
                disabled={!formData.currentITSpend || !formData.employees}
                className="w-full bg-white hover:bg-gray-200 text-black font-bold py-3 px-6 rounded-lg transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {t('roiCalculator.next')}
              </button>
            </div>
          )}

          {/* Step 2: Challenges */}
          {step === 2 && (
            <div className="space-y-6">
              <div>
                <label className="block text-white font-medium mb-4">
                  {t('roiCalculator.challengesQuestion')}
                </label>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {[
                    'highCosts',
                    'slowPerformance',
                    'securityRisks',
                    'scalability',
                    'outdatedTech',
                    'dataManagement',
                  ].map((challenge) => (
                    <button
                      key={challenge}
                      onClick={() => handleChallengeToggle(challenge)}
                      className={`p-4 rounded-lg border-2 transition-all duration-200 text-left ${
                        formData.challenges.includes(challenge)
                          ? 'border-white bg-white/10 text-white'
                          : 'border-gray-700 bg-gray-800/50 text-gray-300 hover:border-gray-600'
                      }`}
                    >
                      {t(`roiCalculator.challenge${challenge.charAt(0).toUpperCase() + challenge.slice(1)}`)}
                    </button>
                  ))}
                </div>
              </div>

              <div className="flex space-x-4">
                <button
                  onClick={() => setStep(1)}
                  className="flex-1 bg-gray-700 hover:bg-gray-600 text-white font-bold py-3 px-6 rounded-lg transition-all duration-200"
                >
                  {t('roiCalculator.back')}
                </button>
                <button
                  onClick={handleNext}
                  disabled={formData.challenges.length === 0}
                  className="flex-1 bg-white hover:bg-gray-200 text-black font-bold py-3 px-6 rounded-lg transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {t('roiCalculator.next')}
                </button>
              </div>
            </div>
          )}

          {/* Step 3: Contact Info */}
          {step === 3 && (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-white font-medium mb-2">
                  {t('roiCalculator.emailLabel')}
                </label>
                <input
                  type="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="you@company.com"
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:border-white focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-white font-medium mb-2">
                  {t('roiCalculator.companyLabel')}
                </label>
                <input
                  type="text"
                  name="company"
                  required
                  value={formData.company}
                  onChange={handleInputChange}
                  placeholder="Your Company"
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:border-white focus:outline-none"
                />
              </div>

              <div className="flex space-x-4">
                <button
                  type="button"
                  onClick={() => setStep(2)}
                  className="flex-1 bg-gray-700 hover:bg-gray-600 text-white font-bold py-3 px-6 rounded-lg transition-all duration-200"
                >
                  {t('roiCalculator.back')}
                </button>
                <button
                  type="submit"
                  className="flex-1 bg-white hover:bg-gray-200 text-black font-bold py-3 px-6 rounded-lg transition-all duration-200"
                >
                  {t('roiCalculator.calculate')}
                </button>
              </div>
            </form>
          )}

          {/* Step 4: Results */}
          {step === 4 && results && (
            <div className="space-y-6">
              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold text-white mb-2">{t('roiCalculator.resultsTitle')}</h3>
                <p className="text-gray-300">{t('roiCalculator.resultsSubtitle')}</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-gradient-to-br from-green-900/30 to-green-800/30 border border-green-500/30 rounded-xl p-6">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-gray-300">{t('roiCalculator.estimatedSavings')}</span>
                    <TrendingUp className="text-green-400" size={24} />
                  </div>
                  <p className="text-4xl font-bold text-white">${results.estimatedSavings.toLocaleString()}</p>
                  <p className="text-green-400 text-sm mt-1">{t('roiCalculator.perYear')}</p>
                </div>

                <div className="bg-gradient-to-br from-blue-900/30 to-blue-800/30 border border-blue-500/30 rounded-xl p-6">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-gray-300">{t('roiCalculator.roi')}</span>
                    <DollarSign className="text-blue-400" size={24} />
                  </div>
                  <p className="text-4xl font-bold text-white">{results.roiPercentage}%</p>
                  <p className="text-blue-400 text-sm mt-1">{t('roiCalculator.returnOnInvestment')}</p>
                </div>

                <div className="bg-gradient-to-br from-purple-900/30 to-purple-800/30 border border-purple-500/30 rounded-xl p-6">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-gray-300">{t('roiCalculator.payback')}</span>
                    <Clock className="text-purple-400" size={24} />
                  </div>
                  <p className="text-4xl font-bold text-white">{results.paybackMonths}</p>
                  <p className="text-purple-400 text-sm mt-1">{t('roiCalculator.months')}</p>
                </div>

                <div className="bg-gradient-to-br from-orange-900/30 to-orange-800/30 border border-orange-500/30 rounded-xl p-6">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-gray-300">{t('roiCalculator.productivity')}</span>
                    <TrendingUp className="text-orange-400" size={24} />
                  </div>
                  <p className="text-4xl font-bold text-white">{results.productivityGain}</p>
                  <p className="text-orange-400 text-sm mt-1">{t('roiCalculator.hoursPerMonth')}</p>
                </div>
              </div>

              <div className="bg-white/10 border border-white/20 rounded-lg p-6 mt-6">
                <p className="text-white text-center mb-4">{t('roiCalculator.ctaMessage')}</p>
                <button
                  onClick={() => {
                    trackEvent('roi_calculator_cta_click');
                    window.location.href = '#contact';
                  }}
                  className="w-full bg-white hover:bg-gray-200 text-black font-bold py-3 px-6 rounded-lg transition-all duration-200"
                >
                  {t('roiCalculator.ctaButton')}
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default ROICalculator;
