'use client';

import { useState } from 'react';
import Image from 'next/image';
import { ArrowRight, ChevronDown, Newspaper, Calendar } from 'lucide-react';
import AnimatedSection from '@/components/ui/AnimatedSection';
import { BLOG_ARTICLES, BLOG_CATEGORIES } from '@/lib/constants';

/**
 * Articles & News Section - Premium blog posts grid
 */
export default function ArticlesSection() {
  const [showDropdown, setShowDropdown] = useState(false);
  const [visibleCount, setVisibleCount] = useState(4);

  const showMore = () => {
    setVisibleCount((prev) => Math.min(prev + 4, BLOG_ARTICLES.length));
  };

  return (
    <section id="articles" className="section-padding bg-white relative">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary-500/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-accent-400/5 rounded-full blur-3xl" />
      
      <div className="container-custom relative z-10">
        {/* Header with Explorer Dropdown */}
        <div className="relative z-30">
          <AnimatedSection animation="fade-in-up">
            <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
              <div>
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary-50 border border-primary-100 rounded-full mb-4">
                  <Newspaper className="w-4 h-4 text-primary-600" />
                  <span className="text-sm font-medium text-primary-700">Latest Updates</span>
                </div>
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-3">
                  <span className="gradient-text">Articles & News</span>
                </h2>
                <p className="text-neutral-500 text-lg">Stay updated with our latest insights and industry news</p>
              </div>

              {/* Explorer Dropdown */}
              <div className="relative">
                <button
                  onClick={() => setShowDropdown(!showDropdown)}
                  className="group flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-primary-600 to-primary-500 text-white rounded-full text-sm font-medium shadow-button hover:shadow-button-hover hover:scale-105 transition-all duration-300"
                >
                  Explorer
                  <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${showDropdown ? 'rotate-180' : ''}`} />
                </button>

                {showDropdown && (
                  <>
                    {/* Backdrop to close dropdown */}
                    <div 
                      className="fixed inset-0" 
                      onClick={() => setShowDropdown(false)}
                    />
                    <div className="absolute right-0 mt-3 w-56 bg-white rounded-2xl shadow-2xl border border-neutral-100 overflow-hidden">
                      <div className="p-2">
                        {BLOG_CATEGORIES.map((category) => (
                          <a
                            key={category.name}
                            href={category.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center justify-between px-4 py-3 rounded-xl text-neutral-700 hover:bg-primary-50 hover:text-primary-600 transition-colors group"
                            onClick={() => setShowDropdown(false)}
                          >
                            <span>{category.name}</span>
                            <ArrowRight className="w-4 h-4 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                          </a>
                        ))}
                      </div>
                    </div>
                  </>
                )}
              </div>
            </div>
          </AnimatedSection>
        </div>

        {/* Articles Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 relative z-10">
          {BLOG_ARTICLES.slice(0, visibleCount).map((article, index) => (
            <AnimatedSection
              key={article.id}
              animation="fade-in-up"
              delay={index * 100}
              className="h-full"
            >
              <ArticleCard {...article} />
            </AnimatedSection>
          ))}
        </div>

        {/* Show More Button */}
        {visibleCount < BLOG_ARTICLES.length && (
          <div className="text-center mt-12">
            <button
              onClick={showMore}
              className="group inline-flex items-center gap-2 px-5 py-2.5 bg-white border-2 border-primary-500 text-primary-600 rounded-full text-sm font-medium hover:bg-primary-500 hover:text-white shadow-card hover:shadow-card-hover transition-all duration-300"
            >
              Load More Articles
              <ChevronDown className="w-4 h-4 group-hover:translate-y-1 transition-transform" />
            </button>
          </div>
        )}
      </div>
    </section>
  );
}

function ArticleCard({ title, image, date, link, category }) {
  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="group block h-full bg-white rounded-3xl shadow-card border border-neutral-100 overflow-hidden hover:shadow-card-hover hover:-translate-y-2 transition-all duration-500"
    >
      {/* Image */}
      <div className="relative h-52 overflow-hidden">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover group-hover:scale-110 transition-transform duration-700"
        />
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        
        {/* Category Badge */}
        <div className="absolute top-4 left-4">
          <span className="px-3 py-1.5 bg-white/90 backdrop-blur-sm rounded-full text-xs font-semibold text-primary-600 shadow-sm">
            {category}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        <h4 className="text-lg font-bold text-neutral-800 mb-4 line-clamp-2 group-hover:text-primary-600 transition-colors">
          {title}
        </h4>

        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2 text-neutral-500 text-sm">
            <Calendar className="w-4 h-4" />
            <span>{date}</span>
          </div>
          <span className="flex items-center gap-1 text-primary-500 font-medium text-sm opacity-0 group-hover:opacity-100 transition-opacity">
            Read
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </span>
        </div>
      </div>
    </a>
  );
}
