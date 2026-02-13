import { motion } from 'framer-motion';
import { ArrowRight, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const Home = () => {
  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 gradient-blue opacity-20" />

      {/* Floating particles */}
      {[...Array(20)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-2 h-2 bg-primary/30 rounded-full"
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
      <div className="relative z-10 w-full">
        {/* Cover Image Placeholder */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="h-[35vh] md:h-[45vh] w-full relative overflow-hidden"
        >
          <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent z-10" />
          <img
            src="https://images.unsplash.com/photo-1550684848-fac1c5b4e853?q=80&w=2070&auto=format&fit=crop"
            alt="Cover"
            className="w-full h-full object-cover"
          />
        </motion.div>

        <div className="container mx-auto px-4 -mt-24 md:-mt-32 relative z-20 pb-20">
          <div className="flex flex-col items-center text-center space-y-8 max-w-4xl mx-auto">
            {/* Profile Image */}
            <motion.div
              initial={{ scale: 0, rotate: -180 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{ type: 'spring', stiffness: 260, damping: 20 }}
              className="relative inline-block group"
            >
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
                className="absolute -inset-1 rounded-full bg-gradient-to-r from-primary via-purple-500 to-pink-500 blur-md opacity-70 group-hover:opacity-100 transition-opacity"
              />
              <div className="relative w-40 h-40 md:w-52 md:h-52 mx-auto rounded-full overflow-hidden border-4 border-background shadow-2xl">
                <motion.img
                  whileHover={{ scale: 1.1 }}
                  transition={{ type: 'spring', stiffness: 300 }}
                  src="/myimg.png"
                  alt="My Profile"
                  className="w-full h-full object-cover"
                />
              </div>
            </motion.div>

            {/* Text Content */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="space-y-6"
            >
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="flex items-center justify-center gap-2 text-primary"
              >
                <Sparkles className="h-5 w-5 animate-pulse" />
                <span className="text-sm font-bold uppercase tracking-widest">Welcome to my portfolio</span>
                <Sparkles className="h-5 w-5 animate-pulse" />
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tight"
              >
                Hi, I'm <br className="md:hidden" />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-purple-600 to-pink-600 animate-gradient-x">Hariharan B</span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="text-2xl md:text-3xl text-foreground/80 font-light"
              >
                Developer <span className="text-primary mx-2">&</span> Designer
              </motion.p>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed"
              >
                Blending creativity and technology to craft <span className="text-foreground font-medium">impactful digital experiences</span> that leave a lasting impression.
              </motion.p>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
              className="flex flex-wrap gap-6 justify-center pt-4"
            >
              <Link to="/projects">
                <Button size="lg" className="h-12 px-8 text-lg rounded-full shadow-lg shadow-primary/20 hover:shadow-primary/40 transition-all">
                  View My Work
                  <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                </Button>
              </Link>

              <Link to="/about">
                <Button size="lg" variant="outline" className="h-12 px-8 text-lg rounded-full backdrop-blur-sm bg-background/50 border-primary/20 hover:bg-primary/5">
                  About Me
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
