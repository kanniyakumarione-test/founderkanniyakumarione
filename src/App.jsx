import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
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

  useEffect(() => {
    const criticalImages = [portrait, logo];
    let loadedCount = 0;

    criticalImages.forEach((src) => {
      const img = new Image();
      img.src = src;
      img.onload = () => {
        loadedCount++;
        if (loadedCount === criticalImages.length) {
          setImagesLoaded(true);
        }
      };
      // For images that might be cached
      if (img.complete) img.onload();
    });
  }, []);

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
            className="relative overflow-x-hidden bg-background text-white"
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


