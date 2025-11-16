import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import FadeInSection from '@/components/FadeInSection';
import { ArrowRight, Search, Pencil, Code, Rocket, TrendingUp, Check } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Home() {
  const services = [
    {
      title: 'Custom Website Design & Development',
      description: 'We craft business website design tailored to your brand, ditching templates for a unique, high-converting online presence.',
      features: [
        'Mobile-first, responsive designs that perform flawlessly on every device',
        'Conversion-focused layouts to capture more leads and sales',
        'SEO-optimized foundation for immediate ranking potential'
      ],
      cta: 'Get a Free Design Audit'
    },
    {
      title: 'Scalable Web Application Development',
      description: 'As your dedicated web app builder, we create custom solutions that streamline operations and eliminate performance bottlenecks.',
      features: [
        'Secure, full-stack builds from dashboards to complete SaaS platforms',
        'Clean, scalable architecture that grows with your users',
        'Seamless integrations with CRM, payments, and third-party APIs'
      ],
      cta: 'Discuss Your App Idea'
    },
    {
      title: 'Shopify & Headless E-commerce Solutions',
      description: 'We deliver e-commerce development that drives revenue through responsive web development optimized for mobile shoppers.',
      features: [
        'High-converting stores with custom themes and headless architecture',
        'Ultra-fast checkout flows to minimize cart abandonment',
        'Flexible integrations for inventory, marketing, and analytics'
      ],
      cta: 'Launch Your Store'
    },
    {
      title: 'Performance Optimization & Core Web Vitals',
      description: 'Slow sites bleed revenue. We provide website speed optimization that improves SEO, retention, and bottom-line results.',
      features: [
        'Advanced tactics: Image compression, caching, CDN configuration',
        'Engineered for top-tier speed to keep visitors engaged',
        'Continuous monitoring for sustained speed excellence'
      ],
      cta: 'Optimize My Site Now'
    },
    {
      title: 'Security, Maintenance & Technical Support',
      description: 'Our managed web support keeps your site secure, stable, and continuously improving so you can focus on growth.',
      features: [
        'Enterprise-level audits, patching, backups, and hosting management',
        'Proactive updates to eliminate vulnerabilities and downtime',
        'Monthly performance and improvement reports'
      ],
      cta: 'Start Maintenance Plan'
    },
    {
      title: 'SEO & Integration Services',
      description: 'We amplify your custom website development with SEO best practices to ensure sustained visibility and ROI.',
      features: [
        'Technical SEO, on-page optimization, and content strategy',
        'Smooth connections to Google Analytics, email platforms, and more',
        'Data-backed adjustments for ongoing traffic increases'
      ],
      cta: 'Boost My SEO'
    }
  ];

  const processSteps = [
    {
      icon: Search,
      title: 'Discovery & Strategy',
      duration: '1-2 days',
      description: 'We define your goals, audience, technical needs, and success metrics to build a precise roadmap.'
    },
    {
      icon: Pencil,
      title: 'UX/UI Design',
      duration: '3-7 days',
      description: 'Wireframes → interactive prototypes → polished, mobile-first designs you approve.'
    },
    {
      icon: Code,
      title: 'Development',
      duration: '1-3 weeks',
      description: 'Scalable, secure code built with frequent demos and your input for perfect fit.'
    },
    {
      icon: Rocket,
      title: 'Rigorous Testing & Launch',
      duration: '2-3 days',
      description: 'Comprehensive QA, performance validation, and flawless deployment.'
    },
    {
      icon: TrendingUp,
      title: 'Ongoing Support & Optimization',
      duration: 'Monthly',
      description: 'Maintenance, analytics, CRO, and feature updates to fuel continuous growth.'
    }
  ];

  const caseStudies = [
    {
      title: 'SaaS Dashboard for Tech Startup',
      challenge: 'Legacy platform with slow loads and poor mobile UX, causing 40% signup drop-off.',
      solution: 'Full custom web app builder rebuild with responsive web development, API integrations, and speed optimization.',
      results: '50% faster loads, 35% higher user retention, live in 3 weeks.'
    },
    {
      title: 'E-commerce Store for Professional Services Firm',
      challenge: 'Generic Shopify setup with high mobile bounce rates and low conversions.',
      solution: 'Headless commerce implementation, custom themes, and Core Web Vitals tuning.',
      results: '42% lower bounce rate, 28% sales increase, optimized performance.'
    },
    {
      title: 'B2B Lead Generation Site for Scale-up',
      challenge: 'Scalability limits and security gaps blocking expansion.',
      solution: 'End-to-end custom website development with robust architecture and ongoing maintenance.',
      results: 'Handled 5x traffic surge seamlessly, 30% more qualified leads, delivered under budget.'
    }
  ];

  const testimonials = [
    {
      quote: 'Zavabuild transformed our slow site into a lead-generating powerhouse, live in 2 weeks with crystal-clear updates throughout.',
      author: 'CEO, SaaS Startup'
    },
    {
      quote: 'Ditched freelancers for good. Their optimization work lifted e-commerce sales 35% almost instantly. Top-tier responsive web development.',
      author: 'Founder, Online Retailer'
    },
    {
      quote: 'Transparent process, tailored support that actually scales with us. Couldn\'t ask for more.',
      author: 'Marketing Director, B2B Services Firm'
    },
    {
      quote: 'From strategy to launch, every step was fast and precise. Our web app now handles thousands of users without a hitch.',
      author: 'CTO, Tech Scale-up'
    },
    {
      quote: 'Clean design, ironclad security, and real business impact through higher lead quality. Worth every penny.',
      author: 'Owner, Consulting Agency'
    }
  ];

  const faqs = [
    {
      question: 'How long does custom website development take?',
      answer: '2-4 weeks on average. Faster than traditional agencies, with locked timelines.'
    },
    {
      question: 'Is responsive web development included?',
      answer: 'Absolutely—every project is mobile-first for flawless performance across devices.'
    },
    {
      question: 'What makes your web app builder unique?',
      answer: 'In-house team, scalable code, and performance obsession—no templates, no outsourcing.'
    },
    {
      question: 'Does maintenance come standard?',
      answer: 'Basic gets 1 month; higher plans include extended support with security and upgrades.'
    },
    {
      question: 'How is SEO handled in business website design?',
      answer: 'Built-in technical SEO, keyword integration, and Core Web Vitals optimization from day one.'
    },
    {
      question: 'Can you improve an existing website?',
      answer: 'Yes—start with a free audit to pinpoint speed, security, and conversion opportunities.'
    },
    {
      question: 'Which industries do you serve?',
      answer: 'We help a broad range of industries without limits. During your discovery stage, you will speak to a specialist to define what works best in your industry.'
    },
    {
      question: 'How do you handle payments?',
      answer: 'Rather than taking all the money at once, we take 50% once the proposal is fit to your needs, 25% after you\'ve confirmed you\'re happy with the design, and the final 25% before launch. That way we build trust at the same time.'
    }
  ];

  return (
    <div className="w-full">
      <section
        className="relative min-h-screen flex items-center justify-center bg-cover bg-center"
        style={{
          backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url(https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1920&q=80)',
        }}
      >
        <div className="container mx-auto px-4 lg:px-8 text-center text-white z-10 py-24">
          <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold mb-6 leading-tight">
            High-Performance Websites & Apps<br />Built for Growth
          </h1>
          <p className="text-lg md:text-xl lg:text-2xl mb-6 text-gray-200 max-w-4xl mx-auto leading-relaxed">
            Custom design. Scalable development. Lightning-fast performance. Zavabuild creates premium websites and web apps engineered to convert, rank, and scale with your business.
          </p>
          <div className="flex justify-center items-center mb-8">
            <Button
              size="lg"
              className="bg-white text-black hover:bg-gray-100 text-lg px-8 py-6"
              onClick={() => {
                const event = new CustomEvent('openQuestionnaire');
                window.dispatchEvent(event);
              }}
            >
              Start Your Project <ArrowRight className="ml-2" />
            </Button>
          </div>
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center text-sm md:text-base">
            <div className="flex items-center gap-2">
              <Check className="w-5 h-5" />
              <span>Mobile-first, optimized performance guaranteed</span>
            </div>
            <div className="flex items-center gap-2">
              <Check className="w-5 h-5" />
              <span>Tailored solutions, launch in 2-4 weeks</span>
            </div>
          </div>
        </div>
      </section>

      <FadeInSection>
        <section className="py-24 bg-background transition-colors duration-300">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="max-w-5xl mx-auto">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-8 text-foreground">
                About Us / Value Proposition
              </h2>
              <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
                <p>
                  At Zavabuild, we deliver reliable, high-performance digital solutions for small to medium-sized businesses frustrated with slow, outdated websites that lose leads and limit growth. Our in-house experts handle everything from custom website development to full-stack web apps, eliminating the risks of freelancers or bloated agencies.
                </p>
                <p>
                  <strong className="text-foreground">Our mission:</strong> We build clean, conversion-focused websites and apps that deliver real ROI through fast load times, great user experience, seamless scaling, and smart SEO. We partner with ambitious businesses, from startups launching their first digital presence to established brands optimizing for growth, with technical precision and transparent results.
                </p>
                <div>
                  <p className="font-semibold text-foreground mb-3">What sets us apart:</p>
                  <ul className="space-y-2 ml-6">
                    <li className="flex gap-2">
                      <span className="text-primary mt-1">•</span>
                      <span>We understand that every project is unique, that's why at Zavabuild we tailor every detail to your needs each step of the way.</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="text-primary mt-1">•</span>
                      <span>Fast turnaround (most projects live in 2-4 weeks) to accelerate your market speed.</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="text-primary mt-1">•</span>
                      <span>Performance-first mindset: Every build is mobile-first, responsive web development that dominates Core Web Vitals.</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="text-primary mt-1">•</span>
                      <span>Long-term partnerships: Ongoing support ensures your site evolves with your business, maximizing lifetime value.</span>
                    </li>
                  </ul>
                </div>
                <p>
                  We solve real pain points: Increase conversions by 30%+, slash bounce rates, scale without downtime, and bring in more clients through smart SEO, all with clear communication and agile workflows.
                </p>
              </div>
            </div>
          </div>
        </section>
      </FadeInSection>

      <FadeInSection>
        <section className="py-24 bg-secondary transition-colors duration-300">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="max-w-5xl mx-auto text-center mb-16">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-foreground">
                Services Breakdown
              </h2>
              <p className="text-lg text-muted-foreground">
                Comprehensive solutions tailored to your business needs
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
              {services.map((service, index) => (
                <Card key={index} className="transition-all duration-300 hover:scale-105">
                  <CardHeader>
                    <CardTitle className="text-xl mb-2">{service.title}</CardTitle>
                    <CardDescription className="text-base">{service.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3 mb-6">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex gap-2 text-sm">
                          <Check className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <Button
                      className="w-full"
                      onClick={() => {
                        const event = new CustomEvent('openQuestionnaire');
                        window.dispatchEvent(event);
                      }}
                    >
                      {service.cta}
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </FadeInSection>

      <FadeInSection>
        <section className="py-24 bg-background transition-colors duration-300">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="max-w-5xl mx-auto text-center mb-16">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-foreground">
                How It Works / Process
              </h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                Our transparent, agile process delivers projects on time with zero surprises.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 max-w-7xl mx-auto">
              {processSteps.map((step, index) => (
                <div key={index} className="text-center">
                  <div className="inline-flex items-center justify-center w-20 h-20 bg-primary text-primary-foreground rounded-full mb-6 transition-transform duration-300 hover:scale-110">
                    <step.icon size={40} />
                  </div>
                  <div className="text-4xl font-bold text-primary mb-2">{String(index + 1).padStart(2, '0')}</div>
                  <h3 className="text-xl font-bold mb-2 text-foreground">{step.title}</h3>
                  <p className="text-sm text-primary font-semibold mb-3">{step.duration}</p>
                  <p className="text-muted-foreground text-sm">{step.description}</p>
                </div>
              ))}
            </div>

            <p className="text-center text-lg text-muted-foreground mt-12 max-w-2xl mx-auto">
              Clear milestones, open updates. Results you can trust.
            </p>
          </div>
        </section>
      </FadeInSection>

      <FadeInSection>
        <section className="py-24 bg-secondary transition-colors duration-300">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="max-w-5xl mx-auto text-center mb-16">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-foreground">
                Case Studies / Portfolio Teaser
              </h2>
              <p className="text-lg text-muted-foreground">
                Proven results across industries
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
              {caseStudies.map((study, index) => (
                <Card key={index} className="transition-all duration-300 hover:scale-105">
                  <CardHeader>
                    <CardTitle className="text-xl mb-4">{study.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div>
                      <p className="font-semibold text-foreground mb-2">Challenge:</p>
                      <p className="text-sm text-muted-foreground">{study.challenge}</p>
                    </div>
                    <div>
                      <p className="font-semibold text-foreground mb-2">Solution:</p>
                      <p className="text-sm text-muted-foreground">{study.solution}</p>
                    </div>
                    <div>
                      <p className="font-semibold text-foreground mb-2">Results:</p>
                      <p className="text-sm text-primary font-semibold">{study.results}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="text-center mt-12">
              <Link to="/portfolio">
                <Button size="lg">
                  View Full Portfolio <ArrowRight className="ml-2" />
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </FadeInSection>

      <FadeInSection>
        <section className="py-24 bg-background transition-colors duration-300">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="max-w-4xl mx-auto text-center mb-16">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-foreground">
                Testimonials
              </h2>
              <p className="text-lg text-muted-foreground">
                What our clients say about working with us
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
              {testimonials.map((testimonial, index) => (
                <Card key={index} className="transition-all duration-300 hover:scale-105">
                  <CardContent className="pt-6">
                    <p className="text-muted-foreground italic mb-4">"{testimonial.quote}"</p>
                    <p className="font-semibold text-foreground">— {testimonial.author}</p>
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
            <div className="max-w-4xl mx-auto text-center mb-16">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-foreground">
                FAQ Section
              </h2>
              <p className="text-lg text-muted-foreground">
                Common questions about our services and process
              </p>
            </div>

            <div className="max-w-3xl mx-auto">
              <Accordion type="single" collapsible className="w-full">
                {faqs.map((faq, index) => (
                  <AccordionItem key={index} value={`item-${index}`}>
                    <AccordionTrigger className="text-left font-semibold">
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </div>
        </section>
      </FadeInSection>

      <FadeInSection>
        <section className="py-24 bg-black text-white">
          <div className="container mx-auto px-4 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
              Ready for a Website or App That Accelerates Your Business?
            </h2>
            <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Partner with Zavabuild for custom, high-performance solutions that deliver real results—fast. Tell us your goals; we'll build the path forward.
            </p>
            <Button
              size="lg"
              className="bg-white text-black hover:bg-gray-100 text-lg px-8 py-6"
              onClick={() => {
                const event = new CustomEvent('openQuestionnaire');
                window.dispatchEvent(event);
              }}
            >
              Start Your Project Today <ArrowRight className="ml-2" />
            </Button>
          </div>
        </section>
      </FadeInSection>
    </div>
  );
}
