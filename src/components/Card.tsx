'use client';

import { ReactNode } from 'react';
import { motion, HTMLMotionProps } from 'framer-motion';

interface CardProps {
  children: ReactNode;
  className?: string;
  hover?: boolean;
}

const Card = ({ children, className = '', hover = true }: CardProps) => {
  const MotionDiv = motion.div;
  const baseStyles = 'bg-white rounded-lg overflow-hidden';
  const hoverStyles = hover
    ? 'transition-all duration-300 hover:shadow-hover transform hover:-translate-y-1'
    : '';

  return (
    <MotionDiv
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className={`${baseStyles} ${hoverStyles} ${className}`}
    >
      {children}
    </MotionDiv>
  );
};

export default Card;
