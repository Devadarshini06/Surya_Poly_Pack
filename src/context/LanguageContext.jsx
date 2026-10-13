import React, { createContext, useContext, useState, useEffect } from 'react';
import { en } from '../locales/en';
import { ta } from '../locales/ta';

const LanguageContext = createContext();

const LOCAL_STORAGE_KEY = 'surya_poly_pack_lang';

export function LanguageProvider({ children }) {
  const [lang, setLangState] = useState(() => {
    try {
      const saved = localStorage.getItem(LOCAL_STORAGE_KEY);
      if (saved === 'ta' || saved === 'en') {
        return saved;
      }
    } catch {
      // LocalStorage access failsafe
    }
    return 'en';
  });

  const setLang = (newLang) => {
    if (newLang === 'en' || newLang === 'ta') {
      setLangState(newLang);
      try {
        localStorage.setItem(LOCAL_STORAGE_KEY, newLang);
      } catch {
        // LocalStorage access failsafe
      }
    }
  };

  useEffect(() => {
    document.documentElement.lang = lang;
  }, [lang]);

  const t = lang === 'ta' ? ta : en;

  return (
    <LanguageContext.Provider value={{ lang, setLang, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}
