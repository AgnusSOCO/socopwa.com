/**
 * A/B Testing Infrastructure
 * 
 * Simple A/B testing utility for running experiments and tracking variants.
 */

import { trackEvent } from './analytics';

export interface ABTest {
  id: string;
  variants: string[];
  weights?: number[]; // Optional weights for each variant (must sum to 1)
}

export interface ABTestAssignment {
  testId: string;
  variant: string;
  timestamp: number;
}

const AB_TEST_STORAGE_KEY = 'socopwa_ab_tests';

/**
 * Get stored A/B test assignments
 */
const getStoredAssignments = (): Record<string, ABTestAssignment> => {
  try {
    const stored = localStorage.getItem(AB_TEST_STORAGE_KEY);
    return stored ? JSON.parse(stored) : {};
  } catch (error) {
    console.error('Error retrieving A/B test assignments:', error);
    return {};
  }
};

/**
 * Store A/B test assignment
 */
const storeAssignment = (testId: string, variant: string): void => {
  try {
    const assignments = getStoredAssignments();
    assignments[testId] = {
      testId,
      variant,
      timestamp: Date.now(),
    };
    localStorage.setItem(AB_TEST_STORAGE_KEY, JSON.stringify(assignments));
  } catch (error) {
    console.error('Error storing A/B test assignment:', error);
  }
};

/**
 * Assign user to a variant based on weights
 */
const assignVariant = (variants: string[], weights?: number[]): string => {
  if (!weights || weights.length !== variants.length) {
    const randomIndex = Math.floor(Math.random() * variants.length);
    return variants[randomIndex];
  }
  
  const random = Math.random();
  let cumulativeWeight = 0;
  
  for (let i = 0; i < variants.length; i++) {
    cumulativeWeight += weights[i];
    if (random <= cumulativeWeight) {
      return variants[i];
    }
  }
  
  return variants[0];
};

/**
 * Get variant for an A/B test
 * Returns existing assignment or creates new one
 */
export const getVariant = (test: ABTest): string => {
  const assignments = getStoredAssignments();
  
  if (assignments[test.id]) {
    return assignments[test.id].variant;
  }
  
  const variant = assignVariant(test.variants, test.weights);
  storeAssignment(test.id, variant);
  
  trackEvent('ab_test_assigned', {
    test_id: test.id,
    variant: variant,
  });
  
  return variant;
};

/**
 * Track conversion for A/B test
 */
export const trackABTestConversion = (testId: string, conversionType: string): void => {
  const assignments = getStoredAssignments();
  const assignment = assignments[testId];
  
  if (assignment) {
    trackEvent('ab_test_conversion', {
      test_id: testId,
      variant: assignment.variant,
      conversion_type: conversionType,
    });
  }
};

/**
 * Get all active test assignments
 */
export const getAllAssignments = (): Record<string, ABTestAssignment> => {
  return getStoredAssignments();
};

/**
 * Clear all A/B test assignments (useful for testing)
 */
export const clearAllAssignments = (): void => {
  try {
    localStorage.removeItem(AB_TEST_STORAGE_KEY);
  } catch (error) {
    console.error('Error clearing A/B test assignments:', error);
  }
};

/**
 * Example A/B tests (can be configured)
 */
export const AB_TESTS = {
  HERO_CTA: {
    id: 'hero_cta_text',
    variants: ['Get Started', 'Book Free Consultation', 'Talk to an Expert'],
    weights: [0.33, 0.34, 0.33],
  },
  EXIT_POPUP_OFFER: {
    id: 'exit_popup_offer',
    variants: ['free_assessment', 'free_consultation', 'discount_offer'],
    weights: [0.4, 0.4, 0.2],
  },
};
