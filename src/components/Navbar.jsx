import { useState, useEffect, useMemo } from "react";
import { AppBar, Toolbar, IconButton, Drawer, List, ListItem, ListItemButton, useMediaQuery, useTheme } from "@mui/material";
import { HiMenu } from "react-icons/hi";
import { motion } from "framer-motion";

const colors = {
  mainAccent: "#EF5B5B",
  secondaryAccent: "#00A896",
  darkBg: "#1D2B3A",
  lightText: "#E5E9F0",
  grayText: "#A1B0C4",
};

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("hero");

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  const navItems = useMemo(() => [
    { text: "Home", id: "hero", isExternal: false },
    { text: "About", id: "about", isExternal: false },
    { text: "Projects", id: "projects", isExternal: false },
    { text: "Skills", id: "skills", isExternal: false },
    { text: "Contact", id: "contact", isExternal: false },
    { text: "Resume", id: "resume-link", isExternal: true, link: "/Harish Chavre - Resume .pdf" }, 
  ], []);

  const styles = {
    appbar: {
      background: "rgba(29, 43, 58, 0.95)",
      backdropFilter: "blur(10px)",
      WebkitBackdropFilter: "blur(10px)",
      boxShadow: "0 4px 12px rgba(0, 0, 0, 0.4)",
      borderBottom: `1px solid rgba(0, 168, 150, 0.4)`,
    },
    toolbar: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      padding: isMobile ? "12px 20px" : "16px 40px",
    },
    logo: {
      fontSize: "1.8rem",
      fontWeight: 800,
      color: colors.lightText,
      letterSpacing: "1px",
      textDecoration: "none",
      fontFamily: "'Montserrat', sans-serif",
      textShadow: `0 0 5px rgba(239, 91, 91, 0.3)`,
      cursor: 'pointer',
    },
    navLinks: {
      display: "flex",
      gap: "30px",
    },
    link: (isActive, isExternal) => ({
      color: isExternal ? colors.secondaryAccent : (isActive ? colors.mainAccent : colors.grayText),
      cursor: "pointer",
      textDecoration: isExternal ? "underline" : "none",
      fontWeight: isActive ? 700 : 500,
      fontSize: "1.05rem",
      fontFamily: "'Montserrat', sans-serif",
      transition: "color 0.3s ease, transform 0.2s ease",
      textShadow: isActive ? `0 0 4px rgba(239, 91, 91, 0.4)` : "none",
    }),
    menuIcon: {
      color: colors.secondaryAccent,
      fontSize: "2.1rem",
    },
    drawerList: {
      width: 250,
      backgroundColor: colors.darkBg,
      height: "100%",
      paddingTop: "60px",
      boxShadow: "-4px 0 15px rgba(0, 0, 0, 0.5)",
    },
    drawerItem: (isActive) => ({
      color: isActive ? colors.mainAccent : colors.lightText,
      textAlign: "left",
      paddingLeft: "30px",
      fontWeight: isActive ? 600 : 400,
      fontFamily: "'Montserrat', sans-serif",
      transition: "color 0.3s ease",
    }),
  };

  const scrollTo = (item) => {
    if (item.isExternal) {
        window.open(item.link, "_blank");
    } else {
        const el = document.getElementById(item.id);
        if (el) {
            el.scrollIntoView({ behavior: "smooth" });
            setActive(item.id);
        }
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollPos = window.scrollY + window.innerHeight / 2;
      
      navItems.forEach((item) => {
        if (item.isExternal) return;

        const section = document.getElementById(item.id);
        if (section) {
          if (scrollPos >= section.offsetTop && scrollPos < section.offsetTop + section.offsetHeight) {
            setActive(item.id);
          }
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [navItems]);

  return (
    <motion.div initial={{ y: -100, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.8, type: "spring", stiffness: 120 }}>
      <AppBar position="fixed" elevation={0} style={styles.appbar}>
        <Toolbar style={styles.toolbar}>
          <motion.div whileHover={{ scale: 1.05, rotate: 1 }} transition={{ type: "spring", stiffness: 300 }}>
            <span style={styles.logo} onClick={() => scrollTo(navItems[0])}>
              Harish<span style={{ color: colors.secondaryAccent }}>_Dev</span>
            </span>
          </motion.div>

          <div style={{ ...styles.navLinks, display: isMobile ? "none" : "flex" }}>
            {navItems.map((item) => (
              <motion.a 
                key={item.text} 
                href={item.isExternal ? item.link : `#${item.id}`}
                target={item.isExternal ? "_blank" : "_self"}
                rel={item.isExternal ? "noopener noreferrer" : ""}
                onClick={(e) => {
                    if (!item.isExternal) e.preventDefault();
                    scrollTo(item);
                }} 
                style={styles.link(active === item.id, item.isExternal)}
                whileHover={{ scale: 1.1, color: item.isExternal ? colors.mainAccent : colors.mainAccent }}
                transition={{ duration: 0.1 }}
              >
                {item.text}
              </motion.a>
            ))}
          </div>

          <IconButton
            onClick={() => setOpen(true)}
            style={{ ...styles.menuIcon, display: isMobile ? "block" : "none" }}
          >
            <HiMenu /> 
          </IconButton>
        </Toolbar>
      </AppBar>

      <Drawer anchor="right" open={open} onClose={() => setOpen(false)}>
        <List style={styles.drawerList}>
          {navItems.map((item) => (
            <ListItem key={item.text} disablePadding>
              <ListItemButton
                onClick={() => {
                  scrollTo(item);
                  setOpen(false);
                }}
                component={item.isExternal ? 'a' : 'div'} 
                href={item.isExternal ? item.link : undefined}
                target={item.isExternal ? "_blank" : "_self"}
                rel={item.isExternal ? "noopener noreferrer" : ""}
                style={styles.drawerItem(active === item.id)}
              >
                {item.text}
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Drawer>
    </motion.div>
  );
}