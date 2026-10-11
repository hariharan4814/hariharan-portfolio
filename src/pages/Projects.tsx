import { useRef } from "react";
import { motion } from "framer-motion";
import { ExternalLink, Github, Brain, Figma, Palette, Sprout, Droplets, Monitor, ArrowUpRight, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";

/* ---- 3D Tilt project card ---- */
function ProjectCard({ project, index }: { project: any; index: number }) {
  const cardRef = useRef<HTMLDivElement>(null);

  const handleMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const el = cardRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    el.style.transform = `perspective(900px) rotateY(${x * 12}deg) rotateX(${-y * 12}deg) scale3d(1.02,1.02,1.02)`;
  };
  const handleLeave = () => {
    if (cardRef.current) cardRef.current.style.transform = "";
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ delay: index * 0.12, duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
    >
      <div
        ref={cardRef}
        onMouseMove={handleMove}
        onMouseLeave={handleLeave}
        className="group h-full relative transition-transform duration-200 cursor-default"
        style={{ transformStyle: "preserve-3d" }}
      >
        {/* Hard offset shadow on hover */}
        <div className={`absolute inset-0 rounded-3xl bg-gradient-to-br ${project.color} opacity-0 group-hover:opacity-100 translate-x-2 translate-y-2 group-hover:translate-x-3 group-hover:translate-y-3 transition-all duration-300`} />

        {/* Main card */}
        <div className="relative rounded-3xl bg-card border border-border p-7 h-full flex flex-col overflow-hidden shadow-card inner-glow transition-all duration-300 group-hover:border-primary/30">
          {/* Gradient overlay on hover */}
          <div className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-0 group-hover:opacity-[0.05] transition-opacity duration-500 rounded-3xl`} />

          {/* Icon */}
          <div className="relative z-10 mb-5">
            <div className={`inline-flex p-4 rounded-2xl bg-gradient-to-br ${project.color} shadow-lg shadow-black/10 inner-glow group-hover:scale-110 transition-transform duration-300`}>
              <project.icon className="h-8 w-8 text-white" />
            </div>
          </div>

          {/* Content */}
          <div className="relative z-10 flex-1">
            <h3 className="text-xl font-black text-foreground mb-3 leading-tight group-hover:text-gradient transition-all">
              {project.title}
            </h3>
            <p className="text-muted-foreground text-sm leading-relaxed mb-5">
              {project.description}
            </p>
          </div>

          {/* Tags */}
          <div className="relative z-10 flex flex-wrap gap-2 mb-5">
            {project.tags.map((tag: string) => (
              <span key={tag} className="tag text-[0.65rem]">{tag}</span>
            ))}
          </div>

          {/* Actions */}
          <div className="relative z-10 flex items-center justify-between">
            <a
              href={project.github || "https://github.com/hariharan4814"}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-xs font-bold text-muted-foreground hover:text-foreground transition-colors group/link"
              aria-label={`View ${project.title} on GitHub`}
            >
              <Github className="h-4 w-4" />
              <span className="group-hover/link:underline">GitHub</span>
            </a>
            <div className={`p-2 rounded-xl bg-gradient-to-br ${project.color} opacity-0 group-hover:opacity-100 transition-all duration-300 scale-50 group-hover:scale-100`}>
              <ArrowUpRight className="h-4 w-4 text-white" />
            </div>
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
    <div className="marquee-container py-3 border-y border-border/50 my-12" aria-hidden>
      <div className="marquee-track gap-6">
        {techs.map((t, i) => (
          <span key={i} className={`text-sm font-semibold tracking-widest uppercase px-3 ${t === "·" ? "text-primary/30" : "text-muted-foreground/60"}`}>
            {t}
          </span>
        ))}
      </div>
    </div>
  );
}

/* ============ MAIN PROJECTS PAGE ============ */
const Projects = () => {
  const projects = [
    {
      title: "Blood Management & Emergency Donor Broadcast System",
      description: "A full-stack application coordinating donors, blood banks, laboratories, and hospitals. Manages donation records, blood-unit inventory, screening workflows, and hospital requests — with emergency notifications targeted by donor location and blood-group compatibility.",
      tags: ["React", "Vite", "Django REST", "SimpleJWT", "SQLite", "TanStack Query"],
      icon: Droplets,
      color: "from-rose-500 to-red-600",
      github: "https://github.com/hariharan4814/blood-management-live",
    },
    {
      title: "AI-Based Smart Farm Monitoring & Management System",
      description: "A farm monitoring application combining real-time animal detection with workforce attendance, task management, and administrative tools. Built with Flask, YOLOv8, and OpenCV. Features email/buzzer alerts, GPS-based attendance tracking, and SQLite storage for detection logs.",
      tags: ["Python", "Flask", "YOLOv8", "OpenCV", "SQLite"],
      icon: Sprout,
      color: "from-emerald-500 to-teal-600",
      github: "https://github.com/hariharan4814",
    },
    {
      title: "Digital Notice Board – Online Notice Management System",
      description: "A Django-based digital notice board that centralises institutional announcements, student records, and user management. Provides an organised online interface for publishing and accessing notices — replacing physical boards with a structured digital workflow.",
      tags: ["Python", "Django", "SQLite", "HTML", "CSS", "JavaScript"],
      icon: Monitor,
      color: "from-sky-400 to-blue-600",
      github: "https://github.com/hariharan4814/noticeboard",
    },
    {
      title: "ML-Based Crop Yield Prediction",
      description: "Developed a crop yield prediction model using Gradient Boosting. Performed data preprocessing, feature engineering, and created detailed visualisations to communicate results.",
      tags: ["Python", "Machine Learning", "Data Science"],
      icon: Brain,
      color: "from-violet-500 to-indigo-600",
      github: "https://github.com/hariharan4814",
    },
    {
      title: "Portfolio Design System",
      description: "Crafted an interactive portfolio prototype in Figma, combining user experience and creative visuals with a focus on modern design principles and accessibility.",
      tags: ["UI/UX", "Figma", "Design Thinking", "Prototyping"],
      icon: Figma,
      color: "from-indigo-400 to-violet-600",
      github: "https://github.com/hariharan4814",
    },
    {
      title: "Graphic Branding Works",
      description: "Created logos, flyers, and digital posters using Canva. Focused on effective visual communication and modern branding principles.",
      tags: ["Graphic Design", "Branding", "Canva"],
      icon: Palette,
      color: "from-amber-400 to-orange-500",
      github: "https://github.com/hariharan4814",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Background spheres */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden" aria-hidden>
        <div className="gradient-sphere float-1" style={{ width: 450, height: 450, background: "radial-gradient(circle, hsl(250 85% 68%/0.1) 0%, transparent 70%)", top: "0%", right: "-5%" }} />
        <div className="gradient-sphere float-2" style={{ width: 350, height: 350, background: "radial-gradient(circle, hsl(32 95% 55%/0.1) 0%, transparent 70%)", bottom: "5%", left: "-5%" }} />
      </div>

      <div className="relative z-10 container mx-auto px-4 pt-28 pb-20 max-w-6xl">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-6"
        >
          <span className="section-label mb-4 block">My Work</span>
          <h1 className="headline text-5xl md:text-7xl mb-6">
            Featured{" "}
            <span className="text-gradient-hero animate-gradient" style={{ backgroundSize: "200% auto" }}>
              Projects
            </span>
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Showcasing my journey through design, development, and innovation
          </p>
        </motion.div>

        {/* Starburst badge */}
        <motion.div
          initial={{ opacity: 0, rotate: -10, scale: 0 }}
          animate={{ opacity: 1, rotate: 0, scale: 1 }}
          transition={{ delay: 0.5, type: "spring", stiffness: 200 }}
          className="flex justify-center mb-4"
        >
          <div className="tilt-3 inline-flex items-center gap-2 bg-accent text-white font-black text-xs px-4 py-2 rounded-2xl shadow-hard-sm uppercase tracking-wider">
            <Sparkles className="h-3 w-3" /> 6 Projects &amp; Growing
          </div>
        </motion.div>

        {/* Tech marquee */}
        <TechMarquee />

        {/* Projects grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-7 mb-20">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} index={index} />
          ))}
        </div>

        {/* CTA card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative"
        >
          {/* Hard offset shadow */}
          <div className="absolute inset-0 rounded-3xl bg-primary/30 translate-x-3 translate-y-3" />
          <div className="relative rounded-3xl bg-card border-2 border-primary/20 p-8 md:p-12 text-center overflow-hidden inner-glow">
            {/* Gradient bg */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5 rounded-3xl" />
            <div className="relative z-10">
              <div className="text-4xl mb-4">🚀</div>
              <h3 className="text-2xl md:text-3xl font-black text-foreground mb-3">
                More Projects Coming Soon
              </h3>
              <p className="text-muted-foreground mb-6 max-w-md mx-auto">
                I&apos;m constantly working on new projects and exploring new technologies. Stay tuned!
              </p>
              <Button
                asChild
                className="rounded-2xl h-12 px-8 font-bold gradient-primary text-white border-0 shadow-hard-sm hover:shadow-hard hover:-translate-y-0.5 transition-all"
              >
                <a href="https://github.com/hariharan4814" target="_blank" rel="noopener noreferrer">
                  <Github className="mr-2 h-4 w-4" />
                  View GitHub Profile
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
