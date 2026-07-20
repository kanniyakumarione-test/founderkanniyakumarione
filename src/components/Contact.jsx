import { motion } from "framer-motion";

export default function Contact() {
  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const name = formData.get("name");
    const email = formData.get("email");
    const message = formData.get("message");
    
    const text = `*Contact Request*%0A%0A*Name:* ${name}%0A*Email:* ${email}%0A*Message:* ${message}`;
    window.open(`https://wa.me/917358847752?text=${text}`, "_blank");
  };

  return (
    <section id="contact" className="py-16 md:py-24 relative z-10">
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
              <div className="w-fit">
                <span className="tag">Contact</span>
              </div>
              <h2 className="premium-gradient-text leading-[0.95]">
                Get In <span className="italic font-normal">Touch.</span>
              </h2>
              <p className="text-white/40 text-xl font-light leading-relaxed max-w-md">
                Have a question or want to collaborate? Feel free to reach out to us.
              </p>
            </div>

            <div className="space-y-12">
              <div className="group">
                <p className="text-[10px] uppercase tracking-widest text-white/40 mb-3 group-hover:text-[#60a5fa] transition-colors font-bold">Phone</p>
                <a href="tel:+917358847752" className="text-2xl md:text-3xl font-bold text-white hover:text-[#60a5fa] transition-colors">
                  +91 7358847752
                </a>
              </div>
              
              <div className="group">
                <p className="text-[10px] uppercase tracking-widest text-white/40 mb-3 group-hover:text-[#60a5fa] transition-colors font-bold">Email</p>
                <a href="mailto:kanniyakumarione@gmail.com" className="text-xl md:text-2xl font-bold text-white hover:text-[#60a5fa] transition-colors break-all">
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
            className="glass-panel p-10 md:p-14 lg:p-16 relative overflow-hidden"
          >
            <form onSubmit={handleSubmit} className="space-y-12 md:space-y-14 relative z-10">
              <div className="space-y-10 md:space-y-12">
                <div className="relative group">
                  <label className="text-xs tracking-widest text-white/50 group-focus-within:text-[#60a5fa] transition-colors block mb-3 font-semibold uppercase">Your Name</label>
                  <input name="name" type="text" required placeholder="Full Name" className="w-full bg-transparent border-b border-white/20 py-3 text-white font-medium focus:outline-none transition-all placeholder:text-white/20 focus:border-transparent" />
                  <div className="absolute bottom-0 left-0 h-[2px] bg-[#60a5fa] w-0 group-focus-within:w-full transition-all duration-500" />
                </div>

                <div className="relative group">
                  <label className="text-xs tracking-widest text-white/50 group-focus-within:text-[#60a5fa] transition-colors block mb-3 font-semibold uppercase">Email Address</label>
                  <input name="email" type="email" required placeholder="Email Address" className="w-full bg-transparent border-b border-white/20 py-3 text-white font-medium focus:outline-none transition-all placeholder:text-white/20 focus:border-transparent" />
                  <div className="absolute bottom-0 left-0 h-[2px] bg-[#60a5fa] w-0 group-focus-within:w-full transition-all duration-500" />
                </div>

                <div className="relative group">
                  <label className="text-xs tracking-widest text-white/50 group-focus-within:text-[#60a5fa] transition-colors block mb-3 font-semibold uppercase">Message</label>
                  <textarea name="message" rows="4" required placeholder="How can we help?" className="w-full bg-transparent border-b border-white/20 py-3 text-white font-medium focus:outline-none transition-all resize-none placeholder:text-white/20 focus:border-transparent" />
                  <div className="absolute bottom-0 left-0 h-[2px] bg-[#60a5fa] w-0 group-focus-within:w-full transition-all duration-500" />
                </div>
              </div>

              <button type="submit" className="button-primary w-full py-5">
                Send Message
              </button>
            </form>
          </motion.div>

        </div>
      </div>
    </section>
  );
}



