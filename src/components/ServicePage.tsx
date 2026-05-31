import React, { type ReactNode } from "react";
interface Props {
  title: string;
  emoji?: string;
  children: ReactNode;
  ctaLabel?: string;
  ctaHref?: string;
}
/**
 * Reusable layout for each service page.
 * Uses the project's clay‑morphic design via the `clay-card` class.
 */
export default function ServicePage({
  title,
  emoji,
  children,
  ctaLabel,
  ctaHref,
}: Props) {
  return (
    <section
      className="clay-card"
      style={{ maxWidth: "960px", margin: "auto", padding: "2rem" }}
    >
      <h1 style={{ fontSize: "2.2rem", marginBottom: "0.4rem" }}>
        {emoji && <span style={{ marginRight: "0.4rem" }}>{emoji}</span>}
        {title}
      </h1>
      <div style={{ lineHeight: 1.6, marginBottom: "1.5rem" }}>{children}</div>
      {ctaLabel && ctaHref && (
        <a href={ctaHref} className="btn btn-primary">
          {ctaLabel}
        </a>
      )}
    </section>
  );
}