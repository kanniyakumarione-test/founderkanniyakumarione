import { motion } from "framer-motion";

const highImpactWork = [
  {
    title: "Kanniyakumarione.com",
    role: "CEO & Founder",
    url: "https://www.kanniyakumarione.com/",
    description: "The central hub for global digital ventures, fostering innovation and multi-industry growth.",
    outcome: "Unified ecosystem for diverse vision-led startups and digital laboratories."
  },
  {
    title: "Services Lab",
    role: "Strategic Architect",
    url: "https://services.kanniyakumarione.com/",
    description: "Specialized service division focused on architecting digital product strategy and scalable delivery labs.",
    outcome: "Accelerated venture lifecycle through engineered high-trust systems."
  },
  {
    title: "Heritage Initiative",
    role: "Cultural Strategist",
    url: "https://tamilbible.kanniyakumarione.com/",
    description: "A community-first digital platform dedicated to cultural heritage preservation and digital bible accessibility.",
    outcome: "Created a globally accessible portal for immersive spiritual and linguistic study."
  }
];

export default function Projects() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.1 }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 1.2, ease: [0.22, 1, 0.36, 1] } }
  };

  return (
    <section id="projects" className="py-32 bg-[#050505]">
      <div className="container mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="mb-32 flex flex-wrap items-end justify-between gap-12"
        >
          <div className="max-w-3xl space-y-6 md:space-y-8">
            <span className="tag block">Portfolio of Ventures</span>
            <h2 className="text-white tracking-tight">
              A Proven Record of <span className="italic text-[#d4af37]">High-Performance</span> <br /> 
              Initiatives.
            </h2>
          </div>
          <p className="text-white/30 text-lg max-w-sm font-light leading-relaxed">
            Every venture is a commitment to radical excellence and measurable impact 
            within global markets.
          </p>
        </motion.div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 md:gap-16 lg:gap-20"
        >
          {highImpactWork.map((project, index) => (
            <motion.div 
              key={project.title}
              variants={cardVariants}
              whileHover={{ y: -10, transition: { duration: 0.4 } }}
              className="flex flex-col h-full border-t border-white/5 pt-12 group relative"
            >
              <p className="text-[10px] uppercase tracking-[0.4em] text-[#d4af37] mb-6 opacity-60 group-hover:opacity-100 transition-opacity">
                {project.role}
              </p>
              
              <a 
                href={project.url} 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-block mb-8"
              >
                <h3 className="text-white transition-colors group-hover:text-[#d4af37]">
                  {project.title}
                </h3>
              </a>

              <p className="text-white/40 font-light leading-relaxed mb-12 flex-grow text-lg">
                {project.description}
              </p>
              
              <a 
                href={project.url} 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-[10px] uppercase tracking-[0.5em] text-[#d4af37]/60 group-hover:text-[#d4af37] mb-12 transition-all flex items-center gap-4"
              >
                Launch Initiative <span className="h-[1px] w-8 bg-[#d4af37]/30 transition-all group-hover:w-16" />
              </a>

              <div className="p-8 bg-[#0a0a0a] border border-white/5 space-y-4 mt-auto group-hover:border-[#d4af37]/10 transition-colors">
                <p className="text-[9px] uppercase tracking-[0.3em] text-white/20 font-mono">Strategic Outcome</p>
                <p className="text-lg italic font-serif text-white/70 leading-snug group-hover:text-white transition-colors">
                  "{project.outcome}"
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
