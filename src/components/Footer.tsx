import Link from "next/link";

export default function Footer() {
  return (
    <footer style={{ padding: "4rem 0 2rem 0" }}>
      <div className="container">
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
          gap: "3rem",
          marginBottom: "3rem"
        }}>
          {/* Logo & Bio */}
          <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
              <div style={{
                width: "32px",
                height: "32px",
                borderRadius: "0.4rem",
                background: "linear-gradient(135deg, var(--accent-indigo), var(--accent-violet))",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontWeight: "bold",
                fontSize: "1rem",
                color: "#fff"
              }}>
                R
              </div>
              <span style={{
                fontFamily: "var(--font-display)",
                fontWeight: 800,
                fontSize: "1.1rem",
                letterSpacing: "-0.03em"
              }}>
                Research to Resume
              </span>
            </div>
            <p style={{ fontSize: "0.9rem", color: "var(--text-secondary)" }}>
              Premium engineering student growth studio. We turn technical depth into career breakthroughs.
            </p>
            <div style={{ display: "flex", gap: "1rem", marginTop: "0.5rem" }}>
              <a
                href="https://wa.me/919999999999" /* Mock WhatsApp connection */
                target="_blank"
                rel="noreferrer"
                className="btn btn-secondary"
                style={{ padding: "0.4rem 0.8rem", fontSize: "0.85rem", gap: "0.25rem" }}
              >
                <span>WhatsApp</span>
              </a>
              <a
                href="mailto:contact@rtorscript.com"
                className="btn btn-secondary"
                style={{ padding: "0.4rem 0.8rem", fontSize: "0.85rem", gap: "0.25rem" }}
              >
                <span>Email</span>
              </a>
            </div>
          </div>

          {/* Sitemap links */}
          <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
            <h4 style={{ fontSize: "1rem", color: "#fff", textTransform: "uppercase", letterSpacing: "0.05em" }}>Studio</h4>
            <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
              <Link href="/" style={{ color: "var(--text-secondary)", fontSize: "0.9rem" }}>Home</Link>
              <Link href="/process" style={{ color: "var(--text-secondary)", fontSize: "0.9rem" }}>Process</Link>
              <Link href="/pricing" style={{ color: "var(--text-secondary)", fontSize: "0.9rem" }}>Pricing</Link>
              <Link href="/members" style={{ color: "var(--text-secondary)", fontSize: "0.9rem" }}>Connected Members</Link>
              <Link href="/contact" style={{ color: "var(--text-secondary)", fontSize: "0.9rem" }}>Contact</Link>
            </div>
          </div>

          {/* Services Quicklist */}
          <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
            <h4 style={{ fontSize: "1rem", color: "#fff", textTransform: "uppercase", letterSpacing: "0.05em" }}>Services</h4>
            <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "0.75rem", fontSize: "0.9rem", color: "var(--text-secondary)" }}>
              <li>ATS Resume Overhauls</li>
              <li>Research Report Framing</li>
              <li>Conference Paper Improvement</li>
              <li>LinkedIn Portfolio Branding</li>
              <li>Final Year Viva & PPT Styling</li>
            </ul>
          </div>
        </div>

        {/* Bottom copyright */}
        <div style={{
          borderTop: "1px solid rgba(255, 255, 255, 0.08)",
          paddingTop: "2rem",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          flexWrap: "wrap",
          gap: "1rem"
        }}>
          <p style={{ fontSize: "0.85rem", color: "var(--text-muted)" }}>
            © {new Date().getFullYear()} RtorScript. All rights reserved.
          </p>
          <div style={{ display: "flex", gap: "1.5rem" }}>
            <a href="#" style={{ fontSize: "0.85rem", color: "var(--text-muted)" }}>Privacy Policy</a>
            <a href="#" style={{ fontSize: "0.85rem", color: "var(--text-muted)" }}>Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
