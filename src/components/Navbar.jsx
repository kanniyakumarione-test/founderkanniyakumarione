import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import logo from "../assets/kanniyakumarione logo.png";

const sections = [
  { label: "Vision", id: "home" },
  { label: "Philosophy", id: "about" },
  { label: "Initiatives", id: "projects" },
  { label: "Briefing", id: "contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("home");
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 50);
      sections.forEach((s) => {
        const el = document.getElementById(s.id);
        if (!el) return;
        const r = el.getBoundingClientRect();
        if (r.top <= 150 && r.bottom >= 150) {
          setActive(s.id);
        }
      });
    };
    window.addEventListener("scroll", onScroll);
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
          scrolled ? "py-4 bg-black/80 backdrop-blur-md border-b border-white/5" : "py-10 md:py-8"
        }`}
      >
        <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="flex items-center gap-4 cursor-pointer group"
            onClick={() => scrollTo("home")}
          >
            <img src={logo} alt="Kanniyakumarione Logo" className="h-10 w-auto object-contain" />
            <span className="text-sm sm:text-lg lg:text-xl font-serif tracking-[0.2em] text-white uppercase group-hover:text-[#d4af37] transition-all block">
              Kanniyakumarione
            </span>
          </motion.div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-12">
            {sections.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollTo(item.id)}
                className={`relative text-[10px] uppercase tracking-[0.4em] transition-all duration-500 hover:text-white ${
                  active === item.id ? "text-[#d4af37]" : "text-white/40"
                }`}
              >
                {item.label}
                {active === item.id && (
                  <motion.div
                    layoutId="nav-underline"
                    className="absolute -bottom-2 left-0 w-full h-[1px] bg-[#d4af37]"
                  />
                )}
              </button>
            ))}
          </div>

          <div className="flex items-center gap-6">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => scrollTo("contact")}
              className="hidden sm:block px-8 py-2 border border-[#d4af37]/30 text-[#d4af37] text-[10px] uppercase tracking-[0.2em] hover:bg-[#d4af37] hover:text-black transition-all duration-500"
            >
              Inquiry
            </motion.button>

            {/* Mobile Toggle */}
            <button 
              className="md:hidden text-white p-2"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <X size={24} strokeWidth={1} /> : <Menu size={24} strokeWidth={1} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed inset-0 z-[90] bg-[#050505]/95 backdrop-blur-3xl md:hidden flex flex-col justify-center px-12"
          >
            <div className="space-y-12">
              <p className="text-[10px] uppercase tracking-[0.5em] text-[#d4af37] opacity-50">Navigation</p>
              <div className="flex flex-col gap-8">
                {sections.map((item, i) => (
                  <motion.button
                    key={item.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 + i * 0.1 }}
                    onClick={() => scrollTo(item.id)}
                    className="text-left"
                  >
                    <span className="block text-[10px] text-white/30 uppercase tracking-[0.2em] mb-2 font-mono">0{i + 1}</span>
                    <span className={`text-4xl font-serif tracking-tight ${active === item.id ? "text-[#d4af37]" : "text-white"}`}>
                      {item.label}
                    </span>
                  </motion.button>
                ))}
              </div>

              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.7 }}
                className="pt-12 border-t border-white/10"
              >
                <p className="text-[10px] uppercase tracking-[0.2em] text-white/30 mb-4">Direct Contact</p>
                <p className="text-xl font-serif text-white">kanniyakumarione@gmail.com</p>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
