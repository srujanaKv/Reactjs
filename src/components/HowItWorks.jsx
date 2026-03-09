const steps = [
  {
    num: "01",
    title: "Join a Chapter",
    desc: "Choose a chapter based on your location and business category. Each chapter consists of professionals from diverse industries, ensuring non-competing collaboration.",
  },
  {
    num: "02",
    title: "Attend Structured Meetings",
    desc: "Participate in regular meetings designed to build trust, visibility, and strong professional relationships among members.",
  },
  {
    num: "03",
    title: "Exchange Referrals",
    desc: "Give and receive business referrals within your chapter. Every referral is an opportunity to expand your client base.",
  },
  {
    num: "04",
    title: "Track and Grow",
    desc: "Monitor your referrals, conversions, and revenue through a performance-driven dashboard that helps you measure real growth.",
  },
];

function HowItWorks() {
  return (
    <section className="section" id="how-it-works">
      <div className="container">
        <div className="section-header reveal">
          <div className="section-tag">The Process</div>
          <h2>How the Network Helps You Grow</h2>
          <p>
            Our platform follows a structured approach to business networking, ensuring every
            member gets equal opportunities to connect, present, and grow through a disciplined system.
          </p>
        </div>

        <div className="steps-grid">
          {steps.map((step, i) => (
            <div className={`step-card reveal d${i + 1}`} key={i}>
              <div className="step-num">{step.num}</div>
              <h3>{step.title}</h3>
              <p>{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default HowItWorks;
