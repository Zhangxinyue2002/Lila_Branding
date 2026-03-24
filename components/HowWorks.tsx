'use client';

import { motion } from 'framer-motion';
import { useInView } from '@/lib/useInView';
import { staggerContainer, staggerItem } from '@/lib/animations';

const features = [
  { title: 'Understands', description: 'Recognizes emotional states and responds naturally.' },
  { title: 'Responds', description: 'Engages in human-like, empathetic interaction.' },
  { title: 'Guides', description: 'Encourages users to reconnect with real life.' },
];

export default function HowWorks() {
  const { ref, isInView } = useInView({ threshold: 0.1 });

  return (
    <section ref={ref} className="py-24 md:py-32 px-6 text-center bg-cream text-dark">
      <motion.div
        className="max-w-4xl mx-auto"
        variants={staggerContainer}
        initial="initial"
        animate={isInView ? 'animate' : 'initial'}
      >
        <motion.h2 variants={staggerItem} className="text-3xl md:text-4xl mb-12 font-semibold">
          How Lila Helps
        </motion.h2>

        <motion.div
          className="grid md:grid-cols-3 gap-8 md:gap-12"
          variants={staggerContainer}
          initial="initial"
          animate={isInView ? 'animate' : 'initial'}
        >
          {features.map((feature, idx) => (
            <motion.div
              key={idx}
              variants={staggerItem}
              className="p-6 rounded-lg hover:shadow-lg transition-shadow"
            >
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600 text-sm md:text-base">{feature.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}
