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
    <section id="about" className="relative py-32 md:py-48 overflow-hidden bg-[#020202]">
      {/* Structural Accent */}
      <div className="absolute left-0 top-0 w-[1px] h-full bg-gradient-to-b from-transparent via-white/5 to-transparent" />

      <motion.div 
        className="container mx-auto px-6 flex flex-col lg:grid lg:grid-cols-[1fr,1fr] gap-20 md:gap-32"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
      >
        <div className="space-y-12 md:space-y-20 lg:sticky lg:top-40 h-fit">
          <motion.div variants={itemVariants} className="space-y-10">
            <span className="tag">Philosophy</span>
            <h2 className="premium-gradient-text leading-[0.95]">
              Architect of <br />
              <span className="italic font-normal">Digital Trust</span> <br /> 
              & Global Systems.
            </h2>
          </motion.div>
          
          <motion.div variants={itemVariants} className="space-y-10">
            <p className="text-2xl md:text-3xl font-light text-white/60 leading-tight tracking-tight">
              Executing with radical precision <br /> 
              to define the digital infrastructure <br /> 
              of tomorrow.
            </p>
            <div className="h-[1px] w-24 bg-[#E8C67E]/40" />
            <p className="text-lg text-white/30 font-light leading-relaxed max-w-lg">
              I oversee Kanniyakumarione as a strategic architect, merging high-impact product cycles, immersive narratives, and proven delivery frameworks.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-20">
          {[
            { tag: "Protocol I", title: "Experience Systems", desc: "Engineering scalable design languages that drive interaction and consistent user growth." },
            { tag: "Protocol II", title: "Radical Discipline", desc: "Maintaining high-velocity execution through rigorous insight cycles and proven rhythms." },
            { tag: "Protocol III", title: "High-Trust Labs", desc: "Building enduring digital assets through transparency and unwavering commitment to quality." },
            { tag: "Protocol IV", title: "Executive KPIs", desc: "Measuring success against mission-critical metrics to ensure sustained global momentum." }
          ].map((item, i) => (
            <motion.div 
              key={item.title}
              variants={itemVariants}
              className="space-y-8"
            >
              <p className="text-[10px] uppercase tracking-[0.5em] text-[#E8C67E]/40">{item.tag}</p>
              <div className="space-y-5">
                <h4 className="text-2xl text-white font-serif">{item.title}</h4>
                <p className="text-sm text-white/40 leading-relaxed font-light">
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



