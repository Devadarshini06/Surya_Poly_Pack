import React from 'react';
import { Link } from 'react-router-dom';
import { Home, Package } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import SEO from '../components/SEO';

export default function NotFound() {
  const { t } = useLanguage();

  return (
    <div className="min-h-[70vh] flex items-center justify-center px-4 py-16">
      <SEO 
        title={t.notFound.title}
        description={t.notFound.description}
      />
      
      <div className="max-w-md w-full text-center space-y-6 bg-white p-6 sm:p-12 rounded-3xl border border-[#E2DDD2] shadow-sm">
        <div className="w-20 h-20 rounded-2xl bg-[#0E2922]/10 text-[#0E2922] font-black text-3xl flex items-center justify-center mx-auto border border-[#C8943D]/20">
          404
        </div>

        <div className="space-y-2">
          <h1 className="text-2xl font-extrabold text-[#0E2922] font-['Outfit',sans-serif]">
            {t.notFound.title}
          </h1>
          <p className="text-xs sm:text-sm text-[#3D4744] leading-relaxed">
            {t.notFound.description}
          </p>
        </div>

        <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
          <Link
            to="/"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-2.5 rounded-xl bg-[#0E2922] hover:bg-[#1C473A] text-[#FAF8F3] text-xs font-bold shadow-md transition"
          >
            <Home className="w-4 h-4 text-[#C8943D]" />
            <span>{t.notFound.btnHome}</span>
          </Link>

          <Link
            to="/products"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-2.5 rounded-xl bg-white border border-[#E2DDD2] hover:bg-[#F3EFE6] text-[#0E2922] text-xs font-bold transition"
          >
            <Package className="w-4 h-4 text-[#C8943D]" />
            <span>{t.notFound.btnProducts}</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
