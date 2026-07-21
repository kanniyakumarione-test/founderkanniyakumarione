import { motion } from "framer-motion";
import portrait from "../assets/profile.jpg";

export default function Hero() {
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
    <section id="home" className="flex items-center justify-center pt-24 md:pt-32 pb-16 overflow-hidden relative">
      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="z-10 text-center lg:text-left space-y-12 md:space-y-16"
          >
            <motion.div variants={itemVariants} className="space-y-6 md:space-y-8">
              <span className="tag mb-4">Founder & CEO</span>
              <h1 className="premium-gradient-text leading-[0.9] tracking-[-0.05em]">
                Connecting <br />
                The <span className="italic font-normal text-white">Community</span> Of <br />
                <span className="text-[#60a5fa]">Kanyakumari.</span>
              </h1>
            </motion.div>

            <motion.div variants={itemVariants} className="max-w-2xl mx-auto lg:mx-0 space-y-12">
              <p className="text-lg md:text-2xl text-white/50 font-light leading-relaxed text-balance">
                I'm <span className="text-white font-medium">Roshinth Sojan</span>. 
                Founder and CEO at Kanniyakumarione, building the ultimate local directory, tourism guide, and smart city portal for our district.
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-5">
                <button onClick={() => scrollTo("projects")} className="button-primary w-full sm:w-auto">
                  View Platform
                </button>
                <button onClick={() => scrollTo("contact")} className="button-secondary w-full sm:w-auto">
                  Get in Touch
                </button>
              </div>
              <div className="flex justify-center lg:justify-start pt-2">
                <a 
                  href="https://roshinth-sojan-portfolio.vercel.app/" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-xs uppercase tracking-widest font-semibold text-white/40 hover:text-[#60a5fa] transition-colors"
                >
                  Explore My Personal Portfolio →
                </a>
              </div>
            </motion.div>

            <motion.div 
              variants={itemVariants}
              className="flex justify-center lg:justify-start gap-12 md:gap-20 pt-12 border-t border-white/5"
            >
              {[
                { label: "Local Listings", value: "500+" },
                { label: "Community Platforms", value: "05" },
                { label: "District Users", value: "10k+" }
              ].map((stat) => (
                <div key={stat.label}>
                  <p className="text-3xl font-bold text-white mb-1">{stat.value}</p>
                  <p className="text-xs uppercase tracking-widest text-[#60a5fa]">{stat.label}</p>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* Portrait - Modern Redesign */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="relative w-full max-w-sm mx-auto lg:ml-auto lg:mr-0 group mt-10 lg:mt-0"
          >
            <div className="relative aspect-[4/5] rounded-[2.5rem] overflow-hidden border border-white/10 shadow-2xl z-10">
              <motion.div
                initial={{ scale: 1.1, filter: "brightness(0.8)" }}
                animate={{ scale: 1, filter: "brightness(1.1)" }}
                transition={{ duration: 1.5 }}
                className="w-full h-full"
              >
                <img 
                  src={portrait} 
                  alt="Roshinth Sojan" 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </motion.div>
              
              <div className="absolute inset-0 bg-gradient-to-t from-[#030712]/80 via-transparent to-transparent" />
            </div>

            {/* Float Element - Redesigned */}
            <motion.div 
              initial={{ x: 20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.8, duration: 0.8 }}
              className="absolute -bottom-6 -left-6 md:-left-12 p-6 glass-panel max-w-[240px] z-20 shadow-2xl"
            >
              <div className="flex items-center gap-3 mb-2">
                <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                <p className="text-[10px] uppercase tracking-widest text-[#60a5fa] font-bold">Mission</p>
              </div>
              <p className="text-sm font-medium text-white/90 leading-relaxed">
                Empowering Kanyakumari through digital connectivity.
              </p>
            </motion.div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}



