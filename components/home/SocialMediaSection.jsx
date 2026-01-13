'use client';

import { Twitter, Facebook, Linkedin, Instagram, CheckCircle, Users } from 'lucide-react';
import SectionHeading from '@/components/ui/SectionHeading';
import AnimatedSection from '@/components/ui/AnimatedSection';
import AnimatedCounter from '@/components/ui/AnimatedCounter';
import Button from '@/components/ui/Button';
import { SOCIAL_LINKS, SOCIAL_MEDIA_STATS } from '@/lib/constants';

/**
 * Social Media Presence Section - Premium card design
 */
export default function SocialMediaSection() {
  return (
    <section id="social-media" className="section-padding bg-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-primary-500/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-accent-400/5 rounded-full blur-3xl" />
      
      <div className="container-custom relative z-10">
        <SectionHeading 
          title="Social Media Presence" 
          subtitle="Join our growing community across all platforms"
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <AnimatedSection animation="fade-in-up" delay={0}>
            <SocialCard
              platform="twitter"
              handle="@sagarshah07"
              followers={SOCIAL_MEDIA_STATS.twitter}
              icon={Twitter}
              link={SOCIAL_LINKS.twitter}
              verified={false}
            />
          </AnimatedSection>

          <AnimatedSection animation="fade-in-up" delay={100}>
            <SocialCard
              platform="facebook"
              handle="@sagarshah07"
              followers={SOCIAL_MEDIA_STATS.facebook}
              icon={Facebook}
              link={SOCIAL_LINKS.facebook}
              verified={true}
            />
          </AnimatedSection>

          <AnimatedSection animation="fade-in-up" delay={200}>
            <SocialCard
              platform="linkedin"
              handle="@sagarshah07"
              followers={SOCIAL_MEDIA_STATS.linkedin}
              icon={Linkedin}
              link={SOCIAL_LINKS.linkedin}
              verified={false}
            />
          </AnimatedSection>

          <AnimatedSection animation="fade-in-up" delay={300}>
            <SocialCard
              platform="instagram"
              handle="@sagarshah07"
              followers={SOCIAL_MEDIA_STATS.instagram}
              icon={Instagram}
              link={SOCIAL_LINKS.instagram}
              verified={true}
            />
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}

function SocialCard({ platform, handle, followers, icon: Icon, link, verified }) {
  const colors = {
    twitter: {
      gradient: 'from-sky-400 to-blue-500',
      bg: 'bg-sky-50',
      iconBg: 'bg-twitter',
    },
    facebook: {
      gradient: 'from-blue-500 to-blue-600',
      bg: 'bg-blue-50',
      iconBg: 'bg-facebook',
    },
    linkedin: {
      gradient: 'from-blue-600 to-blue-700',
      bg: 'bg-blue-50',
      iconBg: 'bg-linkedin',
    },
    instagram: {
      gradient: 'from-pink-500 via-purple-500 to-orange-400',
      bg: 'bg-pink-50',
      iconBg: 'bg-gradient-to-br from-pink-500 via-purple-500 to-orange-400',
    },
  };

  const colorClasses = colors[platform];

  return (
    <div className="group bg-white rounded-3xl p-8 shadow-card border border-neutral-100 hover:shadow-card-hover hover:-translate-y-2 transition-all duration-500 text-center relative overflow-hidden">
      {/* Gradient line at top */}
      <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${colorClasses.gradient}`} />
      
      {/* Icon */}
      <div className={`w-16 h-16 ${colorClasses.iconBg} rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg group-hover:scale-110 transition-transform duration-500`}>
        <Icon className="w-8 h-8 text-white" />
      </div>
      
      {/* Handle */}
      <div className="flex items-center justify-center gap-2 mb-4">
        <span className="text-neutral-700 font-medium">{handle}</span>
        {verified && (
          <CheckCircle className="w-5 h-5 text-blue-500 fill-blue-500" />
        )}
      </div>

      {/* Followers count */}
      <div className="mb-6">
        <span className="text-4xl font-bold gradient-text">
          <AnimatedCounter value={followers} duration={2000} />
        </span>
        <div className="flex items-center justify-center gap-1 mt-2">
          <Users className="w-4 h-4 text-neutral-400" />
          <p className="text-sm text-neutral-500">Followers</p>
        </div>
      </div>

      <Button
        href={link}
        external
        variant={platform}
        size="sm"
        className="w-full"
      >
        {platform === 'linkedin' ? 'Connect' : 'Follow'}
      </Button>
    </div>
  );
}
