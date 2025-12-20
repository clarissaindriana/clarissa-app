import React from 'react';
import Link from 'next/link';

interface NavItemProps {
  href: string;
  label: string;
  icon: string;
  isActive: boolean;
  variant?: 'desktop' | 'mobile';
  onClick?: () => void;
}

export const NavItem = ({
  href,
  label,
  icon,
  isActive,
  variant = 'desktop',
  onClick,
}: NavItemProps) => {
  if (variant === 'mobile') {
    return (
      <Link
        href={href}
        onClick={onClick}
        className={`flex flex-col items-center justify-center gap-1 px-3 py-2 rounded-lg transition-all duration-200 text-xs font-medium relative ${
          isActive
            ? 'text-gray-900'
            : 'text-gray-500 hover:text-gray-700 hover:bg-gray-50'
        }`}
        title={label}
      >
        <span className="text-lg">{icon}</span>
        {isActive && <span className="absolute bottom-0 w-6 h-0.5 bg-gray-900 rounded-full"></span>}
        <span className="hidden">{label}</span>
      </Link>
    );
  }

  return (
    <Link
      href={href}
      onClick={onClick}
      className={`px-3 py-2 text-sm font-medium rounded-lg transition-all duration-200 flex items-center gap-2 whitespace-nowrap relative ${
        isActive
          ? 'text-gray-900'
          : 'text-gray-600 hover:text-gray-900 hover:bg-gray-100'
      }`}
      title={label}
    >
      <span>{icon}</span>
      <span className="hidden lg:inline">{label}</span>
      {isActive && <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-gray-900 rounded-full mx-auto w-2/3"></span>}
    </Link>
  );
};
