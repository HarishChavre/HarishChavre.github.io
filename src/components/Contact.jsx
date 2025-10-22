import { motion } from "framer-motion";
import { Button } from "@mui/material";

const colors = {
  mainAccent: "#EF5B5B",
  secondaryAccent: "#00A896",
  darkBg: "#1D2B3A",
  lightText: "#E5E9F0",
  grayText: "#A1B0C4",
};

export default function Contact() {
  const styles = {
    section: {
      padding: "100px 20px",
      backgroundColor: colors.darkBg,
      color: colors.lightText,
      fontFamily: "'Montserrat', sans-serif",
      textAlign: "center",
      borderTop: `1px solid ${colors.cardBg}`,
    },
    title: {
      fontSize: "3rem",
      fontWeight: 800,
      marginBottom: "30px",
      color: colors.mainAccent,
    },
    text: {
      fontSize: "1.15rem",
      color: colors.grayText,
      maxWidth: "700px",
      margin: "0 auto 50px",
      lineHeight: 1.7,
    },
    btn: {
      background: `linear-gradient(45deg, ${colors.secondaryAccent} 30%, #00C8B6 90%)`,
      color: colors.darkBg,
      textTransform: "uppercase",
      fontWeight: 700,
      fontSize: "1.05rem",
      padding: "14px 40px",
      borderRadius: "50px",
      boxShadow: "0 4px 15px rgba(0, 168, 150, 0.4)",
      letterSpacing: "1px",
      cursor: "pointer",
      transition: "all 0.4s ease",
    },
    contactDetails: {
      marginTop: "60px",
      color: colors.lightText,
      fontSize: "1.05rem",
      lineHeight: 2.2,
    },
    highlight: {
      color: colors.mainAccent,
      fontWeight: 700,
    },
    linkStyle: {
      color: colors.grayText,
      textDecoration: "none",
      transition: "color 0.3s ease",
    }
  };

  return (
    <motion.section
      id="contact"
      style={styles.section}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      <motion.h2
        style={styles.title}
        initial={{ y: 40, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        Get In Touch
      </motion.h2>

      <motion.p
        style={styles.text}
        initial={{ y: 20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7, delay: 0.2 }}
      >
        I’m open to full-time roles, collaborations, and freelance projects. 
        If you’re looking for a dedicated developer to bring your ideas to life, let’s connect.
      </motion.p>

      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.7, delay: 0.4, type: "spring", stiffness: 150 }}
        whileHover={{ scale: 1.05, boxShadow: "0 6px 20px rgba(0, 168, 150, 0.6)" }}
        whileTap={{ scale: 0.97 }}
      >
        <a href="mailto:harishpchavre@gmail.com" style={{ textDecoration: "none" }}>
          <Button style={styles.btn}>Start a Conversation</Button>
        </a>
      </motion.div>

      <motion.div
        style={styles.contactDetails}
        initial={{ y: 20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7, delay: 0.6 }}
      >
        <p>
          📍 <span style={styles.highlight}>Nagpur, India</span>
        </p>
        <p>
          ✉️ <a 
              href="mailto:harishpchavre@gmail.com" 
              style={styles.linkStyle} 
              onMouseOver={(e) => e.target.style.color = colors.mainAccent}
              onMouseOut={(e) => e.target.style.color = colors.grayText}
            >
            harishpchavre@gmail.com
          </a>
        </p>
    
      </motion.div>
    </motion.section>
  );
}