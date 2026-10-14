import React, { useState, useEffect } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone, Mail, MapPin, ArrowRight } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { COMPANY_INFO } from '../data/company';
import LanguageSwitcher from './LanguageSwitcher';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { t, lang } = useLanguage();
  const location = useLocation();
  const [activeNavPath, setActiveNavPath] = useState(location.pathname);

  // Sync activeNavPath on route transition
  useEffect(() => {
    setActiveNavPath(location.pathname);
    setMobileMenuOpen(false);
  }, [location.pathname]);

  // Listen to scroll to adjust header shadow & track active section on Home page
  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          setScrolled(window.scrollY > 20);

          // On Home page, update the active nav tab according to scroll position
          if (location.pathname === '/') {
            const scrollY = window.scrollY;

            // Near top: Home is active
            if (scrollY < 120) {
              setActiveNavPath('/');
              ticking = false;
              return;
            }

            // Near bottom: Contact Us is active
            if (window.innerHeight + scrollY >= document.documentElement.scrollHeight - 140) {
              setActiveNavPath('/contact');
              ticking = false;
              return;
            }

            // Section detection
            const sectionMappings = [
              { id: 'hero', path: '/' },
              { id: 'about', path: '/about' },
              { id: 'products', path: '/products' },
              { id: 'capabilities', path: '/machinery' },
              { id: 'machinery', path: '/machinery' },
              { id: 'why-us', path: '/contact' },
              { id: 'contact', path: '/contact' },
              { id: 'footer', path: '/contact' }
            ];

            const triggerOffset = 180;
            let currentPath = '/';

            for (const item of sectionMappings) {
              const el = document.getElementById(item.id);
              if (el) {
                const rect = el.getBoundingClientRect();
                if (rect.top <= triggerOffset) {
                  currentPath = item.path;
                }
              }
            }

            setActiveNavPath(currentPath);
          }

          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // Initial check

    return () => window.removeEventListener('scroll', handleScroll);
  }, [location.pathname]);

  // Smooth scroll to sections when on Home page
  const handleNavClick = (e, targetPath) => {
    if (location.pathname === '/') {
      if (targetPath === '/') {
        e.preventDefault();
        window.scrollTo({ top: 0, behavior: 'smooth' });
        setActiveNavPath('/');
        setMobileMenuOpen(false);
        return;
      }

      const sectionMap = {
        '/about': 'about',
        '/products': 'products',
        '/machinery': 'machinery',
        '/contact': 'contact'
      };

      const sectionId = sectionMap[targetPath];
      if (sectionId) {
        const el = document.getElementById(sectionId);
        if (el) {
          e.preventDefault();
          const headerOffset = 80;
          const elementPosition = el.getBoundingClientRect().top;
          const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
          window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
          setActiveNavPath(targetPath);
          setMobileMenuOpen(false);
          return;
        }
      }
    }
    setMobileMenuOpen(false);
  };

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
      {/* Top Corporate Strip - Single Ultra-Clean Line */}
      <div className="w-full bg-[#0B2B22] text-[#FAF8F2] text-xs py-2 border-b border-[#102F26]/60 overflow-hidden">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-8 flex items-center justify-between gap-4 flex-nowrap whitespace-nowrap">
          
          {/* Left: Brand Subtitle & Location */}
          <div className="flex items-center gap-3 text-[11px] sm:text-xs shrink-0">
            <span className="flex items-center gap-1.5 font-medium text-[#FAF8F2]">
              <span className="w-2 h-2 rounded-full bg-[#C99A42] animate-pulse"></span>
              <span>{t.brandSubtitle}</span>
            </span>
            <span className="hidden lg:inline text-white/20">|</span>
            <span className="hidden lg:flex items-center gap-1 text-[#FAF8F2]/80">
              <MapPin className="w-3.5 h-3.5 text-[#C99A42] shrink-0" />
              <span>{lang === 'ta' ? 'சிவகாசி, தமிழ்நாடு' : 'Sivakasi, Tamil Nadu'}</span>
            </span>
          </div>

          {/* Right: Phone Numbers, Email & Language Switcher */}
          <div className="flex items-center gap-3 sm:gap-4 text-[11px] sm:text-xs shrink-0">
            <div className="flex items-center gap-1.5 font-medium">
              <Phone className="w-3.5 h-3.5 text-[#C99A42] shrink-0" />
              <a 
                href={`tel:${COMPANY_INFO.phone.primaryRaw}`}
                className="text-[#FAF8F2] hover:text-[#C99A42] transition"
              >
                {COMPANY_INFO.phone.primary}
              </a>
              <span className="text-white/20 hidden sm:inline">/</span>
              <a 
                href={`tel:${COMPANY_INFO.phone.secondaryRaw}`}
                className="hidden sm:inline text-[#FAF8F2] hover:text-[#C99A42] transition"
              >
                {COMPANY_INFO.phone.secondary}
              </a>
            </div>

            <span className="hidden xl:inline text-white/20">|</span>

            <a 
              href={`mailto:${COMPANY_INFO.email.sales}`}
              className="hidden xl:flex items-center gap-1.5 text-[#FAF8F2] hover:text-[#C99A42] transition"
            >
              <Mail className="w-3.5 h-3.5 text-[#C99A42] shrink-0" />
              <span>{COMPANY_INFO.email.sales}</span>
            </a>

            <div className="hidden sm:block ml-1">
              <LanguageSwitcher />
            </div>
          </div>

        </div>
      </div>

      {/* Main Sticky Header */}
      <header
        className={`sticky top-0 z-40 transition-all duration-200 w-full ${
          scrolled
            ? 'glass-nav border-b border-[#E4DED1] shadow-xs py-2.5'
            : 'bg-[#FAF8F2] border-b border-[#E4DED1] py-3'
        }`}
      >
        <div className="max-w-[1400px] mx-auto px-4 sm:px-8 flex items-center justify-between">
          {/* Official Company Logo */}
          <Link 
            to="/" 
            onClick={(e) => handleNavClick(e, '/')}
            className="flex items-center group focus:outline-hidden focus:ring-2 focus:ring-[#0B2B22] rounded-xl transition-opacity hover:opacity-95"
            aria-label="Surya Poly Pack Home"
          >
            <img
              src={COMPANY_INFO.logo}
              alt="Surya Poly Pack Logo"
              className="h-11 sm:h-13 w-auto object-contain transition-transform group-hover:scale-[1.02]"
            />
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-0.5 xl:gap-1.5">
            {navLinks.map((item) => {
              const isActive = activeNavPath === item.path;
              return (
                <NavLink
                  key={item.path}
                  to={item.path}
                  onClick={(e) => handleNavClick(e, item.path)}
                  className={`px-2.5 xl:px-3.5 py-2 rounded-lg text-xs xl:text-sm font-semibold transition-all duration-200 whitespace-nowrap flex items-center ${
                    isActive
                      ? 'text-[#0B2B22] bg-[#F1EBDD] font-bold shadow-2xs'
                      : 'text-[#27312D] hover:text-[#0B2B22] hover:bg-[#F1EBDD]/60'
                  }`}
                >
                  {item.name}
                </NavLink>
              );
            })}
          </nav>

          {/* Right Action Desktop */}
          <div className="hidden lg:flex items-center gap-3 shrink-0">
            <Link
              to="/contact"
              onClick={(e) => handleNavClick(e, '/contact')}
              className="inline-flex items-center gap-2 px-3.5 xl:px-5 py-2.5 rounded-xl bg-[#0B2B22] hover:bg-[#102F26] text-[#FAF8F2] text-xs xl:text-sm font-bold shadow-md shadow-[#0B2B22]/15 transition hover:shadow-lg active:scale-98 border border-[#C99A42]/30 whitespace-nowrap"
            >
              <span>{t.nav.getQuote}</span>
              <ArrowRight className="w-4 h-4 text-[#C99A42] shrink-0" />
            </Link>
          </div>

          {/* Mobile Right Controls: Language Switcher + Hamburger */}
          <div className="flex items-center gap-2 lg:hidden">
            <LanguageSwitcher />
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2.5 rounded-xl text-[#0B2B22] hover:bg-[#F1EBDD] border border-[#E4DED1] transition cursor-pointer"
              aria-label={mobileMenuOpen ? t.nav.closeMenu : t.nav.openMenu}
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden border-t border-[#E4DED1] bg-[#FAF8F2] shadow-xl px-4 py-5 animate-in slide-in-from-top-2 duration-150">
            <nav className="flex flex-col gap-1.5">
              {navLinks.map((item) => {
                const isActive = activeNavPath === item.path;
                return (
                  <NavLink
                    key={item.path}
                    to={item.path}
                    onClick={(e) => handleNavClick(e, item.path)}
                    className={`px-4 py-3 rounded-xl text-base font-semibold transition flex items-center justify-between ${
                      isActive
                        ? 'bg-[#0B2B22] text-[#FAF8F2]'
                        : 'text-[#0B2B22] hover:bg-[#F1EBDD]'
                    }`}
                  >
                    <span>{item.name}</span>
                    <ArrowRight className="w-4 h-4 opacity-70" />
                  </NavLink>
                );
              })}
            </nav>

            <div className="mt-5 pt-4 border-t border-[#E4DED1] flex flex-col gap-3">
              <Link
                to="/contact"
                onClick={(e) => handleNavClick(e, '/contact')}
                className="w-full text-center py-3 rounded-xl bg-[#0B2B22] text-[#FAF8F2] font-bold text-sm shadow-md border border-[#C99A42]/30"
              >
                {t.nav.getQuote}
              </Link>
              <div className="text-xs text-[#58615B] text-center pt-1 font-medium space-y-1">
                <div>📞 {COMPANY_INFO.phone.primary} / {COMPANY_INFO.phone.secondary}</div>
                <div>✉️ {COMPANY_INFO.email.sales}</div>
              </div>
            </div>
          </div>
        )}
      </header>
    </>
  );
}
