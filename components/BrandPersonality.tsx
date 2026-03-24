'use client';

import { motion } from 'framer-motion';
import { useInView } from '@/lib/useInView';

export default function BrandPersonality() {
  const { ref, isInView } = useInView({ threshold: 0.2 });

  const traits = [
    {
      label: 'Warm',
      description: 'Genuine care and presence',
      color: 'bg-mooon-primary',
      row: 'top',
    },
    {
      label: 'Subtle',
      description: 'Non-intrusive support',
      color: 'bg-mooon-secondary',
      row: 'bottom',
    },
    {
      label: 'Attentive',
      description: 'Emotionally perceptive',
      color: 'bg-mooon-tertiary',
      row: 'top',
    },
    {
      label: 'Grounded',
      description: 'Connected to real life',
      color: 'bg-mooon-accent',
      row: 'bottom',
    },
    {
      label: 'Trustworthy',
      description: 'Reliable companion',
      color: 'bg-mooon-primary',
      row: 'top',
    },
  ];

  return (
    <section ref={ref} className="py-24 px-6 bg-mooon-light text-mooon-dark">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-24"
        >
          <h2 className="text-5xl md:text-6xl font-bold mb-4">Brand Personality</h2>
          <p className="text-xl text-mooon-tertiary max-w-2xl mx-auto">
            Mooon is a warm, subtle, and attentive companion that helps you feel
          </p>
        </motion.div>

        {/* Wave Layout */}
        <div className="relative py-20">
          {/* Top Row */}
          <div className="flex flex-col md:flex-row justify-between items-center gap-8 mb-16 md:mb-6">
            {traits
              .filter((trait) => trait.row === 'top')
              .map((trait, idx) => (
                <motion.div
                  key={trait.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={
                    isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
                  }
                  transition={{ duration: 0.6, delay: idx * 0.15 }}
                  className={`${trait.color} p-10 rounded-3xl text-white text-center hover:scale-105 transition-transform cursor-pointer flex-1 max-w-xs`}
                >
                  <p className="font-bold text-2xl mb-3">{trait.label}</p>
                  <p className="text-base opacity-90">{trait.description}</p>
                </motion.div>
              ))}
          </div>

          {/* Bottom Row - Offset */}
          <div className="flex flex-col md:flex-row justify-between items-center gap-8 md:mt-20 md:ml-32 md:mr-32">
            {traits
              .filter((trait) => trait.row === 'bottom')
              .map((trait, idx) => (
                <motion.div
                  key={trait.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={
                    isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
                  }
                  transition={{ duration: 0.6, delay: (idx + 3) * 0.15 }}
                  className={`${trait.color} p-10 rounded-3xl text-white text-center hover:scale-105 transition-transform cursor-pointer flex-1 max-w-xs`}
                >
                  <p className="font-bold text-2xl mb-3">{trait.label}</p>
                  <p className="text-base opacity-90">{trait.description}</p>
                </motion.div>
              ))}
          </div>
        </div>
      </div>
    </section>
  );
}
