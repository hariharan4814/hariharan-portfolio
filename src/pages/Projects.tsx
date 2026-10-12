import { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, Github, Brain, Figma, Palette, Sprout, Droplets, Monitor, ArrowUpRight, LayoutGrid, Rows } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ScrollReveal } from "@/components/lightswind/scroll-reveal";

/* ---- 3D Tilt & Touch Interactive project card ---- */
function ProjectCard({ project, index }: { project: any; index: number }) {
  const cardRef = useRef<HTMLDivElement>(null);

  const handleMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const el = cardRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    el.style.transform = `perspective(900px) rotateY(${x * 10}deg) rotateX(${-y * 10}deg) scale3d(1.02,1.02,1.02)`;
  };
  const handleLeave = () => {
    if (cardRef.current) cardRef.current.style.transform = "";
  };

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ delay: index * 0.08, duration: 0.45, ease: [0.25, 0.46, 0.45, 0.94] }}
      className="h-full"
    >
      <div
        ref={cardRef}
        onMouseMove={handleMove}
        onMouseLeave={handleLeave}
        className="group h-full relative transition-transform duration-200 cursor-default select-none"
        style={{ transformStyle: "preserve-3d" }}
      >
        {/* Offset background shadow on hover */}
        <div className={`absolute inset-0 rounded-3xl bg-gradient-to-br ${project.color} opacity-0 group-hover:opacity-100 translate-x-2 translate-y-2 group-hover:translate-x-3 group-hover:translate-y-3 transition-all duration-300 pointer-events-none`} />

        {/* Main card */}
        <div className="relative rounded-3xl bg-card border border-border p-6 sm:p-7 h-full flex flex-col overflow-hidden shadow-card inner-glow transition-all duration-300 group-hover:border-primary/40 group-active:scale-[0.98]">
          {/* Subtle gradient overlay on hover */}
          <div className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-0 group-hover:opacity-[0.06] transition-opacity duration-500 rounded-3xl pointer-events-none`} />

          {/* Icon & Category Badge */}
          <div className="relative z-10 mb-4 flex items-center justify-between">
            <div className={`inline-flex p-3.5 sm:p-4 rounded-2xl bg-gradient-to-br ${project.color} shadow-lg shadow-black/10 inner-glow group-hover:scale-110 transition-transform duration-300`}>
              <project.icon className="h-6 w-6 sm:h-7 sm:w-7 text-white" />
            </div>
            <span className="text-[10px] font-bold uppercase tracking-wider text-muted-foreground px-2.5 py-1 rounded-full bg-secondary border border-border">
              {project.category}
            </span>
          </div>

          {/* Content */}
          <div className="relative z-10 flex-1">
            <h3 className="text-lg sm:text-xl font-black text-foreground mb-2.5 leading-snug group-hover:text-primary transition-colors">
              {project.title}
            </h3>
            <p className="text-muted-foreground text-xs sm:text-sm leading-relaxed mb-4">
              {project.description}
            </p>
          </div>

          {/* Tags */}
          <div className="relative z-10 flex flex-wrap gap-1.5 mb-5">
            {project.tags.map((tag: string) => (
              <span key={tag} className="tag text-[0.65rem]">{tag}</span>
            ))}
          </div>

          {/* Actions */}
          <div className="relative z-10 pt-3 border-t border-border/50 flex items-center justify-between">
            <a
              href={project.github || "https://github.com/hariharan4814"}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-xs font-bold text-foreground hover:text-primary transition-colors py-1.5 px-3 rounded-xl bg-secondary/80 hover:bg-secondary active:scale-95"
              aria-label={`View ${project.title} on GitHub`}
            >
              <Github className="h-4 w-4" />
              <span>Source Code</span>
            </a>

            <a
              href={project.github || "https://github.com/hariharan4814"}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Open ${project.title}`}
              className={`p-2 rounded-xl bg-gradient-to-br ${project.color} text-white shadow-sm hover:scale-105 active:scale-90 transition-transform flex items-center justify-center`}
            >
              <ArrowUpRight className="h-4 w-4" />
            </a>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

/* ---- Skills marquee for Projects page ---- */
function TechMarquee() {
  const techs = ["Python","·","React","·","Flask","·","YOLOv8","·","OpenCV","·","Django","·","PostgreSQL","·","Figma","·","Git","·","Python","·","React","·","Flask","·","YOLOv8","·","OpenCV","·","Django","·","PostgreSQL","·","Figma","·","Git","·"];
  return (
    <div className="marquee-container py-3 border-y border-border/50 my-8 sm:my-12" aria-hidden>
      <div className="marquee-track gap-6">
        {techs.map((t, i) => (
          <span key={i} className={`text-xs sm:text-sm font-semibold tracking-widest uppercase px-3 ${t === "·" ? "text-primary/30" : "text-muted-foreground/60"}`}>
            {t}
          </span>
        ))}
      </div>
    </div>
  );
}

