const points = [
  "Accountability, consistency, and measurable outcomes built into every interaction.",
  "Exclusive category membership within each chapter — zero internal competition.",
  "Trust-based relationships that convert directly into real, trackable business.",
  "Regular participation and disciplined networking for steady, sustainable growth.",
];

const stats = [
  { icon: "📈", value: "3.5x", label: "Average Revenue Growth" },
  { icon: "🏆", value: "50+", label: "Active Chapters Nationwide" },
  { icon: "⭐", value: "97%", label: "Member Satisfaction Rate" },
];

function WhyUs() {
  return (
    <section className="section" id="why-us">
      <div className="container">
        <div className="why-inner">
          {/* Left Text */}
          <div className="why-text reveal d1">
            <div className="section-tag">Why Choose Us</div>
            <h2>A Structured Approach to Business Growth</h2>
            <p>
              Unlike unstructured networking platforms, our system is designed to ensure
              accountability, consistency, and measurable outcomes.
            </p>
            <p>
              We focus on building trust-based relationships that convert into real business.
              Each member is part of a defined chapter, ensuring exclusivity within their
              business category and eliminating internal competition.
            </p>
            <p>
              The platform encourages regular participation, disciplined networking, and
              performance tracking, enabling members to grow steadily and sustainably.
            </p>

            <div className="why-points">
              {points.map((pt, i) => (
                <div className={`why-point reveal d${i + 1}`} key={i}>
                  <div className="why-check">
                    <svg viewBox="0 0 24 24">
                      <polyline points="20 6 9 17 4 12"/>
                    </svg>
                  </div>
                  <p>{pt}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right Stats */}
          <div className="why-visual">
            {stats.map((s, i) => (
              <div className={`why-stat-card reveal d${i + 2}`} key={i}>
                <div className="why-stat-icon">{s.icon}</div>
                <div className="why-stat-info">
                  <strong>{s.value}</strong>
                  <span>{s.label}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default WhyUs;
