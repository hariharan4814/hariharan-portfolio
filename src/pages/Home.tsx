import { motion, useMotionValue, useTransform, useSpring } from "framer-motion";
import { ArrowRight, Download, Mail, Code2, Palette, Brain } from "lucide-react";
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

function FloatingChips() {
  const chips = [
    { icon: Code2,   label: "React / Flask", delay: 0,   pos: "top-[18%] right-[7%]",  float: "float-1" },
    { icon: Palette, label: "UI / UX",        delay: 0.8, pos: "top-[62%] right-[10%]", float: "float-2" },
    { icon: Brain,   label: "YOLOv8 / CV",    delay: 0.4, pos: "top-[42%] left-[4%]",   float: "float-3" },
  ];
  return (
    <>
      {chips.map(({ icon: Icon, label, delay, pos, float: f }, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1 + delay, type: "spring", stiffness: 180 }}
          className={`absolute ${pos} ${f} hidden lg:flex`}
          aria-hidden
        >
          <div className="flex items-center gap-2 px-3 py-2 rounded-xl bg-card border border-border shadow-sm text-xs font-semibold text-muted-foreground">
            <Icon className="h-3.5 w-3.5 text-primary" />
            {label}
          </div>
        </motion.div>
      ))}
    </>
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
      className="relative inline-block group"
    >
      <div className="absolute inset-0 rounded-2xl bg-primary/15 translate-x-3 translate-y-3 transition-transform duration-300 group-hover:translate-x-4 group-hover:translate-y-4" />
      <div className="relative w-52 h-72 md:w-64 md:h-[340px] rounded-2xl overflow-hidden border border-border bg-secondary shadow-xl">
        <img
          src="/myimg.png"
          alt="Hariharan B — Full-Stack Developer"
          className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-[1.03]"
          loading="eager"
        />
        <motion.div
          initial={{ y: 16, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 1.4 }}
          className="absolute bottom-3 left-3 right-3 bg-background/90 backdrop-blur-sm rounded-xl px-3 py-2 flex items-center gap-2 border border-border/60"
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-70" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
          </span>
          <span className="text-xs font-semibold text-foreground">Available for Opportunities</span>
        </motion.div>
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
    { value: "4+",  label: "Projects"     },
    { value: "3+",  label: "Certificates" },
  ];

  return (
    <div className="min-h-screen relative overflow-hidden bg-background">
      <SubtleBackground />
      <FloatingChips />

      <div className="relative z-10 w-full min-h-screen flex flex-col items-center justify-center pt-24 pb-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center justify-center gap-16 lg:gap-24 max-w-5xl mx-auto">

            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="flex-shrink-0"
            >
              <ProfileImage />
            </motion.div>

            <div className="flex flex-col items-center lg:items-start text-center lg:text-left space-y-5 max-w-lg">

              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
                className="section-label"
              >
                Full-Stack Developer & UI/UX Enthusiast
              </motion.p>

              <div className="headline text-5xl md:text-6xl lg:text-7xl">
                <WordReveal text="Hi, I'm" delay={0.35} className="block text-foreground" />
                <motion.span
                  className="block text-gradient"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.6 }}
                >
                  Hariharan B.
                </motion.span>
              </div>

              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.9 }}
                className="text-muted-foreground leading-relaxed text-base"
              >
                I build practical web applications with thoughtful interfaces and Python-powered backends.
                Currently pursuing my{" "}
                <span className="text-foreground font-medium">M.Sc in Computer Science</span>{" "}
                at PSG College of Arts &amp; Science, Coimbatore.
              </motion.p>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.0 }}
                className="flex gap-8 justify-center lg:justify-start"
              >
                {stats.map((s) => (
                  <div key={s.label}>
                    <div className="text-xl font-black text-primary">{s.value}</div>
                    <div className="text-xs text-muted-foreground font-medium">{s.label}</div>
                  </div>
                ))}
              </motion.div>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.1 }}
                className="flex flex-col sm:flex-row flex-wrap gap-3 w-full sm:w-auto"
              >
                <Link to="/projects" className="w-full sm:w-auto">
                  <Button size="lg" className="w-full h-12 px-6 font-semibold rounded-xl gradient-primary text-white border-0 shadow-md hover:opacity-90 hover:-translate-y-0.5 transition-all group">
                    View Projects
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Button>
                </Link>
                <a href="/HARIHARAN_CV.pdf" target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto">
                  <Button size="lg" variant="outline" className="w-full h-12 px-6 font-semibold rounded-xl border-border hover:border-primary hover:bg-primary/5 transition-all">
                    <Download className="mr-2 h-4 w-4" />
                    Download Résumé
                  </Button>
                </a>
                <Link to="/contact" className="w-full sm:w-auto">
                  <Button size="lg" variant="outline" className="w-full h-12 px-6 font-semibold rounded-xl border-border hover:border-primary hover:bg-primary/5 transition-all">
                    <Mail className="mr-2 h-4 w-4" />
                    Contact Me
                  </Button>
                </Link>
              </motion.div>
            </div>
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
