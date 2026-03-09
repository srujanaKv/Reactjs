import { useState, useEffect } from "react";

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false);
  };

  return (
    <nav className={`navbar ${scrolled ? "scrolled" : ""}`}>
      <div className="container">
        <div className="navbar-inner">
          <a href="#hero" className="logo" onClick={(e) => { e.preventDefault(); scrollTo("hero"); }}>
            <div className="logo-icon">
              <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 14H9V8h2v8zm4 0h-2V8h2v8z"/>
              </svg>
            </div>
            BizConnect
          </a>

          <ul className="nav-links">
            <li><a href="./HowItWorks.jsx" onClick={(e) => { e.preventDefault(); scrollTo("how-it-works"); }}>How It Works</a></li>
            <li><a href="./Features.jsx" onClick={(e) => { e.preventDefault(); scrollTo("features"); }}>Features</a></li>
            <li><a href="./WhyUs.jsx" onClick={(e) => { e.preventDefault(); scrollTo("why-us"); }}>Why Us</a></li>
            <li><a href="./Testimonials.jsx" onClick={(e) => { e.preventDefault(); scrollTo("testimonials"); }}>Testimonials</a></li>
          </ul>

          <div className="nav-cta">
            <a href="./WhoShouldJoin.jsx" onClick={(e) => { e.preventDefault(); scrollTo("who-should-join"); }} className="btn btn-outline">Who Should Join</a>
            <a href="./FinalCTA.jsx" onClick={(e) => { e.preventDefault(); scrollTo("final-cta"); }} className="btn btn-primary">Get Started</a>
          </div>

          <button
            className="hamburger"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
        <div className={`mobile-menu ${menuOpen ? "open" : ""}`}>
          <a href="./HowItWorks.jsx" onClick={(e) => { e.preventDefault(); scrollTo("how-it-works"); }}>How It Works</a>
          <a href="./Features.jsx" onClick={(e) => { e.preventDefault(); scrollTo("features"); }}>Features</a>
          <a href="./WhyUs.jsx" onClick={(e) => { e.preventDefault(); scrollTo("why-us"); }}>Why Us</a>
          <a href="./Testimonials.jsx" onClick={(e) => { e.preventDefault(); scrollTo("testimonials"); }}>Testimonials</a>
          <a href="./WhoShouldJoin.jsx" onClick={(e) => { e.preventDefault(); scrollTo("who-should-join"); }} className="btn btn-outline">Who Should Join</a>
          <a href="./FinalCTA.jsx" onClick={(e) => { e.preventDefault(); scrollTo("final-cta"); }} className="btn btn-primary">Get Started</a>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
