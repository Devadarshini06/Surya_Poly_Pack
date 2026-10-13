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
    <div className="bg-white rounded-2xl border border-[#E5E0EA] overflow-hidden flex flex-col justify-between card-hover-effect">
      <div>
        {/* Machine Image */}
        <div className="relative aspect-16/10 w-full bg-[#F2F0F4] overflow-hidden">
          <img
            src={machine.image}
            alt={name}
            loading="lazy"
            className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
          />
          <div className="absolute top-3 left-3 flex items-center gap-2">
            <span className="px-2.5 py-1 rounded-md text-[11px] font-bold bg-[#5B2A86] text-white shadow-xs">
              {machine.modelYear}
            </span>
          </div>
          <div className="absolute top-3 right-3">
            <span className="px-2.5 py-1 rounded-md text-[10px] font-semibold bg-[#231F20]/80 backdrop-blur-xs text-white">
              {status}
            </span>
          </div>
        </div>

        {/* Machine Content */}
        <div className="p-6 space-y-4">
          <div>
            <div className="text-[11px] uppercase tracking-wider font-bold text-[#5B2A86] mb-1">
              {machine.shortName}
            </div>
            <h3 className="font-extrabold text-xl text-[#231F20] font-['Outfit',sans-serif]">
              {name}
            </h3>
          </div>

          {/* Supplied Specs List */}
          <div className="space-y-2 pt-2 border-t border-[#F2F0F4]">
            <div className="text-xs font-bold uppercase tracking-wider text-[#231F20]">
              {t.machineryPage.specsHeading}
            </div>
            <ul className="space-y-2">
              {specs.map((item, idx) => (
                <li key={idx} className="flex items-start gap-2.5 text-xs text-[#45414A]">
                  <CheckCircle className="w-3.5 h-3.5 text-[#5B2A86] shrink-0 mt-0.5" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Verification Flag Box */}
      <div className="p-6 pt-0">
        <div className="p-3.5 rounded-xl bg-[#F2F0F4] border border-[#E5E0EA] flex items-start gap-2.5">
          <AlertTriangle className="w-4 h-4 text-amber-700 shrink-0 mt-0.5" />
          <p className="text-[11px] text-[#45414A] leading-relaxed">
            <span className="font-bold text-[#231F20]">{t.machineryPage.verificationBadge}: </span>
            {notice}
          </p>
        </div>
      </div>
    </div>
  );
}
