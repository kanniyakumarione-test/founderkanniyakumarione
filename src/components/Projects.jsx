import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const initiatives = [
  {
    title: "Global Venture Ecosystem",
    role: "Founding Architect",
    url: "https://www.kanniyakumarione.com/",
    description: "The primary nexus for global digital innovation, facilitating multi-sector venture scaling and strategic ecosystem growth.",
    outcome: "Unified infrastructure for next-gen ventures."
  },
  {
    title: "Strategic Delivery Lab",
    role: "Principal Strategist",
    url: "https://services.kanniyakumarione.com/",
    description: "A specialized high-performance laboratory focused on architecting digital product lifecycle systems and mission-critical delivery.",
    outcome: "Scalable frameworks for radical market agility."
  },
  {
    title: "Cultural Preservation Portal",
    role: "Heritage Strategist",
    url: "https://tamilbible.kanniyakumarione.com/",
    description: "A community-focused digital platform dedicated to linguistic heritage preservation and immersive spiritual accessibility.",
    outcome: "Globally accessible repository for cultural study."
  }
];

export default function Projects() {
  return (
    <section id="projects" className="py-24 md:py-32 bg-[#050505]/30">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mb-20 md:mb-32 space-y-8 md:space-y-12">
          <span className="tag">Initiatives</span>
          <h2 className="premium-gradient-text leading-[0.9]">
            Strategic Ventures <br /> 
            & <span className="italic font-normal text-white">Market Impact.</span>
          </h2>
          <p className="text-white/40 text-lg md:text-2xl max-w-2xl font-light leading-relaxed">
            A curation of high-impact ventures defined by architectural excellence and precise market execution.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
          {initiatives.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="group flex flex-col p-8 md:p-12 glass-panel relative overflow-hidden h-full"
            >
              <div className="flex justify-between items-start mb-16">
                <span className="text-[10px] uppercase tracking-[0.5em] text-white/20 group-hover:text-[#E8C67E] transition-colors">
                  0{index + 1} // {item.role}
                </span>
                <a 
                  href={item.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-4 border border-white/5 rounded-full hover:border-[#E8C67E]/30 transition-all duration-500 bg-white/5"
                >
                  <ArrowUpRight size={20} className="text-white/30 group-hover:text-[#E8C67E]" />
                </a>
              </div>

              <div className="space-y-6 flex-grow mb-16">
                <h3 className="text-white text-2xl md:text-3xl leading-tight group-hover:text-[#E8C67E] transition-colors duration-500">
                  {item.title}
                </h3>
                <p className="text-white/40 font-light leading-relaxed text-sm md:text-base">
                  {item.description}
                </p>
              </div>

              <div className="pt-8 border-t border-white/5">
                <p className="text-[10px] uppercase tracking-[0.3em] text-white/20 mb-3">Strategic Outcome</p>
                <p className="font-serif italic text-white/70 text-lg">
                  "{item.outcome}"
                </p>
              </div>

              {/* Sophisticated Glow */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#E8C67E]/5 blur-[60px] opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}



