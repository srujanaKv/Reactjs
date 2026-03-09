const features = [
  {
    icon: "🔗",
    title: "Referral Management",
    desc: "Easily create, share, and track referrals. Monitor the progress of each referral from initial contact to successful closure.",
  },
  {
    icon: "📅",
    title: "Meeting Management",
    desc: "View upcoming meetings, access agendas, and mark attendance. Ensure consistent participation and engagement within your chapter.",
  },
  {
    icon: "👥",
    title: "Member Directory",
    desc: "Access a verified list of professionals within your chapter. Connect with members based on their business category and expertise.",
  },
  {
    icon: "📊",
    title: "Performance Dashboard",
    desc: "Track key metrics such as referrals given, referrals received, closed business value, and attendance percentage.",
  },
  {
    icon: "🤝",
    title: "One-to-One Meetings",
    desc: "Schedule personalized meetings with members to build deeper relationships and explore collaboration opportunities.",
  },
  {
    icon: "🔔",
    title: "Notifications & Updates",
    desc: "Receive timely alerts for meetings, referrals, announcements, and important updates to stay engaged at all times.",
  },
];

const delayClasses = ["d1", "d2", "d3", "d4", "d5", "d6"];

function Features() {
  return (
    <section className="section section-alt" id="features">
      <div className="container">
        <div className="section-header reveal">
          <div className="section-tag">Features</div>
          <h2>Designed to Simplify Networking and Maximize Business Opportunities</h2>
          <p>
            Our platform provides all the tools required to manage networking activities,
            track business growth, and maintain strong professional relationships.
          </p>
        </div>

        <div className="features-grid">
          {features.map((feat, i) => (
            <div className={`feature-card reveal ${delayClasses[i]}`} key={i}>
              <div className="feature-icon">{feat.icon}</div>
              <h3>{feat.title}</h3>
              <p>{feat.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Features;
