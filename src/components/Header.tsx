import { NavLink } from 'react-router-dom';
import { Moon, Sun, Home, User, Code, Award, Mail, Menu, X } from 'lucide-react';
import { useTheme } from '@/contexts/ThemeContext';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from './ui/button';
import { useState, useEffect } from 'react';

const Header = () => {
  const { theme, toggleTheme } = useTheme();
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

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
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'py-4' : 'py-6'
          }`}
      >
        <div className="container mx-auto px-4">
          <nav className={`mx-auto rounded-full border border-border shadow-lg backdrop-blur-md transition-all duration-300 ${scrolled ? 'bg-background/80 supports-[backdrop-filter]:bg-background/60 shadow-xl' : 'bg-transparent border-transparent shadow-none'
            } max-w-5xl px-6 py-3 flex items-center justify-between`}>

            {/* Logo */}
            <NavLink to="/" className="text-xl font-bold tracking-tighter flex items-center gap-2 group">
              <div className="h-8 w-8 rounded-lg bg-primary flex items-center justify-center text-primary-foreground group-hover:rotate-12 transition-transform shadow-md">
                HB
              </div>
              <span className={`hidden sm:block ${scrolled ? 'opacity-100' : 'opacity-0'} transition-opacity duration-300`}>Portfolio</span>
            </NavLink>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-1">
              {navItems.map((item) => (
                <NavLink
                  key={item.path}
                  to={item.path}
                  className={({ isActive }) =>
                    `relative px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${isActive
                      ? 'text-primary bg-primary/10'
                      : 'text-muted-foreground hover:text-foreground hover:bg-muted'
                    }`
                  }
                >
                  {item.name}
                </NavLink>
              ))}
            </div>

            {/* Right Side Actions */}
            <div className="flex items-center gap-2">
              <Button
                variant="ghost"
                size="icon"
                onClick={toggleTheme}
                className="rounded-full hover:bg-primary/10 hover:text-primary transition-colors"
              >
                {theme === 'light' ? (
                  <Moon className="h-5 w-5" />
                ) : (
                  <Sun className="h-5 w-5" />
                )}
              </Button>
            </div>
          </nav>
        </div>
      </motion.header>

      {/* Mobile Bottom Navigation */}
      <nav className="md:hidden fixed bottom-6 left-1/2 -translate-x-1/2 z-50 w-[95%] max-w-[400px] rounded-2xl glass border-border shadow-2xl p-2 flex justify-between items-center bg-background/80 backdrop-blur-xl">
        {navItems.map((item) => (
          <NavLink
            key={item.path}
            to={item.path}
            className={({ isActive }) =>
              `flex flex-col items-center justify-center w-full py-1 rounded-xl transition-transform duration-100 active:scale-90 ${isActive ? 'text-primary' : 'text-muted-foreground hover:text-foreground'
              }`
            }
          >
            {({ isActive }) => (
              <>
                <div className={`relative p-1.5 rounded-full transition-all duration-300 ${isActive ? 'bg-primary/10 -translate-y-0.5' : ''}`}>
                  <item.icon className={`h-5 w-5 transition-all duration-300 ${isActive ? 'stroke-[2.5px]' : ''}`} />
                </div>
                <span className={`text-[10px] font-medium transition-all duration-300 ${isActive ? 'opacity-100 font-bold' : 'opacity-70'}`}>
                  {item.name}
                </span>
              </>
            )}
          </NavLink>
        ))}
      </nav>
    </>
  );
};

export default Header;
