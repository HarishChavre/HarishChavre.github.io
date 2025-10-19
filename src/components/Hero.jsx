import { motion } from "framer-motion";
import { Button } from "@mui/material";

export default function Hero() {
  const colors = {
    mainAccent: "#EF5B5B",
    secondaryAccent: "#00A896",
    darkBg: "#1D2B3A",
    lightText: "#f5f5f5",
  };

  const styles = {
    section: {
      height: "100vh",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      background: colors.darkBg,
      color: colors.lightText,
      textAlign: "center",
      padding: "0 20px",
      fontFamily: "'Montserrat', sans-serif",
    },
    title: {
      fontSize: "4rem",
      fontWeight: 900,
      letterSpacing: "2px",
      marginBottom: "20px",
      textShadow: "0 0 8px rgba(239, 91, 91, 0.2)",
    },
    subtitle: {
      fontSize: "1.25rem",
      maxWidth: "700px",
      lineHeight: "1.7",
      color: "#A1B0C4",
      marginBottom: "50px",
    },
    highlight: {
      color: colors.mainAccent,
    },
    // Primary CTA Button Style (View My Work)
    primaryBtn: {
      background: `linear-gradient(45deg, ${colors.secondaryAccent} 30%, #00C8B6 90%)`,
      color: colors.darkBg,
      textTransform: "uppercase",
      fontWeight: 700,
      fontSize: "1.05rem",
      padding: "14px 40px",
      borderRadius: "50px",
      boxShadow: "0 4px 12px rgba(0, 168, 150, 0.3)",
      letterSpacing: "1px",
      transition: "all 0.4s ease",
    },
    // Secondary CTA Button Style (View My Blogs)
    secondaryBtn: {
        background: "transparent",
        color: colors.mainAccent, // Use main accent for visibility
        border: `2px solid ${colors.mainAccent}`,
        textTransform: "uppercase",
        fontWeight: 700,
        fontSize: "1.05rem",
        padding: "12px 30px",
        borderRadius: "50px",
        letterSpacing: "1px",
        transition: "all 0.4s ease",
    },
    btnContainer: {
        display: "flex",
        gap: "20px",
        marginTop: "40px",
        justifyContent: "center",
    }
  };

  return (
    <motion.section
      id="hero"
      style={styles.section}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
    >
      <motion.h1
        style={styles.title}
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        Hi, I’m <span style={styles.highlight}>Harish Chavre</span>
      </motion.h1>

      <motion.p
        style={styles.subtitle}
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
      >
        Full Stack Developer skilled in React, Node.js, and MongoDB. I build scalable web applications and contribute
        to open-source projects in the Debian ecosystem. Google Summer of Code 2025 participant and passionate about
        creating meaningful digital experiences.
      </motion.p>

      <div style={styles.btnContainer}>
        {/* Primary CTA: View My Work */}
        <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6, type: "spring", stiffness: 150 }}
            whileHover={{ scale: 1.08, boxShadow: "0 6px 20px rgba(0, 168, 150, 0.5)" }}
            whileTap={{ scale: 0.95 }}
        >
          <a href="#projects" style={{ textDecoration: "none" }}>
            <Button style={styles.primaryBtn}>View My Work</Button>
          </a>
        </motion.div>

        {/* Secondary CTA: View My Blogs (Placeholder) */}
        <motion.a
            href="https://harishchavre.github.io/harish-tech-diaries/" 
            target="_blank"
            rel="noopener noreferrer"
            style={{ textDecoration: "none" }}
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.7, type: "spring", stiffness: 150 }}
            whileHover={{ scale: 1.08, backgroundColor: "rgba(239, 91, 91, 0.1)", boxShadow: "0 6px 20px rgba(239, 91, 91, 0.2)" }}
            whileTap={{ scale: 0.95 }}
        >
          <Button style={styles.secondaryBtn}>View My Blogs</Button>
        </motion.a>
      </div>
    </motion.section>
  );
}