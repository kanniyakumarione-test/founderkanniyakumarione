import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Lenis from "lenis";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import SEO from "./components/SEO";
import IntentPause from "./components/WelcomeScreen";
import SectionDivider from "./components/SectionDivider";
import CanvasBackground from "./components/ui/CanvasBackground";
import portrait from "./assets/profile.jpg";
import logo from "./assets/kanniyakumarione logo.png";

export default function App() {
  const [loading, setLoading] = useState(true);
  const [imagesLoaded, setImagesLoaded] = useState(false);
  const lenisRef = useRef();

  useEffect(() => {
    // Preload images
    const criticalImages = [portrait, logo];
    let loadedCount = 0;
    criticalImages.forEach((src) => {
      const img = new Image();
      img.src = src;
      img.onload = () => {
        loadedCount++;
        if (loadedCount === criticalImages.length) setImagesLoaded(true);
      };
      if (img.complete) img.onload();
    });

    // Initialize Lenis
    if (!loading) {
      const lenis = new Lenis({
        duration: 1.2,
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        orientation: 'vertical',
        smoothWheel: true,
        wheelMultiplier: 1,
        touchMultiplier: 2,
        infinite: false,
      });

      function raf(time) {
        lenis.raf(time);
        requestAnimationFrame(raf);
      }
      requestAnimationFrame(raf);
      lenisRef.current = lenis;

      return () => lenis.destroy();
    }
  }, [loading]);

  return (
    <>
      <SEO />
      <AnimatePresence mode="wait">
        {loading ? (
          <IntentPause 
            key="welcome" 
            ready={imagesLoaded} 
            onDone={() => setLoading(false)} 
          />
        ) : (
          <motion.div 
            key="content"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="relative bg-background text-white selection:bg-[#E8C67E] selection:text-black"
          >
            <CanvasBackground />
            <Navbar />
            <main>
              <Hero />
              <SectionDivider />
              <About />
              <Projects />
              <SectionDivider />
              <Contact />
              <Footer />
            </main>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}



