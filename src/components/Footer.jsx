import { motion } from "framer-motion";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-20 bg-[#050505] border-t border-white/5">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 md:gap-16">
          {/* Brand Identity */}
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="flex flex-col items-center md:items-start gap-4"
          >
            <span className="text-xl font-serif tracking-[0.3em] text-white uppercase">
              Kanniyakumarione
            </span>
            <p className="text-[9px] uppercase tracking-[0.4em] text-white/20 font-light">
              Digital Architect & Venture Strategist
            </p>
          </motion.div>

          {/* Copyright & Legal */}
          <div className="flex flex-col items-center md:items-end gap-2 text-center md:text-right">
            <p className="text-[10px] uppercase tracking-[0.3em] text-white/40 font-light">
              © {currentYear} Kanniyakumarione. All Strategic Rights Reserved.
            </p>
            <div className="h-[1px] w-12 bg-[#d4af37]/30 my-2 md:ml-auto" />
          </div>
        </div>
        
        {/* Subtle decorative element */}
        <div className="mt-20 flex justify-center opacity-20">
          <div className="h-[1px] w-full max-w-[100px] bg-gradient-to-r from-transparent via-[#d4af37] to-transparent" />
        </div>
      </div>
    </footer>
  );
}
