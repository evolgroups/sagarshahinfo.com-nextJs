'use client';

import { useState } from 'react';
import Image from 'next/image';
import { Globe, Linkedin, Instagram, Youtube, Facebook, Twitter, ChevronDown, ChevronUp, Send, MessageCircle, ExternalLink } from 'lucide-react';
import SectionHeading from '@/components/ui/SectionHeading';
import AnimatedSection from '@/components/ui/AnimatedSection';
import TiltCard from '@/components/ui/TiltCard';
import { GROUP_COMPANIES } from '@/lib/constants';

/**
 * Group of Companies Section - Premium grid layout
 */
export default function GroupCompaniesSection() {
  const [showAll, setShowAll] = useState(false);
  const visibleCompanies = showAll ? GROUP_COMPANIES : GROUP_COMPANIES.slice(0, 6);

  return (
    <section id="group-companies" className="section-padding section-muted relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary-500/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-accent-400/5 rounded-full blur-3xl" />
      
      <div className="container-custom relative z-10">
        {/* Header with Logo */}
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8 mb-16">
          <AnimatedSection animation="slide-in-left">
            <div className="flex items-center gap-6">
              <div className="relative">
                <div className="absolute -inset-2 bg-gradient-to-br from-primary-500/20 to-accent-400/20 rounded-2xl blur-xl" />
                <Image
                  src="/images/evol group n-01.png"
                  alt="Evol Group Logo"
                  width={120}
                  height={120}
                  className="relative w-24 h-24 lg:w-28 lg:h-28"
                />
              </div>
              <div>
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold">
                  <span className="gradient-text">Group of Companies</span>
                </h2>
                <p className="text-neutral-500 mt-2 text-lg">The Network of Evolution</p>
              </div>
            </div>
          </AnimatedSection>
          
          <AnimatedSection animation="slide-in-right">
            <a
              href="https://evolgroups.com"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-primary-600 to-primary-500 text-white rounded-full text-sm font-medium shadow-button hover:shadow-button-hover hover:scale-105 transition-all duration-300"
            >
              <Globe className="w-4 h-4" />
              <span>Visit Evol Group</span>
              <ExternalLink className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
            </a>
          </AnimatedSection>
        </div>

        {/* Companies Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {visibleCompanies.map((company, index) => (
            <AnimatedSection
              key={company.name}
              animation="fade-in-up"
              delay={index * 80}
              className="h-full"
            >
              <CompanyCard {...company} />
            </AnimatedSection>
          ))}
        </div>

        {/* Show More/Less Button */}
        {GROUP_COMPANIES.length > 6 && (
          <div className="text-center mt-12">
            <button
              onClick={() => setShowAll(!showAll)}
              className="group inline-flex items-center gap-2 px-5 py-2.5 bg-white border-2 border-primary-500 text-primary-600 rounded-full text-sm font-medium hover:bg-primary-500 hover:text-white shadow-card hover:shadow-card-hover transition-all duration-300"
            >
              {showAll ? (
                <>
                  Show Less <ChevronUp className="w-4 h-4 group-hover:-translate-y-1 transition-transform" />
                </>
              ) : (
                <>
                  View All {GROUP_COMPANIES.length} Companies <ChevronDown className="w-4 h-4 group-hover:translate-y-1 transition-transform" />
                </>
              )}
            </button>
          </div>
        )}
      </div>
    </section>
  );
}

