import { useState } from "react";
import "./Auth.css";

function Login() {
  const [form, setForm] = useState({ email: "", password: "" });
  const [showPassword, setShowPassword] = useState(false);
  const [errors, setErrors] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [loggedIn, setLoggedIn] = useState(false);

  const validate = () => {
    const errs = {};
    if (!form.email) errs.email = "Email is required.";
    else if (!/\S+@\S+\.\S+/.test(form.email)) errs.email = "Enter a valid email address.";
    if (!form.password) errs.password = "Password is required.";
    else if (form.password.length < 6) errs.password = "Password must be at least 6 characters.";
    return errs;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: "" }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length > 0) {
      setErrors(errs);
      return;
    }
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      setLoggedIn(true);
    }, 1500);
  };

  if (loggedIn) {
    return <Dashboard user={form.email} onLogout={() => { setLoggedIn(false); setForm({ email: "", password: "" }); }} />;
  }

  return (
    <div className="auth-page">
      <div className="auth-left">
        <div className="auth-left-inner">
          <a href="/" className="auth-logo">
            <div className="logo-icon">
              <svg viewBox="0 0 24 24" fill="white"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 14H9V8h2v8zm4 0h-2V8h2v8z"/></svg>
            </div>
            BizConnect
          </a>

          <div className="auth-left-content">
            <div className="auth-quote-icon">"</div>
            <p className="auth-quote">
              This platform has completely transformed the way I generate business. The structured approach ensures consistent, high-quality referrals every month.
            </p>
            <div className="auth-quote-author">
              <div className="auth-av av-blue">AK</div>
              <div>
                <strong>Arjun Kapoor</strong>
                <span>Marketing Consultant, Mumbai</span>
              </div>
            </div>
          </div>

          <div className="auth-stats">
            <div className="auth-stat">
              <span className="auth-stat-num">1000+</span>
              <span className="auth-stat-label">Members</span>
            </div>
            <div className="auth-stat-divider"></div>
            <div className="auth-stat">
              <span className="auth-stat-num">50+</span>
              <span className="auth-stat-label">Chapters</span>
            </div>
            <div className="auth-stat-divider"></div>
            <div className="auth-stat">
              <span className="auth-stat-num">97%</span>
              <span className="auth-stat-label">Satisfaction</span>
            </div>
          </div>
        </div>
      </div>

      {/* Right Panel – Form */}
      <div className="auth-right">
        <div className="auth-form-wrap">
          <div className="auth-form-header">
            <h1>Welcome back</h1>
            <p>Login to your BizConnect account to manage referrals, meetings, and more.</p>
          </div>

          <form className="auth-form" onSubmit={handleSubmit} noValidate>
            {/* Email */}
            <div className={`form-group ${errors.email ? "has-error" : ""}`}>
              <label htmlFor="email">Email Address</label>
              <div className="input-wrap">
                <span className="input-icon">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                    <polyline points="22,6 12,13 2,6"/>
                  </svg>
                </span>
                <input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="you@example.com"
                  value={form.email}
                  onChange={handleChange}
                  autoComplete="email"
                />
              </div>
              {errors.email && <span className="field-error">{errors.email}</span>}
            </div>

            {/* Password */}
            <div className={`form-group ${errors.password ? "has-error" : ""}`}>
              <div className="label-row">
                <label htmlFor="password">Password</label>
                <a href="#" className="forgot-link">Forgot password?</a>
              </div>
              <div className="input-wrap">
                <span className="input-icon">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <rect x="3" y="11" width="18" height="11" rx="2" ry="2"/>
                    <path d="M7 11V7a5 5 0 0110 0v4"/>
                  </svg>
                </span>
                <input
                  id="password"
                  name="password"
                  type={showPassword ? "text" : "password"}
                  placeholder="Enter your password"
                  value={form.password}
                  onChange={handleChange}
                  autoComplete="current-password"
                />
                <button
                  type="button"
                  className="toggle-password"
                  onClick={() => setShowPassword(!showPassword)}
                  aria-label="Toggle password visibility"
                >
                  {showPassword ? (
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M17.94 17.94A10.07 10.07 0 0112 20c-7 0-11-8-11-8a18.45 18.45 0 015.06-5.94M9.9 4.24A9.12 9.12 0 0112 4c7 0 11 8 11 8a18.5 18.5 0 01-2.16 3.19m-6.72-1.07a3 3 0 11-4.24-4.24"/>
                      <line x1="1" y1="1" x2="23" y2="23"/>
                    </svg>
                  ) : (
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/>
                      <circle cx="12" cy="12" r="3"/>
                    </svg>
                  )}
                </button>
              </div>
              {errors.password && <span className="field-error">{errors.password}</span>}
            </div>

            {/* Remember me */}
            <div className="form-check">
              <label className="checkbox-label">
                <input type="checkbox" />
                <span className="checkmark"></span>
                Keep me logged in
              </label>
            </div>

            {/* Submit */}
            <button type="submit" className={`btn-submit ${isLoading ? "loading" : ""}`} disabled={isLoading}>
              {isLoading ? (
                <>
                  <span className="spinner"></span>
                  Signing in...
                </>
              ) : (
                "Login to Your Account"
              )}
            </button>
          </form>

          {/* Divider */}
          <div className="auth-divider"><span>or</span></div>

          {/* Sign up prompt */}
          <p className="auth-switch">
            Don't have an account?{" "}
            <a href="#">Join as a Member</a>
          </p>
        </div>
      </div>
    </div>
  );
}

