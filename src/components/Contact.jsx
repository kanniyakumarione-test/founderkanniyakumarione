import { motion } from "framer-motion";

export default function Contact() {
  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const name = formData.get("name");
    const email = formData.get("email");
    const message = formData.get("message");
    
    const text = `*Strategic Briefing Request*%0A%0A*Name:* ${name}%0A*Email:* ${email}%0A*Message:* ${message}`;
    window.open(`https://wa.me/917358847752?text=${text}`, "_blank");
  };

  return (
    <section id="contact" className="py-32 bg-[#050505] overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-start">
          
          {/* Executive Panel (Left) */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
            className="space-y-20"
          >
            <div className="space-y-6">
              <span className="text-[10px] uppercase tracking-[0.6em] text-[#d4af37]">Reach the Vision</span>
              <h2 className="text-5xl md:text-6xl font-serif text-white tracking-tight leading-[1.1]">
                Launch <br /> the <span className="italic">Dialogue</span>.
              </h2>
              <p className="text-white/30 text-lg max-w-md font-light leading-relaxed">
                For high-impact ventures, strategic collaborations, or private inquiries, 
                our executive line is open to vision-led partners.
              </p>
            </div>

            <div className="space-y-12">
              <div className="group">
                <p className="text-[9px] uppercase tracking-[0.4em] text-white/20 mb-4 group-hover:text-[#d4af37]/60 transition-colors">Executive Line</p>
                <a href="tel:+917358847752" className="text-2xl font-serif text-white tracking-widest hover:text-[#d4af37] transition-colors">
                  +91 7358847752
                </a>
              </div>
              
              <div className="group">
                <p className="text-[9px] uppercase tracking-[0.4em] text-white/20 mb-4 group-hover:text-[#d4af37]/60 transition-colors">Direct Correspondence</p>
                <a href="mailto:kanniyakumarione@gmail.com" className="text-2xl font-serif text-white tracking-tight hover:text-[#d4af37] transition-colors lowercase">
                  kanniyakumarione@gmail.com
                </a>
              </div>

              <div className="pt-8 border-t border-white/5 inline-block">
                <p className="text-[9px] uppercase tracking-[0.5em] text-white/10 italic">
                  Digital Residence: Global
                </p>
              </div>
            </div>
          </motion.div>

          {/* Strategic Briefing Form (Right) */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="relative"
          >
            <div className="absolute -left-12 top-0 bottom-0 w-[1px] bg-gradient-to-b from-transparent via-white/5 to-transparent hidden lg:block" />
            
            <form onSubmit={handleSubmit} className="space-y-12 bg-white/[0.02] backdrop-blur-3xl border border-white/5 p-10 md:p-16 rounded-[2px]">
              <div className="space-y-12">
                <div className="relative group">
                  <label className="text-[10px] uppercase tracking-[0.4em] text-white/30 group-focus-within:text-[#d4af37] transition-colors block mb-2">Subject Name</label>
                  <input 
                    name="name" 
                    type="text" 
                    required 
                    placeholder="Enter Identity..."
                    className="w-full bg-transparent border-b border-white/10 py-4 text-white font-light focus:outline-none transition-all placeholder:text-white/5"
                  />
                  <div className="absolute bottom-0 left-0 h-[1px] bg-[#d4af37] w-0 group-focus-within:w-full transition-all duration-700" />
                </div>

                <div className="relative group">
                  <label className="text-[10px] uppercase tracking-[0.4em] text-white/30 group-focus-within:text-[#d4af37] transition-colors block mb-2">Correspondence Email</label>
                  <input 
                    name="email" 
                    type="email" 
                    required 
                    placeholder="Enter Digital Address..."
                    className="w-full bg-transparent border-b border-white/10 py-4 text-white font-light focus:outline-none transition-all placeholder:text-white/5"
                  />
                  <div className="absolute bottom-0 left-0 h-[1px] bg-[#d4af37] w-0 group-focus-within:w-full transition-all duration-700" />
                </div>

                <div className="relative group">
                  <label className="text-[10px] uppercase tracking-[0.4em] text-white/30 group-focus-within:text-[#d4af37] transition-colors block mb-2">Briefing Intent</label>
                  <textarea 
                    name="message" 
                    rows="4" 
                    required 
                    placeholder="Outline the Vision..."
                    className="w-full bg-transparent border-b border-white/10 py-4 text-white font-light focus:outline-none transition-all resize-none placeholder:text-white/5"
                  />
                  <div className="absolute bottom-0 left-0 h-[1px] bg-[#d4af37] w-0 group-focus-within:w-full transition-all duration-700" />
                </div>
              </div>

              <motion.button 
                type="submit"
                whileHover={{ scale: 1.02, backgroundColor: "rgba(212, 175, 55, 1)", color: "#000" }}
                whileTap={{ scale: 0.98 }}
                className="w-full py-6 border border-[#d4af37]/30 text-[#d4af37] text-[11px] uppercase tracking-[0.5em] transition-all duration-500 font-medium"
              >
                Submit Briefing
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
