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
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <motion.div
                whileHover={{ y: -8, transition: { duration: 0.3 } }}
                whileTap={{ scale: 0.98 }}
                className="h-full"
              >
                <Card className="group h-full p-6 relative overflow-hidden border border-white/10 bg-white/5 backdrop-blur-md shadow-lg hover:shadow-2xl transition-all duration-300">
                  {/* Premium Gradient Glow Effect */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${achievement.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`} />

                  {/* Subtle Border Gradient */}
                  <div className={`absolute inset-0 border border-transparent group-hover:border-${achievement.color.split(' ')[0].replace('from-', '')}/20 rounded-xl transition-colors duration-300 pointer-events-none`} />

                  <div className="relative z-10 h-full flex flex-col">
                    {/* Icon Container with Glass Effect */}
                    <div className="mb-6 flex justify-start">
                      <motion.div
                        className={`p-4 rounded-2xl bg-gradient-to-br ${achievement.color} shadow-lg relative`}
                        whileHover={{
                          scale: 1.1,
                          rotate: [0, -5, 5, -5, 0],
                        }}
                        transition={{
                          type: "spring",
                          stiffness: 300,
                          damping: 15
                        }}
                      >
                        {/* Inner glow for premium feel */}
                        <div className="absolute inset-0 rounded-2xl bg-white/20 blur-sm" />
                        <achievement.icon className="h-8 w-8 text-white relative z-10" />
                      </motion.div>
                    </div>

                    {/* Content */}
                    <div className="flex-1 space-y-3">
                      <h3 className="text-2xl font-bold group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-primary group-hover:to-purple-600 transition-all">
                        {achievement.title}
                      </h3>

                      <div className="flex items-center gap-3 text-sm font-medium text-muted-foreground bg-secondary/50 w-fit px-3 py-1 rounded-full backdrop-blur-sm border border-border/50">
                        <span className="text-foreground/80">{achievement.organization}</span>
                        <span className="w-1 h-1 rounded-full bg-foreground/20" />
                        <span className="text-primary">{achievement.year}</span>
                      </div>

                      <p className="text-muted-foreground leading-relaxed pt-2">
                        {achievement.description}
                      </p>
                    </div>

                    {/* Premium Badge */}
                    <div className="mt-6 flex items-center justify-between pt-4 border-t border-white/5">
                      <div className="flex items-center gap-2 text-xs font-semibold tracking-wider uppercase text-primary/80">
                        <Award className="h-3 w-3" />
                        <span>Certified</span>
                      </div>
                      <motion.div
                        initial={{ opacity: 0, x: -10 }}
                        whileHover={{ opacity: 1, x: 0 }}
                        className="text-primary"
                      >
                        <span className="text-xs">View Details &rarr;</span>
                      </motion.div>
                    </div>
                  </div>
                </Card>
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          {[
            { number: '10+', label: 'Achievements' },
            { number: '5+', label: 'Leadership Roles' },
            { number: '20+', label: 'Certifications' },
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
