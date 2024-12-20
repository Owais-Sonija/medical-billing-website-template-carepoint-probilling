'use client';

import { ReactNode } from 'react';
import { motion, HTMLMotionProps } from 'framer-motion';

interface CardProps extends HTMLMotionProps<'div'> {
  children: ReactNode;
  className?: string;
}

const Card = ({ children, className = '', ...props }: CardProps) => {
  const MotionDiv = motion.div;

  return (
    <MotionDiv
      {...props}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className={`bg-white dark:bg-neutral-800/80 backdrop-blur-sm rounded-xl 
        shadow-lg shadow-neutral-200/50 dark:shadow-neutral-900/30 
        transition-all duration-300 ease-in-out
        hover:shadow-xl hover:shadow-neutral-300/50 dark:hover:shadow-neutral-900/40 
        hover:-translate-y-1 ${className}`}
    >
      {children}
    </MotionDiv>
  );
};

export default Card;
