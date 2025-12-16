import { useState, useEffect, useMemo } from "react";
import {
  AppBar,
  Toolbar,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { HiMenu } from "react-icons/hi";
import { motion } from "framer-motion";

/* --------------------
   COLOR SYSTEM
-------------------- */
const colors = {
  primary: "#7952B3",
  secondary: "#FD7E14",
  bg: "#FFFFFF",
  text: "#212529",
  border: "#E9ECEF",
  muted: "#6C757D",
};

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("hero");

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  const navItems = useMemo(
    () => [
      { text: "Home", id: "hero" },
      { text: "About", id: "about" },
      { text: "Projects", id: "projects" },
      { text: "Skills", id: "skills" },
      { text: "Contact", id: "contact" },
    ],
    []
  );

  const resumeLink = "/resume.pdf"; // rename file accordingly

  /* --------------------
     STYLES
  -------------------- */
  const styles = {
    appbar: {
      backgroundColor: colors.bg,
      borderBottom: `1px solid ${colors.border}`,
    },
    toolbar: {
      maxWidth: "1100px",
      width: "100%",
      margin: "0 auto",
      padding: isMobile ? "6px 14px" : "8px 20px", // 👈 slimmer height
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      minHeight: "56px",
    },
    logo: {
      fontSize: "1.05rem",
      fontWeight: 700,
      color: colors.primary,
      cursor: "pointer",
    },
    navLinks: {
      display: "flex",
      gap: "22px",
      alignItems: "center",
    },
    link: (isActive) => ({
      fontSize: "0.9rem",
      color: isActive ? colors.primary : colors.text,
      cursor: "pointer",
      fontWeight: isActive ? 600 : 500,
      borderBottom: isActive ? `2px solid ${colors.primary}` : "none",
      paddingBottom: "3px",
    }),
    resumeBtn: {
      fontSize: "0.9rem",
      fontWeight: 600,
      color: "#fff",
      backgroundColor: colors.primary,
      padding: "6px 12px",
      borderRadius: "6px",
      textDecoration: "none",
    },
    menuIcon: {
      color: colors.text,
    },
    drawer: {
      width: 240,
      backgroundColor: colors.bg,
      paddingTop: "20px",
    },
  };

  /* --------------------
     SCROLL HANDLER
  -------------------- */
  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
      setActive(id);
    }
  };

  useEffect(() => {
    const onScroll = () => {
      const mid = window.scrollY + window.innerHeight / 2;
      navItems.forEach((item) => {
        const sec = document.getElementById(item.id);
        if (
          sec &&
          mid >= sec.offsetTop &&
          mid < sec.offsetTop + sec.offsetHeight
        ) {
          setActive(item.id);
        }
      });
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, [navItems]);

  return (
    <motion.div
      initial={{ y: -10, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.3 }}
    >
      <AppBar position="fixed" elevation={0} style={styles.appbar}>
        <Toolbar style={styles.toolbar}>
          {/* LOGO */}
          <span style={styles.logo} onClick={() => scrollTo("hero")}>
            Harish Chavre
          </span>

          {/* DESKTOP */}
          {!isMobile && (
            <div style={styles.navLinks}>
              {navItems.map((item) => (
                <span
                  key={item.id}
                  style={styles.link(active === item.id)}
                  onClick={() => scrollTo(item.id)}
                >
                  {item.text}
                </span>
              ))}

              {/* Resume Button */}
              <a
                href={resumeLink}
                target="_blank"
                rel="noopener noreferrer"
                style={styles.resumeBtn}
              >
                Resume
              </a>
            </div>
          )}

          {/* MOBILE */}
          {isMobile && (
            <IconButton onClick={() => setOpen(true)}>
              <HiMenu style={styles.menuIcon} />
            </IconButton>
          )}
        </Toolbar>
      </AppBar>

      {/* MOBILE DRAWER */}
      <Drawer anchor="right" open={open} onClose={() => setOpen(false)}>
        <List style={styles.drawer}>
          {navItems.map((item) => (
            <ListItem key={item.id} disablePadding>
              <ListItemButton
                onClick={() => {
                  scrollTo(item.id);
                  setOpen(false);
                }}
              >
                {item.text}
              </ListItemButton>
            </ListItem>
          ))}

          <ListItem>
            <a
              href={resumeLink}
              target="_blank"
              rel="noopener noreferrer"
              style={styles.resumeBtn}
            >
              Resume
            </a>
          </ListItem>
        </List>
      </Drawer>
    </motion.div>
  );
}
