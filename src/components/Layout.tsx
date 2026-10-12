import { ReactNode } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Home, User, Code, Award, Mail } from "lucide-react";
import Header from "./Header";
import Footer from "./Footer";
import BackToTop from "./BackToTop";
import AnimatedWave from "./lightswind/animated-wave";
import Dock, { DockItemData } from "./Dock";
import { useTheme } from "@/contexts/ThemeContext";

interface LayoutProps { children: ReactNode; }

const Layout = ({ children }: LayoutProps) => {
  const location = useLocation();
  const navigate = useNavigate();
  const { theme } = useTheme();

  // 3D wave gradient colors matched to theme
  const waveColors = theme === "dark"
    ? { from: "#0f766e", to: "#06b6d4" }
    : { from: "#0d9488", to: "#14b8a6" };

  const dockItems: DockItemData[] = [
    {
      icon: <Home className="h-5 w-5" />,
      label: "Home",
      active: location.pathname === "/",
      onClick: () => {
        navigate("/");
        window.scrollTo({ top: 0, behavior: "smooth" });
      },
      menu: [
        { label: "Go to Home", onClick: () => navigate("/") },
        { separator: true },
        { label: "Scroll to Top", onClick: () => window.scrollTo({ top: 0, behavior: "smooth" }) },
      ],
    },
    {
      icon: <User className="h-5 w-5" />,
      label: "About",
      active: location.pathname === "/about",
      onClick: () => {
        navigate("/about");
        window.scrollTo({ top: 0, behavior: "smooth" });
      },
      menu: [
        { label: "My Story", onClick: () => navigate("/about") },
        { label: "Education & Skills", onClick: () => navigate("/about") },
      ],
    },
    {
      icon: <Code className="h-5 w-5" />,
      label: "Projects",
      active: location.pathname === "/projects",
      badge: 6,
      onClick: () => {
        navigate("/projects");
        window.scrollTo({ top: 0, behavior: "smooth" });
      },
      menu: [
        { label: "Featured Projects", onClick: () => navigate("/projects") },
        { separator: true },
        { label: "Explore GitHub", onClick: () => window.open("https://github.com/hariharan4814", "_blank") },
      ],
    },
    {
      icon: <Award className="h-5 w-5" />,
      label: "Achievements",
      active: location.pathname === "/achievements",
      onClick: () => {
        navigate("/achievements");
        window.scrollTo({ top: 0, behavior: "smooth" });
      },
      menu: [
        { label: "Awards & Honors", onClick: () => navigate("/achievements") },
        { label: "Certifications", onClick: () => navigate("/achievements") },
      ],
    },
    {
      icon: <Mail className="h-5 w-5" />,
      label: "Contact",
      active: location.pathname === "/contact",
      onClick: () => {
        navigate("/contact");
        window.scrollTo({ top: 0, behavior: "smooth" });
      },
      menu: [
        { label: "Send a Message", onClick: () => navigate("/contact") },
        { separator: true },
        { label: "Email Directly", onClick: () => window.open("mailto:hariharan4814@gmail.com") },
        { label: "Chat on WhatsApp", onClick: () => window.open("https://wa.me/919944682054", "_blank") },
      ],
    },
  ];

  return (
    <div className="relative min-h-screen text-foreground overflow-x-hidden">
      {/* 3D Animated Wave background from Lightswind UI across all pages */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden z-0" aria-hidden="true">
        <AnimatedWave
          colorFrom={waveColors.from}
          colorTo={waveColors.to}
          speed={0.75}
          amplitude={28}
          wireframe={true}
          showParticles={true}
          particleSize={4}
          resolution={65}
          opacity={theme === "dark" ? 0.65 : 0.55}
          mouseInteraction={true}
        />
        {/* Soft translucent gradient overlay for optimal readability of text and cards */}
        <div className="absolute inset-0 bg-background/25 dark:bg-background/40 pointer-events-none" />
      </div>

      <div className="relative z-10 flex flex-col min-h-screen">
        <Header />
        {/* Main: bottom padding accounts for floating bottom dock + safe area */}
        <main className="flex-1 pb-28 md:pb-28" style={{ paddingBottom: "calc(6.5rem + var(--safe-bottom))" }}>
          {children}
        </main>
        <Footer />
        <BackToTop />
      </div>

      {/* Floating Bottom Dock Navigation */}
      <div
        className="fixed bottom-0 left-0 right-0 z-50 pointer-events-none flex justify-center items-end"
        style={{ paddingBottom: "max(0.75rem, var(--safe-bottom))" }}
      >
        <div className="pointer-events-auto">
          <Dock
            items={dockItems}
            position="bottom"
            theme={theme === "dark" ? "dark" : "light"}
            baseItemSize={44}
            magnification={66}
            panelHeight={58}
            gap={8}
            roundness={0.6}
            accentColor="#14b8a6"
            badgeColor="#14b8a6"
            showIndicators={true}
            showLabels={true}
            bounce={true}
          />
        </div>
      </div>
    </div>
  );
};

export default Layout;
