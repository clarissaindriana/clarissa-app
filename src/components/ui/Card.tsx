import React from 'react';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
}

export const Card = ({ children, className = '', hover = true }: CardProps) => {
  return (
    <div
      className={`
        rounded-2xl bg-white p-6 shadow-sm border border-pastel-gray border-opacity-50
        ${hover ? 'transition-all duration-200 hover:shadow-md hover:border-pastel-pink hover:border-opacity-30' : ''}
        ${className}
      `}
    >
      {children}
    </div>
  );
};
