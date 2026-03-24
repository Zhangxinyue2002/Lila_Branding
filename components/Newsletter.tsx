'use client';

import { motion } from 'framer-motion';
import { useInView } from '@/lib/useInView';
import { useState, FormEvent, ChangeEvent } from 'react';

interface NewsletterFormState {
  email: string;
  status: 'idle' | 'loading' | 'success' | 'error';
  message: string;
}

export default function Newsletter() {
  const { ref, isInView } = useInView({ threshold: 0.3 });
  const [formState, setFormState] = useState<NewsletterFormState>({
    email: '',
    status: 'idle',
    message: '',
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setFormState((prev) => ({
      ...prev,
      email: e.target.value,
    }));
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!formState.email) {
      setFormState((prev) => ({
        ...prev,
        status: 'error',
        message: 'Please enter a valid email.',
      }));
      return;
    }

    setFormState((prev) => ({ ...prev, status: 'loading' }));

    // Simulate API call (replace with actual endpoint)
    try {
      await new Promise((resolve) => setTimeout(resolve, 1000));
      setFormState({
        email: '',
        status: 'success',
        message: 'Thanks for subscribing! Check your email for a welcome message.',
      });

      // Reset after 3 seconds
      setTimeout(() => {
        setFormState({ email: '', status: 'idle', message: '' });
      }, 3000);
    } catch (error) {
      setFormState((prev) => ({
        ...prev,
        status: 'error',
        message: 'Something went wrong. Please try again.',
      }));
    }
  };

  return (
    <section
      ref={ref}
      className="py-24 md:py-32 px-6 bg-cream text-center text-dark"
    >
      <motion.div
        className="max-w-xl mx-auto"
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-3xl md:text-4xl mb-4 font-semibold">Stay Connected</h2>
        <p className="text-gray-600 mb-8">
          Get updates about Lila and how we&apos;re helping people reconnect with their lives.
        </p>

        <form onSubmit={handleSubmit} className="flex flex-col gap-4 md:flex-row md:gap-2">
          <input
            type="email"
            placeholder="Enter your email"
            value={formState.email}
            onChange={handleChange}
            className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-dark"
            disabled={formState.status === 'loading'}
            aria-label="Email address for newsletter"
          />
          <button
            type="submit"
            disabled={formState.status === 'loading'}
            className="px-6 py-3 bg-dark text-white rounded-lg font-semibold hover:bg-gray-800 transition-colors disabled:opacity-50"
            aria-label="Subscribe to newsletter"
          >
            {formState.status === 'loading' ? 'Subscribing...' : 'Subscribe'}
          </button>
        </form>

        {formState.message && (
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className={`mt-4 text-sm ${
              formState.status === 'success' ? 'text-green-600' : 'text-red-600'
            }`}
          >
            {formState.message}
          </motion.p>
        )}
      </motion.div>
    </section>
  );
}
