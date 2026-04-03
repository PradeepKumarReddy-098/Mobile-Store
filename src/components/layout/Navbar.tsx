'use client';

import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#' },
    { name: 'Services', href: '#' },
    { name: 'Products', href: '#' },
    { name: 'Contact', href: '#' },
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${isScrolled ? 'bg-white/90 backdrop-blur-xl shadow-sm border-b border-slate-100/80 py-3' : 'bg-transparent py-5'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">

        {/* Logo */}
        <Link href="/" className="flex items-center gap-2.5 z-50 group">
          <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-[var(--color-primary)] to-blue-700 flex items-center justify-center text-white font-black text-lg shadow-lg shadow-blue-500/30 group-hover:scale-105 transition-transform duration-200">
            T
          </div>
          <span className="font-bold text-lg tracking-tight text-slate-900">
            T-Mobile <span className="text-[var(--color-primary)]">Shop</span>
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex flex-1 justify-center">
          <ul className="flex items-center gap-1">
            {navLinks.map((link, idx) => (
              <li key={idx}>
                <Link
                  href={link.href}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 hover:bg-slate-100 hover:text-[var(--color-primary)] ${idx === 0 ? 'text-[var(--color-primary)] bg-blue-50' : 'text-slate-600'}`}
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* Desktop Auth Buttons */}
        <div className="hidden md:flex items-center gap-3">
          <Link
            href="#"
            className="px-5 py-2 text-sm font-semibold text-slate-700 hover:text-[var(--color-primary)] rounded-full border border-slate-200 hover:border-[var(--color-primary)] transition-all duration-200 hover:bg-blue-50"
          >
            Log In
          </Link>
          <Link
            href="#"
            className="px-5 py-2 text-sm font-semibold text-white bg-gradient-to-r from-[var(--color-primary)] to-blue-700 rounded-full shadow-md shadow-blue-500/25 hover:shadow-lg hover:shadow-blue-500/30 hover:scale-[1.02] transition-all duration-200"
          >
            Sign Up
          </Link>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden flex items-center z-50">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="w-9 h-9 flex items-center justify-center rounded-full bg-slate-100 text-slate-700 hover:bg-slate-200 transition-colors focus:outline-none"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>

      </div>

      {/* Mobile Menu Dropdown */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="absolute top-full left-0 right-0 bg-white/95 backdrop-blur-xl shadow-xl border-t border-slate-100 md:hidden"
          >
            <div className="flex flex-col p-5 gap-2">
              {navLinks.map((link, idx) => (
                <Link
                  key={idx}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`px-4 py-3 rounded-xl font-medium text-sm transition-colors ${idx === 0 ? 'text-[var(--color-primary)] bg-blue-50' : 'text-slate-700 hover:bg-slate-50'}`}
                >
                  {link.name}
                </Link>
              ))}
              <div className="h-px bg-slate-100 my-2" />
              <div className="flex gap-3">
                <Link
                  href="#"
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex-1 text-center py-3 text-sm font-semibold text-slate-700 border border-slate-200 rounded-xl hover:bg-slate-50 transition-colors"
                >
                  Log In
                </Link>
                <Link
                  href="#"
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex-1 text-center py-3 text-sm font-semibold text-white bg-gradient-to-r from-[var(--color-primary)] to-blue-700 rounded-xl shadow-md shadow-blue-500/25"
                >
                  Sign Up
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
