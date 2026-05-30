import Link from "next/link";

export default function Members() {
  const team = [
    {
      name: "Sahil Sawant",
      role: "Founder & System Architect",
      desc: "Builds the product backbone, system design, and the research-to-resume operating model that turns student potential into professional clarity.",
      icon: "💻"
    },
    {
      name: "Samiksha Gurakhe",
      role: "Business Manager",
      desc: "Leads operations, client coordination, and the overall growth journey so every student engagement stays structured, clear, and impactful.",
      icon: "📊"
    },
    {
      name: "Yash Thakur",
      role: "QA Analyst",
      desc: "Reviews the quality of outputs, validates the student journey, and makes sure every deliverable is polished, reliable, and ready to use.",
      icon: "🔍"
    }
  ];

  return (
    <div className="section-padding">
      <div className="container">
        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: "4.5rem" }}>
          <span style={{ fontSize: "0.8rem", color: "var(--accent-indigo)", fontWeight: "bold", textTransform: "uppercase" }}>Meet the Studio</span>
          <h1 style={{ fontSize: "2.5rem", marginTop: "0.5rem", marginBottom: "1rem" }}>Connected Members</h1>
          <p style={{ color: "var(--text-secondary)", maxWidth: "600px", margin: "0 auto" }}>
            A premium showcase of the people behind the growth journey, framing student potential with technical clarity.
          </p>
        </div>

        {/* Member Cards */}
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
          gap: "2.5rem",
          marginBottom: "5rem"
        }}>
          {team.map((member, idx) => (
            <div
              key={idx}
              className="glass-card"
              style={{
                padding: "2.5rem",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                textAlign: "center",
                gap: "1.25rem"
              }}
            >
              <div style={{
                width: "80px",
                height: "80px",
                borderRadius: "50%",
                background: "rgba(99, 102, 241, 0.08)",
                border: "1px solid rgba(99, 102, 241, 0.2)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: "2.5rem"
              }}>
                {member.icon}
              </div>

              <div>
                <h3 style={{ fontSize: "1.35rem", color: "#fff", marginBottom: "0.25rem" }}>{member.name}</h3>
                <div style={{
                  fontSize: "0.8rem",
                  fontWeight: "bold",
                  color: "var(--accent-cyan)",
                  textTransform: "uppercase",
                  letterSpacing: "0.05em",
                  marginBottom: "1rem"
                }}>
                  {member.role}
                </div>
                <p style={{ fontSize: "0.9rem", color: "var(--text-secondary)", lineHeight: "1.6" }}>
                  {member.desc}
                </p>
              </div>

              <div style={{
                marginTop: "auto",
                width: "100%",
                display: "flex",
                justifyContent: "center",
                gap: "1rem"
              }}>
                <span style={{ fontSize: "0.75rem", background: "rgba(255,255,255,0.03)", border: "1px solid var(--border-light)", padding: "0.3rem 0.6rem", borderRadius: "0.25rem", color: "var(--text-muted)" }}>
                  Connected member
                </span>
                <span style={{ fontSize: "0.75rem", background: "rgba(99,102,241,0.05)", border: "1px solid rgba(99,102,241,0.2)", padding: "0.3rem 0.6rem", borderRadius: "0.25rem", color: "var(--accent-indigo)" }}>
                  Premium profile
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Next step CTA */}
        <div className="glass-panel" style={{
          padding: "3rem",
          textAlign: "center",
          maxWidth: "800px",
          margin: "0 auto"
        }}>
          <h3 style={{ fontSize: "1.5rem", marginBottom: "0.75rem" }}>Need the Next Step?</h3>
          <p style={{ color: "var(--text-secondary)", fontSize: "0.95rem", marginBottom: "1.5rem", maxWidth: "550px", margin: "0 auto" }}>
            Build your own profile story and connect it to a polished growth plan. Talk with our specialists today.
          </p>
          <div style={{ display: "flex", justifyContent: "center", gap: "1rem", flexWrap: "wrap", marginTop: "1.5rem" }}>
            <Link href="/pricing" className="btn btn-primary">
              Explore Pricing
            </Link>
            <Link href="/contact" className="btn btn-secondary">
              Book a Review
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
