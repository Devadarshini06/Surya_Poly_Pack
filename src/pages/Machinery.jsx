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
      <section className="max-w-7xl mx-auto px-4 sm:px-8">
        <div className="bg-[#F2F0F4] rounded-3xl p-8 sm:p-14 border border-[#E5E0EA] space-y-6">
          <SectionHeading
            badge={t.machineryPage.badge}
            title={t.machineryPage.title}
            subtitle={t.machineryPage.subtitle}
          />

          {/* Verification Transparency Alert Banner */}
          <div className="p-4 sm:p-5 rounded-2xl bg-white border border-[#E5E0EA] flex items-start gap-3.5 shadow-xs">
            <ShieldAlert className="w-5 h-5 text-amber-700 shrink-0 mt-0.5" />
            <div className="space-y-1">
              <h4 className="text-xs font-bold text-[#231F20]">
                {t.machineryPage.suppliedNoticeTitle}
              </h4>
              <p className="text-xs text-[#45414A] leading-relaxed">
                {t.machineryPage.suppliedNoticeText}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Filter Tabs & Machinery Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-8 space-y-8">
        <div className="flex items-center gap-2 overflow-x-auto pb-2 border-b border-[#E5E0EA]">
          {categories.map(cat => (
            <button
              key={cat.id}
              onClick={() => setFilter(cat.id)}
              className={`px-4 py-2 rounded-xl text-xs font-bold whitespace-nowrap transition cursor-pointer ${
                filter === cat.id
                  ? 'bg-[#5B2A86] text-white shadow-xs'
                  : 'bg-white border border-[#E5E0EA] text-[#45414A] hover:bg-[#F2F0F4]'
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
      <section className="bg-[#231F20] text-white py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 space-y-12">
          
          <div className="max-w-3xl space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-white text-xs font-bold uppercase tracking-wider">
              <span>{lang === 'ta' ? 'அச்சிடும் முறை' : 'Flexo Printing Guide'}</span>
            </div>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-white font-['Outfit',sans-serif]">
              {FLEXO_CAPABILITIES.title[lang]}
            </h2>
            <p className="text-sm sm:text-base text-[#F2F0F4]/80 leading-relaxed">
              {FLEXO_CAPABILITIES.description[lang]}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {FLEXO_CAPABILITIES.steps.map((st, idx) => (
              <div
                key={idx}
                className="bg-white/5 border border-white/10 rounded-2xl p-6 space-y-3 hover:bg-white/10 transition-colors"
              >
                <div className="text-2xl font-black text-[#8E5FD8] font-['Outfit',sans-serif]">
                  {st.step}
                </div>
                <h3 className="text-base font-bold text-white font-['Outfit',sans-serif]">
                  {lang === 'ta' ? st.titleTa : st.titleEn}
                </h3>
                <p className="text-xs text-[#F2F0F4]/75 leading-relaxed">
                  {lang === 'ta' ? st.descTa : st.descEn}
                </p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* Polymer Film Conversion Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-8">
        <div className="bg-white rounded-3xl border border-[#E5E0EA] p-8 sm:p-12 shadow-sm space-y-6">
          <SectionHeading
            badge={lang === 'ta' ? 'மூலப்பொருள் செயலாக்கம்' : 'Polymer Substrates'}
            title={t.machineryPage.filmConversionHeading}
            subtitle={t.machineryPage.filmConversionText}
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 pt-4">
            <div className="p-4 rounded-xl bg-[#FAF9F6] border border-[#E5E0EA]">
              <div className="font-bold text-sm text-[#231F20]">HM / HDPE</div>
              <div className="text-xs text-[#45414A] mt-1">High Molecular & High Density Film for grocery bags & covers.</div>
            </div>
            <div className="p-4 rounded-xl bg-[#FAF9F6] border border-[#E5E0EA]">
              <div className="font-bold text-sm text-[#231F20]">LDPE</div>
              <div className="text-xs text-[#45414A] mt-1">Low-Density Polyethylene with excellent sealability & transparency.</div>
            </div>
            <div className="p-4 rounded-xl bg-[#FAF9F6] border border-[#E5E0EA]">
              <div className="font-bold text-sm text-[#231F20]">LLDPE</div>
              <div className="text-xs text-[#45414A] mt-1">Linear Low-Density Polyethylene offering superior puncture resistance.</div>
            </div>
            <div className="p-4 rounded-xl bg-[#FAF9F6] border border-[#E5E0EA]">
              <div className="font-bold text-sm text-[#231F20]">PP (Polypropylene)</div>
              <div className="text-xs text-[#45414A] mt-1">High clarity, glossy film for retail displays, covers, and snacks packaging.</div>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
