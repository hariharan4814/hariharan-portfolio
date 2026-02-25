import { motion } from 'framer-motion';
import { ArrowRight, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const Home = () => {
  return (
    <div className="min-h-screen relative overflow-hidden bg-background selection:bg-primary/30">
      {/* Elegant minimalist background */}
      <div className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80" aria-hidden="true">
        <div className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-primary/20 to-secondary/20 opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]" style={{ clipPath: 'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)' }}></div>
      </div>

      {/* Floating particles styled with the new theme colors */}
      {[...Array(20)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-2 h-2 bg-primary/40 rounded-full shadow-[0_0_10px_rgba(var(--primary),0.5)]"
          initial={{
            x: Math.random() * window.innerWidth,
            y: Math.random() * window.innerHeight,
          }}
          animate={{
            y: [null, Math.random() * window.innerHeight],
            x: [null, Math.random() * window.innerWidth],
          }}
          transition={{
            duration: Math.random() * 10 + 20,
            repeat: Infinity,
            ease: 'linear',
          }}
        />
      ))}

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
              <div className="absolute -inset-0.5 rounded-full bg-gradient-to-tr from-primary to-accent opacity-30 group-hover:opacity-60 transition duration-500 blur-md"></div>
              <div className="relative w-44 h-44 md:w-56 md:h-56 mx-auto rounded-full p-1 bg-background">
                <div className="w-full h-full rounded-full overflow-hidden bg-secondary/20">
                  <motion.img
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.4 }}
                    src="/myimg.png"
                    alt="My Profile"
                    className="w-full h-full object-cover grayscale-[30%] group-hover:grayscale-0 transition-all duration-500"
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
                  className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-purple-500 to-accent"
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
