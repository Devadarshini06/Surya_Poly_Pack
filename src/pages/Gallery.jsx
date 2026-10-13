import React, { useState, useEffect } from 'react';
import { 
  X, 
  ZoomIn, 
  ChevronLeft, 
  ChevronRight
} from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { GALLERY_ITEMS, GALLERY_CATEGORIES } from '../data/gallery';
import SectionHeading from '../components/SectionHeading';
import SEO from '../components/SEO';

export default function Gallery() {
  const { lang, t } = useLanguage();
  const [activeCategory, setActiveCategory] = useState('all');
  const [activeLightboxIndex, setActiveLightboxIndex] = useState(null);

  const filteredItems = activeCategory === 'all'
    ? GALLERY_ITEMS
    : GALLERY_ITEMS.filter(item => item.category === activeCategory);

  // Keyboard navigation for lightbox (Escape to close, Left/Right arrows)
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (activeLightboxIndex === null) return;
      if (e.key === 'Escape') {
        setActiveLightboxIndex(null);
      } else if (e.key === 'ArrowRight') {
        setActiveLightboxIndex((prev) => (prev + 1) % filteredItems.length);
      } else if (e.key === 'ArrowLeft') {
        setActiveLightboxIndex((prev) => (prev - 1 + filteredItems.length) % filteredItems.length);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [activeLightboxIndex, filteredItems.length]);

  const activeItem = activeLightboxIndex !== null ? filteredItems[activeLightboxIndex] : null;

  return (
    <div className="space-y-12 sm:space-y-16 py-10 sm:py-14 pb-20">
      <SEO 
        title={t.galleryPage.title}
        description={t.galleryPage.subtitle}
      />

      {/* Hero Banner */}
      <section className="max-w-7xl mx-auto px-4 sm:px-8">
        <div className="bg-[#F2F0F4] rounded-3xl p-8 sm:p-14 border border-[#E5E0EA] space-y-4">
          <SectionHeading
            badge={t.galleryPage.badge}
            title={t.galleryPage.title}
            subtitle={t.galleryPage.subtitle}
          />
          <div className="text-xs text-[#45414A] bg-white p-3.5 rounded-xl border border-[#E5E0EA] inline-block">
            ℹ️ {t.galleryPage.disclaimer}
          </div>
        </div>
      </section>

      {/* Category Filter Tabs */}
      <section className="max-w-7xl mx-auto px-4 sm:px-8 space-y-8">
        <div className="flex items-center gap-2 overflow-x-auto pb-2 border-b border-[#E5E0EA]">
          {GALLERY_CATEGORIES.map(cat => (
            <button
              key={cat.id}
              onClick={() => {
                setActiveCategory(cat.id);
                setActiveLightboxIndex(null);
              }}
              className={`px-4 py-2 rounded-xl text-xs font-bold whitespace-nowrap transition cursor-pointer ${
                activeCategory === cat.id
                  ? 'bg-[#5B2A86] text-white shadow-xs'
                  : 'bg-white border border-[#E5E0EA] text-[#45414A] hover:bg-[#F2F0F4]'
              }`}
            >
              {lang === 'ta' ? cat.nameTa : cat.nameEn}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredItems.map((item, idx) => {
            const title = lang === 'ta' ? item.titleTa : item.titleEn;
            const desc = lang === 'ta' ? item.descTa : item.descEn;

            return (
              <div
                key={item.id}
                onClick={() => setActiveLightboxIndex(idx)}
                className="bg-white rounded-2xl border border-[#E5E0EA] overflow-hidden group cursor-pointer card-hover-effect flex flex-col justify-between"
              >
                <div className="relative aspect-4/3 w-full bg-[#F2F0F4] overflow-hidden">
                  <img
                    src={item.image}
                    alt={title}
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <div className="p-3 rounded-full bg-white/90 text-[#5B2A86] shadow-lg">
                      <ZoomIn className="w-5 h-5" />
                    </div>
                  </div>
                  <span className="absolute top-3 left-3 px-2.5 py-0.5 rounded-md text-[10px] font-bold bg-[#231F20]/80 backdrop-blur-xs text-white">
                    {item.tag}
                  </span>
                </div>

                <div className="p-4 space-y-1">
                  <h3 className="text-sm font-bold text-[#231F20] font-['Outfit',sans-serif] line-clamp-1">
                    {title}
                  </h3>
                  <p className="text-xs text-[#45414A] line-clamp-2">
                    {desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Lightbox Modal */}
      {activeItem && (
        <div 
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4 sm:p-8 animate-in fade-in duration-200"
          role="dialog"
          aria-modal="true"
        >
          {/* Top Controls */}
          <div className="absolute top-4 right-4 z-10 flex items-center gap-3">
            <span className="text-xs text-white/70 hidden sm:inline">
              {t.galleryPage.zoomHint}
            </span>
            <button
              onClick={() => setActiveLightboxIndex(null)}
              className="p-2.5 rounded-full bg-white/10 hover:bg-white/20 text-white transition cursor-pointer"
              aria-label={t.galleryPage.closeLightbox}
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          {/* Left Arrow */}
          <button
            onClick={() => setActiveLightboxIndex((prev) => (prev - 1 + filteredItems.length) % filteredItems.length)}
            className="absolute left-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-white/10 hover:bg-white/20 text-white transition hidden sm:flex items-center justify-center cursor-pointer"
            aria-label="Previous image"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          {/* Right Arrow */}
          <button
            onClick={() => setActiveLightboxIndex((prev) => (prev + 1) % filteredItems.length)}
            className="absolute right-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-white/10 hover:bg-white/20 text-white transition hidden sm:flex items-center justify-center cursor-pointer"
            aria-label="Next image"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Main Content */}
          <div className="max-w-4xl w-full max-h-[85vh] flex flex-col items-center">
            <div className="rounded-2xl overflow-hidden max-h-[65vh] shadow-2xl bg-black border border-white/10">
              <img
                src={activeItem.image}
                alt={lang === 'ta' ? activeItem.titleTa : activeItem.titleEn}
                className="max-h-[65vh] w-auto object-contain mx-auto"
              />
            </div>

            {/* Lightbox Caption */}
            <div className="mt-4 text-center max-w-xl text-white space-y-1">
              <div className="text-xs font-bold uppercase tracking-wider text-[#8E5FD8]">
                {activeItem.tag}
              </div>
              <h3 className="text-lg font-bold">
                {lang === 'ta' ? activeItem.titleTa : activeItem.titleEn}
              </h3>
              <p className="text-xs text-white/70">
                {lang === 'ta' ? activeItem.descTa : activeItem.descEn}
              </p>
            </div>
          </div>
        </div>
      )}

    </div>
  );
}
