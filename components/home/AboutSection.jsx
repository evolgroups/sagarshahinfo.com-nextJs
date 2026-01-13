'use client';

import Image from 'next/image';
import { Building2, Briefcase, Globe, Award, Users, TrendingUp } from 'lucide-react';
import AnimatedSection from '@/components/ui/AnimatedSection';
import { ABOUT_STATS } from '@/lib/constants';

/**
 * About Section - Personal biography and achievements with premium design
 */
const iconMap = {
  Building2,
  Briefcase,
  Globe,
};

const highlights = [
  { icon: Award, label: 'Industry Leader', color: 'from-amber-500 to-orange-500' },
  { icon: Users, label: 'Team Builder', color: 'from-blue-500 to-cyan-500' },
  { icon: TrendingUp, label: 'Growth Expert', color: 'from-emerald-500 to-teal-500' },
];

export default function AboutSection() {
  return (
    <section id="about" className="section-padding bg-white relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-20 right-0 w-72 h-72 bg-primary-500/5 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-0 w-96 h-96 bg-accent-400/5 rounded-full blur-3xl" />
      
      <div className="container-custom relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Content Column */}
          <AnimatedSection animation="slide-in-left">
            <div className="space-y-6">
              {/* Section badge */}
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary-50 border border-primary-100 rounded-full">
                <span className="text-sm font-medium text-primary-700">About Me</span>
              </div>
              
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-neutral-900">
                Building Businesses That
                <span className="gradient-text"> Transform Industries</span>
              </h2>
              
              <div className="space-y-4 text-neutral-600 leading-relaxed">
                <p>
                  I believe every business is a story waiting to be told — one of bold
                  decisions, smart strategies, and meaningful impact. My journey as an entrepreneur
                  began with a simple vision: to create businesses that not only generate value but
                  also transform industries and empower people across the globe.
                </p>
                
                <p>
                  As the founder and director of Evol Group, I lead a diverse portfolio of companies
                  spanning multiple industries including immigration consultancy, information technology,
                  financial services, human resources, and entertainment.
                </p>
                
                <p>
                  My approach to business is rooted in innovation and adaptability. From establishing
                  Migrate Zone as a trusted name in immigration services to launching cutting-edge
                  technology solutions through Technobits Digital, I&apos;ve always believed in staying
                  ahead of the curve.
                </p>
              </div>

              {/* Highlights */}
              <div className="flex flex-wrap gap-3 pt-4">
                {highlights.map((item, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-2 px-4 py-2 bg-neutral-50 rounded-full border border-neutral-100"
                  >
                    <div className={`w-6 h-6 rounded-full bg-gradient-to-br ${item.color} flex items-center justify-center`}>
                      <item.icon className="w-3.5 h-3.5 text-white" />
                    </div>
                    <span className="text-sm font-medium text-neutral-700">{item.label}</span>
                  </div>
                ))}
              </div>

              {/* Stats */}
              <div className="grid gap-4 pt-6">
                {ABOUT_STATS.map((stat, index) => {
                  const IconComponent = iconMap[stat.icon];
                  return (
                    <StatCard
                      key={index}
                      icon={IconComponent}
                      value={stat.value}
                      label={stat.label}
                      delay={index * 100}
                    />
                  );
                })}
              </div>
            </div>
          </AnimatedSection>

          {/* Image Column */}
          <AnimatedSection animation="slide-in-right">
            <div className="relative">
              <Image
                src="/images/about-img.webp"
                alt="Sagar Shah - About"
                width={600}
                height={500}
                className="w-full h-auto rounded-3xl shadow-2xl"
              />
              <div className="absolute -z-10 -bottom-4 -right-4 w-full h-full bg-primary-500/10 rounded-2xl" />
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}

function StatCard({ icon: Icon, value, label, delay }) {
  return (
    <div className="group flex items-center gap-4 bg-neutral-50 hover:bg-white rounded-2xl p-5 border border-neutral-100 hover:border-primary-200 hover:shadow-card transition-all duration-300">
      <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary-500 to-purple-500 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300 shadow-lg">
        <Icon className="w-7 h-7 text-white" />
      </div>
      <div>
        <h4 className="text-xl font-bold text-neutral-800">
          {value} <span className="text-neutral-600 font-medium">{label}</span>
        </h4>
      </div>
    </div>
  );
}
