import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import FadeInSection from '@/components/FadeInSection';
import { ArrowRight, Zap, Shield, TrendingUp, CheckCircle } from 'lucide-react';

export default function About() {
  const coreValues = [
    {
      title: 'Performance-First',
      description: 'Speed isn\'t optional. It\'s revenue. We optimize mobile-first for fast load times with responsive web development that keeps visitors engaged.'
    },
    {
      title: 'Security by Default',
      description: 'Enterprise-grade protection standard: SSL, secure auth, role-based access, automated backups. Your data, and your customers\' Stay safe.'
    },
    {
      title: 'Scalability Engineered In',
      description: 'From 100 to 100,000 users, your site grows without breaking. We build with clean, modular architecture for seamless expansion.'
    },
    {
      title: 'Transparent Partnership',
      description: 'Honest timelines. Weekly demos. No surprises, just clarity and control.'
    },
    {
      title: 'Results Obsessed',
      description: 'We measure success in conversions, engagement, and revenue. Not just "looks good."'
    }
  ];

  const differentiators = [
    '100% Custom, Zero Templates - Your business isn\'t generic. Your site shouldn\'t be either.',
    'Tailored, Fast-Launch Model - Live in 2-4 weeks. No change-order chaos.',
    'In-House Execution Only - No outsourcing. Full control. Full accountability.',
    'Built for Growth, Not Just Launch - We don\'t disappear post-launch. We optimize, secure, and scale with you.',
    'Performance Guarantee - Below optimal performance? We fix it free.'
  ];

  return (
    <div className="w-full bg-[#f9f9f9]">
      <section className="min-h-[70vh] flex items-center justify-center px-6 md:px-12 lg:px-24 py-32 bg-[#f9f9f9]">
        <div className="max-w-5xl text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="font-serif text-5xl md:text-6xl lg:text-7xl text-[#1a1a1a] mb-8 leading-tight"
          >
            We Build Digital Assets That Grow Your Business
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="font-sans text-lg md:text-xl text-[#1a1a1a]/70 mb-12 max-w-3xl mx-auto leading-relaxed"
          >
            High-performance websites and web apps engineered for speed, security, and scale. Delivered fast, with zero compromises.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <Button
              size="lg"
              className="bg-[#1a1a1a] text-[#f9f9f9] hover:bg-[#1a1a1a]/90 px-8 py-6 text-base font-sans"
              onClick={() => {
                const event = new CustomEvent('openQuestionnaire');
                window.dispatchEvent(event);
              }}
            >
              Start Your Project <ArrowRight className="ml-2" />
            </Button>
          </motion.div>
        </div>
      </section>

      <FadeInSection>
        <section className="px-6 md:px-12 lg:px-24 py-24 md:py-32 bg-[#f9f9f9]">
          <div className="max-w-5xl mx-auto">
            <h2 className="font-serif text-4xl md:text-5xl text-[#1a1a1a] mb-8">
              Our Mission
            </h2>
            <div className="space-y-6 font-sans text-lg text-[#1a1a1a]/70 leading-relaxed">
              <p>
                We don't just build websites. We create <strong className="text-[#1a1a1a]">custom digital solutions</strong> that convert visitors, rank higher, and scale effortlessly, without the headaches of freelancers or bloated agencies.
              </p>
              <p>
                Zavabuild exists to give SMBs in e-commerce, SaaS, professional services, and B2B the <strong className="text-[#1a1a1a]">reliable, high-performance web presence</strong> they deserve. No templates. No outsourcing. Just clean code, fast load times, and measurable ROI.
              </p>
            </div>
          </div>
        </section>
      </FadeInSection>

      <FadeInSection>
        <section className="px-6 md:px-12 lg:px-24 py-24 md:py-32 bg-[#f5f5f5]">
          <div className="max-w-5xl mx-auto">
            <h2 className="font-serif text-4xl md:text-5xl text-[#1a1a1a] mb-8">
              Our Story
            </h2>
            <div className="space-y-6 font-sans text-lg text-[#1a1a1a]/70 leading-relaxed">
              <p>
                Most agencies cut corners or outsource critical work. We saw the gap and closed it.
              </p>
              <p>
                Founded by developers and designers tired of fragile, slow, overpriced builds, Zavabuild was created to deliver <strong className="text-[#1a1a1a]">web solutions as ambitious as our clients</strong>. From day one, we've obsessed over three things:
              </p>
              <ul className="space-y-4 ml-6">
                <li className="flex gap-4">
                  <Zap className="w-6 h-6 text-[#1a1a1a] mt-1 flex-shrink-0" />
                  <span><strong className="text-[#1a1a1a]">Speed</strong> that retains users</span>
                </li>
                <li className="flex gap-4">
                  <Shield className="w-6 h-6 text-[#1a1a1a] mt-1 flex-shrink-0" />
                  <span><strong className="text-[#1a1a1a]">Security</strong> that protects growth</span>
                </li>
                <li className="flex gap-4">
                  <TrendingUp className="w-6 h-6 text-[#1a1a1a] mt-1 flex-shrink-0" />
                  <span><strong className="text-[#1a1a1a]">Scalability</strong> that eliminates future rebuilds</span>
                </li>
              </ul>
              <p className="font-semibold text-[#1a1a1a] text-xl pt-4">
                Every line of code, every design decision, every optimization is built for long-term impact.
              </p>
            </div>
          </div>
        </section>
      </FadeInSection>

      <FadeInSection>
        <section className="px-6 md:px-12 lg:px-24 py-24 md:py-32 bg-[#f9f9f9]">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="font-serif text-4xl md:text-5xl text-[#1a1a1a] mb-6">
                Our Core Values
              </h2>
              <p className="font-sans text-lg text-[#1a1a1a]/60">
                The principles that guide everything we do
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {coreValues.map((value, index) => (
                <div key={index} className="border border-[#1a1a1a]/10 p-8 hover:border-[#1a1a1a]/30 transition-all duration-300">
                  <h3 className="font-serif text-xl text-[#1a1a1a] mb-4">{value.title}</h3>
                  <p className="font-sans text-[#1a1a1a]/70">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </FadeInSection>

      <FadeInSection>
        <section className="px-6 md:px-12 lg:px-24 py-24 md:py-32 bg-[#f5f5f5]">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="font-serif text-4xl md:text-5xl text-[#1a1a1a] mb-6">
                The Team Behind Zavabuild
              </h2>
              <p className="font-sans text-lg text-[#1a1a1a]/70 mb-8">
                We're a lean, in-house team of experts who code, design, and optimize. <strong className="text-[#1a1a1a]">No freelancers, no handoffs.</strong>
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-12">
              <div className="border border-[#1a1a1a]/10 p-8">
                <h3 className="font-serif text-2xl text-[#1a1a1a] mb-2">Christopher Bell</h3>
                <p className="font-sans text-sm uppercase tracking-widest text-[#8c8c8c] mb-4">Co-founder / CEO</p>
                <p className="font-sans text-[#1a1a1a]/70">
                  Leads clients into the digital world, supporting them every step of the way to scale using high-performance digital assets. Obsessed with clean architecture and fast launches.
                </p>
              </div>

              <div className="border border-[#1a1a1a]/10 p-8">
                <h3 className="font-serif text-2xl text-[#1a1a1a] mb-2">Aristomenis Georgiou</h3>
                <p className="font-sans text-sm uppercase tracking-widest text-[#8c8c8c] mb-4">Co-founder / COO & UX Lead</p>
                <p className="font-sans text-[#1a1a1a]/70">
                  UI/UX specialist with 3+ years blending conversion psychology and pixel-perfect design. Led redesigns that boosted client conversions by 40%+.
                </p>
              </div>
            </div>

            <p className="text-center font-sans text-xl font-semibold text-[#1a1a1a]">
              Every project is touched by both founders. No middlemen.
            </p>
          </div>
        </section>
      </FadeInSection>

      <FadeInSection>
        <section className="px-6 md:px-12 lg:px-24 py-24 md:py-32 bg-[#f9f9f9]">
          <div className="max-w-5xl mx-auto">
            <h2 className="font-serif text-4xl md:text-5xl text-[#1a1a1a] mb-12">
              What Sets Zavabuild Apart
            </h2>

            <div className="space-y-6">
              {differentiators.map((point, index) => {
                const [title, description] = point.split(' - ');
                return (
                  <div key={index} className="flex gap-4 items-start border-b border-[#1a1a1a]/10 pb-6">
                    <CheckCircle className="w-6 h-6 text-[#1a1a1a] mt-1 flex-shrink-0" />
                    <div className="font-sans text-lg">
                      <strong className="text-[#1a1a1a]">{title}</strong>
                      {description && <span className="text-[#1a1a1a]/70"> - {description}</span>}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>
      </FadeInSection>

      <FadeInSection>
        <section className="px-6 md:px-12 lg:px-24 py-24 md:py-32 bg-[#1a1a1a] text-[#f9f9f9]">
          <div className="max-w-5xl mx-auto text-center">
            <h2 className="font-serif text-4xl md:text-5xl mb-6">
              Ready to Build Something That Lasts?
            </h2>
            <p className="font-sans text-lg md:text-xl text-[#f9f9f9]/70 mb-8 max-w-2xl mx-auto">
              Let's talk strategy, not just specs.
            </p>
            <Button
              size="lg"
              className="bg-[#f9f9f9] text-[#1a1a1a] hover:bg-[#f9f9f9]/90 px-8 py-6 text-base font-sans"
              onClick={() => {
                const event = new CustomEvent('openQuestionnaire');
                window.dispatchEvent(event);
              }}
            >
              Start Your Project <ArrowRight className="ml-2" />
            </Button>
            <p className="font-sans text-sm text-[#f9f9f9]/50 mt-6">
              Custom quote in 24 hours • We'll analyze your current site and show exact improvement opportunities
            </p>
          </div>
        </section>
      </FadeInSection>
    </div>
  );
}
