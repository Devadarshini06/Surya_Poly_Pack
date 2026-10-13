/**
 * Surya Poly Pack - Gallery Data
 * Categorized visual gallery showcasing products, printing machinery, process, and finished packaging.
 */

export const GALLERY_CATEGORIES = [
  { id: 'all', nameEn: 'All Highlights', nameTa: 'அனைத்தும்' },
  { id: 'products', nameEn: 'Products', nameTa: 'தயாரிப்புகள்' },
  { id: 'machinery', nameEn: 'Printing Machinery', nameTa: 'பிரிண்டிங் இயந்திரங்கள்' },
  { id: 'process', nameEn: 'Manufacturing Process', nameTa: 'உற்பத்தி செயல்முறை' },
  { id: 'packaging', nameEn: 'Finished Packaging', nameTa: 'முடிக்கப்பட்ட பேக்கேஜிங்' }
];

export const GALLERY_ITEMS = [
  {
    id: 'gal-1',
    category: 'machinery',
    titleEn: 'Flexographic Printing Unit',
    titleTa: 'ஃப்ளெக்ஸோகிராஃபிக் பிரிண்டிங் பிரிவு',
    descEn: 'Industrial printing setup demonstrating web alignment and precision anilox inking.',
    descTa: 'துல்லியமான அனிலாக்ஸ் மை அமைப்பைக் கொண்ட தொழிற்துறை பிரிண்டிங் கட்டமைப்பு.',
    image: '/images/flexo_machine.jpg',
    tag: 'Machinery'
  },
  {
    id: 'gal-2',
    category: 'products',
    titleEn: 'Stand-Up Packaging Pouches',
    titleTa: 'ஸ்டாண்ட்-அப் பேக்கேஜிங் பவுச்சுகள்',
    descEn: 'Custom printed barrier pouches with bottom gusset for food and retail products.',
    descTa: 'உணவு மற்றும் சில்லறை பொருட்களுக்கான வண்ணமயமான அச்சிடப்பட்ட பவுச்சுகள்.',
    image: '/images/standup_pouches.jpg',
    tag: 'Products'
  },
  {
    id: 'gal-3',
    category: 'machinery',
    titleEn: 'Automatic Sealing & Cutting Machinery',
    titleTa: 'தானியங்கி சீலிங் & கட்டிங் இயந்திரம்',
    descEn: 'High-speed bottom and side sealing equipment in active packaging conversion.',
    descTa: 'அதிவேக கீழ் மற்றும் பக்கவாட்டு சீலிங் மூலம் பைகள் தயாரிக்கும் பிரிவு.',
    image: '/images/bag_sealing_machine.jpg',
    tag: 'Machinery'
  },
  {
    id: 'gal-4',
    category: 'products',
    titleEn: 'Food Packaging Pouch Solutions',
    titleTa: 'உணவு பேக்கேஜிங் பவுச் தீர்வுகள்',
    descEn: 'Aroma-locking and moisture-resistant covers for snacks, masalas, and grocery items.',
    descTa: 'ஸ்நாக்ஸ், மசாலா மற்றும் உணவுப் பொருட்களுக்கான ஈரப்பதம் புகா கவர்கள்.',
    image: '/images/food_packaging_pouches.jpg',
    tag: 'Products'
  },
  {
    id: 'gal-5',
    category: 'process',
    titleEn: 'Manufacturing & Conversion Plant Floor',
    titleTa: 'உற்பத்தி மற்றும் கன்வெர்ஷன் வளாகம்',
    descEn: 'Organized production floor handling film feeding, slitting, and packaging conversion.',
    descTa: 'ஃபிலிம் சுழற்சி மற்றும் பாலி கன்வெர்ஷன் பணிகளை மேற்கொள்ளும் உற்பத்தி தளம்.',
    image: '/images/factory.jpg',
    tag: 'Process'
  },
  {
    id: 'gal-6',
    category: 'packaging',
    titleEn: 'Industrial Heavy-Duty Poly Film Rolls',
    titleTa: 'தொழில்துறை ஹெவி-டியூட்டி பாலி ரோல்கள்',
    descEn: 'Heavy-gauge polyethylene rolls stacked for automotive, logistics, and surface protection.',
    descTa: 'வாகனம் மற்றும் தொழில்துறை பயன்பாட்டிற்கான தடிமனான பாலிஎத்திலீன் ரோல்கள்.',
    image: '/images/industrial_packaging.jpg',
    tag: 'Packaging'
  },
  {
    id: 'gal-7',
    category: 'packaging',
    titleEn: 'Polypropylene & HM Retail Packaging Covers',
    titleTa: 'பாலிப்ரோப்பிலீன் & HM சில்லறை பேக்கேஜிங்',
    descEn: 'High-clarity PP bags and grocery covers ready for commercial distribution.',
    descTa: 'வணிக பயன்பாட்டிற்காக தயாரிக்கப்பட்ட தெளிவான PP பைகள் மற்றும் கவர்கள்.',
    image: '/images/pp_bags.jpg',
    tag: 'Packaging'
  },
  {
    id: 'gal-8',
    category: 'process',
    titleEn: 'Flexible Packaging Conversion in Action',
    titleTa: 'நெகிழ்வான பேக்கேஜிங் கன்வெர்ஷன் செயல்பாடு',
    descEn: 'Film unwinding, electronic tension moderation, and multi-colour reproduction.',
    descTa: 'சீரான டென்ஷன் கட்டுப்பாடு மற்றும் பல வண்ண அச்சிடும் நேரடி செயல்பாடு.',
    image: '/images/hero.jpg',
    tag: 'Process'
  }
];
