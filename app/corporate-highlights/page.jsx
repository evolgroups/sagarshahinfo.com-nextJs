import SectionHeading from '@/components/ui/SectionHeading';
import CorporateGallery from '@/components/corporate/CorporateGallery';

/**
 * Corporate Highlights Page - Corporate Events & Activities Gallery
 * Migrated from Django corporate_trip.html template
 * All original content preserved with enhanced styling
 */
export const metadata = {
  title: 'Corporate Highlights',
  description: 'Explore corporate events, client dinners, exhibitions, and business activities of Sagar Shah and Evol Group.',
  openGraph: {
    title: 'Corporate Highlights | Sagar Shah',
    description: 'Explore corporate events, client dinners, exhibitions, and business activities.',
  },
};

export default function CorporateHighlightsPage() {
  return (
    <section className="section-padding">
      <div className="container-custom">
        {/* Header */}
        <SectionHeading
          title="Corporate Highlights"
          subtitle="Explore our corporate events, client engagements, and business activities across the globe"
        />

        {/* Gallery */}
        <CorporateGallery />
      </div>
    </section>
  );
}
