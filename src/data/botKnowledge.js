/**
 * Surya Poly Pack - AI Assistant Knowledge Base & Responses
 * Bilingual Support: English and Tamil
 */

import { COMPANY_INFO } from './company';

export const BOT_INITIAL_PROMPT = {
  title: "Surya Poly Pack AI Assistant",
  titleTa: "சூர்யா பாலி பேக் AI உதவியாளர்",
  subtitle: "Packaging & Printing Enquiry Bot",
  subtitleTa: "பேக்கேஜிங் & அச்சிடுதல் வழிகாட்டி",
  languagePromptEn: "Welcome to Surya Poly Pack! Please select your preferred language to begin:",
  languagePromptTa: "சூர்யா பாலி பேக் நிறுவனத்திற்கு நல்வரவு! உரையாடலைத் தொடங்க உங்கள் விருப்பமான மொழியைத் தேர்ந்தெடுக்கவும்:",
};

export const BOT_WELCOME_MESSAGES = {
  en: "Hello! I am your Surya Poly Pack Assistant. You can ask me about our packaging products, polymer materials, flexo printing capabilities, pricing/MOQ, factory location, or connect directly with our sales team.",
  ta: "வணக்கம்! நான் உங்கள் சூர்யா பாலி பேக் AI உதவியாளர். எங்கள் பேக்கேஜிங் தயாரிப்புகள், பாலிமர் மூலப்பொருட்கள், பிளெக்ஸோ பிரிண்டிங், விலைக் குறிப்பு, குறைந்தபட்ச ஆர்டர் அளவு மற்றும் ஆலை முகவரி குறித்து என்னிடம் கேட்கலாம்."
};

