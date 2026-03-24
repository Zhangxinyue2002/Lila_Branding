'use client';

import { motion } from 'framer-motion';
import { useInView } from '@/lib/useInView';
import { staggerContainer, staggerItem } from '@/lib/animations';

export default function Problem() {
  const { ref, isInView } = useInView({ threshold: 0.2 });

  return (
    <section
      id="problem"
      ref={ref}
      className="py-24 md:py-32 px-6 text-center max-w-3xl mx-auto bg-cream text-dark"
    >
      <motion.div
        variants={staggerContainer}
        initial="initial"
        animate={isInView ? 'animate' : 'initial'}
      >
        <motion.h2 variants={staggerItem} className="text-3xl md:text-4xl mb-6 font-semibold">
          Sometimes, connection fades quietly.
        </motion.h2>

        <motion.p variants={staggerItem} className="text-gray-600 text-base md:text-lg">
          After major life transitions, many people lose their rhythm, their role, and their
          connection to the world. They long to be heard — but hesitate to ask.
        </motion.p>
      </motion.div>
    </section>
  );
}
