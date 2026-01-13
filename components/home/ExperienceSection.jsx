'use client';

import Image from 'next/image';
import { ArrowRight, Briefcase } from 'lucide-react';
import SectionHeading from '@/components/ui/SectionHeading';
import AnimatedSection from '@/components/ui/AnimatedSection';
import TiltCard from '@/components/ui/TiltCard';
import { EXPERIENCE_COMPANIES } from '@/lib/constants';

/**
 * Experience Section - Premium companies and roles display
 */
export default function ExperienceSection() {
  return (
    <section className="section-padding section-muted relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary-500/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-accent-400/5 rounded-full blur-3xl" />
      
      <div className="container-custom relative z-10">
        <SectionHeading 
          title="Professional Experience" 
          subtitle="Leadership roles across multiple successful ventures"
        />

        {/* Director Of */}
        <ExperienceGroup
          title="Director of"
          companies={EXPERIENCE_COMPANIES.directorOf}
          color="from-blue-500 to-cyan-500"
        />

        {/* Founder & Director Of */}
        <ExperienceGroup
          title="Founder & Director of"
          companies={EXPERIENCE_COMPANIES.founderAndDirectorOf}
          color="from-purple-500 to-pink-500"
        />

        {/* Proprietor Of */}
        <ExperienceGroup
          title="Proprietor of"
          companies={EXPERIENCE_COMPANIES.proprietorOf}
          color="from-amber-500 to-orange-500"
        />
      </div>
    </section>
  );
}

function ExperienceGroup({ title, companies, color }) {
  return (
    <div className="mb-16 last:mb-0">
      <AnimatedSection animation="fade-in-up">
        <div className="flex items-center gap-4 mb-8">
          <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${color} flex items-center justify-center shadow-lg`}>
            <Briefcase className="w-6 h-6 text-white" />
          </div>
          <h3 className="text-2xl font-bold text-neutral-800">{title}</h3>
        </div>
      </AnimatedSection>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {companies.map((company, index) => (
          <AnimatedSection
            key={company.name}
            animation="fade-in-up"
            delay={index * 100}
            className="h-full"
          >
            <CompanyCard {...company} gradient={color} />
          </AnimatedSection>
        ))}
      </div>
    </div>
  );
}

function CompanyCard({ name, tagline, image, link, gradient }) {
  return (
    <TiltCard className="h-full">
      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="h-full flex flex-col bg-white rounded-3xl p-8 text-center shadow-card border border-neutral-100 hover:shadow-card-hover hover:-translate-y-2 transition-all duration-500 group relative overflow-hidden"
      >
        {/* Gradient line on hover */}
        <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
        
        {/* Logo */}
        <div className="mb-6 relative">
          <div className="absolute inset-0 bg-neutral-100 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          <Image
            src={image}
            alt={name}
            width={100}
            height={100}
            className="relative mx-auto group-hover:scale-110 transition-transform duration-500"
          />
        </div>
        
        {/* Content */}
        <h6 className="font-bold text-lg text-neutral-800 mb-2 group-hover:text-primary-600 transition-colors">{name}</h6>
        {tagline && <p className="text-sm text-neutral-500">{tagline}</p>}
        
        {/* Arrow */}
        <div className="mt-auto pt-4 flex items-center justify-center gap-2 text-primary-500 opacity-0 group-hover:opacity-100 transition-opacity">
          <span className="text-sm font-medium">Visit Website</span>
          <ArrowRight className="w-4 h-4" />
        </div>
      </a>
    </TiltCard>
  );
}
