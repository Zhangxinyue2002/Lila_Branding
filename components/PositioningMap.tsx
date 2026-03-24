'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from '@/lib/useInView';

export default function PositioningMap() {
  const { ref, isInView } = useInView({ threshold: 0.3 });

  const quadrants = [
    {
      title: 'Technology',
      subtitle: 'What We Build',
      points: [
        'Advanced AI Robotics',
        'Natural Language Processing',
        'Emotional Intelligence Systems',
      ],
      position: 'top-left',
      color: 'bg-mooon-secondary',
    },
    {
      title: 'Market Need',
      subtitle: 'What People Want',
      points: [
        'Emotional Connection',
        'Social Companionship',
        'Loneliness Resolution',
      ],
      position: 'top-right',
      color: 'bg-mooon-tertiary',
    },
    {
      title: 'Competitors',
      subtitle: 'Current Market',
      points: [
        'Generic AI Chatbots',
        'Social Media',
        'Traditional Therapy',
      ],
      position: 'bottom-left',
      color: 'bg-mooon-soft',
      isDark: true,
    },
    {
      title: 'Mooon',
      subtitle: 'Our Unique Position',
      points: [
        'Human-Centered AI',
        'Active Not Passive',
        'Bridge Not Replacement',
      ],
      position: 'bottom-right',
      color: 'bg-mooon-primary',
      isHighlight: true,
    },
  ];

  return (
    <section ref={ref} className="py-24 px-6 bg-mooon-light text-mooon-dark">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl md:text-6xl font-bold mb-4">Market Positioning</h2>
          <p className="text-xl text-mooon-tertiary max-w-2xl mx-auto">
            Where Mooon fits in the landscape of technology, human needs, and competitive advantage.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 relative">
          {/* Grid Lines */}
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-0 left-1/2 w-0.5 h-full bg-mooon-tertiary/20"></div>
            <div className="absolute top-1/2 left-0 h-0.5 w-full bg-mooon-tertiary/20"></div>
          </div>

          {quadrants.map((quad, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.6, delay: idx * 0.15 }}
              className={`
                relative p-10 rounded-3xl
                ${quad.color}
                ${quad.isHighlight ? 'shadow-2xl ring-4 ring-mooon-primary/30 scale-105' : 'hover:shadow-lg transition-shadow'}
                ${quad.isDark ? 'text-mooon-dark' : 'text-white'}
              `}
            >
              <div className="relative z-10">
                <p className={`text-sm font-semibold uppercase tracking-wider mb-2 ${quad.isDark ? 'text-mooon-primary' : 'opacity-90'}`}>
                  {quad.subtitle}
                </p>
                <h3 className={`text-3xl md:text-4xl font-bold mb-6 ${quad.isDark ? 'text-mooon-dark' : ''}`}>
                  {quad.title}
                </h3>
                <ul className="space-y-3">
                  {quad.points.map((point, pidx) => (
                    <li
                      key={pidx}
                      className={`flex items-start gap-3 ${
                        quad.isDark ? 'text-mooon-dark/75' : 'opacity-95'
                      }`}
                    >
                      <span className="text-lg mt-0.5">•</span>
                      <span className="font-medium">{point}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Highlight Badge */}
              {quad.isHighlight && (
                <motion.div
                  initial={{ scale: 0 }}
                  animate={isInView ? { scale: 1 } : { scale: 0 }}
                  transition={{ delay: 0.6, type: 'spring' }}
                  className="absolute -top-4 -right-4 bg-mooon-accent text-white px-4 py-2 rounded-full font-bold text-sm shadow-lg"
                >
                  ★ OUR POSITION
                </motion.div>
              )}
            </motion.div>
          ))}
        </div>

        {/* Key Insight */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-16 p-8 bg-white rounded-3xl border-2 border-mooon-primary/20 shadow-lg"
        >
          <p className="text-lg text-mooon-dark leading-relaxed">
            <span className="font-bold text-mooon-primary">Key Insight:</span> While competitors offer passive solutions to social needs, Mooon creates{' '}
            <span className="text-mooon-primary font-semibold">active, emotionally intelligent companionship</span> that bridges technological
            capability with human flourishing. We don&apos;t replace human connection—we support the journey toward it.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
