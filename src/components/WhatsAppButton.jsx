import React from 'react';
import WhatsAppIcon from './WhatsAppIcon';
import { useLanguage } from '../context/LanguageContext';
import { getWhatsAppUrl } from '../data/company';

export default function WhatsAppButton() {
  const { lang } = useLanguage();

  return (
    <aside aria-label="WhatsApp Contact" className="fixed bottom-6 right-6 z-40 group">
      <a
        href={getWhatsAppUrl(null, lang)}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with Surya Poly Pack on WhatsApp"
        className="flex items-center justify-center w-14 h-14 rounded-full bg-[#25D366] text-white shadow-xl shadow-[#25D366]/30 hover:bg-[#20ba59] hover:scale-105 active:scale-95 transition-all duration-200"
      >
        <WhatsAppIcon className="w-7 h-7 text-white fill-white" />
        {/* Tooltip */}
        <span className="absolute right-16 bg-[#0B201A] border border-[#C8943D]/30 text-[#FAF8F3] text-xs font-semibold px-3 py-1.5 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap shadow-md pointer-events-none">
          {lang === 'ta' ? 'வாட்ஸ்அப்பில் தொடர்புகொள்ள' : 'Chat on WhatsApp'}
        </span>
      </a>
    </aside>
  );
}
