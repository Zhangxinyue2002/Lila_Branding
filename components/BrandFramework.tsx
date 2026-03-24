'use client';

import { motion } from 'framer-motion';
import { useInView } from '@/lib/useInView';

export default function BrandFramework() {
  const { ref, isInView } = useInView({ threshold: 0.2 });

  const layers = [
    {
      title: 'WHY',
      subtitle: 'Our Belief',
      content:
        'Technology should rebuild emotional connection and human dignity, not merely improve efficiency or replace human relationships.',
      color: 'bg-mooon-primary',
    },
    {
      title: 'HOW',
      subtitle: 'Our Method',
      content:
        'We create active, human-like emotional interactions through AI robotics—serving as a bridge, not a replacement for human connection.',
      color: 'bg-mooon-secondary',
    },
    {
      title: 'WHAT',
      subtitle: 'Our Product',
      content:
        'Natural, empathy-driven AI companionship that makes you feel: Understood • Responded to • Guided back to real life',
      color: 'bg-mooon-tertiary',
    },
    {
      title: 'IMPACT',
      subtitle: 'The Result',
      content:
        'Help people rebuild life rhythms, restore social connection, and rediscover the meaning in everyday moments.',
      color: 'bg-mooon-accent',
    },
  ];

  return (
    <section ref={ref} className="py-24 px-6 bg-mooon-light text-mooon-dark">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-bold mb-4">Brand Framework</h2>
          <p className="text-xl text-mooon-tertiary max-w-2xl mx-auto">
            Mooon is not a substitute for human connection, but a bridge back.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {layers.map((layer, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className={`${layer.color} p-8 rounded-3xl text-white relative overflow-hidden group`}
            >
              <div className="relative z-10">
                <div className="text-sm font-semibold opacity-90 mb-2 uppercase tracking-wide">
                  {layer.subtitle}
                </div>
                <h3 className="text-4xl font-bold mb-4">{layer.title}</h3>
                <p className="text-base leading-relaxed opacity-95">{layer.content}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
