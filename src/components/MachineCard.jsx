import React from 'react';
import { CheckCircle, AlertTriangle } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export default function MachineCard({ machine }) {
  const { lang, t } = useLanguage();

  const name = machine.name[lang] || machine.name.en;
  const specs = machine.suppliedSpecs[lang] || machine.suppliedSpecs.en || [];
  const notice = machine.verificationNotice[lang] || machine.verificationNotice.en;
  const status = lang === 'ta' ? machine.statusTa : machine.status;

  return (
    <div className="bg-white rounded-2xl border border-[#E2DDD2] overflow-hidden flex flex-col justify-between card-hover-effect">
      <div>
        {/* Machine Image */}
        <div className="relative aspect-16/10 w-full bg-[#F3EFE6] overflow-hidden">
          <img
            src={machine.image}
            alt={name}
            loading="lazy"
            className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
          />
          <div className="absolute top-3 left-3 flex items-center gap-2">
            <span className="px-2.5 py-1 rounded-md text-[11px] font-bold bg-[#0E2922] text-[#FAF8F3] shadow-xs border border-[#C8943D]/30">
              {machine.modelYear}
            </span>
          </div>
          <div className="absolute top-3 right-3">
            <span className="px-2.5 py-1 rounded-md text-[10px] font-semibold bg-[#0B201A]/85 backdrop-blur-xs text-[#FAF8F3]">
              {status}
            </span>
          </div>
        </div>

        {/* Machine Content */}
        <div className="p-5 sm:p-6 space-y-4">
          <div>
            <div className="text-[11px] uppercase tracking-wider font-bold text-[#C8943D] mb-1">
              {machine.shortName}
            </div>
            <h3 className="font-extrabold text-lg sm:text-xl text-[#0E2922] font-['Outfit',sans-serif] min-h-[3.25rem] flex items-center leading-normal">
              {name}
            </h3>
          </div>

          {/* Supplied Specs List */}
          <div className="space-y-2 pt-2 border-t border-[#F3EFE6]">
            <div className="text-xs font-bold uppercase tracking-wider text-[#0E2922]">
              {t.machineryPage.specsHeading}
            </div>
            <ul className="space-y-2">
              {specs.map((item, idx) => (
                <li key={idx} className="flex items-start gap-2.5 text-xs text-[#3D4744]">
                  <CheckCircle className="w-3.5 h-3.5 text-[#C8943D] shrink-0 mt-0.5" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Verification Flag Box */}
      <div className="p-5 sm:p-6 pt-0">
        <div className="p-3.5 rounded-xl bg-[#F3EFE6] border border-[#E2DDD2] flex items-start gap-2.5">
          <AlertTriangle className="w-4 h-4 text-[#C8943D] shrink-0 mt-0.5" />
          <p className="text-[11px] text-[#3D4744] leading-relaxed">
            <span className="font-bold text-[#0E2922]">{t.machineryPage.verificationBadge}: </span>
            {notice}
          </p>
        </div>
      </div>
    </div>
  );
}
