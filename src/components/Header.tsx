import { NavLink } from 'react-router-dom';
import { Moon, Sun, Home, User, Code, Award, Mail } from 'lucide-react';
import { useTheme } from '@/contexts/ThemeContext';
import { motion } from 'framer-motion';
import { Button } from './ui/button';

const Header = () => {
  const { theme, toggleTheme } = useTheme();

  const navItems = [
    { name: 'Home', path: '/', icon: Home },
    { name: 'About', path: '/about', icon: User },
    { name: 'Projects', path: '/projects', icon: Code },
    { name: 'Achievements', path: '/achievements', icon: Award },
    { name: 'Contact', path: '/contact', icon: Mail },
  ];

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className="fixed top-0 left-0 right-0 z-40 glass border-b border-border/50"
      >
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <NavLink to="/" className="text-xl md:text-2xl font-bold z-50">
              <span className="text-gradient">HB</span>
              <span className="text-muted-foreground hidden sm:inline"> | Portfolio</span>
            </NavLink>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-8">
              {navItems.map((item) => (
                <NavLink
                  key={item.path}
                  to={item.path}
                  className={({ isActive }) =>
                    `relative text-sm font-medium transition-colors hover:text-primary ${isActive ? 'text-primary' : 'text-foreground/80'
                    }`
                  }
                >
                  {({ isActive }) => (
                    <>
                      {item.name}
                      {isActive && (
                        <motion.div
                          layoutId="activeNav"
                          className="absolute -bottom-1 left-0 right-0 h-0.5 bg-primary"
                          transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                        />
                      )}
                    </>
                  )}
                </NavLink>
              ))}
            </nav>

            {/* Right side buttons */}
            <div className="hidden md:flex items-center gap-2">
              {/* Theme Toggle */}
              <Button
                variant="ghost"
                size="icon"
                onClick={toggleTheme}
                className="rounded-full"
              >
                {theme === 'light' ? (
                  <Moon className="h-5 w-5" />
                ) : (
                  <Sun className="h-5 w-5" />
                )}
              </Button>
            </div>
          </div>
        </div>
      </motion.header>

      {/* Mobile Bottom Navigation */}
      <nav className="md:hidden fixed bottom-0 left-0 right-0 z-50 glass border-t border-border/50 pb-safe">
        <div className="flex justify-around items-center h-16 px-1">
          {navItems.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              className={({ isActive }) =>
                `flex flex-col items-center justify-center w-full h-full space-y-1 active:scale-95 transition-transform ${isActive ? 'text-primary' : 'text-muted-foreground hover:text-foreground'
                }`
              }
            >
              {({ isActive }) => (
                <>
                  <div className="relative">
                    <item.icon className={`h-5 w-5 ${isActive ? 'stroke-[2.5px]' : 'stroke-2'}`} />
                    {isActive && (
                      <motion.div
                        layoutId="mobileNavIconActive"
                        className="absolute inset-0 bg-primary/10 blur-lg rounded-full"
                        transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                      />
                    )}
                  </div>
                  <span className={`text-[10px] ${isActive ? 'font-bold' : 'font-medium'}`}>
                    {item.name}
                  </span>
                  {isActive && (
                    <motion.div
                      layoutId="mobileNavActive"
                      className="absolute top-0 w-12 h-0.5 bg-primary rounded-b-full opacity-50"
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                </>
              )}
            </NavLink>
          ))}


        </div>
      </nav>
    </>
  );
};

export default Header;
