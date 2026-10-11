import { useEffect, useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
  Download, GraduationCap, Award, Code, Palette, Briefcase,
  Star, CheckCircle2, Building2, Database, Wrench, Users
} from "lucide-react";
import { Button } from "@/components/ui/button";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

/* ---- Animated counter ---- */
function Counter({ to, label, suffix = "" }: { to: number; label: string; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });
  useEffect(() => {
    if (!inView || !ref.current) return;
    const el = ref.current;
    gsap.fromTo(el, { innerText: 0 }, {
      innerText: to,
      duration: 1.6,
      ease: "power2.out",
      snap: { innerText: 1 },
      onUpdate() { el.innerText = Math.round(parseFloat(el.innerText)) + suffix; },
    });
  }, [inView, to, suffix]);
  return <span ref={ref} className="text-5xl md:text-6xl font-black text-gradient">0{suffix}</span>;
}

/* ---- Education card ---- */
function EducationCard({ edu, index }: { edu: any; index: number }) {
  const palettes = [
    "from-violet-500 to-indigo-600",
    "from-emerald-400 to-teal-500",
    "from-amber-400 to-orange-500",
  ];
  const c = palettes[index % palettes.length];
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ delay: index * 0.12, duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
      className="sticky-card mb-6"
      style={{ top: `${80 + index * 20}px` }}
    >
      <div className="relative group rounded-3xl bg-card border border-border p-6 md:p-7 shadow-card hover:shadow-hard transition-all duration-300 overflow-hidden inner-glow">
        <div className={`absolute left-0 top-0 bottom-0 w-1.5 rounded-l-3xl bg-gradient-to-b ${c}`} />
        <div className={`absolute inset-0 bg-gradient-to-br ${c} opacity-0 group-hover:opacity-[0.04] transition-opacity duration-500 rounded-3xl`} />
        <div className="flex flex-col sm:flex-row sm:items-start gap-4 relative z-10">
          <div className={`p-3 rounded-2xl bg-gradient-to-br ${c} shadow-md flex-shrink-0`}>
            <GraduationCap className="h-6 w-6 text-white" />
          </div>
          <div className="flex-1 min-w-0">
            <div className="flex flex-wrap items-start justify-between gap-2 mb-1">
              <h3 className="text-base md:text-lg font-bold text-foreground group-hover:text-primary transition-colors">{edu.degree}</h3>
              <span className="tag text-[0.6rem] font-black tracking-widest uppercase flex-shrink-0">{edu.year}</span>
            </div>
            <p className="text-muted-foreground font-medium text-sm">{edu.institution}</p>
            {edu.score && (
              <p className="text-xs text-muted-foreground mt-1">
                Score: <span className="font-semibold text-foreground">{edu.score}</span>
                {edu.scoreNote && <span className="ml-1 text-muted-foreground/70">({edu.scoreNote})</span>}
              </p>
            )}
            <div className="mt-2 flex items-center gap-2">
              {edu.status === "Pursuing" ? (
                <><Star className="h-3 w-3 text-violet-500" /><span className="text-xs font-bold text-violet-600 dark:text-violet-400 uppercase tracking-wider">In Progress</span></>
              ) : (
                <><CheckCircle2 className="h-3 w-3 text-emerald-500" /><span className="text-xs font-bold text-emerald-600 dark:text-emerald-400 uppercase tracking-wider">Completed</span></>
              )}
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

/* ---- Skill pill ---- */
function SkillPill({ skill, index, color }: { skill: string; index: number; color: string }) {
  return (
    <motion.span
      initial={{ opacity: 0, scale: 0.85 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.05, type: "spring", stiffness: 200 }}
      whileHover={{ scale: 1.06, y: -2 }}
      className={`px-3 py-1.5 rounded-xl text-sm font-semibold border ${color} cursor-default transition-shadow hover:shadow-hard-sm`}
    >
      {skill}
    </motion.span>
  );
}

/* ============ ABOUT PAGE ============ */
const About = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  const education = [
    {
      degree: "Master of Science in Computer Science",
      institution: "PSG College of Arts & Science, Coimbatore",
      year: "2025 – 2027",
      status: "Pursuing",
      score: "87.15%",
      scoreNote: "current score, not final",
    },
    {
      degree: "Bachelor of Science in Computer Technology",
      institution: "Sri Krishna Adithya College of Arts and Science, Coimbatore",
      year: "2022 – 2025",
      status: "Completed",
      score: "86.26%",
    },
    {
      degree: "Higher Secondary Certificate (HSC)",
      institution: "C.S.I. Higher Secondary School, Coimbatore",
      year: "2021 – 2022",
      status: "Completed",
      score: "74.5%",
    },
  ];

  const skillGroups = [
    {
      key: "frontend",
      label: "Frontend",
      items: ["HTML", "CSS", "React", "Bootstrap"],
      icon: Code,
      accent: "from-violet-500 to-indigo-600",
      color: "bg-violet-50 dark:bg-violet-950/30 border-violet-200 dark:border-violet-800 text-violet-700 dark:text-violet-300",
    },
    {
      key: "backend",
      label: "Backend & DB",
      items: ["Python", "Django", "Flask", "PostgreSQL", "SQLite", "SQL"],
      icon: Database,
      accent: "from-emerald-400 to-teal-500",
      color: "bg-emerald-50 dark:bg-emerald-950/30 border-emerald-200 dark:border-emerald-800 text-emerald-700 dark:text-emerald-300",
    },
    {
      key: "tools",
      label: "Tools & Design",
      items: ["Git", "GitHub", "VS Code", "Figma", "Canva", "YOLOv8", "OpenCV"],
      icon: Wrench,
      accent: "from-amber-400 to-orange-500",
      color: "bg-amber-50 dark:bg-amber-950/30 border-amber-200 dark:border-amber-800 text-amber-700 dark:text-amber-300",
    },
    {
      key: "soft",
      label: "Professional Strengths",
      items: ["Problem-Solving", "Team Collaboration", "Time Management", "Communication", "Team Management"],
      icon: Users,
      accent: "from-sky-400 to-blue-600",
      color: "bg-sky-50 dark:bg-sky-950/30 border-sky-200 dark:border-sky-800 text-sky-700 dark:text-sky-300",
    },
  ];

  const stats = [
    { to: 4, suffix: "+", label: "Achievements" },
    { to: 4, suffix: "+", label: "Projects" },
    { to: 3, suffix: "+", label: "Certifications" },
  ];

  return (
    <div className="min-h-screen bg-background" ref={sectionRef}>
      <div className="fixed inset-0 pointer-events-none overflow-hidden" aria-hidden>
        <div className="gradient-sphere float-2" style={{ width: 500, height: 500, background: "radial-gradient(circle, hsl(250 85% 68%/0.09) 0%, transparent 70%)", top: "-10%", right: "-10%" }} />
        <div className="gradient-sphere float-3" style={{ width: 400, height: 400, background: "radial-gradient(circle, hsl(32 95% 55%/0.07) 0%, transparent 70%)", bottom: "10%", left: "-8%" }} />
      </div>

      <div className="relative z-10 container mx-auto max-w-6xl px-4 pt-28 pb-20">

        {/* Page header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <span className="section-label mb-4 block">About Me</span>
          <h1 className="headline text-5xl md:text-7xl mb-6">
            The{" "}
            <span className="text-gradient-hero animate-gradient" style={{ backgroundSize: "200% auto" }}>
              Story
            </span>{" "}
            Behind the Portfolio
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Developer based in Coimbatore — bridging useful functionality with clear, accessible interfaces.
          </p>
        </motion.div>

        {/* Profile + Bio */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center mb-28">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="flex justify-center"
          >
            <div className="relative group">
              <div className="absolute -top-4 -right-4 z-20 tilt-2 bg-accent text-white font-black text-xs px-3 py-1.5 rounded-xl shadow-hard-sm uppercase tracking-wider">
                ✦ Open to Work
              </div>
              <div className="absolute inset-0 rounded-[2.5rem] bg-primary/20 translate-x-3 translate-y-3 transition-transform group-hover:translate-x-5 group-hover:translate-y-5 duration-300" />
              <div className="relative w-72 h-96 md:w-80 md:h-[440px] rounded-[2.5rem] overflow-hidden border-2 border-border bg-secondary shadow-2xl inner-glow">
                <img
                  src="/myimg.png"
                  alt="Hariharan B"
                  className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-[1.04]"
                />
                <div className="absolute bottom-5 left-4 right-4 glass rounded-2xl px-4 py-3 opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 shadow-lg">
                  <p className="font-bold text-sm text-foreground">Hariharan B</p>
                  <p className="text-xs text-muted-foreground">Full-Stack Developer · M.Sc CS</p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-5"
          >
            <div>
              <span className="section-label mb-3 block">My Story</span>
              <h2 className="headline text-3xl md:text-4xl mb-4">
                Building Practical Apps with{" "}
                <span className="text-gradient">Thoughtful Interfaces</span>
              </h2>
              <div className="section-divider mb-5" />
            </div>

            <p className="text-foreground/85 text-base leading-relaxed">
              I&apos;m Hariharan B, a developer based in Coimbatore, currently pursuing an{" "}
              <span className="font-semibold text-primary">M.Sc in Computer Science</span> at PSG College of Arts &amp; Science.
              My interests include full-stack development, Python applications, and UI/UX design.
            </p>
            <p className="text-muted-foreground text-base leading-relaxed">
              My work includes responsive interfaces, API integration, and a smart farm monitoring system
              built with Flask, YOLOv8, and OpenCV. I enjoy connecting useful functionality with clear,
              accessible interfaces.
            </p>
            <p className="text-muted-foreground text-base leading-relaxed">
              Alongside my technical work, I serve as{" "}
              <span className="font-semibold text-foreground">Association Chairperson</span> for the
              Department of Computer Science at PSGCAS — strengthening my communication, teamwork, and coordination skills.
            </p>

            <div className="flex flex-wrap gap-2 pt-1">
              {["🎓 M.Sc CS — PSG", "⚛️ React / Flask", "🤖 YOLOv8 / CV", "🎨 UI/UX Design", "🤝 Team Leader"].map((s) => (
                <span key={s} className="sticker text-primary">{s}</span>
              ))}
            </div>

            <div className="flex flex-wrap gap-3 pt-2">
              <Button
                asChild
                className="rounded-2xl h-11 px-6 font-semibold gradient-primary text-white border-0 shadow-hard-sm hover:shadow-hard hover:-translate-y-0.5 transition-all"
              >
                <a href="/HARIHARAN_CV.pdf" target="_blank" rel="noopener noreferrer">
                  <Download className="mr-2 h-4 w-4" /> Download Résumé
                </a>
              </Button>
              <Button
                asChild
                variant="outline"
                className="rounded-2xl h-11 px-6 font-semibold border-2 border-primary/30 hover:border-primary hover:bg-primary/5 transition-all"
              >
                <a href="/contact">Contact Me</a>
              </Button>
            </div>
          </motion.div>
        </div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid grid-cols-3 gap-6 mb-28 max-w-2xl mx-auto"
        >
          {stats.map((s, i) => (
            <div key={i} className="text-center glass rounded-3xl p-6 border border-border inner-glow">
              <Counter to={s.to} suffix={s.suffix} label={s.label} />
              <p className="text-sm text-muted-foreground mt-1 font-medium">{s.label}</p>
            </div>
          ))}
        </motion.div>

        {/* Experience */}
        <div className="mb-28">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <span className="section-label mb-3 block">Work Experience</span>
            <h2 className="headline text-4xl md:text-5xl">
              <Building2 className="inline-block mr-3 h-9 w-9 text-primary mb-1" />
              Experience
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-2xl mx-auto"
          >
            <div className="relative group rounded-3xl bg-card border border-border p-6 md:p-8 shadow-card inner-glow overflow-hidden">
              <div className="absolute left-0 top-0 bottom-0 w-1.5 rounded-l-3xl bg-gradient-to-b from-violet-500 to-indigo-600" />
              <div className="flex flex-col sm:flex-row sm:items-start gap-4 relative z-10">
                <div className="p-3 rounded-2xl bg-gradient-to-br from-violet-500 to-indigo-600 shadow-md flex-shrink-0">
                  <Briefcase className="h-6 w-6 text-white" />
                </div>
                <div className="flex-1">
                  <div className="flex flex-wrap items-start justify-between gap-2 mb-1">
                    <h3 className="text-lg font-bold text-foreground">Frontend Developer Intern</h3>
                    <span className="tag text-[0.6rem] font-black tracking-widest uppercase">Jan 2026</span>
                  </div>
                  <p className="text-primary font-semibold text-sm mb-3">Vision Crafters</p>
                  <ul className="text-muted-foreground text-sm space-y-1.5 list-none">
                    {[
                      "Built responsive web pages using HTML, CSS, and React.",
                      "Integrated REST APIs to display dynamic data.",
                      "Converted Figma designs into interactive interfaces.",
                      "Fixed UI bugs and improved page loading performance.",
                    ].map((item) => (
                      <li key={item} className="flex items-start gap-2">
                        <span className="text-primary mt-0.5">›</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Education */}
        <div className="mb-28">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <span className="section-label mb-3 block">Academic Journey</span>
            <h2 className="headline text-4xl md:text-5xl">
              <GraduationCap className="inline-block mr-3 h-9 w-9 text-primary mb-1" />
              Education
            </h2>
          </motion.div>
          <div className="max-w-2xl mx-auto space-y-0">
            {education.map((edu, i) => (
              <EducationCard key={i} edu={edu} index={i} />
            ))}
          </div>
        </div>

        {/* Skills */}
        <div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <span className="section-label mb-3 block">What I Know</span>
            <h2 className="headline text-4xl md:text-5xl">
              <Code className="inline-block mr-3 h-9 w-9 text-primary mb-1" />
              Technical Skills
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6">
            {skillGroups.map((cat, i) => {
              const Icon = cat.icon;
              return (
                <motion.div
                  key={cat.key}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="relative group rounded-3xl bg-card border border-border p-6 shadow-card hover:shadow-hard transition-all duration-300 overflow-hidden inner-glow"
                >
                  <div className={`absolute top-0 left-6 right-6 h-0.5 rounded-b-full bg-gradient-to-r ${cat.accent}`} />
                  <div className="flex items-center gap-3 mb-4">
                    <div className={`p-2.5 rounded-xl bg-gradient-to-br ${cat.accent} shadow-sm`}>
                      <Icon className="h-5 w-5 text-white" />
                    </div>
                    <h3 className="font-bold text-base text-foreground">{cat.label}</h3>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {cat.items.map((skill, j) => (
                      <SkillPill key={skill} skill={skill} index={j} color={cat.color} />
                    ))}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

      </div>
    </div>
  );
};

export default About;
