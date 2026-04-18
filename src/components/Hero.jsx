import { motion, useScroll, useTransform, useMotionValue, useSpring } from "framer-motion";
import portrait from "../assets/profile.jpg";

export default function Hero() {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 500], [0, 150]);
  const yPortrait = useTransform(scrollY, [0, 500], [0, -50]);
  
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const mouseSpringConfig = { damping: 40, stiffness: 80 };
  const xSpring = useSpring(x, mouseSpringConfig);
  const ySpring = useSpring(y, mouseSpringConfig);
  
  const rotateX = useTransform(ySpring, [-0.5, 0.5], ["-3deg", "3deg"]);
  const rotateY = useTransform(xSpring, [-0.5, 0.5], ["3deg", "-3deg"]);

  const handleMouseMove = (e) => {
    // Disable or reduce tilt on mobile/touch is handled by the subtle spring
    const rect = e.currentTarget.getBoundingClientRect();
    x.set((e.clientX - rect.left) / rect.width - 0.5);
    y.set((e.clientY - rect.top) / rect.height - 0.5);
  };

  const scrollTo = (id) => document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.2 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.2, 1, 0.3, 1] } }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center pt-32 pb-24 md:pt-24 md:pb-32 overflow-hidden">
      {/* Background Decorative Text - Optimized */}
      <motion.div 
        style={{ y: y1, opacity: 0.015 }}
        className="absolute inset-0 flex items-center justify-center pointer-events-none select-none overflow-hidden"
      >
        <span className="text-[35vw] font-serif uppercase tracking-tighter leading-none will-change-transform">ARCHITECT</span>
      </motion.div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:grid lg:grid-cols-[1.2fr,0.8fr] gap-12 md:gap-20 items-center">
          
          {/* Portrait - Refined for Mobile and Desktop */}
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.5, ease: [0.2, 1, 0.3, 1] }}
            style={{ y: yPortrait, rotateX, rotateY, perspective: "1000px" }}
            onMouseMove={handleMouseMove}
            onMouseLeave={() => { x.set(0); y.set(0); }}
            className="relative group order-first lg:order-last w-full max-w-sm lg:max-w-none mx-auto"
          >
            <div className="relative aspect-[4/5] overflow-hidden bg-[#111] border border-white/5 transition-colors duration-700 group-hover:border-[#d4af37]/30 shadow-2xl">
              <img 
                src={portrait} 
                alt="Roshinth Sojan" 
                className="w-full h-full object-cover grayscale-[0.1] transition-transform duration-700 group-hover:scale-105 will-change-transform"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-70" />
              <div className="absolute inset-4 md:inset-8 border border-white/5 pointer-events-none group-hover:border-[#d4af37]/10 transition-colors duration-700" />
            </div>

            {/* Floating Thesis Card - Hidden on very small screens for better UX */}
            <motion.div 
              style={{ translateZ: "40px" }}
              className="absolute -bottom-6 -left-6 md:-bottom-10 md:-left-10 p-6 md:p-10 glass-panel max-w-[260px] md:max-w-xs space-y-4 hidden sm:block"
            >
              <p className="text-[8px] uppercase tracking-[0.4em] text-[#d4af37] font-semibold">Leadership Thesis</p>
              <p className="text-base md:text-lg italic font-serif text-white/90 leading-relaxed text-balance">
                "Defining the infrastructure of tomorrow through trust and radical innovation."
              </p>
            </motion.div>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="space-y-10 text-center lg:text-left"
          >
            <motion.div variants={itemVariants}>
              <span className="tag mb-8 mx-auto lg:mx-0">Executive Visionary</span>
              <h1 className="premium-gradient-text text-balance">
                Architecting <br className="hidden md:block" />
                <span className="italic text-[#d4af37] font-normal">High-Trust</span> <br className="hidden md:block" />
                Digital Eras.
              </h1>
            </motion.div>

            <motion.div variants={itemVariants} className="max-w-xl mx-auto lg:mx-0 space-y-10">
              <p className="text-lg md:text-xl text-white/60 font-light leading-relaxed text-balance md:px-4 lg:px-0">
                I'm <span className="text-white font-medium">Roshinth Sojan</span>, Founder of Kanniyakumarione. 
                Spearheading global digital product strategy and experience systems for the next generation of ventures.
              </p>

              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 md:gap-6">
                <button onClick={() => scrollTo("projects")} className="button-primary w-full sm:w-auto">
                  Explore Initiatives
                </button>
                <button onClick={() => scrollTo("contact")} className="button-secondary w-full sm:w-auto">
                  Get In Touch
                </button>
              </div>
            </motion.div>

            <motion.div 
              variants={itemVariants}
              className="grid grid-cols-3 gap-6 md:gap-12 pt-12 border-t border-white/5"
            >
              {[
                { label: "Ventures", value: "23" },
                { label: "Labs", value: "08" },
                { label: "Authority", value: "10+" }
              ].map((stat) => (
                <div key={stat.label}>
                  <p className="text-2xl md:text-3xl font-serif text-white mb-2">{stat.value}</p>
                  <p className="text-[8px] md:text-[9px] uppercase tracking-[0.2em] md:tracking-[0.3em] text-white/30">{stat.label}</p>
                </div>
              ))}
            </motion.div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}


