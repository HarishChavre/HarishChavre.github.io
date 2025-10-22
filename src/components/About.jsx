import React, { useState } from "react";
import { motion } from "framer-motion";
import { Briefcase, Code, GraduationCap } from "lucide-react";

const colors = {
  mainAccent: "#EF5B5B",
  secondaryAccent: "#00A896",
  darkBg: "#1D2B3A",
  cardBg: "#253447",
  lightText: "#E5E9F0",
  grayText: "#A1B0C4",
};

// --- UPDATED DATA FROM RESUME ---
const aboutMeData = {
  sections: [
    { id: "activity", label: "Work & Projects", icon: Briefcase },
    { id: "opensource", label: "Open Source", icon: Code },
    { id: "education", label: "Education & Skills", icon: GraduationCap },
  ],
  content: {
    activity: [
      {
        title: "Full Stack Developer Intern",
        organization: "Clustor Computing, Nagpur",
        duration: "Jan 2025 - Jun 2025",
        description:
          "Engineered 5+ scalable features using React, Node.js, and MongoDB, resulting in a 25% reduction in page load time. Optimized backend API routes using indexing and caching, improving throughput by 30%.",
        type: "work",
      },
      {
        title: "Web Developer Intern",
        organization: "Blastoserve Scientific (Remote)",
        duration: "Jan 2023 - Apr 2023",
        description:
          "Led front-end development of a hospital management system used by 50+ staff using React.js, Tailwind CSS, and Material UI. Designed 15+ reusable React components, boosting development speed by 20%.",
        type: "work",
      },
       {
        title: "Free Software Camp India 2020",
        organization: "Debian Packaging Contributor/Learner",
        duration: "Jan 2020 - March 2020",
        description: "Participated as a learner and contributor, receiving foundational training in Debian packaging and contributing to early-stage community projects.",
        badge: "FSCI",
        link: "https://camp.fsf.org.in/projects/",
      },
     
    ],
    opensource: [
     
      {
        title: "Google Summer of Code 2025 Participant",
        description: "Contributed to the Quality Assurance and CI for biological/medical applications inside the Debian project.",
        badge: "GSoC",
        link: "https://summerofcode.withgoogle.com/programs/2025/projects/k1gTnKpU",
      },
      {
        title: "Debian Community Member & Maintainer",
        description: "Specialized in Node.js packaging since 2020. Successfully packaged and uploaded node-zrender, and maintained/updated critical packages like node-mime-type and node-sqlite.",
        badge: "Debian",
      },
      {
        title: "Public Speaking",
        description: "Delivered a short talk on technical contributions at DebConf 21.",
        badge: "Talk",
      },
    ],
    education: [
      {
        title: "Master in Computer Application (M.C.A)",
        institution: "G. H. Raisoni University, Nagpur",
        date: "July 2025",
        gpa: "7.31 / 10.0",
        details:
          "Strong foundational knowledge in MERN stack (React.js, Node.js, Express.js, MongoDB). Proficient with Linux environments, Docker, and CI/CD practices.",
      },
      {
        title: "Key Technologies",
        list: [
          "Languages: C, C++, Java, Bash",
          "Frameworks/Libraries: React.js, Node.js, Material UI",
          "Databases: MongoDB, MySQL",
          "DevOps & Tools: Linux (Debian, Ubuntu), Docker, Git, GitLab CI/CD",
        ],
      },
    ],
  },
};
// --- END UPDATED DATA ---

const TimelineItem = ({ title, organization, duration, description, type, badge, link }) => (
  <motion.div
    initial={{ x: -20, opacity: 0 }}
    animate={{ x: 0, opacity: 1 }}
    transition={{ duration: 0.5, type: "spring" }}
    style={{
      marginBottom: "1.5rem",
      padding: "1.2rem",
      borderLeft: `4px solid ${type === "work" || type === "project" ? colors.secondaryAccent : colors.mainAccent}`,
      borderRadius: "0.8rem",
      backgroundColor: colors.cardBg,
      color: colors.lightText,
      boxShadow: "0 2px 15px rgba(0,0,0,0.2)",
    }}
  >
    <div style={{ display: "flex", justifyContent: "space-between", flexWrap: "wrap", gap: "0.5rem" }}>
      <h3 style={{ fontSize: "1.2rem", fontWeight: 600 }}>
        {title}{" "}
        {badge && (
          <span
            style={{
              marginLeft: "0.5rem",
              fontSize: "0.7rem",
              fontWeight: 700,
              color: colors.darkBg,
              backgroundColor: colors.mainAccent,
              padding: "2px 6px",
              borderRadius: "4px",
            }}
          >
            {badge}
          </span>
        )}
      </h3>
      <p style={{ fontSize: "0.9rem", color: colors.grayText }}>{duration}</p>
    </div>
    {organization && (
      <p style={{ fontSize: "1rem", fontWeight: 500, color: colors.secondaryAccent, marginTop: "0.2rem" }}>
        {organization}
      </p>
    )}
    <p style={{ marginTop: "0.5rem", lineHeight: 1.5, color: colors.lightText }}>{description}</p>
    {link && (
      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        style={{ display: "inline-block", marginTop: "0.5rem", color: colors.mainAccent, textDecoration: "underline" }}
      >
        View Link
      </a>
    )}
  </motion.div>
);

