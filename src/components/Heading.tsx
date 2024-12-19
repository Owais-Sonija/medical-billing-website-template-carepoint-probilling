'use client';

import { ReactNode } from 'react';
import { motion, HTMLMotionProps } from 'framer-motion';

interface HeadingProps {
  children: ReactNode;
  level?: 1 | 2 | 3 | 4 | 5 | 6;
  className?: string;
  color?: 'default' | 'light' | 'primary' | 'dark';
  align?: 'left' | 'center' | 'right';
  withAccent?: boolean;
}

const Heading = ({
  children,
  level = 2,
  className = '',
  color = 'default',
  align = 'left',
  withAccent = false,
}: HeadingProps) => {
  const MotionHeading = motion[`h${level}`];
  const MotionDiv = motion.div;

  const colorClasses = {
    default: 'text-neutral-900',
    light: 'text-white',
    primary: 'text-primary-600',
    dark: 'text-neutral-800',
  };

  const alignClasses = {
    left: 'text-left',
    center: 'text-center',
    right: 'text-right',
  };

  const sizeClasses = {
    1: 'text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight',
    2: 'text-3xl md:text-4xl font-bold',
    3: 'text-2xl md:text-3xl font-semibold',
    4: 'text-xl md:text-2xl font-semibold',
    5: 'text-lg md:text-xl font-medium',
    6: 'text-base md:text-lg font-medium',
  };

  return (
    <div className={`${alignClasses[align]} ${className}`}>
      <MotionHeading
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className={`${colorClasses[color]} ${sizeClasses[level]}`}
      >
        {children}
      </MotionHeading>
      {withAccent && (
        <MotionDiv
          initial={{ width: 0 }}
          whileInView={{ width: align === 'center' ? '80px' : '60px' }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className={`h-1 bg-primary-500 mt-4 ${
            align === 'center' ? 'mx-auto' : align === 'right' ? 'ml-auto' : ''
          }`}
        />
      )}
    </div>
  );
};

export default Heading;
