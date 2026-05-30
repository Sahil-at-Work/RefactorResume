import Link from "next/link";

export default function Process() {
  const workflow = [
    { num: "01", title: "Upload CV / Report", desc: "Share your resume, paper draft, project deck, or idea note and tell us your goal." },
    { num: "02", title: "Analysis & Review", desc: "We assess your technical depth, positioning, and the exact improvement levers for résumé, profile, or research content." },
    { num: "03", title: "Professional Enhancement", desc: "We rewrite, redesign, and structure your work for recruiters, guides, judges, and academic evaluation." },
    { num: "04", title: "Final Delivery", desc: "You receive polished, export-ready assets with a confident growth narrative and clear next steps." }
  ];

  const methodology = [
    { step: "1", title: "Goal defining + problem statement", desc: "We start by defining the objective, identifying the exact problem, and shaping the purpose of the work so the final output stays focused and industry-relevant." },
    { step: "2", title: "Literature review", desc: "We map the existing work, compare key findings, and create a clean research gap or relevance statement that strengthens credibility." },
    { step: "3", title: "Introduction and full structure", desc: "We build the intro, section flow, and narrative foundation so the report or paper reads logically from start to finish." },
    { step: "4", title: "Methodology with images, formulae, and tables", desc: "We shape the methodology section with the right technical flow, charts, formulae, tables, and visual support wherever needed." },
    { step: "5", title: "Observation, results, and conclusion", desc: "We convert findings into clear observations, result interpretation, and conclusion statements that feel evidence-backed and polished." },
    { step: "6", title: "NO AI + final report handed", desc: "All content is written manually with original structure, no AI-generated drafting, and the final report is handed over in a clean, ready-to-submit format." }
  ];

  const resumeFormation = [
    "LinkedIn data gathering and profile mapping",
    "Valid skills extraction and ATS-friendly keyword alignment",
    "Projects added as per description with user-friendly ATS language",
    "Services and experience assistance for clean, recruiter-readable positioning",
    "Resume structure built around impact, proof, and clarity"
  ];

  const growthSupport = [
    { id: "1", title: "Project storytelling", desc: "We turn your work into a clear problem → approach → result narrative so interviews, project reviews, and portfolio discussions feel natural and strong." },
    { id: "2", title: "Mock interview prep", desc: "We coach your answers around technical depth, confidence, and communication so you sound prepared in both placement and research-oriented conversations." },
    { id: "3", title: "Portfolio & LinkedIn positioning", desc: "We help you present your research, projects, and achievements in a way that looks credible, crisp, and professional across every platform you use." }
  ];

  return (
    <div className="section-padding">
      <div className="container">
        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: "4rem" }}>
          <span style={{ fontSize: "0.8rem", color: "var(--accent-indigo)", fontWeight: "bold", textTransform: "uppercase" }}>Workflows</span>
          <h1 style={{ fontSize: "2.5rem", marginTop: "0.5rem", marginBottom: "1rem" }}>Our Process</h1>
          <p style={{ color: "var(--text-secondary)", maxWidth: "600px", margin: "0 auto" }}>
            A focused workflow for resumes, research work, and student-facing professional branding. We turn raw engineering work into polished deliverables.
          </p>
        </div>

        {/* 1. Core Workflow Cards */}
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
          gap: "1.5rem",
          marginBottom: "5rem"
        }}>
          {workflow.map((item) => (
            <div key={item.num} className="glass-card" style={{ padding: "2rem" }}>
              <div style={{
                fontSize: "2.5rem",
                fontWeight: "900",
                color: "var(--accent-cyan)",
                fontFamily: "var(--font-display)",
                opacity: 0.15,
                lineHeight: 1,
                marginBottom: "1rem"
              }}>
                {item.num}
              </div>
              <h4 style={{ fontSize: "1.1rem", marginBottom: "0.5rem", color: "#fff" }}>{item.title}</h4>
              <p style={{ fontSize: "0.85rem", color: "var(--text-secondary)" }}>{item.desc}</p>
            </div>
          ))}
        </div>

        {/* 2. Research Methodology */}
        <div style={{
          background: "#0c0d15",
          border: "1px solid var(--border-light)",
          borderRadius: "1rem",
          padding: "3rem",
          marginBottom: "5rem"
        }}>
          <h3 style={{ fontSize: "1.75rem", marginBottom: "1.5rem", textAlign: "center" }}>Research Methodology</h3>
          <p style={{ color: "var(--text-secondary)", fontSize: "0.95rem", textAlign: "center", marginBottom: "3rem", maxWidth: "650px", margin: "0 auto 3rem auto" }}>
            A step-by-step workflow for research papers and academic project reports.
          </p>

          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
            gap: "2rem"
          }}>
            {methodology.map((m) => (
              <div key={m.step} style={{ display: "flex", gap: "1rem" }}>
                <div style={{
                  minWidth: "28px",
                  height: "28px",
                  borderRadius: "50%",
                  background: "var(--accent-indigo)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontWeight: "bold",
                  fontSize: "0.85rem",
                  color: "#fff"
                }}>
                  {m.step}
                </div>
                <div>
                  <h4 style={{ fontSize: "0.95rem", color: "#fff", marginBottom: "0.5rem" }}>{m.title}</h4>
                  <p style={{ fontSize: "0.85rem", color: "var(--text-secondary)" }}>{m.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 3. Resume Formation & Student Growth grids */}
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
          gap: "3rem",
          marginBottom: "5rem"
        }}>
          {/* Resume Formation */}
          <div className="glass-panel" style={{ padding: "2.5rem" }}>
            <h3 style={{ fontSize: "1.5rem", marginBottom: "1.5rem" }}>Resume Formation</h3>
            <p style={{ color: "var(--text-secondary)", fontSize: "0.9rem", marginBottom: "1.5rem" }}>
              How we shape your resume and professional story to be highly credible.
            </p>

            <ul style={{ display: "flex", flexDirection: "column", gap: "1rem", listStyle: "none" }}>
              {resumeFormation.map((item, idx) => (
                <li key={idx} style={{ display: "flex", gap: "0.75rem", fontSize: "0.9rem", color: "var(--text-secondary)" }}>
                  <span style={{ color: "var(--accent-indigo)" }}>✓</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Student Growth Support */}
          <div className="glass-panel" style={{ padding: "2.5rem" }}>
            <h3 style={{ fontSize: "1.5rem", marginBottom: "1.5rem" }}>Student Growth Support</h3>
            <p style={{ color: "var(--text-secondary)", fontSize: "0.9rem", marginBottom: "1.5rem" }}>
              A third layer to help you present, explain, and convert your work into placement opportunities.
            </p>

            <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
              {growthSupport.map((g) => (
                <div key={g.id}>
                  <div style={{ display: "flex", gap: "0.5rem", alignItems: "center", marginBottom: "0.25rem" }}>
                    <span style={{ fontSize: "0.8rem", color: "var(--accent-cyan)", fontWeight: "bold" }}>{g.id}.</span>
                    <h4 style={{ fontSize: "0.95rem", color: "#fff" }}>{g.title}</h4>
                  </div>
                  <p style={{ fontSize: "0.8rem", color: "var(--text-secondary)", paddingLeft: "1.25rem" }}>{g.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* CTA */}
        <div style={{ textAlign: "center" }}>
          <Link href="/pricing" className="btn btn-primary" style={{ marginRight: "1rem" }}>
            Explore Pricing
          </Link>
          <Link href="/contact" className="btn btn-secondary">
            Contact Team
          </Link>
        </div>
      </div>
    </div>
  );
}
