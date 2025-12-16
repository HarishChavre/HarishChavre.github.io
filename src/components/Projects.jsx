import React, { useRef, useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Github, ChevronLeft, ChevronRight } from "lucide-react";

/* --------------------
   PROJECT DATA
-------------------- */
const projects = [
  {
    title: "Collaborative Code Storybook",
    desc: "A full-stack platform where developers can share code snippets and generate story-style explanations with diagrams. Supports comments, upvotes, and saved collections.",
    impact:
      "Demonstrates full-stack architecture, collaborative features, and thoughtful UI design using the MERN stack.",
    stack: ["React", "Node.js", "MongoDB"],
    link: "https://code-storybook-1.onrender.com/",
  },
  {
    title: "Farmwise – Smart Agriculture Dashboard",
    desc: "A MERN-based dashboard for farmers offering crop insights, weather data, yield prediction, and disease detection using external APIs.",
    impact:
      "Built to explore how real-time data and prediction models can assist decision-making in agriculture.",
    stack: ["React", "Node.js", "APIs", "MUI"],
    link: "https://github.com/HarishChavre/Farmwise",
  },
  {
    title: "KnowFood – Ingredient & Recipe Explorer",
    desc: "A simple web app that explains food ingredients and suggests recipes using public APIs and interactive cards.",
    impact:
      "Focused on clarity and UX to help users understand what they eat in a straightforward way.",
    stack: ["React", "Express", "MongoDB"],
    link: "https://github.com/HarishChavre/KnowFood",
  },
  {
    title: "Git Storyteller (Open Source CLI)",
    desc: "An open-source CLI tool that turns Git commit history into readable, story-like summaries.",
    impact:
      "Published on npm and designed for developers who want to present their work in a narrative form.",
    stack: ["Node.js", "npm", "Git"],
    link: "https://github.com/HarishChavre/git-storyteller",
  },
  {
    title: "Debian Packaging – node-zrender",
    desc: "Packaged and uploaded the Node.js library ZRender into Debian’s official repositories.",
    impact:
      "Improved accessibility of the library for Debian users and strengthened Debian packaging skills.",
    stack: ["Debian", "Node.js", "Packaging"],
    link: "https://salsa.debian.org/Harish1/node-zrender",
  },
];

/* --------------------
   COLOR SYSTEM
-------------------- */
const colors = {
  primary: "#7952B3",     // Soft Violet
  secondary: "#FD7E14",   // Burnt Orange
  bg: "#FFFFFF",
  cardBg: "#F8F9FA",
  text: "#212529",
  muted: "#6C757D",
  border: "#E9ECEF",
};

export default function Projects() {
  const containerRef = useRef(null);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const resize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener("resize", resize);
    return () => window.removeEventListener("resize", resize);
  }, []);

  const scroll = (dir) => {
    if (!containerRef.current) return;
    const amount = containerRef.current.clientWidth * 0.8;
    containerRef.current.scrollBy({
      left: dir === "left" ? -amount : amount,
      behavior: "smooth",
    });
  };

  /* --------------------
     STYLES
  -------------------- */
  const styles = {
    section: {
      padding: isMobile ? "80px 0" : "100px 20px",
      backgroundColor: colors.bg,
      fontFamily: "'Inter', system-ui, sans-serif",
    },
    heading: {
      textAlign: "center",
      fontSize: isMobile ? "2rem" : "2.6rem",
      fontWeight: 700,
      color: colors.text,
      marginBottom: "16px",
    },
    subtitle: {
      textAlign: "center",
      maxWidth: "720px",
      margin: "0 auto 60px",
      color: colors.muted,
      fontSize: "1.05rem",
      lineHeight: 1.6,
    },
    sliderWrap: {
      position: "relative",
      maxWidth: "1200px",
      margin: "0 auto",
    },
    slider: {
      display: "flex",
      gap: "24px",
      overflowX: "auto",
      padding: "20px",
      scrollSnapType: "x mandatory",
      scrollbarWidth: "none",
    },
    card: {
      flex: isMobile ? "0 0 85%" : "0 0 340px",
      backgroundColor: colors.cardBg,
      border: `1px solid ${colors.border}`,
      borderRadius: "16px",
      padding: "24px",
      scrollSnapAlign: "start",
      textDecoration: "none",
      color: colors.text,
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-between",
      transition: "transform 0.25s ease",
    },
    title: {
      fontSize: "1.25rem",
      fontWeight: 600,
      color: colors.primary,
      marginBottom: "8px",
    },
    desc: {
      fontSize: "0.95rem",
      color: colors.muted,
      lineHeight: 1.5,
    },
    impact: {
      marginTop: "16px",
      fontSize: "0.9rem",
      color: colors.text,
      borderLeft: `3px solid ${colors.secondary}`,
      paddingLeft: "10px",
    },
    stack: {
      display: "flex",
      flexWrap: "wrap",
      gap: "8px",
      marginTop: "16px",
    },
    pill: {
      fontSize: "0.75rem",
      padding: "4px 10px",
      borderRadius: "999px",
      backgroundColor: "rgba(121, 82, 179, 0.1)",
      color: colors.primary,
      fontWeight: 500,
    },
    footer: {
      marginTop: "18px",
      fontSize: "0.85rem",
      display: "flex",
      alignItems: "center",
      gap: "6px",
      color: colors.muted,
      fontWeight: 500,
    },
    arrow: {
      position: "absolute",
      top: "50%",
      transform: "translateY(-50%)",
      backgroundColor: colors.primary,
      color: "#fff",
      border: "none",
      borderRadius: "50%",
      padding: "10px",
      cursor: "pointer",
      display: isMobile ? "none" : "flex",
    },
  };

  return (
    <section id="projects" style={styles.section}>
      <motion.h2
        style={styles.heading}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        Projects
      </motion.h2>

      <motion.p
        style={styles.subtitle}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        viewport={{ once: true }}
      >
        A selection of projects where I focused on clean architecture, real-world
        problems, and practical engineering decisions.
      </motion.p>

      <div style={styles.sliderWrap}>
        {!isMobile && (
          <button
            style={{ ...styles.arrow, left: "-10px" }}
            onClick={() => scroll("left")}
          >
            <ChevronLeft size={18} />
          </button>
        )}

        <div ref={containerRef} style={styles.slider}>
          {projects.map((p, i) => (
            <motion.a
              key={i}
              href={p.link}
              target="_blank"
              rel="noopener noreferrer"
              style={styles.card}
              whileHover={{ y: -6 }}
            >
              <div>
                <h3 style={styles.title}>{p.title}</h3>
                <p style={styles.desc}>{p.desc}</p>
                <p style={styles.impact}>{p.impact}</p>

                <div style={styles.stack}>
                  {p.stack.map((s) => (
                    <span key={s} style={styles.pill}>
                      {s}
                    </span>
                  ))}
                </div>
              </div>

              <div style={styles.footer}>
                <Github size={14} /> View source
              </div>
            </motion.a>
          ))}
        </div>

        {!isMobile && (
          <button
            style={{ ...styles.arrow, right: "-10px" }}
            onClick={() => scroll("right")}
          >
            <ChevronRight size={18} />
          </button>
        )}
      </div>
    </section>
  );
}
