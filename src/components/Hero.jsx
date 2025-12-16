import { motion } from "framer-motion";
import { Button } from "@mui/material";
import { useMediaQuery } from "@mui/material";

export default function Hero() {
  /* --------------------
     COLOR SYSTEM
  -------------------- */
  const colors = {
    primary: "#7952B3",   // Soft Violet
    secondary: "#FD7E14", // Burnt Orange
    bg: "#FFFFFF",
    text: "#212529",
    muted: "#495057",
    border: "#E9ECEF",
  };

  const isMobile = useMediaQuery("(max-width:768px)");

  /* --------------------
     STYLES
  -------------------- */
  const styles = {
    section: {
      minHeight: "100vh",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      background: colors.bg,
      padding: isMobile ? "120px 20px 60px" : "140px 40px 80px",
      fontFamily: "'Inter', system-ui, sans-serif",
    },
    container: {
      maxWidth: "900px",
      width: "100%",
      textAlign: "center",
    },
    title: {
      fontSize: isMobile ? "2.4rem" : "3.2rem",
      fontWeight: 700,
      color: colors.text,
      lineHeight: 1.2,
      marginBottom: "20px",
    },
    name: {
      color: colors.primary,
    },
    subtitle: {
      fontSize: isMobile ? "1rem" : "1.15rem",
      lineHeight: 1.7,
      color: colors.muted,
      maxWidth: "720px",
      margin: "0 auto 40px",
    },
    highlight: {
      color: colors.primary,
      fontWeight: 600,
    },
    btnGroup: {
      display: "flex",
      gap: "16px",
      justifyContent: "center",
      flexWrap: "wrap",
    },
    primaryBtn: {
      backgroundColor: colors.primary,
      color: "#ffffff",
      fontWeight: 600,
      padding: "12px 28px",
      borderRadius: "8px",
      textTransform: "none",
      boxShadow: "none",
    },
    secondaryBtn: {
      backgroundColor: "transparent",
      color: colors.primary,
      border: `1.5px solid ${colors.primary}`,
      fontWeight: 600,
      padding: "11px 26px",
      borderRadius: "8px",
      textTransform: "none",
    },
  };

  return (
    <motion.section
      id="hero"
      style={styles.section}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      <div style={styles.container}>
        {/* TITLE */}
        <motion.h1
          style={styles.title}
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          Hi, I’m{" "}
          <span style={styles.name}>Harish Chavre</span>
        </motion.h1>

        {/* SUBTITLE */}
        <motion.p
          style={styles.subtitle}
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          I’m a <span style={styles.highlight}>Full-Stack Developer</span> who
          enjoys building clean, reliable web applications using React and
          Node.js. I actively contribute to{" "}
          <span style={styles.highlight}>open-source</span>, work within the
          Debian ecosystem, and was selected as a{" "}
          <span style={styles.highlight}>Google Summer of Code 2025</span>{" "}
          contributor.
        </motion.p>

        {/* BUTTONS */}
        <motion.div
          style={styles.btnGroup}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.25 }}
        >
          <motion.div whileHover={{ y: -2 }} whileTap={{ scale: 0.97 }}>
            <a href="#projects" style={{ textDecoration: "none" }}>
              <Button style={styles.primaryBtn}>
                View Projects
              </Button>
            </a>
          </motion.div>

          <motion.div whileHover={{ y: -2 }} whileTap={{ scale: 0.97 }}>
            <a
              href="https://harishchavre.github.io/harish-tech-diaries/"
              target="_blank"
              rel="noopener noreferrer"
              style={{ textDecoration: "none" }}
            >
              <Button style={styles.secondaryBtn}>
                Read My Blog
              </Button>
            </a>
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  );
}
