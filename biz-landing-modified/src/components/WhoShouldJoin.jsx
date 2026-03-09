const audience = [
  "Entrepreneurs looking to expand their business network",
  "Small and medium business owners seeking consistent leads",
  "Service providers aiming to build trust-based client relationships",
  "Consultants and professionals who rely on referrals",
  "Startups looking for visibility and connections",
  "Freelancers who want structured networking opportunities",
];

function WhoShouldJoin() {
  return (
    <section className="section section-alt" id="who-should-join">
      <div className="container">
        <div className="section-header reveal">
          <div className="section-tag">Who Should Join</div>
          <h2>Built for Professionals Who Want to Grow</h2>
          <p>
            This platform is ideal for individuals and businesses who believe in
            relationship-driven growth and long-term collaboration.
          </p>
        </div>

        <div className="audience-grid">
          {audience.map((item, i) => (
            <div className={`audience-card reveal d${(i % 3) + 1}`} key={i}>
              <div className="audience-dot"></div>
              <p>{item}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default WhoShouldJoin;
