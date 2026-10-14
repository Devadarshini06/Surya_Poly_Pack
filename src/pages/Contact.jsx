import React from 'react';
import { useSearchParams } from 'react-router-dom';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock 
} from 'lucide-react';
import WhatsAppIcon from '../components/WhatsAppIcon';
import { useLanguage } from '../context/LanguageContext';
import { COMPANY_INFO, getWhatsAppUrl } from '../data/company';
import { PRODUCTS } from '../data/products';
import SectionHeading from '../components/SectionHeading';
import EnquiryForm from '../components/EnquiryForm';
import SEO from '../components/SEO';

export default function Contact() {
  const { lang, t } = useLanguage();
  const [searchParams] = useSearchParams();

  // Find product name if query param `?product=slug` is given
  const productParam = searchParams.get('product');
  const matchedProduct = PRODUCTS.find(p => p.id === productParam);
  const initialProductName = matchedProduct ? matchedProduct.name.en : '';

  return (
    <div className="space-y-16 sm:space-y-20 py-10 sm:py-14 pb-20">
      <SEO 
        title={t.contactPage.title}
        description={t.contactPage.subtitle}
      />

      {/* Hero Banner */}
      <section 
        id="contact-hero" 
        data-section-en="Contact Overview" 
        data-section-ta="தொடர்பு கண்ணோட்டம்"
        className="max-w-7xl mx-auto px-4 sm:px-8"
      >
        <div className="bg-[#F3EFE6] rounded-3xl p-8 sm:p-14 border border-[#E2DDD2] space-y-4">
          <SectionHeading
            badge={t.contactPage.badge}
            title={t.contactPage.title}
            subtitle={t.contactPage.subtitle}
          />
        </div>
      </section>

      {/* Contact Grid: Details on Left, Enquiry Form on Right */}
      <section 
        id="contact-details" 
        data-section-en="Enquiry & Facility Details" 
        data-section-ta="விசாரணை & ஆலை விவரங்கள்"
        className="max-w-7xl mx-auto px-4 sm:px-8"
      >
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          
          {/* Left Column: Contact Cards & Info */}
          <div className="lg:col-span-5 space-y-6">
            
            <div className="bg-white rounded-3xl border border-[#E2DDD2] p-6 sm:p-8 space-y-6 shadow-sm">
              <h3 className="text-xl font-extrabold text-[#0E2922] font-['Outfit',sans-serif]">
                {t.contactPage.infoHeading}
              </h3>

              <div className="space-y-5 text-sm">
                
                {/* Phone Numbers */}
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-[#0E2922]/10 text-[#0E2922] flex items-center justify-center shrink-0">
                    <Phone className="w-5 h-5 text-[#C8943D]" />
                  </div>
                  <div className="space-y-1">
                    <div className="text-xs font-bold uppercase tracking-wider text-[#3D4744]">
                      {t.contactPage.phoneLabel}
                    </div>
                    <div className="space-y-1.5 pt-0.5">
                      <div className="flex flex-wrap items-center gap-2">
                        <a 
                          href={`tel:${COMPANY_INFO.phone.primaryRaw}`}
                          className="font-bold text-base text-[#0E2922] hover:text-[#C8943D] transition"
                        >
                          {COMPANY_INFO.phone.primary}
                        </a>
                        <span className="text-[11px] px-2 py-0.5 rounded-md bg-[#25D366]/15 text-[#25D366] font-bold inline-flex items-center gap-1">
                          <WhatsAppIcon className="w-3 h-3 text-[#25D366]" />
                          WhatsApp
                        </span>
                      </div>
                      <div>
                        <a 
                          href={`tel:${COMPANY_INFO.phone.secondaryRaw}`}
                          className="font-bold text-base text-[#0E2922] hover:text-[#C8943D] transition block"
                        >
                          {COMPANY_INFO.phone.secondary}
                        </a>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Email Address */}
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-[#0E2922]/10 text-[#0E2922] flex items-center justify-center shrink-0">
                    <Mail className="w-5 h-5 text-[#C8943D]" />
                  </div>
                  <div>
                    <div className="text-xs font-bold uppercase tracking-wider text-[#3D4744]">
                      {t.contactPage.emailLabel}
                    </div>
                    <a 
                      href={`mailto:${COMPANY_INFO.email.sales}`}
                      className="font-bold text-[#0E2922] hover:text-[#C8943D] transition block mt-0.5 break-all"
                    >
                      {COMPANY_INFO.email.sales}
                    </a>
                  </div>
                </div>

                {/* Business Address */}
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-[#0E2922]/10 text-[#0E2922] flex items-center justify-center shrink-0">
                    <MapPin className="w-5 h-5 text-[#C8943D]" />
                  </div>
                  <div>
                    <div className="text-xs font-bold uppercase tracking-wider text-[#3D4744]">
                      {t.contactPage.addressLabel}
                    </div>
                    <div className="font-semibold text-[#0E2922] mt-0.5 leading-relaxed">
                      {COMPANY_INFO.address[lang] || COMPANY_INFO.address.en}
                    </div>
                  </div>
                </div>

                {/* Working Hours */}
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-[#0E2922]/10 text-[#0E2922] flex items-center justify-center shrink-0">
                    <Clock className="w-5 h-5 text-[#C8943D]" />
                  </div>
                  <div>
                    <div className="text-xs font-bold uppercase tracking-wider text-[#3D4744]">
                      {t.contactPage.hoursLabel}
                    </div>
                    <div className="font-semibold text-[#0E2922] mt-0.5">
                      {COMPANY_INFO.workingHours[lang]}
                    </div>
                  </div>
                </div>

              </div>

              {/* WhatsApp Quick Action Button */}
              <div className="pt-4 border-t border-[#E2DDD2]">
                <a
                  href={getWhatsAppUrl(null, lang)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2.5 px-6 py-3 rounded-xl bg-[#25D366] hover:bg-[#20ba59] text-white font-bold text-sm shadow-md transition"
                >
                  <WhatsAppIcon className="w-5 h-5 text-white fill-white" />
                  <span>{t.contactPage.whatsappBtn}</span>
                </a>
              </div>
            </div>

          </div>

          {/* Right Column: Interactive Client-side Enquiry Form */}
          <div className="lg:col-span-7">
            <EnquiryForm initialProductId={initialProductName} />
          </div>

        </div>
      </section>

    </div>
  );
}
