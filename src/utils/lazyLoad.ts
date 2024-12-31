// Utility for consistent lazy loading
import React from 'react';

export const lazyLoadComponent = (
  importFn: () => Promise<any>,
  minDelay = 300
) => {
  return React.lazy(() =>
    Promise.all([
      importFn(),
      new Promise(resolve => setTimeout(resolve, minDelay))
    ]).then(([moduleExports]) => moduleExports)
  );
};