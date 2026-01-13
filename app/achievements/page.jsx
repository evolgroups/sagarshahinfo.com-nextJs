import SectionHeading from '@/components/ui/SectionHeading';
import CertificationsGallery from '@/components/achievements/CertificationsGallery';
import LinkedInCard from '@/components/achievements/LinkedInCard';

/**
 * Achievements Page - Certifications & Professional Achievements
 * Migrated from Django achievements.html template
 * All original content preserved with enhanced styling
 */
export const metadata = {
  title: 'Certifications & Achievements',
  description: 'Showcasing milestones, recognitions, and professional excellence of Sagar Shah - Microsoft Certified Professional, CCNA, and more.',
  openGraph: {
    title: 'Certifications & Achievements | Sagar Shah',
    description: 'Showcasing milestones, recognitions, and professional excellence of Sagar Shah.',
  },
};

export default function AchievementsPage() {
  return (
    <section className="section-padding">
      <div className="container-custom">
        {/* Header */}
        <div className="grid lg:grid-cols-3 gap-8 mb-12">
          <div className="lg:col-span-2">
            <SectionHeading
              title="Certifications & Achievements"
              subtitle="Showcasing our milestones, recognitions, and professional excellence."
              centered={false}
            />
          </div>
        </div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-4 gap-8">
          {/* Certifications Gallery */}
          <div className="lg:col-span-3">
            <CertificationsGallery />
          </div>

          {/* LinkedIn Card Sidebar */}
          <div className="lg:col-span-1">
            <div className="sticky top-24">
              <LinkedInCard />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
