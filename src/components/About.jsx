import { motion } from "framer-motion";

export default function About() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 1, ease: [0.22, 1, 0.36, 1] } }
  };

  return (
    <section id="about" className="relative py-32 bg-[#0a0a0a]">
      <motion.div 
        className="container mx-auto px-6 grid md:grid-cols-2 gap-16 md:gap-24 items-start"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
      >
        <div className="space-y-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
          >
            <span className="tag mb-6 block">Philosophy</span>
            <h2 className="text-white leading-tight">
              Roshinth Sojan: <span className="italic">Visionary Architect</span> <br /> 
              of Digital Legacies.
            </h2>
          </motion.div>
          
          <motion.div 
            className="space-y-8 text-xl text-white/50 font-light leading-relaxed"
            variants={itemVariants}
          >
            <p>
              Roshinth Sojan oversees <span className="text-white">Kanniyakumarione</span> with a CEO mindset: 
              merging high-impact product strategy, immersive storytelling, and 
              disciplined delivery rhythms for the next wave of online experiences.
            </p>
            <p className="text-lg">
              Every initiative begins with a founder-level briefing, then flows 
              into engineered experience systems so teams can move fast without 
              losing polish or vision.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-12 lg:gap-16">
          {[
            { tag: "Core Focus", title: "Experience Systems", desc: "Engineering scalable design languages that drive user interaction and growth." },
            { tag: "Rhythm", title: "Sprint Discipline", desc: "Maintaining high-velocity execution through weekly notes and rigorous insights." },
            { tag: "Commitment", title: "High-Trust Labs", desc: "Building enduring partnerships through radical transparency and collaboration." },
            { tag: "Impact", title: "Measurable Wins", desc: "Benchmarked against founder-level KPIs to ensure sustained market momentum." }
          ].map((item, i) => (
            <motion.div 
              key={item.title}
              variants={itemVariants}
              className="space-y-6 pt-12 border-t border-white/5 group"
            >
              <p className="text-[10px] uppercase tracking-[0.4em] text-[#d4af37] opacity-60 group-hover:opacity-100 transition-opacity">
                {item.tag}
              </p>
              <h4 className="text-2xl font-serif text-white">{item.title}</h4>
              <p className="text-sm text-white/40 leading-relaxed font-light">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
