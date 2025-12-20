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
        rounded-lg bg-white p-6 
        border border-gray-300 shadow-sm
        ${hover ? 'transition-all duration-300 hover:shadow-md hover:border-gray-400' : ''}
        ${className}
      `}
    >
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
};
