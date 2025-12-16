import { motion } from "framer-motion";
import {
  SiReact,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiNextdotjs,
  SiDocker,
  SiFramer,
  SiMui,
  SiGit,
  SiJavascript,
  SiHtml5,
  SiCss3,
  SiLinux,
  SiMysql,
} from "react-icons/si";

export default function Skills() {
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

  /* --------------------
     STYLES
  -------------------- */
  const styles = {
    section: {
      padding: "100px 20px",
      backgroundColor: colors.bg,
      fontFamily: "'Inter', system-ui, sans-serif",
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
      maxWidth: "720px",
      margin: "0 auto 60px",
      color: colors.muted,
      fontSize: "1.05rem",
      lineHeight: 1.6,
    },
    grid: {
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit, minmax(140px, 1fr))",
      gap: "20px",
      maxWidth: "1000px",
      margin: "0 auto",
    },
    card: {
      backgroundColor: colors.cardBg,
      border: `1px solid ${colors.border}`,
      borderRadius: "14px",
      padding: "22px 16px",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      cursor: "default",
    },
    icon: {
      fontSize: "2rem",
      color: colors.primary,
      marginBottom: "10px",
    },
    label: {
      fontSize: "0.9rem",
      fontWeight: 500,
      color: colors.text,
      textAlign: "center",
    },
  };

  /* --------------------
     SKILLS DATA
  -------------------- */
  const skills = [
    { name: "React", icon: SiReact },
    { name: "Next.js", icon: SiNextdotjs },
    { name: "Node.js", icon: SiNodedotjs },
    { name: "Express", icon: SiExpress },
    { name: "MongoDB", icon: SiMongodb },
    { name: "MySQL", icon: SiMysql },
    { name: "Docker", icon: SiDocker },
    { name: "Linux", icon: SiLinux },
    { name: "Git", icon: SiGit },
    { name: "MUI", icon: SiMui },
    { name: "Framer Motion", icon: SiFramer },
    { name: "JavaScript", icon: SiJavascript },
    { name: "HTML5", icon: SiHtml5 },
    { name: "CSS3", icon: SiCss3 },
  ];

  return (
    <section id="skills" style={styles.section}>
      {/* TITLE */}
      <motion.h2
        style={styles.heading}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        Technical Skills
      </motion.h2>

      {/* SUBTITLE */}
      <motion.p
        style={styles.subtitle}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        viewport={{ once: true }}
      >
        Tools and technologies I’ve used to build production-ready applications,
        contribute to open source, and work comfortably in Linux environments.
      </motion.p>

      {/* GRID */}
      <div style={styles.grid}>
        {skills.map((skill, index) => {
          const Icon = skill.icon;
          return (
            <motion.div
              key={skill.name}
              style={styles.card}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.04 }}
              viewport={{ once: true }}
              whileHover={{ y: -6 }}
            >
              <Icon style={styles.icon} />
              <span style={styles.label}>{skill.name}</span>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
