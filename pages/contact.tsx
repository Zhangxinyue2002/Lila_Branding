import Head from 'next/head';
import Navigation from '@/components/Navigation';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import { motion } from 'framer-motion';

export default function ContactPage() {
  return (
    <>
      <Head>
        <title>Contact Us — Mooon</title>
        <meta
          name="description"
          content="Get in touch with Mooon. We'd love to hear from you. Send us a message and we'll respond as soon as possible."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="canonical" href="https://mooon.com/contact" />
      </Head>

      <Navigation />

      <main className="pt-20">
        {/* Page Hero */}
        <section className="min-h-48 flex items-center justify-center px-6 bg-gradient-to-b from-mooon-light to-mooon-soft py-20">
          <div className="max-w-4xl text-center">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-5xl md:text-6xl font-bold text-mooon-dark mb-6"
            >
              Let&apos;s Connect
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-xl text-mooon-tertiary max-w-2xl mx-auto"
            >
              Have questions? Want to learn more about Mooon? We&apos;re here to listen.
            </motion.p>
          </div>
        </section>

        {/* Contact Form Section */}
        <section className="py-20 px-6 bg-white">
          <div className="max-w-2xl mx-auto">
            <Contact />
          </div>
        </section>

        {/* Additional Info Section */}
        <section className="py-20 px-6 bg-mooon-light">
          <div className="max-w-4xl mx-auto grid md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center"
            >
              <div className="text-4xl mb-4">📧</div>
              <h3 className="font-bold text-mooon-dark mb-2">Email</h3>
              <p className="text-mooon-tertiary">hello@mooon.com</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-center"
            >
              <div className="text-4xl mb-4">🌐</div>
              <h3 className="font-bold text-mooon-dark mb-2">Social</h3>
              <p className="text-mooon-tertiary">@mooonai on all platforms</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-center"
            >
              <div className="text-4xl mb-4">💬</div>
              <h3 className="font-bold text-mooon-dark mb-2">Chat</h3>
              <p className="text-mooon-tertiary">Live support 9am-6pm EST</p>
            </motion.div>
          </div>
        </section>

        <Footer />
      </main>
    </>
  );
}
