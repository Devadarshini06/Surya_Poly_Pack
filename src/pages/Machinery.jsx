import React, { useState } from 'react';
import { ShieldAlert } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { MACHINES, FLEXO_CAPABILITIES } from '../data/machines';
import MachineCard from '../components/MachineCard';
import SectionHeading from '../components/SectionHeading';
import SEO from '../components/SEO';

export default function Machinery() {
  const { lang, t } = useLanguage();
  const [filter, setFilter] = useState('all');

  const categories = [
    { id: 'all', label: t.machineryPage.categoryAll },
    { id: 'printing', label: t.machineryPage.categoryPrinting },
    { id: 'conversion', label: t.machineryPage.categoryConversion },
    { id: 'sealing', label: t.machineryPage.categorySealing }
  ];

  const filteredMachines = filter === 'all' 
    ? MACHINES 
    : MACHINES.filter(m => m.category === filter);

  return (
    <div className="space-y-16 sm:space-y-24 py-10 sm:py-14 pb-20">
      <SEO 
        title={t.machineryPage.title}
        description={t.machineryPage.subtitle}
      />

      {/* Hero Banner */}
      <section 
        id="machinery-hero" 
        data-section-en="Machinery & Transparency" 
        data-section-ta="இயந்திரங்கள் கண்ணோட்டம்"
        className="max-w-7xl mx-auto px-4 sm:px-8"
      >
        <div className="bg-[#F3EFE6] rounded-3xl p-6 sm:p-14 border border-[#E2DDD2] space-y-6">
          <SectionHeading
            badge={t.machineryPage.badge}
            title={t.machineryPage.title}
            subtitle={t.machineryPage.subtitle}
          />

          {/* Verification Transparency Alert Banner */}
          <div className="p-4 sm:p-5 rounded-2xl bg-white border border-[#E2DDD2] flex items-start gap-3.5 shadow-xs">
            <ShieldAlert className="w-5 h-5 text-[#C8943D] shrink-0 mt-0.5" />
            <div className="space-y-1">
              <h4 className="text-xs font-bold text-[#0E2922]">
                {t.machineryPage.suppliedNoticeTitle}
              </h4>
              <p className="text-xs text-[#3D4744] leading-relaxed">
                {t.machineryPage.suppliedNoticeText}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Filter Tabs & Machinery Grid */}
      <section 
        id="machinery-fleet" 
        data-section-en="Machinery Fleet" 
        data-section-ta="இயந்திரங்கள் பட்டியல்"
        className="max-w-7xl mx-auto px-4 sm:px-8 space-y-8"
      >
        <div className="flex items-center gap-2 overflow-x-auto pb-2 border-b border-[#E2DDD2] scrollbar-none -mx-4 px-4 sm:mx-0 sm:px-0">
          {categories.map(cat => (
            <button
              key={cat.id}
              onClick={() => setFilter(cat.id)}
              className={`px-4 py-2 rounded-xl text-xs font-bold whitespace-nowrap transition cursor-pointer ${
                filter === cat.id
                  ? 'bg-[#0E2922] text-[#FAF8F3] border border-[#C8943D]/40 shadow-xs'
                  : 'bg-white border border-[#E2DDD2] text-[#3D4744] hover:bg-[#F3EFE6] hover:text-[#0E2922]'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredMachines.map(machine => (
            <MachineCard key={machine.id} machine={machine} />
          ))}
        </div>
      </section>

      {/* Flexographic Printing Technology & Process Section */}
      <section 
        id="machinery-process" 
        data-section-en="Flexo Printing Process" 
        data-section-ta="அச்சிடும் முறை வழிகாட்டி"
        className="bg-[#0B201A] text-white py-16 sm:py-20 border-y border-[#C8943D]/20"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-8 space-y-12">
          
          <div className="max-w-3xl space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#C8943D]/20 border border-[#C8943D]/30 text-[#DBB061] text-xs font-bold uppercase tracking-wider">
              <span>{lang === 'ta' ? 'அச்சிடும் முறை' : 'Flexo Printing Guide'}</span>
            </div>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-[#FAF8F3] font-['Outfit',sans-serif]">
              {FLEXO_CAPABILITIES.title[lang]}
            </h2>
            <p className="text-sm sm:text-base text-[#FAF8F3]/80 leading-relaxed">
              {FLEXO_CAPABILITIES.description[lang]}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {FLEXO_CAPABILITIES.steps.map((st, idx) => (
              <div
                key={idx}
                className="bg-white/5 border border-[#C8943D]/20 rounded-2xl p-6 space-y-3 hover:bg-white/10 transition-colors"
              >
                <div className="text-2xl font-black text-[#C8943D] font-['Outfit',sans-serif]">
                  {st.step}
                </div>
                <h3 className="text-base font-bold text-[#FAF8F3] font-['Outfit',sans-serif]">
                  {lang === 'ta' ? st.titleTa : st.titleEn}
                </h3>
                <p className="text-xs text-[#FAF8F3]/75 leading-relaxed">
                  {lang === 'ta' ? st.descTa : st.descEn}
                </p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* Polymer Film Conversion Section */}
      <section 
        id="machinery-substrates" 
        data-section-en="Polymer Substrates" 
        data-section-ta="மூலப்பொருள் செயலாக்கம்"
        className="max-w-7xl mx-auto px-4 sm:px-8"
      >
        <div className="bg-white rounded-3xl border border-[#E2DDD2] p-6 sm:p-12 shadow-sm space-y-6">
          <SectionHeading
            badge={lang === 'ta' ? 'மூலப்பொருள் செயலாக்கம்' : 'Polymer Substrates'}
            title={t.machineryPage.filmConversionHeading}
            subtitle={t.machineryPage.filmConversionText}
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 pt-4">
            <div className="p-4 rounded-xl bg-[#F3EFE6] border border-[#E2DDD2]">
              <div className="font-bold text-sm text-[#0E2922]">HM / HDPE</div>
              <div className="text-xs text-[#3D4744] mt-1">High Molecular & High Density Film for grocery bags & covers.</div>
            </div>
            <div className="p-4 rounded-xl bg-[#F3EFE6] border border-[#E2DDD2]">
              <div className="font-bold text-sm text-[#0E2922]">LDPE</div>
              <div className="text-xs text-[#3D4744] mt-1">Low-Density Polyethylene with excellent sealability & transparency.</div>
            </div>
            <div className="p-4 rounded-xl bg-[#F3EFE6] border border-[#E2DDD2]">
              <div className="font-bold text-sm text-[#0E2922]">LLDPE</div>
              <div className="text-xs text-[#3D4744] mt-1">Linear Low-Density Polyethylene offering superior puncture resistance.</div>
            </div>
            <div className="p-4 rounded-xl bg-[#F3EFE6] border border-[#E2DDD2]">
              <div className="font-bold text-sm text-[#0E2922]">PP (Polypropylene)</div>
              <div className="text-xs text-[#3D4744] mt-1">High clarity, glossy film for retail displays, covers, and snacks packaging.</div>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
