"use client";

import { useEffect, useState } from "react";

interface Profile {
  name: string;
  role: string;
  company: string;
  details: string;
  badge: string;
}

export default function LinkedInSnapshots() {
  const [activeIdx, setActiveIdx] = useState(0);

  const profiles: Profile[] = [
    {
      name: "Tayyab Shaikh",
      role: "Associate Engineer",
      company: "Eaton",
      badge: "Associate Engineer - Eaton",
      details: "Associate Engineer - Eaton | Former Intern @Kirloskar Oil Engines Ltd | VIT Pune | BTech Electronics and Telecommunication Engineering | Runner-up Anveshana-The Med Hackathon 2024."
    },
    {
      name: "Sahil Sawant",
      role: "Research Assistant",
      company: "Emc2 Lab, VJTI",
      badge: "AI Research Fellow",
      details: "M.Tech @VJTI || B.Tech. @VIT || Project Student @IUCAA || Intern @Truein || Ex-Intern @BMC Software."
    },
    {
      name: "Kartik Shinde",
      role: "Process Engineer",
      company: "Virtuoso Project n Engineers",
      badge: "Process Engineer - Consultant",
      details: "Process Engineer at Virtuoso Proj. n Engg || Ex.Intern @Attaquant Enterprises || B.Tech  Chemical Engg. ||VIT Pune25"
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIdx((prev) => (prev + 1) % profiles.length);
    }, 4500);

    return () => clearInterval(timer);
  }, [profiles.length]);

  return (
    <div className="glass-card" style={{ padding: "2.5rem", position: "relative" }}>
      <div style={{
        position: "absolute",
        top: "1.5rem",
        right: "2rem",
        display: "flex",
        gap: "0.5rem"
      }}>
        {profiles.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setActiveIdx(idx)}
            style={{
              width: "8px",
              height: "8px",
              borderRadius: "50%",
              border: "none",
              background: idx === activeIdx ? "var(--accent-indigo)" : "rgba(255,255,255,0.2)",
              cursor: "pointer",
              transition: "background 0.3s ease"
            }}
            aria-label={`Go to slide ${idx + 1}`}
          />
        ))}
      </div>

      <div style={{ minHeight: "180px", display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
        <div>
          <span style={{ fontSize: "0.75rem", color: "var(--accent-cyan)", fontWeight: "bold", textTransform: "uppercase", letterSpacing: "0.05em" }}>
            LinkedIn Portfolio Snapshots
          </span>
          <h4 style={{ fontSize: "1.5rem", color: "#fff", margin: "0.5rem 0 1rem 0" }}>
            {profiles[activeIdx].name}
          </h4>
          <p style={{
            fontSize: "0.95rem",
            color: "var(--text-secondary)",
            lineHeight: "1.6",
            fontStyle: "italic",
            borderLeft: "2px solid rgba(255,255,255,0.08)",
            paddingLeft: "1rem"
          }}>
            "{profiles[activeIdx].details}"
          </p>
        </div>

        <div style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginTop: "1.5rem",
          paddingTop: "1.25rem",
          borderTop: "1px solid rgba(255, 255, 255, 0.05)"
        }}>
          <div>
            <div style={{ fontSize: "0.85rem", fontWeight: "bold", color: "#fff" }}>
              {profiles[activeIdx].badge}
            </div>
            <div style={{ fontSize: "0.75rem", color: "var(--text-muted)" }}>
              {profiles[activeIdx].company}
            </div>
          </div>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noreferrer"
            className="btn btn-secondary"
            style={{ padding: "0.4rem 0.8rem", fontSize: "0.8rem" }}
          >
            Visit LinkedIn
          </a>
        </div>
      </div>
    </div>
  );
}
