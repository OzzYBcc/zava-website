import { motion } from 'framer-motion';

export default function Agency() {
  return (
    <section id="agency" className="px-6 md:px-12 lg:px-24 py-24 md:py-32 bg-[#f9f9f9]">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
        <div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-serif text-5xl text-[#1a1a1a] mb-8"
          >
            In-House Execution.<br />Zero Handoffs.
          </motion.h2>
          <div className="space-y-6 text-[#1a1a1a]/70 font-sans leading-relaxed text-lg">
            <p>
              We founded Zava to close the gap between "generic template" and "bloated agency."
              We are a lean, specialized team of developers and designers who build digital assets
              that compound with your business.
            </p>
            <p>
              Every line of code and every design decision is handled by us. No freelancers.
              No broken telephone games. Just clarity, control, and accountability.
            </p>
          </div>

          <div className="mt-12 flex gap-12">
            <div>
              <h4 className="font-serif text-xl text-[#1a1a1a]">Christopher Bell</h4>
              <p className="text-sm uppercase tracking-widest text-[#8c8c8c] mt-1">Co-Founder / CEO</p>
            </div>
            <div>
              <h4 className="font-serif text-xl text-[#1a1a1a]">Aristomenis Georgiou</h4>
              <p className="text-sm uppercase tracking-widest text-[#8c8c8c] mt-1">Co-Founder / COO</p>
            </div>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative h-[600px] w-full overflow-hidden bg-[#e5e5e5]"
        >
           <img
             src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=1200"
             alt="Zava Architecture"
             style={{ transitionDuration: '1500ms' }}
             className="object-cover w-full h-full opacity-80 hover:scale-105 transition-transform"
           />
        </motion.div>
      </div>
    </section>
  );
}
