'use client';

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useInView } from '@/lib/useInView';
import { useRouter } from 'next/router';
import Image from 'next/image';

export default function Hero() {
  const router = useRouter();
  const { ref, isInView } = useInView({ threshold: 0.3 });
  const [scrollY, setScrollY] = useState(0);
  const [heartOpacity, setHeartOpacity] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const newScrollY = window.scrollY;
      setScrollY(newScrollY);
      // 心形从scrollY 200开始出现，到scrollY 500完全显示
      setHeartOpacity(Math.min(Math.max(newScrollY - 200, 0) / 300, 1));
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section
      ref={ref}
      className="relative h-[85vh] flex flex-col items-center justify-start px-6 bg-gradient-to-br from-mooon-light via-mooon-soft to-mooon-light text-mooon-dark pt-20"
    >
      <div className="max-w-4xl text-center mt-auto mb-auto flex flex-col w-full">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          className="mt-[42px] translate-y-[30px]"
        >
          <h1 className="text-3xl md:text-5xl font-bold mb-8 leading-tight">
            <span className="text-mooon-primary">Not a Substitute</span>
            <br />
            <span className="text-mooon-primary">But a Bridge Back to Connection</span>
          </h1>

          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex justify-center"
          >
            <button
              onClick={() => router.push('/brand')}
              className="px-8 py-4 bg-mooon-primary text-white rounded-full font-semibold hover:bg-mooon-accent transition-colors text-lg shadow-lg hover:shadow-xl hover:scale-105"
            >
              Explore Now
            </button>
          </motion.div>
        </motion.div>

        {/* Parallax Robot Image with Love Heart */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-20 relative h-[500px] md:h-[700px] flex items-center justify-center"
          style={{
            transform: `translateY(${scrollY * 0.35}px)`
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-mooon-primary/20 to-mooon-secondary/20 blur-3xl rounded-full -z-50"></div>
          
          {/* Love Heart emoji - appears as you scroll */}
          <motion.div
            className="absolute top-0 md:top-10 left-1/2 -translate-x-1/2 text-8xl md:text-9xl z-20 pointer-events-none"
            animate={{ 
              y: [0, -15, 0],
            }}
            transition={{
              y: { duration: 2, repeat: Infinity, ease: "easeInOut" },
            }}
          >
            <motion.span
              style={{
                opacity: heartOpacity,
                display: 'inline-block',
              }}
            >
              ❤️
            </motion.span>
          </motion.div>

          {/* Main Character Image - with floating animation */}
          <motion.div 
            className="relative w-72 h-72 md:w-[500px] md:h-[500px]"
            animate={{
              y: [0, -20, 0],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <Image
              src="/reference/3.png"
              alt="Lila - Mooon's Companion"
              fill
              className="object-contain drop-shadow-2xl"
              priority
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
