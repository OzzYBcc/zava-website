import { useEffect } from 'react';
import FadeInSection from '@/components/FadeInSection';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
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
    <div className="w-full">
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-background transition-colors duration-300">
        <div className="container mx-auto px-4 lg:px-8">
          <FadeInSection>
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-foreground leading-tight">
                High-Performance Web Solutions Built for Real Growth
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground mb-8 leading-relaxed">
                No off-the-shelf packages. We build exactly what your business needs: lightning-fast marketing sites, scalable web apps, or anything in between. All engineered for speed, security, and lasting results.
              </p>
              <div className="flex flex-wrap gap-4 justify-center mb-8">
                <div className="flex items-center gap-2 text-sm md:text-base text-muted-foreground">
                  <CheckCircle2 className="h-5 w-5 text-primary" />
                  <span>Optimized performance guaranteed</span>
                </div>
                <div className="flex items-center gap-2 text-sm md:text-base text-muted-foreground">
                  <CheckCircle2 className="h-5 w-5 text-primary" />
                  <span>Tailored solutions, launch in 2-4 weeks</span>
                </div>
              </div>
              <Button
                size="lg"
                className="text-base px-8"
                onClick={() => {
                  const event = new CustomEvent('openQuestionnaire');
                  window.dispatchEvent(event);
                }}
              >
                Start Your Project
              </Button>
            </div>
          </FadeInSection>
        </div>
      </section>

      {/* What We Do Section */}
      <section className="py-20 bg-muted/30 transition-colors duration-300">
        <div className="container mx-auto px-4 lg:px-8">
          <FadeInSection>
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-foreground">
                What We Do
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Comprehensive solutions tailored to your business needs
              </p>
            </div>
          </FadeInSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
            {whatWeDo.map((service, index) => (
              <FadeInSection key={index}>
                <Card className="h-full hover:shadow-lg transition-all duration-300">
                  <CardHeader>
                    <div className="mb-4">
                      <service.icon className="h-10 w-10 text-primary" />
                    </div>
                    <CardTitle className="text-xl mb-3">{service.title}</CardTitle>
                    <CardDescription className="text-base leading-relaxed">
                      {service.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-sm text-muted-foreground">
                          <CheckCircle2 className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </FadeInSection>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-background transition-colors duration-300">
        <div className="container mx-auto px-4 lg:px-8">
          <FadeInSection>
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-foreground">
                Why Businesses Choose Zavabuild
              </h2>
            </div>
          </FadeInSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 max-w-7xl mx-auto">
            {whyChooseUs.map((item, index) => (
              <FadeInSection key={index}>
                <div className="text-center p-6 rounded-lg hover:bg-muted/30 transition-colors duration-300">
                  <item.icon className="h-12 w-12 text-primary mx-auto mb-4" />
                  <h3 className="text-lg font-semibold mb-2 text-foreground">{item.title}</h3>
                  <p className="text-sm text-muted-foreground">{item.description}</p>
                </div>
              </FadeInSection>
            ))}
          </div>
        </div>
      </section>

      {/* How We Work Section */}
      <section className="py-20 bg-muted/30 transition-colors duration-300">
        <div className="container mx-auto px-4 lg:px-8">
          <FadeInSection>
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-foreground">
                How We Work
              </h2>
            </div>
          </FadeInSection>

          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
              {howWeWork.map((step, index) => (
                <FadeInSection key={index}>
                  <div className="text-center">
                    <div className="relative mb-4">
                      <div className="w-20 h-20 mx-auto rounded-full bg-primary/10 flex items-center justify-center">
                        <step.icon className="h-10 w-10 text-primary" />
                      </div>
                      <div className="absolute -top-2 -right-2 w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-xs font-bold">
                        {step.number}
                      </div>
                    </div>
                    <h3 className="text-lg font-semibold mb-2 text-foreground">{step.title}</h3>
                    <p className="text-sm text-muted-foreground">{step.description}</p>
                  </div>
                </FadeInSection>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Engagement Options Section */}
      <section className="py-20 bg-background transition-colors duration-300">
        <div className="container mx-auto px-4 lg:px-8">
          <FadeInSection>
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-foreground">
                Engagement Options
              </h2>
            </div>
          </FadeInSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {engagementOptions.map((option, index) => (
              <FadeInSection key={index}>
                <Card className="h-full hover:shadow-lg transition-shadow duration-300">
                  <CardHeader>
                    <CardTitle className="text-lg mb-2">{option.title}</CardTitle>
                    <CardDescription>{option.description}</CardDescription>
                  </CardHeader>
                </Card>
              </FadeInSection>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-20 bg-muted/30 transition-colors duration-300">
        <div className="container mx-auto px-4 lg:px-8">
          <FadeInSection>
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-foreground">
                Ready to Build Something Serious?
              </h2>
              <p className="text-lg md:text-xl text-muted-foreground mb-8 leading-relaxed">
                Tell us where you want to go. We'll get you there, faster, cleaner, and stronger.
              </p>
              <Button
                size="lg"
                className="text-base px-8"
                onClick={() => {
                  const event = new CustomEvent('openQuestionnaire');
                  window.dispatchEvent(event);
                }}
              >
                Start Your Project
              </Button>
            </div>
          </FadeInSection>
        </div>
      </section>
    </div>
  );
}
