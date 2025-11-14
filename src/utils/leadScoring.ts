/**
 * Lead Scoring System
 * 
 * Tracks user engagement and calculates lead quality score.
 */

import { trackEvent } from './analytics';

export interface LeadScore {
  score: number;
  actions: string[];
  timestamp: number;
  lastUpdated: number;
}

export interface ScoringAction {
  action: string;
  points: number;
  metadata?: Record<string, string | number | boolean>;
}

const LEAD_SCORE_STORAGE_KEY = 'socopwa_lead_score';
const MAX_SCORE = 100;

/**
 * Point values for different actions
 */
export const SCORING_RULES: Record<string, number> = {
  page_view: 1,
  time_on_page_30s: 2,
  time_on_page_60s: 3,
  time_on_page_120s: 5,
  scroll_25: 1,
  scroll_50: 2,
  scroll_75: 3,
  scroll_100: 5,
  
  service_view: 3,
  case_study_view: 5,
  tech_stack_filter: 2,
  faq_expand: 2,
  
  roi_calculator_start: 10,
  roi_calculator_complete: 20,
  calendar_view: 15,
  calendar_book: 30,
  contact_form_view: 5,
  contact_form_start: 10,
  contact_form_submit: 25,
  exit_popup_form_submit: 20,
  
  return_visitor: 5,
  multiple_sessions: 10,
};

/**
 * Get stored lead score
 */
export const getLeadScore = (): LeadScore => {
  try {
    const stored = localStorage.getItem(LEAD_SCORE_STORAGE_KEY);
    if (stored) {
      return JSON.parse(stored);
    }
  } catch (error) {
    console.error('Error retrieving lead score:', error);
  }
  
  return {
    score: 0,
    actions: [],
    timestamp: Date.now(),
    lastUpdated: Date.now(),
  };
};

/**
 * Update lead score with new action
 */
export const updateLeadScore = (action: ScoringAction): LeadScore => {
  const currentScore = getLeadScore();
  const points = action.points;
  
  const newScore = Math.min(currentScore.score + points, MAX_SCORE);
  
  const actions = [...currentScore.actions, action.action].slice(-50);
  
  const updatedScore: LeadScore = {
    score: newScore,
    actions,
    timestamp: currentScore.timestamp,
    lastUpdated: Date.now(),
  };
  
  try {
    localStorage.setItem(LEAD_SCORE_STORAGE_KEY, JSON.stringify(updatedScore));
  } catch (error) {
    console.error('Error storing lead score:', error);
  }
  
  trackEvent('lead_score_updated', {
    action: action.action,
    points_added: points,
    new_score: newScore,
    ...action.metadata,
  });
  
  return updatedScore;
};

/**
 * Add points for a specific action
 */
export const addLeadPoints = (actionKey: string, metadata?: Record<string, string | number | boolean>): void => {
  const points = SCORING_RULES[actionKey] || 0;
  
  if (points > 0) {
    updateLeadScore({
      action: actionKey,
      points,
      metadata,
    });
  }
};

/**
 * Get lead quality tier based on score
 */
export const getLeadTier = (score: number): 'cold' | 'warm' | 'hot' | 'qualified' => {
  if (score >= 60) return 'qualified';
  if (score >= 40) return 'hot';
  if (score >= 20) return 'warm';
  return 'cold';
};

/**
 * Get lead score summary
 */
export const getLeadScoreSummary = (): {
  score: number;
  tier: string;
  actions: string[];
  sessionDuration: number;
} => {
  const leadScore = getLeadScore();
  const tier = getLeadTier(leadScore.score);
  const sessionDuration = Math.floor((Date.now() - leadScore.timestamp) / 1000);
  
  return {
    score: leadScore.score,
    tier,
    actions: leadScore.actions,
    sessionDuration,
  };
};

/**
 * Clear lead score (useful for testing)
 */
export const clearLeadScore = (): void => {
  try {
    localStorage.removeItem(LEAD_SCORE_STORAGE_KEY);
  } catch (error) {
    console.error('Error clearing lead score:', error);
  }
};

/**
 * Initialize lead scoring tracking
 */
export const initLeadScoring = (): void => {
  const leadScore = getLeadScore();
  
  if (leadScore.actions.length > 0) {
    addLeadPoints('return_visitor');
  }
  
  addLeadPoints('page_view');
  
  const timeTrackers = [
    { duration: 30000, action: 'time_on_page_30s' },
    { duration: 60000, action: 'time_on_page_60s' },
    { duration: 120000, action: 'time_on_page_120s' },
  ];
  
  timeTrackers.forEach(({ duration, action }) => {
    setTimeout(() => {
      addLeadPoints(action);
    }, duration);
  });
  
  const scrollTracked = { '25': false, '50': false, '75': false, '100': false };
  
  const trackScroll = () => {
    const scrollPercent = Math.round(
      (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100
    );
    
    if (scrollPercent >= 25 && !scrollTracked['25']) {
      scrollTracked['25'] = true;
      addLeadPoints('scroll_25');
    }
    if (scrollPercent >= 50 && !scrollTracked['50']) {
      scrollTracked['50'] = true;
      addLeadPoints('scroll_50');
    }
    if (scrollPercent >= 75 && !scrollTracked['75']) {
      scrollTracked['75'] = true;
      addLeadPoints('scroll_75');
    }
    if (scrollPercent >= 100 && !scrollTracked['100']) {
      scrollTracked['100'] = true;
      addLeadPoints('scroll_100');
    }
  };
  
  window.addEventListener('scroll', trackScroll, { passive: true });
};
