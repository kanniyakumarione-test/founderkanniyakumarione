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
    <section id="contact" className="py-24 md:py-48 bg-[#020202]">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr,1.3fr] gap-24 md:gap-32 items-start">
          
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="space-y-16 md:space-y-24"
          >
            <div className="space-y-8 md:space-y-12">
              <span className="tag">Briefing</span>
              <h2 className="premium-gradient-text leading-[0.95]">
                Start The <br />
                <span className="italic font-normal">Dialogue.</span>
              </h2>
              <p className="text-white/40 text-xl font-light leading-relaxed max-w-md">
                For high-impact ventures or strategic consultations, direct correspondence is prioritized.
              </p>
            </div>

            <div className="space-y-12">
              <div className="group">
                <p className="text-[10px] uppercase tracking-[0.5em] text-white/20 mb-4 group-hover:text-[#E8C67E] transition-colors">Executive Support</p>
                <a href="tel:+917358847752" className="text-2xl md:text-3xl font-serif text-white hover:text-[#E8C67E] transition-colors">
                  +91 7358847752
                </a>
              </div>
              
              <div className="group">
                <p className="text-[10px] uppercase tracking-[0.5em] text-white/20 mb-4 group-hover:text-[#E8C67E] transition-colors">Correspondence</p>
                <a href="mailto:kanniyakumarione@gmail.com" className="text-2xl md:text-3xl font-serif text-white hover:text-[#E8C67E] transition-colors break-all">
                  kanniyakumarione@gmail.com
                </a>
              </div>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.1 }}
            className="glass-panel p-10 md:p-16 lg:p-20"
          >
            <form onSubmit={handleSubmit} className="space-y-12 md:space-y-16">
              <div className="space-y-10 md:space-y-14">
                <div className="relative group">
                  <label className="text-[10px] uppercase tracking-[0.4em] text-white/30 group-focus-within:text-[#E8C67E] transition-colors block mb-4">Subject Name</label>
                  <input name="name" type="text" required placeholder="Full Name" className="w-full bg-transparent border-b border-white/10 py-4 text-white font-light focus:outline-none transition-all placeholder:text-white/10" />
                  <div className="absolute bottom-0 left-0 h-[1px] bg-[#E8C67E] w-0 group-focus-within:w-full transition-all duration-700" />
                </div>

                <div className="relative group">
                  <label className="text-[10px] uppercase tracking-[0.4em] text-white/30 group-focus-within:text-[#E8C67E] transition-colors block mb-4">Digital Address</label>
                  <input name="email" type="email" required placeholder="Professional Email" className="w-full bg-transparent border-b border-white/10 py-4 text-white font-light focus:outline-none transition-all placeholder:text-white/10" />
                  <div className="absolute bottom-0 left-0 h-[1px] bg-[#E8C67E] w-0 group-focus-within:w-full transition-all duration-700" />
                </div>

                <div className="relative group">
                  <label className="text-[10px] uppercase tracking-[0.4em] text-white/30 group-focus-within:text-[#E8C67E] transition-colors block mb-4">Brief</label>
                  <textarea name="message" rows="4" required placeholder="Vision or Inquiry" className="w-full bg-transparent border-b border-white/10 py-4 text-white font-light focus:outline-none transition-all resize-none placeholder:text-white/10" />
                  <div className="absolute bottom-0 left-0 h-[1px] bg-[#E8C67E] w-0 group-focus-within:w-full transition-all duration-700" />
                </div>
              </div>

              <button type="submit" className="button-primary w-full py-5">
                Dispatch Inquiry
              </button>
            </form>
          </motion.div>

        </div>
      </div>
    </section>
  );
}



