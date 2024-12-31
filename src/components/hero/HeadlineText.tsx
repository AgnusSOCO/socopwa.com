import React from 'react';
import { GradientText } from './GradientText';

interface HeadlineTextProps {
  line1: string;
  line2: string;
  gradients: {
    line1: string;
    line2: string;
  };
}

export function HeadlineText({ line1, line2, gradients }: HeadlineTextProps) {
  return (
    <div className="flex flex-col items-center justify-center w-full">
      <div className="text-center mb-4">
        <GradientText
          text={line1}
          gradient={gradients.line1}
        />
      </div>
      <div className="text-center">
        <GradientText
          text={line2}
          gradient={gradients.line2}
        />
      </div>
    </div>
  );
}