'use client';

import { ReactNode } from 'react';
import { motion, HTMLMotionProps } from 'framer-motion';

interface SectionProps {
  children: ReactNode;
  className?: string;
  fullWidth?: boolean;
  color?: 'white' | 'light' | 'primary' | 'dark';
}

const Section = ({
  children,
  className = '',
  fullWidth = false,
  color = 'white',
}: SectionProps) => {
  const MotionSection = motion.section;

  const colorClasses = {
    white: 'bg-white',
    light: 'bg-neutral-50',
    primary: 'bg-primary-900 text-white',
    dark: 'bg-neutral-900 text-white',
  };

  return (
    <MotionSection
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className={`py-16 md:py-24 ${colorClasses[color]} ${className}`}
    >
      <div className={`${fullWidth ? 'w-full' : 'max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'}`}>
        {children}
      </div>
    </MotionSection>
  );
};

export default Section;
