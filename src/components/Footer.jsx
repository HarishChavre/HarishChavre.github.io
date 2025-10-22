import { motion } from "framer-motion";
import { SiGithub, SiLinkedin, SiGitlab } from "react-icons/si";

const colors = {
  mainAccent: "#EF5B5B",
  darkBg: "#1D2B3A",
  lightText: "#E5E9F0",
  grayText: "#A1B0C4",
};

export default function Footer() {
  const styles = {
    footer: {
      backgroundColor: colors.darkBg,
      color: colors.grayText,
      padding: "40px 20px",
      textAlign: "center",
      fontFamily: "'Montserrat', sans-serif",
      borderTop: `1px solid rgba(255, 255, 255, 0.05)`,
    },
    socialIcons: {
      display: "flex",
      justifyContent: "center",
      gap: "28px",
      marginBottom: "20px",
      fontSize: "1.8rem",
    },
    text: {
      fontSize: "0.95rem",
      color: colors.grayText,
      marginTop: "10px",
    },
  };

  const socials = [
    { icon: <SiGithub />, link: "https://github.com/HarishChavre" },
    { icon: <SiGitlab />, link: "https://salsa.debian.org/Harish1" },
    { icon: <SiLinkedin />, link: "https://linkedin.com/in/harish-chavre-470666354" },
  ];

  return (
    <motion.footer
      style={styles.footer}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      <div style={styles.socialIcons}>
        {socials.map((s, i) => (
          <motion.a
            key={i}
            href={s.link}
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: colors.grayText, transition: "color 0.3s ease" }}
            whileHover={{ scale: 1.2 }}
            onMouseEnter={(e) => (e.target.style.color = colors.mainAccent)}
            onMouseLeave={(e) => (e.target.style.color = colors.grayText)}
          >
            {s.icon}
          </motion.a>
        ))}
      </div>
      <p style={styles.text}>© {new Date().getFullYear()} Harish Chavre. Built with React and style.</p>
    </motion.footer>
  );
}