/* ============ MAIN PROJECTS PAGE ============ */
const Projects = () => {
  const [mobileLayout, setMobileLayout] = useState<"carousel" | "list">("carousel");

  const projects = [
    {
      title: "AI-Based Smart Farm Monitoring & Management System",
      description: "A farm monitoring application combining real-time animal detection with workforce attendance, task management, and administrative tools. Built with Flask, YOLOv8, and OpenCV. Features email/buzzer alerts, GPS-based attendance tracking, and SQLite storage for detection logs.",
      tags: ["Python", "Flask", "YOLOv8", "OpenCV", "SQLite"],
      category: "AI / ML",
      icon: Sprout,
      color: "from-emerald-500 to-teal-600",
      github: "https://github.com/hariharan4814",
    },
    {
      title: "Digital Notice Board – Online Notice Management System",
      description: "A Django-based digital notice board that centralises institutional announcements, student records, and user management. Provides an organised online interface for publishing and accessing notices — replacing physical boards with a structured digital workflow.",
      tags: ["Python", "Django", "SQLite", "HTML", "CSS", "JavaScript"],
      category: "Full-Stack",
      icon: Monitor,
      color: "from-sky-400 to-blue-600",
      github: "https://github.com/hariharan4814/noticeboard",
    },
    {
      title: "Blood Management & Emergency Donor Broadcast System",
      description: "A full-stack application coordinating donors, blood banks, laboratories, and hospitals. Manages donation records, blood-unit inventory, screening workflows, and hospital requests — with emergency notifications targeted by donor location and blood-group compatibility.",
      tags: ["React", "Vite", "Django REST", "SimpleJWT", "SQLite", "TanStack Query"],
      category: "Full-Stack",
      icon: Droplets,
      color: "from-rose-500 to-red-600",
      github: "https://github.com/hariharan4814/blood-management-live",
    },
    {
      title: "ML-Based Crop Yield Prediction",
      description: "Developed a crop yield prediction model using Gradient Boosting. Performed data preprocessing, feature engineering, and created detailed visualisations to communicate results.",
      tags: ["Python", "Machine Learning", "Data Science"],
      category: "AI / ML",
      icon: Brain,
      color: "from-violet-500 to-indigo-600",
      github: "https://github.com/hariharan4814",
    },
    {
      title: "Portfolio Design System",
      description: "Crafted an interactive portfolio prototype in Figma, combining user experience and creative visuals with a focus on modern design principles and accessibility.",
      tags: ["UI/UX", "Figma", "Design Thinking", "Prototyping"],
      category: "Design",
      icon: Figma,
      color: "from-indigo-400 to-violet-600",
      github: "https://github.com/hariharan4814",
    },
    {
      title: "Graphic Branding Works",
      description: "Created logos, flyers, and digital posters using Canva. Focused on effective visual communication and modern branding principles.",
      tags: ["Graphic Design", "Branding", "Canva"],
      category: "Design",
      icon: Palette,
      color: "from-amber-400 to-orange-500",
      github: "https://github.com/hariharan4814",
    },
  ];

  return (
    <div className="min-h-screen bg-transparent relative">
      {/* Background ambient glow */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden" aria-hidden>
        <div className="gradient-sphere float-1" style={{ width: 450, height: 450, background: "radial-gradient(circle, hsl(192 68% 36%/0.12) 0%, transparent 70%)", top: "0%", right: "-5%" }} />
        <div className="gradient-sphere float-2" style={{ width: 350, height: 350, background: "radial-gradient(circle, hsl(172 55% 42%/0.12) 0%, transparent 70%)", bottom: "5%", left: "-5%" }} />
      </div>

      <div className="relative z-10 container mx-auto px-4 pt-20 md:pt-28 pb-20 max-w-6xl">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10"
        >
          <span className="section-label mb-2 block">My Portfolio</span>
          <h1 className="headline text-4xl sm:text-5xl md:text-7xl mb-4 sm:mb-6">
            Featured{" "}
            <span className="text-gradient-hero animate-gradient" style={{ backgroundSize: "200% auto" }}>
              Projects
            </span>
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed px-2">
            Explore my work across Full-Stack applications, Machine Learning systems, and Design
          </p>
        </motion.div>

        {/* Tech marquee */}
        <TechMarquee />

        {/* Mobile layout switch & swipe indicator */}
        <div className="flex md:hidden items-center justify-between mb-4 px-1">
          <div className="flex items-center gap-1.5 text-xs text-muted-foreground font-semibold">
            <span>{projects.length} Projects</span>
            {mobileLayout === "carousel" && (
              <span className="swipe-hint text-[11px] text-primary font-bold">
                • swipe horizontally →
              </span>
            )}
          </div>

          <div className="flex items-center gap-1 bg-secondary/80 p-1 rounded-xl border border-border">
            <button
              onClick={() => setMobileLayout("carousel")}
              className={`p-1.5 rounded-lg transition-all ${mobileLayout === "carousel" ? "bg-primary text-white shadow-sm" : "text-muted-foreground"}`}
              aria-label="Carousel View"
            >
              <Rows className="h-3.5 w-3.5" />
            </button>
            <button
              onClick={() => setMobileLayout("list")}
              className={`p-1.5 rounded-lg transition-all ${mobileLayout === "list" ? "bg-primary text-white shadow-sm" : "text-muted-foreground"}`}
              aria-label="Vertical List View"
            >
              <LayoutGrid className="h-3.5 w-3.5" />
            </button>
          </div>
        </div>

        {/* Mobile View: Horizontal snap carousel OR vertical list */}
        {mobileLayout === "carousel" ? (
          <div className="scroll-x-touch md:hidden flex gap-4 px-2 pb-5 mb-12 -mx-2">
            <AnimatePresence mode="popLayout">
              {projects.map((project, index) => (
                <div key={project.title} className="w-[84vw] max-w-[325px] flex-shrink-0 mobile-press">
                  <ProjectCard project={project} index={index} />
                </div>
              ))}
            </AnimatePresence>
            <div className="w-2 flex-shrink-0" aria-hidden />
          </div>
        ) : (
          <div className="md:hidden flex flex-col gap-5 mb-12">
            <AnimatePresence mode="popLayout">
              {projects.map((project, index) => (
                <div key={project.title} className="mobile-press">
                  <ProjectCard project={project} index={index} />
                </div>
              ))}
            </AnimatePresence>
          </div>
        )}

        {/* Desktop: standard grid */}
        <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-3 gap-7 mb-20">
          <AnimatePresence mode="popLayout">
            {projects.map((project, index) => (
              <ProjectCard key={project.title} project={project} index={index} />
            ))}
          </AnimatePresence>
        </div>

        {/* Scroll-triggered reveal statement */}
        <div className="py-10 sm:py-16">
          <ScrollReveal
            size="xl"
            align="center"
            variant="default"
            containerClassName="max-w-4xl mx-auto"
            textClassName="font-extrabold tracking-tight"
            enableBlur={true}
            staggerDelay={0.05}
          >
            Engineering resilient full-stack systems with thoughtful design and performant code.
          </ScrollReveal>
        </div>

        {/* CTA card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative mt-8"
        >
          {/* Hard offset shadow */}
          <div className="absolute inset-0 rounded-3xl bg-primary/20 translate-x-2 sm:translate-x-3 translate-y-2 sm:translate-y-3" />
          <div className="relative rounded-3xl bg-card border-2 border-primary/25 p-6 sm:p-10 md:p-12 text-center overflow-hidden inner-glow">
            {/* Gradient bg */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5 rounded-3xl" />
            <div className="relative z-10">
              <div className="text-4xl mb-3">🚀</div>
              <h3 className="text-xl sm:text-2xl md:text-3xl font-black text-foreground mb-2 sm:mb-3">
                More Projects in Development
              </h3>
              <p className="text-muted-foreground text-xs sm:text-sm md:text-base mb-6 max-w-md mx-auto leading-relaxed">
                I'm actively building new projects with modern technologies. Check out all my repositories on GitHub!
              </p>
              <Button
                asChild
                className="rounded-2xl h-12 px-7 font-bold gradient-primary text-white border-0 shadow-md hover:shadow-lg hover:-translate-y-0.5 active:scale-95 transition-all"
              >
                <a href="https://github.com/hariharan4814" target="_blank" rel="noopener noreferrer">
                  <Github className="mr-2 h-4 w-4" />
                  Explore GitHub Profile
                  <ExternalLink className="ml-2 h-3.5 w-3.5" />
                </a>
              </Button>
            </div>
          </div>
        </motion.div>

      </div>
    </div>
  );
};

export default Projects;
