import { useEffect } from 'react';
import { motion } from 'framer-motion';
import FadeInSection from '@/components/FadeInSection';
import { Button } from '@/components/ui/button';
import {
  Palette,
  Code2,
  ShoppingCart,
  Zap,
  Shield,
  Headphones,
  TrendingUp,
  CheckCircle2,
  Lightbulb,
  Layers,
  Rocket,
  BarChart3,
  MessageSquare
} from 'lucide-react';

const whatWeDo = [
  {
    icon: Palette,
    title: 'Web Design & Front-End Experience',
    description: 'Clean, modern interfaces that guide visitors to take action. Mobile-first, accessible, and built to convert.',
    features: [
      'Custom UI/UX design',
      'Conversion-optimized landing pages',
      'Fully responsive layouts',
      'Smooth interactions & subtle animations',
      'Accessibility compliance'
    ]
  },
  {
    icon: Code2,
    title: 'Web Application Development',
    description: 'Powerful, secure systems that go beyond static pages.',
    features: [
      'Full-stack development',
      'Custom APIs & third-party integrations',
      'Real-time functionality',
      'Progressive Web Apps (PWAs)',
      'Secure authentication & role-based access'
    ]
  },
  {
    icon: ShoppingCart,
    title: 'E-Commerce & Shopify / Headless Commerce',
    description: 'Stores that load fast, look sharp, and close sales.',
    features: [
      'Custom Shopify themes & apps',
      'Headless storefronts',
      'Ultra-fast checkout',
      'Payment, inventory & marketing integrations',
      'Automated workflows'
    ]
  },
  {
    icon: Zap,
    title: 'Performance & Optimization',
    description: 'Speed wins customers. We make sure yours never waits.',
    features: [
      'Core Web Vitals optimization',
      'Advanced caching & CDN setup',
      'Image & asset compression',
      'Ongoing performance monitoring'
    ]
  },
  {
    icon: Shield,
    title: 'Security & Maintenance',
    description: 'Enterprise-grade protection and zero headaches.',
    features: [
      'Security audits & hardening',
      'Automatic updates & patching',
      'Daily backups & recovery plans',
      'GDPR-compliant data handling'
    ]
  },
  {
    icon: Headphones,
    title: 'Managed Services & Support',
    description: 'Let us own the tech so you can own your business.',
    features: [
      'Reliable hosting & infrastructure',
      'Monthly maintenance retainers',
      'Priority updates & feature work',
      'Clear analytics reporting',
      'Fast, human support'
    ]
  },
  {
    icon: TrendingUp,
    title: 'Growth & Conversion Strategy',
    description: 'Turn traffic into revenue.',
    features: [
      'CRO audits & heatmapping',
      'A/B testing',
      'User behaviour analysis',
      'Advanced analytics setup',
      'Continuous UX improvements'
    ]
  }
];

const whyChooseUs = [
  {
    icon: Zap,
    title: 'Performance-first',
    description: 'Fast sites convert better'
  },
  {
    icon: Shield,
    title: 'Rock-solid security',
    description: 'No shortcuts'
  },
  {
    icon: Layers,
    title: 'Built to scale',
    description: 'Grow without rebuilding'
  },
  {
    icon: MessageSquare,
    title: 'Clear communication',
    description: 'You always know what\'s next'
  },
  {
    icon: BarChart3,
    title: 'Results over deliverables',
    description: 'We measure success in revenue, not pages'
  }
];

const howWeWork = [
  {
    icon: Lightbulb,
    number: '01',
    title: 'Discovery',
    description: 'Goals, users, metrics'
  },
  {
    icon: Palette,
    number: '02',
    title: 'Design',
    description: 'Wireframes → prototype → approval'
  },
  {
    icon: Code2,
    number: '03',
    title: 'Development',
    description: 'Agile, tested, demoed weekly'
  },
  {
    icon: Rocket,
    number: '04',
    title: 'Launch',
    description: 'Smooth deployment, zero downtime'
  },
  {
    icon: TrendingUp,
    number: '05',
    title: 'Growth',
    description: 'Ongoing optimization and support'
  }
];

const engagementOptions = [
  {
    title: 'Project Delivery',
    description: 'Defined scope, fast launch'
  },
  {
    title: 'Ongoing Partnership',
    description: 'Monthly support & evolution'
  },
  {
    title: 'Time-Based / Agile',
    description: 'For products that keep growing'
  },
  {
    title: 'Hybrid',
    description: 'Fixed phase + long-term retainer'
  }
];

