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
    <div className="min-h-screen pt-24 pb-16">
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl md:text-6xl font-bold mb-4">
            About <span className="text-gradient">Me</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Passionate about blending creativity with technology
          </p>
        </motion.div>

        {/* Main Content */}
        <div className="grid md:grid-cols-2 gap-12 mb-16">
          {/* Left: Profile Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ type: "spring", duration: 0.8 }}
            className="flex items-center justify-center relative z-10"
          >
            <div className="relative w-full max-w-[300px] md:max-w-md aspect-square">
              {/* Animated Background Layers */}
              <motion.div
                animate={{ rotate: 360, scale: [1, 1.1, 1] }}
                transition={{ rotate: { duration: 20, repeat: Infinity, ease: 'linear' }, scale: { duration: 5, repeat: Infinity, ease: 'easeInOut' } }}
                className="absolute inset-[-20px] rounded-full bg-gradient-to-tr from-primary/30 to-secondary/30 blur-2xl opacity-60 z-0"
              />
              <motion.div
                animate={{ rotate: -360, scale: [1, 1.2, 1] }}
                transition={{ rotate: { duration: 15, repeat: Infinity, ease: 'linear' }, scale: { duration: 7, repeat: Infinity, ease: 'easeInOut' } }}
                className="absolute inset-[-10px] rounded-full bg-gradient-to-bl from-accent/30 to-primary/30 blur-xl opacity-60 z-0"
              />

              {/* Floating Orbiting Bubbles */}
              {[...Array(3)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute p-4 glass rounded-full shadow-lg z-0"
                  animate={{
                    x: [0, Math.cos(i) * 50, 0],
                    y: [0, Math.sin(i) * 50, 0],
                    scale: [1, 1.1, 1],
                  }}
                  transition={{
                    duration: 5 + i,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: i * 2,
                  }}
                  style={{
                    top: `${50 + Math.sin(i * 2) * 50}%`,
                    left: `${50 + Math.cos(i * 2) * 50}%`,
                  }}
                >
                  <div className="w-2 h-2 bg-primary rounded-full animate-pulse" />
                </motion.div>
              ))}

              <Card className="relative h-full p-2 md:p-4 glass rounded-full overflow-hidden border-4 border-white/10 shadow-2xl z-30">
                <div className="w-full h-full rounded-full overflow-hidden bg-gradient-to-b from-primary/5 to-transparent">
                  <img
                    src="/myimg.png"
                    alt="Hariharan B"
                    className="w-full h-full object-cover"
                  />
                </div>
              </Card>
            </div>
          </motion.div>

          {/* Right: About Text */}
          {/* Right: About Text */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
            className="space-y-8 text-center md:text-left flex flex-col justify-center"
          >
            <div className="space-y-4">
              <h2 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-accent inline-block">
                Hariharan B
              </h2>
              <div className="h-1 w-20 bg-primary/50 mx-auto md:mx-0 rounded-full" />

              <h3 className="text-2xl font-semibold text-foreground/90">
                Crafting Digital Experiences with <span className="text-primary">Logic</span> & <span className="text-secondary">Creativity</span>
              </h3>
            </div>

            <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
              <p>
                🚀 <span className="text-foreground font-medium">Building the Future, Pixel by Pixel.</span>
                <br />
                I’m a Full Stack Developer & UX Designer who thrives at the intersection of technology and art. Currently pursuing my Master’s in CS at PSG College of Arts and Science, I don't just write code—I craft seamless, user-centric digital journeys.
              </p>

              <p>
                🎨 <span className="text-foreground font-medium">Design Roots, Engineering Soul.</span>
                <br />
                From rapid prototyping in Figma to building scalable backends in Python, I speak the languages of both designers and developers. My detail-obsessed approach ensures that every project isn't just functional, but unforgettable.
              </p>
            </div>

            <div className="flex flex-wrap gap-4 justify-center md:justify-start pt-4">
              <Button size="lg" className="group rounded-full px-8 shadow-lg hover:shadow-primary/25" asChild>
                <a
                  href="HARIHARAN_CV.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Download className="mr-2 h-4 w-4 transition-transform group-hover:translate-y-1" />
                  Download Resume
                </a>
              </Button>
              <Button size="lg" variant="outline" className="rounded-full px-8 text-primary border-primary hover:bg-primary/5" asChild>
                <a href="/contact">
                  Let's Connect
                </a>
              </Button>
            </div>
          </motion.div>
        </div>

        {/* Education */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <div className="flex items-center gap-3 mb-8">
            <GraduationCap className="h-8 w-8 text-primary" />
            <h2 className="text-3xl font-bold">Education</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {education.map((edu, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="p-6 glass hover:glow-blue transition-shadow">
                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-lg bg-primary/10">
                      <Award className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-bold text-lg mb-2">{edu.degree}</h3>
                      <p className="text-muted-foreground mb-1">{edu.institution}</p>
                      <p className="text-sm text-muted-foreground">{edu.year}</p>
                      <p className="text-sm text-primary font-medium mt-2">{edu.status}</p>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Skills */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="flex items-center gap-3 mb-8">
            <Code className="h-8 w-8 text-primary" />
            <h2 className="text-3xl font-bold">Skills & Expertise</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <Card className="p-6 glass">
              <div className="flex items-center gap-3 mb-4">
                <Code className="h-6 w-6 text-primary" />
                <h3 className="font-bold text-xl">Technical</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {skills.technical.map((skill) => (
                  <span
                    key={skill}
                    className="px-4 py-2 rounded-full glass bg-primary/10 border border-primary/20 text-primary text-sm font-medium hover:bg-primary/20 hover:scale-105 hover:shadow-lg hover:shadow-primary/20 transition-all duration-300 cursor-default shadow-md"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </Card>

            <Card className="p-6 glass">
              <div className="flex items-center gap-3 mb-4">
                <Palette className="h-6 w-6 text-secondary" />
                <h3 className="font-bold text-xl">Design</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {skills.design.map((skill) => (
                  <span
                    key={skill}
                    className="px-4 py-2 rounded-full glass bg-secondary/10 border border-secondary/20 text-secondary text-sm font-medium hover:bg-secondary/20 hover:scale-105 hover:shadow-lg hover:shadow-secondary/20 transition-all duration-300 cursor-default shadow-md"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </Card>

            <Card className="p-6 glass">
              <div className="flex items-center gap-3 mb-4">
                <Award className="h-6 w-6 text-accent" />
                <h3 className="font-bold text-xl">Soft Skills</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {skills.soft.map((skill) => (
                  <span
                    key={skill}
                    className="px-4 py-2 rounded-full glass bg-accent/10 border border-accent/20 text-accent text-sm font-medium hover:bg-accent/20 hover:scale-105 hover:shadow-lg hover:shadow-accent/20 transition-all duration-300 cursor-default shadow-md"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </Card>
          </div>
        </motion.div>
      </div>

      <FloatingButton to="/projects" icon={Briefcase} text="View Projects" />
    </div>
  );
};

export default About;
