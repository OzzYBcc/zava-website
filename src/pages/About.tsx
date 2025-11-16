import { Card, CardContent } from '@/components/ui/card';
import FadeInSection from '@/components/FadeInSection';
import { ArrowRight, Zap, Shield, TrendingUp, CheckCircle } from 'lucide-react';

export default function About() {
  const coreValues = [
    {
      title: 'Performance-First',
      description: 'Speed isn\'t optional—it\'s revenue. We optimize mobile-first for fast load times with responsive web development that keeps visitors engaged.'
    },
    {
      title: 'Security by Default',
      description: 'Enterprise-grade protection standard: SSL, secure auth, role-based access, automated backups. Your data—and your customers\'—stay safe.'
    },
    {
      title: 'Scalability Engineered In',
      description: 'From 100 to 100,000 users, your site grows without breaking. We build with clean, modular architecture for seamless expansion.'
    },
    {
      title: 'Transparent Partnership',
      description: 'Honest timelines. Weekly demos. No surprises—just clarity and control.'
    },
    {
      title: 'Results Obsessed',
      description: 'We measure success in conversions, engagement, and revenue—not just "looks good."'
    }
  ];

  const differentiators = [
    '100% Custom, Zero Templates - Your business isn\'t generic. Your site shouldn\'t be either.',
    'Tailored, Fast-Launch Model - Live in 2-4 weeks. No change-order chaos.',
    'In-House Execution Only - No outsourcing. Full control. Full accountability.',
    'Built for Growth, Not Just Launch - We don\'t disappear post-launch—we optimize, secure, and scale with you.',
    'Performance Guarantee - Below optimal performance? We fix it free.'
  ];

  return (
    <div className="w-full">
      <section
        className="relative min-h-[60vh] flex items-center justify-center bg-cover bg-center"
        style={{
          backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url(https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1920&q=80)',
        }}
      >
        <div className="container mx-auto px-4 lg:px-8 text-center text-white z-10 py-24">
          <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold mb-6 leading-tight">
            We Build Digital Assets That<br />Grow Your Business
          </h1>
          <p className="text-lg md:text-xl lg:text-2xl mb-8 opacity-90 max-w-4xl mx-auto">
            High-performance websites and web apps engineered for speed, security, and scale—delivered fast, with zero compromises.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
            <button
              className="inline-flex items-center justify-center whitespace-nowrap rounded-md font-medium transition-colors !bg-white !text-black hover:!bg-gray-100 px-6 py-3.5 text-base"
              onClick={() => {
                const event = new CustomEvent('openQuestionnaire');
                window.dispatchEvent(event);
              }}
            >
              Start Your Project <ArrowRight className="ml-2" />
            </button>
            <button
              className="inline-flex items-center justify-center whitespace-nowrap rounded-md font-medium transition-colors border-2 !border-white !bg-transparent !text-white hover:!bg-white hover:!text-black px-6 py-3.5 text-base"
              onClick={() => {
                const event = new CustomEvent('openQuestionnaire');
                window.dispatchEvent(event);
              }}
            >
              Schedule a Free Audit
            </button>
          </div>
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center text-sm md:text-base">
            <div className="flex items-center gap-2">
              <CheckCircle className="w-5 h-5" />
              <span>Optimized performance guaranteed on every launch</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="w-5 h-5" />
              <span>Tailored solutions, 2-4 week delivery</span>
            </div>
          </div>
        </div>
      </section>

      <FadeInSection>
        <section className="py-24 bg-background transition-colors duration-300">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="max-w-5xl mx-auto">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-8 text-foreground">
                Our Mission
              </h2>
              <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
                <p>
                  We don't just build websites. We create <strong className="text-foreground">custom digital solutions</strong> that convert visitors, rank higher, and scale effortlessly—without the headaches of freelancers or bloated agencies.
                </p>
                <p>
                  Zavabuild exists to give SMBs in e-commerce, SaaS, professional services, and B2B the <strong className="text-foreground">reliable, high-performance web presence</strong> they deserve. No templates. No outsourcing. Just clean code, fast load times, and measurable ROI.
                </p>
              </div>
            </div>
          </div>
        </section>
      </FadeInSection>

      <FadeInSection>
        <section className="py-24 bg-secondary transition-colors duration-300">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="max-w-5xl mx-auto">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-8 text-foreground">
                Our Story
              </h2>
              <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
                <p>
                  Most agencies cut corners or outsource critical work. We saw the gap—and closed it.
                </p>
                <p>
                  Founded by developers and designers tired of fragile, slow, overpriced builds, Zavabuild was created to deliver <strong className="text-foreground">web solutions as ambitious as our clients</strong>. From day one, we've obsessed over three things:
                </p>
                <ul className="space-y-3 ml-6">
                  <li className="flex gap-2">
                    <Zap className="w-6 h-6 text-primary mt-1 flex-shrink-0" />
                    <span><strong className="text-foreground">Speed</strong> that retains users</span>
                  </li>
                  <li className="flex gap-2">
                    <Shield className="w-6 h-6 text-primary mt-1 flex-shrink-0" />
                    <span><strong className="text-foreground">Security</strong> that protects growth</span>
                  </li>
                  <li className="flex gap-2">
                    <TrendingUp className="w-6 h-6 text-primary mt-1 flex-shrink-0" />
                    <span><strong className="text-foreground">Scalability</strong> that eliminates future rebuilds</span>
                  </li>
                </ul>
                <p className="font-semibold text-foreground text-xl">
                  Every line of code, every design decision, every optimization is built for long-term impact.
                </p>
              </div>
            </div>
          </div>
        </section>
      </FadeInSection>

      <FadeInSection>
        <section className="py-24 bg-background transition-colors duration-300">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="max-w-5xl mx-auto text-center mb-16">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-foreground">
                Our Core Values
              </h2>
              <p className="text-lg text-muted-foreground">
                The principles that guide everything we do
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {coreValues.map((value, index) => (
                <Card key={index} className="transition-all duration-300 hover:scale-105">
                  <CardContent className="pt-6">
                    <h3 className="text-xl font-bold mb-4 text-foreground">{value.title}</h3>
                    <p className="text-muted-foreground">{value.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </FadeInSection>

      <FadeInSection>
        <section className="py-24 bg-secondary transition-colors duration-300">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="max-w-5xl mx-auto text-center mb-16">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-foreground">
                The Team Behind Zavabuild
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                We're a lean, in-house team of experts who code, design, and optimize—<strong>no freelancers, no handoffs.</strong>
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-4xl mx-auto mb-12">
              <Card className="transition-all duration-300 hover:scale-105">
                <CardContent className="pt-6">
                  <h3 className="text-2xl font-bold mb-2 text-foreground">Christopher Bell</h3>
                  <p className="text-primary font-semibold mb-4">Co-founder / CEO</p>
                  <p className="text-muted-foreground">
                    Leads clients into the digital world, supporting them every step of the way to scale using high-performance digital assets. Architected high-performance web apps at a SaaS scale-up that grew from 1K to 100K MAU. Obsessed with clean architecture and fast launches.
                  </p>
                </CardContent>
              </Card>

              <Card className="transition-all duration-300 hover:scale-105">
                <CardContent className="pt-6">
                  <h3 className="text-2xl font-bold mb-2 text-foreground">Aristomenis Georgiou</h3>
                  <p className="text-primary font-semibold mb-4">Co-founder / COO & UX Lead</p>
                  <p className="text-muted-foreground">
                    UI/UX specialist with 10+ years blending conversion psychology and pixel-perfect design. Led redesigns that boosted client conversions by 40%+.
                  </p>
                </CardContent>
              </Card>
            </div>

            <p className="text-center text-xl font-semibold text-foreground">
              Every project is touched by both founders. No middlemen.
            </p>
          </div>
        </section>
      </FadeInSection>

      <FadeInSection>
        <section className="py-24 bg-background transition-colors duration-300">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="max-w-5xl mx-auto">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-12 text-foreground">
                What Sets Zavabuild Apart
              </h2>

              <div className="space-y-6">
                {differentiators.map((point, index) => {
                  const [title, description] = point.split(' - ');
                  return (
                    <div key={index} className="flex gap-4 items-start">
                      <CheckCircle className="w-6 h-6 text-primary mt-1 flex-shrink-0" />
                      <div>
                        <p className="text-lg">
                          <strong className="text-foreground">{title}</strong>
                          {description && <span className="text-muted-foreground"> - {description}</span>}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </section>
      </FadeInSection>

      <FadeInSection>
        <section className="py-24 bg-secondary transition-colors duration-300">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="max-w-5xl mx-auto">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-8 text-foreground">
                Trusted by Growing Businesses
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                We partner with <strong className="text-foreground">startups, scale-ups, e-commerce brands, SaaS companies, and B2B firms</strong> who need more than a website—they need a growth engine.
              </p>
              <Card className="bg-background">
                <CardContent className="pt-6">
                  <p className="text-lg italic text-muted-foreground mb-4">
                    "Zavabuild delivered a SaaS dashboard 3x faster than our last agency—and it maintains optimized performance at 50K users."
                  </p>
                  <p className="font-semibold text-foreground">— CTO, Tech Scale-up</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </FadeInSection>

      <FadeInSection>
        <section className="py-24 bg-background transition-colors duration-300">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="max-w-5xl mx-auto">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-8 text-foreground">
                Our Promise
              </h2>
              <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
                <p>
                  We won't overpromise. But we will <strong className="text-foreground">over-deliver</strong> on speed, security, and scalability.
                </p>
                <p className="text-xl font-semibold text-foreground">
                  When you choose Zavabuild, you're not buying a website—you're investing in a high-ROI digital asset that compounds with your business.
                </p>
              </div>
            </div>
          </div>
        </section>
      </FadeInSection>

      <FadeInSection>
        <section className="py-24 bg-primary text-primary-foreground">
          <div className="container mx-auto px-4 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
              Ready to Build Something That Lasts?
            </h2>
            <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto opacity-90">
              Let's talk strategy, not just specs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <button
                className="inline-flex items-center justify-center whitespace-nowrap rounded-md font-medium transition-colors !bg-white !text-black hover:!bg-gray-100 px-6 py-3.5 text-base"
                onClick={() => {
                  const event = new CustomEvent('openQuestionnaire');
                  window.dispatchEvent(event);
                }}
              >
                Start Your Project <ArrowRight className="ml-2" />
              </button>
              <button
                className="inline-flex items-center justify-center whitespace-nowrap rounded-md font-medium transition-colors border-2 !border-white !bg-transparent !text-white hover:!bg-white hover:!text-black px-6 py-3.5 text-base"
                onClick={() => {
                  const event = new CustomEvent('openQuestionnaire');
                  window.dispatchEvent(event);
                }}
              >
                Schedule a Free Audit
              </button>
            </div>
            <p className="text-sm opacity-70 mt-6">
              Custom quote in 24 hours • We'll analyze your current site and show exact improvement opportunities
            </p>
          </div>
        </section>
      </FadeInSection>
    </div>
  );
}
