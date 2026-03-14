import { motion } from 'framer-motion';
import { Download, GraduationCap, Award, Code, Palette } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import FloatingButton from '@/components/FloatingButton';
import { Briefcase } from 'lucide-react';

const About = () => {
  const education = [
    {
      degree: 'Master of Science in Computer Science',
      institution: 'PSG College of Arts and Science',
      year: '2025 – 27 (Expected)',
      status: 'Pursuing',
    },
    {
      degree: 'Bachelor of Science in Computer Technology',
      institution: 'Sri Krishna Adithya College of Arts and Science',
      year: '2022 - 25',
      status: 'Completed',
    },
  ];

  const skills = {
    technical: ['Python', 'HTML/CSS', 'Bootstrap', 'SQL', 'Git', 'GitHub'],
    design: ['Figma', 'Canva', 'Capcut', 'UI/UX Design', 'Graphic Design'],
    soft: ['Problem-Solving', 'Team Collaboration', 'Time Management', 'Communication', 'Leadership'],
  };

  return (
    <div className="min-h-screen pt-24 pb-16 px-4 relative flex flex-col items-center justify-center">
      {/* Background with tech overlay */}
      <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none bg-background">
        {/* Soft Modern Tech Grid Overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_80%_80%_at_50%_50%,#000_70%,transparent_100%)] z-10" />
        {/* Glow behind */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-[128px] -z-10" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-[128px] -z-10" />
      </div>

      <div className="container mx-auto max-w-6xl relative z-30">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 space-y-4"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-semibold mb-4">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
            </span>
            Available for Opportunities
          </div>
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
            About <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-400">Me</span>
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Passionate Full Stack Developer creating seamless digital experiences.
          </p>
        </motion.div>

        {/* Profile & Bio Section */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center mb-24 max-w-6xl mx-auto w-full">
          {/* Elegant Image Presentation */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="flex justify-center"
          >
            <div className="relative w-full max-w-sm sm:max-w-md aspect-[4/5] xl:aspect-[3/4] group">
              {/* Animated Glowing border */}
              <div className="absolute -inset-1 bg-gradient-to-tr from-primary via-blue-400 to-transparent rounded-[2.5rem] blur-xl opacity-40 group-hover:opacity-60 transition duration-700"></div>
              
              {/* Glass Card Container */}
              <div className="relative h-full w-full rounded-[2.5rem] overflow-hidden border border-white/10 dark:border-white/20 bg-background/50 backdrop-blur-sm p-3 shadow-2xl">
                <div className="w-full h-full rounded-3xl overflow-hidden relative bg-accent/10">
                  <img
                    src="/myimg.png"
                    alt="Hariharan B"
                    className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-[1.03]"
                  />
                  {/* Floating Tech Badge */}
                  <div className="absolute bottom-4 left-4 right-4 bg-background/90 backdrop-blur-xl border border-white/10 p-4 rounded-2xl flex items-center justify-between shadow-[0_8px_32px_0_rgba(0,0,0,0.3)] transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 delay-100">
                    <div>
                      <p className="font-bold text-base text-foreground">Hariharan B</p>
                      <p className="text-xs text-muted-foreground font-medium flex items-center gap-1.5 mt-0.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" /> 
                        Available Now
                      </p>
                    </div>
                    <div className="flex gap-2">
                       <div className="p-2 rounded-lg bg-primary/10 text-primary">
                         <Code className="w-4 h-4" />
                       </div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Futuristic Cybernetic Accents */}
              <div className="absolute -bottom-6 -left-6 w-24 h-24 border-b-4 border-l-4 border-primary/40 rounded-bl-[2.5rem] transition-transform group-hover:-translate-x-2 group-hover:translate-y-2 duration-500"></div>
              <div className="absolute -top-6 -right-6 w-24 h-24 border-t-4 border-r-4 border-blue-400/40 rounded-tr-[2.5rem] transition-transform group-hover:translate-x-2 group-hover:-translate-y-2 duration-500"></div>
            </div>
          </motion.div>

          {/* Bio Text Space */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-6 md:space-y-8 p-6 sm:p-10 rounded-[2rem] md:rounded-[2.5rem] bg-card/60 dark:bg-black/40 backdrop-blur-xl border border-white/10 shadow-[0_8px_32px_0_rgba(0,0,0,0.3)] relative overflow-hidden"
          >
            {/* Tech Scanline Effect inside Card */}
            <div className="absolute inset-0 bg-[linear-gradient(transparent_50%,rgba(0,0,0,0.05)_50%)] bg-[length:100%_4px] pointer-events-none opacity-20" />
            
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight relative z-10 leading-tight">
              Turning Complex Problems into <br className="hidden xl:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-400">Elegant Technology</span>
            </h2>
            
            <div className="w-16 h-1 flex rounded-full relative z-10 overflow-hidden">
               <div className="w-1/2 h-full bg-primary" />
               <div className="w-1/2 h-full bg-blue-400" />
            </div>

            <p className="text-foreground/90 text-base md:text-lg font-medium leading-relaxed relative z-10">
              Master's student in Computer Science at PSG College with a knack for building user-centric, high-performance applications. My journey bridges the gap between <span className="text-primary font-bold">engineering logic</span> and <span className="text-primary font-bold">creative design</span>.
            </p>
            <p className="text-foreground/70 text-base md:text-lg leading-relaxed relative z-10">
              Architecting robust backends and refining pixel-perfect UI interactions, I bring a detail-oriented, modern tech approach to every project.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4 relative z-10">
              <Button className="w-full sm:w-auto rounded-full h-12 md:h-14 px-8 text-sm md:text-base shadow-lg shadow-primary/25 hover:shadow-primary/40 hover:-translate-y-1 transition-all" asChild>
                <a href="HARIHARAN_CV.pdf" target="_blank" rel="noopener noreferrer">
                  <Download className="mr-2 h-5 w-5" /> Download Resume
                </a>
              </Button>
              <Button variant="outline" className="w-full sm:w-auto rounded-full h-12 md:h-14 px-8 text-sm md:text-base bg-background/50 backdrop-blur-md border-white/20 hover:bg-white/10 hover:border-white/40 transition-all hover:-translate-y-1" asChild>
                <a href="/contact">Let's Talk</a>
              </Button>
            </div>
          </motion.div>
        </div>

        {/* Education Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-24"
        >
          <h2 className="text-3xl font-bold mb-10 text-center flex items-center justify-center gap-3">
            <GraduationCap className="h-8 w-8 text-primary" /> Education
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 w-full">
            {education.map((edu, i) => (
              <Card key={i} className="p-6 md:p-8 border-white/10 bg-background/60 dark:bg-black/60 backdrop-blur-xl shadow-lg hover:shadow-primary/10 transition-all hover:-translate-y-1 group">
                <div className="flex justify-between items-start mb-6">
                  <div className="p-4 rounded-xl bg-primary/20 text-primary group-hover:scale-110 transition-transform">
                    <Award className="h-8 w-8" />
                  </div>
                  <span className="px-4 py-1.5 rounded-full bg-secondary/80 text-xs font-bold border border-white/10 backdrop-blur-sm">
                    {edu.year}
                  </span>
                </div>
                <h3 className="text-xl md:text-2xl font-bold mb-2 group-hover:text-primary transition-colors">{edu.degree}</h3>
                <p className="text-muted-foreground font-medium md:text-lg">{edu.institution}</p>
                <div className="mt-6 pt-5 border-t border-white/10">
                  <span className={`text-sm md:text-base font-bold tracking-wide uppercase ${edu.status === 'Pursuing' ? 'text-blue-400' : 'text-green-500'}`}>
                    {edu.status === 'Pursuing' ? '⚡ ' : '✓ '} {edu.status}
                  </span>
                </div>
              </Card>
            ))}
          </div>
        </motion.div>

        {/* Skills Section (Bento Grid Style) */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold mb-10 text-center flex items-center justify-center gap-3">
            <Code className="h-8 w-8 text-primary" /> Expertise
          </h2>

          <div className="grid md:grid-cols-3 gap-6">
            {/* Technical Skills */}
            <Card className="p-6 glass hover:border-primary/30 transition-colors">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 rounded-lg bg-primary/10 text-primary">
                  <Code className="h-5 w-5" />
                </div>
                <h3 className="font-bold text-xl">Technical</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {skills.technical.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1.5 rounded-md bg-secondary/50 border border-border text-sm font-medium hover:bg-secondary transition-colors"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </Card>

            {/* Design Skills */}
            <Card className="p-6 glass hover:border-blue-400/30 transition-colors">
               <div className="flex items-center gap-3 mb-4">
                 <div className="p-2 rounded-lg bg-blue-400/10 text-blue-400">
                   <Palette className="h-5 w-5" />
                 </div>
                 <h3 className="font-bold text-xl">Design</h3>
               </div>
              <div className="flex flex-wrap gap-2">
                {skills.design.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1.5 rounded-md bg-secondary/50 border border-border text-sm font-medium hover:bg-secondary transition-colors"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </Card>

            {/* Soft Skills */}
            <Card className="p-6 glass hover:border-emerald-500/30 transition-colors">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 rounded-lg bg-emerald-500/10 text-emerald-400">
                  <Briefcase className="h-5 w-5" />
                </div>
                <h3 className="font-bold text-xl">Soft Skills</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {skills.soft.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1.5 rounded-md bg-secondary/50 border border-border text-sm font-medium hover:bg-secondary transition-colors"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </Card>
          </div>
        </motion.div>

      </div>

      {/* Scroll to Top helper if needed, or remove FloatingButton completely if layout handles navigation well. 
          Keeping a floating project button or 'back to top' serves mobile well. 
      */}
      <div className="hidden md:block">
        <FloatingButton to="/projects" icon={Briefcase} text="My Projects" />
      </div>
    </div>
  );
};

export default About;
