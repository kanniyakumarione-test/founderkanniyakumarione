import { motion } from "framer-motion";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-24 border-t border-white/[0.03] bg-[#020202]">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:grid md:grid-cols-2 gap-20 items-start">
          
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="space-y-10"
          >
            <div className="space-y-6">
              <span className="text-2xl font-serif text-white tracking-tight block">
                Kanniyakumarione
              </span>
              <p className="text-[10px] uppercase tracking-[0.5em] text-white/20 font-light max-w-sm leading-loose">
                Architecting the digital infrastructure of tomorrow through trust and radical precision.
              </p>
            </div>
            
            <div className="flex gap-10">
              <a 
                href="https://www.linkedin.com/in/roshinth-sojan-846880264/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-[10px] uppercase tracking-[0.4em] text-white/40 hover:text-[#E8C67E] transition-colors"
              >
                LinkedIn
              </a>
              <a 
                href="mailto:kanniyakumarione@gmail.com" 
                className="text-[10px] uppercase tracking-[0.4em] text-white/40 hover:text-[#E8C67E] transition-colors"
              >
                Direct
              </a>
            </div>
          </motion.div>

          <div className="md:text-right space-y-12 w-full">
             <div className="space-y-3">
                <p className="text-[10px] uppercase tracking-[0.5em] text-white/20">Operational HQ</p>
                <p className="text-sm font-light text-white/50 tracking-wide">Global Digital Systems // Strategic Hub</p>
             </div>
             
             <div className="pt-10 border-t border-white/[0.03]">
                <p className="text-[10px] uppercase tracking-[0.3em] text-white/10 font-light">
                  © {currentYear} Kanniyakumarione. <br className="md:hidden" />
                  Strategically Engineered Globally.
                </p>
             </div>
          </div>

        </div>
      </div>
    </footer>
  );
}



