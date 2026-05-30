"use client";

import { useState } from "react";

interface Paper {
  id: string;
  title: string;
  category: string;
  tagline: string;
  summary?: string;
  abstract: string;
  methodology: string[];
  findings: string;
  badge: string;
}

export default function PaperSnapshots() {
  const [selectedPaper, setSelectedPaper] = useState<Paper | null>(null);

  const papers: Paper[] = [
    {
      id: "flood-forecasting",
      title: "Transformer-Based Flood Forecasting",
      category: "Deep Learning & Hydrology",
      tagline: "A deep learning multi-day runoff prediction and time-series snapshot for flood detection in the Mahanadi Basin.",
      badge: "Deep Learning",
      abstract: "Accurate streamflow and flood forecasting are critical for disaster mitigation. This paper develops a Transformer-based encoder-decoder model optimized for multi-day streamflow forecasting. Using sequence-to-sequence learning and self-attention, the model captures complex temporal dependencies in meteorological and hydrological time-series datasets from the Mahanadi River Basin.",
      methodology: [
        "Collected daily streamflow and rainfall data from the Mahanadi Basin (CWC gauges).",
        "Preprocessed sequence data with sliding time-series windows (look-back of 30 days, prediction of 5 days).",
        "Built a multi-head self-attention encoder to capture long-term meteorological dependencies.",
        "Deployed a decoder mapping latent features to continuous runoff forecasts.",
        "Compared performance against traditional LSTM and GRU networks using NSE (Nash-Sutcliffe Efficiency) and RMSE."
      ],
      findings: "The Transformer model achieved an NSE of 0.89 on a 5-day-ahead prediction horizon, outperforming LSTM networks by 14% in peak flow scenarios."
    },
    {
      id: "underwater-cv",
      title: "Underwater Visual Perception",
      category: "Computer Vision & GANs",
      tagline: "A generative adversarial and computer vision snapshot focusing on Pix2Pix and CycleGAN image enhancement using the EUVP dataset.",
      badge: "Computer Vision",
      abstract: "Underwater images suffer from severe quality degradation due to light absorption and scattering. This project implements and optimizes generative adversarial networks (GANs) using paired and unpaired setups to enhance underwater visibility. We validate visual fidelity metrics using structural similarity and edge-guided convolutional features.",
      methodology: [
        "Utilized the Enhancing Underwater Visual Perception (EUVP) public benchmark dataset.",
        "Implemented a Pix2Pix architecture using a U-Net generator and a PatchGAN discriminator.",
        "Developed a CycleGAN backup workflow to evaluate enhancement on unaligned raw underwater feeds.",
        "Integrated structural similarity (SSIM) and peak signal-to-noise ratio (PSNR) as combined custom loss indicators.",
        "Tested the enhancement output on object detection networks (YOLOv8) to measure real-world performance gains."
      ],
      findings: "GAN-based restoration enhanced YOLOv8 object detection accuracy under low-light turbid conditions from 42% mAP to 74% mAP."
    },
    {
      id: "5g-mimo",
      title: "5G Resource Allocation",
      category: "MIMO & Game Theory",
      tagline: "A combinatorial auction theory and probabilistic bounding snapshot built for low-latency network optimization frameworks.",
      badge: "Network Optimization",
      abstract: "Dynamic allocation of sub-channels and power in massive MIMO networks is NP-hard. We propose a combinatorial auction mechanism designed to maximize sum-rate capacity while enforcing strict latency bounds. The model leverages probabilistic bounding to ensure QoS constraints for high-reliability low-latency communications (URLLC).",
      methodology: [
        "Formulated the joint channel-power resource allocation problem as a mixed-integer non-linear program (MINLP).",
        "Designed a bidding language representing subscriber requests and capacity demands.",
        "Implemented an auctioneer algorithm solving matching allocations using branch-and-bound optimization.",
        "Derived analytical probabilistic bounds to guarantee channel outage probabilities remain below 10^-5.",
        "Simulated network setups under varying user densities and channel conditions."
      ],
      findings: "The proposed auction framework reached 94% of the optimal capacity envelope while lowering allocation execution delays by 4.8x."
    },
    {
      id: "solar-radio-telescope",
      title: "Solar Radio Telescope",
      category: "RF Engineering & Astronomy",
      tagline: "An RF engineering and analog communication hardware snapshot engineered for hands-on solar observations and student radio astronomy.",
      badge: "RF Engineering",
      abstract: "This project designs and deploys a low-cost, high-performance solar radio telescope operating in the L-band (1.42 GHz) for student observations of solar radio bursts. The system includes a custom parabolic dish feed, a low-noise amplifier (LNA) stage, and an SDR (Software Defined Radio) digital receiver backend.",
      methodology: [
        "Calculated antenna parameters for a 1.2-meter parabolic dish reflector.",
        "Designed and matched a helical feed antenna centered at 1.42 GHz with a return loss of -18dB.",
        "Assembled a cascading LNA chain with bandpass filtering, achieving a noise figure of < 0.6 dB.",
        "Configured an RTL-SDR receiver with GNU Radio scripts for automated power monitoring and signal capture.",
        "Conducted solar drift observations to calibrate system temperature and record transient solar activity."
      ],
      findings: "Successfully mapped the transit of the Sun and detected three micro-solar radio bursts during moderate solar flare episodes."
    }
  ];

  return (
    <div>
      <div style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
        gap: "1.5rem"
      }}>
        {papers.map((paper) => (
          <div
            key={paper.id}
            onClick={() => setSelectedPaper(paper)}
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
              <div style={{
                display: "inline-block",
                padding: "0.25rem 0.6rem",
                borderRadius: "2rem",
                background: "rgba(99, 102, 241, 0.1)",
                border: "1px solid rgba(99, 102, 241, 0.2)",
                fontSize: "0.75rem",
                fontWeight: "bold",
                color: "var(--accent-indigo)",
                marginBottom: "1rem"
              }}>
                {paper.badge}
              </div>
              <h4 style={{ fontSize: "1.2rem", marginBottom: "0.75rem", color: "#fff" }}>
                {paper.title}
              </h4>
              <p style={{ fontSize: "0.85rem", color: "var(--text-secondary)", display: "-webkit-box", WebkitLineClamp: 3, WebkitBoxOrient: "vertical", overflow: "hidden" }}>
                {paper.tagline}
              </p>
            </div>
            
            <div style={{
              marginTop: "1.5rem",
              display: "flex",
              alignItems: "center",
              gap: "0.5rem",
              fontSize: "0.85rem",
              fontWeight: "600",
              color: "var(--accent-cyan)"
            }}>
              <span>View Snapshot</span>
              <span>→</span>
            </div>
          </div>
        ))}
      </div>

      {/* Modal Overlay */}
      {selectedPaper && (
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
        }} onClick={() => setSelectedPaper(null)}>
          <div
            className="glass-panel"
            style={{
              width: "100%",
              maxWidth: "650px",
              maxHeight: "90vh",
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
              onClick={() => setSelectedPaper(null)}
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

            <span style={{ fontSize: "0.8rem", color: "var(--accent-indigo)", fontWeight: "bold", textTransform: "uppercase" }}>
              {selectedPaper.category}
            </span>
            <h3 style={{ fontSize: "1.75rem", margin: "0.5rem 0 1.25rem 0", color: "#fff" }}>
              {selectedPaper.title}
            </h3>

            <div style={{ marginBottom: "1.5rem" }}>
              <h5 style={{ fontSize: "0.9rem", color: "#fff", textTransform: "uppercase", marginBottom: "0.5rem", borderBottom: "1px solid var(--border-light)", paddingBottom: "0.25rem" }}>
                Abstract
              </h5>
              <p style={{ fontSize: "0.85rem", color: "var(--text-secondary)", lineHeight: "1.6" }}>
                {selectedPaper.abstract}
              </p>
            </div>

            <div style={{ marginBottom: "1.5rem" }}>
              <h5 style={{ fontSize: "0.9rem", color: "#fff", textTransform: "uppercase", marginBottom: "0.5rem", borderBottom: "1px solid var(--border-light)", paddingBottom: "0.25rem" }}>
                Methodology
              </h5>
              <ol style={{ paddingLeft: "1.2rem", fontSize: "0.85rem", color: "var(--text-secondary)", display: "flex", flexDirection: "column", gap: "0.5rem" }}>
                {selectedPaper.methodology.map((step, index) => (
                  <li key={index}>{step}</li>
                ))}
              </ol>
            </div>

            <div style={{ background: "rgba(99, 102, 241, 0.05)", borderLeft: "3px solid var(--accent-indigo)", padding: "1rem", borderRadius: "0 0.5rem 0.5rem 0" }}>
              <h6 style={{ fontSize: "0.8rem", color: "var(--accent-indigo)", textTransform: "uppercase", marginBottom: "0.25rem" }}>
                Key Findings / Results
              </h6>
              <p style={{ fontSize: "0.85rem", color: "#fff", fontWeight: "500", margin: 0 }}>
                {selectedPaper.findings}
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
