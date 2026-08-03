import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import logo from "../assets/logo-optimized.png";

export default function IntentPause({ onDone, ready }) {
  const [timerDone, setTimerDone] = useState(false);

  useEffect(() => {
    // Reduced artificial delay to make it feel much faster (800ms instead of 2200ms)
    const t = setTimeout(() => setTimerDone(true), 800);
    return () => clearTimeout(t);
  }, []);

  useEffect(() => {
    if (ready && timerDone) {
      onDone();
    }
  }, [ready, timerDone, onDone]);

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-background">
      <div className="relative flex flex-col items-center gap-6">
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ 
            duration: 0.5, 
            ease: "easeOut"
          }}
          className="flex items-center justify-center relative will-change-transform"
        >
          {/* Subtle pulse behind the logo */}
          <motion.div 
            animate={{ 
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.6, 0.3] 
            }}
            transition={{ 
              duration: 1.5, 
              repeat: Infinity,
              ease: "easeInOut" 
            }}
            className="absolute inset-0 bg-[#d4af37]/20 rounded-full blur-xl"
          />
          <img 
            src={logo} 
            alt="Kanniyakumarione Logo" 
            className="h-20 md:h-24 w-auto object-contain relative z-10" 
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.4 }}
          className="text-center flex flex-col items-center gap-3 will-change-transform"
        >
          <p className="text-[10px] md:text-[12px] uppercase tracking-[0.4em] text-white font-medium">Kanniyakumarione</p>
          
          {/* Small loading indicator */}
          <div className="flex gap-1.5 mt-2">
            {[0, 1, 2].map((i) => (
              <motion.div
                key={i}
                animate={{ y: [0, -4, 0] }}
                transition={{
                  duration: 0.6,
                  repeat: Infinity,
                  delay: i * 0.15,
                  ease: "easeInOut"
                }}
                className="w-1.5 h-1.5 rounded-full bg-[#d4af37]"
              />
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}
