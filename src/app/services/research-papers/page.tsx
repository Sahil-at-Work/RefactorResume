// src/app/services/resume-revamp/page.tsx
import ServicePage from "@/components/ServicePage";

// ---------------------------------------------------------------------------
// Page metadata – helps Next.js generate the <head> tags automatically
// ---------------------------------------------------------------------------
export const metadata = {
  title: "Research Papers – Engineer‑focused CV makeover",
  description:
    "Transform your engineering resume into a recruiter‑ready, data‑driven CV that lands interviews.",
};

// ---------------------------------------------------------------------------
// Default export – a **React component** (Server Component) that renders the page
// ---------------------------------------------------------------------------
export default function ResumeRevamp() {
  return (
    <ServicePage
      title="Research Papers"
      emoji="📝"
      ctaLabel="Book a Free Review"
      ctaHref="/contact"
    >
      <p>
        Our end‑to‑end revamp includes:
      </p>
      <ul>
        <li>
          <strong>Content audit</strong> – surface high‑impact achievements and
          quantify results.
        </li>
        <li>
          <strong>Keyword optimisation</strong> for ATS and recruiter vocab.
        </li>
        <li>
          <strong>Clay‑morphic design</strong> – clean, premium layout that
          works on any device.
        </li>
        <li>
          <strong>Live gamified score‑board preview</strong> so you can see the
          impact before you submit.
        </li>
      </ul>

      <p>
        <strong>Why us?</strong> 6 + research papers, 4 + conference papers,
        20 + guided projects, and a Best Paper Award prove our technical depth.
        Let that credibility shine on your CV.
      </p>
    </ServicePage>
  );
}