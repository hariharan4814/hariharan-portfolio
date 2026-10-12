import { NavLink, useLocation } from "react-router-dom";
import { Moon, Sun, Home, User, Code, Award, Mail } from "lucide-react";
import { useTheme } from "@/contexts/ThemeContext";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "./ui/button";
import { useState, useEffect, useCallback } from "react";

/* Haptic feedback wrapper — uses Vibration API where available */
function haptic(ms = 8) {
  if (typeof navigator !== "undefined" && "vibrate" in navigator) {
    navigator.vibrate(ms);
  }
}

const Header = () => {
  const { theme, toggleTheme } = useTheme();
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { name: "Home",         path: "/",             icon: Home  },
    { name: "About",        path: "/about",         icon: User  },
    { name: "Projects",     path: "/projects",      icon: Code  },
    { name: "Achievements", path: "/achievements",  icon: Award },
    { name: "Contact",      path: "/contact",       icon: Mail  },
  ];

  const handleNavTap = useCallback(() => haptic(6), []);
  const handleThemeToggle = useCallback(() => { haptic(10); toggleTheme(); }, [toggleTheme]);

  return (
    <>
      {/* ── Desktop header ── */}
      <motion.header
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className={`hidden md:block fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? "py-3" : "py-5"}`}
        style={{ paddingTop: `max(${scrolled ? "0.75rem" : "1.25rem"}, var(--safe-top))` }}
      >
        <div className="container mx-auto px-4">
          <nav
            className={`mx-auto rounded-2xl transition-all duration-300 max-w-5xl px-5 py-2.5 flex items-center justify-between ${
              scrolled ? "glass border border-border shadow-lg" : "bg-transparent border border-transparent"
            }`}
          >
            <NavLink to="/" className="flex items-center gap-2.5 group" aria-label="Hariharan B — Home" onClick={handleNavTap}>
              <div className="h-9 w-9 rounded-xl gradient-primary flex items-center justify-center text-white font-black text-sm shadow-hard-sm group-hover:shadow-hard group-hover:-translate-y-0.5 transition-all">
                HB
              </div>
              <AnimatePresence>
                {scrolled && (
                  <motion.span
                    initial={{ opacity: 0, x: -8 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -8 }}
                    className="text-sm font-black tracking-tight text-foreground"
                  >
                    Hariharan B
                  </motion.span>
                )}
              </AnimatePresence>
            </NavLink>

            <div className="flex items-center gap-1">
              {navItems.map((item) => (
                <NavLink
                  key={item.path}
                  to={item.path}
                  className={({ isActive }) =>
                    `relative px-4 py-2 rounded-xl text-sm font-bold transition-all duration-200 ${
                      isActive ? "text-primary bg-primary/10" : "text-muted-foreground hover:text-foreground hover:bg-muted/60"
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

            <Button
              variant="ghost"
              size="icon"
              onClick={handleThemeToggle}
              aria-label={`Switch to ${theme === "light" ? "dark" : "light"} mode`}
              className="rounded-xl h-9 w-9 hover:bg-primary/10 hover:text-primary transition-colors"
            >
              <AnimatePresence mode="wait">
                {theme === "light" ? (
                  <motion.div key="moon" initial={{ rotate: -30, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 30, opacity: 0 }} transition={{ duration: 0.2 }}>
                    <Moon className="h-4 w-4" />
                  </motion.div>
                ) : (
                  <motion.div key="sun" initial={{ rotate: 30, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: -30, opacity: 0 }} transition={{ duration: 0.2 }}>
                    <Sun className="h-4 w-4" />
                  </motion.div>
                )}
              </AnimatePresence>
            </Button>
          </nav>
        </div>
      </motion.header>

      {/* ── Mobile top app bar (Glassmorphism + Profile Status) ── */}
      <motion.div
        initial={{ y: -40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.4 }}
        className="md:hidden fixed top-0 left-0 right-0 z-40 bg-background/90 dark:bg-[#0b1329]/95 backdrop-blur-xl border-b border-border/70 shadow-sm px-4 py-2.5 flex items-center justify-between"
        style={{ paddingTop: "max(0.6rem, var(--safe-top))" }}
      >
        <NavLink to="/" onClick={handleNavTap} className="flex items-center gap-2.5 active:scale-95 transition-transform">
          <div className="h-8 w-8 rounded-xl gradient-primary flex items-center justify-center text-white font-black text-xs shadow-sm">
            HB
          </div>
          <div className="flex flex-col">
            <span className="text-sm font-black tracking-tight text-foreground dark:text-white leading-tight">Hariharan B.</span>
            <div className="flex items-center gap-1.5">
              <span className="relative flex h-1.5 w-1.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-emerald-500" />
              </span>
              <span className="text-[10px] font-semibold text-muted-foreground dark:text-zinc-300">Open to Work</span>
            </div>
          </div>
        </NavLink>

        <div className="flex items-center gap-1">
          <button
            onClick={handleThemeToggle}
            aria-label={`Switch to ${theme === "light" ? "dark" : "light"} mode`}
            className="p-2 rounded-xl text-muted-foreground hover:text-foreground active:scale-90 transition-transform"
          >
            <AnimatePresence mode="wait">
              {theme === "light" ? (
                <motion.div key="moon-m" initial={{ rotate: -30, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 30, opacity: 0 }} transition={{ duration: 0.2 }}>
                  <Moon className="h-4 w-4" />
                </motion.div>
              ) : (
                <motion.div key="sun-m" initial={{ rotate: 30, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: -30, opacity: 0 }} transition={{ duration: 0.2 }}>
                  <Sun className="h-4 w-4" />
                </motion.div>
              )}
            </AnimatePresence>
          </button>
        </div>
      </motion.div>
    </>
  );
};

export default Header;
