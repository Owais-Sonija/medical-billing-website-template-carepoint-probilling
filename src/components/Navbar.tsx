'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { FiMenu, FiX } from 'react-icons/fi';

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
            <span className={`text-xl font-bold ${
              isScrolled
                ? 'text-primary-600 dark:text-primary-400'
                : 'text-white'
            }`}>
              MedBill Pro
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-4">
            {navLinks.map(({ href, label }) => (
              <Link key={href} href={href} className={linkClasses(href)}>
                {label}
                {pathname === href && (
                  <motion.div
                    className="absolute bottom-0 left-0 h-0.5 w-full bg-primary-500"
                    layoutId="navbar-underline"
                  />
                )}
              </Link>
            ))}
            <Link
              href="/contact"
              className={`px-4 py-2 rounded-lg font-medium transition-all duration-200 
                ${
                  isScrolled
                    ? 'bg-primary-500 text-white hover:bg-primary-600'
                    : 'bg-white text-neutral-900 hover:bg-neutral-100'
                }`}
            >
              Get Started
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 ${
                isScrolled
                  ? 'text-neutral-800 dark:text-neutral-200'
                  : 'text-white'
              }`}
            >
              {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className={mobileMenuClasses}
          >
            <div className="px-4 pt-2 pb-4 space-y-1">
              {navLinks.map(({ href, label }) => (
                <Link
                  key={href}
                  href={href}
                  className={`block px-3 py-2 rounded-lg text-base font-medium ${
                    isScrolled
                      ? 'text-neutral-800 dark:text-neutral-200 hover:bg-neutral-100 dark:hover:bg-neutral-800'
                      : 'text-neutral-100 hover:bg-white/10'
                  } ${pathname === href ? 'bg-primary-500/10 text-primary-600 dark:text-primary-400' : ''}`}
                  onClick={() => setIsOpen(false)}
                >
                  {label}
                </Link>
              ))}
              <Link
                href="/contact"
                className={`block px-3 py-2 rounded-lg text-base font-medium ${
                  isScrolled
                    ? 'bg-primary-500 text-white hover:bg-primary-600'
                    : 'bg-white text-neutral-900 hover:bg-neutral-100'
                }`}
                onClick={() => setIsOpen(false)}
              >
                Get Started
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
