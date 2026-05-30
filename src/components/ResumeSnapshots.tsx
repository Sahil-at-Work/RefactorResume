"use client";

import { useState } from "react";

interface ResumeType {
  id: string;
  title: string;
  description: string;
  details: string;
  structure: {
    header: string;
    sections: { title: string; content: string[] }[];
  };
}

export default function ResumeSnapshots() {
  const [selectedResume, setSelectedResume] = useState<ResumeType | null>(null);

  const resumes: ResumeType[] = [
    {
      id: "core",
      title: "Core Resume",
      description: "ATS-first resume layout for internships and technical roles.",
      details: "Engineered specifically to beat ATS parsers with clear text hierarchies, explicit dates, and highly targeted technical skill blocks.",
      structure: {
        header: "CORE ENGINEERING INTERN RESUME",
        sections: [
          { title: "Technical Skills", content: ["Languages: Python, C++, SQL", "Frameworks: TensorFlow, PyTorch, React", "Tools: Git, Linux, Docker"] },
          { title: "Experience", content: ["Software Engineering Intern at TechCorp (optimized database query pipelines by 25%)", "Undergraduate Research Assistant (co-authored computer vision framework integration)"] },
          { title: "Projects", content: ["Autonomous Drone Vision: Created real-time object detection module (YOLO)", "Custom Compiler: Built lexer and parser stages in C++ for mock language"] }
        ]
      }
    },
    {
      id: "research",
      title: "Research Resume",
      description: "A paper-forward resume designed for conference and publication-heavy profiles.",
      details: "Puts literature reviews, publications, citations, and experimental setups front and center for academic guides and selection committees.",
      structure: {
        header: "ACADEMIC & RESEARCH RESUME",
        sections: [
          { title: "Publications", content: ["'Transformer-Based Basin Runoff Forecasting' - Accepted at Hydro-Conf 2025", "'Low-Latency 5G Combinatorial Auction Allocation' - IEEE Communication Letters (Under Review)"] },
          { title: "Research Projects", content: ["Developed novel time-series attention weights for hydrologic cycles", "Derived outage bounds for multi-frequency MIMO signal arrays"] },
          { title: "Academic Background", content: ["B.Tech in Artificial Intelligence - GPA 9.4/10.0", "Undergraduate Thesis: Deep Learning in Hydrological Modeling"] }
        ]
      }
    },
    {
      id: "placement",
      title: "Placement Resume",
      description: "A polished, recruiter-ready version tailored for placement drives.",
      details: "A quick-scanning layout engineered for university placement coordinators and hiring drives, showing high-impact projects and extra-curricular highlights.",
      structure: {
        header: "PLACEMENT DRIVE PROFILE SUMMARY",
        sections: [
          { title: "Professional Summary", content: ["B.Tech student in AI with internship experience, hackathon records, and strong fullstack programming foundations.", "Ready for Software Engineer and Analytics roles."] },
          { title: "Key Projects", content: ["End-to-End Decision Support System: Scaled Python backend to handle 10k requests/min", "RF Helical Telescope: Designed custom analog matching networks (L-band)"] },
          { title: "Achievements", content: ["Runner-up Anveshana Med Hackathon 2024 (Medical imaging track)", "First Place, University Hackathon (Smart City Logistics Solver)"] }
        ]
      }
    }
  ];

  return (
    <div>
      <div style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
        gap: "1.5rem"
      }}>
        {resumes.map((resume) => (
          <div
            key={resume.id}
            onClick={() => setSelectedResume(resume)}
            className="glass-card"
            style={{
              padding: "1.75rem",
              cursor: "pointer",
              display: "flex",
              flexDirection: "column",
              height: "100%",
              justifyContent: "space-between"
            }}
          >
            <div>
              <h4 style={{ fontSize: "1.25rem", marginBottom: "0.75rem", color: "#fff" }}>
                {resume.title}
              </h4>
              <p style={{ fontSize: "0.85rem", color: "var(--text-secondary)" }}>
                {resume.description}
              </p>
            </div>
            
            <div style={{
              marginTop: "1.5rem",
              display: "flex",
              alignItems: "center",
              gap: "0.5rem",
              fontSize: "0.85rem",
              fontWeight: "600",
              color: "var(--accent-indigo)"
            }}>
              <span>Preview Format</span>
              <span>→</span>
            </div>
          </div>
        ))}
      </div>

      {/* Modal Overlay */}
      {selectedResume && (
        <div style={{
          position: "fixed",
          inset: 0,
          background: "rgba(10, 11, 16, 0.85)",
          backdropFilter: "blur(8px)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          padding: "1.5rem",
          zIndex: 1100
        }} onClick={() => setSelectedResume(null)}>
          <div
            className="glass-panel"
            style={{
              width: "100%",
              maxWidth: "600px",
              maxHeight: "85vh",
              overflowY: "auto",
              padding: "2.5rem",
              position: "relative",
              border: "1px solid rgba(99, 102, 241, 0.3)",
              boxShadow: "0 20px 40px rgba(0,0,0,0.5)"
            }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close */}
            <button
              onClick={() => setSelectedResume(null)}
              style={{
                position: "absolute",
                top: "1.5rem",
                right: "1.5rem",
                background: "none",
                border: "none",
                color: "var(--text-secondary)",
                fontSize: "1.5rem",
                cursor: "pointer"
              }}
            >
              ×
            </button>

            <h3 style={{ fontSize: "1.5rem", color: "#fff", marginBottom: "0.5rem" }}>
              {selectedResume.title}
            </h3>
            <p style={{ fontSize: "0.9rem", color: "var(--text-secondary)", marginBottom: "1.5rem" }}>
              {selectedResume.details}
            </p>

            {/* Simulated Resume sheet */}
            <div style={{
              background: "#fff",
              color: "#333",
              borderRadius: "0.5rem",
              padding: "2rem",
              fontFamily: "var(--font-sans)",
              boxShadow: "inset 0 0 10px rgba(0,0,0,0.1)",
              textAlign: "left"
            }}>
              <div style={{
                textAlign: "center",
                borderBottom: "2px solid #333",
                paddingBottom: "1rem",
                marginBottom: "1rem"
              }}>
                <h4 style={{ color: "#111", fontSize: "1.1rem", fontWeight: "bold" }}>
                  {selectedResume.structure.header}
                </h4>
                <div style={{ fontSize: "0.75rem", color: "#666", marginTop: "0.25rem" }}>
                  Email: candidate@rtorscript.com | Phone: +91 9988776655 | Portfolio Link
                </div>
              </div>

              {selectedResume.structure.sections.map((section, idx) => (
                <div key={idx} style={{ marginBottom: "1rem" }}>
                  <h5 style={{
                    color: "#111",
                    fontSize: "0.85rem",
                    fontWeight: "bold",
                    textTransform: "uppercase",
                    borderBottom: "1px solid #ddd",
                    paddingBottom: "0.2rem",
                    marginBottom: "0.5rem"
                  }}>
                    {section.title}
                  </h5>
                  <ul style={{ paddingLeft: "1.2rem", fontSize: "0.75rem", color: "#444" }}>
                    {section.content.map((bullet, bidx) => (
                      <li key={bidx} style={{ marginBottom: "0.3rem" }}>{bullet}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            <div style={{ display: "flex", gap: "1rem", marginTop: "2rem" }}>
              <a
                href="/contact"
                onClick={() => setSelectedResume(null)}
                className="btn btn-primary"
                style={{ flex: 1, padding: "0.6rem" }}
              >
                Request Template Build
              </a>
              <button
                onClick={() => setSelectedResume(null)}
                className="btn btn-secondary"
                style={{ flex: 1, padding: "0.6rem" }}
              >
                Close Preview
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
