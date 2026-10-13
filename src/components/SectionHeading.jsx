import React from 'react';

export default function SectionHeading({
  badge,
  title,
  subtitle,
  centered = false,
  className = '',
  light = false
}) {
  return (
    <div className={`space-y-3 ${centered ? 'text-center max-w-2xl mx-auto' : 'max-w-2xl'} ${className}`}>
      {badge && (
        <div className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold ${
          light 
            ? 'bg-white/10 text-white border border-white/20' 
            : 'bg-[#0B2B22]/10 text-[#0B2B22] border border-[#0B2B22]/20'
        }`}>
          <span className={`w-1.5 h-1.5 rounded-full ${light ? 'bg-[#DBAE56]' : 'bg-[#C99A42]'}`}></span>
          <span>{badge}</span>
        </div>
      )}
      
      {title && (
        <h2 className={`text-2xl sm:text-3xl lg:text-4xl font-extrabold leading-snug font-['Outfit',sans-serif] ${
          light ? 'text-white' : 'text-[#0B2B22]'
        }`}>
          {title}
        </h2>
      )}

      {subtitle && (
        <p className={`text-sm sm:text-base leading-relaxed ${
          light ? 'text-[#FAF8F2]/80' : 'text-[#58615B]'
        }`}>
          {subtitle}
        </p>
      )}
    </div>
  );
}
