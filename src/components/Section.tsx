'use client';

import { ReactNode } from 'react';
import { motion, HTMLMotionProps } from 'framer-motion';

interface SectionProps {
  children: ReactNode;
  className?: string;
  fullWidth?: boolean;
  color?: 'white' | 'light' | 'primary' | 'dark';
  id?: string;
}

const Section = ({
  children,
  className = '',
  fullWidth = false,
  color = 'white',
  id,
}: SectionProps) => {
  const MotionSection = motion.section;

  const colorClasses = {
    white: 'bg-white dark:bg-neutral-900',
    light: 'bg-neutral-50 dark:bg-neutral-800',
    primary: 'bg-primary-900 text-white dark:bg-primary-800 dark:text-neutral-100',
    dark: 'bg-neutral-900 text-white dark:bg-neutral-950 dark:text-neutral-100',
  };

  return (
    <MotionSection
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      id={id}
      className={`py-16 md:py-24 ${colorClasses[color]} ${className}`}
    >
      <div className={`${fullWidth ? 'w-full' : 'max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'}`}>
        {children}
      </div>
    </MotionSection>
  );
};

export default Section;
