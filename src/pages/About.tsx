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
      status: 'Scored: 86.26%',
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
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="flex items-center justify-center"
          >
            <div className="relative">
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
                className="absolute inset-0 rounded-3xl gradient-blue blur-2xl opacity-50"
              />
              <Card className="relative p-8 glass">
                <div className="w-full aspect-square max-w-md mx-auto rounded-2xl overflow-hidden shadow-2xl">
                  <img
                    src="/myimg.png"
                    alt="My Profile"
                    className="w-full h-full object-cover rounded-2xl"
                  />
                </div>
              </Card>
            </div>
          </motion.div>

          {/* Right: About Text */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
            className="space-y-6"
          >
            <div>
              <h2 className="text-3xl font-bold mb-4">Hariharan B</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                I'm a postgraduate CS student at PSG College of Arts and Science with a strong passion for Full Stack Development, UX design, and graphic design. With hands-on experience in tools like Canva, Figma, HTML/CSS, and Python, I enjoy merging creativity with technology to craft engaging and user-centered digital experiences.

I've led several design projects, earned certifications such as the Google UX Design Certificate, and actively contributed to college clubs and tech events. My journey so far has helped me build a solid foundation in both front-end and back-end development, while nurturing a strong visual sense through design.
              </p>
            </div>

            <div>
              <p className="text-lg text-muted-foreground leading-relaxed">
                I thrive on creating impactful digital experiences that blend aesthetics with functionality. 
                My journey in technology and design has equipped me with a unique perspective to solve problems 
                creatively while maintaining technical excellence.
              </p>
            </div>

            <Button size="lg" className="group" asChild>
              <a 
                href="HARIHARAN_CV.pdf" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                <Download className="mr-2 h-4 w-4 transition-transform group-hover:translate-y-1" />
                Download CV
              </a>
            </Button>
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
                    className="px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium"
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
                    className="px-3 py-1 rounded-full bg-secondary/10 text-secondary text-sm font-medium"
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
                    className="px-3 py-1 rounded-full bg-accent/10 text-accent text-sm font-medium"
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
