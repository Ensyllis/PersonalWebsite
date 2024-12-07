'use client'

import { useState, FormEvent } from 'react';
import emailjs from '@emailjs/browser';

const Contact = () => {
  // State for form fields and loading/success states
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isLoading, setIsLoading] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  // Handle input changes
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  // Handle form submission
  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setSubmitStatus('idle');

    try {
      // Replace these with your actual EmailJS credentials
      const result = await emailjs.send(
        'YOUR_SERVICE_ID',  // Get this from EmailJS dashboard
        'YOUR_TEMPLATE_ID', // Get this from EmailJS dashboard
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
          to_email: 'josephliu1127@gmail.com'
        },
        'YOUR_PUBLIC_KEY'  // Get this from EmailJS dashboard
      );

      if (result.text === 'OK') {
        setSubmitStatus('success');
        // Clear form
        setFormData({ name: '', email: '', message: '' });
      }
    } catch (error) {
      console.error('Failed to send email:', error);
      setSubmitStatus('error');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section className="my-16 p-8 bg-white shadow-lg rounded-xl max-w-4xl mx-auto">
      <h2 className="text-4xl font-bold mb-6 text-center text-gray-800">Get in Touch</h2>
      <p className="text-lg text-gray-600 text-center mb-10">
        I&apos;d love to hear from you! Whether you&apos;re interested in collaborating, 
        discussing a project, or just saying hello, drop me a message below.
      </p>
      
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-700">
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="mt-1 p-3 w-full border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-200"
            placeholder="Your name"
            required
          />
        </div>
        
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="mt-1 p-3 w-full border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-200"
            placeholder="Your email"
            required
          />
        </div>
        
        <div>
          <label htmlFor="message" className="block text-sm font-medium text-gray-700">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            className="mt-1 p-3 w-full h-36 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-200"
            placeholder="Your message"
            required
          />
        </div>

        {/* Status Messages */}
        {submitStatus === 'success' && (
          <div className="p-4 bg-green-100 text-green-700 rounded-lg">
            Message sent successfully! I'll get back to you soon.
          </div>
        )}
        
        {submitStatus === 'error' && (
          <div className="p-4 bg-red-100 text-red-700 rounded-lg">
            Failed to send message. Please try again or email me directly.
          </div>
        )}
        
        <button
          type="submit"
          disabled={isLoading}
          className={`w-full py-3 px-6 bg-gradient-to-r from-blue-500 to-green-500 text-white font-bold rounded-lg 
            hover:from-blue-600 hover:to-green-600 transition duration-300 shadow-lg transform hover:scale-105
            ${isLoading ? 'opacity-50 cursor-not-allowed' : ''}`}
        >
          {isLoading ? 'Sending...' : 'Send Message'}
        </button>
      </form>
    </section>
  );
};

export default Contact;