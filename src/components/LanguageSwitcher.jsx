import React from 'react';
import { useLanguage } from '../context/LanguageContext';

export default function LanguageSwitcher({ className = '' }) {
  const { lang, setLang } = useLanguage();

  return (
    <div className={`inline-flex items-center bg-[#F1EBDD] border border-[#E4DED1] rounded-full p-0.5 sm:p-1 shadow-xs ${className}`}>
      <span className="sr-only">Select Language</span>
      <button
        type="button"
        onClick={() => setLang('en')}
        className={`px-2 sm:px-3 py-0.5 sm:py-1 text-[11px] sm:text-xs font-semibold rounded-full transition-all flex items-center gap-1 cursor-pointer ${
          lang === 'en'
            ? 'bg-[#0B2B22] text-[#FAF8F2] shadow-xs'
            : 'text-[#58615B] hover:text-[#0B2B22]'
        }`}
        aria-pressed={lang === 'en'}
      >
        <span>English</span>
      </button>

      <button
        type="button"
        onClick={() => setLang('ta')}
        className={`px-2 sm:px-3 py-0.5 sm:py-1 text-[11px] sm:text-xs font-semibold rounded-full transition-all flex items-center gap-1 cursor-pointer font-['Noto_Sans_Tamil',sans-serif] ${
          lang === 'ta'
            ? 'bg-[#0B2B22] text-[#FAF8F2] shadow-xs'
            : 'text-[#58615B] hover:text-[#0B2B22]'
        }`}
        aria-pressed={lang === 'ta'}
      >
        <span>தமிழ்</span>
      </button>
    </div>
  );
}
