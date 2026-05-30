"use client";

import { useState } from "react";

interface ScoreData {
  score: number;
  visibility: string;
  clarity: string;
  momentum: string;
  strengths: string[];
  improvements: { text: string; impact: string }[];
  rank: number;
  totalStudents: number;
}

export default function ResumeScoreBoard() {
  const [resumeText, setResumeText] = useState("");
  const [degree, setDegree] = useState("B.Tech in AI");
  const [role, setRole] = useState("Software Engineer");
  const [companySize, setCompanySize] = useState("MNC");
  const [companyType, setCompanyType] = useState("MNC");
  const [sector, setSector] = useState("AI / ML");
  
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<ScoreData | null>(null);

  const handleGenerateScore = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!resumeText.trim()) return;

    setLoading(true);

    try {
      const response = await fetch("/api/score", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          resumeText,
          degree,
          role,
          companySize,
          companyType,
          sector
        })
      });

      if (response.ok) {
        const resultJson = await response.json();
        if (!resultJson.isFallback && resultJson.data) {
          setResult(resultJson.data);
          setLoading(false);
          return;
        }
      }
    } catch (err) {
      console.warn("AI scoring endpoint error, falling back to local engine:", err);
    }

    // Heuristic fallback logic if API key is not configured or fails
    const wordCount = resumeText.trim().split(/\s+/).length;
    const lower = resumeText.toLowerCase();
    
    let baseScore = 45;
    
    // Keywords that increase score
    if (lower.includes("optimized") || lower.includes("optimise")) baseScore += 8;
    if (lower.includes("scaled") || lower.includes("scalability")) baseScore += 7;
    if (lower.includes("implemented") || lower.includes("built")) baseScore += 8;
    if (lower.includes("published") || lower.includes("research")) baseScore += 6;
    if (lower.includes("pipeline") || lower.includes("model")) baseScore += 5;
    if (wordCount > 60) baseScore += 10;
    if (wordCount < 15) baseScore -= 15;

    const finalScore = Math.max(25, Math.min(96, baseScore));
    
    let visibility = "Top 45%";
    let clarity = "Average";
    let momentum = "Needs Restructure";
    
    if (finalScore >= 80) {
      visibility = "Top 12%";
      clarity = "Recruiter-ready";
      momentum = "Build + Improve";
    } else if (finalScore >= 60) {
      visibility = "Top 25%";
      clarity = "Moderate Signal";
      momentum = "Structure Upgrade Needed";
    }

    const strengths: string[] = [];
    const improvements: { text: string; impact: string }[] = [];

    if (lower.includes("implemented") || lower.includes("built")) {
      strengths.push("Active engineering verbs detected (built, implemented)");
    } else {
      improvements.push({ text: "Use action-oriented verbs instead of passive descriptions", impact: "+12 points" });
    }

    if (lower.includes("optimized") || lower.includes("scaled")) {
      strengths.push("Signal of technical depth and performance awareness");
    } else {
      improvements.push({ text: "Add metric-driven optimizations or speed benchmarks", impact: "+15 points" });
    }

    if (degree.includes("AI") && sector === "AI / ML") {
      strengths.push("High alignment between degree context and target sector");
    } else {
      improvements.push({ text: "Align project narrative closer to target industry standards", impact: "+8 points" });
    }

    if (wordCount < 40) {
      improvements.push({ text: "Expand technical descriptions to show engineering ownership", impact: "+10 points" });
    } else {
      strengths.push("Good detail density in work breakdown");
    }

    if (strengths.length === 0) {
      strengths.push("Resume submitted successfully for evaluation");
    }

    const mockRank = Math.floor(100 - (finalScore / 100) * 85);
    
    setResult({
      score: finalScore,
      visibility,
      clarity,
      momentum,
      strengths,
      improvements: improvements.slice(0, 3),
      rank: mockRank,
      totalStudents: 1420
    });
    setLoading(false);
  };

  return (
    <div style={{
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
      gap: "2.5rem",
      alignItems: "start"
    }}>
      {/* Form Input Side */}
      <div className="glass-card" style={{ padding: "2rem" }}>
        <h3 style={{ fontSize: "1.5rem", marginBottom: "0.5rem" }}>Resume Details</h3>
        <p style={{ fontSize: "0.9rem", color: "var(--text-secondary)", marginBottom: "1.5rem" }}>
          Input details to run our custom parser scorecard heuristic.
        </p>

        <form onSubmit={handleGenerateScore}>
          <div className="form-group">
            <label className="form-label" htmlFor="resumeText">Resume Summary / Project Experience</label>
            <textarea
              id="resumeText"
              className="glass-input"
              rows={4}
              placeholder="Paste your project descriptions, internship details, summary statement or achievements here..."
              value={resumeText}
              onChange={(e) => setResumeText(e.target.value)}
              required
              style={{ resize: "none" }}
            />
          </div>

          <div style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "1rem"
          }}>
            <div className="form-group">
              <label className="form-label" htmlFor="degree">Degree</label>
              <select
                id="degree"
                className="glass-input"
                value={degree}
                onChange={(e) => setDegree(e.target.value)}
              >
                <option value="B.Tech in AI">B.Tech in AI</option>
                <option value="B.Tech in CS">B.Tech in CS</option>
                <option value="B.Tech in ECE">B.Tech in ECE</option>
                <option value="B.Tech in Mechanical">B.Tech in Mech</option>
                <option value="Other">Other Degree</option>
              </select>
            </div>

            <div className="form-group">
              <label className="form-label" htmlFor="role">Job Role</label>
              <select
                id="role"
                className="glass-input"
                value={role}
                onChange={(e) => setRole(e.target.value)}
              >
                <option value="Software Engineer">Software Eng</option>
                <option value="Data Analyst">Data Analyst</option>
                <option value="ML Engineer">ML Engineer</option>
                <option value="Fullstack Developer">Fullstack Dev</option>
              </select>
            </div>
          </div>

          <div style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "1rem"
          }}>
            <div className="form-group">
              <label className="form-label" htmlFor="companyType">Company Type</label>
              <select
                id="companyType"
                className="glass-input"
                value={companyType}
                onChange={(e) => setCompanyType(e.target.value)}
              >
                <option value="MNC">MNC</option>
                <option value="Product">Product-based</option>
                <option value="Startup">Startup</option>
              </select>
            </div>

            <div className="form-group">
              <label className="form-label" htmlFor="sector">Sector</label>
              <select
                id="sector"
                className="glass-input"
                value={sector}
                onChange={(e) => setSector(e.target.value)}
              >
                <option value="AI / ML">AI / ML</option>
                <option value="Web Tech">Web Tech</option>
                <option value="Hardware / RF">RF / Hardware</option>
                <option value="Finance">Finance</option>
              </select>
            </div>
          </div>

          <button
            type="submit"
            className="btn btn-primary"
            style={{ width: "100%", marginTop: "1rem" }}
            disabled={loading}
          >
            {loading ? "Parsing Resume Summary..." : "Generate Score Board"}
          </button>
        </form>
      </div>

      {/* Leaderboard & Results Side */}
      <div className="glass-card" style={{
        padding: "2rem",
        border: result ? "1px solid rgba(99, 102, 241, 0.4)" : "1px solid var(--border-light)",
        minHeight: "410px",
        display: "flex",
        flexDirection: "column",
        justifyContent: result ? "flex-start" : "center",
        alignItems: result ? "stretch" : "center",
        textAlign: result ? "left" : "center",
        position: "relative"
      }}>
        {loading && (
          <div style={{
            position: "absolute",
            inset: 0,
            background: "rgba(10, 11, 16, 0.8)",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            gap: "1rem",
            borderRadius: "1rem",
            zIndex: 5
          }}>
            <div style={{
              width: "48px",
              height: "48px",
              border: "3px solid rgba(99, 102, 241, 0.2)",
              borderTopColor: "var(--accent-indigo)",
              borderRadius: "50%",
              animation: "spin 1s linear infinite"
            }} />
            <span style={{ fontSize: "0.95rem", color: "var(--text-secondary)" }}>Running technical extraction...</span>
          </div>
        )}

        {!result ? (
          <div>
            <div style={{
              width: "64px",
              height: "64px",
              borderRadius: "50%",
              background: "rgba(255, 255, 255, 0.03)",
              border: "1px dashed var(--border-light)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              margin: "0 auto 1.5rem auto",
              fontSize: "1.5rem"
            }}>
              🎯
            </div>
            <h3 style={{ fontSize: "1.35rem", marginBottom: "0.75rem" }}>Leaderboard-ready preview</h3>
            <p style={{ fontSize: "0.95rem", color: "var(--text-secondary)", maxWidth: "340px", margin: "0 auto" }}>
              Submit the form to unlock your resume score, highlight stronger signals, and see which improvements move you up the ladder.
            </p>

            <div style={{
              display: "flex",
              justifyContent: "center",
              gap: "2rem",
              marginTop: "2rem",
              borderTop: "1px solid var(--border-light)",
              paddingTop: "1.5rem"
            }}>
              <div>
                <div style={{ fontSize: "0.75rem", color: "var(--text-muted)", textTransform: "uppercase" }}>Visibility</div>
                <div style={{ fontSize: "0.95rem", fontWeight: "bold", color: "#fff", marginTop: "0.25rem" }}>Top 20%</div>
              </div>
              <div>
                <div style={{ fontSize: "0.75rem", color: "var(--text-muted)", textTransform: "uppercase" }}>Clarity</div>
                <div style={{ fontSize: "0.95rem", fontWeight: "bold", color: "#fff", marginTop: "0.25rem" }}>Recruiter-ready</div>
              </div>
              <div>
                <div style={{ fontSize: "0.75rem", color: "var(--text-muted)", textTransform: "uppercase" }}>Momentum</div>
                <div style={{ fontSize: "0.95rem", fontWeight: "bold", color: "#fff", marginTop: "0.25rem" }}>Build + improve</div>
              </div>
            </div>
          </div>
        ) : (
          <div>
            {/* Header / Score */}
            <div style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              marginBottom: "1.5rem",
              borderBottom: "1px solid var(--border-light)",
              paddingBottom: "1.25rem"
            }}>
              <div>
                <span style={{ fontSize: "0.75rem", textTransform: "uppercase", color: "var(--text-muted)" }}>Gamified Score</span>
                <h4 style={{ fontSize: "2rem", color: "var(--accent-indigo)", fontFamily: "var(--font-display)" }}>
                  {result.score} <span style={{ fontSize: "1rem", color: "var(--text-muted)" }}>/ 100</span>
                </h4>
              </div>
              <div style={{ textAlign: "right" }}>
                <span style={{ fontSize: "0.75rem", textTransform: "uppercase", color: "var(--text-muted)" }}>Leaderboard Rank</span>
                <div style={{ fontSize: "1.2rem", fontWeight: "bold", color: "var(--accent-cyan)" }}>
                  #{result.rank} <span style={{ fontSize: "0.85rem", color: "var(--text-muted)", fontWeight: "normal" }}>of {result.totalStudents}</span>
                </div>
              </div>
            </div>

            {/* Metrics pills */}
            <div style={{
              display: "grid",
              gridTemplateColumns: "repeat(3, 1fr)",
              gap: "0.75rem",
              marginBottom: "1.5rem"
            }}>
              <div style={{ background: "rgba(255,255,255,0.03)", padding: "0.75rem", borderRadius: "0.5rem", border: "1px solid var(--border-light)" }}>
                <div style={{ fontSize: "0.7rem", color: "var(--text-muted)", textTransform: "uppercase" }}>Visibility</div>
                <div style={{ fontSize: "0.85rem", fontWeight: "bold", color: "#fff", marginTop: "0.25rem" }}>{result.visibility}</div>
              </div>
              <div style={{ background: "rgba(255,255,255,0.03)", padding: "0.75rem", borderRadius: "0.5rem", border: "1px solid var(--border-light)" }}>
                <div style={{ fontSize: "0.7rem", color: "var(--text-muted)", textTransform: "uppercase" }}>Clarity</div>
                <div style={{ fontSize: "0.85rem", fontWeight: "bold", color: "#fff", marginTop: "0.25rem" }}>{result.clarity}</div>
              </div>
              <div style={{ background: "rgba(255,255,255,0.03)", padding: "0.75rem", borderRadius: "0.5rem", border: "1px solid var(--border-light)" }}>
                <div style={{ fontSize: "0.7rem", color: "var(--text-muted)", textTransform: "uppercase" }}>Momentum</div>
                <div style={{ fontSize: "0.85rem", fontWeight: "bold", color: "#fff", marginTop: "0.25rem" }}>{result.momentum}</div>
              </div>
            </div>

            {/* Strengths & Improvements */}
            <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
              <div>
                <h5 style={{ fontSize: "0.85rem", color: "var(--accent-emerald)", textTransform: "uppercase", marginBottom: "0.5rem", letterSpacing: "0.05em" }}>Strong Signals</h5>
                <ul style={{ paddingLeft: "1.2rem", fontSize: "0.85rem", display: "flex", flexDirection: "column", gap: "0.25rem" }}>
                  {result.strengths.map((item, idx) => (
                    <li key={idx} style={{ color: "var(--text-secondary)" }}>{item}</li>
                  ))}
                </ul>
              </div>

              {result.improvements.length > 0 && (
                <div>
                  <h5 style={{ fontSize: "0.85rem", color: "var(--accent-indigo)", textTransform: "uppercase", marginBottom: "0.5rem", letterSpacing: "0.05em" }}>Clear Next Steps</h5>
                  <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
                    {result.improvements.map((item, idx) => (
                      <div key={idx} style={{
                        display: "flex",
                        justifyContent: "space-between",
                        background: "rgba(99, 102, 241, 0.05)",
                        padding: "0.6rem 0.8rem",
                        borderRadius: "0.4rem",
                        fontSize: "0.8rem",
                        borderLeft: "2px solid var(--accent-indigo)"
                      }}>
                        <span style={{ color: "var(--text-secondary)" }}>{item.text}</span>
                        <strong style={{ color: "var(--accent-emerald)" }}>{item.impact}</strong>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            <button
              onClick={() => setResult(null)}
              className="btn btn-secondary"
              style={{ width: "100%", marginTop: "1.5rem", padding: "0.5rem" }}
            >
              Reset score
            </button>
          </div>
        )}
      </div>

      <style jsx global>{`
        @keyframes spin {
          to { transform: rotate(360deg); }
        }
      `}</style>
    </div>
  );
}
