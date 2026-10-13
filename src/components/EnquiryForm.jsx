import React, { useState, useEffect } from 'react';
import { Send, CheckCircle2, AlertCircle, RefreshCw, MessageSquare } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { PRODUCTS } from '../data/products';
import { getWhatsAppUrl } from '../data/company';

export default function EnquiryForm({ initialProductId = '' }) {
  const { lang, t } = useLanguage();

  const [formData, setFormData] = useState({
    fullName: '',
    companyName: '',
    phone: '',
    email: '',
    product: initialProductId,
    quantity: '',
    message: ''
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [submittedData, setSubmittedData] = useState(null);

  useEffect(() => {
    if (initialProductId) {
      setFormData(prev => ({ ...prev, product: initialProductId }));
    }
  }, [initialProductId]);

  const validate = () => {
    const newErrors = {};

    // Full name
    if (!formData.fullName.trim()) {
      newErrors.fullName = t.contactPage.validation.nameRequired;
    } else if (formData.fullName.trim().length < 2) {
      newErrors.fullName = t.contactPage.validation.nameMin;
    }

    // Phone number
    const phoneClean = formData.phone.replace(/[^0-9]/g, '');
    if (!formData.phone.trim()) {
      newErrors.phone = t.contactPage.validation.phoneRequired;
    } else if (phoneClean.length < 10) {
      newErrors.phone = t.contactPage.validation.phoneInvalid;
    }

    // Email (optional, but if given must be valid)
    if (formData.email.trim()) {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(formData.email.trim())) {
        newErrors.email = t.contactPage.validation.emailInvalid;
      }
    }

    // Product of interest
    if (!formData.product) {
      newErrors.product = t.contactPage.validation.productRequired;
    }

    // Message
    if (!formData.message.trim()) {
      newErrors.message = t.contactPage.validation.messageRequired;
    } else if (formData.message.trim().length < 10) {
      newErrors.message = t.contactPage.validation.messageMin;
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: null }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) {
      return;
    }

    setIsSubmitting(true);
    // Simulate brief client-side processing
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      setSubmittedData({ ...formData });
    }, 600);
  };

  const handleReset = () => {
    setFormData({
      fullName: '',
      companyName: '',
      phone: '',
      email: '',
      product: '',
      quantity: '',
      message: ''
    });
    setErrors({});
    setIsSuccess(false);
    setSubmittedData(null);
  };

  return (
    <div className="bg-white rounded-3xl border border-[#E5E0EA] p-6 sm:p-10 shadow-lg shadow-[#5B2A86]/5">
      {/* Form Header */}
      <div className="space-y-2 mb-8">
        <h3 className="text-2xl font-extrabold text-[#231F20] font-['Outfit',sans-serif]">
          {t.contactPage.formHeading}
        </h3>
        <p className="text-sm text-[#45414A]">
          {t.contactPage.formSubheading}
        </p>
      </div>

      {/* Frontend Demo Banner */}
      <div className="mb-6 p-3.5 rounded-xl bg-[#F2F0F4] border border-[#E5E0EA] text-xs text-[#45414A] flex items-start gap-2.5">
        <AlertCircle className="w-4 h-4 text-[#5B2A86] shrink-0 mt-0.5" />
        <span>{t.contactPage.demoNotice}</span>
      </div>

      {isSuccess ? (
        <div className="py-8 space-y-6 text-center animate-in zoom-in-95 duration-200">
          <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto shadow-md">
            <CheckCircle2 className="w-8 h-8" />
          </div>

          <div className="space-y-2 max-w-md mx-auto">
            <h4 className="text-2xl font-extrabold text-[#231F20] font-['Outfit',sans-serif]">
              {t.contactPage.successTitle}
            </h4>
            <p className="text-sm text-[#45414A] leading-relaxed">
              {t.contactPage.successMessage}
            </p>
          </div>

          {/* Demonstration Record Summary */}
          {submittedData && (
            <div className="max-w-md mx-auto bg-[#FAF9F6] border border-[#E5E0EA] rounded-2xl p-5 text-left text-xs space-y-2.5">
              <div className="text-[11px] font-bold uppercase tracking-wider text-[#5B2A86] border-b border-[#E5E0EA] pb-1">
                {lang === 'ta' ? 'பதிவு செய்யப்பட்ட மாதிரி விவரங்கள்' : 'Demonstration Record Summary'}
              </div>
              <div className="grid grid-cols-2 gap-2 text-[#45414A]">
                <div><span className="font-semibold text-[#231F20]">Name:</span> {submittedData.fullName}</div>
                <div><span className="font-semibold text-[#231F20]">Phone:</span> {submittedData.phone}</div>
                {submittedData.companyName && (
                  <div><span className="font-semibold text-[#231F20]">Company:</span> {submittedData.companyName}</div>
                )}
                {submittedData.email && (
                  <div><span className="font-semibold text-[#231F20]">Email:</span> {submittedData.email}</div>
                )}
                <div className="col-span-2">
                  <span className="font-semibold text-[#231F20]">Product:</span> {submittedData.product}
                </div>
                {submittedData.quantity && (
                  <div className="col-span-2">
                    <span className="font-semibold text-[#231F20]">Quantity:</span> {submittedData.quantity}
                  </div>
                )}
              </div>
            </div>
          )}

          <div className="pt-2 flex flex-wrap items-center justify-center gap-3">
            <button
              type="button"
              onClick={handleReset}
              className="inline-flex items-center gap-2 px-6 py-2.5 rounded-xl bg-[#5B2A86] text-white text-xs font-bold shadow-md hover:bg-[#471F6B] transition"
            >
              <RefreshCw className="w-3.5 h-3.5" />
              <span>{t.contactPage.btnDismiss}</span>
            </button>
            <a
              href={getWhatsAppUrl(`Hello Surya Poly Pack, I submitted an enquiry for ${submittedData?.product || 'packaging'}.`, lang)}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-2.5 rounded-xl bg-[#25D366] text-white text-xs font-bold shadow-md hover:bg-[#20ba59] transition"
            >
              <MessageSquare className="w-3.5 h-3.5" />
              <span>WhatsApp Direct</span>
            </a>
          </div>
        </div>
      ) : (
        <form onSubmit={handleSubmit} noValidate className="space-y-5">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {/* Full Name */}
            <div>
              <label htmlFor="fullName" className="block text-xs font-bold text-[#231F20] mb-1.5">
                {t.contactPage.fields.fullName} <span className="text-red-500">*</span>
              </label>
              <input
                id="fullName"
                name="fullName"
                type="text"
                value={formData.fullName}
                onChange={handleChange}
                placeholder={t.contactPage.fields.fullNamePlaceholder}
                className={`w-full px-4 py-2.5 rounded-xl border text-sm transition focus:outline-hidden focus:ring-2 ${
                  errors.fullName 
                    ? 'border-red-500 focus:ring-red-300' 
                    : 'border-[#E5E0EA] focus:border-[#5B2A86] focus:ring-[#5B2A86]/20'
                }`}
              />
              {errors.fullName && (
                <p className="mt-1 text-xs text-red-600 font-medium">{errors.fullName}</p>
              )}
            </div>

            {/* Company Name */}
            <div>
              <label htmlFor="companyName" className="block text-xs font-bold text-[#231F20] mb-1.5">
                {t.contactPage.fields.companyName}
              </label>
              <input
                id="companyName"
                name="companyName"
                type="text"
                value={formData.companyName}
                onChange={handleChange}
                placeholder={t.contactPage.fields.companyPlaceholder}
                className="w-full px-4 py-2.5 rounded-xl border border-[#E5E0EA] text-sm transition focus:border-[#5B2A86] focus:ring-2 focus:ring-[#5B2A86]/20 focus:outline-hidden"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {/* Phone Number */}
            <div>
              <label htmlFor="phone" className="block text-xs font-bold text-[#231F20] mb-1.5">
                {t.contactPage.fields.phone} <span className="text-red-500">*</span>
              </label>
              <input
                id="phone"
                name="phone"
                type="tel"
                value={formData.phone}
                onChange={handleChange}
                placeholder={t.contactPage.fields.phonePlaceholder}
                className={`w-full px-4 py-2.5 rounded-xl border text-sm transition focus:outline-hidden focus:ring-2 ${
                  errors.phone 
                    ? 'border-red-500 focus:ring-red-300' 
                    : 'border-[#E5E0EA] focus:border-[#5B2A86] focus:ring-[#5B2A86]/20'
                }`}
              />
              {errors.phone && (
                <p className="mt-1 text-xs text-red-600 font-medium">{errors.phone}</p>
              )}
            </div>

            {/* Email Address */}
            <div>
              <label htmlFor="email" className="block text-xs font-bold text-[#231F20] mb-1.5">
                {t.contactPage.fields.email}
              </label>
              <input
                id="email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                placeholder={t.contactPage.fields.emailPlaceholder}
                className={`w-full px-4 py-2.5 rounded-xl border text-sm transition focus:outline-hidden focus:ring-2 ${
                  errors.email 
                    ? 'border-red-500 focus:ring-red-300' 
                    : 'border-[#E5E0EA] focus:border-[#5B2A86] focus:ring-[#5B2A86]/20'
                }`}
              />
              {errors.email && (
                <p className="mt-1 text-xs text-red-600 font-medium">{errors.email}</p>
              )}
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {/* Product of Interest */}
            <div>
              <label htmlFor="product" className="block text-xs font-bold text-[#231F20] mb-1.5">
                {t.contactPage.fields.product} <span className="text-red-500">*</span>
              </label>
              <select
                id="product"
                name="product"
                value={formData.product}
                onChange={handleChange}
                className={`w-full px-4 py-2.5 rounded-xl border text-sm transition bg-white focus:outline-hidden focus:ring-2 ${
                  errors.product 
                    ? 'border-red-500 focus:ring-red-300' 
                    : 'border-[#E5E0EA] focus:border-[#5B2A86] focus:ring-[#5B2A86]/20'
                }`}
              >
                <option value="">{t.contactPage.fields.productSelectDefault}</option>
                {PRODUCTS.map(p => (
                  <option key={p.id} value={p.name.en}>
                    {lang === 'ta' ? p.name.ta : p.name.en} ({p.materialType.split('/')[0].trim()})
                  </option>
                ))}
                <option value="Custom Packaging / Other">{t.contactPage.fields.otherProduct}</option>
              </select>
              {errors.product && (
                <p className="mt-1 text-xs text-red-600 font-medium">{errors.product}</p>
              )}
            </div>

            {/* Estimated Quantity */}
            <div>
              <label htmlFor="quantity" className="block text-xs font-bold text-[#231F20] mb-1.5">
                {t.contactPage.fields.quantity}
              </label>
              <input
                id="quantity"
                name="quantity"
                type="text"
                value={formData.quantity}
                onChange={handleChange}
                placeholder={t.contactPage.fields.quantityPlaceholder}
                className="w-full px-4 py-2.5 rounded-xl border border-[#E5E0EA] text-sm transition focus:border-[#5B2A86] focus:ring-2 focus:ring-[#5B2A86]/20 focus:outline-hidden"
              />
            </div>
          </div>

          {/* Message / Requirements */}
          <div>
            <label htmlFor="message" className="block text-xs font-bold text-[#231F20] mb-1.5">
              {t.contactPage.fields.message} <span className="text-red-500">*</span>
            </label>
            <textarea
              id="message"
              name="message"
              rows={4}
              value={formData.message}
              onChange={handleChange}
              placeholder={t.contactPage.fields.messagePlaceholder}
              className={`w-full px-4 py-2.5 rounded-xl border text-sm transition focus:outline-hidden focus:ring-2 ${
                errors.message 
                  ? 'border-red-500 focus:ring-red-300' 
                  : 'border-[#E5E0EA] focus:border-[#5B2A86] focus:ring-[#5B2A86]/20'
              }`}
            />
            {errors.message && (
              <p className="mt-1 text-xs text-red-600 font-medium">{errors.message}</p>
            )}
          </div>

          {/* Submit Button */}
          <div className="pt-2">
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-xl bg-[#5B2A86] hover:bg-[#471F6B] text-white text-sm font-bold shadow-md shadow-[#5B2A86]/25 transition hover:shadow-lg disabled:opacity-50 cursor-pointer"
            >
              <Send className="w-4 h-4" />
              <span>{isSubmitting ? t.contactPage.submitting : t.contactPage.btnSubmit}</span>
            </button>
          </div>
        </form>
      )}
    </div>
  );
}
