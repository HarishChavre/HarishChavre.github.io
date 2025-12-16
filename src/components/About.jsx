import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Briefcase, Code, GraduationCap } from "lucide-react";

export default function About() {
  const [activeCard, setActiveCard] = useState(null);

  /* --------------------
     COLOR SYSTEM
  -------------------- */
  const colors = {
    primary: "#7952B3",
    secondary: "#FD7E14",
    bg: "#FFFFFF",
    cardBg: "#F8F9FA",
    text: "#212529",
    muted: "#6C757D",
    border: "#E9ECEF",
  };

  /* --------------------
     STYLES
  -------------------- */
  const styles = {
    section: {
      padding: "100px 20px",
      backgroundColor: colors.bg,
      fontFamily: "'Inter', system-ui, sans-serif",
    },
    container: {
      maxWidth: "1000px",
      margin: "0 auto",
    },
    heading: {
      fontSize: "2.4rem",
      fontWeight: 700,
      textAlign: "center",
      color: colors.text,
      marginBottom: "16px",
    },
    subtitle: {
      textAlign: "center",
      color: colors.muted,
      maxWidth: "700px",
      margin: "0 auto 60px",
      fontSize: "1.05rem",
      lineHeight: 1.6,
    },
    cardGrid: {
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
      gap: "24px",
    },
    card: (isActive) => ({
      backgroundColor: colors.cardBg,
      border: `2px solid ${isActive ? colors.primary : colors.border}`,
      borderRadius: "14px",
      padding: "28px",
      cursor: "pointer",
      transition: "border 0.2s ease",
    }),
    iconWrap: {
      width: "44px",
      height: "44px",
      borderRadius: "10px",
      backgroundColor: colors.primary,
      color: "#ffffff",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      marginBottom: "20px",
    },
    cardTitle: {
      fontSize: "1.2rem",
      fontWeight: 600,
      color: colors.text,
      marginBottom: "10px",
    },
    cardPreview: {
      fontSize: "0.95rem",
      color: colors.muted,
      lineHeight: 1.6,
    },
    detailsBox: {
      marginTop: "50px",
      backgroundColor: "#ffffff",
      border: `1px solid ${colors.border}`,
      borderRadius: "16px",
      padding: "32px",
    },
    detailsTitle: {
      fontSize: "1.4rem",
      fontWeight: 600,
      color: colors.primary,
      marginBottom: "16px",
    },
    detailsItem: {
      marginBottom: "14px",
      fontSize: "0.95rem",
      color: colors.text,
      lineHeight: 1.6,
    },
  };

  /* --------------------
     DATA
  -------------------- */
  const cards = [
    {
      id: "work",
      icon: Briefcase,
      title: "Industry Experience",
      preview:
        "Hands-on experience building and optimizing real-world full-stack applications.",
      details: [
        "Full-Stack Developer Intern at Clustor Computing, working with React, Node.js, and MongoDB.",
        "Built and shipped multiple production features with focus on performance and maintainability.",
        "Optimized backend APIs using indexing and caching, improving response times significantly.",
      ],
    },
    {
      id: "opensource",
      icon: Code,
      title: "Open Source & Community",
      preview:
        "Active open-source contributor with a strong focus on Debian and developer tooling.",
      details: [
        "Google Summer of Code 2025 contributor working in the Debian ecosystem.",
        "Debian community member and Node.js package maintainer since 2020.",
        "Experience with Debian packaging, CI workflows, and collaborative development.",
      ],
    },
    {
      id: "education",
      icon: GraduationCap,
      title: "Education & Skills",
      preview:
        "Strong academic foundation combined with practical engineering skills.",
      details: [
        "Master of Computer Applications (MCA) with focus on full-stack development.",
        "Comfortable working in Linux environments with Docker, Git, and CI/CD pipelines.",
        "Strong fundamentals in data structures, APIs, and scalable system design.",
      ],
    },
  ];

  return (
    <section id="about" style={styles.section}>
      <div style={styles.container}>
        {/* TITLE */}
        <motion.h2
          style={styles.heading}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          About Me
        </motion.h2>

        {/* SUBTITLE */}
        <motion.p
          style={styles.subtitle}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          viewport={{ once: true }}
        >
          A quick overview of my background. Click a section to see more
          detailed information.
        </motion.p>

        {/* CARDS */}
        <div style={styles.cardGrid}>
          {cards.map((card, index) => {
            const Icon = card.icon;
            const isActive = activeCard === card.id;

            return (
              <motion.div
                key={card.id}
                style={styles.card(isActive)}
                whileHover={{ y: -6 }}
                onClick={() =>
                  setActiveCard(isActive ? null : card.id)
                }
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div style={styles.iconWrap}>
                  <Icon size={22} />
                </div>
                <h3 style={styles.cardTitle}>{card.title}</h3>
                <p style={styles.cardPreview}>{card.preview}</p>
              </motion.div>
            );
          })}
        </div>

        {/* EXPANDED DETAILS */}
        <AnimatePresence>
          {activeCard && (
            <motion.div
              style={styles.detailsBox}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 10 }}
              transition={{ duration: 0.3 }}
            >
              {cards
                .find((c) => c.id === activeCard)
                .details.map((d, i) => (
                  <p key={i} style={styles.detailsItem}>
                    {d}
                  </p>
                ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
