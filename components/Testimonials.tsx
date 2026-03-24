'use client';

import { motion } from 'framer-motion';
import { useInView } from '@/lib/useInView';
import { staggerContainer, staggerItem } from '@/lib/animations';
import { useState } from 'react';

const testimonials = [
  {
    name: 'Sarah',
    role: 'Retiree',
    quote: 'Lila helped me find my voice again after I retired. I felt less alone.',
    avatar: '👩',
  },
  {
    name: 'James',
    role: 'Empty Nester',
    quote: 'Having someone to talk to every day made a real difference in my life.',
    avatar: '👨',
  },
  {
    name: 'Maria',
    role: 'Life Transition',
    quote: 'Lila guided me back to my community. I am reconnected with old friends.',
    avatar: '👩‍🦰',
  },
];

export default function Testimonials() {
  const { ref, isInView } = useInView({ threshold: 0.2 });
  const [activeIdx, setActiveIdx] = useState(0);

  const nextTestimonial = () => {
    setActiveIdx((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setActiveIdx((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section
      ref={ref}
      className="py-24 md:py-32 px-6 bg-lightCream text-center text-dark"
    >
      <motion.div
        className="max-w-3xl mx-auto"
        variants={staggerContainer}
        initial="initial"
        animate={isInView ? 'animate' : 'initial'}
      >
        <motion.h2 variants={staggerItem} className="text-3xl md:text-4xl mb-12 font-semibold">
          Stories from Our Community
        </motion.h2>

        <div className="relative">
          <motion.div
            key={activeIdx}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.6 }}
            className="p-8 bg-white rounded-lg shadow-lg"
          >
            <p className="text-gray-600 text-lg mb-4 italic">
              &quot;{testimonials[activeIdx].quote}&quot;
            </p>
            <div className="text-4xl mb-3">{testimonials[activeIdx].avatar}</div>
            <p className="font-semibold text-dark">{testimonials[activeIdx].name}</p>
            <p className="text-sm text-gray-500">{testimonials[activeIdx].role}</p>
          </motion.div>

          {/* Navigation buttons */}
          <button
            onClick={prevTestimonial}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-12 text-dark hover:opacity-70 transition-opacity"
            aria-label="Previous testimonial"
          >
            ←
          </button>
          <button
            onClick={nextTestimonial}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-12 text-dark hover:opacity-70 transition-opacity"
            aria-label="Next testimonial"
          >
            →
          </button>

          {/* Pagination dots */}
          <div className="flex justify-center gap-2 mt-6">
            {testimonials.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setActiveIdx(idx)}
                className={`h-2 w-2 rounded-full transition-all ${
                  idx === activeIdx ? 'bg-dark w-6' : 'bg-gray-400'
                }`}
                aria-label={`Go to testimonial ${idx + 1}`}
              />
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
}
