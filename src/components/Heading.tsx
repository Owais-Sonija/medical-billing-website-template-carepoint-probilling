'use client';

import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface HeadingProps {
  children: ReactNode;
  className?: string;
}

const Heading = ({ children, className = '' }: HeadingProps) => {
  return (
    <motion.h2
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className={`text-3xl font-bold ${className}`}
    >
      {children}
    </motion.h2>
  );
};

export default Heading;