export default function Services() {
  useEffect(() => {
    document.title = 'Services | Custom Web Design, Apps & E-Commerce | Zavabuild';
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'High-performance web design, full-stack development, Shopify & headless commerce. Tailored solutions launched fast.');
    }
  }, []);

  return (
    <div className="w-full bg-[#f9f9f9]">
      <section className="min-h-[60vh] flex items-center justify-center px-6 md:px-12 lg:px-24 py-32 bg-[#f9f9f9]">
        <div className="max-w-5xl text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="font-serif text-5xl md:text-6xl lg:text-7xl text-[#1a1a1a] mb-8 leading-tight"
          >
            High-Performance Web Solutions Built for Real Growth
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="font-sans text-lg md:text-xl text-[#1a1a1a]/70 mb-12 max-w-3xl mx-auto leading-relaxed"
          >
            No off-the-shelf packages. We build exactly what your business needs: lightning-fast marketing sites, scalable web apps, or anything in between. All engineered for speed, security, and lasting results.
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
              Start Your Project
            </Button>
          </motion.div>
        </div>
      </section>

      <FadeInSection>
        <section className="px-6 md:px-12 lg:px-24 py-24 md:py-32 bg-[#f9f9f9]">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="font-serif text-4xl md:text-5xl text-[#1a1a1a] mb-6">
                What We Do
              </h2>
              <p className="font-sans text-lg text-[#1a1a1a]/60 max-w-2xl mx-auto">
                Comprehensive solutions tailored to your business needs
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {whatWeDo.map((service, index) => (
                <div key={index} className="border border-[#1a1a1a]/10 p-8 hover:border-[#1a1a1a]/30 transition-all duration-300">
                  <service.icon className="h-10 w-10 text-[#1a1a1a] mb-4" />
                  <h3 className="font-serif text-xl text-[#1a1a1a] mb-3">{service.title}</h3>
                  <p className="font-sans text-[#1a1a1a]/70 mb-4 leading-relaxed">
                    {service.description}
                  </p>
                  <ul className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-2 font-sans text-sm text-[#1a1a1a]/70">
                        <CheckCircle2 className="h-4 w-4 text-[#1a1a1a] mt-0.5 flex-shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>
      </FadeInSection>

      <FadeInSection>
        <section className="px-6 md:px-12 lg:px-24 py-24 md:py-32 bg-[#f5f5f5]">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="font-serif text-4xl md:text-5xl text-[#1a1a1a] mb-6">
                Why Businesses Choose Zavabuild
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
              {whyChooseUs.map((item, index) => (
                <div key={index} className="text-center">
                  <item.icon className="h-12 w-12 text-[#1a1a1a] mx-auto mb-4" />
                  <h3 className="font-serif text-lg text-[#1a1a1a] mb-2">{item.title}</h3>
                  <p className="font-sans text-sm text-[#1a1a1a]/70">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </FadeInSection>

      <FadeInSection>
        <section className="px-6 md:px-12 lg:px-24 py-24 md:py-32 bg-[#f9f9f9]">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="font-serif text-4xl md:text-5xl text-[#1a1a1a] mb-6">
                How We Work
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
              {howWeWork.map((step, index) => (
                <div key={index} className="text-center">
                  <div className="relative mb-4">
                    <div className="w-20 h-20 mx-auto border-2 border-[#1a1a1a] flex items-center justify-center">
                      <step.icon className="h-10 w-10 text-[#1a1a1a]" />
                    </div>
                    <div className="absolute -top-2 -right-2 w-8 h-8 bg-[#1a1a1a] text-[#f9f9f9] flex items-center justify-center font-sans text-xs font-bold">
                      {step.number}
                    </div>
                  </div>
                  <h3 className="font-serif text-lg text-[#1a1a1a] mb-2">{step.title}</h3>
                  <p className="font-sans text-sm text-[#1a1a1a]/70">{step.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </FadeInSection>

      <FadeInSection>
        <section className="px-6 md:px-12 lg:px-24 py-24 md:py-32 bg-[#f5f5f5]">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="font-serif text-4xl md:text-5xl text-[#1a1a1a] mb-6">
                Engagement Options
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {engagementOptions.map((option, index) => (
                <div key={index} className="border border-[#1a1a1a]/10 p-8 hover:border-[#1a1a1a]/30 transition-all duration-300">
                  <h3 className="font-serif text-lg text-[#1a1a1a] mb-2">{option.title}</h3>
                  <p className="font-sans text-[#1a1a1a]/70">{option.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </FadeInSection>

      <FadeInSection>
        <section className="px-6 md:px-12 lg:px-24 py-24 md:py-32 bg-[#1a1a1a] text-[#f9f9f9]">
          <div className="max-w-5xl mx-auto text-center">
            <h2 className="font-serif text-4xl md:text-5xl mb-6">
              Ready to Build Something Serious?
            </h2>
            <p className="font-sans text-lg md:text-xl text-[#f9f9f9]/70 mb-8 max-w-2xl mx-auto leading-relaxed">
              Tell us where you want to go. We'll get you there: faster, cleaner, and stronger.
            </p>
            <Button
              size="lg"
              className="bg-[#f9f9f9] text-[#1a1a1a] hover:bg-[#f9f9f9]/90 px-8 py-6 text-base font-sans"
              onClick={() => {
                const event = new CustomEvent('openQuestionnaire');
                window.dispatchEvent(event);
              }}
            >
              Start Your Project
            </Button>
          </div>
        </section>
      </FadeInSection>
    </div>
  );
}
