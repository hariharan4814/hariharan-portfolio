import { motion } from 'framer-motion';
import { LucideIcon } from 'lucide-react';
import { Link } from 'react-router-dom';

interface FloatingButtonProps {
  to: string;
  icon: LucideIcon;
  text: string;
}

const FloatingButton = ({ to, icon: Icon, text }: FloatingButtonProps) => {
  return (
    <motion.div
      className="fixed bottom-24 md:bottom-8 right-8 z-30"
      initial={{ scale: 0, rotate: -180 }}
      animate={{ scale: 1, rotate: 0 }}
      transition={{ type: 'spring', stiffness: 260, damping: 20 }}
    >
      <Link to={to}>
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          className="glass px-6 py-4 rounded-full flex items-center gap-3 shadow-lg glow-blue"
        >
          <Icon className="h-5 w-5 text-primary" />
          <span className="font-medium">{text}</span>
        </motion.button>
      </Link>
    </motion.div>
  );
};

export default FloatingButton;
