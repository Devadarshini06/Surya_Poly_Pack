import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle2, Info, X } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export default function ProductCard({ product }) {
  const { lang, t } = useLanguage();
  const [modalOpen, setModalOpen] = useState(false);

  const name = product.name[lang] || product.name.en;
  const description = product.description[lang] || product.description.en;
  const application = product.application[lang] || product.application.en;
  const features = product.features[lang] || product.features.en || [];

  return (
    <>
      <div className="bg-white rounded-2xl border border-[#E2DDD2] overflow-hidden flex flex-col justify-between card-hover-effect">
        <div>
          {/* Card Image Banner */}
          <div className="relative aspect-4/3 w-full bg-[#F3EFE6] overflow-hidden group">
            <img
              src={product.image}
              alt={name}
              loading="lazy"
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
            
            {/* Top Badges */}
            <div className="absolute top-3 left-3 flex flex-wrap gap-1.5">
              {product.isNonPlastic ? (
                <span className="px-2.5 py-1 rounded-md text-[11px] font-bold bg-[#1C473A] text-[#FAF8F3] shadow-xs border border-[#C8943D]/40">
                  🌱 {lang === 'ta' ? 'பிளாஸ்டிக் அல்லாத மாற்று' : 'Non-Plastic Alternative'}
                </span>
              ) : (
                <span className="px-2.5 py-1 rounded-md text-[11px] font-bold bg-[#0B201A]/85 backdrop-blur-xs text-[#FAF8F3]">
                  {product.materialType.split('/')[0]}
                </span>
              )}
            </div>

            {/* Quick Info Trigger */}
            <button
              type="button"
              onClick={() => setModalOpen(true)}
              className="absolute bottom-3 right-3 p-2 rounded-full bg-white/90 hover:bg-white text-[#0E2922] shadow-sm transition hover:scale-110 cursor-pointer"
              title={t.productsPage.detailsButton}
              aria-label={t.productsPage.detailsButton}
            >
              <Info className="w-4 h-4 text-[#C8943D]" />
            </button>
          </div>

          {/* Card Body */}
          <div className="p-5 space-y-3">
            <div>
              <h3 className="font-extrabold text-base sm:text-lg text-[#0E2922] font-['Outfit',sans-serif] leading-normal min-h-[3.25rem] flex items-center">
                {name}
              </h3>
              <p className="text-xs text-[#3D4744] leading-relaxed mt-1 line-clamp-2 min-h-[2.5rem]">
                {description}
              </p>
            </div>

            {/* Application Meta */}
            <div className="pt-2 border-t border-[#F3EFE6] space-y-1 text-xs">
              <div className="text-[11px] font-bold text-[#C8943D] uppercase tracking-wider">
                {t.productsPage.typicalApp}
              </div>
              <p className="text-[#3D4744] text-xs line-clamp-2 min-h-[2.25rem]">
                {application}
              </p>
            </div>
          </div>
        </div>

        {/* Card Footer Actions */}
        <div className="p-5 pt-0">
          <Link
            to={`/contact?product=${product.id}`}
            className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-[#0E2922] hover:bg-[#1C473A] text-[#FAF8F3] text-xs font-bold transition shadow-xs hover:shadow-md active:scale-98 border border-[#C8943D]/25"
          >
            <span>{t.productsPage.enquireButton}</span>
            <ArrowRight className="w-3.5 h-3.5 text-[#C8943D]" />
          </Link>
        </div>
      </div>

      {/* Technical Detail Modal */}
      {modalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs animate-in fade-in duration-150">
          <div 
            className="bg-white rounded-2xl max-w-lg w-full p-6 shadow-2xl border border-[#E2DDD2] relative max-h-[90vh] overflow-y-auto space-y-5"
            role="dialog"
            aria-modal="true"
          >
            <button
              onClick={() => setModalOpen(false)}
              className="absolute top-4 right-4 p-2 rounded-full text-[#3D4744] hover:bg-[#F3EFE6] transition cursor-pointer"
              aria-label="Close"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex items-start gap-4">
              <div className="w-16 h-16 rounded-xl bg-[#F3EFE6] overflow-hidden shrink-0 border border-[#E2DDD2]">
                <img src={product.image} alt={name} className="w-full h-full object-cover" />
              </div>
              <div>
                <span className="text-[11px] font-bold uppercase tracking-wider text-[#C8943D]">
                  {product.category}
                </span>
                <h3 className="text-xl font-extrabold text-[#0E2922] font-['Outfit',sans-serif]">
                  {name}
                </h3>
              </div>
            </div>

            <p className="text-sm text-[#3D4744] leading-relaxed">
              {description}
            </p>

            <div className="bg-[#FAF8F3] p-4 rounded-xl border border-[#E2DDD2] space-y-2">
              <div className="text-xs font-bold text-[#0E2922]">
                {t.productsPage.materialGrade} <span className="font-normal text-[#3D4744]">{product.materialType}</span>
              </div>
              <div className="text-xs font-bold text-[#0E2922]">
                {t.productsPage.typicalApp} <span className="font-normal text-[#3D4744]">{application}</span>
              </div>
            </div>

            {features.length > 0 && (
              <div className="space-y-2">
                <div className="text-xs font-bold uppercase tracking-wider text-[#0E2922]">
                  {lang === 'ta' ? 'முக்கிய அம்சங்கள்' : 'Key Features & Capabilities'}
                </div>
                <ul className="space-y-2">
                  {features.map((feat, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-xs text-[#3D4744]">
                      <CheckCircle2 className="w-4 h-4 text-[#C8943D] shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            <div className="pt-2 flex items-center justify-end gap-3">
              <button
                type="button"
                onClick={() => setModalOpen(false)}
                className="px-4 py-2 rounded-xl text-xs font-semibold text-[#3D4744] hover:bg-[#F3EFE6] cursor-pointer"
              >
                {lang === 'ta' ? 'மூடு' : 'Close'}
              </button>
              <Link
                to={`/contact?product=${product.id}`}
                onClick={() => setModalOpen(false)}
                className="inline-flex items-center gap-1.5 px-5 py-2 rounded-xl bg-[#0E2922] hover:bg-[#1C473A] text-[#FAF8F3] text-xs font-bold shadow-xs border border-[#C8943D]/30"
              >
                <span>{t.productsPage.enquireButton}</span>
                <ArrowRight className="w-3.5 h-3.5 text-[#C8943D]" />
              </Link>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
