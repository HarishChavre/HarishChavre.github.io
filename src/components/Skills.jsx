import { motion } from "framer-motion";
import React from "react";
import { 
  SiReact, SiNodedotjs, SiExpress, SiMongodb, SiNextdotjs, 
  SiDocker, SiFramer, SiMui, SiGit, SiJavascript, SiHtml5, 
  SiCss3, SiLinux, SiMysql 
} from "react-icons/si";

const colors = {
  mainAccent: "#EF5B5B",
  secondaryAccent: "#00A896",
  darkBg: "#1D2B3A",
  cardBg: "#253447",
  lightText: "#E5E9F0",
  grayText: "#A1B0C4",
};

export default function Skills() {
  const styles = {
    section: {
      padding: "80px 20px",
      backgroundColor: colors.darkBg,
      color: colors.lightText,
      fontFamily: "'Montserrat', sans-serif",
      textAlign: "center",
    },
    title: {
      fontSize: "2.8rem",
      fontWeight: 700,
      marginBottom: "40px",
      color: colors.mainAccent,
    },
    grid: {
      display: "flex",
      flexWrap: "wrap",
      justifyContent: "center",
      gap: "25px",
      maxWidth: "1000px",
      margin: "0 auto",
    },
    badge: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      width: "100px",
      height: "100px",
      backgroundColor: colors.cardBg,
      color: colors.lightText,
      borderRadius: "16px",
      fontWeight: 600,
      fontSize: "0.95rem",
      boxShadow: "0 4px 12px rgba(0,0,0,0.3)",
      cursor: "pointer",
      border: `1px solid ${colors.cardBg}`,
      transition: "all 0.3s ease",
    },
    icon: {
      fontSize: "2.2rem",
      marginBottom: "8px",
      color: colors.mainAccent,
    },
  };

  const skills = [
    { name: "React.js", icon: <SiReact style={styles.icon} /> },
    { name: "Next.js", icon: <SiNextdotjs style={styles.icon} /> },
    { name: "Node.js", icon: <SiNodedotjs style={styles.icon} /> },
    { name: "Express.js", icon: <SiExpress style={styles.icon} /> },
    { name: "MongoDB", icon: <SiMongodb style={styles.icon} /> },
    { name: "MySQL", icon: <SiMysql style={styles.icon} /> },
    { name: "Docker", icon: <SiDocker style={styles.icon} /> },
    { name: "MUI", icon: <SiMui style={styles.icon} /> },
    { name: "Framer Motion", icon: <SiFramer style={styles.icon} /> },
    { name: "Git", icon: <SiGit style={styles.icon} /> },
    { name: "JavaScript", icon: <SiJavascript style={styles.icon} /> },
    { name: "HTML5", icon: <SiHtml5 style={styles.icon} /> },
    { name: "CSS3", icon: <SiCss3 style={styles.icon} /> },
        { name: "Linux", icon: <SiLinux style={styles.icon} /> },
  ];

  return (
    <motion.section
      id="skills"
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
        Technical Skills
      </motion.h2>

      <div style={styles.grid}>
        {skills.map((skill, i) => (
          <motion.div
            key={i}
            style={styles.badge}
            whileHover={{ 
              scale: 1.1, 
              boxShadow: `0 0 18px ${colors.secondaryAccent}`,
              color: colors.secondaryAccent,
            }}
            transition={{ duration: 0.3 }}
          >
            {/* Clone icon and set color on hover to match the shadow */}
            {React.cloneElement(skill.icon, { 
              style: { 
                ...styles.icon, 
                color: colors.mainAccent,
                transition: "color 0.3s ease",
              } 
            })}
            <span>{skill.name}</span>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}