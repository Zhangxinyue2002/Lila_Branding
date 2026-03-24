import Head from 'next/head';
import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import BrandFramework from '@/components/BrandFramework';
import BrandValues from '@/components/BrandValues';
import BrandPersonality from '@/components/BrandPersonality';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <>
      <Head>
        <title>Mooon — AI Robotics Companionship</title>
        <meta
          name="description"
          content="Mooon creates human-like AI companionship through robotics. A bridge back to connection—empowering people to reconnect with themselves, each other, and the world."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />

        {/* Open Graph for social sharing */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Mooon — AI Robotics Companionship" />
        <meta
          property="og:description"
          content="Mooon creates human-like AI companionship through robotics. A bridge back to connection—empowering people to reconnect with themselves, each other, and the world."
        />
        <meta property="og:image" content="/og-image.png" />
        <meta property="og:url" content="https://mooon.com" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Mooon — AI Robotics Companionship" />
        <meta
          name="twitter:description"
          content="Mooon creates human-like AI companionship through robotics. A bridge back to connection—empowering people to reconnect with themselves, each other, and the world."
        />
        <meta name="twitter:image" content="/og-image.png" />

        {/* Canonical URL */}
        <link rel="canonical" href="https://mooon.com" />

        {/* Preconnect to external resources */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </Head>

      <Navigation />

      <main className="pt-20">
        <Hero />
        <BrandFramework />
        <BrandValues />
        <BrandPersonality />
        <Footer />
      </main>
    </>
  );
}
