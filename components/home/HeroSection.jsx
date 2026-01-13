'use client';

import Image from 'next/image';
import Button from '@/components/ui/Button';
import AnimatedSection from '@/components/ui/AnimatedSection';
import AnimatedCounter from '@/components/ui/AnimatedCounter';

/**
 * Hero Section - Main landing section with introduction
 */
export default function HeroSection() {
  return (
    <section id="hero" className="min-h-[calc(100vh-80px)] flex items-center py-12 lg:py-0">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Image Column */}
          <AnimatedSection animation="slide-in-left" className="order-2 lg:order-1">
            <div className="relative">
              <Image
                src="/images/main-photo.webp"
                alt="Sagar Shah - Serial Entrepreneur and Business Strategist"
                width={600}
                height={700}
                className="w-full h-auto rounded-2xl"
                priority
              />
              {/* Decorative elements */}
              <div className="absolute -z-10 top-4 left-4 w-full h-full bg-primary-500/10 rounded-2xl" />
            </div>
          </AnimatedSection>

          {/* Content Column */}
          <AnimatedSection animation="slide-in-right" className="order-1 lg:order-2">
            <div className="space-y-6">
              <h3 className="text-xl md:text-2xl text-neutral-600 font-medium">
                Hi, I&apos;m Sagar Shah,
              </h3>
              
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-neutral-800 leading-tight">
                A Serial Entrepreneur, Global Consultant, and Business Strategist
              </h1>
              
              <p className="text-lg md:text-xl text-neutral-600 leading-relaxed">
                From launching startups to scaling global ventures, I help businesses
                turn potential into performance.
              </p>

              <div className="flex flex-wrap gap-3 pt-4">
                <Button href="#contact-form" size="sm">
                  Book a Free Strategy Call
                </Button>
                <Button href="#about" variant="outline" size="sm">
                  Learn More
                </Button>
              </div>

              {/* Quick Stats */}
              <div className="flex flex-wrap gap-8 pt-8 border-t mt-8">
                <QuickStat value="10+" label="Companies Founded" />
                <QuickStat value="20+" label="Years of Experience" />
                <QuickStat value="4" label="Countries" />
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}

function QuickStat({ value, label }) {
  return (
    <div className="text-center">
      <div className="text-3xl font-bold text-primary-500">
        <AnimatedCounter value={value} duration={2000} />
      </div>
      <div className="text-sm text-neutral-500">{label}</div>
    </div>
  );
}
