/**
 * Homepage - Main landing page
 * Migrated from Django index.html template
 * All original content preserved with enhanced styling and new sections
 */

import HeroSection from '@/components/home/HeroSection';
import ServicesSection from '@/components/home/ServicesSection';
import AboutSection from '@/components/home/AboutSection';
import ExperienceSection from '@/components/home/ExperienceSection';
import WorkWithMeSection from '@/components/home/WorkWithMeSection';
import VisionSection from '@/components/home/VisionSection';
import SocialMediaSection from '@/components/home/SocialMediaSection';
import TwitterFeedSection from '@/components/home/TwitterFeedSection';
import StartupInvestmentsSection from '@/components/home/StartupInvestmentsSection';
import CoreValuesSection from '@/components/home/CoreValuesSection';
import GroupCompaniesSection from '@/components/home/GroupCompaniesSection';
import TestimonialsSection from '@/components/home/TestimonialsSection';
import ArticlesSection from '@/components/home/ArticlesSection';
import LocationsSection from '@/components/home/LocationsSection';
import ContactSection from '@/components/home/ContactSection';

export default function HomePage() {
  return (
    <>
      {/* Hero Section - Introduction */}
      <HeroSection />

      {/* Services/Expertises Section */}
      <ServicesSection />

      {/* About Me Section */}
      <AboutSection />

      {/* Vision & Leadership Philosophy - NEW Professional Section */}
      <VisionSection />

      {/* Experience Section - Companies & Roles */}
      <ExperienceSection />

      {/* Work With Me - Business Consulting */}
      <WorkWithMeSection />

      {/* Social Media Presence */}
      <SocialMediaSection />

      {/* Twitter/X Feed - Live Updates */}
      <TwitterFeedSection />

      {/* Startup Investments */}
      <StartupInvestmentsSection />

      {/* Core Values - NEW Professional Section */}
      <CoreValuesSection />

      {/* Group of Companies */}
      <GroupCompaniesSection />

      {/* Client Testimonials */}
      <TestimonialsSection />

      {/* Articles & News */}
      <ArticlesSection />

      {/* Global Locations */}
      <LocationsSection />

      {/* Contact Form */}
      <ContactSection />
    </>
  );
}
