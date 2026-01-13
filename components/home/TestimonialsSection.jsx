'use client';

import { useState, useEffect, useCallback } from 'react';
import Image from 'next/image';
import { Star, ChevronLeft, ChevronRight, ArrowRight, Quote } from 'lucide-react';
import SectionHeading from '@/components/ui/SectionHeading';
import AnimatedSection from '@/components/ui/AnimatedSection';
import { TESTIMONIALS } from '@/lib/constants';

/**
 * Testimonials Section - Premium carousel design
 */
export default function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const nextSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % TESTIMONIALS.length);
  }, []);

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);
  };

  // Auto-play carousel
  useEffect(() => {
    if (!isAutoPlaying) return;
    const interval = setInterval(nextSlide, 5000);
    return () => clearInterval(interval);
  }, [isAutoPlaying, nextSlide]);

  return (
    <section id="testimonials" className="section-padding bg-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-primary-500/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-accent-400/5 rounded-full blur-3xl" />
      
      <div className="container-custom relative z-10">
        <SectionHeading
          title="What My Clients Say"
          subtitle="The customer tells us how to stay in business, and it is best we listen."
        />

        <AnimatedSection animation="fade-in-up">
          <div 
            className="relative max-w-5xl mx-auto"
            onMouseEnter={() => setIsAutoPlaying(false)}
            onMouseLeave={() => setIsAutoPlaying(true)}
          >
            {/* Navigation Arrows */}
            <button
              onClick={prevSlide}
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 lg:-translate-x-16 z-10 w-12 h-12 lg:w-14 lg:h-14 bg-white rounded-2xl shadow-card flex items-center justify-center hover:bg-primary-500 hover:text-white hover:shadow-button transition-all duration-300 group"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="w-6 h-6 text-neutral-600 group-hover:text-white" />
            </button>

            <button
              onClick={nextSlide}
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 lg:translate-x-16 z-10 w-12 h-12 lg:w-14 lg:h-14 bg-white rounded-2xl shadow-card flex items-center justify-center hover:bg-primary-500 hover:text-white hover:shadow-button transition-all duration-300 group"
              aria-label="Next testimonial"
            >
              <ChevronRight className="w-6 h-6 text-neutral-600 group-hover:text-white" />
            </button>

            {/* Testimonial Card */}
            <div className="bg-gradient-to-br from-neutral-50 to-white rounded-3xl shadow-glass border border-neutral-100 p-8 lg:p-12 overflow-hidden">
              {/* Quote icon */}
              <div className="absolute top-8 right-8 opacity-10">
                <Quote className="w-24 h-24 text-primary-500" />
              </div>
              
              <div className="grid lg:grid-cols-3 gap-8 items-center">
                {/* Content */}
                <div className="lg:col-span-2 order-2 lg:order-1">
                  {/* Rating */}
                  <div className="flex items-center gap-3 mb-6">
                    <div className="flex gap-1">
                      {[...Array(TESTIMONIALS[currentIndex].rating)].map((_, i) => (
                        <Star key={i} className="w-5 h-5 text-amber-400 fill-amber-400" />
                      ))}
                    </div>
                    <span className="text-neutral-500 font-medium">
                      {TESTIMONIALS[currentIndex].rating}.0 Rating
                    </span>
                  </div>

                  {/* Quote */}
                  <blockquote className="text-xl lg:text-2xl text-neutral-700 leading-relaxed mb-8">
                    <span className="line-clamp-4">&ldquo;{TESTIMONIALS[currentIndex].text}&rdquo;</span>
                  </blockquote>
                  
                  <a
                    href={TESTIMONIALS[currentIndex].reviewLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-primary-600 hover:text-primary-700 font-medium group"
                  >
                    Read Full Review
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </a>

                  {/* Author */}
                  <div className="mt-8 pt-8 border-t border-neutral-200">
                    <div className="flex items-center gap-4">
                      <div className={`w-14 h-14 rounded-xl ${TESTIMONIALS[currentIndex].bgColor} flex items-center justify-center`}>
                        <span className="text-xl font-bold text-neutral-500">
                          {TESTIMONIALS[currentIndex].initials}
                        </span>
                      </div>
                      <div>
                        <h4 className="text-lg font-bold text-neutral-800">
                          {TESTIMONIALS[currentIndex].name}
                        </h4>
                        <p className="text-neutral-500 text-sm">
                          {TESTIMONIALS[currentIndex].company}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Avatar */}
                <div className="lg:col-span-1 order-1 lg:order-2 flex justify-center">
                  <div className="relative">
                    {/* Decorative rings */}
                    <div className="absolute -inset-4 border-2 border-dashed border-primary-200 rounded-full opacity-50" />
                    <div className="absolute -inset-8 border-2 border-dashed border-primary-100 rounded-full opacity-30" />
                    
                    <div className={`relative w-40 h-40 lg:w-48 lg:h-48 rounded-full ${TESTIMONIALS[currentIndex].bgColor} flex items-center justify-center shadow-lg`}>
                      <span className="text-5xl lg:text-6xl font-bold text-neutral-400">
                        {TESTIMONIALS[currentIndex].initials}
                      </span>
                      
                      {/* Company Logo Badge */}
                      <div className="absolute -bottom-2 -right-2 w-14 h-14 bg-white rounded-2xl shadow-card flex items-center justify-center border border-neutral-100">
                        <Image
                          src={TESTIMONIALS[currentIndex].companyLogo}
                          alt={TESTIMONIALS[currentIndex].company}
                          width={32}
                          height={32}
                          className="object-contain"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Dots Navigation */}
            <div className="flex justify-center gap-2 mt-8">
              {TESTIMONIALS.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`h-3 rounded-full transition-all duration-300 ${
                    index === currentIndex
                      ? 'bg-primary-500 w-8'
                      : 'bg-neutral-300 w-3 hover:bg-neutral-400'
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
