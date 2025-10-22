import React, { useRef, useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Github, Zap, ChevronLeft, ChevronRight } from "lucide-react";

const projects = [
  {
    title: "Collaborative Code Storybook",
    desc: "A full-stack platform that allows developers to submit code snippets and automatically generate story-like explanations with visual diagrams. Users can browse, comment, upvote, and save code stories.",
    impact: "Showcases full-stack development, data visualization, and collaborative features built on the MERN stack.",
    stack: ["React", "Node.js", "Express.js", "MongoDB", "Framer Motion"],
    link: "https://code-storybook-1.onrender.com/",
    imagePlaceholder: "https://placehold.co/400x250/1D2B3A/EF5B5B?text=Collaborative+Code+Storybook",
  },
  {
    title: "Farmwise - Smart Agriculture Dashboard",
    desc: "A MERN stack application built to assist farmers with real-time crop monitoring, weather updates, commodity view, yield prediction, and disease detection using external APIs.",
    impact: "Integrates smart insights and predictive analytics to empower farmers with data-driven agricultural decisions.",
    stack: ["React", "Node.js", "MongoDB", "MUI", "External APIs"],
    link: "https://github.com/HarishChavre/Farmwise",
    imagePlaceholder: "https://placehold.co/400x250/1D2B3A/EF5B5B?text=Farmwise",
  },
  {
    title: "KnowFood - Ingredient & Recipe Explorer",
    desc: "An intuitive MERN stack app that provides detailed information and recipes of food items using interactive cards for easy exploration.",
    impact: "Helps users make informed dietary choices by decoding ingredients and showing creative recipes from public APIs.",
    stack: ["React", "Express.js", "MongoDB", "Public APIs"],
    link: "https://github.com/HarishChavre/KnowFood",
    imagePlaceholder: "https://placehold.co/400x250/1D2B3A/EF5B5B?text=KnowFood",
  },
 {
  title: "Git Storyteller (Open Source CLI Tool)",
  desc: "An open-source CLI tool built with Node.js that automatically generates engaging, story-style summaries from Git commit history.",
  impact: "Published on npm, it transforms raw Git logs into narrative summaries, helping developers present their coding journey creatively. Designed for open-source contributors and portfolio storytelling.",
  stack: ["Node.js", "npm", "Commander.js", "Inquirer", "Chalk", "Git APIs"],
  link: "https://github.com/HarishChavre/git-storyteller",
  imagePlaceholder: "https://placehold.co/400x250/1D2B3A/EF5B5B?text=Git+Storyteller+CLI",
},

  {
    title: "Debian Packaging - Node ZRender",
    desc: "Successfully packaged the Node.js library ZRender and archived it into Debian’s official repository.",
    impact: "Contributed to open-source by ensuring seamless Debian integration, enhancing accessibility for developers.",
    stack: ["Debian", "Node.js", "Open Source", "Packaging"],
    link: "https://salsa.debian.org/Harish1/node-zrender",
    imagePlaceholder: "https://placehold.co/400x250/1D2B3A/EF5B5B?text=Debian+Packaging",
  },
];

const colors = {
  mainAccent: "#EF5B5B",
  secondaryAccent: "#00A896",
  darkBg: "#1D2B3A",
  cardBg: "#253447",
  lightText: "#E5E9F0",
  grayText: "#A1B0C4",
};

