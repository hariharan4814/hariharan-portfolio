import { motion } from 'framer-motion';
import { Trophy, Award, Users, GraduationCap, Star, Globe } from 'lucide-react';
import { Card } from '@/components/ui/card';
import FloatingButton from '@/components/FloatingButton';
import { Mail } from 'lucide-react';

const Achievements = () => {
  const achievements = [
    {
      title: 'Best Outgoing Student',
      organization: 'SKACAS',
      year: '2025',
      description: 'Awarded for outstanding academic performance and overall contribution to college',
      icon: Trophy,
      color: 'from-yellow-500 to-orange-500',
    },
    {
      title: 'Best Creator Award',
      organization: 'SKACAS',
      year: '2024',
      description: 'Recognized for exceptional creativity in design and content creation',
      icon: Star,
      color: 'from-purple-500 to-pink-500',
    },
    {
      title: 'Head of SIRIPPOM SINDHIPPOM Club',
      organization: 'SKACAS',
      year: '2023–25',
      description: 'Led the club activities and organized various cultural and creative events',
      icon: Users,
      color: 'from-blue-500 to-cyan-500',
    },
    {
      title: 'Networking Bootcamp',
      organization: 'Internet Society (ISOC)',
      year: '2024',
      description: '5 Days Live Bootcamp on Designing and Deploying Computer Networks',
      icon: Globe,
      color: 'from-green-500 to-emerald-500',
    },
    {
      title: 'Student Exchange Program',
      organization: 'KES Shroff College, Mumbai',
      year: '2024',
      description: '7 Days exchange program experiencing diverse educational culture',
      icon: GraduationCap,
      color: 'from-indigo-500 to-purple-500',
    },
    {
      title: 'Google UX Design',
      organization: 'Coursera',
      year: '2024',
      description: 'Professional Certificate in User Experience Design',
      icon: Award,
      color: 'from-red-500 to-rose-500',
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
            Achievements & <span className="text-gradient">Recognition</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Milestones that mark my journey of growth and learning
          </p>
        </motion.div>

        {/* Achievements Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {achievements.map((achievement, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="group h-full p-6 glass hover:glow-blue transition-all duration-300 overflow-hidden relative">
                {/* Animated gradient background */}
                <motion.div
                  className={`absolute inset-0 bg-gradient-to-br ${achievement.color} opacity-0 group-hover:opacity-10`}
                  initial={false}
                  whileHover={{ opacity: 0.1 }}
                  transition={{ duration: 0.3 }}
                />

                <div className="relative z-10 h-full flex flex-col">
                  {/* Icon with gradient */}
                  <motion.div
                    whileHover={{ rotate: 360, scale: 1.1 }}
                    transition={{ duration: 0.6 }}
                    className="mb-4"
                  >
                    <div className={`inline-flex p-4 rounded-2xl bg-gradient-to-br ${achievement.color}`}>
                      <achievement.icon className="h-8 w-8 text-white" />
                    </div>
                  </motion.div>

                  {/* Content */}
                  <div className="flex-1">
                    <h3 className="text-xl font-bold mb-2 group-hover:text-gradient transition-all">
                      {achievement.title}
                    </h3>
                    <div className="flex items-center gap-2 mb-3 text-sm text-muted-foreground">
                      <span>{achievement.organization}</span>
                      <span>•</span>
                      <span>{achievement.year}</span>
                    </div>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {achievement.description}
                    </p>
                  </div>

                  {/* Certificate Badge */}
                  <div className="mt-4 pt-4 border-t border-border/50">
                    <span className="text-xs font-medium text-primary flex items-center gap-2">
                      <Award className="h-4 w-4" />
                      Certified
                    </span>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6"
        >
          {[
            { number: '6+', label: 'Achievements' },
            { number: '2', label: 'Leadership Roles' },
            { number: '3+', label: 'Certifications' },
            { number: '86%', label: 'Academic Score' },
          ].map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="p-6 text-center glass">
                <motion.div
                  initial={{ scale: 1 }}
                  whileHover={{ scale: 1.1 }}
                  className="text-4xl font-bold text-gradient mb-2"
                >
                  {stat.number}
                </motion.div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>

      <FloatingButton to="/contact" icon={Mail} text="Get in Touch" />
    </div>
  );
};

export default Achievements;
