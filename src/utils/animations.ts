// Optimized animation variants with reduced motion
export const fadeInUp = {
  initial: {
    opacity: 0,
    y: 20
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.3
    }
  }
};

export const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.05
    }
  }
};

export const scaleOnHover = {
  hover: {
    scale: 1.02,
    transition: {
      duration: 0.2
    }
  }
};

// Add a utility to check for reduced motion preference
export const shouldReduceMotion = () => {
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
};