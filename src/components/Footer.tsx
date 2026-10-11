import { Linkedin, Github, Instagram, MessageCircle } from "lucide-react";
import { motion } from "framer-motion";

const Footer = () => {
  const socialLinks = [
    { name: "LinkedIn", icon: Linkedin, url: "https://linkedin.com/in/hariharan4814", color: "hover:bg-[#0077b5] hover:text-white hover:border-[#0077b5]" },
    { name: "GitHub", icon: Github, url: "https://github.com/hariharan4814", color: "hover:bg-foreground hover:text-background hover:border-foreground" },
    { name: "Instagram", icon: Instagram, url: "https://www.instagram.com/sanjeeev.b/", color: "hover:bg-[#E4405F] hover:text-white hover:border-[#E4405F]" },
    { name: "WhatsApp", icon: MessageCircle, url: "https://wa.me/919940099083", color: "hover:bg-[#25D366] hover:text-white hover:border-[#25D366]" },
  ];

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Projects", href: "/projects" },
    { name: "Achievements", href: "/achievements" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <footer className="relative border-t border-border/50 bg-background overflow-hidden pb-24 md:pb-0" role="contentinfo">
      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden>
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[200px] bg-primary/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 py-12 relative z-10">
        {/* Top row */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 mb-8">
          {/* Brand */}
          <div className="flex items-center gap-3">
            <div className="h-10 w-10 rounded-xl gradient-primary flex items-center justify-center text-white font-black text-sm shadow-hard-sm">
              HB
            </div>
            <div>
              <p className="font-black text-foreground tracking-tight">Hariharan B</p>
              <p className="text-xs text-muted-foreground font-medium">Developer & Designer</p>
            </div>
          </div>

          {/* Nav links */}
          <nav className="flex flex-wrap items-center gap-x-6 gap-y-2 justify-center" aria-label="Footer navigation">
            {navLinks.map((l) => (
              <a key={l.name} href={l.href} className="text-sm font-semibold text-muted-foreground hover:text-primary transition-colors">
                {l.name}
              </a>
            ))}
          </nav>

          {/* Social links */}
          <div className="flex gap-3" role="list" aria-label="Social media links">
            {socialLinks.map((social) => (
              <motion.a
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.name}
                role="listitem"
                whileHover={{ scale: 1.1, y: -3 }}
                whileTap={{ scale: 0.9 }}
                className={`p-2.5 rounded-xl border border-border text-muted-foreground transition-all duration-200 ${social.color}`}
              >
                <social.icon className="h-4 w-4" />
              </motion.a>
            ))}
          </div>
        </div>

        {/* Divider */}
        <div className="section-divider mb-6" />

        {/* Bottom row */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-3 text-center">
          <p className="text-xs text-muted-foreground">
            © 2026 Hariharan B. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
