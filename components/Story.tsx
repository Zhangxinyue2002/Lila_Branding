'use client';

import { motion } from 'framer-motion';
import { useInView } from '@/lib/useInView';
import { staggerContainer, staggerItem } from '@/lib/animations';

export default function Story() {
  const { ref, isInView } = useInView({ threshold: 0.2 });

  return (
    <section ref={ref} className="py-24 md:py-32 px-6 bg-lightCream text-center text-dark">
      <motion.div
        className="max-w-4xl mx-auto"
        variants={staggerContainer}
        initial="initial"
        animate={isInView ? 'animate' : 'initial'}
      >
        <motion.h2 variants={staggerItem} className="text-3xl md:text-4xl mb-6 font-semibold">
          Our Story
        </motion.h2>

        <motion.p variants={staggerItem} className="text-gray-600 text-base md:text-lg leading-relaxed">
          Mooon began with a simple observation: many retirees gradually lose their connection to
          the world. They become quiet, longing to be heard, yet unwilling to burden others.
          <br />
          <br />
          We asked: could technology become something more than a cold tool? Could it offer a
          gentle form of companionship?
          <br />
          <br />
          Lila was created not to replace people, but to guide them back — to life, to others, to
          connection.
        </motion.p>
      </motion.div>
    </section>
  );
}
