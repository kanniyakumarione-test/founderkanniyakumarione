import { motion, AnimatePresence } from "framer-motion";
import { useEffect } from "react";
import logo from "../assets/kanniyakumarione logo.png";

export default function IntentPause({ onDone }) {
  useEffect(() => {
    const t = setTimeout(onDone, 2400); // Slightly slower for prestige
    return () => clearTimeout(t);
  }, [onDone]);

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
        className="fixed inset-0 z-[9999] flex items-center justify-center bg-[#050505]"
      >
        <div className="relative flex flex-col items-center gap-12">
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
            className="flex items-center justify-center p-6 bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl"
          >
            <img src={logo} alt="Kanniyakumarione Logo" className="h-24 w-auto object-contain" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 1 }}
            className="text-center"
          >
            <p className="text-[10px] uppercase tracking-[0.6em] text-[#d4af37]">Kanniyakumarione</p>
          </motion.div>
        </div>

        <motion.div
          initial={{ width: "0%" }}
          animate={{ width: "100%" }}
          transition={{ duration: 2.2, ease: "easeInOut" }}
          className="absolute bottom-0 left-0 h-[1px] bg-[#d4af37]/30"
        />
      </motion.div>
    </AnimatePresence>
  );
}
