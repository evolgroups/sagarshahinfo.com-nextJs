'use client';

import Image from 'next/image';
import { MapPin, Building2 } from 'lucide-react';
import SectionHeading from '@/components/ui/SectionHeading';
import AnimatedSection from '@/components/ui/AnimatedSection';
import { LOCATIONS } from '@/lib/constants';

/**
 * Locations Section - Premium global office presence design
 */
export default function LocationsSection() {
  return (
    <section id="locations" className="section-padding section-muted relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-primary-500/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-accent-400/5 rounded-full blur-3xl" />
      
      <div className="container-custom relative z-10">
        <SectionHeading
          title="Global Presence"
          subtitle="Operating across key international cities to stay closer to the vision, people, and purpose that define our journey."
        />

        <div className="space-y-16">
          {LOCATIONS.map((location, locationIndex) => (
            <div key={location.country}>
              {/* Country Header */}
              <AnimatedSection animation="fade-in-up" delay={locationIndex * 100}>
                <div className="flex items-center gap-4 mb-8">
                  <Image
                    src={location.flag}
                    alt={`${location.country} flag`}
                    width={60}
                    height={40}
                    className="rounded-lg"
                  />
                  <div>
                    <h3 className="text-2xl md:text-3xl font-bold gradient-text">
                      {location.country.toUpperCase()}
                    </h3>
                    <p className="text-neutral-500 text-sm">{location.cities.length} Office{location.cities.length > 1 ? 's' : ''}</p>
                  </div>
                </div>
              </AnimatedSection>

              {/* City Cards Grid */}
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {location.cities.map((city, cityIndex) => (
                  <AnimatedSection
                    key={`${city.name}-${cityIndex}`}
                    animation="fade-in-up"
                    delay={(locationIndex * 100) + (cityIndex * 100)}
                    className="h-full"
                  >
                    <CityCard {...city} />
                  </AnimatedSection>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function CityCard({ name, address, icon }) {
  return (
    <div className="h-full group bg-white rounded-3xl shadow-card border border-neutral-100 p-8 text-center hover:shadow-card-hover hover:-translate-y-2 transition-all duration-500 relative overflow-hidden">
      {/* Gradient accent on hover */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary-500 via-purple-500 to-accent-400 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      
      {/* City Icon */}
      <div className="mb-6 relative">
        <div className="absolute inset-0 bg-primary-500/10 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        <Image
          src={icon}
          alt={name}
          width={100}
          height={100}
          className="relative mx-auto group-hover:scale-110 transition-transform duration-500"
        />
      </div>

      {/* City Name */}
      <div className="flex items-center justify-center gap-2 mb-4">
        <MapPin className="w-5 h-5 text-primary-500" />
        <h5 className="text-xl font-bold text-neutral-800">{name.toUpperCase()}</h5>
      </div>

      {/* Address */}
      <p className="text-neutral-500 text-sm leading-relaxed">{address}</p>
    </div>
  );
}
