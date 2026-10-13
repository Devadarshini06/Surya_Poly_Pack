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
        <div className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider ${
          light 
            ? 'bg-white/10 text-white border border-white/20' 
            : 'bg-[#0E2922]/10 text-[#0E2922] border border-[#0E2922]/20'
        }`}>
          <span className={`w-1.5 h-1.5 rounded-full ${light ? 'bg-[#DBB061]' : 'bg-[#C8943D]'}`}></span>
          <span>{badge}</span>
        </div>
      )}
      
      {title && (
        <h2 className={`text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight font-['Outfit',sans-serif] ${
          light ? 'text-white' : 'text-[#0E2922]'
        }`}>
          {title}
        </h2>
      )}

      {subtitle && (
        <p className={`text-sm sm:text-base leading-relaxed ${
          light ? 'text-[#F3EFE6]/80' : 'text-[#3D4744]'
        }`}>
          {subtitle}
        </p>
      )}
    </div>
  );
}
