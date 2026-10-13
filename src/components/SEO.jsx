import { useEffect } from 'react';
import { useLanguage } from '../context/LanguageContext';

export default function SEO({ title, description }) {
  const { lang, t } = useLanguage();

  useEffect(() => {
    const baseTitle = t.companyName || 'Surya Poly Pack';
    const finalTitle = title ? `${title} | ${baseTitle}` : `${baseTitle} | ${t.brandSubtitle}`;
    document.title = finalTitle;

    if (description) {
      let metaDesc = document.querySelector('meta[name="description"]');
      if (!metaDesc) {
        metaDesc = document.createElement('meta');
        metaDesc.name = 'description';
        document.head.appendChild(metaDesc);
      }
      metaDesc.setAttribute('content', description);
    }
  }, [title, description, lang, t]);

  return null;
}