export default function About() {
  const [activeTab, setActiveTab] = useState("activity");

  const renderContent = () => {
    switch (activeTab) {
      case "activity":
        return aboutMeData.content.activity.map((item, i) => <TimelineItem key={i} {...item} />);
      case "opensource":
        // Note: I've added a custom organization field to the FSCI entry to show where the learning took place.
        return aboutMeData.content.opensource.map((item, i) => <TimelineItem key={i} {...item} type="open-source" />);
      case "education":
        const edu = aboutMeData.content.education[0];
        const certs = aboutMeData.content.education[1];
        return (
          <>
            <div
              style={{
                marginBottom: "1.5rem",
                padding: "1.2rem",
                backgroundColor: colors.cardBg,
                borderRadius: "0.8rem",
                color: colors.lightText,
                borderLeft: `4px solid ${colors.mainAccent}`,
              }}
            >
              <h3 style={{ fontSize: "1.2rem", fontWeight: 600, color: colors.mainAccent }}>{edu.title}</h3>
              <p style={{ fontSize: "1rem", fontWeight: 500, color: colors.secondaryAccent }}>{edu.institution}</p>
              <p style={{ fontSize: "0.9rem", color: colors.grayText }}>{edu.date}</p>
              <p style={{ marginTop: "0.6rem", color: colors.lightText }}>{edu.details}</p>
              <span
                style={{
                  marginTop: "0.8rem",
                  display: "inline-block",
                  padding: "3px 10px",
                  backgroundColor: colors.secondaryAccent,
                  color: colors.darkBg,
                  borderRadius: "6px",
                  fontWeight: 700,
                  fontSize: "0.9rem",
                }}
              >
                GPA: {edu.gpa}
              </span>
            </div>
            <div
              style={{
                padding: "1.2rem",
                backgroundColor: colors.cardBg,
                borderRadius: "0.8rem",
                color: colors.lightText,
                borderLeft: `4px solid ${colors.secondaryAccent}`,
              }}
            >
              <h3 style={{ fontSize: "1.2rem", fontWeight: 600, color: colors.secondaryAccent }}>Key Technologies</h3>
              <ul style={{ listStyle: "disc inside", marginTop: "0.6rem" }}>
                {certs.list.map((c, i) => (
                  <li key={i} style={{ marginBottom: "0.3rem", color: colors.grayText }}>
                    {c}
                  </li>
                ))}
              </ul>
            </div>
          </>
        );
      default:
        return null;
    }
  };

  return (
    <section
      id="about"
      style={{
        padding: "80px 20px",
        fontFamily: "'Montserrat', sans-serif",
        backgroundColor: colors.darkBg,
        color: colors.lightText,
      }}
    >
      <motion.h2
        initial={{ y: -20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true, amount: 0.1 }}
        style={{
          fontSize: "2.5rem",
          fontWeight: 700,
          textAlign: "center",
          marginBottom: "3rem",
        }}
      >
        About Me
      </motion.h2>

      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          maxWidth: "900px",
          margin: "0 auto 3rem",
          borderRadius: "10px",
          overflow: "hidden",
          backgroundColor: "#223246",
          boxShadow: "0 4px 15px rgba(0,0,0,0.2)",
        }}
      >
        {aboutMeData.sections.map((tab) => (
          <motion.button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            whileHover={{ backgroundColor: colors.secondaryAccent }}
            whileTap={{ scale: 0.98 }}
            style={{
              flex: 1,
              padding: "16px 0",
              fontWeight: 600,
              cursor: "pointer",
              border: "none",
              backgroundColor: activeTab === tab.id ? colors.mainAccent : "transparent",
              color: activeTab === tab.id ? colors.darkBg : colors.lightText,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              gap: "0.5rem",
              transition: "all 0.3s ease",
              fontSize: "1rem",
              textShadow: activeTab === tab.id ? "0 1px 1px rgba(0,0,0,0.2)" : "none",
            }}
          >
            <tab.icon size={20} />
            {tab.label}
          </motion.button>
        ))}
      </div>

      <div style={{ maxWidth: "900px", margin: "0 auto" }}>{renderContent()}</div>
    </section>
  );
}