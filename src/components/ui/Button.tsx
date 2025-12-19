import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
}

export const Button = ({
  variant = 'primary',
  size = 'md',
  className = '',
  children,
  ...props
}: ButtonProps) => {
  const baseClasses = 'font-medium rounded-xl transition-all duration-200 ease-in-out';

  const variants = {
    primary: 'bg-pastel-pink text-gray-800 hover:bg-opacity-90 shadow-sm hover:shadow-md',
    secondary: 'bg-pastel-green_light text-gray-800 hover:bg-opacity-90 shadow-sm hover:shadow-md',
    outline: 'border-2 border-pastel-pink text-pastel-pink hover:bg-pastel-pink hover:text-gray-800',
    ghost: 'text-pastel-green hover:bg-pastel-gray hover:bg-opacity-50',
  };

  const sizes = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg',
  };

  return (
    <button
      className={`${baseClasses} ${variants[variant]} ${sizes[size]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};
