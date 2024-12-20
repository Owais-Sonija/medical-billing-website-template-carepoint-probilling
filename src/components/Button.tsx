'use client';

import { ReactNode } from 'react';
import { motion, HTMLMotionProps } from 'framer-motion';

interface ButtonProps extends HTMLMotionProps<'button'> {
  children: ReactNode;
  className?: string;
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  icon?: ReactNode;
}

const Button = ({
  children,
  className = '',
  variant = 'primary',
  size = 'md',
  icon,
  ...props
}: ButtonProps) => {
  const MotionButton = motion.button;

  const variants = {
    primary: `bg-primary-500 text-white hover:bg-primary-600 
      dark:bg-primary-600 dark:hover:bg-primary-700
      shadow-lg shadow-primary-500/20 hover:shadow-primary-500/30
      dark:shadow-primary-600/20 dark:hover:shadow-primary-600/30`,
    secondary: `bg-neutral-100 text-neutral-900 hover:bg-neutral-200 
      dark:bg-neutral-800 dark:text-neutral-100 dark:hover:bg-neutral-700
      shadow-lg shadow-neutral-200/50 hover:shadow-neutral-300/50
      dark:shadow-neutral-900/30 dark:hover:shadow-neutral-900/40`,
    outline: `border-2 border-white text-white hover:bg-white/10 
      dark:border-neutral-400 dark:text-neutral-100 dark:hover:bg-neutral-800/50
      backdrop-blur-sm`,
  };

  const sizes = {
    sm: 'px-4 py-2 text-sm space-x-2',
    md: 'px-6 py-3 text-base space-x-3',
    lg: 'px-8 py-4 text-lg space-x-4',
  };

  return (
    <MotionButton
      {...props}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className={`
        ${variants[variant]}
        ${sizes[size]}
        inline-flex items-center justify-center
        rounded-lg font-semibold
        transition-all duration-300 ease-in-out
        focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2
        dark:focus:ring-primary-400 dark:focus:ring-offset-neutral-900
        disabled:opacity-50 disabled:cursor-not-allowed
        ${className}
      `}
    >
      {icon && <span className="inline-flex shrink-0">{icon}</span>}
      <span>{children}</span>
    </MotionButton>
  );
};

export default Button;
