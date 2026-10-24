import React, { useState, useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Search, AlertTriangle, RotateCcw } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { PRODUCTS, PRODUCT_CATEGORIES } from '../data/products';
import ProductCard from '../components/ProductCard';
import SectionHeading from '../components/SectionHeading';
import SEO from '../components/SEO';

export default function Products() {
  const { lang, t } = useLanguage();
  const [searchParams, setSearchParams] = useSearchParams();

  const selectedCategory = searchParams.get('category') || 'all';
  const [searchQuery, setSearchQuery] = useState('');

  const handleCategoryChange = (catId) => {
    if (catId === 'all') {
      const nextParams = new URLSearchParams(searchParams);
      nextParams.delete('category');
      setSearchParams(nextParams);
    } else {
      setSearchParams({ category: catId });
    }
  };

  // Filter products by category and search term
  const filteredProducts = useMemo(() => {
    return PRODUCTS.filter(prod => {
      // Category match
      const matchesCategory = selectedCategory === 'all' || prod.category === selectedCategory;

      // Search match
      const q = searchQuery.toLowerCase().trim();
      if (!q) return matchesCategory;

      const nameMatch = (prod.name[lang] || prod.name.en).toLowerCase().includes(q);
      const descMatch = (prod.description[lang] || prod.description.en).toLowerCase().includes(q);
      const appMatch = (prod.application[lang] || prod.application.en).toLowerCase().includes(q);
      const matMatch = prod.materialType.toLowerCase().includes(q);

      return matchesCategory && (nameMatch || descMatch || appMatch || matMatch);
    });
  }, [selectedCategory, searchQuery, lang]);

  const handleReset = () => {
    setSearchQuery('');
    setSearchParams({});
  };

  return (
    <div className="space-y-12 sm:space-y-16 py-10 sm:py-14 pb-20">
      <SEO 
        title={t.productsPage.title}
        description={t.productsPage.subtitle}
      />

      {/* Page Header */}
      <section 
        id="products-hero" 
        data-section-en="Product Range & Standards" 
        data-section-ta="தயாரிப்பு கண்ணோட்டம்"
        className="max-w-7xl mx-auto px-4 sm:px-8"
      >
        <div className="bg-[#F3EFE6] rounded-3xl p-6 sm:p-14 border border-[#E2DDD2]">
          <SectionHeading
            badge={t.productsPage.badge}
            title={t.productsPage.title}
            subtitle={t.productsPage.subtitle}
          />

          {/* Environmental / Material Standards Notice */}
          <div className="mt-6 p-4 rounded-2xl bg-white border border-[#E2DDD2] flex items-start gap-3">
            <AlertTriangle className="w-4 h-4 text-[#C8943D] shrink-0 mt-0.5" />
            <p className="text-xs text-[#3D4744] leading-relaxed">
              {t.productsPage.nonPlasticNotice}
            </p>
          </div>
        </div>
      </section>

      {/* Controls: Search Bar & Category Filters */}
      <section 
        id="products-filter" 
        data-section-en="Filter & Search" 
        data-section-ta="வடிகட்டி மற்றும் தேடல்"
        className="max-w-7xl mx-auto px-4 sm:px-8 space-y-6"
      >
        <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4">
          
          {/* Category Filter Tabs */}
          <div className="flex items-center gap-2 overflow-x-auto pb-2 md:pb-0 scrollbar-none -mx-4 px-4 sm:mx-0 sm:px-0">
            {PRODUCT_CATEGORIES.map(cat => (
              <button
                key={cat.id}
                onClick={() => handleCategoryChange(cat.id)}
                className={`px-4 py-2.5 rounded-xl text-xs font-bold whitespace-nowrap transition cursor-pointer ${
                  selectedCategory === cat.id
                    ? 'bg-[#0E2922] text-[#FAF8F3] border border-[#C8943D]/40 shadow-xs'
                    : 'bg-white border border-[#E2DDD2] text-[#3D4744] hover:bg-[#F3EFE6] hover:text-[#0E2922]'
                }`}
              >
                {lang === 'ta' ? cat.nameTa : cat.nameEn}
              </button>
            ))}
          </div>

          {/* Search Input */}
          <div className="relative w-full md:w-auto md:min-w-[280px]">
            <Search className="w-4 h-4 text-[#3D4744] absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder={t.productsPage.searchPlaceholder}
              className="w-full pl-10 pr-4 py-2.5 bg-white border border-[#E2DDD2] rounded-xl text-xs focus:outline-hidden focus:border-[#0E2922] focus:ring-2 focus:ring-[#C8943D]/25 transition"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-[#3D4744] hover:text-[#0E2922]"
              >
                ✕
              </button>
            )}
          </div>

        </div>

        {/* Count Summary */}
        <div className="text-xs text-[#3D4744] font-medium flex items-center justify-between">
          <span>
            {lang === 'ta' 
              ? `${filteredProducts.length} தயாரிப்புகள் கிடைக்கின்றன` 
              : `Showing ${filteredProducts.length} products`}
          </span>

          {(selectedCategory !== 'all' || searchQuery) && (
            <button
              onClick={handleReset}
              className="inline-flex items-center gap-1.5 text-xs text-[#C8943D] font-bold hover:text-[#0E2922] transition"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              <span>{t.productsPage.resetFilter}</span>
            </button>
          )}
        </div>
      </section>

      {/* Product Grid */}
      <section 
        id="products-catalogue" 
        data-section-en="Product Catalogue" 
        data-section-ta="தயாரிப்பு பட்டியல்"
        className="max-w-7xl mx-auto px-4 sm:px-8"
      >
        {filteredProducts.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredProducts.map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        ) : (
          <div className="bg-white rounded-3xl border border-[#E2DDD2] p-12 text-center space-y-4">
            <div className="w-14 h-14 rounded-2xl bg-[#F3EFE6] text-[#C8943D] flex items-center justify-center mx-auto">
              <Search className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-[#0E2922]">
              {t.productsPage.noProductsFound}
            </h3>
            <p className="text-xs text-[#3D4744] max-w-sm mx-auto">
              {lang === 'ta'
                ? 'வேறு வார்த்தைகளை தேடவும் அல்லது வடிப்பான்களை மீட்டமைக்கவும்.'
                : 'Try adjusting your search terms or clearing the category filter.'}
            </p>
            <button
              type="button"
              onClick={handleReset}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#0E2922] text-[#FAF8F3] hover:bg-[#1C473A] text-xs font-bold transition shadow-md"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              <span>{t.productsPage.resetFilter}</span>
            </button>
          </div>
        )}
      </section>

    </div>
  );
}
