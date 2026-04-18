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
    <section id="contact" className="py-24 md:py-32 relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr,1.2fr] gap-16 md:gap-32 items-start">
          
          {/* Executive Panel */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8, ease: [0.2, 1, 0.3, 1] }}
            className="space-y-12 md:space-y-20"
          >
            <div className="space-y-6 md:space-y-8 text-center lg:text-left">
              <span className="tag shadow-sm">Strategic Inquiry</span>
              <h2 className="premium-gradient-text">
                Start the <span className="italic text-[#d4af37]">Dialogue</span>.
              </h2>
              <p className="text-white/40 text-base md:text-lg max-w-md mx-auto lg:mx-0 font-light leading-relaxed">
                For high-impact ventures, strategic collaborations, or executive inquiries, 
                direct correspondence is prioritised.
              </p>
            </div>

            <div className="space-y-10 md:space-y-16">
              <div className="group text-center lg:text-left">
                <p className="text-[8px] md:text-[9px] uppercase tracking-[0.3em] md:tracking-[0.4em] text-white/20 mb-3 md:mb-4 group-hover:text-[#d4af37] transition-colors">Executive Support</p>
                <a href="tel:+917358847752" className="text-xl md:text-2xl font-serif text-white tracking-widest hover:text-[#d4af37] transition-colors block">
                  +91 7358847752
                </a>
              </div>
              
              <div className="group text-center lg:text-left">
                <p className="text-[8px] md:text-[9px] uppercase tracking-[0.3em] md:tracking-[0.4em] text-white/20 mb-3 md:mb-4 group-hover:text-[#d4af37] transition-colors">Direct Correspondence</p>
                <a href="mailto:kanniyakumarione@gmail.com" className="text-xl md:text-2xl font-serif text-white tracking-tight hover:text-[#d4af37] transition-colors block break-all">
                  kanniyakumarione@gmail.com
                </a>
              </div>

              <div className="pt-10 border-t border-white/5 opacity-50 flex items-center justify-center lg:justify-start gap-4 md:gap-6">
                 <div className="h-1 w-1 rounded-full bg-[#d4af37]" />
                 <p className="text-[8px] md:text-[9px] uppercase tracking-[0.3em] md:tracking-[0.4em] text-white/40">Digital Presence: Global Operations</p>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.2, 1, 0.3, 1] }}
            className="glass-panel p-8 md:p-12 lg:p-16"
          >
            <form onSubmit={handleSubmit} className="space-y-12 md:space-y-16">
              <div className="space-y-10 md:space-y-12">
                <div className="relative group">
                  <label className="text-[8px] md:text-[9px] uppercase tracking-[0.3em] md:tracking-[0.4em] text-white/30 group-focus-within:text-[#d4af37] transition-colors block mb-3 md:mb-4">Subject Name</label>
                  <input 
                    name="name" 
                    type="text" 
                    required 
                    placeholder="Enter your full name"
                    className="w-full bg-transparent border-b border-white/10 py-3 md:py-4 text-white font-light focus:outline-none transition-all placeholder:text-white/10 text-sm md:text-base"
                  />
                  <div className="absolute bottom-0 left-0 h-[1px] bg-[#d4af37] w-0 group-focus-within:w-full transition-all duration-700" />
                </div>

                <div className="relative group">
                  <label className="text-[8px] md:text-[9px] uppercase tracking-[0.3em] md:tracking-[0.4em] text-white/30 group-focus-within:text-[#d4af37] transition-colors block mb-3 md:mb-4">Digital Address</label>
                  <input 
                    name="email" 
                    type="email" 
                    required 
                    placeholder="Enter your professional email"
                    className="w-full bg-transparent border-b border-white/10 py-3 md:py-4 text-white font-light focus:outline-none transition-all placeholder:text-white/10 text-sm md:text-base"
                  />
                  <div className="absolute bottom-0 left-0 h-[1px] bg-[#d4af37] w-0 group-focus-within:w-full transition-all duration-700" />
                </div>

                <div className="relative group">
                  <label className="text-[8px] md:text-[9px] uppercase tracking-[0.3em] md:tracking-[0.4em] text-white/30 group-focus-within:text-[#d4af37] transition-colors block mb-3 md:mb-4">Inquiry Brief</label>
                  <textarea 
                    name="message" 
                    rows="4" 
                    required 
                    placeholder="Outline your vision or inquiry"
                    className="w-full bg-transparent border-b border-white/10 py-3 md:py-4 text-white font-light focus:outline-none transition-all resize-none placeholder:text-white/10 text-sm md:text-base"
                  />
                  <div className="absolute bottom-0 left-0 h-[1px] bg-[#d4af37] w-0 group-focus-within:w-full transition-all duration-700" />
                </div>
              </div>

              <button type="submit" className="button-primary w-full group py-4 md:py-5">
                Dispatch Inquiry
                <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity" />
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}


