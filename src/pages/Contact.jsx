import React from 'react';
import { useSearchParams } from 'react-router-dom';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  MessageCircle, 
  AlertCircle
} from 'lucide-react';
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
      <section className="max-w-7xl mx-auto px-4 sm:px-8">
        <div className="bg-[#F2F0F4] rounded-3xl p-8 sm:p-14 border border-[#E5E0EA] space-y-4">
          <SectionHeading
            badge={t.contactPage.badge}
            title={t.contactPage.title}
            subtitle={t.contactPage.subtitle}
          />
        </div>
      </section>

      {/* Contact Grid: Details on Left, Enquiry Form on Right */}
      <section className="max-w-7xl mx-auto px-4 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          
          {/* Left Column: Contact Cards & Info */}
          <div className="lg:col-span-5 space-y-6">
            
            <div className="bg-white rounded-3xl border border-[#E5E0EA] p-6 sm:p-8 space-y-6 shadow-sm">
              <h3 className="text-xl font-extrabold text-[#231F20] font-['Outfit',sans-serif]">
                {t.contactPage.infoHeading}
              </h3>

              <div className="space-y-5 text-sm">
                
                {/* Phone Numbers */}
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-[#5B2A86]/10 text-[#5B2A86] flex items-center justify-center shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs font-bold uppercase tracking-wider text-[#45414A]">
                      {t.contactPage.phoneLabel}
                    </div>
                    <a 
                      href={`tel:${COMPANY_INFO.phone.primaryRaw}`}
                      className="font-bold text-[#231F20] hover:text-[#5B2A86] transition block mt-0.5"
                    >
                      {COMPANY_INFO.phone.primary}
                    </a>
                    <a 
                      href={`tel:${COMPANY_INFO.phone.secondaryRaw}`}
                      className="text-xs text-[#45414A] hover:text-[#5B2A86] transition block"
                    >
                      {COMPANY_INFO.phone.secondary}
                    </a>
                  </div>
                </div>

                {/* Email Address */}
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-[#5B2A86]/10 text-[#5B2A86] flex items-center justify-center shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs font-bold uppercase tracking-wider text-[#45414A]">
                      {t.contactPage.emailLabel}
                    </div>
                    <a 
                      href={`mailto:${COMPANY_INFO.email.sales}`}
                      className="font-bold text-[#231F20] hover:text-[#5B2A86] transition block mt-0.5"
                    >
                      {COMPANY_INFO.email.sales}
                    </a>
                  </div>
                </div>

                {/* Business Address */}
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-[#5B2A86]/10 text-[#5B2A86] flex items-center justify-center shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs font-bold uppercase tracking-wider text-[#45414A]">
                      {t.contactPage.addressLabel}
                    </div>
                    <div className="font-semibold text-[#231F20] mt-0.5">
                      {COMPANY_INFO.address.full}
                    </div>
                  </div>
                </div>

                {/* Working Hours */}
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-[#5B2A86]/10 text-[#5B2A86] flex items-center justify-center shrink-0">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs font-bold uppercase tracking-wider text-[#45414A]">
                      {t.contactPage.hoursLabel}
                    </div>
                    <div className="font-semibold text-[#231F20] mt-0.5">
                      {COMPANY_INFO.workingHours[lang]}
                    </div>
                  </div>
                </div>

              </div>

              {/* WhatsApp Quick Action Button */}
              <div className="pt-4 border-t border-[#F2F0F4]">
                <a
                  href={getWhatsAppUrl(null, lang)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2.5 px-6 py-3 rounded-xl bg-[#25D366] hover:bg-[#20ba59] text-white font-bold text-sm shadow-md transition"
                >
                  <MessageCircle className="w-5 h-5" />
                  <span>{t.contactPage.whatsappBtn}</span>
                </a>
              </div>
            </div>

            {/* Configurable Placeholders Notice */}
            <div className="p-4 rounded-2xl bg-[#FAF9F6] border border-[#E5E0EA] flex items-start gap-3">
              <AlertCircle className="w-4 h-4 text-[#5B2A86] shrink-0 mt-0.5" />
              <p className="text-xs text-[#45414A] leading-relaxed">
                {t.contactPage.phonePlaceholderNotice}
              </p>
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
