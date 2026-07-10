'use client'; // Required for client-side hooks

import { useState } from 'react';
import emailjs from '@emailjs/browser';
import Info from './Info';
// --- Replace with your EmailJS credentials ---
const EMAILJS_SERVICE_ID = 'service_i7netd4';
const EMAILJS_TEMPLATE_ID = 'template_ok2pzks';
const EMAILJS_PUBLIC_KEY = 'boi-3ymx-L1XdMi8E';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isLoading, setIsLoading] = useState(false);
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setStatus('idle');

    try {
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message
        },
        EMAILJS_PUBLIC_KEY
      );
      setStatus('success');
      setFormData({ name: '', email: '', message: '' }); // Reset form
    } catch (err) {
      console.error('Email send failed:', err);
      setStatus('error');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <main className="min-h-screen  px-6 py-12 md:py-20 md:px-12 lg:px-24">
      <div className="max-w-4xl mx-auto">
        {/* Heading Section */}
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Let’s Build Something Great Together
        </h1>
        <p className="text-xl  mb-12">
          Tell us about your project and we’ll get back to you within 24 hours with a free consultation and estimate.
        </p>

        {/* Contact Form */}
        <form onSubmit={handleSubmit} className="space-y-8">
          {/* Name + Email Row */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-2">
              <label htmlFor="name" className="text-lg font-semibold ">
                Your Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                placeholder="Enter your name"
                className="w-full px-5 py-4 text-lg border border-gray-200 rounded-md  focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
              />
            </div>

            <div className="space-y-2">
              <label htmlFor="email" className="text-lg font-semibold ">
                Your Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                placeholder="Enter your email"
                className="w-full px-5 py-4 text-lg border border-gray-200 rounded-md  focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
              />
            </div>
          </div>

          {/* Message Field */}
          <div className="space-y-2">
            <label htmlFor="message" className="text-lg font-semibold text-gray-900">
              Your Message
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows={6}
              placeholder="Enter your Message"
              className="w-full px-5 py-4 text-lg border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all resize-none"
            />
          </div>

          {/* Submit Button + Status */}
          <div className="space-y-4">
            <button
              type="submit"
              disabled={isLoading}
              className="bg-blue-500 hover:bg-blue-600 text-white font-semibold text-xl px-10 py-4 rounded-md shadow-lg hover:shadow-xl transition-all disabled:opacity-70 disabled:cursor-not-allowed"
            >
              {isLoading ? 'Sending...' : 'Send Message'}
            </button>

            {status === 'success' && (
              <p className="text-green-600 font-medium text-lg">
                ✅ Message sent successfully! We’ll get back to you soon.
              </p>
            )}
            {status === 'error' && (
              <p className="text-red-600 font-medium text-lg">
                ❌ Failed to send message. Please try again later.
              </p>
            )}
          </div>
        </form>
      </div>
      <Info />
    </main>
  );
}