import React from 'react';
import { Link } from 'react-router-dom';
import { Layers, Phone, Mail, MapPin, MessageCircle, ArrowUp } from 'lucide-react';
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
    <footer className="bg-[#231F20] text-[#F2F0F4] pt-16 pb-10 border-t border-black/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        
        {/* Main 4-column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-white/10">
          
          {/* Col 1: Brand & Bio */}
          <div className="lg:col-span-2 space-y-4">
            <Link to="/" className="flex items-center gap-3 group">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#5B2A86] to-[#6F42C1] flex items-center justify-center text-white shadow-md">
                <Layers className="w-5 h-5 text-white" />
              </div>
              <div>
                <div className="font-extrabold text-xl tracking-tight text-white font-['Outfit',sans-serif]">
                  SURYA <span className="text-[#8E5FD8]">POLY PACK</span>
                </div>
                <div className="text-[10px] uppercase tracking-wider text-[#F2F0F4]/60">
                  {t.brandSubtitle}
                </div>
              </div>
            </Link>

            <p className="text-xs text-[#F2F0F4]/75 leading-relaxed max-w-sm">
              {t.footer.companyDesc}
            </p>

            <div className="pt-2 flex items-center gap-3">
              <a
                href={getWhatsAppUrl(null, lang)}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-lg bg-[#25D366]/20 text-[#25D366] hover:bg-[#25D366]/30 text-xs font-semibold transition border border-[#25D366]/30"
              >
                <MessageCircle className="w-3.5 h-3.5" />
                <span>WhatsApp Enquiry</span>
              </a>
            </div>
          </div>

          {/* Col 2: Quick Links */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-white mb-4 font-['Outfit',sans-serif]">
              {t.footer.quickLinks}
            </h4>
            <ul className="space-y-2 text-xs font-medium text-[#F2F0F4]/80">
              <li>
                <Link to="/" className="hover:text-[#8E5FD8] transition block">
                  {t.nav.home}
                </Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-[#8E5FD8] transition block">
                  {t.nav.about}
                </Link>
              </li>
              <li>
                <Link to="/products" className="hover:text-[#8E5FD8] transition block">
                  {t.nav.products}
                </Link>
              </li>
              <li>
                <Link to="/machinery" className="hover:text-[#8E5FD8] transition block">
                  {t.nav.machinery}
                </Link>
              </li>
              <li>
                <Link to="/gallery" className="hover:text-[#8E5FD8] transition block">
                  {t.nav.gallery}
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-[#8E5FD8] transition block">
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
            <ul className="space-y-2 text-xs font-medium text-[#F2F0F4]/80">
              {productLinks.map((item, idx) => (
                <li key={idx}>
                  <Link to={item.path} className="hover:text-[#8E5FD8] transition block">
                    {lang === 'ta' ? item.nameTa : item.nameEn}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4: Contact Details Placeholders */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-white mb-4 font-['Outfit',sans-serif]">
              {t.footer.contactHeader}
            </h4>
            <div className="space-y-3 text-xs text-[#F2F0F4]/80">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#8E5FD8] shrink-0 mt-0.5" />
                <span>{COMPANY_INFO.address.full}</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#8E5FD8] shrink-0" />
                <a href={`tel:${COMPANY_INFO.phone.primaryRaw}`} className="hover:text-white transition">
                  {COMPANY_INFO.phone.primary}
                </a>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-[#8E5FD8] shrink-0" />
                <a href={`mailto:${COMPANY_INFO.email.sales}`} className="hover:text-white transition">
                  {COMPANY_INFO.email.sales}
                </a>
              </div>
              <div className="text-[11px] text-[#F2F0F4]/50 pt-1">
                {COMPANY_INFO.workingHours[lang]}
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Strip */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-[#F2F0F4]/60 gap-4">
          <p>© {new Date().getFullYear()} {t.footer.copyright}</p>
          <div className="flex items-center gap-4">
            <span className="hidden md:inline">{t.footer.disclaimer}</span>
            <button
              onClick={scrollToTop}
              className="p-2.5 rounded-lg bg-white/10 hover:bg-[#5B2A86] text-white transition flex items-center gap-1.5"
              aria-label={t.footer.backToTop}
            >
              <ArrowUp className="w-4 h-4" />
              <span className="hidden sm:inline text-[11px]">{t.footer.backToTop}</span>
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
}
