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
  MessageCircle, 
  ChevronRight,
  Factory
} from 'lucide-react';
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
      <section className="relative overflow-hidden pt-8 pb-16 lg:py-24 bg-gradient-to-b from-[#F2F0F4] via-[#FAF9F6] to-[#FAF9F6]">
        {/* Subtle decorative background shapes */}
        <div className="absolute top-0 right-0 -mr-24 -mt-24 w-96 h-96 rounded-full bg-[#5B2A86]/5 blur-3xl pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 -ml-24 -mb-24 w-96 h-96 rounded-full bg-[#6F42C1]/5 blur-3xl pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            
            {/* Left Column: Headline & Content */}
            <div className="lg:col-span-7 space-y-6">
              
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#5B2A86]/10 border border-[#5B2A86]/20 text-[#5B2A86] text-xs font-bold uppercase tracking-wider">
                <span className="w-2 h-2 rounded-full bg-[#5B2A86] animate-pulse"></span>
                <span>{t.hero.badge}</span>
              </div>

              <h1 className="text-3xl sm:text-5xl lg:text-5xl/tight font-extrabold text-[#231F20] font-['Outfit',sans-serif] tracking-tight">
                {t.hero.headline}
              </h1>

              <p className="text-base sm:text-lg text-[#45414A] leading-relaxed max-w-2xl font-normal">
                {t.hero.description}
              </p>

              {/* Action Buttons */}
              <div className="pt-2 flex flex-wrap items-center gap-4">
                <Link
                  to="/products"
                  className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl bg-[#5B2A86] hover:bg-[#471F6B] text-white font-bold text-sm shadow-md shadow-[#5B2A86]/25 transition hover:shadow-lg active:scale-98"
                >
                  <span>{t.hero.btnExplore}</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>

                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl bg-white hover:bg-[#F2F0F4] text-[#231F20] border border-[#E5E0EA] font-bold text-sm shadow-xs transition hover:border-[#5B2A86]/40"
                >
                  <span>{t.hero.btnContact}</span>
                </Link>
              </div>

              {/* Quick Spec Highlights */}
              <div className="pt-6 border-t border-[#E5E0EA] grid grid-cols-3 gap-4">
                <div>
                  <div className="text-xs font-bold text-[#5B2A86]">{t.hero.stat1}</div>
                  <div className="text-xs text-[#45414A] mt-0.5">{t.hero.stat1Sub}</div>
                </div>
                <div>
                  <div className="text-xs font-bold text-[#5B2A86]">{t.hero.stat2}</div>
                  <div className="text-xs text-[#45414A] mt-0.5">{t.hero.stat2Sub}</div>
                </div>
                <div>
                  <div className="text-xs font-bold text-[#5B2A86]">{t.hero.stat3}</div>
                  <div className="text-xs text-[#45414A] mt-0.5">{t.hero.stat3Sub}</div>
                </div>
              </div>

            </div>

            {/* Right Column: Hero Visual Showcase */}
            <div className="lg:col-span-5">
              <div className="relative">
                <div className="rounded-3xl overflow-hidden shadow-2xl border border-[#E5E0EA] bg-white aspect-4/3 sm:aspect-16/11">
                  <img
                    src="/images/hero.jpg"
                    alt="Surya Poly Pack Flexographic Packaging & Film Production"
                    className="w-full h-full object-cover"
                  />
                  {/* Floating Overlay Badge */}
                  <div className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur-md rounded-2xl p-4 border border-[#E5E0EA] shadow-lg flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-[#5B2A86] text-white flex items-center justify-center shrink-0">
                      <Factory className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="text-xs font-bold text-[#231F20]">Surya Poly Pack Manufacturing</div>
                      <div className="text-[11px] text-[#45414A]">{t.hero.badgeQuality}</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>


      {/* SECTION B: COMPANY INTRODUCTION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-8">
        <div className="bg-white rounded-3xl border border-[#E5E0EA] p-8 sm:p-12 shadow-sm">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-7 space-y-5">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#5B2A86]/10 text-[#5B2A86] text-xs font-bold uppercase tracking-wider">
                <span>{t.intro.badge}</span>
              </div>

              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#231F20] font-['Outfit',sans-serif]">
                {t.intro.title}
              </h2>

              <p className="text-sm sm:text-base text-[#45414A] leading-relaxed">
                {t.intro.p1}
              </p>

              <p className="text-sm sm:text-base text-[#45414A] leading-relaxed">
                {t.intro.p2}
              </p>

              <div className="pt-2">
                <Link
                  to="/about"
                  className="inline-flex items-center gap-2 text-sm font-bold text-[#5B2A86] hover:text-[#471F6B] group"
                >
                  <span>{t.intro.learnMore}</span>
                  <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>

            {/* Feature Highlights Column */}
            <div className="lg:col-span-5 space-y-4">
              <div className="p-4 rounded-2xl bg-[#FAF9F6] border border-[#E5E0EA] flex items-start gap-3.5">
                <div className="w-9 h-9 rounded-xl bg-[#5B2A86]/10 text-[#5B2A86] flex items-center justify-center shrink-0">
                  <Printer className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-[#231F20]">{t.intro.feature1Title}</h4>
                  <p className="text-xs text-[#45414A] mt-0.5">{t.intro.feature1Desc}</p>
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-[#FAF9F6] border border-[#E5E0EA] flex items-start gap-3.5">
                <div className="w-9 h-9 rounded-xl bg-[#5B2A86]/10 text-[#5B2A86] flex items-center justify-center shrink-0">
                  <Layers className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-[#231F20]">{t.intro.feature2Title}</h4>
                  <p className="text-xs text-[#45414A] mt-0.5">{t.intro.feature2Desc}</p>
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-[#FAF9F6] border border-[#E5E0EA] flex items-start gap-3.5">
                <div className="w-9 h-9 rounded-xl bg-[#5B2A86]/10 text-[#5B2A86] flex items-center justify-center shrink-0">
                  <Scissors className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-[#231F20]">{t.intro.feature3Title}</h4>
                  <p className="text-xs text-[#45414A] mt-0.5">{t.intro.feature3Desc}</p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>


      {/* SECTION C: FEATURED PRODUCT CATEGORIES */}
      <section className="max-w-7xl mx-auto px-4 sm:px-8 space-y-10">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
          <SectionHeading
            badge={t.featuredCategories.badge}
            title={t.featuredCategories.title}
            subtitle={t.featuredCategories.subtitle}
          />
          <Link
            to="/products"
            className="inline-flex items-center gap-1.5 text-xs font-bold text-[#5B2A86] hover:text-[#471F6B] shrink-0"
          >
            <span>{t.featuredCategories.viewAll}</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {featuredCategoryCards.map((cat) => (
            <div
              key={cat.id}
              className="bg-white rounded-2xl border border-[#E5E0EA] overflow-hidden flex flex-col justify-between card-hover-effect group"
            >
              <div>
                <div className="relative aspect-16/10 w-full overflow-hidden bg-[#F2F0F4]">
                  <img
                    src={cat.image}
                    alt={cat.title}
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute bottom-3 left-3 flex flex-wrap gap-1">
                    {cat.tags.map((tag, idx) => (
                      <span key={idx} className="px-2 py-0.5 rounded-md text-[10px] font-semibold bg-[#231F20]/75 backdrop-blur-xs text-white">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="p-6 space-y-2">
                  <h3 className="text-lg font-extrabold text-[#231F20] font-['Outfit',sans-serif]">
                    {cat.title}
                  </h3>
                  <p className="text-xs text-[#45414A] leading-relaxed">
                    {cat.desc}
                  </p>
                </div>
              </div>

              <div className="p-6 pt-0">
                <Link
                  to={`/products?category=${cat.categoryQuery}`}
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-[#5B2A86] hover:text-[#471F6B] group/link"
                >
                  <span>{t.featuredCategories.cardCta}</span>
                  <ChevronRight className="w-3.5 h-3.5 group-link-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>


      {/* SECTION D: MANUFACTURING CAPABILITIES */}
      <section className="bg-[#231F20] text-white py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 space-y-12">
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
                  <div className="w-10 h-10 rounded-xl bg-[#5B2A86] text-white flex items-center justify-center">
                    <IconComp className="w-5 h-5" />
                  </div>
                  <h4 className="text-base font-extrabold text-white font-['Outfit',sans-serif]">
                    {item.title}
                  </h4>
                  <p className="text-xs text-[#F2F0F4]/75 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>


      {/* SECTION E: MACHINERY HIGHLIGHTS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-8 space-y-10">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
          <SectionHeading
            badge={t.machinerySection.badge}
            title={t.machinerySection.title}
            subtitle={t.machinerySection.subtitle}
          />
          <Link
            to="/machinery"
            className="inline-flex items-center gap-1.5 text-xs font-bold text-[#5B2A86] hover:text-[#471F6B] shrink-0"
          >
            <span>{t.machinerySection.viewMachinery}</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        {/* Featured Machines Preview (First 3) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {MACHINES.slice(0, 3).map((machine) => (
            <div
              key={machine.id}
              className="bg-white rounded-2xl border border-[#E5E0EA] overflow-hidden flex flex-col justify-between card-hover-effect"
            >
              <div>
                <div className="relative aspect-16/10 w-full overflow-hidden bg-[#F2F0F4]">
                  <img
                    src={machine.image}
                    alt={machine.name[lang] || machine.name.en}
                    loading="lazy"
                    className="w-full h-full object-cover"
                  />
                  <span className="absolute top-3 left-3 px-2.5 py-1 rounded-md text-[10px] font-bold bg-[#5B2A86] text-white">
                    {machine.modelYear}
                  </span>
                </div>

                <div className="p-5 space-y-3">
                  <h3 className="text-base font-extrabold text-[#231F20] font-['Outfit',sans-serif]">
                    {machine.name[lang] || machine.name.en}
                  </h3>

                  <ul className="space-y-1.5 text-xs text-[#45414A]">
                    {(machine.suppliedSpecs[lang] || machine.suppliedSpecs.en).slice(0, 3).map((sp, idx) => (
                      <li key={idx} className="flex items-center gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#5B2A86] shrink-0" />
                        <span className="line-clamp-1">{sp}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="p-5 pt-0">
                <Link
                  to="/machinery"
                  className="w-full inline-flex items-center justify-center gap-1.5 py-2.5 rounded-xl border border-[#E5E0EA] hover:border-[#5B2A86] text-xs font-bold text-[#231F20] hover:text-[#5B2A86] transition"
                >
                  <span>{t.machinerySection.viewMachinery}</span>
                  <ChevronRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          ))}
        </div>

        <div className="p-4 rounded-xl bg-[#F2F0F4] border border-[#E5E0EA] text-xs text-[#45414A] text-center">
          {t.machinerySection.disclaimer}
        </div>
      </section>


      {/* SECTION F: WHY CHOOSE US */}
      <section className="max-w-7xl mx-auto px-4 sm:px-8 space-y-10">
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
              className="bg-white rounded-2xl border border-[#E5E0EA] p-6 space-y-3 card-hover-effect"
            >
              <div className="w-10 h-10 rounded-xl bg-[#5B2A86]/10 text-[#5B2A86] flex items-center justify-center font-extrabold text-sm">
                0{idx + 1}
              </div>
              <h4 className="text-base font-extrabold text-[#231F20] font-['Outfit',sans-serif]">
                {reason.title}
              </h4>
              <p className="text-xs text-[#45414A] leading-relaxed">
                {reason.desc}
              </p>
            </div>
          ))}
        </div>
      </section>


      {/* SECTION G: CALL TO ACTION BANNER */}
      <section className="max-w-7xl mx-auto px-4 sm:px-8">
        <div className="rounded-3xl bg-gradient-to-br from-[#5B2A86] to-[#471F6B] text-white p-8 sm:p-14 shadow-xl relative overflow-hidden">
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
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl bg-white text-[#5B2A86] font-bold text-sm shadow-md hover:bg-[#FAF9F6] transition active:scale-98"
              >
                <span>{t.cta.btnContact}</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              
              <a
                href={getWhatsAppUrl(null, lang)}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl bg-[#25D366] text-white font-bold text-sm shadow-md hover:bg-[#20ba59] transition active:scale-98"
              >
                <MessageCircle className="w-4 h-4" />
                <span>{t.cta.btnWhatsapp}</span>
              </a>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
