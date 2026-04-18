import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const highImpactWork = [
  {
    title: "Global Venture Ecosystem",
    role: "Founding Architect",
    url: "https://www.kanniyakumarione.com/",
    description: "The primary nexus for global digital innovation, facilitating multi-sector venture scaling and strategic ecosystem growth.",
    outcome: "Orchestrated a unified infrastructure for next-gen ventures."
  },
  {
    title: "Strategic Delivery Lab",
    role: "Principal Strategist",
    url: "https://services.kanniyakumarione.com/",
    description: "A specialized high-performance laboratory focused on architecting digital product lifecycle systems and mission-critical delivery.",
    outcome: "Engineered scalable frameworks for radical market agility."
  },
  {
    title: "Cultural Preservation Portal",
    role: "Heritage Strategist",
    url: "https://tamilbible.kanniyakumarione.com/",
    description: "A community-focused digital platform dedicated to linguistic heritage preservation and immersive spiritual accessibility.",
    outcome: "Pioneered a globally accessible repository for cultural study."
  }
];

export default function Projects() {
  return (
    <section id="projects" className="py-24 md:py-32">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 md:gap-12 mb-16 md:mb-32">
          <div className="max-w-3xl space-y-6 md:space-y-8">
            <span className="tag shadow-sm">Strategic Portfolio</span>
            <h2 className="premium-gradient-text">
              Selected <span className="italic text-[#d4af37]">Initiatives</span> <br className="hidden md:block" /> 
              & Global Ventures.
            </h2>
          </div>
          <p className="text-white/40 text-base md:text-lg max-w-sm font-light leading-relaxed">
            A curation of high-impact ventures defined by architectural excellence and precise market execution.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
          {highImpactWork.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="group glass-panel flex flex-col p-8 md:p-10 h-full relative overflow-hidden"
            >
              <div className="flex justify-between items-start mb-10 md:mb-12">
                <span className="text-[9px] md:text-[10px] uppercase tracking-[0.3em] md:tracking-[0.4em] text-white/30 group-hover:text-[#d4af37] transition-colors">
                  0{index + 1} // {project.role}
                </span>
                <a 
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 border border-white/5 rounded-full group-hover:border-[#d4af37]/30 transition-all duration-500 bg-white/5 md:bg-transparent"
                >
                  <ArrowUpRight size={18} className="text-white/40 group-hover:text-[#d4af37]" />
                </a>
              </div>

              <div className="space-y-4 md:space-y-6 mb-10 md:mb-12 flex-grow">
                <h3 className="text-white group-hover:text-[#d4af37] transition-colors duration-500">
                  {project.title}
                </h3>
                <p className="text-white/50 font-light leading-relaxed text-sm md:text-base">
                  {project.description}
                </p>
              </div>

              <div className="pt-8 border-t border-white/5 space-y-4">
                <p className="text-[8px] md:text-[9px] uppercase tracking-[0.3em] text-white/20">Strategic Outcome</p>
                <p className="font-serif italic text-white/80 leading-relaxed text-base md:text-lg">
                  "{project.outcome}"
                </p>
              </div>

              {/* Hover Glow Effect - Optimized for Desktop */}
              <div className="absolute inset-x-0 bottom-0 h-[2px] bg-gradient-to-r from-transparent via-[#d4af37]/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 hidden lg:block" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}


