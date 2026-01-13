'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { LayoutGrid, Utensils, Calendar, Building, Camera, X, ZoomIn } from 'lucide-react';
import AnimatedSection from '@/components/ui/AnimatedSection';
import { CORPORATE_GALLERY, CORPORATE_GALLERY_FILTERS } from '@/lib/constants';
import { cn, getGoogleDriveThumbnail } from '@/lib/utils';

/**
 * Corporate Gallery Component
 * Migrated from Django corporate_trip.html template
 */
const iconMap = {
  LayoutGrid,
  Utensils,
  Calendar,
  Building,
  Camera,
};

export default function CorporateGallery() {
  const [activeFilter, setActiveFilter] = useState('all');
  const [selectedImage, setSelectedImage] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [loadedImages, setLoadedImages] = useState({});

  const filteredGallery = activeFilter === 'all'
    ? CORPORATE_GALLERY
    : CORPORATE_GALLERY.filter((item) => item.category === activeFilter);

  const openModal = (item, index) => {
    setSelectedImage(item);
    setCurrentIndex(index);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  const navigate = (direction) => {
    const newIndex = direction === 'next'
      ? (currentIndex + 1) % filteredGallery.length
      : (currentIndex - 1 + filteredGallery.length) % filteredGallery.length;
    setCurrentIndex(newIndex);
    setSelectedImage(filteredGallery[newIndex]);
  };

  // Handle keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (!selectedImage) return;
      if (e.key === 'Escape') closeModal();
      if (e.key === 'ArrowLeft') navigate('prev');
      if (e.key === 'ArrowRight') navigate('next');
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedImage, currentIndex]);

  return (
    <>
      {/* Filter Tabs */}
      <div className="flex flex-wrap gap-3 justify-center mb-10">
        {CORPORATE_GALLERY_FILTERS.map((filter) => {
          const Icon = iconMap[filter.icon];
          return (
            <button
              key={filter.value}
              onClick={() => setActiveFilter(filter.value)}
              className={cn(
                'flex items-center gap-2 px-5 py-2.5 rounded-lg text-sm font-medium transition-all duration-300',
                activeFilter === filter.value
                  ? 'bg-primary-500 text-white shadow-lg'
                  : 'bg-neutral-100 text-neutral-600 hover:bg-neutral-200 hover:-translate-y-0.5'
              )}
            >
              <Icon className="w-4 h-4" />
              {filter.label}
            </button>
          );
        })}
      </div>

      {/* Gallery Grid - Masonry Layout */}
      <div className="masonry-gallery">
        {filteredGallery.map((item, index) => (
          <AnimatedSection
            key={item.id}
            animation="scale-in"
            delay={(index % 8) * 50}
          >
            <div
              onClick={() => openModal(item, index)}
              className="masonry-item bg-white rounded-xl overflow-hidden shadow-card hover:shadow-card-hover transition-all duration-300 cursor-pointer group"
            >
              <div className="relative overflow-hidden">
                <Image
                  src={getGoogleDriveThumbnail(item.id, 600)}
                  alt={item.title}
                  width={400}
                  height={300}
                  className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-500"
                  onLoad={() => setLoadedImages(prev => ({ ...prev, [item.id]: true }))}
                />
                
                {/* Overlay on hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-0 left-0 right-0 p-4">
                    <h5 className="text-white font-medium">{item.title}</h5>
                  </div>
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                    <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                      <ZoomIn className="w-6 h-6 text-white" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </AnimatedSection>
        ))}
      </div>

      {/* Empty State */}
      {filteredGallery.length === 0 && (
        <div className="text-center py-20">
          <div className="w-24 h-24 bg-neutral-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <Camera className="w-12 h-12 text-neutral-400" />
          </div>
          <h4 className="text-xl font-bold text-neutral-800 mb-2">No images found</h4>
          <p className="text-neutral-600">Try selecting a different category</p>
        </div>
      )}

      {/* Image Modal / Lightbox */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center"
          onClick={closeModal}
        >
          {/* Close button */}
          <button
            onClick={closeModal}
            className="absolute top-4 right-4 w-12 h-12 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center text-white z-10 transition-colors"
          >
            <X className="w-6 h-6" />
          </button>

          {/* Image */}
          <div
            className="relative max-w-5xl max-h-[85vh] mx-4"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={getGoogleDriveThumbnail(selectedImage.id, 1500)}
              alt={selectedImage.title}
              width={1200}
              height={800}
              className="max-w-full max-h-[85vh] object-contain rounded-lg"
            />
          </div>

          {/* Title */}
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-black/50 backdrop-blur-sm px-6 py-3 rounded-full">
            <p className="text-white text-center">{selectedImage.title}</p>
          </div>

          {/* Navigation */}
          <button
            onClick={(e) => { e.stopPropagation(); navigate('prev'); }}
            className="absolute left-4 top-1/2 -translate-y-1/2 w-14 h-14 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center text-white text-3xl transition-colors"
          >
            ‹
          </button>
          <button
            onClick={(e) => { e.stopPropagation(); navigate('next'); }}
            className="absolute right-4 top-1/2 -translate-y-1/2 w-14 h-14 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center text-white text-3xl transition-colors"
          >
            ›
          </button>

          {/* Counter */}
          <div className="absolute top-4 left-4 bg-black/50 backdrop-blur-sm px-4 py-2 rounded-full">
            <p className="text-white text-sm">
              {currentIndex + 1} / {filteredGallery.length}
            </p>
          </div>
        </div>
      )}
    </>
  );
}