export const FAQ_TOPICS = [
  {
    id: 'products',
    chipEn: '📦 Products We Make',
    chipTa: '📦 தயாரிப்பு வகைகள்',
    keywords: ['product', 'products', 'category', 'categories', 'bag', 'bags', 'pouch', 'pouches', 'cover', 'covers', 'standup', 'ziplock', 'food', 'produce', 'manufacture', 'தயாரிப்பு', 'பைகள்', 'பவுச்', 'கவர்கள்', 'உற்பத்தி', 'உணவு'],
    responseEn: `Surya Poly Pack manufactures a comprehensive range of flexible packaging products:\n\n1. **Food Packaging**: Aroma-barrier, moisture-proof poly covers and pouches for snacks, dates, spices, pickles, and dry groceries.\n2. **Retail Grocery & Carry Bags**: High-tensile HM/HDPE bags, D-cut / loop handle covers, and supermarket packaging.\n3. **Special Pouches**: Stand-up pouches, zip-lock bags, and multi-colour glossy retail packs.\n4. **Agricultural Packaging**: UV-stabilized nursery bags and sapling covers for commercial farms.\n5. **Industrial Protective Packaging**: Heavy-duty rolls, surface floor shielding films, matches and fireworks packaging.\n\nAll packaging can be custom sized, extruded, and custom-printed with your company branding!`,
    responseTa: `சூர்யா பாலி பேக் நிறுவனம் பலதரப்பட்ட நெகிழ்வான பேக்கேஜிங் தயாரிப்புகளை உற்பத்தி செய்கிறது:\n\n1. **உணவு பேக்கேஜிங்**: மசாலா, ஸ்நாக்ஸ், பேரீச்சம்பழம், ஊறுகாய் மற்றும் மளிகைப் பொருட்களுக்கான புத்துணர்ச்சி & மணம் பாதுகாக்கும் கவர்கள்.\n2. **மளிகை & கேரி பைகள்**: அதிக சுமை தாங்கும் HM/HDPE சில்லறை வணிக பைகள் மற்றும் சூப்பர் மார்க்கெட் பேக்கேஜிங்.\n3. **சிறப்பு பவுச்சுகள்**: ஸ்டாண்ட்-அப் பவுச்சுகள், ஜிப்-லாக் பைகள் மற்றும் பல வண்ண பளபளப்பான கவர்கள்.\n4. **விவசாய பேக்கேஜிங்**: நாற்று வளர்ப்புக்கான UV-பாதுகாக்கப்பட்ட நர்சரி பைகள்.\n5. **தொழில்துறை பேக்கேஜிங்**: தீப்பெட்டி, பட்டாசு, வாகன உதிரிபாகங்கள் மற்றும் தரை பாதுகாப்பு விரிப்புகள்.\n\nஅனைத்து தயாரிப்புகளும் உங்கள் நிறுவன பிராண்டிங்குடன் விருப்ப அளவுகளில் தயாரிக்கப்படுகின்றன!`
  },
  {
    id: 'materials',
    chipEn: '🧪 Materials & Microns',
    chipTa: '🧪 மூலப்பொருட்கள் & தடிமன்',
    keywords: ['material', 'materials', 'polymer', 'polymers', 'film', 'hdpe', 'hm', 'ldpe', 'lldpe', 'pp', 'polypropylene', 'micron', 'gauge', 'thickness', 'மூலப்பொருள்', 'பாலிமர்', 'மைக்ரான்', 'தடிமன்'],
    responseEn: `We process premium, virgin-grade polymer films tailored to your specific application:\n\n• **HM / HDPE**: High Molecular & High-Density Film for maximum tensile strength and durability (grocery bags & retail carry solutions).\n• **LDPE**: Low-Density Polyethylene providing high clarity, smooth texture, and exceptional heat sealing.\n• **LLDPE**: Linear Low-Density Polyethylene offering superior puncture resistance and tensile stretch.\n• **PP (Polypropylene)**: Ultra-clear, high-gloss film ideal for consumer retail displays and dry food covers.\n\nThickness range: From **20 microns up to 150+ microns** based on strength requirements.`,
    responseTa: `நாங்கள் உங்கள் தேவைக்கேற்ப பல்வேறு உயர் தர பாலிமர் மூலப்பொருட்களை செயலாக்குகிறோம்:\n\n• **HM / HDPE**: அதிக எடை தாங்கும் திறன் கொண்ட உறுதியான ஃபிலிம் (மளிகை மற்றும் கேரி பைகள்).\n• **LDPE**: மிகச் சிறந்த சீலிங் மற்றும் தெளிவான தோற்றம் கொண்ட மூலப்பொருள்.\n• **LLDPE**: கிழிசல் மற்றும் துளை விழுதலைத் தடுக்கும் அதிக இழுவிசை கொண்ட ஃபிலிம்.\n• **PP (பாலிப்ரோப்பிலீன்)**: தயாரிப்புகளை கவர்ச்சிகரமாகக் காட்டும் மிகத் தெளிவான, பளபளப்பான ஃபிலிம்.\n\nதடிமன் வரம்பு: வாடிக்கையாளர் தேவைக்கேற்ப **20 மைக்ரான் முதல் 150+ மைக்ரான்** வரை தயாரிக்கிறோம்.`
  },
  {
    id: 'printing',
    chipEn: '🎨 Flexo Printing Setup',
    chipTa: '🎨 பிரிண்டிங் தொழில்நுட்பம்',
    keywords: ['print', 'printing', 'flexo', 'flexographic', 'bison', 'anilox', 'marshal', 'colour', 'color', 'six', 'cylinder', 'stereo', 'அச்சு', 'பிரிண்டிங்', 'வண்ணம்', 'பிளெக்ஸோ'],
    responseEn: `Surya Poly Pack is powered by state-of-the-art flexographic machinery:\n\n• **Bison Ceramic Anilox (2025 Model)**: High-speed flexo press with micro-cell ceramic anilox rollers for uniform ink dispersion, ultra-fine typography, and clean half-tone graphics.\n• **Marshal Six-Colour Platform**: High-speed, 6-colour precision registration platform for rich multi-colour brand designs, barcodes, and regulatory information.\n• **Conversion Lines**: Automated slitting, bottom-sealing, side-sealing, and gusset punch lines.\n\nOur print quality ensures sharp, professional brand presence on shelves!`,
    responseTa: `சூர்யா பாலி பேக் அதிநவீன பிளெக்ஸோகிராஃபிக் பிரிண்டிங் இயந்திரங்களுடன் செயல்படுகிறது:\n\n• **பைசன் செராமிக் அனிலாக்ஸ் (2025 மாடல்)**: செராமிக் அனிலாக்ஸ் உருளைகள் மூலம் சீரான மை பூச்சு மற்றும் தெளிவான வரைகலைகளை வழங்கும் நவீன இயந்திரம்.\n• **மார்ஷல் 6-வண்ண பிரிண்டிங் பிளாட்ஃபார்ம்**: பல வண்ண பிராண்டிங், லோகோக்கள், பார்கோடுகள் மற்றும் தயாரிப்பு தகவல்களை துல்லியமாக அச்சிடும் அதிவேக இயந்திரம்.\n• **கன்வெர்ஷன் லைன்கள்**: தானியங்கி ஸ்லிட்டிங், கீழ்-சீலிங் மற்றும் பக்கவாட்டு-சீலிங் இயந்திரங்கள்.\n\nஉங்கள் நிறுவனத்தின் பிராண்ட் தயாரிப்புகளை கவர்ச்சிகரமாக வெளிப்படுத்த உயர்தர அச்சிடுதல் உதவுகிறது!`
  },
  {
    id: 'pricing',
    chipEn: '💰 Pricing & Quotation',
    chipTa: '💰 விலைக் குறிப்பு பெறுவது எப்படி?',
    keywords: ['price', 'pricing', 'quote', 'quotation', 'cost', 'rate', 'how much', 'estimate', 'விலை', 'மதிப்பு', 'கொட்டேஷன்', 'எவ்வளவு'],
    responseEn: `Packaging prices depend on:\n1. **Material Type** (HM, HDPE, LDPE, PP)\n2. **Bag / Pouch Dimensions** (Width × Length × Gusset)\n3. **Micron Gauge** (Thickness)\n4. **Number of Printing Colours** (Single colour to 6 colours)\n5. **Total Order Quantity (kg / units)**\n\n📌 **How to get a quick quote:**\nShare your approximate dimensions and material needs with us! Click our WhatsApp buttons below or submit the Enquiry form on our Contact page to receive a detailed quote within 1-2 hours.`,
    responseTa: `பேக்கேஜிங் விலை பின்வரும் காரணிகளைப் பொறுத்து கணக்கிடப்படுகிறது:\n1. **மூலப்பொருள் வகை** (HM, HDPE, LDPE, PP)\n2. **அளவுகள்** (அகலம் × நீளம் × மடிப்பு)\n3. **மைக்ரான் தடிமன்**\n4. **அச்சிடப்படும் வண்ணங்களின் எண்ணிக்கை** (1 முதல் 6 வண்ணங்கள் வரை)\n5. **ஆர்டர் அளவு (கிலோ / எண்ணிக்கை)**\n\n📌 **உடனடி விலைக் குறிப்பு பெற:**\nஉங்கள் பேக்கேஜிங் விவரங்களை கீழே உள்ள வாட்ஸ்அப் எண்களில் அனுப்பவும் அல்லது எங்கள் தொடர்பு பக்கத்தில் உள்ள படிவத்தை பூர்த்தி செய்யவும். 1-2 மணி நேரத்தில் துல்லியமான விலைக் குறிப்பை வழங்குவோம்.`
  },
  {
    id: 'moq',
    chipEn: '⚖️ Minimum Order (MOQ)',
    chipTa: '⚖️ குறைந்தபட்ச ஆர்டர் அளவு (MOQ)',
    keywords: ['moq', 'minimum', 'quantity', 'small', 'min', 'order size', 'குறைந்தபட்ச', 'அளவு', 'ஆர்டர்'],
    responseEn: `Our standard Minimum Order Quantities (MOQ) are designed for commercial and bulk production:\n\n• **Plain / Unprinted Poly Bags & Rolls**: Starts from **100 kg to 250 kg** depending on film gauge.\n• **Custom Printed Flexo Packaging**: Starts from **250 kg to 500 kg** per design (due to cylinder/stereo setup and ink formulation).\n• **Custom Cylinders/Stereos**: Prepared once during first order and reused for all subsequent production batches.\n\nNeed assistance with trial batches? Contact our team directly on WhatsApp!`,
    responseTa: `எங்கள் நிலையான குறைந்தபட்ச ஆர்டர் அளவுகள் (MOQ):\n\n• **அச்சிடப்படாத சாதாரண பாலி பைகள் & ரோல்கள்**: 100 கிலோ முதல் 250 கிலோ வரை.\n• **தனிப்பயன் அச்சிடப்பட்ட பைகள் (Custom Printed)**: வடிவமைப்புக்கு 250 கிலோ முதல் 500 கிலோ வரை (சிலிண்டர்/ஸ்டீரியோ அமைப்பின் காரணமாக).\n• **சிலிண்டர் / ஸ்டீரியோ தயாரிப்பு**: முதல் ஆர்டரில் ஒருமுறை மட்டுமே தயாரிக்கப்படும், பின்னர் தொடர் தயாரிப்புகளுக்கு மீண்டும் பயன்படுத்தப்படும்.\n\nசிறிய அளவிலான மாதிரி தயாரிப்புகளுக்கு எங்கள் வாட்ஸ்அப் எண்ணில் தொடர்புகொள்ளவும்!`
  },
  {
    id: 'location',
    chipEn: '📍 Factory Location',
    chipTa: '📍 ஆலை முகவரி',
    keywords: ['location', 'address', 'factory', 'plant', 'where', 'city', 'sivakasi', 'visit', 'find', 'முகவரி', 'எங்கு', 'ஆலை', 'சிவகாசி', 'இடம்'],
    responseEn: `🏭 **Surya Poly Pack Manufacturing Floor**:\n\n**Address**: 281C, Kanthapuram Colony, Kamarajar Salai, Sivakasi - 626 124, Tamil Nadu, India.\n\nSivakasi is India's leading industrial printing and manufacturing centre. We serve businesses across Sivakasi, Madurai, Virudhunagar, Chennai, Coimbatore, and all of South India. Direct plant visits and client consultations are welcome during business hours!`,
    responseTa: `🏭 **சூர்யா பாலி பேக் ஆலை முகவரி**:\n\n**முகவரி**: 281C, கந்தபுரம் காலனி, காமராஜர் சாலை, சிவகாசி - 626 124, தமிழ்நாடு, இந்தியா.\n\nசிவகாசி இந்தியாவின் முன்னணி அச்சிடுதல் மற்றும் பேக்கேஜிங் உற்பத்தி மையமாகும். சிவகாசி, மதுரை, விருதுநகர், சென்னை, கோவை உட்பட தென்னிந்தியா முழுவதும் நாங்கள் தயாரிப்புகளை அனுப்புகிறோம். வணிக வேலை நேரங்களில் ஆலையை நேரடியாக பார்வையிடலாம்!`
  },
  {
    id: 'contact',
    chipEn: '📞 Phone & WhatsApp',
    chipTa: '📞 தொலைபேசி & வாட்ஸ்அப்',
    keywords: ['contact', 'phone', 'call', 'whatsapp', 'number', 'email', 'hours', 'time', 'timing', 'support', 'help', 'தொடர்பு', 'தொலைபேசி', 'வாட்ஸ்அப்', 'எண்', 'மின்னஞ்சல்'],
    responseEn: `You can reach our sales and support team directly via:\n\n📞 **Call Numbers**:\n• Primary: **${COMPANY_INFO.phone.primary}**\n• Secondary: **${COMPANY_INFO.phone.secondary}**\n\n💬 **WhatsApp Numbers**:\n• Number 1: **${COMPANY_INFO.phone.primary}** (Sales & Orders)\n• Number 2: **${COMPANY_INFO.phone.secondary}** (Support & Plant)\n\n✉️ **Email**: ${COMPANY_INFO.email.sales}\n🕒 **Working Hours**: Monday – Saturday, 9:00 AM – 7:00 PM.`,
    responseTa: `எங்கள் விற்பனை மற்றும் வாடிக்கையாளர் ஆதரவு குழுவை நேரடியாக தொடர்புகொள்ள:\n\n📞 **தொலைபேசி எண்கள்**:\n• முதன்மை: **${COMPANY_INFO.phone.primary}**\n• துணை: **${COMPANY_INFO.phone.secondary}**\n\n💬 **வாட்ஸ்அப் எண்கள்**:\n• எண் 1: **${COMPANY_INFO.phone.primary}** (விற்பனை & ஆர்டர்கள்)\n• எண் 2: **${COMPANY_INFO.phone.secondary}** (ஆதரவு & ஆலை)\n\n✉️ **மின்னஞ்சல்**: ${COMPANY_INFO.email.sales}\n🕒 **வேலை நேரம்**: திங்கள் முதல் சனி வரை, காலை 9:00 முதல் மாலை 7:00 வரை.`
  },
  {
    id: 'samples',
    chipEn: '✨ Samples & Delivery',
    chipTa: '✨ மாதிரிகள் & விநியோகம்',
    keywords: ['sample', 'samples', 'proof', 'delivery', 'dispatch', 'ship', 'transport', 'மாதிரி', 'சாம்பிள்', 'விநியோகம்', 'டெலிவரி'],
    responseEn: `• **Material & Print Samples**: We provide representative samples of poly film substrates, bottom/side seal integrity, and flexo print resolution.\n• **Proofing**: Digital artwork layouts and stereo proofs are finalized with your confirmation prior to production.\n• **Delivery & Logistics**: Orders are securely packed in moisture-shielded bundles and dispatched via reliable transport carriers across Tamil Nadu, Kerala, Karnataka, and Andhra Pradesh.`,
    responseTa: `• **தயாரிப்பு மாதிரிகள் (Samples)**: எங்கள் பாலி ஃபிலிம்கள், சீலிங் வலிமை மற்றும் பிரிண்டிங் தரத்தின் மாதிரிகளை நீங்கள் பெற்று பார்க்கலாம்.\n• **ப்ரூஃப் உறுதிப்படுத்தல்**: தயாரிப்பு தொடங்குவதற்கு முன் டிஜிட்டல் ஆர்ட்வொர்க் லேஅவுட்கள் உங்கள் இறுதி ஒப்புதலுக்கு அனுப்பப்படும்.\n• **பாதுகாப்பான விநியோகம்**: அனைத்து ஆர்டர்களும் ஈரப்பதம் படாதவாறு பாதுகாப்பாக பேக் செய்யப்பட்டு, தமிழ்நாடு மற்றும் அண்டை மாநிலங்களுக்கு நம்பகமான லாரி பார்சல் மூலம் அனுப்பப்படுகின்றன.`
  }
];

