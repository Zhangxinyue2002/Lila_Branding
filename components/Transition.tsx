'use client';

import { motion } from 'framer-motion';
import { useInView } from '@/lib/useInView';
import { staggerContainer, staggerItem } from '@/lib/animations';

export default function Transition() {
  const { ref, isInView } = useInView({ threshold: 0.3 });

  return (
    <section
      ref={ref}
      className="py-24 md:py-32 px-6 bg-lightCream text-center text-dark"
    >
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.6 }}
        className="text-3xl md:text-4xl font-semibold max-w-3xl mx-auto"
      >
        And gently brings you back to the world.
      </motion.h2>
    </section>
  );
}
