import React from 'react';
import Link from 'next/link';

interface MobileNavProps {
  pathname: string;
  navItems: Array<{ href: string; label: string; icon: string }>;
  isOpen: boolean;
  onClose: () => void;
}

export const MobileNav = ({ pathname, navItems, isOpen, onClose }: MobileNavProps) => {
  return (
    <>
      {/* Sliding Mobile Navigation */}
      <nav
        className={`fixed top-0 left-0 right-0 z-40 md:hidden bg-white border-b border-gray-200 transition-all duration-300 ease-in-out ${
          isOpen ? 'translate-y-0 shadow-lg' : '-translate-y-full'
        }`}
      >
        <div className="px-4 py-3">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-sm font-semibold text-gray-900">Menu</h2>
            <button
              onClick={onClose}
              className="p-1 rounded-lg text-gray-600 hover:bg-gray-100 transition-colors"
            >
              <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
          <div className="grid grid-cols-3 gap-2">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={onClose}
                className={`flex flex-col items-center justify-center gap-1 px-3 py-3 rounded-lg transition-all duration-200 text-xs font-medium relative ${
                  pathname === item.href
                    ? 'text-gray-900'
                    : 'text-gray-500 hover:text-gray-700 hover:bg-gray-50'
                }`}
                title={item.label}
              >
                <span className="text-lg">{item.icon}</span>
                {pathname === item.href && (
                  <span className="absolute bottom-0.5 w-5 h-0.5 bg-gray-900 rounded-full"></span>
                )}
              </Link>
            ))}
          </div>
        </div>
      </nav>

      {/* Overlay backdrop */}
      {isOpen && (
        <div
          className="fixed inset-0 z-30 bg-black/20 md:hidden"
          onClick={onClose}
        />
      )}
    </>
  );
};
