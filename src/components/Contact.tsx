'use client'

import { useEffect } from 'react';
import Script from 'next/script';

const Contact = () => {
  useEffect(() => {
    // Initialize Calendly widget
    const script = document.createElement('script');
    script.src = "https://assets.calendly.com/assets/external/widget.js";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <section className="my-16 p-8 bg-white shadow-lg rounded-xl max-w-4xl mx-auto">
      <h2 className="text-4xl font-bold mb-6 text-center text-gray-800">Let&apos;s Connect</h2>
      <p className="text-lg text-gray-600 text-center mb-10">
        I&apos;d love to chat about opportunities, collaborations, or interesting projects. 
        Schedule a time that works best for you!
      </p>
      
      {/* Calendly inline widget */}
      <div 
        className="calendly-inline-widget"
        data-url="https://calendly.com/josephliu1127"
        style={{ 
          minWidth: '320px',
          height: '700px',
        }}
      />

      {/* Alternative contact methods */}
      <div className="mt-8 text-center">
        <p className="text-gray-600">
          Prefer email? Reach me directly at{' '}
          <a 
            href="mailto:josephliu1127@gmail.com" 
            className="text-blue-500 hover:text-blue-600 transition-colors"
          >
            josephliu1127@gmail.com
          </a>
        </p>
      </div>
    </section>
  );
};

export default Contact;