'use client';

import Image from 'next/image';
import { CheckCircle, Briefcase, Users, ArrowRight } from 'lucide-react';
import AnimatedSection from '@/components/ui/AnimatedSection';
import Button from '@/components/ui/Button';
import { CONSULTING_EXPERTISE, WHO_I_WORK_WITH } from '@/lib/constants';

/**
 * Work With Me Section - Premium Business Consulting layout
 */
export default function WorkWithMeSection() {
  return (
    <section id="work_with_me" className="section-padding bg-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary-500/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-accent-400/5 rounded-full blur-3xl" />
      
      <div className="container-custom relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image Column */}
          <AnimatedSection animation="slide-in-left">
            <div className="relative">
              <Image
                src="/images/0001.webp"
                alt="Business Consulting"
                width={600}
                height={400}
                className="w-full h-auto rounded-3xl shadow-2xl"
              />
              <div className="absolute -z-10 -bottom-4 -left-4 w-full h-full bg-primary-500/10 rounded-2xl" />
            </div>
          </AnimatedSection>

          {/* Content Column */}
          <AnimatedSection animation="slide-in-right">
            <div className="space-y-6">
              {/* Badge */}
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary-50 border border-primary-100 rounded-full">
                <span className="text-sm font-medium text-primary-700">Business Consulting</span>
              </div>
              
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-neutral-900">
                Let&apos;s <span className="gradient-text">Work Together</span>
              </h2>
              
              <p className="text-neutral-600 leading-relaxed text-lg">
                Let&apos;s take your business to the next level. I help you optimise
                strategies, streamline operations, and implement the right technology to support long-term
                growth.
              </p>
              
              <p className="text-neutral-600 leading-relaxed">
                With years of hands-on experience, I provide expert consulting across
                key business areas to help you grow with clarity and confidence.
              </p>

              <div className="grid md:grid-cols-2 gap-8 pt-6">
                {/* Expertise */}
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center">
                      <CheckCircle className="w-5 h-5 text-white" />
                    </div>
                    <h4 className="text-lg font-bold text-neutral-800">Expertise Includes</h4>
                  </div>
                  <div className="space-y-3">
                    {CONSULTING_EXPERTISE.map((item, index) => (
                      <ExpertiseItem key={index} text={item} />
                    ))}
                  </div>
                </div>

                {/* Who I Work With */}
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center">
                      <Users className="w-5 h-5 text-white" />
                    </div>
                    <h4 className="text-lg font-bold text-neutral-800">Who I Work With</h4>
                  </div>
                  <div className="space-y-3">
                    {WHO_I_WORK_WITH.map((item, index) => (
                      <ExpertiseItem key={index} text={item} />
                    ))}
                  </div>
                </div>
              </div>
              
              <div className="pt-4">
                <Button href="#contact-form" variant="primary" size="sm">
                  Start a Conversation
                  <ArrowRight className="w-4 h-4" />
                </Button>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}

function ExpertiseItem({ text }) {
  return (
    <div className="flex items-center gap-3 bg-neutral-50 hover:bg-white rounded-xl p-3 border border-neutral-100 hover:border-primary-200 hover:shadow-sm transition-all duration-300">
      <div className="w-2 h-2 bg-gradient-to-br from-primary-500 to-purple-500 rounded-full flex-shrink-0" />
      <span className="text-sm text-neutral-700 font-medium">{text}</span>
    </div>
  );
}
