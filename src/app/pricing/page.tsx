import Link from "next/link";

export default function Pricing() {
  const models = [
    {
      id: 1,
      title: "Model 1 — Resume Upgrade",
      badge: "Quick Upgrade",
      price: "₹299 – ₹499",
      desc: "A sharp resume refresh for students who want a cleaner ATS story and stronger positioning.",
      features: [
        "ATS formatting",
        "Better project descriptions",
        "Technical skills organization",
        "Achievement framing",
        "PDF + editable file",
        "Delivery in 24 hours"
      ],
      primary: false
    },
    {
      id: 2,
      title: "Model 2 — Placement Starter",
      badge: "Bestseller",
      price: "₹699 – ₹999",
      desc: "Our bestseller for students who want resume, LinkedIn, and profile visibility aligned for campus placements.",
      features: [
        "Everything in Model 1",
        "LinkedIn optimization",
        "GitHub / project guidance",
        "About section writing",
        "Headline optimization",
        "Delivery in 3 days"
      ],
      primary: true
    },
    {
      id: 3,
      title: "Model 3 — Research & Reports",
      badge: "Research-led",
      price: "₹999 – ₹2999",
      desc: "Strong authority for students building papers, reports, and research-backed project submissions.",
      features: [
        "Abstract improvement",
        "Formatting compliance",
        "Methodology structuring",
        "Result section enhancement",
        "Citation formatting",
        "IEEE styling guidance"
      ],
      primary: false
    },
    {
      id: 4,
      title: "Model 4 — Premium Branding",
      badge: "Premium Offer",
      price: "₹1499 – ₹3999",
      desc: "A premium package for students who want a complete personal brand across resume, LinkedIn, portfolio, and GitHub.",
      features: [
        "Everything in Model 2",
        "Portfolio website build",
        "GitHub profile branding",
        "Detailed project storytelling",
        "Interview preparation notes"
      ],
      primary: false
    },
    {
      id: 5,
      title: "Model 5 — Presentation Pack",
      badge: "Submission Season",
      price: "Custom Quote",
      desc: "A high-impact package for submission season, meant to make your project look polished and professional.",
      features: [
        "PPT slide design",
        "Report polishing",
        "Demo script writing",
        "Viva preparation questions",
        "LinkedIn showcase post layout"
      ],
      primary: false
    }
  ];

  return (
    <div className="section-padding">
      <div className="container">
        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: "4.5rem" }}>
          <span style={{ fontSize: "0.8rem", color: "var(--accent-indigo)", fontWeight: "bold", textTransform: "uppercase" }}>Affordable Growth</span>
          <h1 style={{ fontSize: "2.5rem", marginTop: "0.5rem", marginBottom: "1rem" }}>Pricing Range</h1>
          <p style={{ color: "var(--text-secondary)", maxWidth: "600px", margin: "0 auto" }}>
            Structured pricing designed for engineering students at every stage of growth. Pick a model and scale your credibility.
          </p>
        </div>

        {/* Pricing Cards Grid */}
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
          gap: "2rem",
          alignItems: "stretch",
          marginBottom: "5rem"
        }}>
          {models.map((model) => (
            <div
              key={model.id}
              className="glass-card"
              style={{
                padding: "2.25rem",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                border: model.primary ? "1px solid rgba(99,102,241,0.5)" : "1px solid var(--border-light)",
                boxShadow: model.primary ? "var(--shadow-neon)" : "none",
                position: "relative"
              }}
            >
              {model.primary && (
                <div style={{
                  position: "absolute",
                  top: "1rem",
                  right: "1rem",
                  background: "var(--accent-indigo)",
                  color: "#fff",
                  fontSize: "0.7rem",
                  fontWeight: "bold",
                  padding: "0.25rem 0.5rem",
                  borderRadius: "0.25rem",
                  textTransform: "uppercase"
                }}>
                  Popular
                </div>
              )}

              <div>
                <span style={{ fontSize: "0.75rem", color: "var(--text-muted)", textTransform: "uppercase" }}>{model.badge}</span>
                <h3 style={{ fontSize: "1.25rem", margin: "0.25rem 0 1rem 0", color: "#fff" }}>{model.title}</h3>
                
                <div style={{ fontSize: "1.75rem", fontWeight: "800", color: "var(--accent-indigo)", marginBottom: "1rem", fontFamily: "var(--font-display)" }}>
                  {model.price}
                </div>
                
                <p style={{ fontSize: "0.85rem", color: "var(--text-secondary)", marginBottom: "1.5rem", minHeight: "60px" }}>
                  {model.desc}
                </p>

                <ul style={{ display: "flex", flexDirection: "column", gap: "0.75rem", listStyle: "none", marginBottom: "2rem" }}>
                  {model.features.map((feature, idx) => (
                    <li key={idx} style={{ display: "flex", alignItems: "center", gap: "0.5rem", fontSize: "0.85rem", color: "var(--text-secondary)" }}>
                      <span style={{ color: "var(--accent-emerald)" }}>✓</span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <Link
                href="/contact"
                className={`btn ${model.primary ? "btn-primary" : "btn-secondary"}`}
                style={{ width: "100%" }}
              >
                Choose Model
              </Link>
            </div>
          ))}
        </div>

        {/* Custom Quote section */}
        <div className="glass-panel" style={{
          padding: "3rem",
          textAlign: "center",
          maxWidth: "800px",
          margin: "0 auto"
        }}>
          <h3 style={{ fontSize: "1.5rem", marginBottom: "0.75rem" }}>Need a Custom Combination?</h3>
          <p style={{ color: "var(--text-secondary)", fontSize: "0.95rem", marginBottom: "1.5rem", maxWidth: "550px", margin: "0 auto 1.5rem auto" }}>
            If you need a custom combination of resume, research paper formatting, and personal branding, contact our architects directly.
          </p>
          <div style={{ display: "flex", justifyContent: "center", gap: "1rem", flexWrap: "wrap" }}>
            <Link href="/contact" className="btn btn-accent">
              Get a Quote
            </Link>
            <Link href="/process" className="btn btn-secondary">
              View Services
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
