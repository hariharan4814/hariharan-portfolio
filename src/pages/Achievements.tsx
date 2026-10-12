import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { Trophy, Award, Users, Star, BookOpen, Zap, GraduationCap } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

/* ---- Achievement card ---- */
function AchievementCard({ achievement, index }: { achievement: any; index: number }) {
  const cardRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = cardRef.current;
    if (!el) return;
    gsap.fromTo(el,
      { opacity: 0, y: 50, rotate: index % 2 === 0 ? -1 : 1 },
      {
        opacity: 1, y: 0, rotate: 0, duration: 0.65, ease: "power3.out",
        scrollTrigger: { trigger: el, start: "top 88%", toggleActions: "play none none none" },
        delay: (index % 3) * 0.1,
      }
    );
  }, [index]);

  return (
    <div ref={cardRef} className="group h-full">
      <div className="relative h-full transition-all duration-300 cursor-default">
        <div
          className={`absolute inset-0 rounded-3xl bg-gradient-to-br ${achievement.color} opacity-0 group-hover:opacity-60 translate-x-2 translate-y-2 group-hover:translate-x-3 group-hover:translate-y-3 transition-all duration-300`}
          style={{ filter: "blur(1px)" }}
        />
        <div className="relative rounded-3xl bg-card border border-border p-6 h-full flex flex-col overflow-hidden shadow-card inner-glow transition-all duration-300 group-hover:border-primary/20 group-hover:-translate-y-1">
          <div className={`absolute inset-0 bg-gradient-to-br ${achievement.color} opacity-0 group-hover:opacity-[0.04] rounded-3xl transition-opacity duration-500`} />
          <div className="relative z-10 mb-4 flex justify-between items-start">
            <motion.div
              whileHover={{ scale: 1.12 }}
              transition={{ type: "spring", stiffness: 300 }}
              className={`p-3.5 rounded-2xl bg-gradient-to-br ${achievement.color} shadow-md inner-glow`}
            >
              <achievement.icon className="h-6 w-6 text-white" />
            </motion.div>
            <div className="tilt-2 px-3 py-1 rounded-xl bg-secondary border border-border text-xs font-black text-foreground shadow-hard-sm">
              {achievement.year}
            </div>
          </div>
          <div className="relative z-10 flex-1 space-y-2">
            <h3 className="text-base font-bold text-foreground leading-snug group-hover:text-primary transition-colors">
              {achievement.title}
            </h3>
            <span className="tag text-[0.6rem]">{achievement.organization}</span>
            {achievement.note && (
              <p className="text-muted-foreground text-xs leading-relaxed pt-1">{achievement.note}</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

/* ---- Cert card ---- */
function CertCard({ cert, index }: { cert: any; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      className="group flex items-start gap-4 p-5 rounded-2xl bg-card border border-border shadow-sm inner-glow hover:border-primary/30 hover:-translate-y-0.5 transition-all duration-300"
    >
      <div className={`p-2.5 rounded-xl bg-gradient-to-br ${cert.color} shadow-sm flex-shrink-0 group-hover:scale-110 transition-transform duration-300`}>
        <cert.icon className="h-5 w-5 text-white" />
      </div>
      <div>
        <p className="text-sm font-bold text-foreground leading-snug">{cert.title}</p>
        <p className="text-xs text-muted-foreground mt-0.5">{cert.issuer}</p>
      </div>
    </motion.div>
  );
}

/* ---- Stat card ---- */
function StatCard({ value, label, icon: Icon, color }: { value: string; label: string; icon: any; color: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.88 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      whileHover={{ y: -4 }}
      className="relative group text-center"
    >
      <div className={`absolute inset-0 rounded-3xl bg-gradient-to-br ${color} opacity-0 group-hover:opacity-50 translate-x-1.5 translate-y-1.5 group-hover:translate-x-2.5 group-hover:translate-y-2.5 transition-all duration-300`} style={{ filter: "blur(1px)" }} />
      <div className="relative glass rounded-3xl p-6 border border-border inner-glow">
        <div className={`inline-flex p-3 rounded-2xl bg-gradient-to-br ${color} mb-3 shadow-sm`}>
          <Icon className="h-5 w-5 text-white" />
        </div>
        <div className="text-4xl font-black text-gradient mb-1">{value}</div>
        <div className="text-xs text-muted-foreground font-semibold">{label}</div>
      </div>
    </motion.div>
  );
}

/* ============ ACHIEVEMENTS PAGE ============ */
const Achievements = () => {
  const achievements = [
    {
      title: "Best Outgoing Student",
      organization: "SKACAS — Batch 2022–2025",
      year: "2025",
      icon: Trophy,
      color: "from-yellow-400 to-orange-500",
    },
    {
      title: "Best Creator Award",
      organization: "SKACAS",
      year: "2024",
      icon: Star,
      color: "from-violet-500 to-indigo-600",
    },
    {
      title: "Best Tamil Orator",
      organization: "SKACAS",
      year: "2024",
      icon: Award,
      color: "from-rose-400 to-pink-600",
    },
    {
      title: "Excellence Award — IoT-Based Expo",
      organization: "PSG College of Arts & Science",
      year: "2025",
      icon: Zap,
      color: "from-emerald-400 to-teal-500",
      note: "Team award for an IoT-based project presented at the college expo.",
    },
  ];

  const leadership = [
    {
      title: "Association Chairperson",
      organization: "Dept. of Computer Science, PSG College of Arts & Science",
      period: "Current",
      icon: Users,
      color: "from-violet-500 to-indigo-600",
    },
    {
      title: "Head — Sirippom Sindhippom Club",
      organization: "Sri Krishna Adithya College of Arts and Science",
      period: "2023 – 2025",
      icon: Star,
      color: "from-amber-400 to-orange-500",
    },
    {
      title: "Student Council Member",
      organization: "Sri Krishna Adithya College of Arts and Science",
      period: "2022 – 2025",
      icon: GraduationCap,
      color: "from-sky-400 to-blue-500",
    },
  ];

  const certifications = [
    {
      title: "Google UX Design",
      issuer: "Coursera",
      icon: BookOpen,
      color: "from-blue-500 to-indigo-600",
    },
    {
      title: "Demystifying Networking",
      issuer: "NPTEL",
      icon: BookOpen,
      color: "from-emerald-400 to-teal-500",
    },
    {
      title: "Designing & Deploying Computer Networks with Bootcamp",
      issuer: "Internet Society (ISOC)",
      icon: BookOpen,
      color: "from-amber-400 to-orange-500",
    },
  ];

  const stats = [
    { value: "4", label: "Achievements", icon: Trophy, color: "from-yellow-400 to-orange-500" },
    { value: "3", label: "Leadership Roles", icon: Zap, color: "from-violet-500 to-indigo-600" },
    { value: "3+", label: "Courses & Certs", icon: Award, color: "from-emerald-400 to-teal-500" },
  ];

  return (
    <div className="min-h-screen bg-transparent">
      <div className="fixed inset-0 pointer-events-none overflow-hidden" aria-hidden>
        <div className="gradient-sphere float-1" style={{ width: 450, height: 450, background: "radial-gradient(circle, hsl(250 85% 68%/0.08) 0%, transparent 70%)", top: "-5%", right: "-5%" }} />
        <div className="gradient-sphere float-3" style={{ width: 350, height: 350, background: "radial-gradient(circle, hsl(32 95% 55%/0.07) 0%, transparent 70%)", bottom: "0%", left: "-5%" }} />
      </div>

      <div className="relative z-10 container mx-auto px-4 pt-28 pb-20 max-w-6xl">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <span className="section-label mb-4 block">Recognition & Leadership</span>
          <h1 className="headline text-5xl md:text-7xl mb-6">
            Achievements &amp;{" "}
            <span className="text-gradient-warm animate-gradient" style={{ backgroundSize: "200% auto" }}>
              Milestones
            </span>
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Every milestone marks a step in my journey of growth, learning, and leadership.
          </p>
        </motion.div>

        {/* Achievements grid */}
        <div className="mb-20">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-10">
            <span className="section-label mb-2 block text-center">Recognitions</span>
            <h2 className="headline text-3xl text-center">Awards</h2>
          </motion.div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {achievements.map((a, i) => (
              <AchievementCard key={i} achievement={a} index={i} />
            ))}
          </div>
        </div>

        {/* Leadership */}
        <div className="mb-20">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-10">
            <span className="section-label mb-2 block text-center">Positions Held</span>
            <h2 className="headline text-3xl text-center">Leadership & Activities</h2>
          </motion.div>
          <div className="grid sm:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {leadership.map((l, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group relative rounded-3xl bg-card border border-border p-6 shadow-card inner-glow hover:border-primary/20 hover:-translate-y-1 transition-all duration-300 overflow-hidden"
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${l.color} opacity-0 group-hover:opacity-[0.04] rounded-3xl transition-opacity duration-500`} />
                <div className="relative z-10 flex items-start gap-3">
                  <div className={`p-3 rounded-2xl bg-gradient-to-br ${l.color} shadow-sm flex-shrink-0`}>
                    <l.icon className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <p className="text-sm font-bold text-foreground leading-snug">{l.title}</p>
                    <p className="text-xs text-muted-foreground mt-1">{l.organization}</p>
                    <span className="tag text-[0.58rem] mt-2 inline-block">{l.period}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Courses & Certifications */}
        <div className="mb-20">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-10">
            <span className="section-label mb-2 block text-center">Learning</span>
            <h2 className="headline text-3xl text-center">Courses &amp; Certifications</h2>
          </motion.div>
          <div className="grid sm:grid-cols-3 gap-5 max-w-4xl mx-auto">
            {certifications.map((c, i) => (
              <CertCard key={i} cert={c} index={i} />
            ))}
          </div>
        </div>

        {/* Stats */}
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
          <div className="text-center mb-10">
            <span className="section-label mb-2 block">By the Numbers</span>
            <h2 className="headline text-3xl">Impact at a Glance</h2>
          </div>
          <div className="grid grid-cols-3 gap-6 max-w-2xl mx-auto">
            {stats.map((s, i) => <StatCard key={i} {...s} />)}
          </div>
        </motion.div>

      </div>
    </div>
  );
};

export default Achievements;
