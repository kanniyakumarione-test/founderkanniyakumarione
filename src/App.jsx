import { useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import SEO from "./components/SEO";
import IntentPause from "./components/WelcomeScreen";
import SectionDivider from "./components/SectionDivider"; // Import divider
import CanvasBackground from "./components/ui/CanvasBackground";

export default function App() {
  const [paused, setPaused] = useState(true);

  return (
    <>
      <SEO />
      {paused && <IntentPause onDone={() => setPaused(false)} />}

      <div className="relative overflow-x-hidden bg-[#050505] text-white">
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
      </div>
    </>
  );
}
