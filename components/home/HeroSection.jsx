'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import Button from '@/components/ui/Button';
import AnimatedSection from '@/components/ui/AnimatedSection';
import AnimatedCounter from '@/components/ui/AnimatedCounter';

/**
 * Hero Section - Main landing section with introduction
 */
export default function HeroSection() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 20,
        y: (e.clientY / window.innerHeight) * 20
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <section id="hero" className="relative min-h-[calc(100vh-80px)] flex items-center py-16 lg:py-20 overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden -z-10">
        {/* Gradient Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary-50 via-white to-primary-100/50" />
        
        {/* Floating Shapes */}
        <div 
          className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-br from-primary-400/20 to-primary-500/20 rounded-full blur-3xl animate-pulse"
          style={{
            transform: `translate(${mousePosition.x}px, ${mousePosition.y}px)`,
            transition: 'transform 0.3s ease-out'
          }}
        />
        <div 
          className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-br from-primary-300/20 to-primary-600/20 rounded-full blur-3xl animate-pulse"
          style={{
            transform: `translate(-${mousePosition.x}px, -${mousePosition.y}px)`,
            transition: 'transform 0.3s ease-out',
            animationDelay: '1s'
          }}
        />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-br from-primary-200/10 to-primary-400/10 rounded-full blur-3xl animate-pulse" 
          style={{ animationDelay: '2s' }}
        />
        
        {/* Grid Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(99,102,241,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(99,102,241,0.03)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,#000_70%,transparent_110%)]" />
      </div>

      <div className="container-custom relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          
          {/* Image Column - Left Side */}
          <AnimatedSection animation="slide-in-left" className="order-2 lg:order-1">
            <div className="relative">
              {/* Main Image Container */}
              <div className="relative z-10 max-w-[550px] mx-auto lg:mx-0">
                {/* Floating Elements Around Image */}
                <div className="absolute -top-6 -left-6 w-20 h-20 bg-gradient-to-br from-primary-500 to-primary-600 rounded-2xl shadow-2xl animate-float" 
                  style={{ animationDelay: '0s' }}
                />
                
                <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-br from-primary-600 to-primary-700 rounded-2xl shadow-2xl animate-float opacity-80" 
                  style={{ animationDelay: '1s' }}
                />
                
                <div className="absolute -bottom-6 -right-6 w-20 h-20 bg-gradient-to-br from-primary-400 to-primary-500 rounded-2xl shadow-2xl animate-float opacity-90" 
                  style={{ animationDelay: '2s' }}
                />

                {/* Main Image with Modern Frame */}
                <div className="relative rounded-3xl overflow-hidden shadow-2xl border-8 border-white/80 backdrop-blur-sm">
                  {/* Animated Border Gradient */}
                  <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-primary-500 via-primary-400 to-primary-600 opacity-20 animate-gradient" />
                  
                  <Image
                    src="/images/main-photo.webp"
                    alt="Sagar Shah - Serial Entrepreneur and Business Strategist"
                    width={600}
                    height={700}
                    className="w-full h-auto hover:scale-105 transition-transform duration-700"
                    priority
                  />
                  
                  {/* Overlay Gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-primary-900/20 via-transparent to-transparent" />
                </div>

                {/* Decorative Elements */}
                <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-gradient-to-br from-primary-400/40 to-primary-500/40 rounded-full blur-2xl -z-10 animate-pulse" />
                <div className="absolute -top-4 -right-4 w-40 h-40 bg-gradient-to-br from-primary-300/40 to-primary-600/40 rounded-full blur-2xl -z-10 animate-pulse" style={{ animationDelay: '1s' }} />
              </div>

              {/* Floating Achievement Card */}
              <div className="hidden lg:block absolute bottom-8 -left-8 bg-white/90 backdrop-blur-md rounded-2xl p-4 shadow-2xl border border-neutral-200 animate-float" style={{ animationDelay: '1.5s' }}>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-gradient-to-br from-primary-500 to-primary-600 rounded-xl flex items-center justify-center">
                    <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-neutral-900">10+</div>
                    <div className="text-xs text-neutral-600">Companies</div>
                  </div>
                </div>
              </div>
            </div>
          </AnimatedSection>

          {/* Content Column - Right Side */}
          <AnimatedSection animation="slide-in-right" className="order-1 lg:order-2 space-y-8">
            {/* Main Heading */}
            <div className="space-y-4">
              <h3 className="text-xl md:text-2xl font-medium text-neutral-600 animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
                Hi, I&apos;m Sagar Shah,
              </h3>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
                <span className="text-neutral-900">A Serial Entrepreneur,</span>{' '}
                <span className="block mt-2 bg-gradient-to-r from-primary-600 via-primary-500 to-primary-700 bg-clip-text text-transparent animate-gradient">
                  Global Consultant,
                </span>
                <span className="block text-neutral-900">and Business Strategist</span>
              </h1>
              
              <p className="text-lg md:text-xl text-neutral-600 leading-relaxed animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
                From launching startups to scaling global ventures, I help businesses
                turn potential into performance.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4 pt-2 animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
              <Button 
                href="#contact-form" 
                size="md"
                className="group relative overflow-hidden shadow-lg shadow-primary-500/30 hover:shadow-xl hover:shadow-primary-500/40 transition-all duration-300"
              >
                <span className="relative z-10">Book a Free Strategy Call</span>
              </Button>
              <Button 
                href="#about" 
                variant="outline" 
                size="md"
                className="border-2 border-neutral-300 hover:border-primary-500 hover:bg-primary-50 transition-all duration-300"
              >
                Learn More
              </Button>
            </div>

            {/* Stats with Icons */}
            <div className="grid grid-cols-3 gap-6 pt-6 animate-fade-in-up" style={{ animationDelay: '0.5s' }}>
              <StatCard 
                value="10+" 
                label="Companies Founded" 
                delay={0.6}
              />
              <StatCard 
                value="20+" 
                label="Years of Experience" 
                delay={0.7}
              />
              <StatCard 
                value="4" 
                label="Countries" 
                delay={0.8}
              />
            </div>
          </AnimatedSection>
        </div>
      </div>

      {/* Custom CSS for animations */}
      <style jsx>{`
        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes float {
          0%, 100% {
            transform: translateY(0px) rotate(0deg);
          }
          50% {
            transform: translateY(-20px) rotate(5deg);
          }
        }

        @keyframes gradient {
          0%, 100% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
        }

        .animate-fade-in-up {
          animation: fade-in-up 0.8s ease-out forwards;
          opacity: 0;
        }

        .animate-float {
          animation: float 3s ease-in-out infinite;
        }

        .animate-gradient {
          background-size: 200% 200%;
          animation: gradient 3s ease infinite;
        }
      `}</style>
    </section>
  );
}

function StatCard({ value, label, delay }) {
  return (
    <div 
      className="group relative bg-white/60 backdrop-blur-sm rounded-2xl p-4 border border-neutral-200 hover:border-primary-300 hover:shadow-xl hover:scale-105 transition-all duration-300 cursor-default animate-fade-in-up"
      style={{ animationDelay: `${delay}s` }}
    >
      <div className="text-2xl md:text-3xl font-bold text-primary-600">
        <AnimatedCounter value={value} duration={2000} />
      </div>
      <div className="text-xs md:text-sm text-neutral-600 font-medium mt-1">{label}</div>
      
      {/* Hover Effect */}
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary-500/10 to-primary-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
    </div>
  );
}
