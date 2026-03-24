'use client';

import { motion } from 'framer-motion';
import { useInView } from '@/lib/useInView';
import { staggerContainer, staggerItem } from '@/lib/animations';

export default function Lila() {
  const { ref, isInView } = useInView({ threshold: 0.2 });

  return (
    <section
      ref={ref}
      className="py-24 md:py-32 px-6 bg-lightCream text-center text-dark"
    >
      <motion.div
        className="max-w-2xl mx-auto"
        variants={staggerContainer}
        initial="initial"
        animate={isInView ? 'animate' : 'initial'}
      >
        <motion.h2 variants={staggerItem} className="text-3xl md:text-4xl mb-6 font-semibold">
          Meet Lila
        </motion.h2>

        <motion.p variants={staggerItem} className="text-gray-600 text-base md:text-lg">
          Lila is not a device. She is a gentle presence.
          <br />
          She listens, understands, and responds with empathy.
        </motion.p>
      </motion.div>
    </section>
  );
}
