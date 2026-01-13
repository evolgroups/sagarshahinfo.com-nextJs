'use client';

import { Shield, Award, Lightbulb, Handshake } from 'lucide-react';
import SectionHeading from '@/components/ui/SectionHeading';
import AnimatedSection from '@/components/ui/AnimatedSection';
import TiltCard from '@/components/ui/TiltCard';
import { CORE_VALUES } from '@/lib/constants';

/**
 * Core Values Section
 * New professional section to enhance brand authority
 */
const iconMap = {
  Integrity: Shield,
  Excellence: Award,
  Innovation: Lightbulb,
  Collaboration: Handshake,
};

export default function CoreValuesSection() {
  return (
    <section className="section-padding">
      <div className="container-custom">
        <SectionHeading
          title="Core Values & Ethics"
          subtitle="The principles that guide every decision and partnership"
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {CORE_VALUES.map((value, index) => {
            const Icon = iconMap[value.title];
            return (
              <AnimatedSection
                key={value.title}
                animation="fade-in-up"
                delay={index * 100}
                className="h-full"
              >
                <TiltCard className="h-full">
                  <div className="h-full bg-white rounded-2xl p-6 shadow-card hover:shadow-card-hover transition-all duration-300 text-center group">
                    <div className="w-16 h-16 bg-primary-500/10 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:bg-primary-500 transition-colors duration-300">
                      <Icon className="w-8 h-8 text-primary-500 group-hover:text-white transition-colors duration-300" />
                    </div>
                    <h4 className="text-xl font-bold text-neutral-800 mb-2">{value.title}</h4>
                    <p className="text-neutral-600 text-sm">{value.description}</p>
                  </div>
                </TiltCard>
              </AnimatedSection>
            );
          })}
        </div>
      </div>
    </section>
  );
}
