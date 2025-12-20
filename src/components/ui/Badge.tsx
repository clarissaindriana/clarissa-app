import React from 'react';

interface BadgeProps {
  children: React.ReactNode;
  variant?: 'pink' | 'green' | 'blue' | 'gray';
  className?: string;
}

export const Badge = ({ children, variant = 'gray', className = '' }: BadgeProps) => {
  const variants = {
    pink: 'bg-gray-100/60 text-gray-700 border border-gray-200/50 hover:border-pastel-pink/30 hover:bg-gray-100/80 hover:shadow-sm',
    green: 'bg-gray-100/60 text-gray-700 border border-gray-200/50 hover:border-pastel-green/30 hover:bg-gray-100/80 hover:shadow-sm',
    blue: 'bg-gray-100/60 text-gray-700 border border-gray-200/50 hover:border-pastel-blue/30 hover:bg-gray-100/80 hover:shadow-sm',
    gray: 'bg-gray-100/60 text-gray-700 border border-gray-200/50 hover:bg-gray-100/80 hover:shadow-sm',
  };

  return (
    <span className={`inline-flex items-center px-3 py-1.5 rounded-full text-xs font-semibold ${variants[variant]} transition-all duration-200 cursor-default ${className}`}>
      {children}
    </span>
  );
};
