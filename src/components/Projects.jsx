import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const initiatives = [
  {
    title: "Kanniyakumari One Portal",
    role: "Founder & CEO",
    url: "https://www.kanniyakumarione.com/",
    description: "The official website for local business listings, tourism, services, and community resources in Kanyakumari district.",
    outcome: "Unified directory for the local community."
  },
  {
    title: "Local Services Platform",
    role: "Founder",
    url: "https://services.kanniyakumarione.com/",
    description: "A dedicated platform for booking and managing local services, designed to empower local professionals and businesses.",
    outcome: "Empowering the local service economy."
  },
  {
    title: "Tamil Bible App",
    role: "Creator",
    url: "https://tamilbible.kanniyakumarione.com/",
    description: "A community-focused digital platform dedicated to linguistic heritage preservation and immersive spiritual accessibility.",
    outcome: "Accessible spiritual resources in Tamil."
  },
  {
    title: "Digital Invitations",
    role: "Founder",
    url: "https://invitation.kanniyakumarione.com/",
    description: "A modern platform for creating and sharing beautiful, interactive digital invitations for weddings and special events.",
    outcome: "Sustainable, smart event planning."
  },
  {
    title: "KK One URL Shortener",
    role: "Creator",
    url: "https://kkoneurl.kanniyakumarione.com/",
    description: "A custom URL shortening service designed to provide clean, manageable, and branded links for our community ecosystem.",
    outcome: "Streamlined digital sharing."
  }
];

export default function Projects() {
  return (
    <section id="projects" className="py-16 md:py-24 relative z-10">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mb-12 md:mb-16 space-y-8">
          <div className="w-fit">
            <span className="tag">Our Platforms</span>
          </div>
          <h2 className="premium-gradient-text leading-tight">
            Digital Platforms <br /> 
            & Community Impact.
          </h2>
          <p className="text-white/60 text-lg md:text-xl max-w-2xl font-light leading-relaxed">
            A curation of our dedicated platforms built to serve, connect, and uplift the people of Kanyakumari.
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
                <span className="text-[10px] uppercase tracking-[0.5em] text-white/20 group-hover:text-[#60a5fa] transition-colors">
                  0{index + 1} // {item.role}
                </span>
                <a 
                  href={item.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-4 border border-white/5 rounded-full hover:border-[#60a5fa]/30 transition-all duration-500 bg-white/5"
                >
                  <ArrowUpRight size={20} className="text-white/30 group-hover:text-[#60a5fa]" />
                </a>
              </div>

              <div className="space-y-6 flex-grow mb-16">
                <h3 className="text-white text-2xl md:text-3xl leading-tight group-hover:text-[#60a5fa] transition-colors duration-500">
                  {item.title}
                </h3>
                <p className="text-white/40 font-light leading-relaxed text-sm md:text-base">
                  {item.description}
                </p>
              </div>

              <div className="pt-8 border-t border-white/10">
                <p className="text-[10px] uppercase tracking-widest text-[#60a5fa] mb-2 font-bold">Goal</p>
                <p className="font-medium italic text-white/90 text-sm">
                  "{item.outcome}"
                </p>
              </div>

              {/* Sophisticated Glow */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#60a5fa]/5 blur-[60px] opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}



