import React from 'react';
import { useLanguage } from '../context/LanguageContext';

export default function LanguageSwitcher({ className = '' }) {
  const { lang, setLang } = useLanguage();

  return (
    <div className={`inline-flex items-center bg-[#F3EFE6] border border-[#E2DDD2] rounded-full p-1 shadow-xs ${className}`}>
      <span className="sr-only">Select Language</span>
      <button
        type="button"
        onClick={() => setLang('en')}
        className={`px-3 py-1 text-xs font-semibold rounded-full transition-all flex items-center gap-1.5 cursor-pointer ${
          lang === 'en'
            ? 'bg-[#0E2922] text-[#FAF8F3] shadow-xs'
            : 'text-[#3D4744] hover:text-[#0E2922]'
        }`}
        aria-pressed={lang === 'en'}
      >
        <span>English</span>
      </button>

      <button
        type="button"
        onClick={() => setLang('ta')}
        className={`px-3 py-1 text-xs font-semibold rounded-full transition-all flex items-center gap-1.5 cursor-pointer font-['Noto_Sans_Tamil',sans-serif] ${
          lang === 'ta'
            ? 'bg-[#0E2922] text-[#FAF8F3] shadow-xs'
            : 'text-[#3D4744] hover:text-[#0E2922]'
        }`}
        aria-pressed={lang === 'ta'}
      >
        <span>தமிழ்</span>
      </button>
    </div>
  );
}
