import React, { useState, useEffect } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone, Mail, ArrowRight } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { COMPANY_INFO } from '../data/company';
import LanguageSwitcher from './LanguageSwitcher';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { t, lang } = useLanguage();
  const location = useLocation();

  // Close mobile menu on page transition
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  // Listen to scroll to adjust header shadow
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: t.nav.home, path: '/' },
    { name: t.nav.about, path: '/about' },
    { name: t.nav.products, path: '/products' },
    { name: t.nav.machinery, path: '/machinery' },
    { name: t.nav.gallery, path: '/gallery' },
    { name: t.nav.contact, path: '/contact' }
  ];

  return (
    <>
      {/* Top Corporate Strip */}
      <div className="bg-[#231F20] text-[#F2F0F4] text-xs py-2 px-4 sm:px-8 border-b border-black/20">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-4 text-[11px] sm:text-xs">
            <span className="flex items-center gap-1.5 font-medium text-[#FAF9F6]">
              <span className="w-2 h-2 rounded-full bg-[#8E5FD8] animate-pulse"></span>
              {t.brandSubtitle}
            </span>
            <span className="hidden md:inline text-white/30">|</span>
            <span className="hidden md:flex items-center gap-1 text-[#F2F0F4]/80">
              📍 {COMPANY_INFO.address[lang] || COMPANY_INFO.address.en}
            </span>
          </div>

          <div className="flex items-center gap-4 text-[11px] sm:text-xs">
            <a 
              href={`tel:${COMPANY_INFO.phone.primaryRaw}`}
              className="flex items-center gap-1.5 text-[#F2F0F4] hover:text-[#8E5FD8] transition"
            >
              <Phone className="w-3.5 h-3.5 text-[#8E5FD8]" />
              <span>{COMPANY_INFO.phone.primary}</span>
            </a>
            <span className="hidden sm:inline text-white/30">|</span>
            <a 
              href={`mailto:${COMPANY_INFO.email.sales}`}
              className="hidden sm:flex items-center gap-1.5 text-[#F2F0F4] hover:text-[#8E5FD8] transition"
            >
              <Mail className="w-3.5 h-3.5 text-[#8E5FD8]" />
              <span>{COMPANY_INFO.email.sales}</span>
            </a>
            <div className="hidden sm:block ml-2">
              <LanguageSwitcher />
            </div>
          </div>
        </div>
      </div>

      {/* Main Sticky Header */}
      <header
        className={`sticky top-0 z-40 transition-all duration-200 ${
          scrolled
            ? 'glass-nav border-b border-[#E5E0EA] shadow-xs py-2.5'
            : 'bg-[#FAF9F6] border-b border-[#E5E0EA] py-3'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-8 flex items-center justify-between">
          {/* Official Company Logo */}
          <Link 
            to="/" 
            className="flex items-center group focus:outline-hidden focus:ring-2 focus:ring-[#5B2A86] rounded-xl p-1 transition-opacity hover:opacity-95"
            aria-label="Surya Poly Pack Home"
          >
            <img
              src={COMPANY_INFO.logo}
              alt="Surya Poly Pack Logo"
              className="h-11 sm:h-13 w-auto object-contain transition-transform group-hover:scale-[1.02]"
            />
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                className={({ isActive }) =>
                  `px-3.5 py-2 rounded-lg text-sm font-semibold transition-colors duration-150 ${
                    isActive
                      ? 'text-[#5B2A86] bg-[#5B2A86]/10 font-bold'
                      : 'text-[#45414A] hover:text-[#231F20] hover:bg-[#F2F0F4]'
                  }`
                }
              >
                {item.name}
              </NavLink>
            ))}
          </nav>

          {/* Right Action Desktop */}
          <div className="hidden lg:flex items-center gap-3">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#5B2A86] hover:bg-[#471F6B] text-white text-sm font-bold shadow-md shadow-[#5B2A86]/25 transition hover:shadow-lg active:scale-98"
            >
              <span>{t.nav.getQuote}</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          {/* Mobile Right Controls: Language Switcher + Hamburger */}
          <div className="flex items-center gap-2 lg:hidden">
            <LanguageSwitcher />
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2.5 rounded-xl text-[#231F20] hover:bg-[#F2F0F4] border border-[#E5E0EA] transition"
              aria-label={mobileMenuOpen ? t.nav.closeMenu : t.nav.openMenu}
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden border-t border-[#E5E0EA] bg-[#FAF9F6] shadow-xl px-4 py-5 animate-in slide-in-from-top-2 duration-150">
            <nav className="flex flex-col gap-1.5">
              {navLinks.map((item) => (
                <NavLink
                  key={item.path}
                  to={item.path}
                  className={({ isActive }) =>
                    `px-4 py-3 rounded-xl text-base font-semibold transition flex items-center justify-between ${
                      isActive
                        ? 'bg-[#5B2A86] text-white'
                        : 'text-[#231F20] hover:bg-[#F2F0F4]'
                    }`
                  }
                >
                  <span>{item.name}</span>
                  <ArrowRight className="w-4 h-4 opacity-70" />
                </NavLink>
              ))}
            </nav>

            <div className="mt-5 pt-4 border-t border-[#E5E0EA] flex flex-col gap-3">
              <Link
                to="/contact"
                className="w-full text-center py-3 rounded-xl bg-[#5B2A86] text-white font-bold text-sm shadow-md"
              >
                {t.nav.getQuote}
              </Link>
              <div className="text-xs text-[#45414A] text-center pt-1 font-medium">
                📞 {COMPANY_INFO.phone.primary} | ✉️ {COMPANY_INFO.email.sales}
              </div>
            </div>
          </div>
        )}
      </header>
    </>
  );
}
