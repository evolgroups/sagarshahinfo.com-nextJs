'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { Menu, X, ChevronDown, Mail, ArrowRight } from 'lucide-react';
import { NAVIGATION_LINKS, BLOG_LINKS, SITE_CONFIG } from '@/lib/constants';
import { cn } from '@/lib/utils';

/**
 * Navigation bar component with glassmorphism effect
 */
export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isBlogOpen, setIsBlogOpen] = useState(false);
  const pathname = usePathname();

  // Handle scroll effect for navbar
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  // Close blog dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = () => setIsBlogOpen(false);
    if (isBlogOpen) {
      document.addEventListener('click', handleClickOutside);
      return () => document.removeEventListener('click', handleClickOutside);
    }
  }, [isBlogOpen]);

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-500',
        isScrolled 
          ? 'bg-white/80 backdrop-blur-xl shadow-glass border-b border-neutral-200/50' 
          : 'bg-transparent'
      )}
    >
      <nav className="container-custom">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex-shrink-0 relative z-10">
            <Image
              src="/images/Sagar-shah-Logo.png"
              alt="Sagar Shah Logo"
              width={180}
              height={50}
              className="h-11 w-auto"
              priority
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-1">
            {NAVIGATION_LINKS.slice(0, 5).map((link) => (
              <Link
                key={link.id}
                href={link.href}
                className={cn(
                  'nav-link px-4 py-2 text-sm font-medium transition-colors',
                  isScrolled ? 'text-neutral-700 hover:text-primary-600' : 'text-neutral-700 hover:text-primary-600',
                  pathname === link.href && 'text-primary-600'
                )}
              >
                {link.name}
              </Link>
            ))}

            {/* Blogs Dropdown */}
            <div className="relative">
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  setIsBlogOpen(!isBlogOpen);
                }}
                className={cn(
                  'flex items-center gap-1 px-4 py-2 text-sm font-medium transition-colors',
                  isScrolled ? 'text-neutral-700 hover:text-primary-600' : 'text-neutral-700 hover:text-primary-600'
                )}
              >
                Blogs
                <ChevronDown className={cn('h-4 w-4 transition-transform duration-300', isBlogOpen && 'rotate-180')} />
              </button>

              {/* Dropdown menu */}
              <div className={cn(
                'absolute top-full left-0 mt-2 w-56 bg-white rounded-2xl shadow-glass-lg border border-neutral-100 overflow-hidden transition-all duration-300 origin-top',
                isBlogOpen ? 'opacity-100 scale-100 translate-y-0' : 'opacity-0 scale-95 -translate-y-2 pointer-events-none'
              )}>
                <div className="p-2">
                  {BLOG_LINKS.map((blog) => (
                    <a
                      key={blog.name}
                      href={blog.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-between px-4 py-3 rounded-xl text-sm text-neutral-700 hover:bg-primary-50 hover:text-primary-600 transition-colors group"
                    >
                      <span>{blog.name}</span>
                      <ArrowRight className="w-4 h-4 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* Additional Pages */}
            {NAVIGATION_LINKS.slice(5).map((link) => (
              <Link
                key={link.id}
                href={link.href}
                className={cn(
                  'nav-link px-4 py-2 text-sm font-medium transition-colors',
                  isScrolled ? 'text-neutral-700 hover:text-primary-600' : 'text-neutral-700 hover:text-primary-600',
                  pathname === link.href && 'text-primary-600'
                )}
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* Contact CTA (Desktop) */}
          <div className="hidden xl:flex items-center">
            <a
              href={`mailto:${SITE_CONFIG.email}`}
              className="flex items-center gap-1.5 px-4 py-2 bg-gradient-to-r from-primary-600 to-primary-500 text-white rounded-full text-xs font-medium shadow-button hover:shadow-button-hover hover:scale-105 transition-all duration-300"
            >
              <Mail className="h-4 w-4" />
              <span>Get in Touch</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 rounded-xl hover:bg-neutral-100 transition-colors relative z-10"
            aria-label="Toggle menu"
          >
            <div className="relative w-6 h-6">
              <span className={cn(
                'absolute left-0 top-1 w-6 h-0.5 bg-neutral-800 transition-all duration-300',
                isOpen && 'rotate-45 top-3'
              )} />
              <span className={cn(
                'absolute left-0 top-3 w-6 h-0.5 bg-neutral-800 transition-all duration-300',
                isOpen && 'opacity-0'
              )} />
              <span className={cn(
                'absolute left-0 top-5 w-6 h-0.5 bg-neutral-800 transition-all duration-300',
                isOpen && '-rotate-45 top-3'
              )} />
            </div>
          </button>
        </div>

        {/* Mobile Navigation */}
        <div className={cn(
          'lg:hidden fixed inset-0 top-20 bg-white/95 backdrop-blur-xl transition-all duration-500 overflow-y-auto',
          isOpen ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-full pointer-events-none'
        )}>
          <div className="container-custom py-8 space-y-2">
            {NAVIGATION_LINKS.map((link, index) => (
              <Link
                key={link.id}
                href={link.href}
                className={cn(
                  'block px-4 py-4 rounded-2xl text-lg font-medium text-neutral-700 hover:bg-primary-50 hover:text-primary-600 transition-all',
                  pathname === link.href && 'bg-primary-50 text-primary-600',
                  'animate-fade-in-up'
                )}
                style={{ animationDelay: `${index * 50}ms` }}
              >
                {link.name}
              </Link>
            ))}

            {/* Blog Links in Mobile */}
            <div className="pt-6 border-t border-neutral-200 mt-6">
              <p className="px-4 text-xs font-semibold text-neutral-400 uppercase tracking-wider mb-3">
                Blogs
              </p>
              {BLOG_LINKS.map((blog, index) => (
                <a
                  key={blog.name}
                  href={blog.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between px-4 py-4 rounded-2xl text-neutral-600 hover:bg-neutral-50 hover:text-primary-600 transition-all animate-fade-in-up"
                  style={{ animationDelay: `${(NAVIGATION_LINKS.length + index) * 50}ms` }}
                >
                  <span>{blog.name}</span>
                  <ArrowRight className="w-4 h-4" />
                </a>
              ))}
            </div>

            {/* Contact CTA in Mobile */}
            <div className="pt-6 border-t border-neutral-200 mt-6">
              <a
                href={`mailto:${SITE_CONFIG.email}`}
                className="flex items-center justify-center gap-2 w-full px-6 py-4 bg-gradient-to-r from-primary-600 to-primary-500 text-white rounded-2xl font-medium shadow-button"
              >
                <Mail className="h-5 w-5" />
                <span>{SITE_CONFIG.email}</span>
              </a>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}
