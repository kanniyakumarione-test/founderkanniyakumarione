import { motion, useScroll, useTransform, useMotionValue, useSpring } from "framer-motion";
import portrait from "../assets/profile.jpg";

export default function Hero() {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 500], [0, 200]);
  const y2 = useTransform(scrollY, [0, 500], [0, -150]);
  const y2Mobile = useTransform(scrollY, [0, 500], [0, -50]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);

  // 3D Parallax Tilt Logic
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  
  const springConfig = { damping: 20, stiffness: 100 };
  const xSpring = useSpring(x, springConfig);
  const ySpring = useSpring(y, springConfig);
  
  const rotateX = useTransform(ySpring, [-0.5, 0.5], ["-8deg", "8deg"]);
  const rotateY = useTransform(xSpring, [-0.5, 0.5], ["8deg", "-8deg"]);
  
  const glareX = useTransform(xSpring, [-0.5, 0.5], ["0%", "100%"]);
  const glareY = useTransform(ySpring, [-0.5, 0.5], ["0%", "100%"]);

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    
    const xPct = (mouseX / width) - 0.5;
    const yPct = (mouseY / height) - 0.5;
    
    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  // Custom parallax based on screen width
  const isMobile = typeof window !== 'undefined' ? window.innerWidth < 1024 : false;
  const portraitY = isMobile ? y2Mobile : y2;

  const scrollTo = (id) =>
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center pt-32 pb-24 overflow-hidden bg-[#050505]"
    >
      {/* Background Decorative Text - Reduced for mobile & Overflow protected */}
      <motion.div 
        style={{ y: y1, opacity: 0.03 }}
        className="absolute top-1/4 left-0 w-full text-center pointer-events-none select-none overflow-hidden"
      >
        <span className="text-[30vw] md:text-[25vw] font-serif uppercase tracking-tighter block whitespace-nowrap">VISION</span>
      </motion.div>

      <div className="container mx-auto px-6 relative z-10 grid lg:grid-cols-[1.2fr,0.8fr] gap-12 md:gap-20 items-center">
        <div className="space-y-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
          >
            <span className="tag mb-6 block">Visionary Leadership</span>
            <h1 className="leading-[0.85] tracking-tight text-white mb-8 text-4xl sm:text-6xl lg:text-8xl">
              Architecting <br />
              <span className="italic text-[#d4af37] opacity-90">High-Trust</span> <br />
              Digital Eras.
            </h1>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="space-y-8"
          >
            <p className="text-xl md:text-2xl text-white/50 max-w-xl font-light leading-relaxed">
              I'm <span className="text-white border-b border-[#d4af37]/40 pb-1">Roshinth Sojan</span>, Founder of Kanniyakumarione. 
              Spearheading global digital product strategy and experience systems for the next generation of ventures.
            </p>

            <div className="flex flex-wrap items-center gap-4 md:gap-10 pt-4">
              <button
                onClick={() => scrollTo("projects")}
                className="button-primary"
              >
                Key Initiatives
              </button>
              <button
                onClick={() => scrollTo("contact")}
                className="button-secondary"
              >
                The Briefing
              </button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 2, delay: 1 }}
            className="grid grid-cols-2 md:flex md:gap-16 gap-8 pt-12 border-t border-white/5"
          >
            {[
              { label: "Global Ventures", value: "23" },
              { label: "Strategic Labs", value: "08" },
              { label: "Yrs Authority", value: "10+" }
            ].map((stat) => (
              <div key={stat.label}>
                <p className="text-3xl font-serif text-white mb-1">{stat.value}</p>
                <p className="text-[10px] uppercase tracking-[0.3em] text-white/30 whitespace-nowrap">{stat.label}</p>
              </div>
            ))}
          </motion.div>
        </div>

        {/* 3D Portrait Column */}
        <motion.div
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
          style={{ 
            y: portraitY,
            rotateX, 
            rotateY,
            perspective: "1200px",
            transformStyle: "preserve-3d"
          }}
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.8, ease: [0.22, 1, 0.36, 1] }}
          className="relative block mt-32 lg:mt-0 px-4 sm:px-0 cursor-crosshair group"
        >
          <div className="relative aspect-[4/5] md:aspect-[3/4.5] overflow-hidden border border-white/5 shadow-2xl transition-all duration-700 group-hover:border-[#d4af37]/20">
            {/* Natural Professional Look */}
            <img 
              src={portrait} 
              alt="Roshinth Sojan - Founder" 
              className="w-full h-full object-cover"
            />
            
            {/* Dynamic Glare / Shine Effect */}
            <motion.div 
              style={{ 
                left: glareX, 
                top: glareY,
                background: "radial-gradient(circle, rgba(212,175,55,0.1) 0%, transparent 70%)"
              }}
              className="absolute -translate-x-1/2 -translate-y-1/2 w-[200%] h-[200%] pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-700" 
            />

            {/* Subtle Gold Tint Overlay */}
            <div className="absolute inset-0 bg-[#d4af37]/5 mix-blend-overlay pointer-events-none" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-transparent opacity-100" />
            
            {/* Inner frame for strategic depth */}
            <div className="absolute inset-6 border border-white/10 pointer-events-none group-hover:border-[#d4af37]/40 transition-colors duration-700" />
          </div>
          
          <motion.div 
            style={{ 
              opacity,
              translateZ: "60px", // Float effect
              rotateX: useTransform(ySpring, [-0.5, 0.5], ["-4deg", "4deg"]),
              rotateY: useTransform(xSpring, [-0.5, 0.5], ["4deg", "-4deg"])
            }}
            className="absolute -bottom-8 left-1/2 -translate-x-1/2 sm:translate-x-0 sm:left-auto sm:-left-10 p-6 md:p-10 bg-[#080808]/80 border border-white/10 space-y-4 max-w-[80vw] sm:max-w-xs shadow-[0_50px_100px_rgba(0,0,0,0.9)] backdrop-blur-3xl"
          >
            <p className="text-[10px] uppercase tracking-[0.4em] text-[#d4af37]">Visionary Thesis</p>
            <p className="text-lg md:text-xl italic font-serif text-white/90 leading-relaxed">
              "Architecting the digital systems that define the next era of global trust."
            </p>
            <div className="h-[1px] w-12 bg-[#d4af37]/40" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