/* ─── Dashboard / Logout Page (rendered after login) ─── */
function Dashboard({ user, onLogout }) {
  const [showConfirm, setShowConfirm] = useState(false);

  const initials = user
    .split("@")[0]
    .slice(0, 2)
    .toUpperCase();

  return (
    <div className="auth-page dashboard-page">
      {/* Sidebar */}
      <aside className="dash-sidebar">
        <a href="/" className="auth-logo" style={{ marginBottom: "48px" }}>
          <div className="logo-icon">
            <svg viewBox="0 0 24 24" fill="white"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 14H9V8h2v8zm4 0h-2V8h2v8z"/></svg>
          </div>
          BizConnect
        </a>

        <nav className="dash-nav">
          {[
            { icon: "🏠", label: "Dashboard", active: true },
            { icon: "🔗", label: "Referrals" },
            { icon: "📅", label: "Meetings" },
            { icon: "👥", label: "Members" },
            { icon: "📊", label: "Performance" },
            { icon: "🔔", label: "Notifications" },
          ].map((item) => (
            <a
              key={item.label}
              href="#"
              className={`dash-nav-item ${item.active ? "active" : ""}`}
            >
              <span>{item.icon}</span>
              {item.label}
            </a>
          ))}
        </nav>

        <button className="dash-logout-btn" onClick={() => setShowConfirm(true)}>
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M9 21H5a2 2 0 01-2-2V5a2 2 0 012-2h4"/>
            <polyline points="16 17 21 12 16 7"/>
            <line x1="21" y1="12" x2="9" y2="12"/>
          </svg>
          Logout
        </button>
      </aside>

      {/* Main content */}
      <main className="dash-main">
        {/* Header */}
        <header className="dash-header">
          <div>
            <h2 className="dash-greeting">Good morning 👋</h2>
            <p className="dash-sub">Here's what's happening in your chapter today.</p>
          </div>
          <div className="dash-user">
            <div className="dash-av">{initials}</div>
            <div className="dash-user-info">
              <strong>{user}</strong>
              <span>Active Member</span>
            </div>
          </div>
        </header>

        {/* Stats */}
        <div className="dash-stats">
          {[
            { label: "Referrals Given", value: "24", change: "+3 this week", up: true },
            { label: "Referrals Received", value: "18", change: "+2 this week", up: true },
            { label: "Meetings Attended", value: "12", change: "92% rate", up: true },
            { label: "Business Closed", value: "₹4.2L", change: "+12% vs last month", up: true },
          ].map((s, i) => (
            <div className="dash-stat-card" key={i}>
              <div className="dash-stat-label">{s.label}</div>
              <div className="dash-stat-val">{s.value}</div>
              <div className={`dash-stat-change ${s.up ? "up" : "down"}`}>{s.change}</div>
            </div>
          ))}
        </div>

        {/* Recent activity */}
        <div className="dash-activity">
          <h3>Recent Referrals</h3>
          <div className="activity-list">
            {[
              { name: "Sunita Rao", type: "Received", status: "Converted", date: "Today" },
              { name: "Manish Patel", type: "Given", status: "Pending", date: "Yesterday" },
              { name: "Priya Sharma", type: "Received", status: "In Progress", date: "Mar 4" },
              { name: "Rohit Verma", type: "Given", status: "Converted", date: "Mar 3" },
            ].map((item, i) => (
              <div className="activity-item" key={i}>
                <div className="activity-av">{item.name.slice(0, 2).toUpperCase()}</div>
                <div className="activity-info">
                  <strong>{item.name}</strong>
                  <span>{item.type}</span>
                </div>
                <span className={`activity-status status-${item.status.toLowerCase().replace(" ", "-")}`}>
                  {item.status}
                </span>
                <span className="activity-date">{item.date}</span>
              </div>
            ))}
          </div>
        </div>
      </main>

      {/* Logout Confirm Modal */}
      {showConfirm && (
        <div className="modal-overlay" onClick={() => setShowConfirm(false)}>
          <div className="modal-box" onClick={(e) => e.stopPropagation()}>
            <div className="modal-icon">
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M9 21H5a2 2 0 01-2-2V5a2 2 0 012-2h4"/>
                <polyline points="16 17 21 12 16 7"/>
                <line x1="21" y1="12" x2="9" y2="12"/>
              </svg>
            </div>
            <h3>Logging Out</h3>
            <p>Are you sure you want to log out of your BizConnect account?</p>
            <div className="modal-actions">
              <button className="btn-cancel" onClick={() => setShowConfirm(false)}>
                Stay Logged In
              </button>
              <button className="btn-confirm-logout" onClick={onLogout}>
                Yes, Logout
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Login;
