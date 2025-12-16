import { motion } from "framer-motion";
import { Button } from "@mui/material";

export default function Contact() {
  /* --------------------
     COLOR SYSTEM
  -------------------- */
  const colors = {
    primary: "#7952B3",     // Soft Violet
    secondary: "#FD7E14",   // Burnt Orange
    bg: "#FFFFFF",
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
      borderTop: `1px solid ${colors.border}`,
    },
    container: {
      maxWidth: "900px",
      margin: "0 auto",
      textAlign: "center",
    },
    heading: {
      fontSize: "2.4rem",
      fontWeight: 700,
      color: colors.text,
      marginBottom: "16px",
    },
    subtitle: {
      fontSize: "1.05rem",
      color: colors.muted,
      maxWidth: "650px",
      margin: "0 auto 40px",
      lineHeight: 1.6,
    },
    buttonWrap: {
      marginBottom: "50px",
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
    details: {
      fontSize: "0.95rem",
      color: colors.text,
      lineHeight: 2,
    },
    link: {
      color: colors.primary,
      textDecoration: "none",
      fontWeight: 500,
    },
    location: {
      color: colors.muted,
    },
  };

  return (
    <section id="contact" style={styles.section}>
      <div style={styles.container}>
        {/* HEADING */}
        <motion.h2
          style={styles.heading}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Get in Touch
        </motion.h2>

        {/* SUBTITLE */}
        <motion.p
          style={styles.subtitle}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          viewport={{ once: true }}
        >
          I’m open to full-time roles, open-source collaboration, and meaningful
          freelance work. If you think we could build something useful together,
          I’d be happy to talk.
        </motion.p>

        {/* CTA */}
        <motion.div
          style={styles.buttonWrap}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.4, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <motion.div whileHover={{ y: -2 }} whileTap={{ scale: 0.97 }}>
            <a
              href="mailto:harishpchavre@gmail.com"
              style={{ textDecoration: "none" }}
            >
              <Button style={styles.primaryBtn}>
                Email Me
              </Button>
            </a>
          </motion.div>
        </motion.div>

        {/* DETAILS */}
        <motion.div
          style={styles.details}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <p style={styles.location}>Nagpur, India</p>
          <p>
            <a
              href="mailto:harishpchavre@gmail.com"
              style={styles.link}
            >
             
            </a>
          </p>
        </motion.div>
      </div>
    </section>
  );
}
