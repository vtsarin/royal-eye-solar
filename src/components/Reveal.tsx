import { motion } from 'framer-motion';
import type { ReactNode } from 'react';
import { entrance, staggerContainer, viewportOnce } from '../lib/motion';

interface Props {
  children: ReactNode;
  className?: string;
  as?: 'div' | 'li' | 'section';
  delay?: number;
}

export function Reveal({ children, className, delay = 0 }: Props) {
  return (
    <motion.div
      className={className}
      variants={entrance}
      initial="hidden"
      whileInView="visible"
      viewport={viewportOnce}
      transition={delay ? { delay } : undefined}
    >
      {children}
    </motion.div>
  );
}

interface GroupProps {
  children: ReactNode;
  className?: string;
  stagger?: number;
}

/** Parent for staggered groups. Keep groups to six children or fewer. */
export function RevealGroup({ children, className, stagger = 0.07 }: GroupProps) {
  return (
    <motion.div
      className={className}
      variants={staggerContainer(stagger)}
      initial="hidden"
      whileInView="visible"
      viewport={viewportOnce}
    >
      {children}
    </motion.div>
  );
}

export function RevealItem({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <motion.div className={className} variants={entrance}>
      {children}
    </motion.div>
  );
}
