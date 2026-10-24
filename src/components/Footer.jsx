import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, ArrowUp } from 'lucide-react';
import WhatsAppIcon from './WhatsAppIcon';
import { useLanguage } from '../context/LanguageContext';
import { COMPANY_INFO, getWhatsAppUrl } from '../data/company';

export default function Footer() {
  const { t, lang } = useLanguage();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const productLinks = [
    { nameEn: 'Food Packaging Covers', nameTa: 'உணவு பேக்கேஜிங் கவர்கள்', path: '/products?category=food' },
    { nameEn: 'Stand-Up & Zip-Lock Pouches', nameTa: 'ஸ்டாண்ட்-அப் & ஜிப்-லாக் பவுச்சுகள்', path: '/products?category=special' },
    { nameEn: 'Retail Grocery Carry Bags', nameTa: 'மளிகை கேரி பைகள்', path: '/products?category=bags_general' },
    { nameEn: 'Non-Plastic Alternative Bags', nameTa: 'பிளாஸ்டிக் அல்லாத மாற்று பைகள்', path: '/products?category=bags_general' },
    { nameEn: 'Industrial & Auto Covers', nameTa: 'தொழில்துறை & வாகன கவர்கள்', path: '/products?category=industrial_consumer' },
    { nameEn: 'Matches & Fireworks Covers', nameTa: 'தீப்பெட்டி & பட்டாசு கவர்கள்', path: '/products?category=industrial_consumer' }
  ];

  return (
    <footer 
      id="footer" 
      data-section-en="Footer & Company Info" 
      data-section-ta="நிறுவன விவரங்கள்"
      className="bg-[#0B2B22] text-[#FAF8F2] pt-16 pb-10 border-t border-[#102F26]"
    >
      <div className="max-w-[1400px] mx-auto px-4 sm:px-8">
        
        {/* Main 4-column Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 sm:gap-10 pb-12 border-b border-white/10">
          
          {/* Col 1: Brand & Bio */}
          <div className="lg:col-span-2 space-y-4">
            <Link to="/" className="inline-block group focus:outline-hidden">
              <div className="bg-[#FAF8F3] px-3.5 py-2.5 rounded-2xl inline-block shadow-md transition-transform group-hover:scale-[1.02]">
                <img
                  src={COMPANY_INFO.logo}
                  alt="Surya Poly Pack Logo"
                  className="h-10 sm:h-12 w-auto object-contain"
                />
              </div>
            </Link>

            <p className="text-xs text-[#F3EFE6]/75 leading-relaxed max-w-sm">
              {t.footer.companyDesc}
            </p>

            <div className="pt-2 flex flex-wrap items-center gap-2">
              <a
                href={getWhatsAppUrl(null, lang, COMPANY_INFO.phone.primaryRaw)}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#25D366]/20 text-[#25D366] hover:bg-[#25D366]/30 text-xs font-semibold transition border border-[#25D366]/30"
                title="WhatsApp Primary Number"
              >
                <WhatsAppIcon className="w-3.5 h-3.5 fill-current text-current" />
                <span>{COMPANY_INFO.phone.primary}</span>
              </a>
              <a
                href={getWhatsAppUrl(null, lang, COMPANY_INFO.phone.secondaryRaw)}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#25D366]/20 text-[#25D366] hover:bg-[#25D366]/30 text-xs font-semibold transition border border-[#25D366]/30"
                title="WhatsApp Secondary Number"
              >
                <WhatsAppIcon className="w-3.5 h-3.5 fill-current text-current" />
                <span>{COMPANY_INFO.phone.secondary}</span>
              </a>
            </div>
          </div>

          {/* Col 2: Quick Links */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-white mb-4 font-['Outfit',sans-serif]">
              {t.footer.quickLinks}
            </h4>
            <ul className="space-y-2 text-xs font-medium text-[#F3EFE6]/80">
              <li>
                <Link to="/" className="hover:text-[#DBB061] transition block">
                  {t.nav.home}
                </Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-[#DBB061] transition block">
                  {t.nav.about}
                </Link>
              </li>
              <li>
                <Link to="/products" className="hover:text-[#DBB061] transition block">
                  {t.nav.products}
                </Link>
              </li>
              <li>
                <Link to="/machinery" className="hover:text-[#DBB061] transition block">
                  {t.nav.machinery}
                </Link>
              </li>
              <li>
                <Link to="/gallery" className="hover:text-[#DBB061] transition block">
                  {t.nav.gallery}
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-[#DBB061] transition block">
                  {t.nav.contact}
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Product Lines */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-white mb-4 font-['Outfit',sans-serif]">
              {t.footer.productsHeader}
            </h4>
            <ul className="space-y-2 text-xs font-medium text-[#F3EFE6]/80">
              {productLinks.map((item, idx) => (
                <li key={idx}>
                  <Link to={item.path} className="hover:text-[#DBB061] transition block">
                    {lang === 'ta' ? item.nameTa : item.nameEn}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4: Contact Details */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-white mb-4 font-['Outfit',sans-serif]">
              {t.footer.contactHeader}
            </h4>
            <div className="space-y-3 text-xs text-[#F3EFE6]/80">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#C8943D] shrink-0 mt-0.5" />
                <span>{COMPANY_INFO.address[lang] || COMPANY_INFO.address.en}</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#C8943D] shrink-0" />
                <div className="flex flex-wrap items-center gap-1.5">
                  <a href={`tel:${COMPANY_INFO.phone.primaryRaw}`} className="hover:text-white transition">
                    {COMPANY_INFO.phone.primary}
                  </a>
                  <span className="text-white/40">/</span>
                  <a href={`tel:${COMPANY_INFO.phone.secondaryRaw}`} className="hover:text-white transition">
                    {COMPANY_INFO.phone.secondary}
                  </a>
                </div>
              </div>
              <div className="flex items-center gap-2.5">
                <WhatsAppIcon className="w-4 h-4 text-[#25D366] fill-[#25D366] shrink-0" />
                <div className="flex flex-wrap items-center gap-1.5">
                  <a href={getWhatsAppUrl(null, lang, COMPANY_INFO.phone.primaryRaw)} target="_blank" rel="noopener noreferrer" className="hover:text-[#25D366] transition">
                    {COMPANY_INFO.phone.primary}
                  </a>
                  <span className="text-white/40">/</span>
                  <a href={getWhatsAppUrl(null, lang, COMPANY_INFO.phone.secondaryRaw)} target="_blank" rel="noopener noreferrer" className="hover:text-[#25D366] transition">
                    {COMPANY_INFO.phone.secondary}
                  </a>
                </div>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-[#C8943D] shrink-0" />
                <a href={`mailto:${COMPANY_INFO.email.sales}`} className="hover:text-white transition">
                  {COMPANY_INFO.email.sales}
                </a>
              </div>
              <div className="text-[11px] text-[#F3EFE6]/50 pt-1">
                {COMPANY_INFO.workingHours[lang]}
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Strip */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-[#F3EFE6]/60 gap-4 text-center sm:text-left">
          <p>© {new Date().getFullYear()} {t.footer.copyright}</p>
          <div className="flex items-center gap-4">
            <button
              onClick={scrollToTop}
              className="p-2.5 rounded-lg bg-white/10 hover:bg-[#1C473A] text-white transition flex items-center gap-1.5 cursor-pointer"
              aria-label={t.footer.backToTop}
            >
              <ArrowUp className="w-4 h-4 text-[#C8943D]" />
              <span className="hidden sm:inline text-[11px]">{t.footer.backToTop}</span>
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
}
