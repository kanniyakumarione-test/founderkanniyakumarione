import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import logo from "../assets/kanniyakumarione logo.png";

const sections = [
  { label: "Home", id: "home" },
  { label: "Vision", id: "about" },
  { label: "Platforms", id: "projects" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("home");
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 20);
      const allSections = [...sections, { id: "contact", label: "Contact" }];
      const activeSection = allSections.find(s => {
        const el = document.getElementById(s.id);
        if (!el) return false;
        const r = el.getBoundingClientRect();
        return r.top <= 200 && r.bottom >= 200;
      });
      if (activeSection) setActive(activeSection.id);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setIsOpen(false);
  };

  return (
    <>
      <nav
        className={`fixed top-0 left-0 w-full z-[100] transition-all duration-700 ${
          scrolled ? "py-4 bg-[#030712]/70 backdrop-blur-2xl border-b border-white/10 shadow-lg" : "py-8"
        }`}
      >
        <div className="container mx-auto px-6 flex items-center justify-between">
          
          {/* LOGO */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="flex items-center gap-4 cursor-pointer group z-[101]"
            onClick={() => scrollTo("home")}
          >
            <div className="relative h-10 w-10">
               <img src={logo} alt="Logo" className="h-full w-full object-contain relative z-10" />
               <div className="absolute inset-0 bg-[#60a5fa]/30 blur-xl opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>
            <span className="text-xl font-bold tracking-tight text-white group-hover:text-[#60a5fa] transition-all">
              Kanniyakumari One
            </span>
          </motion.div>

          {/* =========================================
              DESKTOP LINKS (Hidden on Mobile)
              ========================================= */}
          <div className="hidden md:flex items-center gap-12 lg:gap-16">
            {sections.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollTo(item.id)}
                className={`relative text-xs uppercase tracking-widest font-semibold transition-all duration-500 hover:text-white ${
                  active === item.id ? "text-[#60a5fa]" : "text-white/40"
                }`}
              >
                {item.label}
              </button>
            ))}
            
            <button
              onClick={() => scrollTo("contact")}
              className={`px-6 py-2.5 border text-xs font-bold uppercase tracking-widest transition-all duration-500 rounded-full shadow-lg ${
                active === "contact" 
                  ? "bg-[#3b82f6] border-[#3b82f6] text-white" 
                  : "bg-white/5 border-white/10 text-white hover:bg-[#3b82f6] hover:border-[#3b82f6]"
              }`}
            >
              Contact
            </button>
          </div>

          {/* =========================================
              MOBILE MENU TOGGLE
              ========================================= */}
          <button 
            className="md:hidden text-white p-2 relative z-[101] bg-white/5 border border-white/10 rounded-full backdrop-blur-md"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle Menu"
          >
            {isOpen ? <X size={24} strokeWidth={1.5} className="text-[#60a5fa]" /> : <Menu size={24} strokeWidth={1.5} />}
          </button>

        </div>
      </nav>

      {/* =========================================
          MOBILE FULLSCREEN MENU OVERLAY
          ========================================= */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-0 z-[90] bg-[#030712]/98 backdrop-blur-3xl md:hidden flex flex-col items-center justify-center px-6"
          >
            <div className="w-full max-w-sm space-y-8">
              {[...sections, { id: "contact", label: "Contact" }].map((item, i) => (
                <motion.button
                  key={item.id}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: i * 0.1, duration: 0.4 }}
                  onClick={() => scrollTo(item.id)}
                  className="w-full group text-center block"
                >
                  <span className={`block text-3xl font-bold tracking-tight transition-all duration-300 ${active === item.id ? "text-[#60a5fa]" : "text-white/60 group-hover:text-white"}`}>
                    {item.label}
                  </span>
                  {active === item.id && (
                    <motion.div layoutId="mobile-indicator" className="w-12 h-[2px] bg-[#60a5fa] mx-auto mt-4 rounded-full" />
                  )}
                </motion.button>
              ))}
            </div>
            
            {/* Ambient Mobile Glow */}
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-64 h-64 bg-[#3b82f6]/20 blur-[120px] rounded-full pointer-events-none" />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
