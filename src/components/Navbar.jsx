import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import logo from "../assets/kanniyakumarione logo.png";

const sections = [
  { label: "Perspective", id: "home" },
  { label: "Ventures", id: "projects" },
  { label: "Briefing", id: "contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("home");
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 20);
      const activeSection = sections.find(s => {
        const el = document.getElementById(s.id);
        if (!el) return false;
        const r = el.getBoundingClientRect();
        return r.top <= 150 && r.bottom >= 150;
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
          scrolled ? "py-6 bg-black/40 backdrop-blur-xl border-b border-white/[0.03]" : "py-10"
        }`}
      >
        <div className="container mx-auto px-6 flex items-center justify-between">
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="flex items-center gap-4 cursor-pointer group"
            onClick={() => scrollTo("home")}
          >
            <div className="relative h-10 w-10">
               <img src={logo} alt="Logo" className="h-full w-full object-contain relative z-10" />
               <div className="absolute inset-0 bg-[#E8C67E]/30 blur-xl opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>
            <span className="text-xl font-serif tracking-tight text-white group-hover:text-[#E8C67E] transition-all">
              Kanniyakumarione
            </span>
          </motion.div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-12 lg:gap-16">
            {sections.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollTo(item.id)}
                className={`relative text-[10px] uppercase tracking-[0.4em] transition-all duration-500 hover:text-white ${
                  active === item.id ? "text-[#E8C67E]" : "text-white/20"
                }`}
              >
                {item.label}
              </button>
            ))}
            
            <button
              onClick={() => scrollTo("contact")}
              className="px-8 py-3 bg-white/5 border border-white/10 text-[10px] uppercase tracking-[0.3em] hover:bg-[#E8C67E] hover:border-[#E8C67E] hover:text-black transition-all duration-700"
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
            {isOpen ? <X size={26} strokeWidth={1} /> : <Menu size={26} strokeWidth={1} />}
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
            className="fixed inset-0 z-[90] bg-black/98 backdrop-blur-2xl md:hidden flex flex-col justify-center px-10"
          >
            <div className="space-y-16">
              <div className="flex flex-col gap-10">
                {sections.map((item, i) => (
                  <motion.button
                    key={item.id}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.08 }}
                    onClick={() => scrollTo(item.id)}
                    className="text-left group will-change-transform"
                  >
                    <span className="block text-[10px] text-[#E8C67E] uppercase tracking-[0.5em] mb-4">0{i + 1}</span>
                    <span className={`text-5xl font-serif tracking-tight transition-colors ${active === item.id ? "text-white" : "text-white/20"}`}>
                      {item.label}
                    </span>
                  </motion.button>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}



