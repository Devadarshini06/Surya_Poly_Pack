import React from 'react';
import { Link } from 'react-router-dom';
import { 
  ArrowRight, 
  Layers, 
  Printer, 
  ShieldCheck, 
  Scissors, 
  Settings2, 
  Sliders, 
  CheckCircle2, 
  ChevronRight,
  Factory
} from 'lucide-react';
import WhatsAppIcon from '../components/WhatsAppIcon';
import { useLanguage } from '../context/LanguageContext';
import { MACHINES } from '../data/machines';
import { getWhatsAppUrl } from '../data/company';
import SectionHeading from '../components/SectionHeading';
import SEO from '../components/SEO';

export default function Home() {
  const { lang, t } = useLanguage();

  // Featured 6 categories with specific images
  const featuredCategoryCards = [
    {
      id: 'food',
      title: t.featuredCategories.categories.food.title,
      desc: t.featuredCategories.categories.food.desc,
      image: '/images/food_packaging_pouches.jpg',
      categoryQuery: 'food',
      tags: ['Snacks', 'Dates', 'Pickles', 'Masala']
    },
    {
      id: 'grocery-bags',
      title: lang === 'ta' ? 'மளிகை & கேரி பைகள்' : 'Grocery & Carry Bags',
      desc: lang === 'ta' ? 'அதிக சுமை தாங்கும் சில்லறை வணிக பைகள் மற்றும் பாலி பேக்கேஜிங்.' : 'High tensile strength retail carry bags and wholesale grocery poly packs.',
      image: '/images/pp_bags.jpg',
      categoryQuery: 'bags_general',
      tags: ['Retail', 'Supermarkets', 'HM / HDPE']
    },
    {
      id: 'special-pouches',
      title: t.featuredCategories.categories.special.title,
      desc: t.featuredCategories.categories.special.desc,
      image: '/images/standup_pouches.jpg',
      categoryQuery: 'special',
      tags: ['Stand-Up', 'Zip-Lock', 'Aroma Barrier']
    },
    {
      id: 'industrial-packaging',
      title: t.featuredCategories.categories.industrial.title,
      desc: t.featuredCategories.categories.industrial.desc,
      image: '/images/industrial_packaging.jpg',
      categoryQuery: 'industrial_consumer',
      tags: ['Automotive', 'Hardware', 'Rolls']
    },
    {
      id: 'agricultural-packaging',
      title: lang === 'ta' ? 'விவசாய & நர்சரி பேக்கேஜிங்' : 'Agricultural & Nursery Packaging',
      desc: lang === 'ta' ? 'நாற்று வளர்ப்பு மற்றும் தாவரங்களுக்கான UV-பாதுகாக்கப்பட்ட கவர்கள்.' : 'UV-stabilized poly covers and nursery bags for saplings and cultivation.',
      image: '/images/industrial_packaging.jpg',
      categoryQuery: 'industrial_consumer',
      tags: ['Nursery', 'Tree Covers', 'UV-Stabilized']
    },
    {
      id: 'general-covers',
      title: lang === 'ta' ? 'பொது பேக்கேஜிங் & தரை விரிப்புகள்' : 'General Covers & Floor Protection',
      desc: lang === 'ta' ? 'பல்வேறு வணிக பயன்பாடுகள் மற்றும் தரை பாதுகாப்பு தாள்கள்.' : 'General-purpose poly covers and heavy-gauge surface shielding films.',
      image: '/images/pp_bags.jpg',
      categoryQuery: 'bags_general',
      tags: ['Floor Shield', 'Apparel', 'Shipping']
    }
  ];

  const capabilityIcons = [
    Printer,
    Sliders,
    Layers,
    Scissors,
    Settings2,
    ShieldCheck
  ];

  return (
    <div className="space-y-20 sm:space-y-28 pb-16">
      <SEO 
        title={t.hero.headline}
        description={t.hero.description}
      />

      {/* SECTION A: HERO */}
      <section 
        id="hero" 
        data-section-en="Home" 
        data-section-ta="முகப்பு"
        className="relative overflow-hidden pt-8 pb-16 lg:py-20 bg-gradient-to-b from-[#F1EBDD]/50 via-[#FAF8F2] to-[#FAF8F2]"
      >
        <div className="max-w-[1400px] mx-auto px-4 sm:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
            
            {/* Left Column: Headline & Content */}
            <div className="lg:col-span-7 space-y-6 sm:space-y-7">
              
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#F1EBDD] border border-[#E4DED1] text-[#0B2B22] text-xs font-bold">
                <span className="w-2 h-2 rounded-full bg-[#C99A42] animate-pulse"></span>
                <span>{t.hero.badge}</span>
              </div>

              <h1 className={`hero-title font-extrabold text-[#0B2B22] font-['Outfit',sans-serif] ${
                lang === 'ta' 
                  ? 'text-3xl sm:text-4xl lg:text-[2.5rem] xl:text-[2.75rem] leading-[1.28]' 
                  : 'text-3xl sm:text-4xl lg:text-[2.75rem] xl:text-[3.1rem] leading-[1.22]'
              }`}>
                <span className="block sm:whitespace-nowrap">{t.hero.headlineLine1 || "Packaging That Protects."}</span>
                <span className="block mt-1 sm:mt-1.5 sm:whitespace-nowrap">{t.hero.headlineLine2 || "Printing That Stands Out."}</span>
              </h1>

              <p className="text-base sm:text-lg text-[#58615B] leading-[1.6] max-w-2xl font-normal">
                {t.hero.description}
              </p>

              {/* Action Buttons */}
              <div className="pt-2 flex flex-wrap items-center gap-4">
                <Link
                  to="/products"
                  className="inline-flex items-center justify-center gap-2 px-7 py-3.5 min-h-[48px] rounded-xl bg-[#0B2B22] hover:bg-[#102F26] text-white font-bold text-sm shadow-md shadow-[#0B2B22]/15 transition hover:shadow-lg active:scale-98 border border-[#C99A42]/30 whitespace-nowrap"
                >
                  <span>{t.hero.btnExplore}</span>
                  <ArrowRight className="w-4 h-4 text-[#C99A42] shrink-0" />
                </Link>

                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center gap-2 px-7 py-3.5 min-h-[48px] rounded-xl bg-white hover:bg-[#F1EBDD] text-[#0B2B22] border border-[#E4DED1] font-bold text-sm shadow-xs transition hover:border-[#0B2B22]/40 whitespace-nowrap"
                >
                  <span>{t.hero.btnContact}</span>
                </Link>
              </div>

              {/* Quick Spec Highlights */}
              <div className="pt-6 sm:pt-7 border-t border-[#E4DED1] grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6">
                <div className="min-w-0">
                  <div className="text-xs sm:text-sm font-bold text-[#C99A42] leading-snug">{t.hero.stat1}</div>
                  <div className="text-xs text-[#58615B] mt-0.5 sm:mt-1 leading-snug">{t.hero.stat1Sub}</div>
                </div>
                <div className="min-w-0">
                  <div className="text-xs sm:text-sm font-bold text-[#C99A42] leading-snug">{t.hero.stat2}</div>
                  <div className="text-xs text-[#58615B] mt-0.5 sm:mt-1 leading-snug">{t.hero.stat2Sub}</div>
                </div>
                <div className="min-w-0">
                  <div className="text-xs sm:text-sm font-bold text-[#C99A42] leading-snug">{t.hero.stat3}</div>
                  <div className="text-xs text-[#58615B] mt-0.5 sm:mt-1 leading-snug">{t.hero.stat3Sub}</div>
                </div>
              </div>

            </div>

            {/* Right Column: Hero Visual Showcase */}
            <div className="lg:col-span-5">
              <div className="relative">
                <div className="rounded-[28px] overflow-hidden shadow-xl border border-[#E4DED1] bg-white aspect-[4/3] sm:aspect-[16/11]">
                  <img
                    src="/images/hero.jpg"
                    alt="Surya Poly Pack Flexographic Packaging & Film Production"
                    className="w-full h-full object-cover"
                  />
                  {/* Floating Overlay Badge */}
                  <div className="absolute bottom-4 left-4 right-4 sm:bottom-6 sm:left-6 sm:right-6 bg-white/95 backdrop-blur-md rounded-2xl p-4 border border-[#E4DED1] shadow-lg flex items-center gap-3.5">
                    <div className="w-11 h-11 rounded-xl bg-[#0B2B22] text-[#C99A42] flex items-center justify-center shrink-0 border border-[#C99A42]/30">
                      <Factory className="w-5 h-5 text-[#C99A42]" />
                    </div>
                    <div className="min-w-0">
                      <div className="text-xs sm:text-sm font-bold text-[#0B2B22] truncate">{t.hero.badgeQuality}</div>
                      <div className="text-[11px] sm:text-xs text-[#58615B] truncate mt-0.5">{t.hero.badgeQualitySub || t.hero.badgeQuality}</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>


      {/* SECTION B: COMPANY INTRODUCTION */}
      <section 
        id="about" 
        data-section-en="About Us" 
        data-section-ta="எங்களைப் பற்றி"
        className="max-w-[1400px] mx-auto px-4 sm:px-8"
      >
        <div className="bg-white rounded-3xl border border-[#E4DED1] p-8 sm:p-12 shadow-sm">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-7 space-y-5">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0B2B22]/10 text-[#0B2B22] text-xs font-bold">
                <span>{t.intro.badge}</span>
              </div>

              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0B2B22] font-['Outfit',sans-serif]">
                {t.intro.title}
              </h2>

              <p className="text-sm sm:text-base text-[#58615B] leading-relaxed">
                {t.intro.p1}
              </p>

              <p className="text-sm sm:text-base text-[#58615B] leading-relaxed">
                {t.intro.p2}
              </p>

              <div className="pt-2">
                <Link
                  to="/about"
                  className="inline-flex items-center gap-2 text-sm font-bold text-[#0B2B22] hover:text-[#102F26] group"
                >
                  <span>{t.intro.learnMore}</span>
                  <ChevronRight className="w-4 h-4 text-[#C99A42] group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>

            {/* Feature Highlights Column */}
            <div className="lg:col-span-5 space-y-4">
              <div className="p-4 rounded-2xl bg-[#FAF8F2] border border-[#E4DED1] flex items-start gap-3.5">
                <div className="w-9 h-9 rounded-xl bg-[#0B2B22]/10 text-[#C99A42] flex items-center justify-center shrink-0">
                  <Printer className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-[#0B2B22]">{t.intro.feature1Title}</h4>
                  <p className="text-xs text-[#58615B] mt-0.5">{t.intro.feature1Desc}</p>
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-[#FAF8F2] border border-[#E4DED1] flex items-start gap-3.5">
                <div className="w-9 h-9 rounded-xl bg-[#0B2B22]/10 text-[#C99A42] flex items-center justify-center shrink-0">
                  <Layers className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-[#0B2B22]">{t.intro.feature2Title}</h4>
                  <p className="text-xs text-[#58615B] mt-0.5">{t.intro.feature2Desc}</p>
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-[#FAF8F2] border border-[#E4DED1] flex items-start gap-3.5">
                <div className="w-9 h-9 rounded-xl bg-[#0B2B22]/10 text-[#C99A42] flex items-center justify-center shrink-0">
                  <Scissors className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-[#0B2B22]">{t.intro.feature3Title}</h4>
                  <p className="text-xs text-[#58615B] mt-0.5">{t.intro.feature3Desc}</p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>


      {/* SECTION C: FEATURED PRODUCT CATEGORIES */}
      <section 
        id="products" 
        data-section-en="Featured Products" 
        data-section-ta="முக்கிய தயாரிப்புகள்"
        className="max-w-[1400px] mx-auto px-4 sm:px-8 space-y-10"
      >
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
          <SectionHeading
            badge={t.featuredCategories.badge}
            title={t.featuredCategories.title}
            subtitle={t.featuredCategories.subtitle}
          />
          <Link
            to="/products"
            className="inline-flex items-center gap-1.5 text-xs font-bold text-[#0B2B22] hover:text-[#C99A42] shrink-0"
          >
            <span>{t.featuredCategories.viewAll}</span>
            <ArrowRight className="w-4 h-4 text-[#C99A42]" />
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {featuredCategoryCards.map((cat) => (
            <div
              key={cat.id}
              className="bg-white rounded-2xl border border-[#E4DED1] overflow-hidden flex flex-col justify-between card-hover-effect group"
            >
              <div>
                <div className="relative aspect-16/10 w-full overflow-hidden bg-[#F1EBDD]">
                  <img
                    src={cat.image}
                    alt={cat.title}
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute bottom-3 left-3 flex flex-wrap gap-1">
                    {cat.tags.map((tag, idx) => (
                      <span key={idx} className="px-2 py-0.5 rounded-md text-[10px] font-semibold bg-[#0B2B22]/85 backdrop-blur-xs text-white">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="p-6 space-y-2">
                  <h3 className="text-lg font-extrabold text-[#0B2B22] font-['Outfit',sans-serif] min-h-[3rem] flex items-center leading-snug">
                    {cat.title}
                  </h3>
                  <p className="text-xs text-[#58615B] leading-relaxed line-clamp-2 min-h-[2.5rem]">
                    {cat.desc}
                  </p>
                </div>
              </div>

              <div className="p-6 pt-0">
                <Link
                  to={`/products?category=${cat.categoryQuery}`}
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-[#0B2B22] hover:text-[#C99A42] group/link"
                >
                  <span>{t.featuredCategories.cardCta}</span>
                  <ChevronRight className="w-3.5 h-3.5 text-[#C99A42] group-link-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>


      {/* SECTION D: MANUFACTURING CAPABILITIES */}
      <section 
        id="capabilities" 
        data-section-en="Manufacturing Capabilities" 
        data-section-ta="உற்பத்தி திறன்கள்"
        className="bg-[#0B2B22] text-white py-16 sm:py-20 border-y border-[#102F26]"
      >
        <div className="max-w-[1400px] mx-auto px-4 sm:px-8 space-y-12">
          <SectionHeading
            badge={t.capabilities.badge}
            title={t.capabilities.title}
            subtitle={t.capabilities.subtitle}
            light={true}
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {t.capabilities.items.map((item, idx) => {
              const IconComp = capabilityIcons[idx] || ShieldCheck;
              return (
                <div
                  key={idx}
                  className="bg-white/5 border border-white/10 rounded-2xl p-6 space-y-3 hover:bg-white/10 transition-colors"
                >
                  <div className="w-10 h-10 rounded-xl bg-[#102F26] text-[#DBAE56] flex items-center justify-center border border-[#C99A42]/30">
                    <IconComp className="w-5 h-5" />
                  </div>
                  <h4 className="text-base font-extrabold text-white font-['Outfit',sans-serif]">
                    {item.title}
                  </h4>
                  <p className="text-xs text-[#FAF8F2]/75 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>


      {/* SECTION E: MACHINERY HIGHLIGHTS */}
      <section 
        id="machinery" 
        data-section-en="Machinery Highlights" 
        data-section-ta="நவீன இயந்திரங்கள்"
        className="max-w-[1400px] mx-auto px-4 sm:px-8 space-y-10"
      >
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
          <SectionHeading
            badge={t.machinerySection.badge}
            title={t.machinerySection.title}
            subtitle={t.machinerySection.subtitle}
          />
          <Link
            to="/machinery"
            className="inline-flex items-center gap-1.5 text-xs font-bold text-[#0B2B22] hover:text-[#C99A42] shrink-0"
          >
            <span>{t.machinerySection.viewMachinery}</span>
            <ArrowRight className="w-4 h-4 text-[#C99A42]" />
          </Link>
        </div>

        {/* Featured Machines Preview (First 3) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {MACHINES.slice(0, 3).map((machine) => (
            <div
              key={machine.id}
              className="bg-white rounded-2xl border border-[#E4DED1] overflow-hidden flex flex-col justify-between card-hover-effect"
            >
              <div>
                <div className="relative aspect-16/10 w-full overflow-hidden bg-[#F1EBDD]">
                  <img
                    src={machine.image}
                    alt={machine.name[lang] || machine.name.en}
                    loading="lazy"
                    className="w-full h-full object-cover"
                  />
                  <span className="absolute top-3 left-3 px-2.5 py-1 rounded-md text-[10px] font-bold bg-[#0B2B22] text-[#FAF8F2] border border-[#C99A42]/30">
                    {machine.modelYear}
                  </span>
                </div>

                <div className="p-5 space-y-3">
                  <h3 className="text-base font-extrabold text-[#0B2B22] font-['Outfit',sans-serif] min-h-[2.75rem] flex items-center">
                    {machine.name[lang] || machine.name.en}
                  </h3>

                  <ul className="space-y-1.5 text-xs text-[#58615B]">
                    {(machine.suppliedSpecs[lang] || machine.suppliedSpecs.en).slice(0, 3).map((sp, idx) => (
                      <li key={idx} className="flex items-center gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#C99A42] shrink-0" />
                        <span className="line-clamp-1">{sp}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="p-5 pt-0">
                <Link
                  to="/machinery"
                  className="w-full inline-flex items-center justify-center gap-1.5 py-2.5 rounded-xl border border-[#E4DED1] hover:border-[#0B2B22] text-xs font-bold text-[#0B2B22] hover:text-[#C99A42] transition"
                >
                  <span>{t.machinerySection.viewMachinery}</span>
                  <ChevronRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          ))}
        </div>

        <div className="p-4 rounded-xl bg-[#F1EBDD] border border-[#E4DED1] text-xs text-[#58615B] text-center">
          {t.machinerySection.disclaimer}
        </div>
      </section>


      {/* SECTION F: WHY CHOOSE US */}
      <section 
        id="why-us" 
        data-section-en="Why Choose Us" 
        data-section-ta="ஏன் எங்களை தேர்வு செய்ய வேண்டும்"
        className="max-w-[1400px] mx-auto px-4 sm:px-8 space-y-10"
      >
        <SectionHeading
          badge={t.whyUs.badge}
          title={t.whyUs.title}
          subtitle={t.whyUs.subtitle}
          centered={true}
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {t.whyUs.reasons.map((reason, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl border border-[#E4DED1] p-6 space-y-3 card-hover-effect"
            >
              <div className="w-10 h-10 rounded-xl bg-[#0B2B22]/10 text-[#0B2B22] flex items-center justify-center font-extrabold text-sm border border-[#0B2B22]/20">
                0{idx + 1}
              </div>
              <h4 className="text-base font-extrabold text-[#0B2B22] font-['Outfit',sans-serif]">
                {reason.title}
              </h4>
              <p className="text-xs text-[#58615B] leading-relaxed">
                {reason.desc}
              </p>
            </div>
          ))}
        </div>
      </section>


      {/* SECTION G: CALL TO ACTION BANNER */}
      <section 
        id="contact" 
        data-section-en="Contact & Enquiry" 
        data-section-ta="தொடர்புக்கு & விசாரணை"
        className="max-w-[1400px] mx-auto px-4 sm:px-8"
      >
        <div className="rounded-3xl bg-gradient-to-br from-[#0B2B22] via-[#102F26] to-[#071E18] text-white p-8 sm:p-14 shadow-xl relative overflow-hidden border border-[#C99A42]/30">
          <div className="relative z-10 max-w-2xl space-y-5">
            <h2 className="text-2xl sm:text-4xl font-extrabold font-['Outfit',sans-serif] tracking-tight text-white">
              {t.cta.title}
            </h2>
            <p className="text-sm sm:text-base text-white/85 leading-relaxed">
              {t.cta.description}
            </p>
            
            <div className="pt-3 flex flex-wrap items-center gap-4">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl bg-white text-[#0B2B22] font-bold text-sm shadow-md hover:bg-[#FAF8F2] transition active:scale-98"
              >
                <span>{t.cta.btnContact}</span>
                <ArrowRight className="w-4 h-4 text-[#C99A42]" />
              </Link>
              
              <a
                href={getWhatsAppUrl(null, lang)}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl bg-[#25D366] text-white font-bold text-sm shadow-md hover:bg-[#20ba59] transition active:scale-98"
              >
                <WhatsAppIcon className="w-4 h-4 text-white fill-white" />
                <span>{t.cta.btnWhatsapp}</span>
              </a>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
