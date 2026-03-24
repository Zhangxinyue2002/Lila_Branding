import Head from 'next/head';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

export default function AboutPage() {
  return (
    <>
      <Head>
        <title>About Us — Mooon</title>
        <meta
          name="description"
          content="Learn about Mooon's mission, vision, and values."
        />
      </Head>

      <Navigation />

      <main className="pt-20">
        {/* Page Hero */}
        <section className="min-h-64 flex items-center justify-center px-6 bg-gradient-to-b from-mooon-light to-white py-20">
          <div className="max-w-4xl text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-mooon-dark mb-6">
              About Mooon
            </h1>
            <p className="text-xl text-mooon-tertiary max-w-2xl mx-auto">
              We&apos;re reimagining companionship for the modern age. Through empathy, innovation, and respect for human dignity.
            </p>
          </div>
        </section>

        {/* Mission Section */}
        <section className="py-20 px-6 bg-white">
          <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-mooon-dark mb-6">Our Mission</h2>
              <p className="text-lg text-mooon-tertiary leading-relaxed mb-4">
                To create AI-powered robotics that bridge isolation and reconnect people with themselves, each other, and the world around them.
              </p>
              <p className="text-lg text-mooon-tertiary leading-relaxed">
                We believe technology should enhance human connection, not replace it.
              </p>
            </div>
            <div className="hidden md:flex items-center justify-center">
              <div className="w-64 h-64 bg-gradient-to-br from-mooon-primary/20 to-mooon-secondary/20 rounded-3xl flex items-center justify-center text-6xl border-2 border-mooon-primary/30">
                🎯
              </div>
            </div>
          </div>
        </section>

        {/* Vision Section */}
        <section className="py-20 px-6 bg-gradient-to-r from-mooon-light to-mooon-soft">
          <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-12 items-center">
            <div className="hidden md:flex items-center justify-center">
              <div className="w-64 h-64 bg-gradient-to-br from-mooon-primary/20 to-mooon-secondary/20 rounded-3xl flex items-center justify-center text-6xl border-2 border-mooon-tertiary/30">
                🚀
              </div>
            </div>
            <div>
              <h2 className="text-4xl font-bold text-mooon-dark mb-6">Our Vision</h2>
              <p className="text-lg text-mooon-tertiary leading-relaxed mb-4">
                A world where AI companionship strengthens the human spirit rather than replacing it.
              </p>
              <p className="text-lg text-mooon-tertiary leading-relaxed">
                We envision a future where Mooon is a trusted companion in millions of lives, supporting them through challenges and celebrating their growth.
              </p>
            </div>
          </div>
        </section>

        {/* Beliefs Section */}
        <section className="py-20 px-6 bg-mooon-light">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold text-mooon-dark mb-16 text-center">Our Core Beliefs</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white p-8 rounded-2xl">
                <div className="text-4xl mb-4">❤️</div>
                <h3 className="text-2xl font-bold text-mooon-dark mb-3">Empathy First</h3>
                <p className="text-mooon-tertiary">
                  Every feature is designed with genuine empathy for human experience.
                </p>
              </div>
              <div className="bg-white p-8 rounded-2xl">
                <div className="text-4xl mb-4">🤝</div>
                <h3 className="text-2xl font-bold text-mooon-dark mb-3">Connection Over Substitution</h3>
                <p className="text-mooon-tertiary">
                  We bridge people to real relationships, never attempt to replace them.
                </p>
              </div>
              <div className="bg-white p-8 rounded-2xl">
                <div className="text-4xl mb-4">✨</div>
                <h3 className="text-2xl font-bold text-mooon-dark mb-3">Dignity Always</h3>
                <p className="text-mooon-tertiary">
                  We treat every person with respect, dignity, and privacy protection.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
