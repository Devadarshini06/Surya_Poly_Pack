import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Layers, 
  Printer, 
  ShieldCheck, 
  Scissors, 
  CheckCircle2
} from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import SectionHeading from '../components/SectionHeading';
import SEO from '../components/SEO';

export default function About() {
  const { lang, t } = useLanguage();

  const pillars = [
    {
      icon: Layers,
      title: t.aboutPage.pillar1Title,
      desc: t.aboutPage.pillar1Desc
    },
    {
      icon: Printer,
      title: t.aboutPage.pillar2Title,
      desc: t.aboutPage.pillar2Desc
    },
    {
      icon: Scissors,
      title: t.aboutPage.pillar3Title,
      desc: t.aboutPage.pillar3Desc
    },
    {
      icon: ShieldCheck,
      title: t.aboutPage.pillar4Title,
      desc: t.aboutPage.pillar4Desc
    }
  ];

  return (
    <div className="space-y-16 sm:space-y-24 py-10 sm:py-14 pb-20">
      <SEO 
        title={t.aboutPage.title}
        description={t.aboutPage.subtitle}
      />

      {/* Hero Banner */}
      <section 
        id="about-hero" 
        data-section-en="About Us Overview" 
        data-section-ta="எங்களைப் பற்றி கண்ணோட்டம்"
        className="max-w-7xl mx-auto px-4 sm:px-8"
      >
        <div className="bg-[#F3EFE6] rounded-3xl p-6 sm:p-14 border border-[#E2DDD2] relative overflow-hidden">
          <SectionHeading
            badge={t.aboutPage.badge}
            title={t.aboutPage.title}
            subtitle={t.aboutPage.subtitle}
          />
        </div>
      </section>

      {/* Main Profile Story */}
      <section 
        id="about-story" 
        data-section-en="Story & Mission" 
        data-section-ta="எங்கள் வரலாறு & நோக்கம்"
        className="max-w-7xl mx-auto px-4 sm:px-8"
      >
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          <div className="lg:col-span-7 space-y-5">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0E2922] font-['Outfit',sans-serif]">
              {t.aboutPage.storyTitle}
            </h2>

            <p className="text-sm sm:text-base text-[#3D4744] leading-relaxed">
              {t.aboutPage.storyP1}
            </p>

            <p className="text-sm sm:text-base text-[#3D4744] leading-relaxed">
              {t.aboutPage.storyP2}
            </p>

            <div className="p-4 rounded-2xl bg-[#F3EFE6] border border-[#E2DDD2] space-y-1.5">
              <div className="text-xs font-bold text-[#C8943D] uppercase tracking-wider">
                {t.aboutPage.missionTitle}
              </div>
              <p className="text-xs sm:text-sm text-[#3D4744] leading-relaxed">
                {t.aboutPage.missionDesc}
              </p>
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="rounded-3xl overflow-hidden border border-[#E2DDD2] shadow-lg bg-white">
              <img
                src="/images/factory.jpg"
                alt="Surya Poly Pack Facility & Plant Floor"
                className="w-full h-64 sm:h-80 object-cover"
              />
              <div className="p-5 bg-white space-y-1">
                <div className="text-xs font-bold text-[#0E2922]">Flexible Packaging Conversion Operations</div>
                <div className="text-[11px] text-[#3D4744]">Surya Poly Pack Manufacturing Floor (Illustrative)</div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* Pillars of Manufacturing */}
      <section 
        id="about-principles" 
        data-section-en="Manufacturing Principles" 
        data-section-ta="உற்பத்தி அணுகுமுறை"
        className="max-w-7xl mx-auto px-4 sm:px-8 space-y-10"
      >
        <SectionHeading
          badge={lang === 'ta' ? 'எங்கள் அணுகுமுறை' : 'Core Principles'}
          title={lang === 'ta' ? 'உற்பத்தி மற்றும் தர உறுதிப்பாடு' : 'Our Manufacturing Approach'}
          subtitle={lang === 'ta' ? 'ஒவ்வொரு தயாரிப்பிலும் தரமும் நம்பகத்தன்மையும் உறுதி செய்யப்படுகிறது.' : 'How we engineer dependable packaging solutions for commercial clients.'}
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {pillars.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="bg-white rounded-2xl border border-[#E2DDD2] p-6 space-y-3 card-hover-effect"
              >
                <div className="w-10 h-10 rounded-xl bg-[#0E2922]/10 text-[#0E2922] flex items-center justify-center">
                  <Icon className="w-5 h-5 text-[#C8943D]" />
                </div>
                <h3 className="text-base font-extrabold text-[#0E2922] font-['Outfit',sans-serif]">
                  {item.title}
                </h3>
                <p className="text-xs text-[#3D4744] leading-relaxed">
                  {item.desc}
                </p>
              </div>
            );
          })}
        </div>
      </section>

      {/* Applications We Serve */}
      <section 
        id="about-applications" 
        data-section-en="Applications We Serve" 
        data-section-ta="பயன்பாடுகள்"
        className="bg-white py-14 border-y border-[#E2DDD2]"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-8 space-y-8">
          <SectionHeading
            badge={lang === 'ta' ? 'பயன்பாடுகள்' : 'Applications'}
            title={t.aboutPage.applicationsTitle}
            subtitle={lang === 'ta' ? 'பல்வேறு வணிகத் துறைகளுக்கான நெகிழ்வான பேக்கேஜிங் தீர்வுகள்.' : 'Meeting diverse packaging needs across sectors.'}
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {t.aboutPage.applicationsList.map((app, idx) => (
              <div
                key={idx}
                className="p-4 rounded-xl bg-[#F3EFE6] border border-[#E2DDD2] flex items-center gap-3"
              >
                <CheckCircle2 className="w-4 h-4 text-[#C8943D] shrink-0" />
                <span className="text-xs sm:text-sm font-semibold text-[#0E2922]">{app}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Box */}
      <section 
        id="about-cta" 
        data-section-en="Discuss Order" 
        data-section-ta="ஆர்டர் விவாதம்"
        className="max-w-7xl mx-auto px-4 sm:px-8"
      >
        <div className="rounded-3xl bg-gradient-to-br from-[#0E2922] via-[#163D32] to-[#0B201A] border border-[#C8943D]/30 text-white p-6 sm:p-12 shadow-xl flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
          <div className="space-y-2">
            <h3 className="text-2xl font-extrabold font-['Outfit',sans-serif] text-[#FAF8F3]">
              {lang === 'ta' ? 'உங்கள் பேக்கேஜிங் தேவையை விவாதிக்கலாம்' : 'Discuss Your Custom Packaging Order'}
            </h3>
            <p className="text-xs sm:text-sm text-[#FAF8F3]/80">
              {lang === 'ta' ? 'பொருத்தமான தயாரிப்புகள் மற்றும் மாதிரி குறித்து எங்கள் குழுவிடம் கேளுங்கள்.' : 'Get in touch with our team for dimension assistance and quotation.'}
            </p>
          </div>
          <Link
            to="/contact"
            className="w-full sm:w-auto text-center shrink-0 px-6 py-3 rounded-xl bg-[#C8943D] text-[#0B201A] font-bold text-xs shadow-md hover:bg-[#DBB061] transition"
          >
            {t.nav.contact}
          </Link>
        </div>
      </section>
    </div>
  );
}
