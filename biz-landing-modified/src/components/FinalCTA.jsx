function FinalCTA() {
  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="final-cta" id="final-cta">
      <div className="container">
        <div className="final-cta-inner">
          <div className="section-tag reveal" style={{ background: "rgba(181,137,42,0.18)", color: "#d4a843" }}>
            Get Started
          </div>
          <h2 className="reveal d1">Start Building Meaningful Business Connections Today</h2>
          <p className="reveal d2">
            Take the next step toward consistent business growth. Join a trusted network
            where relationships turn into opportunities and opportunities turn into results.
          </p>
          <div className="final-cta-actions reveal d3">
            <a href="./WhoShouldJoin.jsx" onClick={(e) => { e.preventDefault(); scrollTo("who-should-join"); }} className="btn btn-primary">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm5 11h-4v4h-2v-4H7v-2h4V7h2v4h4v2z"/>
              </svg>
              Join as a Member
            </a>
            <a href="./HowItWorks.jsx" onClick={(e) => { e.preventDefault(); scrollTo("how-it-works"); }} className="btn btn-ghost">
              Request an Invitation
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default FinalCTA;
