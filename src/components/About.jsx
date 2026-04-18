import { motion } from "framer-motion";

export default function About() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.2, 1, 0.3, 1] } }
  };

  return (
    <section id="about" className="relative py-24 md:py-32 overflow-hidden">
      {/* Decorative Blur - Scaled for screens */}
      <div className="absolute top-0 right-0 w-[300px] md:w-[500px] h-[300px] md:h-[500px] bg-[#d4af37]/5 blur-[80px] md:blur-[120px] rounded-full translate-y-[-20%] translate-x-[20%] pointer-events-none" />

      <motion.div 
        className="container mx-auto px-6 flex flex-col lg:grid lg:grid-cols-[0.9fr,1.1fr] gap-16 md:gap-24 items-start"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
      >
        <div className="space-y-8 md:space-y-12 lg:sticky lg:top-32">
          <motion.div variants={itemVariants}>
            <span className="tag mb-6 md:mb-8">Philosophy</span>
            <h2 className="premium-gradient-text text-balance">
              Architect of <span className="italic text-[#d4af37]">Digital Legacies</span> <br className="hidden md:block"/> & Global Systems.
            </h2>
          </motion.div>
          
          <motion.div variants={itemVariants} className="space-y-6 md:space-y-8 text-lg md:text-xl text-white/50 font-light leading-relaxed text-balance">
            <p>
              I oversee <span className="text-white font-medium">Kanniyakumarione</span> as a dedicated architect of trust, 
              merging high-impact product strategy, immersive storytelling, and disciplined delivery cycles.
            </p>
            <p className="text-base md:text-lg">
              Every initiative begins with a deep strategic briefing, evolving into engineered experience systems that 
              enable ventures to scale rapidly without compromising vision or precision.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-10 md:gap-x-12 gap-y-12 md:gap-y-16 w-full">
          {[
            { tag: "01 // Strategy", title: "Experience Systems", desc: "Engineering scalable design languages that drive interaction and consistent user growth." },
            { tag: "02 // Execution", title: "Radical Discipline", desc: "Maintaining high-velocity execution through rigorous insight cycles and proven rhythms." },
            { tag: "03 // Values", title: "High-Trust Labs", desc: "Building enduring digital assets through transparency and unwavering commitment to quality." },
            { tag: "04 // Impact", title: "Executive KPIs", desc: "Measuring success against mission-critical metrics to ensure sustained global momentum." }
          ].map((item, i) => (
            <motion.div 
              key={item.title}
              variants={itemVariants}
              className="group space-y-4 md:space-y-6 pt-8 md:pt-10 border-t border-white/5"
            >
              <p className="text-[8px] md:text-[9px] uppercase tracking-[0.3em] md:tracking-[0.4em] text-[#d4af37]/60 group-hover:text-[#d4af37] transition-colors">
                {item.tag}
              </p>
              <h4 className="text-xl md:text-2xl text-white group-hover:text-[#d4af37] transition-colors duration-500">{item.title}</h4>
              <p className="text-xs md:text-sm text-white/40 leading-relaxed font-light">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}


