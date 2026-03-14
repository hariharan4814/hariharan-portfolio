import { motion } from 'framer-motion';
import { ArrowRight, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const Home = () => {
  return (
    <div className="min-h-screen relative overflow-hidden bg-background selection:bg-primary/30">


      {/* Content */}
      <div className="relative z-10 w-full min-h-screen flex flex-col items-center justify-center pt-20">

        <div className="container mx-auto px-4 relative z-20">
          <div className="flex flex-col items-center text-center space-y-10 max-w-4xl mx-auto">
            {/* Profile Image - Elegant presentation */}
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="relative inline-block group"
            >
              <div className="absolute -inset-0.5 rounded-2xl bg-gradient-to-tr from-primary to-accent opacity-30 group-hover:opacity-60 transition duration-500 blur-md"></div>
              <div className="relative w-48 h-64 md:w-64 md:h-80 mx-auto rounded-2xl p-1 bg-background">
                <div className="w-full h-full rounded-2xl overflow-hidden bg-secondary/20">
                  <motion.img
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.4 }}
                    src="/myimg.png"
                    alt="My Profile"
                    className="w-full h-full object-cover object-top transition-all duration-500"
                  />
                </div>
              </div>
            </motion.div>

            {/* Text Content */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="space-y-6"
            >
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
                className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-secondary/50 border border-border text-primary text-xs font-semibold uppercase tracking-widest backdrop-blur-sm"
              >
                <span>Welcome to my portfolio</span>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.6 }}
                className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tight flex flex-col gap-2"
              >
                <span className="text-foreground">Hi, I'm</span>
                <motion.span
                  className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-blue-400 to-accent"
                  animate={{ backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"] }}
                  transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
                  style={{ backgroundSize: "200% auto" }}
                >
                  Hariharan B
                </motion.span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6 }}
                className="text-xl md:text-2xl text-muted-foreground font-medium tracking-wide"
              >
                Developer <span className="text-primary/70 mx-2 font-light">|</span> Designer
              </motion.p>

              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.7 }}
                className="text-base md:text-lg text-muted-foreground/80 max-w-2xl mx-auto leading-relaxed"
              >
                Blending creativity and technology to craft <span className="text-foreground font-medium">impactful digital experiences</span> that leave a lasting impression.
              </motion.p>
            </motion.div>

            {/* CTA Buttons - Professional & Creative */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              className="flex flex-col sm:flex-row gap-4 justify-center pt-8"
            >
              <Link to="/projects">
                <Button size="lg" className="group h-14 px-8 text-base font-semibold rounded-full shadow-md hover:shadow-xl hover:shadow-primary/20 transition-all duration-300 bg-primary hover:bg-primary/90 text-primary-foreground">
                  <span>View My Work</span>
                  <ArrowRight className="ml-2 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
                </Button>
              </Link>

              <Link to="/about">
                <Button size="lg" variant="outline" className="group h-14 px-8 text-base font-semibold rounded-full backdrop-blur-sm bg-background/50 border-border hover:border-primary/50 hover:bg-secondary/50 transition-all duration-300">
                  <span className="text-foreground group-hover:text-primary transition-colors">About Me</span>
                </Button>
              </Link>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
