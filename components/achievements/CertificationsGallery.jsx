'use client';

import { useState } from 'react';
import Image from 'next/image';
import { X, ZoomIn, ZoomOut, RotateCcw, Maximize } from 'lucide-react';
import AnimatedSection from '@/components/ui/AnimatedSection';
import { CERTIFICATIONS, CERTIFICATION_FILTERS } from '@/lib/constants';
import { cn } from '@/lib/utils';

/**
 * Certifications Gallery Component
 * Migrated from Django achievements.html template
 */
export default function CertificationsGallery() {
  const [activeFilter, setActiveFilter] = useState('all');
  const [selectedImage, setSelectedImage] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [zoom, setZoom] = useState(1);

  const filteredCertifications = activeFilter === 'all'
    ? CERTIFICATIONS
    : CERTIFICATIONS.filter((cert) => cert.category === activeFilter);

  const openModal = (cert, index) => {
    setSelectedImage(cert);
    setCurrentIndex(index);
    setZoom(1);
  };

  const closeModal = () => {
    setSelectedImage(null);
    setZoom(1);
  };

  const navigate = (direction) => {
    const newIndex = direction === 'next'
      ? (currentIndex + 1) % filteredCertifications.length
      : (currentIndex - 1 + filteredCertifications.length) % filteredCertifications.length;
    setCurrentIndex(newIndex);
    setSelectedImage(filteredCertifications[newIndex]);
    setZoom(1);
  };

  return (
    <>
      {/* Filter Tabs */}
      <div className="flex flex-wrap gap-2 justify-center mb-8">
        {CERTIFICATION_FILTERS.map((filter) => (
          <button
            key={filter.value}
            onClick={() => setActiveFilter(filter.value)}
            className={cn(
              'px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300',
              activeFilter === filter.value
                ? 'bg-primary-500 text-white'
                : 'bg-neutral-100 text-neutral-600 hover:bg-neutral-200'
            )}
          >
            {filter.label}
          </button>
        ))}
      </div>

      {/* Certifications Grid */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredCertifications.map((cert, index) => (
          <AnimatedSection
            key={cert.id}
            animation="scale-in"
            delay={index * 50}
          >
            <div
              onClick={() => openModal(cert, index)}
              className="bg-white rounded-2xl overflow-hidden shadow-card hover:shadow-card-hover transition-all duration-300 cursor-pointer group"
            >
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={cert.image}
                  alt={cert.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 flex items-center justify-center">
                  <ZoomIn className="w-10 h-10 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
              </div>
              <div className="p-4">
                <h5 className="font-bold text-neutral-800 line-clamp-2">{cert.title}</h5>
                {cert.year && (
                  <span className="text-sm text-neutral-500 mt-1 inline-block">
                    Year: {cert.year}
                  </span>
                )}
              </div>
            </div>
          </AnimatedSection>
        ))}
      </div>

      {/* Image Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4"
          onClick={closeModal}
        >
          {/* Controls */}
          <div className="absolute top-4 left-4 flex gap-2 z-10">
            <button
              onClick={(e) => { e.stopPropagation(); setZoom(z => Math.min(z + 0.2, 3)); }}
              className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center text-white hover:bg-white/20"
            >
              <ZoomIn className="w-5 h-5" />
            </button>
            <button
              onClick={(e) => { e.stopPropagation(); setZoom(z => Math.max(z - 0.2, 0.5)); }}
              className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center text-white hover:bg-white/20"
            >
              <ZoomOut className="w-5 h-5" />
            </button>
            <button
              onClick={(e) => { e.stopPropagation(); setZoom(1); }}
              className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center text-white hover:bg-white/20"
            >
              <RotateCcw className="w-5 h-5" />
            </button>
          </div>

          {/* Close button */}
          <button
            onClick={closeModal}
            className="absolute top-4 right-4 w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center text-white hover:bg-white/20 z-10"
          >
            <X className="w-6 h-6" />
          </button>

          {/* Image */}
          <div
            className="relative max-w-4xl max-h-[80vh] overflow-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={selectedImage.image}
              alt={selectedImage.title}
              width={800}
              height={600}
              className="object-contain transition-transform duration-300"
              style={{ transform: `scale(${zoom})` }}
            />
          </div>

          {/* Title */}
          <p className="absolute bottom-4 left-1/2 -translate-x-1/2 text-white text-center max-w-lg">
            {selectedImage.title}
          </p>

          {/* Navigation */}
          <button
            onClick={(e) => { e.stopPropagation(); navigate('prev'); }}
            className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/10 rounded-full flex items-center justify-center text-white hover:bg-white/20 text-2xl"
          >
            ‹
          </button>
          <button
            onClick={(e) => { e.stopPropagation(); navigate('next'); }}
            className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/10 rounded-full flex items-center justify-center text-white hover:bg-white/20 text-2xl"
          >
            ›
          </button>
        </div>
      )}
    </>
  );
}
