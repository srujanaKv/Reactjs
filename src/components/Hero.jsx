function Hero() {
  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="hero" id="hero">
      <div className="container">
        <div className="hero-inner">
          <div className="hero-left">
            <div className="hero-badge fade-up">
              <span></span> Trusted Business Network
            </div>

            <h1 className="fade-up delay-1">
              Grow Your Business Through{" "}
              <em>Trusted Referrals</em> and Meaningful Connections
            </h1>

            <p className="hero-sub fade-up delay-2">
              Join a structured business networking platform designed to help professionals
              connect, collaborate, and generate consistent revenue through high-quality
              referrals and disciplined meeting systems.
            </p>

            <p className="hero-support fade-up delay-2">
              Be part of a powerful ecosystem where every connection is an opportunity.
              Build credibility, expand your reach, and unlock new business potential
              through a trusted network of professionals.
            </p>

            <div className="hero-actions fade-up delay-3">
              <a href="./WhoShouldJoin.jsx" onClick={(e) => { e.preventDefault(); scrollTo("who-should-join"); }} className="btn btn-primary">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm5 11h-4v4h-2v-4H7v-2h4V7h2v4h4v2z"/>
                </svg>
                Join as a Member
              </a>
              <a href="./Features.jsx" onClick={(e) => { e.preventDefault(); scrollTo("features"); }} className="btn btn-secondary">
                Explore Features
              </a>
            </div>

            <div className="trust-list fade-up delay-4">
              {[
                "Over 1000+ active members across multiple chapters",
                "Consistent referral exchange and measurable business growth",
                "Structured and proven networking model",
              ].map((item, i) => (
                <div className="trust-item" key={i}>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none"
                    stroke="#4ade80" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="20 6 9 17 4 12"/>
                  </svg>
                  {item}
                </div>
              ))}
            </div>
          </div>
          <div className="hero-right fade-up delay-2">
            <div className="hero-card">
              <div className="hero-card-title">Platform Overview</div>
              <div className="stat-grid">
                <div className="stat-box">
                  <div className="stat-num">1000+</div>
                  <div className="stat-label">Active Members</div>
                </div>
                <div className="stat-box">
                  <div className="stat-num">50+</div>
                  <div className="stat-label">Chapters</div>
                </div>
                <div className="stat-box">
                  <div className="stat-num">98%</div>
                  <div className="stat-label">Referral Rate</div>
                </div>
                <div className="stat-box">
                  <div className="stat-num">₹2Cr+</div>
                  <div className="stat-label">Business Done</div>
                </div>
              </div>
              <div className="member-row">
                <div className="member-avatars">
                  <div className="av av-1">AK</div>
                  <div className="av av-2">SR</div>
                  <div className="av av-3">MP</div>
                  <div className="av av-4">RV</div>
                </div>
                <div className="member-info">
                  <strong>New members joining</strong>
                  <span>12 this week</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
