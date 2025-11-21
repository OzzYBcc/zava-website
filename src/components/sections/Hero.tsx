import { motion } from 'framer-motion';
import AnimatedText from '@/components/ui/AnimatedText';

export default function Hero() {
  return (
    <section className="min-h-screen flex flex-col justify-center px-6 md:px-12 lg:px-24 pt-32 pb-12 bg-[#f9f9f9]">
      <div className="max-w-6xl">
        <AnimatedText
          text="High-Performance Digital Assets Built for Growth."
          className="font-serif text-5xl md:text-7xl lg:text-8xl lg:leading-[1.1] text-[#1a1a1a] mb-12"
        />

        <div className="flex flex-col md:flex-row md:items-end justify-between gap-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.8 }}
            className="max-w-md font-sans text-[#1a1a1a]/70 text-lg leading-relaxed"
          >
            We build custom websites and web apps engineered for speed, security, and scale. No templates. No outsourcing. Just tailored solutions launched in 2–4 weeks.
          </motion.div>

          <motion.div
             initial={{ scaleX: 0 }}
             whileInView={{ scaleX: 1 }}
             viewport={{ once: true }}
             transition={{ delay: 1, duration: 1, ease: "circOut" }}
             className="w-full md:w-auto border-t border-[#1a1a1a] pt-4 origin-left"
          >
             <span className="font-sans text-xs uppercase tracking-widest">Middlesbrough &mdash; United Kingdom</span>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
