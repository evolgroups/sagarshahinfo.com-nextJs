'use client';

import { Target, Users, Globe, TrendingUp, Sparkles } from 'lucide-react';
import AnimatedSection from '@/components/ui/AnimatedSection';
import { VISION_PHILOSOPHY } from '@/lib/constants';

/**
 * Vision & Leadership Philosophy Section - Premium dark gradient design
 */
const iconMap = {
  'Innovation First': Target,
  'People-Centric': Users,
  'Global Perspective': Globe,
  'Sustainable Growth': TrendingUp,
};

const gradients = [
  'from-blue-400 to-cyan-400',
  'from-pink-400 to-rose-400',
  'from-amber-400 to-orange-400',
  'from-emerald-400 to-teal-400',
];

export default function VisionSection() {
  return (
    <section className="section-padding relative overflow-hidden">
      {/* Dark gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-neutral-900 via-primary-950 to-neutral-900" />
      
      {/* Animated mesh overlay */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary-500/30 rounded-full blur-3xl floating" />
        <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-purple-500/30 rounded-full blur-3xl floating-delayed" />
        <div className="absolute top-1/2 right-0 w-72 h-72 bg-accent-500/20 rounded-full blur-3xl floating-slow" />
      </div>
      
      {/* Pattern overlay */}
      <div className="absolute inset-0 bg-pattern-dark opacity-30" />
      
      <div className="container-custom relative z-10">
        <AnimatedSection animation="fade-in-up">
          <div className="text-center max-w-3xl mx-auto mb-16">
            
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
              {VISION_PHILOSOPHY.title}
            </h2>
            
            <p className="text-xl text-primary-200 font-medium mb-4">
              {VISION_PHILOSOPHY.subtitle}
            </p>
            
            <p className="text-white/70 leading-relaxed">
              {VISION_PHILOSOPHY.content}
            </p>
          </div>
        </AnimatedSection>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {VISION_PHILOSOPHY.principles.map((principle, index) => {
            const Icon = iconMap[principle.title];
            const gradient = gradients[index % gradients.length];
            
            return (
              <AnimatedSection
                key={principle.title}
                animation="fade-in-up"
                delay={index * 100}
              >
                <div className="group h-full bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-8 text-center hover:bg-white/10 hover:border-white/20 transition-all duration-500">
                  {/* Icon */}
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${gradient} flex items-center justify-center mx-auto mb-6 shadow-lg group-hover:scale-110 transition-transform duration-500`}>
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  
                  <h4 className="text-xl font-bold text-white mb-3">{principle.title}</h4>
                  <p className="text-sm text-white/60 leading-relaxed">{principle.description}</p>
                </div>
              </AnimatedSection>
            );
          })}
        </div>
      </div>
    </section>
  );
}
