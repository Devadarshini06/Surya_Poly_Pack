/**
 * Surya Poly Pack - Complete Product Catalogue
 * Strictly adhering to provided product requirements across 4 categories.
 * Non-plastic carry bags are maintained separately with a clear distinction.
 */

export const PRODUCT_CATEGORIES = [
  { id: 'all', nameEn: 'All Products', nameTa: 'அனைத்து தயாரிப்புகள்' },
  { id: 'food', nameEn: 'Food Packaging', nameTa: 'உணவு பேக்கேஜிங்' },
  { id: 'bags_general', nameEn: 'Bags & General Packaging', nameTa: 'பைகள் & பொது பேக்கேஜிங்' },
  { id: 'special', nameEn: 'Special Packaging', nameTa: 'சிறப்பு பேக்கேஜிங்' },
  { id: 'industrial_consumer', nameEn: 'Industrial & Consumer', nameTa: 'தொழில்துறை & நுகர்வோர்' }
];

export const PRODUCTS = [
  // --- Category 1: Food Packaging ---
  {
    id: 'snacks-covers',
    category: 'food',
    name: {
      en: 'Snacks Covers',
      ta: 'ஸ்நாக்ஸ் கவர்கள்'
    },
    description: {
      en: 'High-clarity printed covers designed to preserve freshness, crispness, and aroma for savouries, chips, and snacks.',
      ta: 'சிப்ஸ், கார வகைகள் மற்றும் தின்பண்டங்களின் மொறுமொறுப்பையும் மணத்தையும் பாதுகாக்கும் தெளிவான அச்சிடப்பட்ட கவர்கள்.'
    },
    application: {
      en: 'Savouries, potato chips, mixtures, roasted snacks, and confectionery packaging.',
      ta: 'கார வகைகள், சிப்ஸ், மிக்சர், வறுத்த தின்பண்டங்கள் மற்றும் மிட்டாய் பேக்கேஜிங்.'
    },
    materialType: 'Printed Polypropylene (PP) / Multi-layer Barrier Film',
    image: '/images/food_packaging_pouches.jpg',
    features: {
      en: ['Moisture barrier retention', 'High-gloss surface finish', 'Vibrant flexographic multi-colour print'],
      ta: ['ஈரப்பதம் தடுப்பு திறன்', 'பளபளப்பான வெளிப்புற தோற்றம்', 'துல்லியமான பல வண்ண ஃப்ளெக்ஸோ பிரிண்டிங்']
    }
  },
  {
    id: 'dates-covers',
    category: 'food',
    name: {
      en: 'Dates Covers',
      ta: 'பேரீச்சம்பழம் கவர்கள்'
    },
    description: {
      en: 'Heavy-duty food-grade packaging film offering superior strength and seal integrity for dates and dried fruits.',
      ta: 'பேரீச்சம்பழம் மற்றும் உலர் பழங்களுக்கான உறுதியான சீல் மற்றும் தரம் வாய்ந்த பேக்கேஜிங் கவர்கள்.'
    },
    application: {
      en: 'Fresh and dried dates, processed dry fruit retail packing.',
      ta: 'பேரீச்சம்பழம் மற்றும் பதப்படுத்தப்பட்ட உலர் பழங்களின் சில்லறை பேக்கிங்.'
    },
    materialType: 'High-Molecular (HM) / LDPE Barrier Film',
    image: '/images/food_packaging_pouches.jpg',
    features: {
      en: ['Puncture-resistant gauge', 'Strong airtight heat sealing', 'Custom window visibility option'],
      ta: ['கிழிசல் எதிர்ப்பு திறன்', 'உறுதியான வெப்ப சீலிங்', 'உள்ளடக்கம் தெரியும் கண்ணாடி போன்ற வடிவமைப்பு']
    }
  },
  {
    id: 'nut-covers',
    category: 'food',
    name: {
      en: 'Nut Covers',
      ta: 'நட்ஸ் & பருப்பு கவர்கள்'
    },
    description: {
      en: 'Premium barrier covers tailored for cashews, almonds, pistachios, and mixed nuts, safeguarding against oxidation.',
      ta: 'முந்திரி, பாதாம், பிஸ்தா மற்றும் பருப்பு வகைகளை நீண்ட நாட்கள் புத்துணர்ச்சியுடன் வைத்திருக்க உதவும் கவர்கள்.'
    },
    application: {
      en: 'Cashew nuts, roasted almonds, walnuts, pistachios, and dried fruits.',
      ta: 'முந்திரி பருப்பு, வறுத்த பாதாம், அக்ரூட், பிஸ்தா மற்றும் உலர் கொட்டைகள்.'
    },
    materialType: 'Polypropylene (PP) / Barrier Lamination',
    image: '/images/standup_pouches.jpg',
    features: {
      en: ['Oxygen and humidity resistance', 'Crystal clear display clarity', 'Flexographic brand printing'],
      ta: ['காற்று மற்றும் ஈரப்பதம் புகா தன்மை', 'தெளிவான தயாரிப்பு காட்சி', 'பிராண்ட் ஃப்ளெக்ஸோ அச்சிடுதல்']
    }
  },
  {
    id: 'pickle-covers',
    category: 'food',
    name: {
      en: 'Pickle Covers',
      ta: 'ஊறுகாய் கவர்கள்'
    },
    description: {
      en: 'Specialized chemical- and oil-resistant packaging film engineered to withstand acidic brine and oils without leakage.',
      ta: 'எண்ணெய் மற்றும் அமிலத் தன்மை கொண்ட ஊறுகாய்கள் கசியாமல் பாதுகாக்கும் உறுதியான பேக்கேஜிங் கவர்கள்.'
    },
    application: {
      en: 'Pickles, fermented pastes, spiced condiments, and culinary relishes.',
      ta: 'ஊறுகாய் வகைகள், தொக்கு, பேஸ்ட்கள் மற்றும் மசாலா சமையல் பொருட்கள்.'
    },
    materialType: 'Multi-layer Polyethylene / Barrier Film',
    image: '/images/food_packaging_pouches.jpg',
    features: {
      en: ['Superior oil and acid resistance', 'Zero-leakage heat seal technology', 'Tough multi-layer construction'],
      ta: ['எண்ணெய் மற்றும் அமில எதிர்ப்பு', 'கசிவு இல்லாத சீலிங் முறை', 'உறுதியான பல அடுக்கு அமைப்பு']
    }
  },
  {
    id: 'grocery-covers',
    category: 'food',
    name: {
      en: 'Grocery Covers',
      ta: 'மளிகைப் பொருட்கள் கவர்கள்'
    },
    description: {
      en: 'Dependable packaging covers for pulses, flours, grains, and dry grocery essentials with robust side and bottom seals.',
      ta: 'பருப்பு வகைகள், மாவு, தானியங்கள் உள்ளிட்ட அத்தியாவசிய மளிகைப் பொருட்களுக்கான பாதுகாப்பான கவர்கள்.'
    },
    application: {
      en: 'Dals, lentils, rice, wheat flour, and wholesale grocery retail packing.',
      ta: 'பருப்பு, அரிசி, கோதுமை மாவு மற்றும் மளிகைக் கடை சில்லறை பேக்கிங்.'
    },
    materialType: 'HM / HDPE / PP Film',
    image: '/images/pp_bags.jpg',
    features: {
      en: ['High tensile strength', 'Consistent micron gauge thickness', 'Custom retail branding printing'],
      ta: ['அதிக சுமை தாங்கும் திறன்', 'சீரான மைக்ரான் தடிமன்', 'தனிப்பயன் லோகோ பிரிண்டிங்']
    }
  },
  {
    id: 'masala-covers',
    category: 'food',
    name: {
      en: 'Masala Covers',
      ta: 'மசாலா தூள் கவர்கள்'
    },
    description: {
      en: 'Aroma-locking flexible packaging designed to preserve volatile spice compounds and prevent moisture degradation.',
      ta: 'மசாலா பொடிகளின் மணம் மற்றும் காரத் தன்மையை இழக்காமல் பாதுகாக்கும் பிரத்யேக கவர்கள்.'
    },
    application: {
      en: 'Chilli powder, turmeric powder, garam masala, sambar powder, and blended spice powders.',
      ta: 'மிளகாய் தூள், மஞ்சள் தூள், கரம் மசாலா, சாம்பார் தூள் மற்றும் கலவை மசாலாக்கள்.'
    },
    materialType: 'High-Barrier Flexible Packaging Film',
    image: '/images/food_packaging_pouches.jpg',
    features: {
      en: ['Aroma barrier protection', 'Light and UV resistance', 'High-definition flexo print reproduction'],
      ta: ['மணம் மாறாமல் பாதுகாக்கும் திறன்', 'ஒளி மற்றும் ஈரப்பதம் தடுப்பு', 'தெளிவான உயர் தர அச்சிடுதல்']
    }
  },

  // --- Category 2: Bags and General Packaging ---
  {
    id: 'grocery-bags',
    category: 'bags_general',
    name: {
      en: 'Grocery Bags',
      ta: 'மளிகை பைகள்'
    },
    description: {
      en: 'Durable retail carry and poly packaging bags designed for high weight-bearing capacity in retail stores.',
      ta: 'மளிகைக் கடைகள் மற்றும் சூப்பர் மார்க்கெட்டுகளுக்கு ஏற்ற அதிக எடை தாங்கும் உறுதியான பைகள்.'
    },
    application: {
      en: 'Supermarkets, departmental stores, retail trade, and daily grocery handling.',
      ta: 'சூப்பர் மார்க்கெட், பல்பொருள் அங்காடிகள் மற்றும் சில்லறை வணிகம்.'
    },
    materialType: 'HM / HDPE Polyethylene',
    image: '/images/pp_bags.jpg',
    features: {
      en: ['Reinforced bottom seal', 'High tensile load tolerance', 'Uniform handle punches and cutouts'],
      ta: ['வலுவூட்டப்பட்ட கீழ் சீலிங்', 'அதிக சுமை தாங்கும் திறன்', 'சீரான கைப்பிடி கட்டிங்']
    }
  },
  {
    id: 'non-plastic-carry-bags',
    category: 'bags_general',
    name: {
      en: 'Non-Plastic Carry Bags',
      ta: 'பிளாஸ்டிக் அல்லாத கேரி பேக்குகள்'
    },
    description: {
      en: 'Eco-conscious alternative carry bags manufactured from non-plastic substrate materials for retail and commercial use.',
      ta: 'பிளாஸ்டிக் அல்லாத மாற்று மூலப்பொருட்களில் இருந்து தயாரிக்கப்படும் வணிக பயன்பாட்டு கேரி பேக்குகள்.'
    },
    application: {
      en: 'Textile showrooms, eco-conscious retail outlets, boutiques, and exhibitions.',
      ta: 'ஜவுளி கடைகள், பொட்டிக்குகள், கண்காட்சிகள் மற்றும் வணிக வளாகங்கள்.'
    },
    materialType: 'Non-Plastic Alternative Fabric / Woven Substrate',
    isNonPlastic: true,
    image: '/images/pp_bags.jpg',
    features: {
      en: ['Distinct non-plastic category', 'Reusable strength structure', 'Premium aesthetic printing'],
      ta: ['பிளாஸ்டிக் அல்லாத பிரத்யேக வகை', 'மறுபயன்பாட்டு கட்டமைப்பு', 'நேர்த்தியான லோகோ பிரிண்டிங்']
    }
  },
  {
    id: 'general-purpose-covers',
    category: 'bags_general',
    name: {
      en: 'General-Purpose Packaging Covers',
      ta: 'பொது பயன்பாட்டு பேக்கேஜிங் கவர்கள்'
    },
    description: {
      en: 'Versatile poly packaging covers suitable for a wide variety of commercial, manufacturing, and shipping packaging needs.',
      ta: 'வணிகம், உற்பத்தி மற்றும் சரக்கு போக்குவரத்து பயன்பாடுகளுக்கான பல்துறை பாலி கவர்கள்.'
    },
    application: {
      en: 'Stationery, apparel, hardware parts, domestic goods, and logistics protection.',
      ta: 'எழுத்துப் பொருட்கள், உடைகள், வன்பொருள் பாகங்கள் மற்றும் வீட்டு உபயோக பொருட்கள்.'
    },
    materialType: 'PP / LDPE / LLDPE Polyethylene',
    image: '/images/pp_bags.jpg',
    features: {
      en: ['Available in custom dimensions', 'Clean transparent or printed surface', 'Consistent thickness control'],
      ta: ['விருப்ப அளவுகளில் தயாரிப்பு', 'தெளிவான அல்லது அச்சிடப்பட்ட மேற்பரப்பு', 'சீரான மைக்ரான் தடிமன்']
    }
  },
  {
    id: 'floor-covers',
    category: 'bags_general',
    name: {
      en: 'Floor Covers',
      ta: 'தரை விரிப்பு பாதுகாப்பு கவர்கள்'
    },
    description: {
      en: 'Heavy-gauge protective poly film sheets engineered to safeguard flooring, tiles, carpets, and surfaces during construction or transit.',
      ta: 'கட்டுமானம், வண்ணம் பூசுதல் அல்லது போக்குவரத்தின் போது தரை மற்றும் டைல்ஸ்களை பாதுகாக்கும் தடிமனான பாலி தாள்கள்.'
    },
    application: {
      en: 'Flooring protection, construction site shielding, surface transit protection, and painting work.',
      ta: 'கட்டுமான தளங்கள், தரை மற்றும் டைல்ஸ் பாதுகாப்பு, வண்ணம் பூசும் பணிகள்.'
    },
    materialType: 'Heavy-Gauge LDPE / Polyethylene Film',
    image: '/images/industrial_packaging.jpg',
    features: {
      en: ['Heavy-duty puncture resistance', 'Broad roll width coverage', 'Dust, paint, and water repellent'],
      ta: ['அதிக கிழிசல் எதிர்ப்பு', 'அகலமான ரோல் வடிவமைப்பு', 'தூசி, பெயிண்ட் மற்றும் நீர் புகா தன்மை']
    }
  },

  // --- Category 3: Special Packaging ---
  {
    id: 'stand-up-pouches',
    category: 'special',
    name: {
      en: 'Stand-Up Pouches',
      ta: 'ஸ்டாண்ட்-அப் பவுச்சுகள்'
    },
    description: {
      en: 'Self-standing flexible pouches engineered with bottom gussets for exceptional shelf appeal and barrier preservation.',
      ta: 'அலமாரிகளில் நேராக நிற்கும் பாட்டம் கஸ்ஸட் கொண்ட நவீன கவர்ச்சிகரமான பேக்கேஜிங் பவுச்சுகள்.'
    },
    application: {
      en: 'Dry foods, snacks, confectioneries, pet food, and consumer goods.',
      ta: 'உலர் உணவுகள், தின்பண்டங்கள், மிட்டாய் வகைகள் மற்றும் நுகர்வோர் பொருட்கள்.'
    },
    materialType: 'Laminated Barrier Film / Multi-layer Substrate',
    image: '/images/standup_pouches.jpg',
    features: {
      en: ['Stable self-standing base', 'High visual shelf appeal', 'Multi-colour precision printing'],
      ta: ['நிலையான நிற்கும் அடித்தளம்', 'கவர்ச்சிகரமான தோற்றம்', 'துல்லியமான பல வண்ண பிரிண்டிங்']
    }
  },
  {
    id: 'zip-lock-stand-up-pouches',
    category: 'special',
    name: {
      en: 'Zip-Lock Stand-Up Pouches',
      ta: 'ஜிப்-லாக் ஸ்டாண்ட்-அப் பவுச்சுகள்'
    },
    description: {
      en: 'Re-closable stand-up pouches with integrated press-to-close zippers for continuous customer convenience and product freshness.',
      ta: 'மறுமுறை திறந்து மூடும் வசதி கொண்ட ஜிப்-லாக் ஸ்டாண்ட்-அப் பவுச்சுகள், பயன்பாட்டிற்கு மிகவும் எளிதானவை.'
    },
    application: {
      en: 'Premium teas, dry fruits, spices, chemical granules, and speciality retail.',
      ta: 'தேயிலை, உலர் பழங்கள், மசாலா பொருட்கள் மற்றும் சிறப்பு சில்லறை விற்பனை.'
    },
    materialType: 'Multi-layer Polyethylene / Barrier Film with Ziplock',
    image: '/images/standup_pouches.jpg',
    features: {
      en: ['Press-to-close resealable track', 'Tear notches for easy opening', 'High air & moisture barrier'],
      ta: ['எளிதில் மூடக்கூடிய ஜிப்பர்', 'எளிதாக திறக்கும் நாட்ச் வடிவம்', 'சிறந்த காற்று & ஈரப்பதம் தடுப்பு']
    }
  },
  {
    id: 'custom-printed-packaging-covers',
    category: 'special',
    name: {
      en: 'Custom Printed Packaging Covers',
      ta: 'தனிப்பயன் அச்சிடப்பட்ட பேக்கேஜிங் கவர்கள்'
    },
    description: {
      en: 'Tailored packaging covers manufactured to exact customer specifications, featuring bespoke dimensions, gauges, and branding.',
      ta: 'வாடிக்கையாளரின் பிரத்யேக தேவைகள், லோகோ மற்றும் வண்ணங்களுக்கு ஏற்ப தயாரிக்கப்படும் தனிப்பயன் கவர்கள்.'
    },
    application: {
      en: 'Branded consumer goods, corporate packaging, retail collections, and industrial contracts.',
      ta: 'பிராண்டட் நுகர்வோர் பொருட்கள், கார்ப்பரேட் பேக்கேஜிங் மற்றும் தொழில்துறை தேவைகள்.'
    },
    materialType: 'Custom Polypropylene / Polyethylene Substrates',
    image: '/images/food_packaging_pouches.jpg',
    features: {
      en: ['Bespoke flexographic printing up to multi-colour', 'Tailored micron thickness & sizes', 'Precision registration'],
      ta: ['விருப்ப வண்ணங்களில் பிரிண்டிங்', 'தேவைக்கேற்ற மைக்ரான் மற்றும் அளவுகள்', 'துல்லியமான அச்சிடும் தொழில்நுட்பம்']
    }
  },

  // --- Category 4: Industrial and Consumer Packaging ---
  {
    id: 'mosquito-coil-covers',
    category: 'industrial_consumer',
    name: {
      en: 'Mosquito Coil Covers',
      ta: 'கொசுவர்த்தி சுருள் கவர்கள்'
    },
    description: {
      en: 'Durable protective packaging covers specifically dimensioned to hold mosquito coils securely and prevent breakage.',
      ta: 'கொசுவர்த்தி சுருள்கள் உடைந்துவிடாமல் பாதுகாக்கும் பிரத்யேக அளவிலான உறுதியான கவர்கள்.'
    },
    application: {
      en: 'Mosquito repellent coils, incense discs, and pest-control consumer packing.',
      ta: 'கொசுவர்த்தி சுருள்கள், நறுமண வட்டுக்கள் மற்றும் பூச்சி விரட்டி பேக்கிங்.'
    },
    materialType: 'High-Molecular (HM) / HDPE Polyethylene',
    image: '/images/industrial_packaging.jpg',
    features: {
      en: ['Breakage prevention containment', 'Precise fit dimensions', 'Clean printed brand display'],
      ta: ['உடைவதைத் தடுக்கும் கட்டமைப்பு', 'துல்லியமான அளவு', 'தெளிவான பிராண்ட் அச்சிடுதல்']
    }
  },
  {
    id: 'matches-covers',
    category: 'industrial_consumer',
    name: {
      en: 'Matches Covers',
      ta: 'தீப்பெட்டி பண்டல் கவர்கள்'
    },
    description: {
      en: 'Moisture-shielding outer packaging covers engineered for matchbox bundles and carton over-wrapping.',
      ta: 'தீப்பெட்டி பண்டல்களை ஈரப்பதம் தாக்காமல் பாதுகாக்கும் வெளிப்புற பாலி கவர்கள்.'
    },
    application: {
      en: 'Matchbox wholesale bundles, export bundling, and retail packs.',
      ta: 'தீப்பெட்டி மொத்த விற்பனை பண்டல்கள் மற்றும் ஏற்றுமதி பேக்கிங்.'
    },
    materialType: 'Polypropylene (PP) / HM Film',
    image: '/images/industrial_packaging.jpg',
    features: {
      en: ['Moisture and humidity exclusion', 'Tight shrink-ready or wrap seal', 'Cost-effective bulk packaging'],
      ta: ['ஈரப்பதம் புகா தன்மை', 'இறுக்கமான பண்டல் சீலிங்', 'சிக்கனமான மொத்த பேக்கிங்']
    }
  },
  {
    id: 'fireworks-covers',
    category: 'industrial_consumer',
    name: {
      en: 'Fireworks Covers',
      ta: 'பட்டாசு பாதுகாப்பு கவர்கள்'
    },
    description: {
      en: 'Heavy-duty safety packaging covers providing robust external protection and moisture resistance for pyrotechnic boxes.',
      ta: 'பட்டாசு பெட்டிகளுக்கு வெளிப்புற பாதுகாப்பையும் ஈரப்பத தடுப்பையும் வழங்கும் உறுதியான பாலி கவர்கள்.'
    },
    application: {
      en: 'Fireworks gift boxes, sparkler bundles, crackers, and display cartons.',
      ta: 'பட்டாசு பரிசு பெட்டிகள், கம்பி மத்தாப்பு பண்டல்கள் மற்றும் வெடி பேக்கிங்.'
    },
    materialType: 'High-Strength Polyethylene / HM / LDPE',
    image: '/images/industrial_packaging.jpg',
    features: {
      en: ['High resistance to tearing and abrasions', 'Water-resistant barrier', 'Custom branding and cautionary printing'],
      ta: ['அதிக கிழிசல் எதிர்ப்பு', 'நீர் புகா பாதுகாப்பு', 'பிராண்ட் மற்றும் எச்சரிக்கை வாசகங்கள் அச்சிடுதல்']
    }
  },
  {
    id: 'bijali-covers',
    category: 'industrial_consumer',
    name: {
      en: 'Bijali Covers',
      ta: 'பிஜிலி பட்டாசு கவர்கள்'
    },
    description: {
      en: 'Custom-sized transparent and printed poly covers formulated specifically for Bijali cracker bundling and retail packaging.',
      ta: 'பிஜிலி பட்டாசு தயாரிப்புகளை பேக்கிங் செய்ய பிரத்யேகமாக வடிவமைக்கப்பட்ட கவர்கள்.'
    },
    application: {
      en: 'Bijali crackers, small firecracker strips, and festive fireworks packs.',
      ta: 'பிஜிலி பட்டாசுகள் மற்றும் திருவிழா பட்டாசு பேக்கிங்.'
    },
    materialType: 'Polypropylene (PP) / HM Film',
    image: '/images/industrial_packaging.jpg',
    features: {
      en: ['Compact dimension calibration', 'Excellent transparency', 'Strong longitudinal and bottom seals'],
      ta: ['துல்லியமான சிறிய அளவுகள்', 'சிறந்த ஒளிபுகும் தன்மை', 'வலுவான கீழ் சீலிங்']
    }
  },
  {
    id: 'automobile-industry-packaging-covers',
    category: 'industrial_consumer',
    name: {
      en: 'Automobile Industry Packaging Covers',
      ta: 'வாகன தொழில்துறை பேக்கேஜிங் கவர்கள்'
    },
    description: {
      en: 'Industrial-grade protective covers and poly sleeves engineered to shield automotive spare parts from dust, grease, and moisture during storage and transit.',
      ta: 'வாகன உதிரிபாகங்கள் சேமிப்பு மற்றும் போக்குவரத்தின் போது தூசி, கிரீஸ் மற்றும் ஈரப்பதத்திலிருந்து பாதுகாக்க உதவும் தொழிற்துறை கவர்கள்.'
    },
    application: {
      en: 'Automotive spare parts, machined components, rubber bushes, and hardware assemblies.',
      ta: 'வாகன உதிரிபாகங்கள், இயந்திர பாகங்கள், ரப்பர் புஷ்கள் மற்றும் வன்பொருட்கள்.'
    },
    materialType: 'Heavy-Duty LDPE / LLDPE / HDPE Film',
    image: '/images/industrial_packaging.jpg',
    features: {
      en: ['Heavy-gauge puncture resistance', 'Protection from dust and handling', 'Custom size roll or pre-cut bags'],
      ta: ['தடிமனான கிழிசல் எதிர்ப்பு', 'தூசி மற்றும் சேத பாதுகாப்பு', 'ரோல் அல்லது வெட்டப்பட்ட பை வடிவம்']
    }
  },
  {
    id: 'tree-and-plant-covers',
    category: 'industrial_consumer',
    name: {
      en: 'Tree and Plant Covers',
      ta: 'மரம் & நாற்று நர்சரி கவர்கள்'
    },
    description: {
      en: 'UV-stabilized nursery bags and plant protective covers designed for sapling cultivation, tree shielding, and horticultural propagation.',
      ta: 'நாற்று வளர்ப்பு, நர்சரி மற்றும் தாவரங்களை பாதுகாக்க பயன்படும் நீடித்து உழைக்கும் பாலி கவர்கள்.'
    },
    application: {
      en: 'Plant nurseries, horticulture, tree saplings, farm cultivation, and garden centers.',
      ta: 'நர்சரிகள், தோட்டக்கலை, மரக்கன்றுகள் வளர்ப்பு மற்றும் பண்ணை பயன்பாடு.'
    },
    materialType: 'UV-Stabilized Polyethylene (HDPE / LDPE)',
    image: '/images/industrial_packaging.jpg',
    features: {
      en: ['Weather and UV degradation tolerance', 'Pre-punched drainage holes available', 'Strong root-holding capacity'],
      ta: ['சூரிய ஒளி மற்றும் தட்பவெப்ப எதிர்ப்பு', 'நீர் வடியும் துளைகளுடன் அமைப்பு', 'வேர் தாங்கும் உறுதி']
    }
  }
];
