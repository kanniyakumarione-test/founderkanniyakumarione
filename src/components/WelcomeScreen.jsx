import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import logo from "../assets/kanniyakumarione logo.png";

export default function IntentPause({ onDone, ready }) {
  const [timerDone, setTimerDone] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setTimerDone(true), 2200);
    return () => clearTimeout(t);
  }, []);

  useEffect(() => {
    if (ready && timerDone) {
      onDone();
    }
  }, [ready, timerDone, onDone]);

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-background">
      <div className="relative flex flex-col items-center gap-10">
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1, ease: [0.2, 1, 0.3, 1] }}
          className="flex items-center justify-center p-4 bg-white/[0.02] border border-white/5 rounded-xl will-change-transform"
        >
          <img 
            src={logo} 
            alt="Kanniyakumarione Logo" 
            className="h-20 md:h-24 w-auto object-contain" 
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="text-center will-change-transform"
        >
          <p className="text-[9px] md:text-[10px] uppercase tracking-[0.6em] text-[#d4af37]">Kanniyakumarione</p>
        </motion.div>
      </div>

      <motion.div
        initial={{ width: "0%" }}
        animate={{ width: "100%" }}
        transition={{ duration: 2, ease: "easeInOut" }}
        className="absolute bottom-0 left-0 h-[1px] bg-[#d4af37]/20"
      />
    </div>
  );
}

