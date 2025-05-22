import React from 'react';
import { useInView } from 'react-intersection-observer';

export function Stats() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <div className="bg-gray-900 text-white py-16">
      <div className="container mx-auto px-6">
        <div ref={ref} className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div>
            <div className="text-4xl font-bold mb-2 text-blue-400">
              {inView ? '15+' : '0'}
            </div>
            <div className="text-gray-300">Years of Experience</div>
          </div>
          <div>
            <div className="text-4xl font-bold mb-2 text-blue-400">
              {inView ? '500+' : '0'}
            </div>
            <div className="text-gray-300">Projects Completed</div>
          </div>
          <div>
            <div className="text-4xl font-bold mb-2 text-blue-400">
              {inView ? '98%' : '0'}
            </div>
            <div className="text-gray-300">Client Satisfaction</div>
          </div>
        </div>
      </div>
    </div>
  );
}