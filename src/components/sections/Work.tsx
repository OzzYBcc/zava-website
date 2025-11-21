import { motion } from 'framer-motion';
import { MoveRight } from 'lucide-react';

interface WorkItemProps {
  title: string;
  category: string;
  image: string;
  year: string;
  index: number;
}

function WorkItem({ title, category, image, year, index }: WorkItemProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.8, delay: index * 0.2 }}
      className="group cursor-pointer mb-16 md:mb-32"
    >
      <div className="overflow-hidden mb-6 relative aspect-[4/3] md:aspect-[16/9]">
        <motion.img
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          src={image}
          alt={title}
          className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
        />
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-500" />
      </div>
      <div className="flex justify-between items-baseline border-b border-[#1a1a1a]/10 pb-4 group-hover:border-[#1a1a1a] transition-colors duration-500">
        <div>
          <h3 className="font-serif text-3xl text-[#1a1a1a] mb-1 group-hover:translate-x-2 transition-transform duration-500">{title}</h3>
          <p className="font-sans text-sm text-[#8c8c8c] uppercase tracking-wider">{category}</p>
        </div>
        <span className="font-sans text-sm text-[#1a1a1a]">{year}</span>
      </div>
    </motion.div>
  );
}

export default function Work() {
  const projects = [
    { title: "SaaS Intelligence", category: "Web App / Dashboard", year: "2024", image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1200" },
    { title: "Modern Commerce", category: "Shopify / Strategy", year: "2023", image: "https://images.unsplash.com/photo-1600607686527-6fb886090705?auto=format&fit=crop&q=80&w=1200" },
    { title: "B2B Consult", category: "Identity / Performance", year: "2024", image: "https://images.unsplash.com/photo-1506097425191-7ad538b29cef?auto=format&fit=crop&q=80&w=1200" },
  ];

  return (
    <section id="work" className="px-6 md:px-12 lg:px-24 py-24 md:py-32 bg-[#f9f9f9]">
      <div className="flex justify-between items-end mb-24">
        <div className="max-w-xl">
          <h2 className="font-serif text-5xl text-[#1a1a1a] mb-4">Selected Works</h2>
          <p className="font-sans text-[#1a1a1a]/60">
            From startups to scale-ups. Real results: 35% sales lifts, 3x faster load times, and dashboards handling 50k+ users.
          </p>
        </div>
        <button className="hidden md:flex items-center gap-2 text-sm uppercase tracking-widest hover:gap-4 transition-all duration-300">
          View All <MoveRight size={16} />
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-12">
        {projects.map((project, index) => (
          <div key={index} className={index % 2 !== 0 ? "md:pt-32" : ""}>
             <WorkItem {...project} index={index} />
          </div>
        ))}
      </div>
    </section>
  );
}
