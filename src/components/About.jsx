import { motion } from "framer-motion";

export default function About() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1, delayChildren: 0.1 } }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 1, ease: [0.16, 1, 0.3, 1] } }
  };

  return (
    <section id="about" className="relative py-16 md:py-24 overflow-hidden">
      {/* Structural Accent */}
      <div className="absolute left-0 top-0 w-[1px] h-full bg-gradient-to-b from-transparent via-white/5 to-transparent" />

      <motion.div 
        className="container mx-auto px-6 flex flex-col lg:grid lg:grid-cols-[1fr,1fr] gap-20 md:gap-32"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
      >
        <div className="space-y-12 h-fit">
          <motion.div variants={itemVariants} className="glass-panel p-10 md:p-14 relative overflow-hidden group">
            <div className="relative z-10 space-y-10">
              <div className="w-fit">
                <span className="tag">Platform Vision</span>
              </div>
              <h2 className="premium-gradient-text leading-tight">
                Empowering <br />
                Kanyakumari <br /> 
                Digitally.
              </h2>
              
              <div className="space-y-8 pt-4">
                <p className="text-xl md:text-2xl font-light text-white/80 leading-snug">
                  Building a unified ecosystem for local businesses, tourism, and community resources.
                </p>
                <div className="h-[1px] w-16 bg-[#60a5fa]/50" />
                <p className="text-base text-white/50 font-light leading-relaxed">
                  I oversee Kanniyakumari One to bridge the gap between people and essential local services, promoting regional tourism and providing crucial information to residents and visitors alike.
                </p>
              </div>
            </div>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-8">
          {[
            { tag: "Directory", title: "Local Businesses", desc: "Connecting customers with trusted local shops, services, and professionals across the district." },
            { tag: "Guide", title: "Tourism & Travel", desc: "Providing a complete guide to Kanyakumari's beautiful tourist spots, hotels, and attractions." },
            { tag: "Safety", title: "Emergency Info", desc: "Ensuring community safety with quick access to hospital, police, and emergency contact details." },
            { tag: "News", title: "Smart City Updates", desc: "Keeping everyone informed with the latest updates and resources for our growing smart city." }
          ].map((item, i) => (
            <motion.div 
              key={item.title}
              variants={itemVariants}
              className="glass-panel p-8 group flex flex-col justify-between hover:-translate-y-2 transition-transform duration-500"
            >
              <div className="space-y-6">
                <span className="text-[10px] uppercase tracking-widest text-[#60a5fa] font-bold bg-[#3b82f6]/10 px-3 py-1.5 rounded-full inline-block">
                  {item.tag}
                </span>
                <h4 className="text-xl text-white font-bold tracking-tight">{item.title}</h4>
                <p className="text-sm text-white/60 leading-relaxed font-light">
                  {item.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}



