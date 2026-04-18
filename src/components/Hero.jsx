import { motion, useScroll, useTransform } from "framer-motion";
import portrait from "../assets/profile.jpg";

export default function Hero() {
  const { scrollY } = useScroll();
  const yText = useTransform(scrollY, [0, 500], [0, 100]);
  const yImage = useTransform(scrollY, [0, 500], [0, -50]);
  
  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.08, delayChildren: 0.1 } }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
  };

  return (
    <section id="home" className="min-h-[110vh] flex items-center justify-center pt-24 pb-32 overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:grid lg:grid-cols-[1.3fr,0.7fr] gap-16 md:gap-24 items-center">
          
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="z-10 text-center lg:text-left space-y-12 md:space-y-16"
          >
            <motion.div variants={itemVariants} className="space-y-6 md:space-y-8">
              <span className="tag mb-4">Strategic Visionary</span>
              <h1 className="premium-gradient-text leading-[0.9] tracking-[-0.05em]">
                Defining <br />
                The <span className="italic font-normal text-white">Next Era</span> Of <br />
                <span className="text-[#E8C67E]">Digital Trust.</span>
              </h1>
            </motion.div>

            <motion.div variants={itemVariants} className="max-w-2xl mx-auto lg:mx-0 space-y-12">
              <p className="text-lg md:text-2xl text-white/50 font-light leading-relaxed text-balance">
                I'm <span className="text-white font-medium">Roshinth Sojan</span>. 
                Founder and systems architect at Kanniyakumarione, engineering world-class digital product ecosystems for global ventures.
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-5">
                <button onClick={() => scrollTo("projects")} className="button-primary w-full sm:w-auto">
                  View Ventures
                </button>
                <button onClick={() => scrollTo("contact")} className="button-secondary w-full sm:w-auto">
                  Start Dialogue
                </button>
              </div>
            </motion.div>

            <motion.div 
              variants={itemVariants}
              className="flex justify-center lg:justify-start gap-12 md:gap-20 pt-12 border-t border-white/5"
            >
              {[
                { label: "Ventures", value: "24+" },
                { label: "Products", value: "08" },
                { label: "Presence", value: "Global" }
              ].map((stat) => (
                <div key={stat.label}>
                  <p className="text-2xl md:text-4xl font-serif text-white mb-2">{stat.value}</p>
                  <p className="text-[10px] uppercase tracking-[0.4em] text-white/20">{stat.label}</p>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* Portrait - Creative Reveal */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            style={{ y: yImage }}
            className="relative w-full max-w-md lg:max-w-none mx-auto group"
          >
            <div className="relative aspect-[4/5] overflow-hidden bg-[#0a0a0a] border border-white/5">
              <motion.div
                initial={{ scale: 1.2, filter: "grayscale(1) brightness(0.5)" }}
                animate={{ scale: 1, filter: "grayscale(0) brightness(1)" }}
                transition={{ duration: 2, ease: "circOut" }}
                className="w-full h-full"
              >
                <img 
                  src={portrait} 
                  alt="Roshinth Sojan" 
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                />
              </motion.div>
              
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
              <div className="absolute inset-0 ring-1 ring-inset ring-white/10" />
            </div>

            {/* Float Element */}
            <motion.div 
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 1, duration: 1 }}
              className="absolute -bottom-8 -right-8 p-10 glass-panel max-w-xs hidden xl:block"
            >
              <p className="text-[9px] uppercase tracking-[0.4em] text-[#E8C67E] mb-4">Thesis</p>
              <p className="text-lg font-serif italic text-white/90 leading-tight">
                Architecting trust through radical precision.
              </p>
            </motion.div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}



