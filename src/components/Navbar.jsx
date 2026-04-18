import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import logo from "../assets/kanniyakumarione logo.png";

const sections = [
  { label: "Vision", id: "home" },
  { label: "Initiatives", id: "projects" },
  { label: "Briefing", id: "contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("home");
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 15);
      const activeSection = sections.find(s => {
        const el = document.getElementById(s.id);
        if (!el) return false;
        const r = el.getBoundingClientRect();
        return r.top <= 100 && r.bottom >= 100;
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
        className={`fixed top-0 left-0 w-full z-[100] transition-all duration-500 ${
          scrolled ? "py-4 md:py-5 bg-black/60 backdrop-blur-lg border-b border-white/5" : "py-8 md:py-10"
        }`}
      >
        <div className="container mx-auto px-6 flex items-center justify-between">
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="flex items-center gap-4 cursor-pointer group"
            onClick={() => scrollTo("home")}
          >
            <div className="relative h-8 w-8 md:h-10 md:w-10">
               <img src={logo} alt="Logo" className="h-full w-full object-contain relative z-10" />
               <div className="absolute inset-0 bg-[#d4af37]/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>
            <span className="text-base md:text-lg font-serif tracking-[0.2em] md:tracking-[0.3em] text-white uppercase group-hover:text-[#d4af37] transition-all">
              Kanniyakumarione
            </span>
          </motion.div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-12 lg:gap-16">
            {sections.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollTo(item.id)}
                className={`relative text-[9px] lg:text-[10px] uppercase tracking-[0.4em] lg:tracking-[0.5em] transition-all duration-500 hover:text-white ${
                  active === item.id ? "text-[#d4af37]" : "text-white/30"
                }`}
              >
                {item.label}
                {active === item.id && (
                  <motion.div
                    layoutId="nav-underline"
                    className="absolute -bottom-3 left-0 w-full h-[1px] bg-[#d4af37]"
                  />
                )}
              </button>
            ))}
            
            <button
              onClick={() => scrollTo("contact")}
              className="px-6 lg:px-8 py-2.5 lg:py-3 bg-white/5 border border-white/10 text-[9px] lg:text-[10px] uppercase tracking-[0.3em] hover:bg-[#d4af37] hover:border-[#d4af37] hover:text-black transition-all duration-500"
            >
              Inquiry
            </button>
          </div>

          {/* Mobile Toggle */}
          <button 
            className="md:hidden text-white p-2 relative z-[101]"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle Menu"
          >
            {isOpen ? <X size={24} strokeWidth={1} /> : <Menu size={24} strokeWidth={1} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[90] bg-black/95 backdrop-blur-xl md:hidden flex flex-col justify-center px-10"
          >
            <div className="space-y-12">
              <div className="flex flex-col gap-8">
                {sections.map((item, i) => (
                  <motion.button
                    key={item.id}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.05 }}
                    onClick={() => scrollTo(item.id)}
                    className="text-left group will-change-transform"
                  >
                    <span className="block text-[8px] text-[#d4af37] uppercase tracking-[0.4em] mb-1">0{i + 1}</span>
                    <span className={`text-4xl font-serif tracking-tight transition-colors ${active === item.id ? "text-white" : "text-white/40"}`}>
                      {item.label}
                    </span>
                  </motion.button>
                ))}
              </div>
              
              <div className="pt-10 border-t border-white/5">
                <p className="text-[8px] uppercase tracking-[0.3em] text-white/20 mb-4">Contact Strategy</p>
                <p className="font-serif text-white/40 italic text-lg leading-relaxed">
                  "Defining the digital infrastructure of tomorrow."
                </p>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}


