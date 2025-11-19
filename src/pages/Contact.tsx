import { useState } from 'react';
import FadeInSection from '@/components/FadeInSection';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Checkbox } from '@/components/ui/checkbox';
import { Slider } from '@/components/ui/slider';
import { useToast } from '@/hooks/use-toast';
import { supabase } from '@/lib/supabase';
import { Mail, Phone, MapPin } from 'lucide-react';

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [budget, setBudget] = useState([5000]);
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
      budget: budget[0],
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
      <div className="w-full min-h-screen flex items-center justify-center bg-background transition-colors duration-300">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-2xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">Thank You!</h1>
            <p className="text-xl text-muted-foreground mb-8">
              We've received your enquiry and will be in touch within 24 hours.
            </p>
            <Button onClick={() => window.location.href = '/'} className="bg-primary text-primary-foreground hover:opacity-90">
              Return to Home
            </Button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full">
      <section className="py-24 bg-background transition-colors duration-300">
        <div className="container mx-auto px-4 lg:px-8">
          <FadeInSection>
            <div className="max-w-4xl mx-auto text-center mb-16">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-foreground">
                Let's Build Something Great
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground">
                Tell us about your project and we'll get back to you within 24 hours
              </p>
            </div>
          </FadeInSection>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-16">
            <FadeInSection>
              <Card>
                <CardHeader className="text-center">
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-primary text-primary-foreground rounded-full mb-4 mx-auto">
                    <Mail size={24} />
                  </div>
                  <CardTitle>Email</CardTitle>
                  <CardDescription>info@zavabuild.com</CardDescription>
                </CardHeader>
              </Card>
            </FadeInSection>

            <FadeInSection>
              <Card>
                <CardHeader className="text-center">
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-primary text-primary-foreground rounded-full mb-4 mx-auto">
                    <Phone size={24} />
                  </div>
                  <CardTitle>Phone</CardTitle>
                  <CardDescription>+44 078 4082 7694</CardDescription>
                </CardHeader>
              </Card>
            </FadeInSection>

            <FadeInSection>
              <Card>
                <CardHeader className="text-center">
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-primary text-primary-foreground rounded-full mb-4 mx-auto">
                    <MapPin size={24} />
                  </div>
                  <CardTitle>Location</CardTitle>
                  <CardDescription>Middlesbrough, United Kingdom</CardDescription>
                </CardHeader>
              </Card>
            </FadeInSection>
          </div>

          <FadeInSection>
            <Card className="max-w-4xl mx-auto">
              <CardHeader>
                <CardTitle className="text-2xl">Discovery Questionnaire</CardTitle>
                <CardDescription>Help us understand your project requirements</CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="name">Full Name *</Label>
                      <Input id="name" name="name" required />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="email">Email Address *</Label>
                      <Input id="email" name="email" type="email" required />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="company">Company Name</Label>
                      <Input id="company" name="company" />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone Number</Label>
                      <Input id="phone" name="phone" type="tel" />
                    </div>
                  </div>

                  <div className="space-y-3">
                    <Label>What type of project do you need? *</Label>
                    <RadioGroup name="projectType" required>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="website" id="website" />
                        <Label htmlFor="website" className="font-normal">New Website</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="redesign" id="redesign" />
                        <Label htmlFor="redesign" className="font-normal">Website Redesign</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="webapp" id="webapp" />
                        <Label htmlFor="webapp" className="font-normal">Web Application</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="ecommerce" id="ecommerce" />
                        <Label htmlFor="ecommerce" className="font-normal">E-commerce Platform</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="other" id="other" />
                        <Label htmlFor="other" className="font-normal">Other</Label>
                      </div>
                    </RadioGroup>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="description">Project Description *</Label>
                    <Textarea
                      id="description"
                      name="description"
                      placeholder="Tell us about your project goals, target audience, and key requirements..."
                      rows={4}
                      required
                    />
                  </div>

                  <div className="space-y-3">
                    <Label>Do you have existing branding? *</Label>
                    <RadioGroup name="branding" required>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="yes" id="branding-yes" />
                        <Label htmlFor="branding-yes" className="font-normal">Yes, comprehensive brand guidelines</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="partial" id="branding-partial" />
                        <Label htmlFor="branding-partial" className="font-normal">Partial (logo only)</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="no" id="branding-no" />
                        <Label htmlFor="branding-no" className="font-normal">No, need branding services</Label>
                      </div>
                    </RadioGroup>
                  </div>

                  <div className="space-y-3">
                    <Label>What is your timeline? *</Label>
                    <RadioGroup name="timeline" required>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="urgent" id="urgent" />
                        <Label htmlFor="urgent" className="font-normal">Urgent (1-2 weeks)</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="standard" id="standard" />
                        <Label htmlFor="standard" className="font-normal">Standard (4-6 weeks)</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="flexible" id="flexible" />
                        <Label htmlFor="flexible" className="font-normal">Flexible (8+ weeks)</Label>
                      </div>
                    </RadioGroup>
                  </div>

                  <div className="space-y-4">
                    <Label>Estimated Budget Range: £{budget[0].toLocaleString()}</Label>
                    <Slider
                      min={1500}
                      max={15000}
                      step={500}
                      value={budget}
                      onValueChange={setBudget}
                    />
                    <div className="flex justify-between text-xs text-muted-foreground">
                      <span>£1,500</span>
                      <span>£15,000+</span>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="competitors">Who are your main competitors?</Label>
                    <Input id="competitors" name="competitors" placeholder="e.g., competitor1.com, competitor2.com" />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="references">Website references you admire</Label>
                    <Input id="references" name="references" placeholder="e.g., example1.com, example2.com" />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="additional">Additional Information</Label>
                    <Textarea
                      id="additional"
                      name="additional"
                      placeholder="Anything else you'd like us to know?"
                      rows={3}
                    />
                  </div>

                  <div className="space-y-3">
                    <Label>Additional Services</Label>
                    <div className="flex items-center space-x-2">
                      <Checkbox id="maintenance" name="maintenance" />
                      <Label htmlFor="maintenance" className="font-normal">I require ongoing maintenance</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox id="seo" name="seo" />
                      <Label htmlFor="seo" className="font-normal">I require SEO services</Label>
                    </div>
                  </div>

                  <div className="space-y-3">
                    <Label>Preferred Method of Communication *</Label>
                    <RadioGroup name="communication" required>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="email" id="comm-email" />
                        <Label htmlFor="comm-email" className="font-normal">Email</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="phone" id="comm-phone" />
                        <Label htmlFor="comm-phone" className="font-normal">Phone</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="whatsapp" id="comm-whatsapp" />
                        <Label htmlFor="comm-whatsapp" className="font-normal">WhatsApp</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="any" id="comm-any" />
                        <Label htmlFor="comm-any" className="font-normal">Any method</Label>
                      </div>
                    </RadioGroup>
                  </div>

                  <Button type="submit" className="w-full bg-primary text-primary-foreground hover:opacity-90 text-lg py-6">
                    Submit Enquiry
                  </Button>
                </form>
              </CardContent>
            </Card>
          </FadeInSection>
        </div>
      </section>
    </div>
  );
}
