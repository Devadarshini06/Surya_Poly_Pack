/**
 * Surya Poly Pack - Machinery & Manufacturing Capabilities
 * Based strictly on company-supplied details with transparent verification flags.
 */

export const MACHINES = [
  {
    id: 'bison-flexo',
    name: {
      en: 'Bison Flexographic Printing Machine',
      ta: 'பைசன் ஃப்ளெக்ஸோகிராஃபிக் பிரிண்டிங் இயந்திரம்'
    },
    shortName: 'Bison Ceramic Anilox (2025)',
    category: 'printing',
    modelYear: '2025 Model',
    image: '/images/flexo_machine.jpg',
    suppliedSpecs: {
      en: [
        'Bison Ceramic Anilox Rollers',
        'Automatic Web Alignment System',
        'Precision Tension Control',
        '2025 Latest Generation Model',
        'Flexographic Printing Technology'
      ],
      ta: [
        'பைசன் செராமிக் அனிலாக்ஸ் ரோலர்கள்',
        'தானியங்கி வெப் சீரமைப்பு முறைமை',
        'துல்லியமான டென்ஷன் கட்டுப்பாடு',
        '2025 புதிய தலைமுறை மாதிரி',
        'ஃப்ளெக்ஸோகிராஃபிக் பிரிண்டிங் தொழில்நுட்பம்'
      ]
    },
    verificationNotice: {
      en: 'Exact commercial model designation and detailed technical specs are flagged for final factory verification.',
      ta: 'துல்லியமான மாடல் பெயர் மற்றும் விரிவான தொழில்நுட்ப விவரக்குறிப்புகள் இறுதி சரிபார்ப்புக்கு உட்பட்டவை.'
    },
    status: 'Operational',
    statusTa: 'இயக்கத்தில் உள்ளது'
  },
  {
    id: 'marshal-six-color',
    name: {
      en: 'Marshal Six-Colour Printing Machine',
      ta: 'மார்ஷல் ஆறு-வண்ண பிரிண்டிங் இயந்திரம்'
    },
    shortName: 'Marshal 6-Colour Anilox (2018)',
    category: 'printing',
    modelYear: '2018 Model',
    image: '/images/marshal_six_color.jpg',
    suppliedSpecs: {
      en: [
        'Marshal Engineering Platform',
        'Six-Colour Electronic Anilox Inking System',
        '2018 Model',
        'Synchronized Multi-Colour Printing Capability',
        'Vibrant Brand Graphics & Fine Text Reproduction'
      ],
      ta: [
        'மார்ஷல் பொறியியல் கட்டமைப்பு',
        'ஆறு-வண்ண எலக்ட்ரானிக் அனிலாக்ஸ் மை அமைப்பு',
        '2018 மாதிரி',
        'ஒத்திசைக்கப்பட்ட பல வண்ண பிரிண்டிங் திறன்',
        'தெளிவான பிராண்ட் கிராபிக்ஸ் மற்றும் அச்சிடுதல்'
      ]
    },
    verificationNotice: {
      en: 'Provided as supplied; detailed throughput speeds and registration tolerances to be verified.',
      ta: 'வழங்கப்பட்ட விவரங்களின்படி; வேகம் மற்றும் கூடுதல் தகவல்கள் சரிபார்ப்புக்கு உட்பட்டவை.'
    },
    status: 'Operational',
    statusTa: 'இயக்கத்தில் உள்ளது'
  },
  {
    id: 'pp-conversion',
    name: {
      en: 'Polypropylene (PP) Conversion Machine',
      ta: 'பாலிப்ரோப்பிலீன் (PP) கன்வெர்ஷன் இயந்திரம்'
    },
    shortName: 'PP Conversion (2.5" – 18")',
    category: 'conversion',
    modelYear: 'Conversion Line',
    image: '/images/pp_conversion_machine.jpg',
    suppliedSpecs: {
      en: [
        'Dedicated Polypropylene Film Processing',
        'Supplied Size Range: 2.5 inches to 18 inches (as supplied)',
        'Slitting, Gusseting & Converting Integration',
        'Uniform Gauge & Dimensional Accuracy'
      ],
      ta: [
        'பிரத்யேக பாலிப்ரோப்பிலீன் ஃபிலிம் செயலாக்கம்',
        'வழங்கப்பட்ட அளவு வரம்பு: 2.5 அங்குலம் முதல் 18 அங்குலம் வரை',
        'ஸ்லிட்டிங், கஸ்ஸெட்டிங் மற்றும் கன்வெர்ஷன் இணைப்பு',
        'சீரான தடிமன் மற்றும் பரிமாண துல்லியம்'
      ]
    },
    verificationNotice: {
      en: 'Size range of 2.5" to 18" displayed exactly as supplied (specific confirmation pending whether web width, bag width, or diameter).',
      ta: '2.5" முதல் 18" வரையிலான அளவு வரம்பு வழங்கப்பட்டபடியே குறிப்பிடப்பட்டுள்ளது (பை அகலமா அல்லது ரோல் அகலமா என்பது உறுதிப்படுத்தலுக்கு உட்பட்டது).'
    },
    status: 'Operational',
    statusTa: 'இயக்கத்தில் உள்ளது'
  },
  {
    id: 'pe-conversion',
    name: {
      en: 'Polyethylene Packaging Conversion Line',
      ta: 'பாலிஎத்திலீன் பேக்கேஜிங் கன்வெர்ஷன் பிரிவு'
    },
    shortName: 'HM / HDPE / LDPE / LLDPE Line',
    category: 'conversion',
    modelYear: 'Multi-Polymer Line',
    image: '/images/pe_conversion_machine.jpg',
    suppliedSpecs: {
      en: [
        'Supplied Materials: HM / HDPE (High Molecular / High Density)',
        'Supplied Materials: LDPE (Low-Density Polyethylene)',
        'Supplied Materials: LLDPE (Linear Low-Density Polyethylene)',
        'Polyethylene Packaging Conversion Capability'
      ],
      ta: [
        'பயன்படும் மூலப்பொருட்கள்: HM / HDPE (ஹை மாலிகுலர்)',
        'பயன்படும் மூலப்பொருட்கள்: LDPE (குறைந்த அடர்த்தி)',
        'பயன்படும் மூலப்பொருட்கள்: LLDPE',
        'பாலிஎத்திலீன் பேக்கேஜிங் மாற்றும் திறன்'
      ]
    },
    verificationNotice: {
      en: 'Presented as Polyethylene packaging conversion capability, subject to confirmation of exact machine configuration.',
      ta: 'பாலிஎத்திலீன் பேக்கேஜிங் மாற்றும் திறன், துல்லியமான இயந்திர கட்டமைப்பு உறுதிப்படுத்தலுக்கு உட்பட்டது.'
    },
    status: 'Operational',
    statusTa: 'இயக்கத்தில் உள்ளது'
  },
  {
    id: 'bottom-sealing-cutting',
    name: {
      en: 'Automatic Bottom-Sealing & Cutting Machines',
      ta: 'தானியங்கி கீழ்-சீலிங் மற்றும் கட்டிங் இயந்திரங்கள்'
    },
    shortName: 'Bottom-Sealing (2 Units)',
    category: 'sealing',
    modelYear: 'Dual Automated Units',
    image: '/images/bag_sealing_machine.jpg',
    suppliedSpecs: {
      en: [
        'Supplied Machine Quantity: 2 Installed Machines',
        'Automatic Continuous Bottom Sealing',
        'High-Precision Flying Knife / Rotary Cutting',
        'Leak-Proof Sealing for Heavy & Granular Packaging'
      ],
      ta: [
        'நிறுவனத்தில் உள்ள இயந்திரங்களின் எண்ணிக்கை: 2 இயந்திரங்கள்',
        'தானியங்கி தொடர்ச்சியான கீழ் சீலிங்',
        'உயர் துல்லிய வெட்டு முறை',
        'எடை தாங்கும் கசிவற்ற சீலிங் தரம்'
      ]
    },
    verificationNotice: {
      en: 'Confirmed quantity of 2 machines active in continuous production.',
      ta: 'தொடர் உற்பத்தியில் 2 இயந்திரங்கள் பயன்பாட்டில் உள்ளன என்பது உறுதிப்படுத்தப்பட்டது.'
    },
    status: '2 Units Active',
    statusTa: '2 இயந்திரங்கள் பயன்பாட்டில்'
  },
  {
    id: 'side-sealing-cutting',
    name: {
      en: 'Automatic Side-Sealing & Cutting Machine',
      ta: 'தானியங்கி பக்கவாட்டு-சீலிங் மற்றும் கட்டிங் இயந்திரம்'
    },
    shortName: 'Side-Sealing Line',
    category: 'sealing',
    modelYear: 'Automated Unit',
    image: '/images/side_sealing_machine.jpg',
    suppliedSpecs: {
      en: [
        'Automatic Side Sealing & Precision Cutting',
        'Clean Edge Finishing for Pouches & Covers',
        'Accurate Length Indexing & Micro-perforation',
        'Installed Machine Count: Confirmation Pending'
      ],
      ta: [
        'தானியங்கி பக்கவாட்டு சீலிங் & கட்டிங்',
        'பவுச்சுகள் மற்றும் கவர்களுக்கான நேர்த்தியான விளிம்பு',
        'துல்லியமான நீள அளவீட்டு அமைப்பு',
        'நிறுவப்பட்ட எண்ணிக்கை: உறுதிப்படுத்தல் நிலுவையில்'
      ]
    },
    verificationNotice: {
      en: 'Placeholder set for confirmed machine count until factory equipment register is provided.',
      ta: 'இயந்திரங்களின் எண்ணிக்கை குறித்த இறுதி தகவல் வரும் வரை மாதிரி இட ஒதுக்கீடு செய்யப்பட்டுள்ளது.'
    },
    status: 'Count Pending Confirmation',
    statusTa: 'எண்ணிக்கை உறுதிப்படுத்தல் நிலுவையில்'
  }
];

