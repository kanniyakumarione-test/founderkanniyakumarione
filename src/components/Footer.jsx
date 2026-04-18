import { motion } from "framer-motion";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-16 md:py-24 border-t border-white/5 relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-[1px] bg-gradient-to-r from-transparent via-[#d4af37]/20 to-transparent" />
      
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:grid md:grid-cols-[1.5fr,1fr] gap-12 md:gap-16 items-start">
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="space-y-6 md:space-y-8"
          >
            <div className="space-y-4">
              <span className="text-xl md:text-2xl font-serif tracking-[0.3em] md:tracking-[0.4em] text-white uppercase block">
                Kanniyakumarione
              </span>
              <p className="text-[9px] md:text-[10px] uppercase tracking-[0.4em] md:tracking-[0.5em] text-white/30 font-light max-w-sm leading-relaxed">
                Defining the digital infrastructure of tomorrow through trust and radical innovation.
              </p>
            </div>
            
            <div className="flex gap-6 md:gap-8">
              <a 
                href="https://www.linkedin.com/in/roshinth-sojan-846880264/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-[9px] md:text-[10px] uppercase tracking-[0.3em] text-white/20 hover:text-[#d4af37] transition-colors"
              >
                LinkedIn
              </a>
              <a 
                href="mailto:kanniyakumarione@gmail.com" 
                className="text-[9px] md:text-[10px] uppercase tracking-[0.3em] text-white/20 hover:text-[#d4af37] transition-colors"
              >
                Email
              </a>
            </div>
          </motion.div>

          <div className="w-full md:text-right space-y-8">
             <div className="space-y-2">
                <p className="text-[9px] md:text-[10px] uppercase tracking-[0.4em] text-white/40">Strategic Headquarters</p>
                <p className="text-xs md:text-sm font-light text-white/60">Digital Operations // Global Reach</p>
             </div>
             
             <div className="pt-8 border-t border-white/5 inline-block w-full md:w-auto">
                <p className="text-[9px] md:text-[10px] uppercase tracking-[0.2em] md:tracking-[0.3em] text-white/20 font-light lowercase md:uppercase">
                  © {currentYear} Kanniyakumarione. <br className="md:hidden" />
                  All Strategic Rights Reserved.
                </p>
             </div>
          </div>
        </div>
      </div>
    </footer>
  );
}


