'use client';

import { Plane, Code, Coins, ListChecks, Users, Share2, ArrowRight } from 'lucide-react';
import SectionHeading from '@/components/ui/SectionHeading';
import AnimatedSection from '@/components/ui/AnimatedSection';
import TiltCard from '@/components/ui/TiltCard';
import { SERVICES } from '@/lib/constants';

/**
 * Services/Expertises Section - Premium card design
 */
const iconMap = {
  Plane,
  Code,
  Coins,
  ListChecks,
  Users,
  Share2,
};

export default function ServicesSection() {
  return (
    <section id="services" className="section-padding section-muted relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary-500/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-accent-400/5 rounded-full blur-3xl" />
      
      <div className="container-custom relative z-10">
        <SectionHeading
          title="Our Expertises"
          subtitle="With the help of our knowledgeable employees, we are able to fulfil the following services all around the world."
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {SERVICES.map((service, index) => {
            const IconComponent = iconMap[service.icon];
            
            return (
              <AnimatedSection
                key={service.id}
                animation="fade-in-up"
                delay={index * 100}
              >
                <ServiceCard
                  title={service.title}
                  description={service.description}
                  icon={IconComponent}
                  color={service.color}
                  link={service.link}
                  index={index}
                />
              </AnimatedSection>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function ServiceCard({ title, description, icon: Icon, color, link, index }) {
  // Gradient colors for each card
  const gradients = [
    'from-blue-500 to-cyan-400',
    'from-pink-500 to-rose-400',
    'from-amber-500 to-yellow-400',
    'from-violet-500 to-purple-400',
    'from-emerald-500 to-teal-400',
    'from-orange-500 to-red-400',
  ];
  
  const gradient = gradients[index % gradients.length];
  
  return (
    <TiltCard className="h-full">
      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="block h-full"
      >
        <div className="group h-full bg-white rounded-3xl p-8 shadow-card border border-neutral-100 transition-all duration-500 hover:shadow-card-hover hover:-translate-y-2 hover:border-primary-200 relative overflow-hidden">
          {/* Gradient line at top */}
          <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
          
          {/* Icon */}
          <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${gradient} flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 group-hover:shadow-xl transition-all duration-500`}>
            <Icon className="w-8 h-8 text-white" />
          </div>
          
          {/* Content */}
          <h4 className="text-xl font-bold text-neutral-800 mb-3 group-hover:text-primary-600 transition-colors">
            {title}
          </h4>
          
          <p className="text-neutral-600 text-sm leading-relaxed mb-6 line-clamp-3">
            {description}
          </p>
          
          {/* Link */}
          <div className="flex items-center gap-2 text-primary-600 font-medium text-sm group-hover:gap-3 transition-all">
            <span>Explore Services</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </div>
        </div>
      </a>
    </TiltCard>
  );
}
