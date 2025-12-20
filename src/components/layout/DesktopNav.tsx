import React from 'react';
import Link from 'next/link';
import { NavItem } from './NavItem';

interface DesktopNavProps {
  pathname: string;
  navItems: Array<{ href: string; label: string; icon: string }>;
  onMenuClick?: () => void;
}

export const DesktopNav = ({ pathname, navItems, onMenuClick }: DesktopNavProps) => {
  return (
    <>
      {/* Floating Navigation - Desktop & Mobile */}
      <nav className="fixed top-4 md:top-6 left-1/2 -translate-x-1/2 z-40 w-full max-w-fit px-4">
        {/* Desktop Version - Centered Pill */}
        <div className="hidden md:block">
          <div className="bg-white/80 backdrop-blur-md border border-gray-200 rounded-full px-6 py-3 shadow-sm hover:shadow-md transition-shadow duration-300 flex items-center gap-4">
            {/* Logo */}
            <Link
              href="/"
              className="text-lg font-bold text-gray-900 hover:text-gray-600 transition-colors"
            >
              C.
            </Link>

            {/* Divider */}
            <div className="w-px h-5 bg-gray-300"></div>

            {/* Nav Items */}
            <div className="flex items-center gap-1">
              {navItems.map((item) => (
                <NavItem
                  key={item.href}
                  href={item.href}
                  label={item.label}
                  icon={item.icon}
                  isActive={pathname === item.href}
                  variant="desktop"
                />
              ))}
            </div>
          </div>
        </div>

        {/* Mobile Version - Compact Floating Pill */}
        <div className="md:hidden">
          <div className="bg-white/90 backdrop-blur-md border border-gray-200 rounded-full px-4 py-2 shadow-md hover:shadow-lg transition-shadow duration-300 flex items-center gap-3">
            {/* Logo */}
            <Link
              href="/"
              className="text-sm font-bold text-gray-900 hover:text-gray-600 transition-colors whitespace-nowrap"
            >
              C.
            </Link>

            {/* Divider */}
            <div className="w-px h-4 bg-gray-300"></div>

            {/* Nav Icons Only */}
            <div className="flex items-center gap-2">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`p-2 rounded-lg transition-all duration-200 flex items-center justify-center ${
                    pathname === item.href
                      ? 'bg-gray-900 text-white'
                      : 'text-gray-600 hover:text-gray-900 hover:bg-gray-100'
                  }`}
                  title={item.label}
                >
                  <span className="text-base">{item.icon}</span>
                </Link>
              ))}
            </div>

            {/* Menu Button */}
            <button
              onClick={onMenuClick}
              className="p-1.5 rounded-lg text-gray-700 hover:bg-gray-100 transition-colors"
              aria-label="Toggle menu"
            >
              <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </nav>

      {/* Padding for mobile navbar */}
      <div className="h-12 md:h-0"></div>
    </>
  );
};
