import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

interface ServiceItemProps {
  number: string;
  title: string;
  description: string;
}

function ServiceItem({ number, title, description }: ServiceItemProps) {
  return (
    <motion.div
      initial={{ opacity: 0, borderBottomColor: "rgba(26,26,26,0.1)" }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="group flex flex-col md:flex-row border-t border-[#1a1a1a]/10 py-12 hover:bg-[#1a1a1a] hover:text-[#f9f9f9] hover:px-6 transition-all duration-500 cursor-default"
    >
      <span className="font-mono text-sm opacity-50 mb-4 md:mb-0 md:w-1/4">{number}</span>
      <div className="md:w-1/2">
        <h3 className="font-serif text-3xl md:text-4xl mb-4">{title}</h3>
      </div>
      <div className="md:w-1/4 flex items-start justify-between md:justify-end">
         <p className="font-sans text-sm leading-relaxed opacity-70 max-w-xs group-hover:opacity-90">
           {description}
         </p>
         <ArrowUpRight className="opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-500 ml-4" size={24} />
      </div>
    </motion.div>
  );
}

export default function Services() {
  const services = [
    { number: "01", title: "Custom Development", description: "Tailored websites and web apps built from scratch. Mobile-first, responsive, and designed to convert." },
    { number: "02", title: "Web Applications", description: "Secure, full-stack systems. From SaaS dashboards to internal tools, built with clean scalable architecture." },
    { number: "03", title: "E-Commerce & Shopify", description: "High-converting stores with custom themes or headless architecture. Ultra-fast checkout flows." },
    { number: "04", title: "Performance & SEO", description: "Core Web Vitals optimization, technical SEO, and enterprise-grade security monitoring." },
  ];

  return (
    <section id="services" className="px-6 md:px-12 lg:px-24 py-24 md:py-32 bg-[#f9f9f9]">
      <div className="mb-24 max-w-2xl">
        <h2 className="font-serif text-5xl text-[#1a1a1a] mb-6">Our Expertise</h2>
        <p className="font-sans text-[#1a1a1a]/60 text-lg">
          Most agencies cut corners or outsource. We obsess over code quality. Speed isn't optional; it's revenue.
        </p>
      </div>
      <div className="border-b border-[#1a1a1a]/10">
        {services.map((s, i) => (
          <ServiceItem key={i} {...s} />
        ))}
      </div>
    </section>
  );
}
