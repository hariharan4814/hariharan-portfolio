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
    <div className="min-h-screen pt-24 pb-16 px-4">
      <div className="container mx-auto max-w-5xl">
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
            About <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-purple-500">Me</span>
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Passionate Full Stack Developer creating seamless digital experiences.
          </p>
        </motion.div>

        {/* Profile & Bio Section */}
        <div className="grid md:grid-cols-2 gap-12 items-center mb-24">
          {/* Profile Image (Asymmetrical Design) */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="relative flex justify-center md:justify-start"
          >
            <div className="relative w-72 h-72 md:w-96 md:h-96">
              <div className="absolute inset-0 bg-gradient-to-tr from-primary to-purple-600 rounded-[2rem] rotate-6 opacity-20 blur-2xl" />
              <div className="relative h-full w-full rounded-[2rem] overflow-hidden border border-white/10 shadow-2xl bg-white/5 backdrop-blur-sm group">
                <img
                  src="/myimg.png"
                  alt="Hariharan B"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-6 left-6 text-white">
                  <p className="font-bold text-xl">Hariharan B</p>
                  <p className="text-white/80 text-sm">Designer & Developer</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Bio Text */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-6 text-center md:text-left"
          >
            <h2 className="text-3xl font-bold">
              Turning Complex Problems into <span className="text-primary">Elegant Solutions</span>
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed">
              I'm a Master's student in Computer Science at PSG College of Arts and Science with a knack for building user-centric applications. My journey bridges the gap between <span className="text-foreground font-medium">engineering logic</span> and <span className="text-foreground font-medium">creative design</span>
            </p>
            <p className="text-muted-foreground text-lg leading-relaxed">
              Whether it's architecting a robust backend or refining pixel-perfect UI interactions, I bring a detail-oriented approach to every project.
            </p>

            <div className="flex flex-wrap gap-4 justify-center md:justify-start pt-4">
              <Button className="rounded-full h-12 px-6 text-base" asChild>
                <a href="HARIHARAN_CV.pdf" target="_blank" rel="noopener noreferrer">
                  <Download className="mr-2 h-4 w-4" /> Resume
                </a>
              </Button>
              <Button variant="outline" className="rounded-full h-12 px-6 text-base" asChild>
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

          <div className="grid md:grid-cols-2 gap-6">
            {education.map((edu, i) => (
              <Card key={i} className="p-6 border-white/10 bg-white/5 backdrop-blur-md hover:bg-white/10 transition-all group">
                <div className="flex justify-between items-start mb-4">
                  <div className="p-3 rounded-xl bg-primary/10 text-primary group-hover:scale-110 transition-transform">
                    <Award className="h-6 w-6" />
                  </div>
                  <span className="px-3 py-1 rounded-full bg-white/5 text-xs font-medium border border-white/10">
                    {edu.year}
                  </span>
                </div>
                <h3 className="text-xl font-bold mb-1 group-hover:text-primary transition-colors">{edu.degree}</h3>
                <p className="text-muted-foreground">{edu.institution}</p>
                <div className="mt-4 pt-4 border-t border-white/5">
                  <span className={`text-sm font-medium ${edu.status === 'Pursuing' ? 'text-blue-400' : 'text-green-400'}`}>
                    ● {edu.status}
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
                    className="px-3 py-1.5 rounded-md bg-white/5 border border-white/10 text-sm font-medium hover:bg-white/10 transition-colors"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </Card>

            {/* Design Skills */}
            <Card className="p-6 glass hover:border-purple-500/30 transition-colors">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 rounded-lg bg-purple-500/10 text-purple-400">
                  <Palette className="h-5 w-5" />
                </div>
                <h3 className="font-bold text-xl">Design</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {skills.design.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1.5 rounded-md bg-white/5 border border-white/10 text-sm font-medium hover:bg-white/10 transition-colors"
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
                    className="px-3 py-1.5 rounded-md bg-white/5 border border-white/10 text-sm font-medium hover:bg-white/10 transition-colors"
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
