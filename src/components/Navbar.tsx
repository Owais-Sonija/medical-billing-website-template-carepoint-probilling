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
    ${isScrolled ? 'bg-white shadow-soft py-2' : 'bg-transparent py-4'}
  `;

  const linkClasses = (href: string) => `
    relative px-3 py-2 text-sm font-medium transition-colors duration-200
    ${isScrolled ? 'text-neutral-700 hover:text-primary-600' : 'text-white hover:text-primary-200'}
    ${pathname === href ? 'font-semibold' : ''}
  `;

  return (
    <nav className={navbarClasses}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <span className={`text-xl font-bold ${isScrolled ? 'text-primary-600' : 'text-white'}`}>
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
              className={`
                ml-4 px-4 py-2 rounded-md font-medium transition-all duration-200
                ${isScrolled
                  ? 'bg-primary-500 text-white hover:bg-primary-600'
                  : 'bg-white text-primary-600 hover:bg-primary-50'
                }
              `}
            >
              Get Started
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`p-2 rounded-md ${isScrolled ? 'text-neutral-700' : 'text-white'}`}
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
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-t"
          >
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navLinks.map(({ href, label }) => (
                <Link
                  key={href}
                  href={href}
                  className={`
                    block px-3 py-2 rounded-md text-base font-medium
                    ${pathname === href
                      ? 'bg-primary-50 text-primary-600'
                      : 'text-neutral-700 hover:bg-neutral-50'
                    }
                  `}
                  onClick={() => setIsOpen(false)}
                >
                  {label}
                </Link>
              ))}
              <Link
                href="/contact"
                className="block px-3 py-2 rounded-md text-base font-medium bg-primary-500 text-white hover:bg-primary-600"
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
