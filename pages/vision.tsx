import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import PositioningMap from '@/components/PositioningMap';
import Head from 'next/head';

export default function Vision() {
  const benefits = [
    {
      title: 'Active Companionship',
      description: 'Not passive AI—Mooon actively engages, responds, and guides people toward deeper connections.',
      color: 'bg-mooon-primary',
    },
    {
      title: 'Emotional Intelligence',
      description: 'Advanced systems that understand nuance, emotion, and context—responding like a genuine companion would.',
      color: 'bg-mooon-secondary',
    },
    {
      title: 'Bridge Not Replacement',
      description: 'Designed to strengthen human relationships, not replace them. A tool for reconnection, not isolation.',
      color: 'bg-mooon-tertiary',
    },
    {
      title: 'Human-Centered Design',
      description: 'Every feature prioritizes user dignity, autonomy, and long-term wellbeing over engagement metrics.',
      color: 'bg-mooon-accent',
    },
  ];

  return (
    <>
      <Head>
        <title>Vision & Positioning — Mooon</title>
        <meta
          name="description"
          content="Mooon's market vision and positioning—AI companionship that bridges technology and human connection."
        />
      </Head>

      <Navigation />

      <main className="pt-20">
        {/* Vision Hero */}
        <section className="min-h-72 bg-gradient-to-br from-mooon-primary to-mooon-accent text-white px-6 flex items-center justify-center py-20">
          <div className="max-w-4xl text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Our Vision
            </h1>
            <p className="text-xl md:text-2xl opacity-95 max-w-3xl mx-auto">
              A world where advanced AI companionship strengthens human connection instead of replacing it.
            </p>
          </div>
        </section>

        {/* Positioning Map */}
        <PositioningMap />

        {/* Value Proposition */}
        <section className="py-24 px-6 bg-white text-mooon-dark">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-5xl md:text-6xl font-bold mb-4">Why Mooon?</h2>
              <p className="text-xl text-mooon-tertiary max-w-2xl mx-auto">
                Four core differentiators that set us apart in the AI companionship landscape.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {benefits.map((benefit, idx) => (
                <div
                  key={idx}
                  className={`${benefit.color} text-white p-10 rounded-3xl hover:shadow-2xl transition-shadow`}
                >
                  <h3 className="text-2xl font-bold mb-4">{benefit.title}</h3>
                  <p className="text-base leading-relaxed opacity-95">
                    {benefit.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Commitment Section */}
        <section className="py-24 px-6 bg-mooon-light text-mooon-dark">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-5xl md:text-6xl font-bold mb-8">Our Commitment</h2>
            <p className="text-xl leading-relaxed text-mooon-tertiary mb-8">
              We commit to building AI companionship that respects human dignity, supports genuine connection, and enhances rather than
              diminishes the beauty of human relationships.
            </p>
            <div className="grid md:grid-cols-3 gap-8 mt-12">
              <div className="p-6">
                <p className="text-4xl font-bold text-mooon-primary mb-2">100%</p>
                <p className="text-mooon-tertiary">Human-Centered Design</p>
              </div>
              <div className="p-6">
                <p className="text-4xl font-bold text-mooon-secondary mb-2">∞</p>
                <p className="text-mooon-tertiary">Emotional Intelligence</p>
              </div>
              <div className="p-6">
                <p className="text-4xl font-bold text-mooon-accent mb-2">0</p>
                <p className="text-mooon-tertiary">Replacement of Humans</p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
