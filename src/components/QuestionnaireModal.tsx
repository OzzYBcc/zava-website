import { useState } from 'react';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from './ui/dialog';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { Textarea } from './ui/textarea';
import { RadioGroup, RadioGroupItem } from './ui/radio-group';
import { Checkbox } from './ui/checkbox';
import { Slider } from './ui/slider';
import { useToast } from '@/hooks/use-toast';
import { supabase } from '@/lib/supabase';

interface QuestionnaireModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export default function QuestionnaireModal({ open, onOpenChange }: QuestionnaireModalProps) {
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
    setTimeout(() => {
      setSubmitted(false);
      onOpenChange(false);
    }, 3000);
  };

  if (submitted) {
    return (
      <Dialog open={open} onOpenChange={onOpenChange}>
        <DialogContent className="max-w-md bg-[#f9f9f9] border-[#1a1a1a]/10">
          <DialogHeader>
            <DialogTitle className="font-serif text-2xl text-[#1a1a1a]">Thank You!</DialogTitle>
            <DialogDescription className="font-sans text-base text-[#1a1a1a]/70">
              We've received your enquiry and will be in touch within 24 hours.
            </DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    );
  }

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto bg-[#f9f9f9] border-[#1a1a1a]/10">
        <DialogHeader>
          <DialogTitle className="font-serif text-2xl text-[#1a1a1a]">Discovery Questionnaire</DialogTitle>
          <DialogDescription className="font-sans text-[#1a1a1a]/60">
            Help us understand your project requirements
          </DialogDescription>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-6 mt-4">
          <div className="space-y-2">
            <Label htmlFor="name" className="font-sans text-[#1a1a1a]">Full Name *</Label>
            <Input id="name" name="name" required className="bg-white border-[#1a1a1a]/20 text-[#1a1a1a]" />
          </div>

          <div className="space-y-2">
            <Label htmlFor="email" className="font-sans text-[#1a1a1a]">Email Address *</Label>
            <Input id="email" name="email" type="email" required className="bg-white border-[#1a1a1a]/20 text-[#1a1a1a]" />
          </div>

          <div className="space-y-2">
            <Label htmlFor="company" className="font-sans text-[#1a1a1a]">Company Name</Label>
            <Input id="company" name="company" className="bg-white border-[#1a1a1a]/20 text-[#1a1a1a]" />
          </div>

          <div className="space-y-2">
            <Label htmlFor="phone" className="font-sans text-[#1a1a1a]">Phone Number</Label>
            <Input id="phone" name="phone" type="tel" className="bg-white border-[#1a1a1a]/20 text-[#1a1a1a]" />
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

          <div className="space-y-4">
            <Label className="font-sans text-[#1a1a1a]">Estimated Budget Range: £{budget[0].toLocaleString()}</Label>
            <Slider
              min={1500}
              max={15000}
              step={500}
              value={budget}
              onValueChange={setBudget}
              className="[&_[role=slider]]:bg-[#1a1a1a] [&_[role=slider]]:border-[#1a1a1a]"
            />
            <div className="flex justify-between text-xs text-[#1a1a1a]/60 font-sans">
              <span>£1,500</span>
              <span>£15,000+</span>
            </div>
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

          <div className="flex gap-3 pt-4">
            <Button type="button" variant="outline" onClick={() => onOpenChange(false)} className="flex-1 border-[#1a1a1a]/20 text-[#1a1a1a] hover:bg-[#1a1a1a]/5">
              Cancel
            </Button>
            <Button type="submit" className="flex-1 bg-[#1a1a1a] text-[#f9f9f9] hover:bg-[#1a1a1a]/90">
              Submit Enquiry
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
}