function CompanyCard({ name, description, image, gradientFrom, gradientTo, website, linkedin, instagram, youtube, facebook, twitter, telegram, pinterest, medium, reddit }) {
  return (
    <TiltCard className="h-full">
      <div className="h-full group relative bg-white rounded-3xl p-6 lg:p-8 shadow-card border border-neutral-100 overflow-hidden transition-all duration-500 hover:shadow-card-hover hover:-translate-y-2">
        {/* Gradient overlay on hover */}
        <div
          className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
          style={{ background: `linear-gradient(to bottom, ${gradientFrom}, ${gradientTo})` }}
        />
        
        {/* Content */}
        <div className="relative z-10 h-full flex flex-col">
          {/* Logo */}
          <div className="flex justify-center mb-6">
            <div className="relative">
              <div className="absolute -inset-3 bg-neutral-100 group-hover:bg-white/20 rounded-2xl transition-colors duration-500" />
              <Image
                src={image}
                alt={name}
                width={100}
                height={100}
                className="relative group-hover:scale-110 transition-transform duration-500"
              />
            </div>
          </div>
          
          {/* Name */}
          <h3 className="text-lg font-bold text-center text-neutral-800 group-hover:text-white transition-colors duration-500 mb-3">
            {name}
          </h3>
          
          {/* Description */}
          <p className="text-sm text-center text-neutral-600 group-hover:text-white/90 transition-colors duration-500 mb-6 line-clamp-2 flex-grow">
            {description}
          </p>

          {/* Social Links */}
          <div className="flex justify-center gap-2 flex-wrap mt-auto">
            {website && <SocialIcon href={website} icon={Globe} />}
            {linkedin && <SocialIcon href={linkedin} icon={Linkedin} />}
            {instagram && <SocialIcon href={instagram} icon={Instagram} />}
            {youtube && <SocialIcon href={youtube} icon={Youtube} />}
            {facebook && <SocialIcon href={facebook} icon={Facebook} />}
            {twitter && <SocialIcon href={twitter} icon={Twitter} />}
            {telegram && <SocialIcon href={telegram} icon={Send} />}
            {pinterest && <SocialIcon href={pinterest} iconType="pinterest" />}
            {medium && <SocialIcon href={medium} iconType="medium" />}
            {reddit && <SocialIcon href={reddit} icon={MessageCircle} />}
          </div>
        </div>
      </div>
    </TiltCard>
  );
}

function SocialIcon({ href, icon: Icon, iconType }) {
  const customIcons = {
    pinterest: (
      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 0C5.373 0 0 5.373 0 12c0 5.084 3.163 9.426 7.627 11.174-.105-.949-.2-2.405.042-3.441.218-.937 1.407-5.965 1.407-5.965s-.359-.719-.359-1.782c0-1.668.967-2.914 2.171-2.914 1.023 0 1.518.769 1.518 1.69 0 1.029-.655 2.568-.994 3.995-.283 1.194.599 2.169 1.777 2.169 2.133 0 3.772-2.249 3.772-5.495 0-2.873-2.064-4.882-5.012-4.882-3.414 0-5.418 2.561-5.418 5.207 0 1.031.397 2.138.893 2.738.098.119.112.224.083.345l-.333 1.36c-.053.22-.174.267-.402.161-1.499-.698-2.436-2.889-2.436-4.649 0-3.785 2.75-7.262 7.929-7.262 4.163 0 7.398 2.967 7.398 6.931 0 4.136-2.607 7.464-6.227 7.464-1.216 0-2.359-.632-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0z"/>
      </svg>
    ),
    medium: (
      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
        <path d="M13.54 12a6.8 6.8 0 01-6.77 6.82A6.8 6.8 0 010 12a6.8 6.8 0 016.77-6.82A6.8 6.8 0 0113.54 12zM20.96 12c0 3.54-1.51 6.42-3.38 6.42-1.87 0-3.39-2.88-3.39-6.42s1.52-6.42 3.39-6.42 3.38 2.88 3.38 6.42M24 12c0 3.17-.53 5.75-1.19 5.75-.66 0-1.19-2.58-1.19-5.75s.53-5.75 1.19-5.75C23.47 6.25 24 8.83 24 12z"/>
      </svg>
    ),
  };

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="w-9 h-9 rounded-xl bg-neutral-100 group-hover:bg-white/20 flex items-center justify-center text-neutral-600 group-hover:text-white hover:scale-110 transition-all duration-300"
    >
      {iconType ? customIcons[iconType] : <Icon className="w-4 h-4" />}
    </a>
  );
}
