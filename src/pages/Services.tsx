import FadeInSection from '@/components/FadeInSection';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Check } from 'lucide-react';

const services = [
  {
    name: 'Starter Site',
    price: '£1,500',
    description: 'Perfect for startups and small businesses looking to establish their online presence',
    idealFor: 'Startups, Small Businesses',
    features: [
      'Up to 5 custom pages',
      'Fully responsive design',
      'SEO optimization',
      'Contact form integration',
      'Fast loading speed',
      '30 days support',
    ],
  },
  {
    name: 'Business Website',
    price: '£3,000',
    description: 'Comprehensive solution for growing businesses ready to scale their digital presence',
    idealFor: 'Growing Companies, Service Providers',
    features: [
      'Up to 10 custom pages',
      'Advanced animations',
      'CMS integration',
      'Blog functionality',
      'Analytics setup',
      'Performance optimization',
      '60 days support',
    ],
  },
  {
    name: 'E-commerce Platform',
    price: '£5,000',
    description: 'Full-featured online store built to convert visitors into customers',
    idealFor: 'Retail Brands, Online Stores',
    features: [
      'Custom product pages',
      'Shopping cart & checkout',
      'Payment gateway integration',
      'Inventory management',
      'Order tracking',
      'Customer accounts',
      'Email automation',
      '90 days support',
    ],
  },
  {
    name: 'Custom Web App',
    price: '£8,000',
    description: 'Bespoke web application tailored to your unique business requirements',
    idealFor: 'Enterprise, SaaS Companies',
    features: [
      'Custom functionality',
      'User authentication',
      'Database integration',
      'API development',
      'Admin dashboard',
      'Advanced security',
      'Scalable architecture',
      '120 days support',
    ],
  },
];

export default function Services() {
  return (
    <div className="w-full">
      <section className="py-24 bg-black">
        <div className="container mx-auto px-4 lg:px-8">
          <FadeInSection>
            <div className="max-w-4xl mx-auto text-center mb-16">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-white">
                Our Services
              </h1>
              <p className="text-lg md:text-xl text-gray-400">
                Choose the perfect package for your business needs. All packages include mobile-first design, ongoing support, and a satisfaction guarantee.
              </p>
            </div>
          </FadeInSection>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-7xl mx-auto">
            {services.map((service) => (
              <FadeInSection key={service.name}>
                <Card className="h-full hover:shadow-xl transition-shadow duration-300 bg-gray-900 border-gray-800">
                  <CardHeader>
                    <div className="flex justify-between items-start mb-2">
                      <CardTitle className="text-2xl md:text-3xl text-white">{service.name}</CardTitle>
                      <div className="text-right">
                        <div className="text-3xl font-bold text-white">{service.price}</div>
                      </div>
                    </div>
                    <CardDescription className="text-base text-gray-400">{service.description}</CardDescription>
                    <div className="pt-2">
                      <Badge variant="secondary" className="text-xs">
                        Ideal for: {service.idealFor}
                      </Badge>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3 mb-6">
                      {service.features.map((feature) => (
                        <li key={feature} className="flex items-start gap-3">
                          <Check className="h-5 w-5 text-white flex-shrink-0 mt-0.5" />
                          <span className="text-gray-300">{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <Button
                      className="w-full bg-white text-black hover:bg-gray-200"
                      onClick={() => {
                        const event = new CustomEvent('openQuestionnaire');
                        window.dispatchEvent(event);
                      }}
                    >
                      Get Started
                    </Button>
                  </CardContent>
                </Card>
              </FadeInSection>
            ))}
          </div>

          <FadeInSection>
            <div className="mt-16 bg-gray-950 rounded-lg p-8 md:p-12 text-center max-w-4xl mx-auto">
              <h2 className="text-2xl md:text-3xl font-bold mb-4 text-white">Need Something Different?</h2>
              <p className="text-gray-400 mb-6">
                Every business is unique. If you need a custom solution, we'd love to discuss your specific requirements and create a tailored package.
              </p>
              <Button
                size="lg"
                variant="outline"
                className="border-gray-700 text-white hover:bg-gray-800"
                onClick={() => {
                  const event = new CustomEvent('openQuestionnaire');
                  window.dispatchEvent(event);
                }}
              >
                Discuss Custom Project
              </Button>
            </div>
          </FadeInSection>
        </div>
      </section>
    </div>
  );
}
