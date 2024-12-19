'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { FiMenu, FiX } from 'react-icons/fi';
import DarkModeToggle from './DarkModeToggle';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/about', label: 'About Us' },
    { href: '/services', label: 'Services' },
    { href: '/contact', label: 'Contact' },
  ];

  const navbarClasses = `
    fixed w-full z-50 transition-all duration-300
    ${
      isScrolled
        ? 'bg-white/95 dark:bg-neutral-900/95 backdrop-blur-lg border-b border-neutral-200 dark:border-neutral-800'
        : 'bg-neutral-900/50 backdrop-blur-sm'
    }
  `;

  const linkClasses = (href: string) => `
    relative px-3 py-2 text-sm font-medium transition-colors duration-200
    ${
      isScrolled
        ? 'text-neutral-800 dark:text-neutral-200 hover:text-primary-600 dark:hover:text-primary-400'
        : 'text-neutral-100 hover:text-white'
    }
    ${pathname === href ? 'font-semibold' : ''}
  `;

  const mobileMenuClasses = `
    absolute top-full left-0 w-full transform transition-all duration-300 ease-in-out
    ${
      isScrolled
        ? 'bg-white/95 dark:bg-neutral-900/95 border-b border-neutral-200 dark:border-neutral-800'
        : 'bg-neutral-900/95'
    }
    backdrop-blur-lg shadow-lg
  `;

  return (
    <nav className={navbarClasses}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <span className={`text-lg font-bold ${
              isScrolled
                ? 'text-neutral-800 dark:text-neutral-200'
                : 'text-white'
            }`}>
              MedBill Pro
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex md:items-center md:space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={linkClasses(link.href)}
              >
                {link.label}
              </Link>
            ))}
            <DarkModeToggle />
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center space-x-4 md:hidden">
            <DarkModeToggle />
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`p-2 rounded-lg ${
                isScrolled
                  ? 'text-neutral-800 dark:text-neutral-200'
                  : 'text-white'
              }`}
            >
              {isOpen ? <FiX className="h-6 w-6" /> : <FiMenu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className={mobileMenuClasses}
          >
            <div className="px-4 pt-2 pb-3 space-y-1">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`block px-3 py-2 text-base font-medium ${
                    isScrolled
                      ? 'text-neutral-800 dark:text-neutral-200'
                      : 'text-white'
                  }`}
                  onClick={() => setIsOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
