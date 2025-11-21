import { useState } from 'react';
import { motion } from 'framer-motion';
import FadeInSection from '@/components/FadeInSection';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Checkbox } from '@/components/ui/checkbox';
import { useToast } from '@/hooks/use-toast';
import { supabase } from '@/lib/supabase';
import { Mail, Phone, MapPin } from 'lucide-react';

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);

    const data = {
      name: formData.get('name') as string,
      email: formData.get('email') as string,
      company: formData.get('company') as string || null,
      phone: formData.get('phone') as string || null,
      project_type: formData.get('projectType') as string,
      description: formData.get('description') as string,
      branding: formData.get('branding') as string,
      timeline: formData.get('timeline') as string,
      competitors: formData.get('competitors') as string || null,
      website_references: formData.get('references') as string || null,
      additional: formData.get('additional') as string || null,
      requires_maintenance: formData.get('maintenance') === 'on',
      requires_seo: formData.get('seo') === 'on',
      communication_preference: formData.get('communication') as string,
    };

    const { error } = await supabase
      .from('form_submissions')
      .insert([data]);

    if (error) {
      toast({
        title: 'Error',
        description: 'Failed to submit form. Please try again.',
        variant: 'destructive',
      });
      return;
    }

    toast({
      title: 'Thank you!',
      description: 'We\'ve received your enquiry and will be in touch within 24 hours.',
    });

    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="w-full min-h-screen flex items-center justify-center bg-[#f9f9f9]">
        <div className="max-w-2xl mx-auto text-center px-6">
          <h1 className="font-serif text-5xl md:text-6xl text-[#1a1a1a] mb-6">Thank You!</h1>
          <p className="font-sans text-xl text-[#1a1a1a]/70 mb-8">
            We've received your enquiry and will be in touch within 24 hours.
          </p>
          <Button
            onClick={() => window.location.href = '/'}
            className="bg-[#1a1a1a] text-[#f9f9f9] hover:bg-[#1a1a1a]/90 px-8 py-6"
          >
            Return to Home
          </Button>
        </div>
      </div>
    );
  }

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
            Let's Build Something Great
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="font-sans text-lg md:text-xl text-[#1a1a1a]/70 max-w-3xl mx-auto leading-relaxed"
          >
            Tell us about your project and we'll get back to you within 24 hours
          </motion.p>
        </div>
      </section>

      <FadeInSection>
        <section className="px-6 md:px-12 lg:px-24 py-12 bg-[#f9f9f9]">
          <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <div className="text-center border border-[#1a1a1a]/10 p-8">
              <div className="inline-flex items-center justify-center w-16 h-16 border-2 border-[#1a1a1a] mb-4">
                <Mail size={28} className="text-[#1a1a1a]" />
              </div>
              <h3 className="font-serif text-xl text-[#1a1a1a] mb-2">Email</h3>
              <p className="font-sans text-[#1a1a1a]/70">info@zavabuild.com</p>
            </div>

            <div className="text-center border border-[#1a1a1a]/10 p-8">
              <div className="inline-flex items-center justify-center w-16 h-16 border-2 border-[#1a1a1a] mb-4">
                <Phone size={28} className="text-[#1a1a1a]" />
              </div>
              <h3 className="font-serif text-xl text-[#1a1a1a] mb-2">Phone</h3>
              <p className="font-sans text-[#1a1a1a]/70">+44 78 4082 7694</p>
            </div>

            <div className="text-center border border-[#1a1a1a]/10 p-8">
              <div className="inline-flex items-center justify-center w-16 h-16 border-2 border-[#1a1a1a] mb-4">
                <MapPin size={28} className="text-[#1a1a1a]" />
              </div>
              <h3 className="font-serif text-xl text-[#1a1a1a] mb-2">Location</h3>
              <p className="font-sans text-[#1a1a1a]/70">Middlesbrough, UK</p>
            </div>
          </div>
        </section>
      </FadeInSection>

      <FadeInSection>
        <section className="px-6 md:px-12 lg:px-24 py-24 bg-[#f5f5f5]">
          <div className="max-w-4xl mx-auto">
            <div className="mb-12">
              <h2 className="font-serif text-3xl md:text-4xl text-[#1a1a1a] mb-4">Discovery Questionnaire</h2>
              <p className="font-sans text-[#1a1a1a]/60">Help us understand your project requirements</p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="name" className="font-sans text-[#1a1a1a]">Full Name *</Label>
                  <Input id="name" name="name" required className="bg-white border-[#1a1a1a]/20 text-[#1a1a1a]" />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email" className="font-sans text-[#1a1a1a]">Email Address *</Label>
                  <Input id="email" name="email" type="email" required className="bg-white border-[#1a1a1a]/20 text-[#1a1a1a]" />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="company" className="font-sans text-[#1a1a1a]">Company Name</Label>
                  <Input id="company" name="company" className="bg-white border-[#1a1a1a]/20 text-[#1a1a1a]" />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="phone" className="font-sans text-[#1a1a1a]">Phone Number</Label>
                  <Input id="phone" name="phone" type="tel" className="bg-white border-[#1a1a1a]/20 text-[#1a1a1a]" />
                </div>
              </div>

              <div className="space-y-3">
                <Label className="font-sans text-[#1a1a1a]">What type of project do you need? *</Label>
                <RadioGroup name="projectType" required>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="website" id="website" className="border-[#1a1a1a]/30" />
                    <Label htmlFor="website" className="font-sans font-normal text-[#1a1a1a]/80">New Website</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="redesign" id="redesign" className="border-[#1a1a1a]/30" />
                    <Label htmlFor="redesign" className="font-sans font-normal text-[#1a1a1a]/80">Website Redesign</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="webapp" id="webapp" className="border-[#1a1a1a]/30" />
                    <Label htmlFor="webapp" className="font-sans font-normal text-[#1a1a1a]/80">Web Application</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="ecommerce" id="ecommerce" className="border-[#1a1a1a]/30" />
                    <Label htmlFor="ecommerce" className="font-sans font-normal text-[#1a1a1a]/80">E-commerce Platform</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="other" id="other" className="border-[#1a1a1a]/30" />
                    <Label htmlFor="other" className="font-sans font-normal text-[#1a1a1a]/80">Other</Label>
                  </div>
                </RadioGroup>
              </div>

              <div className="space-y-2">
                <Label htmlFor="description" className="font-sans text-[#1a1a1a]">Project Description *</Label>
                <Textarea
                  id="description"
                  name="description"
                  placeholder="Tell us about your project goals, target audience, and key requirements..."
                  rows={4}
                  required
                  className="bg-white border-[#1a1a1a]/20 text-[#1a1a1a]"
                />
              </div>

              <div className="space-y-3">
                <Label className="font-sans text-[#1a1a1a]">Do you have existing branding? *</Label>
                <RadioGroup name="branding" required>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="yes" id="branding-yes" className="border-[#1a1a1a]/30" />
                    <Label htmlFor="branding-yes" className="font-sans font-normal text-[#1a1a1a]/80">Yes, comprehensive brand guidelines</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="partial" id="branding-partial" className="border-[#1a1a1a]/30" />
                    <Label htmlFor="branding-partial" className="font-sans font-normal text-[#1a1a1a]/80">Partial (logo only)</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="no" id="branding-no" className="border-[#1a1a1a]/30" />
                    <Label htmlFor="branding-no" className="font-sans font-normal text-[#1a1a1a]/80">No, need branding services</Label>
                  </div>
                </RadioGroup>
              </div>

              <div className="space-y-3">
                <Label className="font-sans text-[#1a1a1a]">What is your timeline? *</Label>
                <RadioGroup name="timeline" required>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="urgent" id="urgent" className="border-[#1a1a1a]/30" />
                    <Label htmlFor="urgent" className="font-sans font-normal text-[#1a1a1a]/80">Urgent (1-2 weeks)</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="standard" id="standard" className="border-[#1a1a1a]/30" />
                    <Label htmlFor="standard" className="font-sans font-normal text-[#1a1a1a]/80">Standard (4-6 weeks)</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="flexible" id="flexible" className="border-[#1a1a1a]/30" />
                    <Label htmlFor="flexible" className="font-sans font-normal text-[#1a1a1a]/80">Flexible (8+ weeks)</Label>
                  </div>
                </RadioGroup>
              </div>

              <div className="space-y-2">
                <Label htmlFor="competitors" className="font-sans text-[#1a1a1a]">Who are your main competitors?</Label>
                <Input id="competitors" name="competitors" placeholder="e.g., competitor1.com, competitor2.com" className="bg-white border-[#1a1a1a]/20 text-[#1a1a1a]" />
              </div>

              <div className="space-y-2">
                <Label htmlFor="references" className="font-sans text-[#1a1a1a]">Website references you admire</Label>
                <Input id="references" name="references" placeholder="e.g., example1.com, example2.com" className="bg-white border-[#1a1a1a]/20 text-[#1a1a1a]" />
              </div>

              <div className="space-y-2">
                <Label htmlFor="additional" className="font-sans text-[#1a1a1a]">Additional Information</Label>
                <Textarea
                  id="additional"
                  name="additional"
                  placeholder="Anything else you'd like us to know?"
                  rows={3}
                  className="bg-white border-[#1a1a1a]/20 text-[#1a1a1a]"
                />
              </div>

              <div className="space-y-3">
                <Label className="font-sans text-[#1a1a1a]">Additional Services</Label>
                <div className="flex items-center space-x-2">
                  <Checkbox id="maintenance" name="maintenance" className="border-[#1a1a1a]/30" />
                  <Label htmlFor="maintenance" className="font-sans font-normal text-[#1a1a1a]/80">I require ongoing maintenance</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox id="seo" name="seo" className="border-[#1a1a1a]/30" />
                  <Label htmlFor="seo" className="font-sans font-normal text-[#1a1a1a]/80">I require SEO services</Label>
                </div>
              </div>

              <div className="space-y-3">
                <Label className="font-sans text-[#1a1a1a]">Preferred Method of Communication *</Label>
                <RadioGroup name="communication" required>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="email" id="comm-email" className="border-[#1a1a1a]/30" />
                    <Label htmlFor="comm-email" className="font-sans font-normal text-[#1a1a1a]/80">Email</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="phone" id="comm-phone" className="border-[#1a1a1a]/30" />
                    <Label htmlFor="comm-phone" className="font-sans font-normal text-[#1a1a1a]/80">Phone</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="whatsapp" id="comm-whatsapp" className="border-[#1a1a1a]/30" />
                    <Label htmlFor="comm-whatsapp" className="font-sans font-normal text-[#1a1a1a]/80">WhatsApp</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="any" id="comm-any" className="border-[#1a1a1a]/30" />
                    <Label htmlFor="comm-any" className="font-sans font-normal text-[#1a1a1a]/80">Any method</Label>
                  </div>
                </RadioGroup>
              </div>

              <Button type="submit" className="w-full bg-[#1a1a1a] text-[#f9f9f9] hover:bg-[#1a1a1a]/90 py-6 text-lg font-sans">
                Submit Enquiry
              </Button>
            </form>
          </div>
        </section>
      </FadeInSection>
    </div>
  );
}
