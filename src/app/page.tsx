"use client";

import { useState } from "react";
import Link from "next/link";
import ResumeScoreBoard from "@/components/ResumeScoreBoard";
import PaperSnapshots from "@/components/PaperSnapshots";
import LinkedInSnapshots from "@/components/LinkedInSnapshots";
import ResumeSnapshots from "@/components/ResumeSnapshots";

export default function Home() {
  const [openFaqIdx, setOpenFaqIdx] = useState<number | null>(null);

  const stats = [
    { num: "6+", label: "Research Papers" },
    { num: "4+", label: "Conference Papers" },
    { num: "2", label: "Published Papers" },
    { num: "20+", label: "Projects Guided" },
    { num: "1", label: "Best Paper Awards" },
  ];

  const faqs = [
    {
      q: "Do you write fake projects?",
      a: "Absolutely not. We extract and structure the actual engineering details, math, and code systems you built, translating them into recruiter-ready terms. We highlight your real contributions."
    },
    {
      q: "Do you help with IEEE formatting?",
      a: "Yes. Our Research Assistance includes structuring drafts to align with IEEE, Springer, and ACM citation and layout rules."
    },
    {
      q: "Can beginners apply?",
      a: "Yes. We help early B.Tech/Engineering students map out initial project drafts and construct foundational resumes for internships."
    },
    {
      q: "Do you work with AI/ML projects?",
      a: "Yes. We specialize heavily in computer vision, ML pipelines, and NLP system explanations, translating complex architectures into high-signal narratives."
    },
    {
      q: "How fast is delivery?",
      a: "Our Resume Upgrade is delivered in 24 hours. Research formatting and branding models range from 3 days to a week depending on depth."
    }
  ];

  return (
    <div>
      {/* 1. Hero Section */}
      <section className="section-padding" style={{ position: "relative", overflow: "hidden" }}>
        <div className="glow-bg" style={{ top: "10%", left: "10%" }} />
        <div className="glow-bg" style={{ bottom: "10%", right: "10%" }} />

        <div className="container" style={{ textAlign: "center" }}>
          <div style={{
            display: "inline-block",
            padding: "0.4rem 1rem",
            borderRadius: "2rem",
            background: "rgba(255,255,255,0.03)",
            border: "1px solid var(--border-light)",
            fontSize: "0.85rem",
            color: "var(--accent-cyan)",
            marginBottom: "1.5rem",
            fontWeight: "bold",
            letterSpacing: "0.05em"
          }}>
            🎓 PREMIUM PROFILES FOR ENGINEERING STUDENTS
          </div>
          
          <h1 style={{
            fontSize: "clamp(2.5rem, 5vw, 4.25rem)",
            fontWeight: 800,
            lineHeight: 1.1,
            marginBottom: "1.5rem"
          }}>
            Research to Resume: Transform <br />
            <span className="gradient-text">Your Engineering Work</span> Into Opportunities
          </h1>

          <p style={{
            fontSize: "clamp(1rem, 2vw, 1.2rem)",
            color: "var(--text-secondary)",
            maxWidth: "700px",
            margin: "0 auto 2.5rem auto",
            lineHeight: "1.6"
          }}>
            We help engineering students craft recruiter-ready resumes, research-grade papers, LinkedIn profiles, and portfolio systems that communicate technical depth with clarity and confidence.
          </p>

          <div style={{
            display: "flex",
            justifyContent: "center",
            gap: "1rem",
            flexWrap: "wrap",
            marginBottom: "4rem"
          }}>
            <Link href="/contact" className="btn btn-primary">
              Get Free Review
            </Link>
            <Link href="#transformations" className="btn btn-secondary">
              View Transformations
            </Link>
          </div>

          {/* Quick value props */}
          <div style={{
            display: "flex",
            justifyContent: "center",
            gap: "3rem",
            flexWrap: "wrap",
            opacity: 0.85,
            borderTop: "1px solid var(--border-light)",
            paddingTop: "2rem"
          }}>
            <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
              <span style={{ color: "var(--accent-emerald)" }}>✓</span>
              <span style={{ fontSize: "0.9rem", color: "#fff", fontWeight: "600" }}>Real engineering understanding</span>
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
              <span style={{ color: "var(--accent-emerald)" }}>✓</span>
              <span style={{ fontSize: "0.9rem", color: "#fff", fontWeight: "600" }}>Research-first approach</span>
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
              <span style={{ color: "var(--accent-emerald)" }}>✓</span>
              <span style={{ fontSize: "0.9rem", color: "#fff", fontWeight: "600" }}>Recruiter-friendly delivery</span>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Metrics Stats */}
      <section className="section-padding" style={{ background: "linear-gradient(180deg, var(--bg-dark), #090b11)" }}>
        <div className="container">
          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))",
            gap: "2rem",
            textAlign: "center"
          }}>
            {stats.map((stat, idx) => (
              <div key={idx} className="glass-card" style={{ padding: "1.5rem" }}>
                <div style={{ fontSize: "2.5rem", fontWeight: "800", color: "var(--accent-indigo)", fontFamily: "var(--font-display)", marginBottom: "0.25rem" }}>
                  {stat.num}
                </div>
                <div style={{ fontSize: "0.85rem", color: "var(--text-secondary)", textTransform: "uppercase", letterSpacing: "0.05em" }}>
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* 3. Resume Score Board Widget */}
      <section className="section-padding" style={{ background: "#0c0d15", borderTop: "1px solid var(--border-light)", borderBottom: "1px solid var(--border-light)" }}>
        <div className="container">
          <div style={{ textAlign: "center", marginBottom: "3rem" }}>
            <h2 style={{ fontSize: "2rem", marginBottom: "0.75rem" }}>Resume Score Board</h2>
            <p style={{ color: "var(--text-secondary)", maxWidth: "550px", margin: "0 auto" }}>
              Turn your resume into a gamified hiring challenge. Enter your credentials to see your standing.
            </p>
          </div>
          <ResumeScoreBoard />
        </div>
      </section>

      {/* 4. Research Paper Snapshots */}
      <section id="transformations" className="section-padding">
        <div className="container">
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", flexWrap: "wrap", gap: "1rem", marginBottom: "3rem" }}>
            <div>
              <h2 style={{ fontSize: "2rem", marginBottom: "0.5rem" }}>Research Paper Snapshots</h2>
              <p style={{ color: "var(--text-secondary)", maxWidth: "500px" }}>
                Tap any paper card to view the methodology, abstract details, and key technical observations.
              </p>
            </div>
            <Link href="/process" className="btn btn-secondary" style={{ padding: "0.5rem 1rem", fontSize: "0.85rem" }}>
              Learn Methodology
            </Link>
          </div>
          <PaperSnapshots />
        </div>
      </section>

      {/* 5. LinkedIn Snapshots & Sample Resumes */}
      <section className="section-padding" style={{ background: "#0c0d15", borderTop: "1px solid var(--border-light)", borderBottom: "1px solid var(--border-light)" }}>
        <div className="container" style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: "3rem" }}>
          <div>
            <div style={{ marginBottom: "2rem" }}>
              <h2 style={{ fontSize: "1.75rem", marginBottom: "0.5rem" }}>Alumni Spotlight</h2>
              <p style={{ color: "var(--text-secondary)", fontSize: "0.95rem" }}>
                They did it, you can too ✨ Auto-rotating LinkedIn portfolio profiles optimized by our studio.
              </p>
            </div>
            <LinkedInSnapshots />
          </div>

          <div>
            <div style={{ marginBottom: "2rem" }}>
              <h2 style={{ fontSize: "1.75rem", marginBottom: "0.5rem" }}>Sample Resumes</h2>
              <p style={{ color: "var(--text-secondary)", fontSize: "0.95rem" }}>
                Click a snapshot to preview the ATS architecture and section layouts.
              </p>
            </div>
            <ResumeSnapshots />
          </div>
        </div>
      </section>

      {/* 6. Why Us */}
      <section className="section-padding" style={{ borderTop: "1px solid var(--border-light)" }}>
        <div className="container">
          <div style={{ textAlign: "center", marginBottom: "3rem" }}>
            <h2 style={{ fontSize: "2rem", marginBottom: "0.75rem" }}>Why Engineering Students Trust Our Studio</h2>
            <p style={{ color: "var(--text-secondary)", maxWidth: "550px", margin: "0 auto" }}>
              Built for engineering students who want to look as sharp as their work.
            </p>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "2rem" }}>
            <div className="glass-card" style={{ padding: "2rem" }}>
              <div style={{ fontSize: "1.75rem", marginBottom: "1rem" }}>⚙️</div>
              <h4 style={{ fontSize: "1.2rem", marginBottom: "0.75rem", color: "#fff" }}>Technical Understanding</h4>
              <p style={{ fontSize: "0.9rem", color: "var(--text-secondary)" }}>
                We don’t just format resumes. We understand engineering projects, AI systems, research methods, and the technical language recruiters actually scan for.
              </p>
            </div>

            <div className="glass-card" style={{ padding: "2rem" }}>
              <div style={{ fontSize: "1.75rem", marginBottom: "1rem" }}>🔬</div>
              <h4 style={{ fontSize: "1.2rem", marginBottom: "0.75rem", color: "#fff" }}>Research-Driven Approach</h4>
              <p style={{ fontSize: "0.9rem", color: "var(--text-secondary)" }}>
                Our work is shaped by conference papers, innovation projects, and award-winning research exposure so your profile reflects real engineering depth.
              </p>
            </div>

            <div className="glass-card" style={{ padding: "2rem" }}>
              <div style={{ fontSize: "1.75rem", marginBottom: "1rem" }}>💼</div>
              <h4 style={{ fontSize: "1.2rem", marginBottom: "0.75rem", color: "#fff" }}>Recruiter-Friendly Presentation</h4>
              <p style={{ fontSize: "0.9rem", color: "var(--text-secondary)" }}>
                We translate complex engineering work into clean, professional, recruiter-readable content that feels premium and credible.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 7. Before / After Comparison */}
      <section className="section-padding" style={{ background: "#0c0d15", borderTop: "1px solid var(--border-light)", borderBottom: "1px solid var(--border-light)" }}>
        <div className="container">
          <div style={{ textAlign: "center", marginBottom: "3rem" }}>
            <h2 style={{ fontSize: "2rem", marginBottom: "0.75rem" }}>Engineering Resume Transformations: Before / After</h2>
            <p style={{ color: "var(--text-secondary)" }}>See the difference between generic content and recruiter-ready positioning.</p>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "2.5rem" }}>
            {/* Before */}
            <div className="glass-card" style={{ padding: "2rem", borderLeft: "4px solid #ef4444" }}>
              <h4 style={{ color: "#ef4444", fontSize: "1.1rem", textTransform: "uppercase", marginBottom: "1.25rem" }}>Before</h4>
              <ul style={{ display: "flex", flexDirection: "column", gap: "1rem", color: "var(--text-secondary)", fontSize: "0.9rem", paddingLeft: "1.2rem" }}>
                <li>Worked on multiple projects related to AI and robotics.</li>
                <li>Good knowledge of Python and machine learning.</li>
                <li>Participated in competitions and activities.</li>
                <li>Looking for internship opportunities.</li>
              </ul>
            </div>

            {/* After */}
            <div className="glass-card" style={{ padding: "2rem", borderLeft: "4px solid var(--accent-emerald)" }}>
              <h4 style={{ color: "var(--accent-emerald)", fontSize: "1.1rem", textTransform: "uppercase", marginBottom: "1.25rem" }}>After</h4>
              <ul style={{ display: "flex", flexDirection: "column", gap: "1rem", color: "#fff", fontSize: "0.9rem", paddingLeft: "1.2rem" }}>
                <li>Built an end-to-end AI-driven system for intelligent decision support in real-world workflows.</li>
                <li>Implemented scalable pipelines in Python, with model evaluation, optimization, and deployment-ready structure.</li>
                <li>Published and presented research output in a conference setting, with measurable recognition and peer feedback.</li>
                <li>Positioned for internships and placement opportunities with a recruiter-readable technical narrative.</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 8. Testimonials */}
      <section className="section-padding">
        <div className="container">
          <div style={{ textAlign: "center", marginBottom: "3rem" }}>
            <h2 style={{ fontSize: "2rem", marginBottom: "0.75rem" }}>Student Testimonials</h2>
            <p style={{ color: "var(--text-secondary)" }}>Students trust the process because the results feel real and measurable.</p>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "2rem" }}>
            <div className="glass-card" style={{ padding: "2rem" }}>
              <span style={{ fontSize: "0.75rem", color: "var(--accent-cyan)", textTransform: "uppercase" }}>Student feedback</span>
              <p style={{ fontSize: "0.95rem", color: "#fff", fontStyle: "italic", margin: "1rem 0" }}>
                “The portfolio and resume made my projects feel much more credible. I finally sounded like someone who understood the engineering behind the work.”
              </p>
              <strong style={{ fontSize: "0.85rem", color: "var(--text-secondary)" }}>— Amol Bidwe, VJTI (Textile Engg.)</strong>
            </div>

            <div className="glass-card" style={{ padding: "2rem" }}>
              <span style={{ fontSize: "0.75rem", color: "var(--accent-cyan)", textTransform: "uppercase" }}>Student feedback</span>
              <p style={{ fontSize: "0.95rem", color: "#fff", fontStyle: "italic", margin: "1rem 0" }}>
                “My paper draft became much more structured and research-focused. The improvement was visible in the way professors and reviewers responded.”
              </p>
              <strong style={{ fontSize: "0.85rem", color: "var(--text-secondary)" }}>— Kalyani Karmarkar, VIT- Pune (CSE-AI/ML)</strong>
            </div>

            <div className="glass-card" style={{ padding: "2rem" }}>
              <span style={{ fontSize: "0.75rem", color: "var(--accent-cyan)", textTransform: "uppercase" }}>Student feedback</span>
              <p style={{ fontSize: "0.95rem", color: "#fff", fontStyle: "italic", margin: "1rem 0" }}>
                “The LinkedIn and resume redesign helped me position my internship experience in a far stronger way. It felt premium and recruiter-ready.”
              </p>
              <strong style={{ fontSize: "0.85rem", color: "var(--text-secondary)" }}>— Samruddhi, YCCE-Nagpur (Comp. Engg.)</strong>
            </div>
          </div>
        </div>
      </section>

      {/* 9. Social Proof */}
      <section className="section-padding" style={{ background: "#0c0d15", borderTop: "1px solid var(--border-light)" }}>
        <div className="container" style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "3rem", alignItems: "center" }}>
          <div>
            <h2 style={{ fontSize: "2rem", marginBottom: "1rem" }}>Social Proof</h2>
            <p style={{ color: "var(--text-secondary)", lineHeight: "1.6" }}>
              We build content that helps students show up with confidence across LinkedIn, Instagram, and the academic space — from technical explainers to career storytelling and research insights.
            </p>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem" }}>
            <div className="glass-card" style={{ padding: "1.25rem", textAlign: "center" }}>
              <div style={{ fontSize: "1.5rem", marginBottom: "0.5rem" }}>📱</div>
              <div style={{ fontSize: "0.85rem", fontWeight: "600", color: "#fff" }}>LinkedIn Posts</div>
            </div>
            <div className="glass-card" style={{ padding: "1.25rem", textAlign: "center" }}>
              <div style={{ fontSize: "1.5rem", marginBottom: "0.5rem" }}>📈</div>
              <div style={{ fontSize: "0.85rem", fontWeight: "600", color: "#fff" }}>Instagram Growth</div>
            </div>
            <div className="glass-card" style={{ padding: "1.25rem", textAlign: "center" }}>
              <div style={{ fontSize: "1.5rem", marginBottom: "0.5rem" }}>💬</div>
              <div style={{ fontSize: "0.85rem", fontWeight: "600", color: "#fff" }}>Technical Snippets</div>
            </div>
            <div className="glass-card" style={{ padding: "1.25rem", textAlign: "center" }}>
              <div style={{ fontSize: "1.5rem", marginBottom: "0.5rem" }}>📖</div>
              <div style={{ fontSize: "0.85rem", fontWeight: "600", color: "#fff" }}>Storytelling</div>
            </div>
          </div>
        </div>
      </section>

      {/* 10. FAQ Section */}
      <section className="section-padding">
        <div className="container" style={{ maxWidth: "800px" }}>
          <div style={{ textAlign: "center", marginBottom: "3rem" }}>
            <h2 style={{ fontSize: "2rem", marginBottom: "0.75rem" }}>FAQ</h2>
            <p style={{ color: "var(--text-secondary)" }}>Questions students usually ask before they start.</p>
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
            {faqs.map((faq, idx) => {
              const isOpen = openFaqIdx === idx;
              return (
                <div
                  key={idx}
                  className="glass-card"
                  style={{
                    padding: "1.25rem 1.75rem",
                    cursor: "pointer"
                  }}
                  onClick={() => setOpenFaqIdx(isOpen ? null : idx)}
                >
                  <div style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center"
                  }}>
                    <h4 style={{ fontSize: "1rem", color: "#fff", fontWeight: "600" }}>{faq.q}</h4>
                    <span style={{ fontSize: "1.25rem", color: "var(--text-muted)", transform: isOpen ? "rotate(45deg)" : "none", transition: "transform 0.2s" }}>+</span>
                  </div>
                  {isOpen && (
                    <p style={{ fontSize: "0.9rem", color: "var(--text-secondary)", marginTop: "1rem", lineHeight: "1.6" }}>
                      {faq.a}
                    </p>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 11. Final CTA */}
      <section className="section-padding" style={{
        background: "radial-gradient(ellipse at center, rgba(99, 102, 241, 0.15), transparent 70%)",
        borderTop: "1px solid var(--border-light)"
      }}>
        <div className="container" style={{ textAlign: "center", maxWidth: "600px" }}>
          <h2 style={{ fontSize: "2.25rem", marginBottom: "1rem" }}>Your projects deserve better presentation.</h2>
          <p style={{ color: "var(--text-secondary)", marginBottom: "2rem" }}>
            Stop underselling your engineering work. Build a profile that reflects the depth behind your projects, papers, and future goals.
          </p>
          <div style={{ display: "flex", justifyContent: "center", gap: "1rem", flexWrap: "wrap" }}>
            <Link href="/contact" className="btn btn-primary">
              Start Building Your Profile
            </Link>
            <a href="https://wa.me/919999999999" target="_blank" rel="noreferrer" className="btn btn-secondary">
              WhatsApp
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
