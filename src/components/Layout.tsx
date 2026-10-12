import { ReactNode } from "react";
import { Link, useLocation } from "react-router-dom";
import { Mail } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Header from "./Header";
import Footer from "./Footer";
import BackToTop from "./BackToTop";
import SatinFlow from "./lightswind/satin-flow";
import { useTheme } from "@/contexts/ThemeContext";

interface LayoutProps { children: ReactNode; }

const Layout = ({ children }: LayoutProps) => {
  const location = useLocation();
  const { theme } = useTheme();
  const isContact = location.pathname === "/contact";

  // Deep luxury teal & cyan satin waves for dark mode; clean luminous teal silk for light mode
  const satinColors = theme === "dark"
    ? ["#06141d", "#0c3b4d", "#14b8a6"]
    : ["#dcf4f2", "#99f6e4", "#0d9488"];

  return (
    <div className="relative min-h-screen text-foreground overflow-x-hidden">
      {/* Persistent interactive Satin Flow background across all pages */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden z-0" aria-hidden="true">
        <SatinFlow
          colors={satinColors}
          speed={0.65}
          scale={1.05}
          noiseIntensity={0.2}
          interactive={true}
          className="opacity-75 dark:opacity-85"
        />
        {/* Soft translucent gradient overlay for optimal readability of text and cards */}
        <div className="absolute inset-0 bg-background/25 dark:bg-background/40 pointer-events-none" />
      </div>

      <div className="relative z-10 flex flex-col min-h-screen">
        <Header />
        {/* Main: bottom padding accounts for mobile bottom nav + safe area */}
        <main className="flex-1 pb-[5rem] md:pb-0" style={{ paddingBottom: "calc(5rem + var(--safe-bottom))" }}>
          {children}
        </main>
        <Footer />
        <BackToTop />
      </div>

      {/* Mobile floating contact button — hidden on contact page */}
      <AnimatePresence>
        {!isContact && (
          <motion.div
            className="md:hidden relative z-40"
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0, opacity: 0 }}
            transition={{ delay: 1.2, type: "spring", stiffness: 260, damping: 22 }}
          >
            <Link
              to="/contact"
              aria-label="Contact Hariharan"
              className="mobile-fab gradient-primary touch-ripple"
            >
              <Mail className="h-4 w-4 flex-shrink-0" />
              <span>Let&apos;s Talk</span>
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Layout;
