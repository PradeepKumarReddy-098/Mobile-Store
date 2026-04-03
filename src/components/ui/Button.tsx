'use client';

import { ButtonHTMLAttributes, forwardRef } from 'react';
import clsx from 'clsx';
import { twMerge } from 'tailwind-merge';
import { motion, HTMLMotionProps } from 'framer-motion';

export interface ButtonProps extends Omit<HTMLMotionProps<"button">, 'ref'> {
  variant?: 'primary' | 'secondary' | 'outline' | 'slate';
  size?: 'sm' | 'md' | 'lg';
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = 'primary', size = 'md', children, ...props }, ref) => {
    
    const baseStyles = 'inline-flex items-center justify-center font-medium transition-all focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none rounded-full';
    
    const variants = {
      primary: 'bg-[var(--color-primary)] text-white hover:bg-[var(--color-primary-hover)] focus:ring-[var(--color-primary)] shadow-md shadow-blue-500/20',
      secondary: 'bg-[var(--color-accent)] text-white hover:bg-[var(--color-accent-hover)] focus:ring-[var(--color-accent)] shadow-md shadow-rose-500/20',
      slate: 'bg-slate-800 text-white hover:bg-slate-700 focus:ring-slate-800',
      outline: 'border-2 border-gray-200 text-gray-700 hover:bg-gray-50 focus:ring-gray-200',
    };
    
    const sizes = {
      sm: 'px-4 py-2 text-sm',
      md: 'px-6 py-3 text-base',
      lg: 'px-8 py-4 text-lg font-semibold',
    };

    return (
      <motion.button
        ref={ref}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        className={twMerge(clsx(baseStyles, variants[variant], sizes[size], className))}
        {...props}
      >
        {children}
      </motion.button>
    );
  }
);

Button.displayName = 'Button';
export { Button };
