import { motion } from 'framer-motion';
import { ExternalLink, Github, Brain, Figma, Palette } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import FloatingButton from '@/components/FloatingButton';
import { Mail } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: 'ML-Based Crop Yield Prediction',
      description: 'Developed a crop yield prediction model using Gradient Boosting with strong forecasting accuracy. Performed data preprocessing, feature engineering, and created detailed visualizations.',
      tags: ['AI', 'Python', 'Machine Learning', 'Data Science'],
      icon: Brain,
      color: 'from-blue-500 to-cyan-500',
    },
    {
      title: 'Portfolio Design System',
      description: 'Crafted an interactive portfolio prototype in Figma, combining user experience and creative visuals with a focus on modern design principles.',
      tags: ['UI/UX', 'Figma', 'Design Thinking', 'Prototyping'],
      icon: Figma,
      color: 'from-purple-500 to-pink-500',
    },
    {
      title: 'Graphic Branding Works',
      description: 'Created logo, flyer, and digital posters for clients using Canva and Photoshop. Boosted client engagement through effective visual designs.',
      tags: ['Graphic Design', 'Branding', 'Canva', 'Creative'],
      icon: Palette,
      color: 'from-orange-500 to-red-500',
    },
  ];

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
            My <span className="text-gradient">Projects</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Showcasing my journey through design, development, and innovation
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="group h-full p-6 glass hover:glow-blue transition-all duration-300 overflow-hidden relative">
                {/* Gradient overlay */}
                <div className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`} />
                
                <div className="relative z-10 h-full flex flex-col">
                  {/* Icon */}
                  <div className="mb-4">
                    <div className={`inline-flex p-4 rounded-2xl bg-gradient-to-br ${project.color}`}>
                      <project.icon className="h-8 w-8 text-white" />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold mb-3 group-hover:text-gradient transition-all">
                      {project.title}
                    </h3>
                    <p className="text-muted-foreground mb-4 leading-relaxed">
                      {project.description}
                    </p>
                  </div>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag) => (
                      <Badge key={tag} variant="secondary" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-3">
                    <Button 
                      size="sm" 
                      variant="ghost"
                      className="group/btn"
                    >
                      <Github className="h-4 w-4 transition-transform group-hover/btn:scale-110" />
                    </Button>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Additional Info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <Card className="p-8 glass inline-block">
            <h3 className="text-2xl font-bold mb-3">More Projects Coming Soon</h3>
            <p className="text-muted-foreground mb-4">
              I'm constantly working on new projects and exploring new technologies
            </p>
            <Button variant="outline" asChild>
              <a 
                href="https://github.com/hariharan4814" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                <Github className="mr-2 h-4 w-4" />
                View GitHub Profile
              </a>
            </Button>
          </Card>
        </motion.div>
      </div>

      <FloatingButton to="/contact" icon={Mail} text="Contact Me" />
    </div>
  );
};

export default Projects;
