import Hero from '@/components/sections/Hero';
import Services from '@/components/sections/Services';
import Agency from '@/components/sections/Agency';
import Work from '@/components/sections/Work';

export default function Home() {
  return (
    <div className="w-full">
      <Hero />
      <Services />
      <Work />
      <Agency />
    </div>
  );
}
