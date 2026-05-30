"use client";

import { useState } from "react";

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [role, setRole] = useState("");
  const [type, setType] = useState("Resume");
  const [message, setMessage] = useState("");
  
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
      
      // Reset form
      setName("");
      setEmail("");
      setPhone("");
      setRole("");
      setMessage("");
    }, 1200);
  };

  return (
    <div className="section-padding">
      <div className="container" style={{ maxWidth: "900px" }}>
        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: "4rem" }}>
          <span style={{ fontSize: "0.8rem", color: "var(--accent-indigo)", fontWeight: "bold", textTransform: "uppercase" }}>Get in Touch</span>
          <h1 style={{ fontSize: "2.5rem", marginTop: "0.5rem", marginBottom: "1rem" }}>Start Building Your Profile</h1>
          <p style={{ color: "var(--text-secondary)", maxWidth: "550px", margin: "0 auto" }}>
            Submit your profile details for a free initial review. Our team will get back to you within 24 hours.
          </p>
        </div>

        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
          gap: "3rem",
          alignItems: "start"
        }}>
          {/* Form */}
          <div className="glass-card" style={{ padding: "2.5rem" }}>
            {submitted ? (
              <div style={{ textAlign: "center", padding: "1.5rem 0" }}>
                <div style={{
                  width: "56px",
                  height: "56px",
                  borderRadius: "50%",
                  background: "rgba(16, 185, 129, 0.1)",
                  border: "1px solid var(--accent-emerald)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: "1.5rem",
                  margin: "0 auto 1.25rem auto"
                }}>
                  ✓
                </div>
                <h3 style={{ fontSize: "1.25rem", color: "#fff", marginBottom: "0.5rem" }}>Review Request Received!</h3>
                <p style={{ fontSize: "0.9rem", color: "var(--text-secondary)", marginBottom: "1.5rem" }}>
                  Thank you! Our engineering coordinators will review your draft and reach out on WhatsApp/Email.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="btn btn-secondary"
                  style={{ width: "100%", padding: "0.5rem" }}
                >
                  Submit Another Request
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit}>
                <div className="form-group">
                  <label className="form-label" htmlFor="name">Full Name</label>
                  <input
                    id="name"
                    type="text"
                    className="glass-input"
                    placeholder="e.g. Tayyab Shaikh"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                  />
                </div>

                <div style={{
                  display: "grid",
                  gridTemplateColumns: "1fr 1fr",
                  gap: "1rem"
                }}>
                  <div className="form-group">
                    <label className="form-label" htmlFor="email">Email Address</label>
                    <input
                      id="email"
                      type="email"
                      className="glass-input"
                      placeholder="name@vit.edu"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                    />
                  </div>

                  <div className="form-group">
                    <label className="form-label" htmlFor="phone">WhatsApp Number</label>
                    <input
                      id="phone"
                      type="tel"
                      className="glass-input"
                      placeholder="+91 99999 99999"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      required
                    />
                  </div>
                </div>

                <div style={{
                  display: "grid",
                  gridTemplateColumns: "1fr 1fr",
                  gap: "1rem"
                }}>
                  <div className="form-group">
                    <label className="form-label" htmlFor="role">Target Role</label>
                    <input
                      id="role"
                      type="text"
                      className="glass-input"
                      placeholder="e.g. AI Engineer"
                      value={role}
                      onChange={(e) => setRole(e.target.value)}
                      required
                    />
                  </div>

                  <div className="form-group">
                    <label className="form-label" htmlFor="type">Requested Review</label>
                    <select
                      id="type"
                      className="glass-input"
                      value={type}
                      onChange={(e) => setType(e.target.value)}
                    >
                      <option value="Resume">Resume Upgrade</option>
                      <option value="Research">Research Paper</option>
                      <option value="Both">Both (Branding)</option>
                    </select>
                  </div>
                </div>

                <div className="form-group">
                  <label className="form-label" htmlFor="message">Your Current Work / Goals</label>
                  <textarea
                    id="message"
                    className="glass-input"
                    rows={4}
                    placeholder="Paste a brief summary of your projects, current resume bullets, or details about the paper you're drafting..."
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    required
                    style={{ resize: "none" }}
                  />
                </div>

                <button
                  type="submit"
                  className="btn btn-primary"
                  style={{ width: "100%", marginTop: "1rem" }}
                  disabled={loading}
                >
                  {loading ? "Submitting Review Request..." : "Request Free Review"}
                </button>
              </form>
            )}
          </div>

          {/* Contact info details */}
          <div style={{ display: "flex", flexDirection: "column", gap: "2rem" }}>
            <div className="glass-card" style={{ padding: "2rem" }}>
              <h4 style={{ fontSize: "1.1rem", marginBottom: "0.75rem", color: "#fff" }}>Direct Channels</h4>
              <p style={{ fontSize: "0.85rem", color: "var(--text-secondary)", marginBottom: "1.5rem" }}>
                Skip the form and contact our founders directly for priority evaluations.
              </p>

              <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
                <a
                  href="https://wa.me/919999999999"
                  target="_blank"
                  rel="noreferrer"
                  className="btn btn-secondary"
                  style={{ justifyContent: "flex-start", padding: "0.75rem 1rem", fontSize: "0.9rem" }}
                >
                  <span style={{ fontSize: "1.2rem" }}>💬</span>
                  <div style={{ textAlign: "left" }}>
                    <div style={{ fontWeight: "bold", color: "#fff" }}>WhatsApp Chat</div>
                    <div style={{ fontSize: "0.75rem", color: "var(--text-muted)" }}>Instant response for inquiries</div>
                  </div>
                </a>

                <a
                  href="mailto:contact@rtorscript.com"
                  className="btn btn-secondary"
                  style={{ justifyContent: "flex-start", padding: "0.75rem 1rem", fontSize: "0.9rem" }}
                >
                  <span style={{ fontSize: "1.2rem" }}>✉️</span>
                  <div style={{ textAlign: "left" }}>
                    <div style={{ fontWeight: "bold", color: "#fff" }}>Email Address</div>
                    <div style={{ fontSize: "0.75rem", color: "var(--text-muted)" }}>send files to contact@rtorscript.com</div>
                  </div>
                </a>
              </div>
            </div>

            <div className="glass-card" style={{ padding: "2rem" }}>
              <h4 style={{ fontSize: "1.1rem", marginBottom: "0.75rem", color: "#fff" }}>Studio Location</h4>
              <p style={{ fontSize: "0.85rem", color: "var(--text-secondary)", lineHeight: "1.5" }}>
                RtorScript Growth Studio <br />
                Connected Campus Network <br />
                Pune, India
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
