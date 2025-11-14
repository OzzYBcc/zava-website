import FadeInSection from '@/components/FadeInSection';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const projects = [
  {
    title: 'TechFlow Solutions',
    category: 'Web Application',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80',
    outcome: 'Increased user engagement by 240% and reduced support tickets by 60%',
    tags: ['React', 'Dashboard', 'Analytics'],
  },
  {
    title: 'Luxe Fashion Boutique',
    category: 'E-commerce',
    image: 'https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?w=800&q=80',
    outcome: 'Generated £500K in online sales within first 6 months of launch',
    tags: ['Shopify', 'Custom Design', 'Mobile-First'],
  },
  {
    title: 'Apex Financial Advisors',
    category: 'Corporate Website',
    image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&q=80',
    outcome: 'Boosted lead generation by 180% with strategic UX improvements',
    tags: ['WordPress', 'Lead Gen', 'SEO'],
  },
  {
    title: 'GreenLife Wellness',
    category: 'Booking Platform',
    image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&q=80',
    outcome: 'Streamlined booking process, increased conversions by 165%',
    tags: ['Custom Platform', 'Integrations', 'CRM'],
  },
  {
    title: 'Urban Property Group',
    category: 'Real Estate Portal',
    image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&q=80',
    outcome: 'Enhanced property showcase with virtual tours, 95% user satisfaction',
    tags: ['Custom CMS', 'Virtual Tours', 'Maps'],
  },
  {
    title: 'Quantum Innovations',
    category: 'SaaS Platform',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80',
    outcome: 'Scalable architecture supporting 10K+ concurrent users',
    tags: ['Cloud Native', 'API', 'Microservices'],
  },
];

export default function Portfolio() {
  return (
    <div className="w-full">
      <section className="py-24 bg-black">
        <div className="container mx-auto px-4 lg:px-8">
          <FadeInSection>
            <div className="max-w-4xl mx-auto text-center mb-16">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-white">
                Our Work
              </h1>
              <p className="text-lg md:text-xl text-gray-400">
                Real projects. Real results. See how we've helped businesses transform their digital presence.
              </p>
            </div>
          </FadeInSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <FadeInSection key={project.title}>
                <Card className="overflow-hidden group cursor-pointer h-full transition-transform duration-300 hover:scale-[1.02] bg-gray-900 border-gray-800">
                  <div className="relative overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-64 object-cover transition-all duration-300 group-hover:brightness-110"
                      loading="lazy"
                    />
                    <div className="absolute top-4 right-4">
                      <Badge className="bg-black text-white">{project.category}</Badge>
                    </div>
                  </div>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold mb-2 text-white">{project.title}</h3>
                    <p className="text-gray-400 mb-4">{project.outcome}</p>
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <Badge key={tag} variant="outline" className="text-xs">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </FadeInSection>
            ))}
          </div>

          <FadeInSection>
            <div className="mt-16 text-center">
              <p className="text-gray-400 mb-6">
                These are just a few examples. We've helped dozens of businesses achieve their digital goals.
              </p>
              <p className="text-lg font-semibold text-white">
                Ready to join our success stories?
              </p>
            </div>
          </FadeInSection>
        </div>
      </section>
    </div>
  );
}
