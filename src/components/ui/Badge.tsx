import React from 'react';

interface BadgeProps {
  children: React.ReactNode;
  variant?: 'pink' | 'green' | 'blue' | 'purple' | 'peach';
}

export const Badge = ({ children, variant = 'pink' }: BadgeProps) => {
  const variants = {
    pink: 'bg-pastel-pink bg-opacity-20 text-pastel-pink border border-pastel-pink border-opacity-30',
    green: 'bg-pastel-green_light bg-opacity-20 text-pastel-green border border-pastel-green border-opacity-30',
    blue: 'bg-pastel-blue bg-opacity-20 text-pastel-blue border border-pastel-blue border-opacity-30',
    purple: 'bg-pastel-purple bg-opacity-20 text-pastel-purple border border-pastel-purple border-opacity-30',
    peach: 'bg-pastel-peach bg-opacity-20 text-pastel-peach border border-pastel-peach border-opacity-30',
  };

  return (
    <span className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium ${variants[variant]}`}>
      {children}
    </span>
  );
};