export default function Projects() {
  const containerRef = useRef(null);
  const [width, setWidth] = useState(window.innerWidth);
  const breakpoint = 768;
  const isMobile = width <= breakpoint;

  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const scroll = (direction) => {
    if (containerRef.current) {
      const { scrollLeft, clientWidth } = containerRef.current;
      const scrollAmount = direction === "left" ? scrollLeft - clientWidth * 0.8 : scrollLeft + clientWidth * 0.8;
      containerRef.current.scrollTo({ left: scrollAmount, behavior: "smooth" });
    }
  };

  const styles = {
    section: {
      padding: isMobile ? "60px 0" : "80px 20px",
      backgroundColor: colors.darkBg,
      color: colors.lightText,
      fontFamily: "'Montserrat', sans-serif",
      textAlign: "center",
    },
    title: {
      fontSize: isMobile ? "2.2rem" : "2.8rem",
      fontWeight: 700,
      color: colors.mainAccent,
      marginBottom: "3rem",
    },
    scrollContainerWrapper: {
      position: "relative",
      maxWidth: isMobile ? "100%" : "1200px",
      margin: "0 auto",
      padding: isMobile ? "0" : "0 20px",
    },
    scrollContainer: {
      display: "flex",
      overflowX: "scroll",
      gap: isMobile ? "20px" : "30px",
      scrollSnapType: "x mandatory",
      padding: isMobile ? "20px 20px 30px" : "20px 0 30px",
      WebkitOverflowScrolling: "touch",
      scrollbarWidth: "none",
    },
    card: {
      flex: isMobile ? "0 0 85vw" : "0 0 320px",
      borderRadius: "14px",
      backgroundColor: colors.cardBg,
      border: `1px solid ${colors.cardBg}`,
      scrollSnapAlign: isMobile ? "center" : "start",
      display: "flex",
      flexDirection: "column",
      textDecoration: "none",
      overflow: "hidden",
      boxShadow: "0 8px 25px rgba(0,0,0,0.3)",
      transition: "all 0.3s ease",
      minHeight: "450px",
    },
    cardImage: {
      height: "200px",
      width: "100%",
      objectFit: "cover",
      borderBottom: `3px solid ${colors.secondaryAccent}`,
    },
    cardContent: {
      padding: "20px",
      textAlign: "left",
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-between",
      flexGrow: 1,
    },
    cardTitle: {
      fontSize: "1.35rem",
      fontWeight: 700,
      color: colors.mainAccent,
      marginBottom: "8px",
    },
    cardDesc: {
      fontSize: "0.95rem",
      color: colors.grayText,
    },
    impactContainer: {
      marginTop: "16px",
      padding: "10px",
      borderRadius: "8px",
      backgroundColor: "rgba(0,168,150,0.1)",
      borderLeft: `3px solid ${colors.secondaryAccent}`,
    },
    techStack: {
      display: "flex",
      flexWrap: "wrap",
      gap: "8px",
      marginTop: "16px",
    },
    techPill: {
      padding: "5px 10px",
      borderRadius: "6px",
      fontSize: "0.75rem",
      fontWeight: 600,
      backgroundColor: "rgba(239, 91, 91, 0.15)",
      color: colors.mainAccent,
    },
    arrowBtn: {
      position: "absolute",
      top: "50%",
      transform: "translateY(-50%)",
      backgroundColor: colors.secondaryAccent,
      border: "none",
      padding: "12px",
      borderRadius: "50%",
      cursor: "pointer",
      zIndex: 10,
      display: isMobile ? "none" : "flex",
      alignItems: "center",
      justifyContent: "center",
      boxShadow: "0 4px 10px rgba(0,0,0,0.3)",
      transition: "background-color 0.3s ease",
    },
    leftBtn: { left: "0px" },
    rightBtn: { right: "0px" },
  };

  return (
    <motion.section
      id="projects"
      style={styles.section}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{ duration: 0.8 }}
    >
      <motion.h2
        style={styles.title}
        initial={{ y: 40, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        Featured Projects
      </motion.h2>

      <div style={styles.scrollContainerWrapper}>
        {!isMobile && (
          <motion.button
            style={{ ...styles.arrowBtn, ...styles.leftBtn }}
            onClick={() => scroll("left")}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <ChevronLeft size={20} color={colors.darkBg} />
          </motion.button>
        )}

        <div ref={containerRef} style={styles.scrollContainer}>
          {projects.map((proj, idx) => (
            <motion.a
              key={idx}
              href={proj.link}
              target="_blank"
              rel="noopener noreferrer"
              style={styles.card}
              whileHover={{ scale: 1.03, boxShadow: "0 10px 30px rgba(0,0,0,0.4)" }}
            >
              <img
                src={proj.imagePlaceholder}
                alt={proj.title}
                style={styles.cardImage}
                onError={(e) => (e.target.src = "https://placehold.co/400x250/1D2B3A/EF5B5B?text=Project")}
              />
              <div style={styles.cardContent}>
                <div>
                  <h3 style={styles.cardTitle}>{proj.title}</h3>
                  <p style={styles.cardDesc}>{proj.desc}</p>
                  <div style={styles.impactContainer}>
                    <h4
                      style={{
                        display: "flex",
                        alignItems: "center",
                        fontSize: "0.9rem",
                        fontWeight: 600,
                        color: colors.secondaryAccent,
                        marginBottom: "4px",
                        gap: "6px",
                      }}
                    >
                      <Zap size={16} /> Key Impact
                    </h4>
                    <p style={{ fontSize: "0.85rem", color: colors.lightText }}>{proj.impact}</p>
                  </div>
                  <div style={styles.techStack}>
                    {proj.stack.map((tech, i) => (
                      <span key={i} style={styles.techPill}>
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                <span
                  style={{
                    marginTop: "20px",
                    fontSize: "0.9rem",
                    fontWeight: 600,
                    color: colors.grayText,
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "6px",
                  }}
                >
                  <Github size={16} /> View Code
                </span>
              </div>
            </motion.a>
          ))}
        </div>

        {!isMobile && (
          <motion.button
            style={{ ...styles.arrowBtn, ...styles.rightBtn }}
            onClick={() => scroll("right")}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <ChevronRight size={20} color={colors.darkBg} />
          </motion.button>
        )}
      </div>
    </motion.section>
  );
}
