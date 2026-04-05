import { motion, useMotionValue, useTransform } from "framer-motion";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import { useRef } from "react";

/* ================= MAGNETIC BUTTON ================= */
function MagneticButton({ children, onClick, className }) {
  const ref = useRef(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const handleMouseMove = (e) => {
    const rect = ref.current.getBoundingClientRect();
    const dx = e.clientX - (rect.left + rect.width / 2);
    const dy = e.clientY - (rect.top + rect.height / 2);
    x.set(dx * 0.25);
    y.set(dy * 0.25);
  };

  const reset = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.button
      ref={ref}
      onClick={onClick}
      onMouseMove={handleMouseMove}
      onMouseLeave={reset}
      style={{ x, y }}
      whileHover={{ scale: 1.08 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      className={className}
    >
      {children}
    </motion.button>
  );
}

/* ================= WAVE TEXT ================= */
function WaveText({ text }) {
  return (
    <span className="inline-flex">
      {text.split("").map((char, i) => (
        <motion.span
          key={i}
          animate={{ y: [0, -6, 0] }}
          transition={{
            duration: 1.6,
            repeat: Infinity,
            delay: i * 0.05,
          }}
          className="inline-block"
        >
          {char === " " ? "\u00A0" : char}
        </motion.span>
      ))}
    </span>
  );
}

/* ================= HERO ================= */
export default function Hero() {
  const [role] = useTypewriter({
    words: [
      "React Developer",
      "Full-Stack Engineer",
      "UI/UX Enthusiast",
      "Node.js Specialist",
      "Freelancer",
    ],
    loop: true,
    delaySpeed: 1800,
    typeSpeed: 70,
    deleteSpeed: 40,
  });

  /* Parallax */
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const rotateX = useTransform(my, [-0.5, 0.5], [6, -6]);
  const rotateY = useTransform(mx, [-0.5, 0.5], [-6, 6]);

  const handleMouseMove = (e) => {
    const r = e.currentTarget.getBoundingClientRect();
    mx.set((e.clientX - r.left) / r.width - 0.5);
    my.set((e.clientY - r.top) / r.height - 0.5);
  };

  const scrollTo = (id) =>
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <section id="home"
      className="hero relative flex min-h-screen items-center justify-center overflow-hidden"
      onMouseMove={handleMouseMove}
    >
      {/* Background glow */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-1/2 h-[700px] w-[700px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-400/20 blur-[200px]" />
      </div>

      <motion.div
        style={{ rotateX, rotateY }}
        className="mx-auto max-w-5xl px-6 text-center"
      >
        {/* Headline */}
        <div className="space-y-4">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-block rounded-full border border-cyan-500/30 bg-cyan-500/10 px-4 py-1.5 text-[10px] font-bold uppercase tracking-[0.2em] text-cyan-400 backdrop-blur-md"
          >
            Available for new projects
          </motion.span>

          <h1 className="text-5xl font-black leading-[1.1] tracking-tight text-white sm:text-8xl">
            I craft <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-indigo-600 bg-clip-text text-transparent">Immersive</span> <br />
            Digital Experiences
          </h1>

          <div className="mx-auto mt-6 max-w-2xl text-lg font-medium text-white/50 sm:text-2xl">
            I'm <span className="text-white">Roshinth</span>, a specialized <br className="sm:hidden" />
            <span className="text-cyan-400">{role}</span>
            <Cursor cursorColor="#22d3ee" />
          </div>
        </div>

        {/* Description */}
        <p className="mx-auto mt-8 max-w-3xl text-white/70 leading-relaxed">
          React.js, Tailwind CSS, Motion Design, UI/UX, Performance Optimization, Java, Spring Boot, Full Stack Development, JavaScript, Web Development.
        </p>

        {/* Actions */}
        <div className="mt-14 flex flex-wrap justify-center gap-6">
          <MagneticButton
            onClick={() => scrollTo("projects")}
            className="rounded-full bg-gradient-to-r from-cyan-400 to-blue-500 px-10 py-4 text-sm font-semibold text-slate-900 shadow-lg"
          >
            Explore Projects
          </MagneticButton>

          <MagneticButton
            onClick={() => scrollTo("contact")}
            className="rounded-full border border-white/25 bg-white/5 px-10 py-4 text-sm font-semibold text-white backdrop-blur-md"
          >
            Get in Touch
          </MagneticButton>
        </div>
      </motion.div>
    </section>
  );
}
