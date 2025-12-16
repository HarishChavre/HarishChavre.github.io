import { motion } from "framer-motion";
import { SiGithub, SiLinkedin, SiGitlab } from "react-icons/si";

export default function Footer() {
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
    footer: {
      backgroundColor: colors.bg,
      borderTop: `1px solid ${colors.border}`,
      padding: "40px 20px",
      fontFamily: "'Inter', system-ui, sans-serif",
    },
    container: {
      maxWidth: "900px",
      margin: "0 auto",
      textAlign: "center",
    },
    socials: {
      display: "flex",
      justifyContent: "center",
      gap: "24px",
      fontSize: "1.4rem",
      marginBottom: "16px",
    },
    link: {
      color: colors.muted,
      transition: "color 0.2s ease, transform 0.2s ease",
    },
    text: {
      fontSize: "0.85rem",
      color: colors.muted,
    },
    name: {
      color: colors.primary,
      fontWeight: 500,
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
      transition={{ duration: 0.4 }}
      viewport={{ once: true }}
    >
      <div style={styles.container}>
        {/* SOCIAL LINKS */}
        <div style={styles.socials}>
          {socials.map((s, i) => (
            <motion.a
              key={i}
              href={s.link}
              target="_blank"
              rel="noopener noreferrer"
              style={styles.link}
              whileHover={{ y: -2 }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.color = colors.primary)
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.color = colors.muted)
              }
            >
              {s.icon}
            </motion.a>
          ))}
        </div>

        {/* COPYRIGHT */}
        <p style={styles.text}>
          © {new Date().getFullYear()}{" "}
          <span style={styles.name}>Harish Chavre</span>. Built with React.
        </p>
      </div>
    </motion.footer>
  );
}
