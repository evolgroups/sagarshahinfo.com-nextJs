'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Linkedin, Twitter, Facebook, Instagram, Mail, MapPin, ArrowRight, Heart } from 'lucide-react';
import { SITE_CONFIG, NAVIGATION_LINKS, BLOG_LINKS, SOCIAL_LINKS } from '@/lib/constants';

/**
 * Footer component - Premium design with gradient accents
 */
export default function Footer() {
  const currentYear = new Date().getFullYear();

  const pageLinks = NAVIGATION_LINKS.filter((link) => 
    ['Home', 'Services', 'About', 'Companies', 'Contact', 'Achievements'].includes(link.name)
  );

  return (
    <footer className="relative bg-neutral-900 text-white overflow-hidden">
      {/* Gradient top border */}
      {/* <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary-500 via-purple-500 to-accent-400" /> */}
      
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary-500/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl" />
      
      {/* Pattern overlay */}
      <div className="absolute inset-0 bg-pattern-dark opacity-30" />
      
      <div className="container-custom relative z-10 py-16 lg:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          {/* Brand Column */}
          <div className="lg:col-span-1">
            <Link href="/" className="inline-block mb-6">
              <Image
                src="/images/Sagar-shah-Logo.png"
                alt="Sagar Shah Logo"
                width={180}
                height={50}
                className="h-12 w-auto brightness-0 invert"
              />
            </Link>
            <p className="text-neutral-400 text-sm leading-relaxed mb-6">
              Experienced Entrepreneur | Skilled in Negotiation | Business Planning | Team Building and
              Managing | Business Development.
            </p>
            
            {/* Social Links */}
            <div className="flex gap-3">
              <SocialLink href={SOCIAL_LINKS.linkedin} icon={Linkedin} label="LinkedIn" />
              <SocialLink href={SOCIAL_LINKS.twitter} icon={Twitter} label="Twitter" />
              <SocialLink href={SOCIAL_LINKS.facebook} icon={Facebook} label="Facebook" />
              <SocialLink href={SOCIAL_LINKS.instagram} icon={Instagram} label="Instagram" />
            </div>
          </div>

          {/* Pages Column */}
          <div>
            <h3 className="text-lg font-bold text-white mb-6">Quick Links</h3>
            <ul className="space-y-4">
              {pageLinks.map((link) => (
                <li key={link.id}>
                  <Link
                    href={link.href}
                    className="group flex items-center gap-2 text-neutral-400 hover:text-white transition-colors text-sm"
                  >
                    <ArrowRight className="w-4 h-4 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all text-primary-400" />
                    <span>{link.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Blog Links Column */}
          <div>
            <h3 className="text-lg font-bold text-white mb-6">Latest Blog</h3>
            <ul className="space-y-4">
              {BLOG_LINKS.map((blog) => (
                <li key={blog.name}>
                  <a
                    href={blog.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center gap-2 text-neutral-400 hover:text-white transition-colors text-sm"
                  >
                    <ArrowRight className="w-4 h-4 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all text-primary-400" />
                    <span>{blog.name}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Column */}
          <div>
            <h3 className="text-lg font-bold text-white mb-6">Get in Touch</h3>
            
            {/* Contact info */}
            <div className="space-y-4 mb-6">
              <a
                href={`mailto:${SITE_CONFIG.email}`}
                className="flex items-center gap-3 text-neutral-400 hover:text-white transition-colors text-sm"
              >
                <div className="w-10 h-10 rounded-xl bg-primary-500/20 flex items-center justify-center">
                  <Mail className="w-5 h-5 text-primary-400" />
                </div>
                <span>{SITE_CONFIG.email}</span>
              </a>
              
              <div className="flex items-center gap-3 text-neutral-400 text-sm">
                <div className="w-10 h-10 rounded-xl bg-primary-500/20 flex items-center justify-center">
                  <MapPin className="w-5 h-5 text-primary-400" />
                </div>
                <span>Australia, India, UAE</span>
              </div>
            </div>
            
            {/* QR Code */}
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-4 inline-block">
              <Image
                src="/images/qr_code.png"
                alt="Contact QR Code"
                width={100}
                height={100}
                className="rounded-lg"
              />
              <p className="text-xs text-neutral-500 mt-2 text-center">Scan to connect</p>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright Bar */}
      <div className="border-t border-white/10 relative z-10">
        <div className="container-custom py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-neutral-500">
              &copy; {currentYear} Sagar Shah. All rights reserved.
            </p>
            <p className="text-sm text-neutral-500">
              A Multinational Business Leader
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

function SocialLink({ href, icon: Icon, label }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className="w-11 h-11 rounded-xl bg-white/10 flex items-center justify-center text-neutral-400 hover:bg-gradient-to-br hover:from-primary-500 hover:to-purple-500 hover:text-white transition-all duration-300"
    >
      <Icon className="h-5 w-5" />
    </a>
  );
}
