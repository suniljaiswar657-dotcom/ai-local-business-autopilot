const modules = [
  { number: "01", title: "Customer support", detail: "Organize enquiries and prepare consistent replies.", status: "Workspace planned" },
  { number: "02", title: "Lead management", detail: "Capture prospects and track their next action.", status: "Workspace planned" },
  { number: "03", title: "Social content", detail: "Draft posts, captions, and campaign ideas.", status: "Workspace planned" },
  { number: "04", title: "Follow-up system", detail: "Keep customer callbacks and reminders visible.", status: "Workspace planned" },
  { number: "05", title: "Business analytics", detail: "Monitor leads, response activity, and outcomes.", status: "Workspace planned" },
];

export default function Home() {
  return (
    <main className="shell">
      <aside className="sidebar">
        <div className="brand"><span className="brand-mark">A</span><span>autopilot<span className="muted">.ai</span></span></div>
        <div className="workspace-label">WORKSPACE</div>
        <a className="nav active" href="#overview">Overview</a>
        <a className="nav" href="#modules">AI Modules</a>
        <a className="nav" href="#activity">Activity</a>
        <div className="sidebar-bottom"><span className="status-dot" /> Foundation preview</div>
      </aside>
      <section className="main">
        <header className="topbar">
          <div><div className="eyebrow">LOCAL BUSINESS OPERATIONS</div><div className="page-title">Overview</div></div>
          <div className="profile"><span className="avatar">LB</span><span>Business workspace</span></div>
        </header>
        <section className="hero" id="overview">
          <div className="hero-copy">
            <div className="pill"><span className="status-dot" /> YOUR BUSINESS, IN ONE PLACE</div>
            <h1>Less busywork.<br /><span>More business.</span></h1>
            <p>A single command center for customer conversations, new leads, content, and follow-ups.</p>
            <a className="primary-button" href="#modules">Explore modules <span>↗</span></a>
          </div>
          <div className="hero-orbit" aria-hidden="true">
            <div className="orbit orbit-one"></div><div className="orbit orbit-two"></div>
            <div className="orbit-core">AI</div><div className="orbit-node node-one">✦</div>
            <div className="orbit-node node-two">↗</div><div className="orbit-node node-three">◎</div>
          </div>
          <div className="hero-foot"><span>01 / CONTROL CENTER</span><span>FOUNDATION BUILD</span></div>
        </section>
        <section className="metrics" id="activity">
          <div className="metric"><span className="metric-label">ACTIVE LEADS</span><strong>—</strong><small>Connect lead capture to begin</small></div>
          <div className="metric"><span className="metric-label">OPEN ENQUIRIES</span><strong>—</strong><small>Customer inbox not connected</small></div>
          <div className="metric"><span className="metric-label">FOLLOW-UPS DUE</span><strong>—</strong><small>Reminder engine not connected</small></div>
          <div className="metric"><span className="metric-label">AUTOMATIONS</span><strong>0</strong><small>No external actions enabled</small></div>
        </section>
        <section className="modules-section" id="modules">
          <div className="section-heading"><div><div className="eyebrow">THE TOOLKIT</div><h2>Business modules</h2></div><span className="section-count">05 MODULES</span></div>
          <div className="module-grid">
            {modules.map((module) => (
              <article className="module-card" key={module.number}>
                <div className="module-top"><span>{module.number} / MODULE</span><span className="module-arrow">↗</span></div>
                <h3>{module.title}</h3><p>{module.detail}</p>
                <div className="module-status"><span className="status-dot" />{module.status}</div>
              </article>
            ))}
          </div>
        </section>
        <footer><span>© 2026 AUTOPILOT.AI</span><span>INDEPENDENT PROJECT · MVP FOUNDATION</span></footer>
      </section>
    </main>
  );
}
