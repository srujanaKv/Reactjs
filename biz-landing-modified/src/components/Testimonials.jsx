const testimonials = [
  {
    text: "This platform has completely transformed the way I generate business. The structured approach ensures that I receive consistent and high-quality referrals.",
    name: "Srujana Koppadka",
    role: "Marketing Consultant",
    avClass: "av-blue",
    initials: "AK",
  },
  {
    text: "The chapter system creates a strong sense of trust and accountability. It is not just networking, it is a business growth engine.",
    name: "Ramya gowda",
    role: "Business Owner, Karnataka",
    avClass: "av-green",
    initials: "SR",
  },
  {
    text: "I have seen measurable growth in my revenue since joining. The performance tracking and referral system make a real difference.",
    name: "Hruthik",
    role: "Startup Founder",
    avClass: "av-orange",
    initials: "MP",
  },
];

function Testimonials() {
  return (
    <section className="section" id="testimonials">
      <div className="container">
        <div className="section-header reveal">
          <div className="section-tag">Testimonials</div>
          <h2>What Our Members Say</h2>
          <p>
            Real stories from professionals who have grown their businesses through our
            structured networking platform.
          </p>
        </div>

        <div className="testimonials-grid">
          {testimonials.map((t, i) => (
            <div className={`testimonial-card reveal d${i + 1}`} key={i}>
              <div className="quote-icon">"</div>
              <p className="testimonial-text">{t.text}</p>
              <div className="testimonial-author">
                <div className={`author-av ${t.avClass}`}>{t.initials}</div>
                <div>
                  <div className="author-name">{t.name}</div>
                  <div className="author-role">{t.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Testimonials;
