import FadeInSection from '@/components/FadeInSection';
import { Users, Target, Award } from 'lucide-react';

export default function About() {
  return (
    <div className="w-full">
      <section className="py-24 bg-black">
        <div className="container mx-auto px-4 lg:px-8">
          <FadeInSection>
            <div className="max-w-4xl mx-auto text-center mb-16">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-white">
                Building Digital Excellence
              </h1>
              <p className="text-lg md:text-xl text-gray-400">
                We're a team of designers, developers, and strategists committed to creating digital experiences that drive real business results.
              </p>
            </div>
          </FadeInSection>

          <FadeInSection>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-24">
              <div>
                <img
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&q=80"
                  alt="Team collaboration"
                  className="w-full h-96 object-cover rounded-lg"
                  loading="lazy"
                />
              </div>
              <div>
                <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">Our Story</h2>
                <p className="text-gray-400 mb-4">
                  Founded with a vision to bridge the gap between beautiful design and powerful functionality, ZAVA has grown into a trusted partner for businesses looking to make their mark online.
                </p>
                <p className="text-gray-400 mb-4">
                  We believe that every business deserves a digital presence that truly represents their brand and drives growth. That's why we combine strategic thinking with technical excellence to deliver solutions that work.
                </p>
                <p className="text-gray-400">
                  Our approach is collaborative, transparent, and focused on your success. We're not just building websites – we're building partnerships.
                </p>
              </div>
            </div>
          </FadeInSection>

          <FadeInSection>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-24">
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-20 h-20 bg-white text-black rounded-full mb-6">
                  <Users size={40} />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-white">Client-Focused</h3>
                <p className="text-gray-400">
                  Your success is our success. We listen, understand, and deliver solutions tailored to your unique needs.
                </p>
              </div>

              <div className="text-center">
                <div className="inline-flex items-center justify-center w-20 h-20 bg-white text-black rounded-full mb-6">
                  <Target size={40} />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-white">Results-Driven</h3>
                <p className="text-gray-400">
                  Every decision is guided by data and focused on achieving measurable business outcomes.
                </p>
              </div>

              <div className="text-center">
                <div className="inline-flex items-center justify-center w-20 h-20 bg-white text-black rounded-full mb-6">
                  <Award size={40} />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-white">Quality First</h3>
                <p className="text-gray-400">
                  We never compromise on quality. From design to deployment, excellence is our standard.
                </p>
              </div>
            </div>
          </FadeInSection>

          <FadeInSection>
            <div className="bg-gray-950 rounded-lg p-12 text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">Our Values</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-5xl mx-auto">
                <div>
                  <h3 className="text-xl font-bold mb-2 text-white">Integrity</h3>
                  <p className="text-gray-400 text-sm">Honest, transparent communication in every interaction</p>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2 text-white">Innovation</h3>
                  <p className="text-gray-400 text-sm">Staying ahead with cutting-edge solutions</p>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2 text-white">Collaboration</h3>
                  <p className="text-gray-400 text-sm">Working together as true partners</p>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2 text-white">Excellence</h3>
                  <p className="text-gray-400 text-sm">Delivering exceptional quality every time</p>
                </div>
              </div>
            </div>
          </FadeInSection>
        </div>
      </section>
    </div>
  );
}
