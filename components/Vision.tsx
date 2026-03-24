'use client';

import { motion } from 'framer-motion';
import { useInView } from '@/lib/useInView';
import { staggerContainer, staggerItem } from '@/lib/animations';

export default function Vision() {
  const { ref, isInView } = useInView({ threshold: 0.2 });

  return (
    <section ref={ref} className="py-24 md:py-32 px-6 bg-cream text-center text-dark">
      <motion.div
        className="max-w-4xl mx-auto"
        variants={staggerContainer}
        initial="initial"
        animate={isInView ? 'animate' : 'initial'}
      >
        <motion.h2 variants={staggerItem} className="text-3xl md:text-4xl mb-6 font-semibold">
          Our Vision
        </motion.h2>

        <motion.p variants={staggerItem} className="text-gray-600 text-base md:text-lg">
          In the next decade, technology will shape how we live. Mooon envisions a future where
          everyone maintains emotional well-being, social connection, and a sense of meaning in
          everyday life.
        </motion.p>
      </motion.div>
    </section>
  );
}