export const FLEXO_CAPABILITIES = {
  title: {
    en: 'Flexographic Printing Technology & Process',
    ta: 'ஃப்ளெக்ஸோகிராஃபிக் பிரிண்டிங் தொழில்நுட்பம் & செயல்முறை'
  },
  description: {
    en: 'Surya Poly Pack utilizes modern flexographic printing technology featuring precision ceramic anilox rollers, automated tension control, and electronic ink metering to deliver vibrant, consistent prints across flexible packaging substrates.',
    ta: 'சூர்யா பாலி பேக் நிறுவனம் துல்லியமான செராமிக் அனிலாக்ஸ் ரோலர்கள், தானியங்கி டென்ஷன் கட்டுப்பாடு மற்றும் எலக்ட்ரானிக் மை மேலாண்மை கொண்ட நவீன ஃப்ளெக்ஸோ தொழில்நுட்பத்தைப் பயன்படுத்தி அனைத்து வகை பேக்கேஜிங் ஃபிலிம்களிலும் துல்லியமாக அச்சிடுகிறது.'
  },
  steps: [
    {
      step: '01',
      titleEn: 'Substrate & Tension Control',
      titleTa: 'ஃபிலிம் & டென்ஷன் சீரமைப்பு',
      descEn: 'Raw polyethylene and polypropylene films undergo precision tension regulation and electronic web alignment to prevent stretching and distortion.',
      descTa: 'பாலிமர் ஃபிலிம்கள் நீளாமல் மற்றும் சிதையாமல் இருக்க துல்லியமான டென்ஷன் மற்றும் வெப் சீரமைப்பு செய்யப்படுகிறது.'
    },
    {
      step: '02',
      titleEn: 'Ceramic Anilox Ink Metering',
      titleTa: 'செராமிக் அனிலாக்ஸ் மை பகிர்வு',
      descEn: 'Bison ceramic anilox rollers transfer microscopic, uniform ink volumes to flexible photopolymer plates for clean raster reproduction.',
      descTa: 'பைசன் செராமிக் அனிலாக்ஸ் ரோலர்கள் சீரான மை அளவை அச்சிடும் தகடுகளுக்கு வழங்கி தெளிவான படங்களை உருவாக்குகின்றன.'
    },
    {
      step: '03',
      titleEn: 'Multi-Colour Synchronous Print',
      titleTa: 'பல வண்ண ஒருங்கிணைந்த அச்சிடுதல்',
      descEn: 'Our Marshal 6-colour system executes synchronized multi-colour register for intricate logos, branding, nutrition info, and barcodes.',
      descTa: 'மார்ஷல் 6-வண்ண அமைப்பு லோகோக்கள், பிராண்டிங் மற்றும் பார்கோடுகளை துல்லியமான வண்ண ஒருங்கிணைப்புடன் அச்சிடுகிறது.'
    },
    {
      step: '04',
      titleEn: 'Conversion & Sealing Finishing',
      titleTa: 'கன்வெர்ஷன் மற்றும் சீலிங் முடிவு',
      descEn: 'Printed film feeds into high-speed automatic bottom and side sealing machines to produce finished packaging covers and pouches.',
      descTa: 'அச்சிடப்பட்ட ரோல்கள் அதிவேக சீலிங் மற்றும் கட்டிங் இயந்திரங்கள் மூலம் முடிக்கப்பட்ட பவுச்சுகளாகவும் கவர்களாகவும் மாற்றப்படுகின்றன.'
    }
  ]
};
