import { Button } from '@/components/ui/button';
import FadeInSection from '@/components/FadeInSection';
import { ArrowRight, Zap, Shield, TrendingUp } from 'lucide-react';

export default function Home() {

  return (
    <div className="w-full">
      <section
        className="relative h-screen flex items-center justify-center bg-cover bg-center"
        style={{
          backgroundImage: 'linear-gradient(rgba(255, 255, 255, 0.5), rgba(255, 255, 255, 0.5)), url(https://images.unsplash.com/photo-1557426272-fc759fdf7a8d?w=1920&q=80)',
        }}
      >
        <div className="container mx-auto px-4 lg:px-8 text-center text-black z-10">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            Digital Assets That Position<br />Your Brand to Lead
          </h1>
          <p className="text-lg md:text-xl lg:text-2xl mb-8 text-gray-800 max-w-3xl mx-auto">
            Premium websites & web apps for ambitious businesses
          </p>
          <Button
            size="lg"
            className="bg-black text-white hover:bg-gray-900 text-lg px-8 py-6"
            onClick={() => {
              const event = new CustomEvent('openQuestionnaire');
              window.dispatchEvent(event);
            }}
          >
            Start Your Project <ArrowRight className="ml-2" />
          </Button>
        </div>
      </section>

      <FadeInSection>
        <section className="py-24 bg-black">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="max-w-4xl mx-auto text-center mb-16">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-white">
                Why Choose ZAVA
              </h2>
              <p className="text-lg text-gray-400">
                We create digital experiences that drive measurable business results
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center p-8">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-white text-black rounded-full mb-6">
                  <Zap size={32} />
                </div>
                <h3 className="text-xl font-bold mb-4 text-white">Lightning Fast</h3>
                <p className="text-gray-400">
                  Optimized for performance with 95+ Lighthouse scores. Your site loads instantly.
                </p>
              </div>

              <div className="text-center p-8">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-white text-black rounded-full mb-6">
                  <Shield size={32} />
                </div>
                <h3 className="text-xl font-bold mb-4 text-white">Enterprise Security</h3>
                <p className="text-gray-400">
                  Built with best practices and security standards that protect your business.
                </p>
              </div>

              <div className="text-center p-8">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-white text-black rounded-full mb-6">
                  <TrendingUp size={32} />
                </div>
                <h3 className="text-xl font-bold mb-4 text-white">Growth Focused</h3>
                <p className="text-gray-400">
                  Every design decision is made to maximize conversions and user engagement.
                </p>
              </div>
            </div>
          </div>
        </section>
      </FadeInSection>

      <FadeInSection>
        <section className="py-24 bg-gray-950">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="max-w-4xl mx-auto text-center mb-16">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-white">
                Our Process
              </h2>
              <p className="text-lg text-gray-400">
                A proven approach to delivering exceptional digital products
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 max-w-6xl mx-auto">
              {[
                { step: '01', title: 'Discovery', desc: 'Deep dive into your business goals and target audience' },
                { step: '02', title: 'Design', desc: 'Crafting beautiful, conversion-focused interfaces' },
                { step: '03', title: 'Development', desc: 'Building with cutting-edge technology and best practices' },
                { step: '04', title: 'Launch', desc: 'Deployment, testing, and ongoing optimization' },
              ].map((item) => (
                <div key={item.step} className="text-center">
                  <div className="text-5xl font-bold text-gray-800 mb-4">{item.step}</div>
                  <h3 className="text-xl font-bold mb-3 text-white">{item.title}</h3>
                  <p className="text-gray-400">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </FadeInSection>

      <FadeInSection>
        <section className="py-24 bg-white text-black">
          <div className="container mx-auto px-4 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
              Ready to Transform Your Digital Presence?
            </h2>
            <p className="text-lg md:text-xl text-gray-700 mb-8 max-w-2xl mx-auto">
              Let's discuss how we can help your business achieve its goals
            </p>
            <Button
              size="lg"
              variant="outline"
              className="bg-black text-white hover:bg-gray-900 text-lg px-8 py-6"
              onClick={() => {
                const event = new CustomEvent('openQuestionnaire');
                window.dispatchEvent(event);
              }}
            >
              Get Started Today <ArrowRight className="ml-2" />
            </Button>
          </div>
        </section>
      </FadeInSection>
    </div>
  );
}
