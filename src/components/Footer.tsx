import { Linkedin, Github, Instagram, MessageCircle } from 'lucide-react';
import { motion } from 'framer-motion';

const Footer = () => {
  const socialLinks = [
    {
      name: 'LinkedIn',
      icon: Linkedin,
      url: 'https://linkedin.com/in/hariharan4814',
      color: 'hover:text-[#0077b5]'
    },
    {
      name: 'GitHub',
      icon: Github,
      url: 'https://github.com/hariharan4814',
      color: 'hover:text-foreground'
    },
    {
      name: 'Instagram',
      icon: Instagram,
      url: 'https://instagram.com/_sanjeev.b_',
      color: 'hover:text-[#E4405F]'
    },
    {
      name: 'WhatsApp',
      icon: MessageCircle,
      url: 'https://wa.me/919940099083',
      color: 'hover:text-[#25D366]'
    },
  ];

  return (
    <footer className="relative overflow-hidden border-t border-border/50">
      {/* Animated wave background */}
      <div className="absolute inset-0 opacity-10">
        <svg
          className="absolute bottom-0 w-full"
          viewBox="0 0 1440 320"
          preserveAspectRatio="none"
        >
          <motion.path
            fill="currentColor"
            className="text-primary"
            d="M0,96L48,112C96,128,192,160,288,160C384,160,480,128,576,112C672,96,768,96,864,112C960,128,1056,160,1152,165.3C1248,171,1344,149,1392,138.7L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
            animate={{
              d: [
                "M0,96L48,112C96,128,192,160,288,160C384,160,480,128,576,112C672,96,768,96,864,112C960,128,1056,160,1152,165.3C1248,171,1344,149,1392,138.7L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z",
                "M0,160L48,149.3C96,139,192,117,288,112C384,107,480,117,576,133.3C672,149,768,171,864,165.3C960,160,1056,128,1152,122.7C1248,117,1344,139,1392,149.3L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z",
              ],
            }}
            transition={{
              repeat: Infinity,
              repeatType: "reverse",
              duration: 10,
              ease: "easeInOut",
            }}
          />
        </svg>
      </div>

      <div className="container mx-auto px-4 py-8 pb-24 md:pb-8 relative z-10">
        <div className="flex flex-col items-center gap-6">
          {/* Social Links */}
          <div className="flex gap-6">
            {socialLinks.map((social) => (
              <motion.a
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.2, y: -5 }}
                whileTap={{ scale: 0.9 }}
                className={`p-3 rounded-full glass transition-colors ${social.color}`}
              >
                <social.icon className="h-5 w-5" />
              </motion.a>
            ))}
          </div>

          {/* Copyright */}
          <p className="text-sm text-muted-foreground text-center">
            © 2026 Hariharan B | Designed & Developed by Hariharan B
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
