'use client';

import { motion } from 'framer-motion';
import { useInView } from '@/lib/useInView';
import { useState, FormEvent, ChangeEvent } from 'react';

interface ContactFormState {
  name: string;
  email: string;
  message: string;
  status: 'idle' | 'loading' | 'success' | 'error';
  responseMessage: string;
}

export default function Contact() {
  const { ref, isInView } = useInView({ threshold: 0.2 });
  const [formState, setFormState] = useState<ContactFormState>({
    name: '',
    email: '',
    message: '',
    status: 'idle',
    responseMessage: '',
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormState((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!formState.name || !formState.email || !formState.message) {
      setFormState((prev) => ({
        ...prev,
        status: 'error',
        responseMessage: 'Please fill in all fields.',
      }));
      return;
    }

    setFormState((prev) => ({ ...prev, status: 'loading' }));

    // Simulate API call (replace with actual endpoint)
    try {
      await new Promise((resolve) => setTimeout(resolve, 1500));
      setFormState({
        name: '',
        email: '',
        message: '',
        status: 'success',
        responseMessage: "Thank you for reaching out! We'll get back to you soon.",
      });

      setTimeout(() => {
        setFormState((prev) => ({ ...prev, status: 'idle', responseMessage: '' }));
      }, 5000);
    } catch (error) {
      setFormState((prev) => ({
        ...prev,
        status: 'error',
        responseMessage: 'Something went wrong. Please try again.',
      }));
    }
  };

  return (
    <section
      ref={ref}
      className="py-16 px-6 bg-white text-mooon-dark"
    >
      <motion.div
        className="max-w-2xl mx-auto"
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-4xl md:text-4xl mb-8 font-bold text-center text-mooon-dark">Get in Touch</h2>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="name" className="block text-sm font-semibold mb-2 text-mooon-dark">
              Name
            </label>
            <input
              id="name"
              type="text"
              name="name"
              value={formState.name}
              onChange={handleChange}
              placeholder="Your name"
              className="w-full px-4 py-3 border-2 border-mooon-light rounded-lg focus:outline-none focus:ring-2 focus:ring-mooon-primary transition-all"
              disabled={formState.status === 'loading'}
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-semibold mb-2 text-mooon-dark">
              Email
            </label>
            <input
              id="email"
              type="email"
              name="email"
              value={formState.email}
              onChange={handleChange}
              placeholder="your@email.com"
              className="w-full px-4 py-3 border-2 border-mooon-light rounded-lg focus:outline-none focus:ring-2 focus:ring-mooon-primary transition-all"
              disabled={formState.status === 'loading'}
            />
          </div>

          <div>
            <label htmlFor="message" className="block text-sm font-semibold mb-2 text-mooon-dark">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              value={formState.message}
              onChange={handleChange}
              placeholder="Tell us what you think or ask your question..."
              rows={5}
              className="w-full px-4 py-3 border-2 border-mooon-light rounded-lg focus:outline-none focus:ring-2 focus:ring-mooon-primary transition-all resize-none"
              disabled={formState.status === 'loading'}
            />
          </div>

          <button
            type="submit"
            disabled={formState.status === 'loading'}
            className="w-full px-6 py-3 bg-mooon-primary text-white rounded-lg font-semibold hover:bg-mooon-accent transition-colors disabled:opacity-50 text-lg"
          >
            {formState.status === 'loading' ? 'Sending...' : 'Send Message'}
          </button>
        </form>

        {formState.responseMessage && (
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className={`mt-4 text-center font-semibold ${
              formState.status === 'success' ? 'text-green-600' : 'text-red-600'
            }`}
          >
            {formState.responseMessage}
          </motion.p>
        )}
      </motion.div>
    </section>
  );
}
