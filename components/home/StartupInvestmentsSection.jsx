'use client';

import Image from 'next/image';
import { Rocket, TrendingUp, Target, ArrowRight, Sparkles } from 'lucide-react';
import AnimatedSection from '@/components/ui/AnimatedSection';
import Button from '@/components/ui/Button';
import { INVESTMENT_FOCUS_AREAS, INVESTMENT_IDEAL_FOR } from '@/lib/constants';

/**
 * Startup Investments Section - Premium investment showcase
 */
export default function StartupInvestmentsSection() {
  return (
    <section id="startup_investments" className="section-padding section-muted relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-primary-500/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-accent-400/5 rounded-full blur-3xl" />
      
      <div className="container-custom relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Content Column */}
          <AnimatedSection animation="slide-in-left">
            <div className="space-y-6">
              {/* Badge */}
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-accent-50 border border-accent-200 rounded-full">
                <Sparkles className="w-4 h-4 text-accent-600" />
                <span className="text-sm font-medium text-accent-700">Investment Opportunities</span>
              </div>
              
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-neutral-900">
                <span className="gradient-text">Startup Investments</span>
              </h2>
              
              <h4 className="text-xl font-semibold text-neutral-800">
                Got an innovative business idea?
              </h4>
              
              <p className="text-neutral-600 leading-relaxed text-lg">
                I&apos;m actively exploring investment opportunities in high-growth sectors like{' '}
                <span className="text-primary-600 font-semibold">
                  Blockchain, SaaS, AI, and FinTech.
                </span>
              </p>
              
              <p className="text-neutral-600 leading-relaxed">
                If your startup aligns with my vision, let&apos;s connect and explore potential
                partnerships that drive innovation forward.
              </p>

              <div className="grid md:grid-cols-2 gap-8 pt-6">
                {/* Investment Focus */}
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-amber-500 to-orange-500 flex items-center justify-center">
                      <Target className="w-5 h-5 text-white" />
                    </div>
                    <h4 className="text-lg font-bold text-neutral-800">Focus Areas</h4>
                  </div>
                  <div className="space-y-3">
                    {INVESTMENT_FOCUS_AREAS.map((item, index) => (
                      <InvestmentItem key={index} text={item} />
                    ))}
                  </div>
                </div>

                {/* Ideal For */}
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-emerald-500 to-teal-500 flex items-center justify-center">
                      <Rocket className="w-5 h-5 text-white" />
                    </div>
                    <h4 className="text-lg font-bold text-neutral-800">Ideal For</h4>
                  </div>
                  <div className="space-y-3">
                    {INVESTMENT_IDEAL_FOR.map((item, index) => (
                      <InvestmentItem key={index} text={item} />
                    ))}
                  </div>
                </div>
              </div>
              
              <div className="pt-4">
                <Button href="#contact-form" variant="accent" size="sm">
                  Pitch Your Idea
                  <ArrowRight className="w-4 h-4" />
                </Button>
              </div>
            </div>
          </AnimatedSection>

          {/* Image Column */}
          <AnimatedSection animation="slide-in-right">
            <div className="relative">
              <Image
                src="/images/startup.webp"
                alt="Startup Investments"
                width={600}
                height={400}
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

function InvestmentItem({ text }) {
  return (
    <div className="flex items-center gap-3 bg-white rounded-xl p-3 border border-neutral-100 hover:border-accent-200 hover:shadow-sm transition-all duration-300">
      <div className="w-2 h-2 bg-gradient-to-br from-accent-500 to-orange-500 rounded-full flex-shrink-0" />
      <span className="text-sm text-neutral-700 font-medium">{text}</span>
    </div>
  );
}
