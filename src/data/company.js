/**
 * Surya Poly Pack - Centralized Company Configuration
 * All contact details, placeholders, and company metadata are managed here.
 * When official contact information or logos are provided, update this file.
 */

export const COMPANY_INFO = {
  name: "Surya Poly Pack",
  shortName: "Surya Poly",
  legalEntity: "Surya Poly Pack Manufacturing",
  tagline: {
    en: "Packaging That Protects. Printing That Stands Out.",
    ta: "தரமான பேக்கேஜிங். தனித்துவமான அச்சிடுதல்."
  },
  subTagline: {
    en: "Leading manufacturer of printed packaging covers, flexible packaging products, pouches, and poly conversion solutions.",
    ta: "அச்சிடப்பட்ட பேக்கேஜிங் கவர்கள், நெகிழ்வான பேக்கேஜிங் தயாரிப்புகள், பவுச்சுகள் மற்றும் பாலி கன்வெர்ஷன் தீர்வுகளின் முன்னணி உற்பத்தியாளர்."
  },
  
  // Contact Placeholders (Centrally configurable)
  phone: {
    primary: "+91 98765 43210", // Placeholder until official number is supplied
    primaryRaw: "919876543210",
    secondary: "+91 94421 00000",
    secondaryRaw: "919442100000",
    isPlaceholder: true
  },
  whatsapp: {
    number: "919876543210", // Configurable WhatsApp number
    defaultMessageEn: "Hello Surya Poly Pack, I am interested in custom packaging solutions. Please share product details and quote.",
    defaultMessageTa: "வணக்கம் சூர்யா பாலி பேக், எனக்கு தனிப்பயன் பேக்கேஜிங் தேவைப்படுகிறது. விவரங்களையும் விலைக் குறிப்பையும் பகிரவும்.",
    isPlaceholder: true
  },
  email: {
    sales: "info@suryapolypack.com", // Placeholder until official email supplied
    isPlaceholder: true
  },
  address: {
    line1: "Industrial Estate / Manufacturing Zone",
    city: "Tamil Nadu",
    pincode: "626123",
    country: "India",
    full: "Industrial Estate, Tamil Nadu, India",
    isPlaceholder: true
  },
  workingHours: {
    en: "Monday – Saturday: 9:00 AM – 7:00 PM",
    ta: "திங்கள் – சனி: காலை 9:00 – மாலை 7:00"
  },

  // Brand Colors
  colors: {
    deepViolet: "#5B2A86",
    primaryPurple: "#6F42C1",
    darkCharcoal: "#231F20",
    warmWhite: "#FAF9F6",
    lightGrey: "#F2F0F4",
    neutralText: "#45414A"
  },

  // Disclaimers and Notices
  disclaimers: {
    en: "Note: Machinery specifications and representative photographs are for illustrative purposes and subject to ongoing factory confirmation.",
    ta: "குறிப்பு: இயந்திர விவரக்குறிப்புகள் மற்றும் விளக்க புகைப்படங்கள் மாதிரி நோக்கங்களுக்கானவை, நிறுவனத்தின் இறுதி உறுதிப்படுத்தலுக்கு உட்பட்டவை."
  }
};

/**
 * Helper to construct WhatsApp click-to-chat URL
 */
export function getWhatsAppUrl(customMessage = null, lang = 'en') {
  const number = COMPANY_INFO.whatsapp.number;
  const message = customMessage || (lang === 'ta' ? COMPANY_INFO.whatsapp.defaultMessageTa : COMPANY_INFO.whatsapp.defaultMessageEn);
  return `https://wa.me/${number}?text=${encodeURIComponent(message)}`;
}