/**
 * Match user query to best FAQ topic or provide helpful fallback
 */
export function findBotResponse(query, lang = 'en') {
  if (!query || typeof query !== 'string') {
    return null;
  }

  const cleanQuery = query.toLowerCase().trim();

  // Score each topic
  let bestTopic = null;
  let highestScore = 0;

  for (const topic of FAQ_TOPICS) {
    let score = 0;
    for (const kw of topic.keywords) {
      if (cleanQuery.includes(kw.toLowerCase())) {
        score += 2;
      }
    }
    if (score > highestScore) {
      highestScore = score;
      bestTopic = topic;
    }
  }

  if (bestTopic && highestScore > 0) {
    return {
      topicId: bestTopic.id,
      text: lang === 'ta' ? bestTopic.responseTa : bestTopic.responseEn,
      hasWhatsAppCTA: true
    };
  }

  // Fallback response with helpful direct escalation
  const fallbackEn = `Thank you for asking! For custom dimension specifications, unique micron thickness, or specific packaging quotes, our factory team would be delighted to assist you directly.\n\nPlease feel free to chat with us on WhatsApp or submit our Enquiry form:`;
  const fallbackTa = `தங்களின் கேள்விக்கு நன்றி! உங்கள் துல்லியமான பேக்கேஜிங் அளவுகள், மைக்ரான் தடிமன் மற்றும் சிறப்பு தேவைகளுக்கு எங்கள் ஆலை குழு உங்களுக்கு நேரடியாக உதவ தயாராக உள்ளது.\n\nகீழே உள்ள எண்களில் எங்களை வாட்ஸ்அப்பில் தொடர்புகொள்ளலாம் அல்லது தொடர்பு படிவத்தை பயன்படுத்தலாம்:`;

  return {
    topicId: 'fallback',
    text: lang === 'ta' ? fallbackTa : fallbackEn,
    hasWhatsAppCTA: true
  };
}
