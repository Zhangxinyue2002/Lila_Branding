import Head from 'next/head';
import Navigation from '@/components/Navigation';
import BrandFramework from '@/components/BrandFramework';
import BrandValues from '@/components/BrandValues';
import BrandPersonality from '@/components/BrandPersonality';
import BrandPositioningMap from '@/components/BrandPositioningMap';
import Footer from '@/components/Footer';
import { motion } from 'framer-motion';

export default function BrandPage() {
  return (
    <>
      <Head>
        <title>Our Brand — Mooon</title>
        <meta
          name="description"
          content="Discover Mooon's brand foundation: our philosophy, values, and personality that drive everything we create."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="canonical" href="https://mooon.com/brand" />
      </Head>

      <Navigation />

      <main className="pt-20">
        {/* Brand Hero Section */}
        <section className="min-h-64 flex items-center justify-center px-6 bg-gradient-to-b from-mooon-light to-mooon-soft py-20">
          <div className="max-w-4xl text-center">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-5xl md:text-6xl font-bold text-mooon-dark mb-6"
            >
              The Mooon Brand
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-xl text-mooon-tertiary max-w-2xl mx-auto"
            >
              Built on a foundation of empathy, connection, and dignity. Everything we do reflects our commitment to bridging people back to what matters most.
            </motion.p>
          </div>
        </section>

        {/* Brand Framework Section */}
        <section className="py-20 px-6 bg-white">
          <div className="max-w-6xl mx-auto">
            <motion.h2
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6 }}
              className="text-4xl font-bold text-mooon-dark mb-12 text-center"
            >
              Our Foundation
            </motion.h2>
            <BrandFramework />
          </div>
        </section>

        {/* Brand Values Section */}
        <section className="py-20 px-6 bg-mooon-light">
          <div className="max-w-6xl mx-auto">
            <motion.h2
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6 }}
              className="text-4xl font-bold text-mooon-dark mb-12 text-center"
            >
              Core Values
            </motion.h2>
            <BrandValues />
          </div>
        </section>

        {/* Brand Personality Section */}
        <section className="py-20 px-6 bg-white">
          <div className="max-w-6xl mx-auto">
            <motion.h2
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6 }}
              className="text-4xl font-bold text-mooon-dark mb-12 text-center"
            >
              Our Personality
            </motion.h2>
            <BrandPersonality />
          </div>
        </section>

        {/* Brand Positioning Map Section */}
        <BrandPositioningMap />

        {/* Brand Promise Section */}
        <section className="py-20 px-6 bg-gradient-to-r from-mooon-primary/90 to-mooon-accent/90 text-white">
          <div className="max-w-4xl mx-auto text-center">
            <motion.h2
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6 }}
              className="text-4xl md:text-5xl font-bold mb-6"
            >
              Our Promise
            </motion.h2>
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-xl leading-relaxed mb-8 max-w-2xl mx-auto"
            >
              We promise to create AI companionship that never replaces human connection—but enhances and strengthens it. Through empathy, attention to detail, and genuine respect for human dignity, Mooon is the bridge back to what matters.
            </motion.p>
            <motion.button
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="px-8 py-4 bg-white text-mooon-primary rounded-full font-semibold hover:bg-mooon-light transition-colors text-lg"
            >
              Experience Mooon
            </motion.button>
          </div>
        </section>

        <Footer />
      </main>
    </>
  );
}
