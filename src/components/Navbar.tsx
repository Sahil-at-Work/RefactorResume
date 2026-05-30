"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Process", path: "/process" },
    { name: "Pricing", path: "/pricing" },
    { name: "Connected Members", path: "/members" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <header style={{
      position: "sticky",
      top: 0,
      left: 0,
      right: 0,
      zIndex: 1000,
      background: "rgba(10, 11, 16, 0.75)",
      backdropFilter: "blur(12px)",
      borderBottom: "1px solid rgba(255, 255, 255, 0.08)",
      padding: "1rem 0"
    }}>
      <div className="container" style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center"
      }}>
        {/* Logo */}
        <Link href="/" style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
          <div style={{
            width: "36px",
            height: "36px",
            borderRadius: "0.5rem",
            background: "linear-gradient(135deg, var(--accent-indigo), var(--accent-violet))",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontWeight: "bold",
            fontSize: "1.25rem",
            color: "#fff"
          }}>
            R
          </div>
          <span style={{
            fontFamily: "var(--font-display)",
            fontWeight: 800,
            fontSize: "1.25rem",
            letterSpacing: "-0.03em"
          }}>
            R <span style={{ color: "var(--accent-indigo)" }}>→</span> R
          </span>
        </Link>

        {/* Desktop Links */}
        <nav style={{ display: "flex", gap: "2rem", alignItems: "center" }} className="desktop-nav">
          {navLinks.map((link) => {
            const isActive = pathname === link.path;
            return (
              <Link
                key={link.path}
                href={link.path}
                style={{
                  fontSize: "0.95rem",
                  fontWeight: 500,
                  color: isActive ? "#fff" : "var(--text-secondary)",
                  transition: "color 0.2s ease",
                  position: "relative",
                  padding: "0.25rem 0"
                }}
              >
                {link.name}
                {isActive && (
                  <span style={{
                    position: "absolute",
                    bottom: 0,
                    left: 0,
                    width: "100%",
                    height: "2px",
                    background: "var(--accent-indigo)",
                    borderRadius: "2px"
                  }} />
                )}
              </Link>
            );
          })}
        </nav>

        {/* Action Button */}
        <div style={{ display: "flex", gap: "1rem", alignItems: "center" }} className="desktop-nav">
          <Link href="/contact" className="btn btn-primary" style={{ padding: "0.5rem 1.25rem", fontSize: "0.9rem" }}>
            Get Free Review
          </Link>
        </div>

        {/* Mobile Hamburger Toggle */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          style={{
            background: "none",
            border: "none",
            cursor: "pointer",
            color: "var(--text-primary)",
            padding: "0.5rem",
            display: "none"
          }}
          className="mobile-toggle"
          aria-label="Toggle Navigation Menu"
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            {isOpen ? (
              <path d="M18 6L6 18M6 6l12 12" />
            ) : (
              <path d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Drawer */}
      {isOpen && (
        <div style={{
          position: "absolute",
          top: "100%",
          left: 0,
          right: 0,
          background: "rgba(10, 11, 16, 0.95)",
          backdropFilter: "blur(20px)",
          borderBottom: "1px solid rgba(255, 255, 255, 0.08)",
          padding: "1.5rem",
          display: "flex",
          flexDirection: "column",
          gap: "1.25rem",
          zIndex: 999
        }}>
          {navLinks.map((link) => {
            const isActive = pathname === link.path;
            return (
              <Link
                key={link.path}
                href={link.path}
                onClick={() => setIsOpen(false)}
                style={{
                  fontSize: "1.1rem",
                  fontWeight: 600,
                  color: isActive ? "var(--accent-indigo)" : "var(--text-secondary)",
                  padding: "0.5rem 0"
                }}
              >
                {link.name}
              </Link>
            );
          })}
          <Link
            href="/contact"
            onClick={() => setIsOpen(false)}
            className="btn btn-primary"
            style={{ width: "100%", padding: "0.75rem" }}
          >
            Get Free Review
          </Link>
        </div>
      )}

      {/* Inject basic responsive styles */}
      <style jsx global>{`
        @media (max-width: 768px) {
          .desktop-nav {
            display: none !important;
          }
          .mobile-toggle {
            display: block !important;
          }
        }
      `}</style>
    </header>
  );
}
