import { useState } from 'react';
import { Input } from './ui/input';
import { Button } from './ui/button';
import { useToast } from '@/hooks/use-toast';

export default function NewsletterSignup() {
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    setTimeout(() => {
      toast({
        title: 'Success!',
        description: 'Thank you for subscribing to our newsletter.',
      });
      setEmail('');
      setLoading(false);
    }, 1000);
  };

  return (
    <form onSubmit={handleSubmit} className="flex gap-2">
      <Input
        type="email"
        placeholder="Enter your email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
        className="bg-white text-black"
      />
      <Button type="submit" disabled={loading} variant="outline" className="bg-white text-black hover:bg-gray-100">
        {loading ? 'Sending...' : 'Subscribe'}
      </Button>
    </form>
  );
}
