'use client';

import { motion } from 'framer-motion';
import { useInView } from '@/lib/useInView';

export default function BrandValues() {
  const { ref, isInView } = useInView({ threshold: 0.2 });

  const values = [
    {
      title: 'Empathy',
      description:
        'We understand emotion, not just respond to commands. We upgrade from functional responses to genuine emotional intelligence.',
    },
    {
      title: 'Connection',
      description:
        'We help people reconnect with themselves, with others, and with the real world. AI is the bridge, never the destination.',
    },
    {
      title: 'Dignity',
      description:
        'Users remain autonomous and valued in their companionship journey. We support without dependence, enhance without replacement, empower without control.',
    },
  ];

  return (
    <section ref={ref} className="py-24 px-6 bg-white text-mooon-dark">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-bold mb-4">Brand Values</h2>
          <p className="text-xl text-mooon-tertiary max-w-2xl mx-auto">
            We design AI robots that empowers people, not replaces them.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {values.map((value, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={
                isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }
              }
              transition={{ duration: 0.6, delay: idx * 0.15 }}
              className="p-8 bg-mooon-soft rounded-3xl hover:shadow-2xl transition-all hover:-translate-y-2"
            >
              <h3 className="text-2xl font-bold mb-4 text-mooon-primary">
                {value.title}
              </h3>
              <p className="text-mooon-dark/75 leading-relaxed text-base">
                {value.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
