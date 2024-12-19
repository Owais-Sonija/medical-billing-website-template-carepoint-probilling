import { InputHTMLAttributes, forwardRef } from 'react';
import { motion } from 'framer-motion';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
}

const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ label, error, className = '', ...props }, ref) => {
    const baseStyles = `
      w-full px-4 py-2 rounded-md border transition-all duration-200
      focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent
    `;

    const stateStyles = error
      ? 'border-red-300 bg-red-50'
      : 'border-neutral-300 bg-white hover:border-primary-300';

    return (
      <div className="space-y-1">
        {label && (
          <label className="block text-sm font-medium text-neutral-700">
            {label}
          </label>
        )}
        <motion.div whileTap={{ scale: 0.995 }}>
          <input
            ref={ref}
            className={`${baseStyles} ${stateStyles} ${className}`}
            {...props}
          />
        </motion.div>
        {error && (
          <motion.p
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-sm text-red-600"
          >
            {error}
          </motion.p>
        )}
      </div>
    );
  }
);

Input.displayName = 'Input';

export default Input;
