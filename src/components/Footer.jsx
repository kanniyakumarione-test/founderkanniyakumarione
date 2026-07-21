import { motion } from "framer-motion";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative py-12 md:py-16 mt-12 border-t border-white/10 overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col md:grid md:grid-cols-2 gap-20 items-start">
          
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="space-y-10"
          >
            <div className="space-y-6">
              <span className="text-3xl font-bold text-white tracking-tight block">
                Kanniyakumari One
              </span>
              <p className="text-xs uppercase tracking-widest text-white/40 font-medium max-w-sm leading-relaxed">
                Connecting Kanyakumari through a unified digital platform.
              </p>
            </div>
            
            <div className="flex flex-wrap gap-8 md:gap-10">
              <a 
                href="https://roshinth-sojan-portfolio.vercel.app/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-xs uppercase tracking-widest font-semibold text-white/50 hover:text-[#60a5fa] transition-colors"
              >
                Portfolio
              </a>
              <a 
                href="https://www.linkedin.com/in/roshinth-sojan-846880264/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-xs uppercase tracking-widest font-semibold text-white/50 hover:text-[#60a5fa] transition-colors"
              >
                LinkedIn
              </a>
              <a 
                href="mailto:kanniyakumarione@gmail.com" 
                className="text-xs uppercase tracking-widest font-semibold text-white/50 hover:text-[#60a5fa] transition-colors"
              >
                Direct
              </a>
            </div>
          </motion.div>

          <div className="md:text-right space-y-12 w-full">
             <div className="space-y-3">
                 <p className="text-xs uppercase tracking-widest font-bold text-white/30">Location</p>
                 <p className="text-sm font-medium text-white/60 tracking-wide">Kanyakumari, Tamil Nadu, India</p>
             </div>
             
             <div className="pt-10 border-t border-white/10">
                <p className="text-xs font-medium text-white/30">
                  © {currentYear} Kanniyakumari One. <br className="md:hidden" />
                  All Rights Reserved.
                </p>
             </div>
          </div>

        </div>
      </div>
    </footer>
  );
}



