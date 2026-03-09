function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand reveal d1">
            <div className="logo">
              <div className="logo-icon">
                <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 14H9V8h2v8zm4 0h-2V8h2v8z"/>
                </svg>
              </div>
              BizConnect
            </div>
            <p>
              A structured business networking platform helping professionals connect,
              collaborate, and generate consistent revenue through trusted referrals.
            </p>
          </div>
          <div className="footer-col reveal d2">
            <h4>Quick Links</h4>
            <ul>
              <li><a href="#">About Us</a></li>
              <li><a href="#">Chapters</a></li>
              <li><a href="#">Contact</a></li>
              <li><a href="#">Privacy Policy</a></li>
              <li><a href="#">Terms and Conditions</a></li>
            </ul>
          </div>
          <div className="footer-col reveal d3">
            <h4>Platform</h4>
            <ul>
              <li><a href="#">How It Works</a></li>
              <li><a href="#">Features</a></li>
              <li><a href="#">Member Dashboard</a></li>
              <li><a href="#">Referral System</a></li>
              <li><a href="#">Meeting Schedule</a></li>
            </ul>
          </div>

          <div className="footer-col reveal d4">
            <h4>Contact Us</h4>
            <div className="footer-contact-item">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013 5.18 2 2 0 015 3h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L9.09 10.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 17.92z"/>
              </svg>
              +91 98765 43210
            </div>
            <div className="footer-contact-item">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                <polyline points="22,6 12,13 2,6"/>
              </svg>
              hello@bizconnect.in
            </div>
            <div className="footer-contact-item">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/>
                <circle cx="12" cy="10" r="3"/>
              </svg>
              Business Hub, Banglore south, Karnataka – 980050
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <span>© 2026 BizConnect. All rights reserved.</span>
         
        </div>
      </div>
    </footer>
  );
}

export default Footer;
