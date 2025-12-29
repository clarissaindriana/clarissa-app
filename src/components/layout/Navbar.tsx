'use client';

import React, { useState } from 'react';
import { usePathname } from 'next/navigation';
import { DesktopNav } from './DesktopNav';
import { MobileNav } from './MobileNav';

export const Navbar = () => {
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navItems = [
    { href: '/', label: 'Home', icon: '🏠' },
    { href: '/about', label: 'About', icon: '👤' },
    { href: '/projects', label: 'Projects', icon: '🎨' },
    { href: '/contact', label: 'Contact', icon: '✉️' },
  ];

  return (
    <>
      {/* Desktop Navigation */}
      <DesktopNav
        pathname={pathname}
        navItems={navItems}
        onMenuClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
      />

      {/* Mobile Navigation */}
      <MobileNav
        pathname={pathname}
        navItems={navItems}
        isOpen={isMobileMenuOpen}
        onClose={() => setIsMobileMenuOpen(false)}
      />
    </>
  );
};