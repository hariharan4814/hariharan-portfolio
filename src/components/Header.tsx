import { NavLink } from "react-router-dom";
import { Moon, Sun, Home, User, Code, Award, Mail } from "lucide-react";
import { useTheme } from "@/contexts/ThemeContext";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "./ui/button";
import { useState, useEffect } from "react";

const Header = () => {
  const { theme, toggleTheme } = useTheme();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { name: "Home", path: "/", icon: Home },
    { name: "About", path: "/about", icon: User },
    { name: "Projects", path: "/projects", icon: Code },
    { name: "Achievements", path: "/achievements", icon: Award },
    { name: "Contact", path: "/contact", icon: Mail },
  ];

  return (
    <>
      {/* Desktop header */}
      <motion.header
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? "py-3" : "py-5"}`}
      >
        <div className="container mx-auto px-4">
          <nav
            className={`mx-auto rounded-2xl transition-all duration-300 max-w-5xl px-5 py-2.5 flex items-center justify-between ${
              scrolled
                ? "glass border border-border shadow-lg"
                : "bg-transparent border border-transparent"
            }`}
          >
            {/* Logo */}
            <NavLink to="/" className="flex items-center gap-2.5 group" aria-label="Hariharan B — Home">
              <div className="h-9 w-9 rounded-xl gradient-primary flex items-center justify-center text-white font-black text-sm shadow-hard-sm group-hover:shadow-hard group-hover:-translate-y-0.5 transition-all">
                HB
              </div>
              <AnimatePresence>
                {scrolled && (
                  <motion.span
                    initial={{ opacity: 0, x: -8 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -8 }}
                    className="hidden sm:block text-sm font-black tracking-tight text-foreground"
                  >
                    Hariharan B
                  </motion.span>
                )}
              </AnimatePresence>
            </NavLink>

            {/* Desktop nav */}
            <div className="hidden md:flex items-center gap-1">
              {navItems.map((item) => (
                <NavLink
                  key={item.path}
                  to={item.path}
                  className={({ isActive }) =>
                    `relative px-4 py-2 rounded-xl text-sm font-bold transition-all duration-200 ${
                      isActive
                        ? "text-primary bg-primary/10"
                        : "text-muted-foreground hover:text-foreground hover:bg-muted/60"
                    }`
                  }
                >
                  {({ isActive }) => (
                    <>
                      {item.name}
                      {isActive && (
                        <motion.div
                          layoutId="nav-active"
                          className="absolute bottom-1 left-1/2 -translate-x-1/2 h-0.5 w-4 rounded-full bg-primary"
                        />
                      )}
                    </>
                  )}
                </NavLink>
              ))}
            </div>

            {/* Theme toggle */}
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleTheme}
              aria-label={`Switch to ${theme === "light" ? "dark" : "light"} mode`}
              className="rounded-xl h-9 w-9 hover:bg-primary/10 hover:text-primary transition-colors"
            >
              <AnimatePresence mode="wait">
                {theme === "light" ? (
                  <motion.div key="moon" initial={{ rotate: -30, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 30, opacity: 0 }} transition={{ duration: 0.2 }}>
                    <Moon className="h-4.5 w-4.5" />
                  </motion.div>
                ) : (
                  <motion.div key="sun" initial={{ rotate: 30, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: -30, opacity: 0 }} transition={{ duration: 0.2 }}>
                    <Sun className="h-4.5 w-4.5" />
                  </motion.div>
                )}
              </AnimatePresence>
            </Button>
          </nav>
        </div>
      </motion.header>

      {/* Mobile bottom navigation */}
      <nav
        className="md:hidden fixed bottom-5 left-1/2 -translate-x-1/2 z-50 w-[calc(100%-2rem)] max-w-[400px] glass border border-border/60 rounded-2xl shadow-2xl p-1.5 flex justify-between items-center"
        aria-label="Mobile navigation"
      >
        {navItems.map((item) => (
          <NavLink
            key={item.path}
            to={item.path}
            aria-label={item.name}
            className={({ isActive }) =>
              `flex flex-col items-center justify-center flex-1 py-1.5 rounded-xl transition-all duration-200 ${
                isActive ? "text-primary bg-primary/10" : "text-muted-foreground hover:text-foreground"
              }`
            }
          >
            {({ isActive }) => (
              <>
                <div className={`p-1 rounded-lg transition-all duration-200 ${isActive ? "-translate-y-0.5 scale-110" : ""}`}>
                  <item.icon className={`h-4.5 w-4.5 ${isActive ? "stroke-[2.5]" : ""}`} />
                </div>
                <span className={`text-[9px] font-bold mt-0.5 ${isActive ? "opacity-100" : "opacity-60"}`}>
                  {item.name}
                </span>
              </>
            )}
          </NavLink>
        ))}
      </nav>
    </>
  );
};

export default Header;
