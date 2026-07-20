import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Home, LayoutGrid, Phone, User } from "lucide-react";
import logo from "../assets/kanniyakumarione logo.png";

const sections = [
  { label: "Home", id: "home", icon: <Home size={20} /> },
  { label: "Vision", id: "about", icon: <User size={20} /> },
  { label: "Platforms", id: "projects", icon: <LayoutGrid size={20} /> },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("home");

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 20);
      const allSections = [...sections, { id: "contact" }];
      const activeSection = allSections.find(s => {
        const el = document.getElementById(s.id);
        if (!el) return false;
        const r = el.getBoundingClientRect();
        // Check if section is well within viewport
        return r.top <= 200 && r.bottom >= 200;
      });
      if (activeSection) setActive(activeSection.id);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      {/* =========================================
          DESKTOP NAVBAR (Hidden on Mobile)
          ========================================= */}
      <nav
        className={`hidden md:block fixed top-0 left-0 w-full z-[100] transition-all duration-700 ${
          scrolled ? "py-4 bg-[#030712]/70 backdrop-blur-2xl border-b border-white/10 shadow-lg" : "py-8"
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
               <div className="absolute inset-0 bg-[#60a5fa]/30 blur-xl opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>
            <span className="text-xl font-bold tracking-tight text-white group-hover:text-[#60a5fa] transition-all">
              Kanniyakumari One
            </span>
          </motion.div>

          <div className="flex items-center gap-12 lg:gap-16">
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
        </div>
      </nav>

      {/* =========================================
          MOBILE MINIMAL TOP BAR (Logo Only)
          ========================================= */}
      <nav
        className={`md:hidden fixed top-0 left-0 w-full z-[90] transition-all duration-500 ${
          scrolled ? "py-3 bg-[#030712]/90 backdrop-blur-xl border-b border-white/10 shadow-md" : "py-6 bg-transparent"
        }`}
      >
        <div className="container mx-auto px-6 flex justify-center">
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex items-center gap-3 cursor-pointer"
            onClick={() => scrollTo("home")}
          >
            <div className="h-8 w-8">
               <img src={logo} alt="Logo" className="h-full w-full object-contain" />
            </div>
            <span className="text-lg font-bold tracking-tight text-white">
              Kanniyakumari One
            </span>
          </motion.div>
        </div>
      </nav>

      {/* =========================================
          MOBILE NAVBAR (Floating Bottom Dock)
          ========================================= */}
      <div className="md:hidden fixed bottom-6 left-1/2 -translate-x-1/2 z-[100] w-[90%] max-w-sm">
        <motion.div 
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="flex items-center justify-between bg-[#030712]/90 backdrop-blur-2xl border border-white/10 p-2 rounded-full shadow-2xl"
        >
          {sections.map((item) => {
            const isActive = active === item.id;
            return (
              <button
                key={item.id}
                onClick={() => scrollTo(item.id)}
                className={`flex flex-col items-center justify-center w-16 h-14 rounded-full transition-all duration-300 ${
                  isActive ? "bg-[#3b82f6]/10 text-[#60a5fa]" : "text-white/40 hover:text-white"
                }`}
              >
                <div className={`${isActive ? "scale-110 mb-1" : "scale-100 mb-1"} transition-transform duration-300`}>
                  {item.icon}
                </div>
                <span className="text-[9px] font-bold tracking-widest uppercase">{item.label}</span>
              </button>
            );
          })}

          {/* Mobile Contact Button */}
          <button
            onClick={() => scrollTo("contact")}
            className={`flex flex-col items-center justify-center w-16 h-14 rounded-full transition-all duration-300 ${
              active === "contact" ? "bg-[#3b82f6]/10 text-[#60a5fa]" : "text-white/40 hover:text-white"
            }`}
          >
            <div className={`${active === "contact" ? "scale-110 mb-1" : "scale-100 mb-1"} transition-transform duration-300`}>
              <Phone size={20} />
            </div>
            <span className="text-[9px] font-bold tracking-widest uppercase">Contact</span>
          </button>
        </motion.div>
      </div>
    </>
  );
}
