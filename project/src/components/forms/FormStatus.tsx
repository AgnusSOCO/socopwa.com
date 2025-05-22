import React from 'react';

interface FormStatusProps {
  state: {
    succeeded: boolean;
    errors: any[];
  };
}

export function FormStatus({ state }: FormStatusProps) {
  return (
    <>
      {state.succeeded && (
        <div className="p-4 bg-green-50 text-green-700 rounded-lg">
          Thank you for your message! We'll get back to you soon.
        </div>
      )}

      {state.errors.length > 0 && (
        <div className="p-4 bg-red-50 text-red-700 rounded-lg">
          There was an error sending your message. Please try again.
        </div>
      )}
    </>
  );
}