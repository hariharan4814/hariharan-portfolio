import { Link } from "react-router-dom";
import { Linkedin, Github, Instagram, MessageCircle, ArrowUp, Heart } from "lucide-react";
import { motion } from "framer-motion";

const Footer = () => {
  const socialLinks = [
    { name: "LinkedIn", icon: Linkedin, url: "https://linkedin.com/in/hariharan4814", color: "hover:bg-[#0077b5] hover:text-white hover:border-[#0077b5]" },
    { name: "GitHub", icon: Github, url: "https://github.com/hariharan4814", color: "hover:bg-foreground hover:text-background hover:border-foreground" },
    { name: "Instagram", icon: Instagram, url: "https://www.instagram.com/sanjeeev.b/", color: "hover:bg-[#E4405F] hover:text-white hover:border-[#E4405F]" },
    { name: "WhatsApp", icon: MessageCircle, url: "https://wa.me/919940099083", color: "hover:bg-[#25D366] hover:text-white hover:border-[#25D366]" },
  ];


  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer
      className="relative border-t border-border/50 bg-background/80 backdrop-blur-md overflow-hidden pb-32 md:pb-32"
      style={{ paddingBottom: "calc(7rem + var(--safe-bottom))" }}
      role="contentinfo"
    >
      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden>
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[200px] bg-primary/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 pt-12 pb-6 relative z-10">
        {/* Top row */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 mb-8">
          {/* Brand Link */}
          <Link
            to="/"
            onClick={scrollToTop}
            className="flex items-center gap-3 group cursor-pointer transition-transform hover:scale-[1.02]"
            aria-label="Back to home"
          >
            <div className="h-10 w-10 rounded-xl gradient-primary flex items-center justify-center text-white font-black text-sm shadow-hard-sm group-hover:shadow-md transition-shadow">
              HB
            </div>
            <div className="text-left">
              <p className="font-black text-foreground dark:text-white tracking-tight group-hover:text-primary transition-colors text-base">
                Hariharan B
              </p>
              <p className="text-xs text-muted-foreground dark:text-zinc-400 font-medium">Developer & Designer</p>
            </div>
          </Link>


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
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <p className="text-xs text-muted-foreground dark:text-zinc-400">
            © {new Date().getFullYear()} Hariharan B. All rights reserved.
          </p>

          <button
            onClick={scrollToTop}
            className="text-xs font-semibold text-muted-foreground dark:text-zinc-300 hover:text-primary transition-colors flex items-center gap-1.5 cursor-pointer group"
            aria-label="Scroll back to top"
          >
            <span>Back to top</span>
            <ArrowUp className="h-3.5 w-3.5 transition-transform group-hover:-translate-y-0.5" />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
