// src/app/services/page.tsx
import Link from "next/link";

const services = [
  { slug: "resume-revamp", title: "Resume Revamp", emoji: "📝" },
  { slug: "linkedin-boost", title: "LinkedIn Boost", emoji: "🔗" },
  { slug: "research-papers", title: "Research Papers", emoji: "📚" },
  // add more entries here
];

export const metadata = {
  title: "Our Services",
  description: "Premium career‑advancement services for engineering students",
};

export default function Services() {
  return (
    <section
      className="clay-card"
      style={{ maxWidth: "1200px", margin: "auto", padding: "2rem" }}
    >
      <h1 style={{ fontSize: "2rem", marginBottom: "1rem" }}>What We Offer</h1>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
          gap: "1.5rem",
        }}
      >
        {services.map(s => (
          <Link
            key={s.slug}
            href={`/services/${s.slug}`}
            className="clay-card"
            style={{
              textAlign: "center",
              padding: "1.5rem",
              transition: "transform .2s",
            }}
          >
            <div style={{ fontSize: "2rem", marginBottom: "0.4rem" }}>
              {s.emoji}
            </div>
            <h2 style={{ fontSize: "1.3rem", marginBottom: "0.3rem" }}>
              {s.title}
            </h2>
          </Link>
        ))}
      </div>
    </section>
  );
}