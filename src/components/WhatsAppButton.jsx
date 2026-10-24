import React, { useState, useRef, useEffect } from 'react';
import WhatsAppIcon from './WhatsAppIcon';
import { useLanguage } from '../context/LanguageContext';
import { COMPANY_INFO, getWhatsAppUrl } from '../data/company';
import { X } from 'lucide-react';

export default function WhatsAppButton() {
  const { lang } = useLanguage();
  const [open, setOpen] = useState(false);
  const menuRef = useRef(null);

  // Close popup when clicking outside
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        setOpen(false);
      }
    };
    if (open) {
      document.addEventListener('mousedown', handleClickOutside);
    }
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [open]);

  return (
    <aside 
      aria-label="WhatsApp Contact" 
      className="fixed bottom-4 sm:bottom-6 right-4 sm:right-6 z-40 select-none font-sans"
      ref={menuRef}
    >
      {/* 2-Number Selection Popover */}
      {open && (
        <div 
          className="absolute bottom-16 right-0 mb-2 w-[calc(100vw-2rem)] max-w-xs sm:w-80 bg-white/98 backdrop-blur-xl border border-[#E4DED1] rounded-2xl p-4 shadow-2xl text-[#27312D] animate-in fade-in slide-in-from-bottom-3 duration-150"
          role="dialog"
          aria-label={lang === 'ta' ? 'வாட்ஸ்அப் எண்கள்' : 'WhatsApp Contacts'}
        >
          {/* Header */}
          <div className="flex items-center justify-between pb-3 mb-3 border-b border-[#E4DED1]">
            <div className="flex items-center gap-2">
              <div className="w-7 h-7 rounded-lg bg-[#25D366] text-white flex items-center justify-center shrink-0">
                <WhatsAppIcon className="w-4 h-4 fill-white text-white" />
              </div>
              <div>
                <h4 className="text-xs font-extrabold text-[#0B2B22]">
                  {lang === 'ta' ? 'வாட்ஸ்அப் தொடர்பு' : 'Connect on WhatsApp'}
                </h4>
                <p className="text-[10px] text-[#58615B]">
                  {lang === 'ta' ? 'எந்த எண்ணைத் தொடர்புகொள்ள விரும்புகிறீர்கள்?' : 'Select a number to chat:'}
                </p>
              </div>
            </div>
            <button
              type="button"
              onClick={() => setOpen(false)}
              className="p-1 rounded-lg text-[#58615B] hover:text-[#0B2B22] hover:bg-[#F1EBDD] transition cursor-pointer"
              aria-label="Close"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          {/* Number 1 Option */}
          <div className="space-y-2">
            <a
              href={getWhatsAppUrl(null, lang, COMPANY_INFO.phone.primaryRaw)}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setOpen(false)}
              className="group block p-3 rounded-xl bg-[#FAF8F2] hover:bg-[#25D366] hover:text-white border border-[#E4DED1] hover:border-[#25D366] transition-all shadow-xs"
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#25D366] group-hover:bg-white animate-pulse"></span>
                  <span className="text-xs font-bold text-[#0B2B22] group-hover:text-white">
                    {COMPANY_INFO.phone.primary}
                  </span>
                </div>
                <WhatsAppIcon className="w-4 h-4 text-[#25D366] fill-[#25D366] group-hover:text-white group-hover:fill-white" />
              </div>
              <div className="text-[11px] text-[#58615B] group-hover:text-white/90 mt-1 pl-4">
                {lang === 'ta' ? 'விற்பனை & தனிப்பயன் பேக்கேஜிங்' : 'Sales & Packaging Enquiries'}
              </div>
            </a>

            {/* Number 2 Option */}
            <a
              href={getWhatsAppUrl(null, lang, COMPANY_INFO.phone.secondaryRaw)}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setOpen(false)}
              className="group block p-3 rounded-xl bg-[#FAF8F2] hover:bg-[#25D366] hover:text-white border border-[#E4DED1] hover:border-[#25D366] transition-all shadow-xs"
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#25D366] group-hover:bg-white animate-pulse"></span>
                  <span className="text-xs font-bold text-[#0B2B22] group-hover:text-white">
                    {COMPANY_INFO.phone.secondary}
                  </span>
                </div>
                <WhatsAppIcon className="w-4 h-4 text-[#25D366] fill-[#25D366] group-hover:text-white group-hover:fill-white" />
              </div>
              <div className="text-[11px] text-[#58615B] group-hover:text-white/90 mt-1 pl-4">
                {lang === 'ta' ? 'வாடிக்கையாளர் சேவை & ஆலை ஆதரவு' : 'Customer Support & Plant Orders'}
              </div>
            </a>
          </div>

          <div className="mt-3 pt-2.5 border-t border-[#E4DED1] text-center text-[10px] text-[#58615B]">
            {COMPANY_INFO.workingHours[lang]}
          </div>
        </div>
      )}

      {/* Floating Action Trigger Button */}
      <button
        type="button"
        onClick={() => setOpen(!open)}
        aria-label="Chat with Surya Poly Pack on WhatsApp"
        aria-expanded={open}
        className="flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-[#25D366] text-white shadow-xl shadow-[#25D366]/35 hover:bg-[#20ba59] hover:scale-105 active:scale-95 transition-all duration-200 cursor-pointer relative group"
      >
        <WhatsAppIcon className="w-6 h-6 sm:w-7 sm:h-7 text-white fill-white" />
        
        {/* Mini 2-number badge */}
        <span className="absolute -top-1 -right-1 w-5 h-5 rounded-full bg-[#0B2B22] text-[#FAF8F2] text-[10px] font-black flex items-center justify-center border-2 border-white shadow-xs">
          2
        </span>

        {/* Hover Tooltip (when closed) */}
        {!open && (
          <span className="absolute right-16 bg-[#0B201A] border border-[#C8943D]/30 text-[#FAF8F3] text-xs font-semibold px-3 py-1.5 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap shadow-md pointer-events-none">
            {lang === 'ta' ? '2 வாட்ஸ்அப் எண்கள்' : 'Chat on WhatsApp (2 numbers)'}
          </span>
        )}
      </button>
    </aside>
  );
}
