import React from 'react';

interface BadgeProps {
  children: React.ReactNode;
  variant?: 'pink' | 'green' | 'blue' | 'gray';
  className?: string;
}

export const Badge = ({ children, variant = 'pink', className = '' }: BadgeProps) => {
  const variants = {
    pink: 'bg-pastel-pink bg-opacity-20 text-pastel-pink border border-pastel-pink border-opacity-30',
    green: 'bg-pastel-green bg-opacity-20 text-pastel-green border border-pastel-green border-opacity-30',
    blue: 'bg-pastel-blue bg-opacity-20 text-pastel-blue border border-pastel-blue border-opacity-30',
    gray: 'bg-gray-100 text-gray-700 border border-gray-200',
  };

  return (
    <span className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium ${variants[variant]} ${className}`}>
      {children}
    </span>
  );
};
