import { motion, useMotionValue, useTransform, useSpring } from "framer-motion";
import { ArrowRight, Download, Mail } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

function SubtleBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden>
      <div style={{ position:"absolute", width:600, height:600, borderRadius:"50%", background:"radial-gradient(circle, hsl(250 60% 60% / 0.07) 0%, transparent 70%)", top:"-15%", left:"-10%" }} />
      <div style={{ position:"absolute", width:400, height:400, borderRadius:"50%", background:"radial-gradient(circle, hsl(32 80% 58% / 0.06) 0%, transparent 70%)", bottom:"0%", right:"-5%" }} />
    </div>
  );
}

function Marquee() {
  const items = [
    "Full-Stack Developer","·","UI/UX Enthusiast","·","Python Developer","·",
    "Open to Opportunities","·","Full-Stack Developer","·","UI/UX Enthusiast","·",
    "Python Developer","·","Open to Opportunities","·",
  ];
  return (
    <div className="marquee-container py-3 border-y border-border/40 my-10 overflow-hidden" aria-hidden>
      <div className="marquee-track gap-8">
        {items.map((item, i) => (
          <span key={i} className={`text-xs font-semibold tracking-[0.18em] uppercase px-3 ${item === "·" ? "text-primary/40" : "text-muted-foreground/60"}`}>
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}

function ProfileImage() {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useTransform(y, [-80, 80], [8, -8]);
  const rotateY = useTransform(x, [-80, 80], [-8, 8]);
  const springX = useSpring(rotateX, { stiffness: 120, damping: 20 });
  const springY = useSpring(rotateY, { stiffness: 120, damping: 20 });

  const handleMouse = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    x.set(e.clientX - rect.left - rect.width / 2);
    y.set(e.clientY - rect.top - rect.height / 2);
  };
  const handleLeave = () => { x.set(0); y.set(0); };

  return (
    <motion.div
      onMouseMove={handleMouse}
      onMouseLeave={handleLeave}
      style={{ rotateX: springX, rotateY: springY, transformPerspective: 700 }}
      className="relative inline-block group select-none"
    >
      <div className="absolute inset-0 rounded-3xl bg-primary/20 translate-x-2 sm:translate-x-3 translate-y-2 sm:translate-y-3 transition-transform duration-300 group-hover:translate-x-4 group-hover:translate-y-4" />
      <div className="relative w-48 h-64 sm:w-56 sm:h-76 md:w-64 md:h-[340px] rounded-3xl overflow-hidden border border-border/80 bg-secondary shadow-2xl">
        <img
          src="/myimg.png"
          alt="Hariharan B — Full-Stack Developer"
          className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-[1.03]"
          loading="eager"
        />
      </div>
    </motion.div>
  );
}

function WordReveal({ text, delay = 0, className = "" }: { text: string; delay?: number; className?: string }) {
  return (
    <span className={className} aria-label={text}>
      {text.split(" ").map((word, i) => (
        <motion.span
          key={i}
          className="inline-block mr-[0.22em]"
          initial={{ opacity: 0, y: "100%" }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: delay + i * 0.07, duration: 0.45, ease: [0.25, 0.46, 0.45, 0.94] }}
          style={{ display: "inline-block", overflow: "hidden" }}
        >
          {word}
        </motion.span>
      ))}
    </span>
  );
}

const Home = () => {
  const stats = [
    { value: "4+",  label: "Achievements" },
    { value: "6+",  label: "Projects"     },
    { value: "3+",  label: "Certificates" },
  ];

  return (
    <div className="min-h-screen relative overflow-hidden bg-transparent">
      <SubtleBackground />

      <div className="relative z-10 w-full min-h-screen flex flex-col items-center justify-center pt-20 sm:pt-24 pb-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center justify-center gap-10 sm:gap-14 lg:gap-20 max-w-5xl mx-auto">

            {/* Left side: Intro & CTAs */}
            <div className="flex flex-col items-center lg:items-start text-center lg:text-left space-y-4 sm:space-y-5 max-w-lg">

              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-bold"
              >
                <span>👋 Welcome to my portfolio</span>
              </motion.div>

              <div className="headline text-4xl sm:text-6xl lg:text-7xl">
                <WordReveal text="Hi, I'm" delay={0.3} className="block text-foreground" />
                <motion.span
                  className="block text-gradient-hero animate-gradient"
                  style={{ backgroundSize: "200% auto" }}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.5 }}
                >
                  Hariharan B.
                </motion.span>
              </div>

              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.7 }}
                className="text-muted-foreground leading-relaxed text-sm sm:text-base px-2 sm:px-0"
              >
                I build practical web applications with thoughtful interfaces and Python-powered backends.
                Currently pursuing my{" "}
                <span className="text-foreground font-semibold">M.Sc in Computer Science</span>{" "}
                at PSG College of Arts &amp; Science, Coimbatore.
              </motion.p>

              {/* Stats row with glass cards on mobile */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.85 }}
                className="grid grid-cols-3 gap-2.5 sm:gap-4 w-full max-w-sm sm:max-w-none pt-1"
              >
                {stats.map((s) => (
                  <div key={s.label} className="p-2.5 sm:p-3 rounded-2xl bg-card border border-border/70 text-center shadow-sm">
                    <div className="text-lg sm:text-2xl font-black text-primary">{s.value}</div>
                    <div className="text-[11px] sm:text-xs text-muted-foreground font-semibold">{s.label}</div>
                  </div>
                ))}
              </motion.div>

              {/* Action buttons */}
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.0 }}
                className="flex flex-col sm:flex-row gap-2.5 w-full pt-2"
              >
                <Link to="/projects" className="w-full sm:w-auto">
                  <Button size="lg" className="w-full h-12 px-6 font-bold rounded-2xl gradient-primary text-white border-0 shadow-md hover:shadow-lg hover:-translate-y-0.5 active:scale-95 transition-all group">
                    View Projects
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Button>
                </Link>
                <a href="/HARIHARAN_CV.pdf" target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto">
                  <Button size="lg" variant="outline" className="w-full h-12 px-6 font-bold rounded-2xl border-border hover:border-primary hover:bg-primary/5 active:scale-95 transition-all">
                    <Download className="mr-2 h-4 w-4" />
                    Download Résumé
                  </Button>
                </a>
                <Link to="/contact" className="w-full sm:w-auto">
                  <Button size="lg" variant="secondary" className="w-full h-12 px-6 font-bold rounded-2xl border border-border/60 hover:border-primary/50 active:scale-95 transition-all">
                    <Mail className="mr-2 h-4 w-4" />
                    Contact Me
                  </Button>
                </Link>
              </motion.div>
            </div>

            {/* Right side: Profile image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="relative flex-shrink-0"
            >
              <ProfileImage />
            </motion.div>

          </div>
        </div>

        <div className="w-full mt-12">
          <Marquee />
        </div>
      </div>
    </div>
  );
};

export default Home;
