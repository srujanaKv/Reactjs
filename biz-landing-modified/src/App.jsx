import { useEffect } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import HowItWorks from "./components/HowItWorks";
import Features from "./components/Features";
import WhyUs from "./components/WhyUs";
import WhoShouldJoin from "./components/WhoShouldJoin";
import Testimonials from "./components/Testimonials";
import FinalCTA from "./components/FinalCTA";
import Footer from "./components/Footer";

function App() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.12 }
    );
    const revealEls = document.querySelectorAll(".reveal");
    revealEls.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  });

  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <HowItWorks />
        <Features />
        <WhyUs />
        <WhoShouldJoin />
        <Testimonials />
        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}

export default App;
