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
      className={`bg-white dark:bg-neutral-800 rounded-xl shadow-lg transition-all duration-200 
        hover:shadow-xl dark:shadow-neutral-900/30 ${className}`}
    >
      {children}
    </MotionDiv>
  );
};

export default Card;
