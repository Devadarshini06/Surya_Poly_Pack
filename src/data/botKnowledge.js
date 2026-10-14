/**
 * Surya Poly Pack - Comprehensive AI Assistant Knowledge Base & Responses
 * Bilingual Support: English and Tamil (+ Tanglish query understanding)
 */

import { COMPANY_INFO } from './company.js';

export const BOT_INITIAL_PROMPT = {
  title: "Surya Poly Pack AI Assistant",
  titleTa: "சூர்யா பாலி பேக் AI உதவியாளர்",
  subtitle: "Packaging & Printing Enquiry Bot",
  subtitleTa: "பேக்கேஜிங் & அச்சிடுதல் வழிகாட்டி",
  languagePromptEn: "Welcome to Surya Poly Pack! Please select your preferred language to begin:",
  languagePromptTa: "சூர்யா பாலி பேக் நிறுவனத்திற்கு நல்வரவு! உரையாடலைத் தொடங்க உங்கள் விருப்பமான மொழியைத் தேர்ந்தெடுக்கவும்:",
};

export const BOT_WELCOME_MESSAGES = {
  en: "Hello! I am your Surya Poly Pack Assistant. You can ask me anything about our packaging products, materials (HM/HDPE/LDPE/PP), flexo printing capabilities, pricing, MOQ, ordering process, factory location in Sivakasi, or connect directly with our sales team.",
  ta: "வணக்கம்! நான் உங்கள் சூர்யா பாலி பேக் AI உதவியாளர். எங்கள் பேக்கேஜிங் தயாரிப்புகள், மூலப்பொருட்கள் (HM/HDPE/LDPE/PP), பிளெக்ஸோ பிரிண்டிங், விலைக் குறிப்பு, குறைந்தபட்ச ஆர்டர் அளவு (MOQ), ஆர்டர் செய்யும் முறை மற்றும் சிவகாசி ஆலை முகவரி குறித்து என்னிடம் கேட்கலாம்."
};

export const FAQ_TOPICS = [
  // 1. Greetings & Small Talk
  {
    id: 'greetings',
    chipEn: '👋 Hello / Greetings',
    chipTa: '👋 வணக்கம்',
    keywords: [
      'hi', 'hello', 'hey', 'good morning', 'good afternoon', 'good evening', 'vanakkam', 'namaste',
      'வணக்கம்', 'காலை வணக்கம்', 'மாலை வணக்கம்', 'hai', 'helo', 'how are you', 'epdi irukinga', 'who are you', 'yaar neenga'
    ],
    responseEn: `Hello and welcome to Surya Poly Pack! 👋\n\nWe are a premier flexible packaging manufacturer based in Sivakasi, Tamil Nadu. We specialize in custom-printed poly covers, food pouches, carry bags, and precision flexographic printing.\n\nHow can I help you today? You can ask about:\n• **Products**: Food pouches, grocery bags, calendar covers, industrial packaging\n• **Flexo Printing**: 1 to 6 colour custom brand printing\n• **Pricing & MOQ**: Bulk rates and minimum order quantities\n• **Factory & Contact**: Sivakasi plant details and direct WhatsApp support`,
    responseTa: `வணக்கம்! சூர்யா பாலி பேக் நிறுவனத்திற்கு தங்களை அன்புடன் வரவேற்கிறோம்! 👋\n\nநாங்கள் சிவகாசியில் அமைந்துள்ள முன்னணி நெகிழ்வான பேக்கேஜிங் மற்றும் பிளெக்ஸோகிராஃபிக் பிரிண்டிங் உற்பத்தியாளர் ஆவோம்.\n\nஇன்று உங்களுக்கு எவ்வாறு உதவலாம்? நீங்கள் கேட்கலாம்:\n• **தயாரிப்புகள்**: உணவு பவுச்சுகள், மளிகை பைகள், காலண்டர் கவர்கள், தொழில்துறை பேக்கேஜிங்\n• **பிரிண்டிங்**: 1 முதல் 6 வண்ண தனிப்பயன் லோகோ அச்சிடுதல்\n• **விலை & MOQ**: மொத்த விலை மற்றும் குறைந்தபட்ச ஆர்டர் அளவு\n• **முகவரி & தொடர்பு**: சிவகாசி ஆலை மற்றும் நேரடி வாட்ஸ்அப் உதவி`
  },

  // 2. Products Overview
  {
    id: 'products',
    chipEn: '📦 All Packaging Products',
    chipTa: '📦 அனைத்து தயாரிப்புகள்',
    keywords: [
      'product', 'products', 'category', 'categories', 'bag', 'bags', 'pouch', 'pouches', 'cover', 'covers', 
      'produce', 'manufacture', 'catalogue', 'catalog', 'what do you make', 'what do you sell',
      'தயாரிப்பு', 'பைகள்', 'பவுச்', 'கவர்கள்', 'உற்பத்தி', 'பொருட்கள்', 'enna product', 'products enna'
    ],
    responseEn: `Surya Poly Pack manufactures a comprehensive range of flexible packaging products:\n\n1. **Food Packaging**: High-barrier, moisture-proof covers for snacks, chips, dates, nuts, pickles, spices, and groceries.\n2. **Retail & Grocery Bags**: High-tensile HM/HDPE bags, supermarket carry bags, and D-cut covers.\n3. **Special Pouches**: Stand-up pouches, zip-lock pouches, and laminated multi-colour retail packs.\n4. **Calendar Covers**: High-clarity PP/HM protective covers for Sivakasi daily and monthly calendars.\n5. **Agricultural Packaging**: UV-stabilized tree sapling bags and nursery plant covers.\n6. **Industrial Packaging**: Heavy-duty surface protection films, matches covers, fireworks packaging, and automobile spare parts covers.\n\nAll packaging is manufactured to your exact size specifications with custom branding!`,
    responseTa: `சூர்யா பாலி பேக் நிறுவனம் பலதரப்பட்ட நெகிழ்வான பேக்கேஜிங் தயாரிப்புகளை உற்பத்தி செய்கிறது:\n\n1. **உணவு பேக்கேஜிங்**: மசாலா, ஸ்நாக்ஸ், சிப்ஸ், பேரீச்சம்பழம், ஊறுகாய் மற்றும் மளிகைப் பொருட்களுக்கான புத்துணர்ச்சி & மணம் பாதுகாக்கும் கவர்கள்.\n2. **மளிகை & கேரி பைகள்**: அதிக சுமை தாங்கும் HM/HDPE சில்லறை வணிக பைகள் மற்றும் சூப்பர் மார்க்கெட் கேரி பேக்குகள்.\n3. **சிறப்பு பவுச்சுகள்**: ஸ்டாண்ட்-அப் பவுச்சுகள், ஜிப்-லாக் பைகள் மற்றும் பல வண்ண பளபளப்பான கவர்கள்.\n4. **காலண்டர் கவர்கள்**: சிவகாசி தினசரி & மாத காலண்டர்களுக்கான தெளிவான பாதுகாப்பு கவர்கள்.\n5. **விவசாய பேக்கேஜிங்**: நாற்று வளர்ப்புக்கான UV-பாதுகாக்கப்பட்ட நர்சரி பைகள்.\n6. **தொழில்துறை பேக்கேஜிங்**: தீப்பெட்டி, பட்டாசு, ஆட்டோமொபைல் உதிரிபாகங்கள் மற்றும் தரை பாதுகாப்பு விரிப்புகள்.\n\nஅனைத்து தயாரிப்புகளும் உங்கள் நிறுவன பிராண்டிங்குடன் விருப்ப அளவுகளில் தயாரிக்கப்படுகின்றன!`
  },

  // 3. Food Packaging Specific
  {
    id: 'food_packaging',
    chipEn: '🍿 Food & Snacks Packaging',
    chipTa: '🍿 உணவு & ஸ்நாக்ஸ் கவர்கள்',
    keywords: [
      'food', 'snack', 'snacks', 'chips', 'mixture', 'dates', 'nut', 'nuts', 'cashew', 'pickle', 
      'spices', 'masala', 'grocery', 'flour', 'dal', 'pulses', 'rice', 'bakery', 'sweets', 'tea',
      'உணவு', 'ஸ்நாக்ஸ்', 'சிப்ஸ்', 'மசாலா', 'பேரீச்சம்பழம்', 'ஊறுகாய்', 'உணவு பேக்கிங்'
    ],
    responseEn: `Our Food Packaging range is engineered for hygiene, food safety, and long shelf life:\n\n• **Snacks & Chips Covers**: High-clarity Polypropylene (PP) films preserving crispness, aroma, and moisture barrier.\n• **Dates & Dry Fruits Covers**: Heavy-duty puncture-resistant HM/LDPE with strong airtight heat sealing.\n• **Nuts & Cashew Covers**: Multi-layer films offering oxygen-barrier protection.\n• **Pickles & Oily Products**: Oil-resistant, leak-proof barrier pouches with durable seal integrity.\n• **Masala & Spice Powders**: Aroma-locking poly films ensuring no flavor loss.\n• **Grocery Packets**: Durable packaging for pulses, flour, and grains.\n\nAvailable with 1 to 6 colour high-definition flexo printing with nutrition facts, barcodes, and branding!`,
    responseTa: `எங்களின் உணவு பேக்கேஜிங் தயாரிப்புகள் சுகாதாரம், உணவுப் பாதுகாப்பு மற்றும் நீண்ட நாள் புத்துணர்ச்சியை உறுதி செய்கின்றன:\n\n• **ஸ்நாக்ஸ் & சிப்ஸ் கவர்கள்**: மொறுமொறுப்பு மற்றும் நறுமணத்தைப் பாதுகாக்கும் உயர் தெளிவுத்திறன் கொண்ட PP ஃபிலிம்கள்.\n• **பேரீச்சம்பழம் & உலர் பழங்கள் கவர்கள்**: கிழிசல் எதிர்ப்பு மற்றும் உறுதியான காற்றுப்புகா வெப்ப சீலிங்.\n• **நட்ஸ் & முந்திரி கவர்கள்**: ஆக்ஸிஜன் மற்றும் ஈரப்பதத்தைத் தடுக்கும் பல அடுக்கு ஃபிலிம்கள்.\n• **ஊறுகாய் & எண்ணெய் பொருட்கள்**: எண்ணெய் கசிவைத் தடுக்கும் உறுதியான சீலிங் கொண்ட பவுச்சுகள்.\n• **மசாலா பொடி கவர்கள்**: நறுமணம் மற்றும் சுவை குறையாமல் பாதுகாக்கும் பாலி கவர்கள்.\n• **மளிகைப் பொட்டலங்கள்**: பருப்பு வகைகள், மாவு மற்றும் தானியங்களுக்கான நீடித்த பைகள்.\n\n1 முதல் 6 வண்ணங்களில் ஊட்டச்சத்து விவரங்கள், பார்கோடுகள் மற்றும் லோகோவுடன் அச்சிடலாம்!`
  },

  // 4. Calendar Covers (Sivakasi Specialty)
  {
    id: 'calendar_covers',
    chipEn: '📅 Calendar Packaging Covers',
    chipTa: '📅 காலண்டர் கவர்கள்',
    keywords: [
      'calendar', 'calendars', 'daily calendar', 'monthly calendar', 'sivakasi calendar',
      'காலண்டர்', 'கேலண்டர்', 'காலண்டர் கவர்', 'calendar covers', 'calendar bag'
    ],
    responseEn: `Surya Poly Pack is located in Sivakasi—the printing capital of India—and we are a specialized manufacturer of Calendar Packaging Covers:\n\n• **High-Clarity PP Covers**: Ultra-transparent, glossy display covers for premium daily slip calendars and monthly hanging calendars.\n• **Heavy-Duty HM/LDPE Covers**: Tear-resistant protective sleeves for bulk calendar packing and transport dispatch.\n• **Custom Dimensions**: Tailored to standard Sivakasi calendar sizes (e.g., 9x12, 10x15, 11x18, 15x20 inches, or custom sizes).\n• **Bulk Dispatch**: We cater to large print shops, publishing houses, and trade agents across India with fast turnaround during peak calendar season.`,
    responseTa: `இந்தியாவின் அச்சு நகரமான சிவகாசியில் அமைந்துள்ள சூர்யா பாலி பேக், உயர்தர காலண்டர் பாதுகாப்பு கவர்களை பிரத்யேகமாக உற்பத்தி செய்கிறது:\n\n• **உயர் தெளிவு PP கவர்கள்**: தினசரி காலண்டர்கள் மற்றும் மாத காலண்டர்களுக்கான பளபளப்பான, படிகம் போன்ற தெளிவான கவர்கள்.\n• **உறுதியான HM/LDPE கவர்கள்**: மொத்தமாக காலண்டர்களை பேக் செய்து அனுப்ப உதவும் கிழிசல் எதிர்ப்பு கவர்கள்.\n• **விருப்ப அளவுகள்**: அனைத்து நிலையான சிவகாசி காலண்டர் அளவுகளிலும் (9x12, 10x15, 11x18, 15x20 அங்குலங்கள் மற்றும் தனிப்பயன் அளவுகள்) கிடைக்கும்.\n• **மொத்த விநியோகம்**: காலண்டர் சீசனில் தமிழ்நாடு மற்றும் இந்தியா முழுவதிலும் உள்ள பிரஸ் மற்றும் வெளியீட்டாளர்களுக்கு உடனடி விநியோகம் செய்கிறோம்.`
  },

  // 5. Stand-up Pouches & Ziplock
  {
    id: 'pouches',
    chipEn: '🛍️ Stand-up & Zip-lock Pouches',
    chipTa: '🛍️ ஸ்டாண்ட்-அப் & ஜிப்-லாக் பவுச்சுகள்',
    keywords: [
      'standup', 'stand-up', 'pouch', 'pouches', 'ziplock', 'zip lock', 'zipper', 'gusset', 'bottom gusset',
      'பவுச்', 'ஜிப் லாக்', 'ஸ்டாண்ட் அப் பவுச்', 'ziplock pouch', 'stand up pouch'
    ],
    responseEn: `We produce modern consumer retail Stand-Up & Zip-Lock Pouches:\n\n• **Bottom Gusset Stand-up Pouches**: Self-standing design for excellent shelf display presence in supermarkets and retail stores.\n• **Reclosable Zip-Lock Pouches**: Consumer-friendly resealable zip closure for snacks, dry fruits, spices, tea, and confectionery.\n• **Window Pouch Option**: Transparent window to showcase product contents while preserving barrier integrity.\n• **Custom Print**: Synchronized front and back multi-colour branding with tear notches and hang holes.`,
    responseTa: `நவீன சில்லறை வணிகத்திற்கான ஸ்டாண்ட்-அப் மற்றும் ஜிப்-லாக் பவுச்சுகளை நாங்கள் உற்பத்தி செய்கிறோம்:\n\n• **பாட்டம் கஸட் ஸ்டாண்ட்-அப் பவுச்சுகள்**: சூப்பர் மார்க்கெட் அலமாரிகளில் கம்பீரமாக நிற்கும் நவீன வடிவம்.\n• **மறுமுறை மூடக்கூடிய ஜிப்-லாக்**: நுகர்வோர் எளிதாக திறந்து மூடக்கூடிய ஜிப் வசதியுடன் சிப்ஸ், உலர் பழங்கள், டீ தூள் போன்றவற்றிற்கு ஏற்றது.\n• **விண்டோ பவுச் வசதி**: உள்ளிருக்கும் தயாரிப்பை நுகர்வோர் பார்க்கும் வகையிலான வெளிப்படையான விண்டோ வசதி.\n• **தனிப்பயன் அச்சிடுதல்**: இருபுறமும் லோகோ மற்றும் தயாரிப்பு விவரங்களுடன் கவர்ச்சிகரமான அச்சிடுதல்.`
  },

  // 6. Carry Bags & Grocery Bags
  {
    id: 'carry_bags',
    chipEn: '🛍️ Grocery & Carry Bags',
    chipTa: '🛍️ மளிகை & கேரி பைகள்',
    keywords: [
      'carry bag', 'carry bags', 'grocery bag', 'grocery bags', 'd-cut', 'd cut', 'loop handle', 'w cut',
      'shopping bag', 'shopping bags', 'supermarket', 'retail bag', 'மளிகை பை', 'கேரி பை', 'பை', 'பைகள்', 'd-cut bag'
    ],
    responseEn: `Surya Poly Pack supplies high-tensile, heavy-duty retail and grocery carry bags:\n\n• **HM / HDPE Carry Bags**: High strength-to-weight ratio, capable of holding heavy retail weights without stretching or tearing.\n• **D-Cut Punch Handle Bags**: Clean, ergonomic handle cutouts widely preferred by apparel stores, supermarkets, and pharmacies.\n• **Supermarket & Provision Bags**: Available in unprinted standard sizes or customized with your shop name, logo, phone number, and branch addresses.\n• **Available Thickness**: Manufactured in compliance with government-specified gauge norms (120+ microns).`,
    responseTa: `சூர்யா பாலி பேக் அதிக எடை தாங்கும் மளிகை மற்றும் சில்லறை வணிக கேரி பைகளை வழங்குகிறது:\n\n• **HM / HDPE கேரி பைகள்**: குறைந்த எடையில் அதிக சுமை தாங்கும் திறன் கொண்ட உறுதியான பைகள்.\n• **D-கட் பைகள்**: ஆடைக் கடைகள், சூப்பர் மார்க்கெட்டுகள் மற்றும் மருந்து கடைகளுக்கு ஏற்ற வசதியான கைப்பிடி பைகள்.\n• **சூப்பர் மார்க்கெட் பைகள்**: உங்கள் கடையின் பெயர், லோகோ, தொலைபேசி எண் மற்றும் முகவரியுடன் தனிப்பயன் அச்சிடப்பட்ட பைகள்.\n• **தடிமன் விவரம்**: அரசு நிர்ணயித்த மைக்ரான் விதிமுறைகளுக்கு (120+ மைக்ரான்) ஏற்ப தயாரிக்கப்படுகின்றன.`
  },

  // 7. Industrial, Matches, Fireworks & Agricultural Packaging
  {
    id: 'industrial',
    chipEn: '🏭 Industrial, Matches & Fireworks',
    chipTa: '🏭 தொழில்துறை & பட்டாசு பேக்கிங்',
    keywords: [
      'industrial', 'matches', 'matchbox', 'fireworks', 'crackers', 'bijali', 'automobile', 'spare parts',
      'floor cover', 'surface protection', 'nursery', 'sapling', 'tree covers', 'plant covers',
      'தீப்பெட்டி', 'பட்டாசு', 'நர்சரி', 'விவசாயம்', 'தொழில்துறை', 'தரை விரிப்பு'
    ],
    responseEn: `We provide specialized industrial and agricultural flexible packaging solutions:\n\n• **Matches & Matchbox Wraps**: Moisture-shielded poly covers for matchbox bundling and transport packaging.\n• **Fireworks & Bijali Covers**: Heavy-duty, spark-safe, water-resistant packaging films for fireworks and crackers.\n• **Automobile Spare Parts Packaging**: Heavy-gauge, oil- and grease-resistant bags protecting metal components from rust and corrosion.\n• **Floor & Surface Protection Films**: Wide-width protective sheets shielding tiles and granite during building painting and renovation.\n• **Nursery & Plant Covers**: UV-stabilized, punch-hole sapling bags for commercial agriculture and plant nurseries.`,
    responseTa: `நாங்கள் தொழில்துறை மற்றும் விவசாயத்திற்கான சிறப்பு பேக்கேஜிங் தீர்வுகளை வழங்குகிறோம்:\n\n• **தீப்பெட்டி கவர்கள்**: தீப்பெட்டிகளை ஈரப்பதம் தாக்காமல் மொத்தமாக பேக் செய்ய உதவும் பாலி கவர்கள்.\n• **பட்டாசு & பிஜிலி கவர்கள்**: நீர் மற்றும் ஈரப்பதம் புகாத, பட்டாசுகளை பாதுகாப்பாக வைக்க உதவும் உறுதியான கவர்கள்.\n• **ஆட்டோமொபைல் உதிரிபாகங்கள்**: துரு மற்றும் தூசியில் இருந்து உலோக பாகங்களை பாதுகாக்கும் எண்ணெய் எதிர்ப்பு பைகள்.\n• **தரை பாதுகாப்பு ஃபிலிம்கள்**: பெயிண்டிங் மற்றும் கட்டுமான பணிகளின் போது டைல்ஸ் மற்றும் கிரானைட்டை பாதுகாக்கும் அகலமான பாலி விரிப்புகள்.\n• **நர்சரி & செடி கவர்கள்**: நாற்று வளர்ப்பிற்கான UV-பாதுகாக்கப்பட்ட மற்றும் துளையிடப்பட்ட விவசாய பைகள்.`
  },

  // 8. Printing & Branding Capabilities
  {
    id: 'printing',
    chipEn: '🎨 Flexo Printing & Machine Setup',
    chipTa: '🎨 பிளெக்ஸோ பிரிண்டிங் தொழில்நுட்பம்',
    keywords: [
      'print', 'printing', 'flexo', 'flexographic', 'bison', 'anilox', 'marshal', 'colour', 'color', 
      'six', 'cylinder', 'stereo', 'logo', 'design', 'brand', 'artwork', 'resolution',
      'அச்சு', 'பிரிண்டிங்', 'வண்ணம்', 'பிளெக்ஸோ', 'லோகோ', 'வடிவமைப்பு', 'printing machine'
    ],
    responseEn: `Surya Poly Pack is powered by cutting-edge flexographic printing machinery:\n\n• **Bison Ceramic Anilox (2025 Model)**: High-speed flexo press with micro-cell ceramic anilox rollers delivering razor-sharp text, consistent ink laydown, and rich gradients.\n• **Marshal Six-Colour Platform**: Synchronized multi-colour registration capable of printing 1 to 6 vibrant colours with photorealistic imagery, barcodes, and regulatory badges.\n• **Custom Cylinders & Stereos**: High-precision photopolymer printing stereos manufactured specifically for your design, reusable for all future repeat orders.\n• **Automatic Conversion**: In-line precision slitting, gusseting, bottom-sealing, and punch units.`,
    responseTa: `சூர்யா பாலி பேக் அதிநவீன பிளெக்ஸோகிராஃபிக் பிரிண்டிங் இயந்திரங்களைக் கொண்டுள்ளது:\n\n• **பைசன் செராமிக் அனிலாக்ஸ் (2025 மாடல்)**: செராமிக் அனிலாக்ஸ் உருளைகள் மூலம் மிகத் துல்லியமான எழுத்துக்கள், சீரான மை பூச்சு மற்றும் அழகான வண்ணங்களை வழங்கும் நவீன இயந்திரம்.\n• **மார்ஷல் 6-வண்ண பிரிண்டிங் பிளாட்ஃபார்ம்**: 1 முதல் 6 வண்ணங்கள் வரை உங்கள் லோகோ, தயாரிப்பு படங்கள், பார்கோடுகளை துல்லியமாக அச்சிடும் அதிவேக இயந்திரம்.\n• **ஸ்டீரியோ மற்றும் சிலிண்டர்கள்**: உங்கள் பிராண்ட் வடிவமைப்புக்கு ஏற்ப பிரத்யேகமாக உருவாக்கப்பட்டு, எதிர்கால தொடர் ஆர்டர்களுக்கும் மீண்டும் பயன்படுத்தப்படும்.\n• **தானியங்கி கன்வெர்ஷன்**: ஸ்லிட்டிங், மடிப்பு, கீழ்-சீலிங் மற்றும் பஞ்ச் இயந்திரங்கள்.`
  },

  // 9. Materials & Micron Thickness
  {
    id: 'materials',
    chipEn: '🧪 Materials & Micron Thickness',
    chipTa: '🧪 மூலப்பொருட்கள் & மைக்ரான் தடிமன்',
    keywords: [
      'material', 'materials', 'polymer', 'polymers', 'film', 'hdpe', 'hm', 'ldpe', 'lldpe', 'pp', 
      'polypropylene', 'micron', 'gauge', 'thickness', 'virgin', 'virgin plastic', 'plastic',
      'மூலப்பொருள்', 'பாலிமர்', 'மைக்ரான்', 'தடிமன்', 'மெட்டீரியல்', 'microns'
    ],
    responseEn: `We process 100% virgin-grade, high-quality polymers tailored to your product needs:\n\n• **HM / HDPE (High Molecular / High Density)**: Ultra-high tensile strength, matte/crisp texture, best for carry bags, grocery packaging, and heavy retail loads.\n• **LDPE (Low Density Polyethylene)**: Soft, glossy, highly flexible, excellent heat sealability, ideal for milk/liquid packaging and frozen products.\n• **LLDPE (Linear Low Density)**: High elongation, exceptional puncture resistance, ideal for stretch wrap and heavy-gauge liners.\n• **PP (Polypropylene)**: Crystal-clear, high-gloss film for attractive retail shelf display (snacks, garments, stationery, calendars).\n\n**Micron Range**: From **20 microns up to 150+ microns** (all compliant with state and national environmental regulations).`,
    responseTa: `நாங்கள் 100% உயர்தர விர்ஜின் பாலிமர் மூலப்பொருட்களை செயலாக்குகிறோம்:\n\n• **HM / HDPE**: அதிக வலிமை, நீடித்த உழைப்பு; மளிகை பைகள், கேரி பைகள் மற்றும் அதிக எடை தாங்கும் பேக்கேஜிங்கிற்கு சிறந்தது.\n• **LDPE**: மென்மையான, பளபளப்பான மற்றும் சிறந்த வெப்ப சீலிங் தன்மை கொண்டது.\n• **LLDPE**: கிழிசல் மற்றும் துளை விழுதலைத் தடுக்கும் அதிக இழுவிசை கொண்ட ஃபிலிம்.\n• **PP (பாலிப்ரோப்பிலீன்)**: படிகம் போன்ற மிகத் தெளிவான, பளபளப்பான ஃபிலிம் (ஸ்நாக்ஸ், காலண்டர்கள், ஆடைகளுக்கு ஏற்றது).\n\n**மைக்ரான் வரம்பு**: வாடிக்கையாளர் மற்றும் அரசு விதிமுறைகளுக்கு ஏற்ப **20 மைக்ரான் முதல் 150+ மைக்ரான்** வரை தயாரிக்கப்படுகிறது.`
  },

  // 10. Pricing & Quotation
  {
    id: 'pricing',
    chipEn: '💰 Pricing & Quotation',
    chipTa: '💰 விலைக் குறிப்பு பெறுவது எப்படி?',
    keywords: [
      'price', 'pricing', 'quote', 'quotation', 'cost', 'rate', 'how much', 'estimate', 'rate per kg', 'rate per piece',
      'விலை', 'மதிப்பு', 'கொட்டேஷன்', 'எவ்வளவு', 'vilai', 'vilai enna', 'rate evalo', 'cost evlo', 'rate enna'
    ],
    responseEn: `Packaging prices are calculated based on 5 technical factors:\n\n1. **Material Grade** (HM, HDPE, LDPE, PP, or LLDPE)\n2. **Dimensions** (Width × Length × Gusset in inches or mm)\n3. **Micron Gauge** (Film thickness)\n4. **Number of Printing Colours** (Plain / 1 colour to 6 colours)\n5. **Total Order Quantity** (Bulk volumes receive advantageous per-kg rates)\n\n📌 **How to get an instant quote:**\nSimply share your product size, material, and quantity with our team! Click our WhatsApp buttons below or submit the Enquiry form on our website to receive an official quotation within **1-2 hours**.`,
    responseTa: `பேக்கேஜிங் விலை பின்வரும் 5 தொழில்நுட்ப காரணிகளைப் பொறுத்து துல்லியமாக கணக்கிடப்படுகிறது:\n\n1. **மூலப்பொருள் வகை** (HM, HDPE, LDPE, PP, LLDPE)\n2. **அளவுகள்** (அகலம் × நீளம் × மடிப்பு)\n3. **மைக்ரான் தடிமன்** (Micron Gauge)\n4. **அச்சிடப்படும் வண்ணங்களின் எண்ணிக்கை** (பிளெயின் அல்லது 1 முதல் 6 வண்ணங்கள்)\n5. **ஆர்டர் அளவு** (அதிக அளவில் ஆர்டர் செய்யும்போது கிலோவுக்கு கூடுதல் விலை தள்ளுபடி கிடைக்கும்)\n\n📌 **உடனடி விலைக் குறிப்பு பெற:**\nஉங்கள் பேக்கேஜிங் விவரங்களை கீழே உள்ள வாட்ஸ்அப் எண்களில் மெசேஜ் செய்யவும். **1-2 மணி நேரத்தில்** எங்கள் விற்பனை குழு துல்லியமான விலைக் குறிப்பை வழங்கும்!`
  },

  // 11. Minimum Order Quantity (MOQ)
  {
    id: 'moq',
    chipEn: '⚖️ Minimum Order Quantity (MOQ)',
    chipTa: '⚖️ குறைந்தபட்ச ஆர்டர் அளவு (MOQ)',
    keywords: [
      'moq', 'minimum', 'quantity', 'small order', 'min order', 'order size', 'how many kg', 'trial order',
      'குறைந்தபட்ச', 'அளவு', 'ஆர்டர்', 'moq enna', 'minimum evalo', 'kammiya kudukreengala', 'evalo kg'
    ],
    responseEn: `Our standard Minimum Order Quantities (MOQ) ensure commercial production efficiency and competitive pricing:\n\n• **Plain / Unprinted Poly Bags & Rolls**: Starts from **100 kg to 250 kg** (depending on size and gauge).\n• **Custom Flexo Printed Packaging**: Starts from **250 kg to 500 kg** per design (due to printing cylinder setup and ink formulation).\n• **Printing Stereos/Cylinders**: A one-time tooling charge is applicable on your first order. The cylinder is stored safely and reused at no extra tooling cost for all future orders.\n\nNeed assistance with trial batches? Contact our sales engineers directly on WhatsApp!`,
    responseTa: `எங்களின் குறைந்தபட்ச ஆர்டர் அளவுகள் (MOQ):\n\n• **அச்சிடப்படாத சாதாரண பாலி பைகள் & ரோல்கள்**: 100 கிலோ முதல் 250 கிலோ வரை.\n• **தனிப்பயன் அச்சிடப்பட்ட பைகள் (Custom Printed)**: ஒரு வடிவமைப்பிற்கு 250 கிலோ முதல் 500 கிலோ வரை (சிலிண்டர் செட்டப் மற்றும் மை தயாரிப்பிற்காக).\n• **பிரிண்டிங் சிலிண்டர் / ஸ்டீரியோ**: முதல் ஆர்டரில் ஒருமுறை மட்டுமே கட்டணம் வசூலிக்கப்படும். அந்த சிலிண்டர் உங்கள் எதிர்கால தொடர் ஆர்டர்களுக்கு இலவசமாக மீண்டும் பயன்படுத்தப்படும்.\n\nசிறிய அளவிலான மாதிரி தயாரிப்புகளுக்கு எங்கள் வாட்ஸ்அப் எண்ணில் தொடர்புகொள்ளவும்!`
  },

  // 12. Ordering Process (How to Order)
  {
    id: 'order_process',
    chipEn: '📝 How to Place an Order',
    chipTa: '📝 ஆர்டர் செய்யும் முறை',
    keywords: [
      'order', 'how to order', 'place order', 'process', 'procedure', 'steps', 'booking', 'buy', 'purchase',
      'ஆர்டர் செய்வது எப்படி', 'ஆர்டர்', 'eppadi order panrathu', 'order panrathu epdi', 'buying'
    ],
    responseEn: `Placing an order with Surya Poly Pack is simple and fast (4 Steps):\n\n1. **Share Requirements**: Send your bag dimensions (W×L), material preference, sample photo, or target application via WhatsApp or our Contact form.\n2. **Receive Quotation**: We calculate the exact weight per piece, total kg, cylinder charges, and provide an all-inclusive quotation.\n3. **Artwork & Proof Approval**: Share your logo/vector artwork. Our prepress team prepares the stereo layout for your final approval.\n4. **Production & Dispatch**: After advance confirmation, your batch is extruded, printed, sealed, packaged, and dispatched via reliable transport to your doorstep!`,
    responseTa: `சூர்யா பாலி பேக் நிறுவனத்தில் ஆர்டர் செய்வது மிக எளிதானது (4 படிகள்):\n\n1. **விவரங்களை பகிரவும்**: உங்கள் பேக்கேஜிங் அளவுகள், மூலப்பொருள் அல்லது மாதிரி புகைப்படத்தை வாட்ஸ்அப் அல்லது படிவம் மூலம் அனுப்பவும்.\n2. **விலைக் குறிப்பு பெறவும்**: துல்லியமான எடை, சிலிண்டர் கட்டணம் மற்றும் மொத்த விலைக் குறிப்பை நாங்கள் அனுப்புவோம்.\n3. **வடிவமைப்பு ஒப்புதல்**: உங்கள் லோகோ மற்றும் வடிவமைப்பை இறுதி செய்து உங்கள் ஒப்புதலுக்கு அனுப்புவோம்.\n4. **தயாரிப்பு & விநியோகம்**: முன்பணம் உறுதி செய்யப்பட்டவுடன், தயாரிப்பு தொடங்கி உங்கள் முகவரிக்கு லாரி பார்சல் மூலம் பாதுகாப்பாக அனுப்பப்படும்!`
  },

  // 13. Samples & Physical Proof
  {
    id: 'samples',
    chipEn: '✨ Samples & Material Proof',
    chipTa: '✨ மாதிரிகள் (Samples)',
    keywords: [
      'sample', 'samples', 'proof', 'specimen', 'free sample', 'test sample', 'check quality',
      'மாதிரி', 'சாம்பிள்', 'sample kedaikkuma', 'sample anupuveengala'
    ],
    responseEn: `We believe in 100% customer confidence before mass production:\n\n• **Physical Material Samples**: We can dispatch sample packets of our extruded films (HM, HDPE, LDPE, PP) and sealing strength for your evaluation.\n• **Print Quality Reference**: We provide printed sample covers showing the ink richness and register precision of our 6-colour Marshal and Bison anilox presses.\n• **Digital Artwork Proof**: Prior to manufacturing printing stereos, a high-resolution 2D digital layout is verified with you.\n\nTo request sample swatches for your business, contact our sales desk on WhatsApp!`,
    responseTa: `மொத்த தயாரிப்பு தொடங்குவதற்கு முன் வாடிக்கையாளர் நம்பிக்கையை உறுதி செய்கிறோம்:\n\n• **பாலிமர் மாதிரி கவர்கள்**: எங்கள் ஃபிலிம்களின் தடிமன், உறுதி மற்றும் சீலிங் பலத்தை சரிபார்க்க மாதிரிகளை கூரியர் மூலம் பெறலாம்.\n• **பிரிண்டிங் தர மாதிரிகள்**: எங்களின் 6-வண்ண இயந்திரங்களின் அச்சுத் தரத்தை நேரில் காண மாதிரிகளை வழங்குகிறோம்.\n• **டிஜிட்டல் ப்ரூஃப்**: பிரிண்டிங் தொடங்குவதற்கு முன் துல்லியமான டிஜிட்டல் வடிவமைப்பு உங்கள் ஒப்புதலுக்கு அனுப்பப்படும்.\n\nமாதிரிகளைப் பெற எங்கள் வாட்ஸ்அப் எண்ணில் உங்கள் முகவரியை பகிரவும்!`
  },

  // 14. Delivery & Shipping Locations
  {
    id: 'delivery',
    chipEn: '🚚 Delivery & Dispatch Areas',
    chipTa: '🚚 விநியோகம் & சரக்கு போக்குவரத்து',
    keywords: [
      'delivery', 'dispatch', 'ship', 'shipping', 'transport', 'lorry', 'parcel', 'chennai', 'madurai', 
      'coimbatore', 'kerala', 'karnataka', 'bangalore', 'andhra', 'pan india', 'how long', 'lead time',
      'விநியோகம்', 'டெலிவரி', 'போக்குவரத்து', 'delivery irukka', 'enga anupuvinga', 'etthanai naal'
    ],
    responseEn: `Surya Poly Pack provides fast, secure logistics across India:\n\n• **Core Coverage Areas**: Daily dispatch to Sivakasi, Madurai, Virudhunagar, Chennai, Coimbatore, Tirupur, Salem, Trichy, Tirunelveli, and all districts of Tamil Nadu.\n• **Interstate Logistics**: Regular shipments to Kerala, Karnataka (Bangalore), Andhra Pradesh, Telangana, and Pan-India commercial hubs.\n• **Moisture-Proof Bundling**: Orders are shrink-wrapped in protective master poly bundles to avoid in-transit dust and moisture.\n• **Turnaround Time**: Standard repeat orders take **5 to 7 working days**; new printed orders with stereo preparation take **7 to 10 working days**.`,
    responseTa: `சூர்யா பாலி பேக் இந்தியா முழுவதும் வேகமான மற்றும் பாதுகாப்பான சரக்கு போக்குவரத்து வசதியைக் கொண்டுள்ளது:\n\n• **முக்கிய விநியோக பகுதிகள்**: சிவகாசி, மதுரை, விருதுநகர், சென்னை, கோவை, திருப்பூர், சேலம், திருச்சி, திருநெல்வேலி உட்பட தமிழ்நாடு முழுவதும் தினசரி பார்சல் சேவை.\n• **வெளி மாநிலங்கள்**: கேரளா, கர்நாடகா (பெங்களூரு), ஆந்திரா மற்றும் தெலுங்கானா மாநிலங்களுக்கும் வழக்கமாக சரக்குகள் அனுப்பப்படுகின்றன.\n• **ஈரப்பதம் படாத பேக்கிங்**: சரக்குகள் போக்குவரத்தின் போது சேதமடையாமல் இருக்க உறுதியாக பேக் செய்யப்படுகின்றன.\n• **தயாரிப்பு நேரம்**: வழக்கமான ஆர்டர்கள் **5-7 வேலை நாட்களிலும்**, புதிய பிரிண்டிங் ஆர்டர்கள் **7-10 வேலை நாட்களிலும்** தயாராகும்.`
  },

  // 15. Factory Location & Visiting
  {
    id: 'location',
    chipEn: '📍 Factory Location (Sivakasi)',
    chipTa: '📍 ஆலை முகவரி (சிவகாசி)',
    keywords: [
      'location', 'address', 'factory', 'plant', 'where', 'city', 'sivakasi', 'visit', 'find', 'map', 'directions',
      'முகவரி', 'எங்கு', 'ஆலை', 'சிவகாசி', 'இடம்', 'enga irukinga', 'factory address', 'address enna'
    ],
    responseEn: `🏭 **Surya Poly Pack Manufacturing Plant**:\n\n**Address**: 281C, Kanthapuram Colony, Kamarajar Salai, Sivakasi - 626 124, Tamil Nadu, India.\n\n• **Landmark**: Situated on Kamarajar Salai in Sivakasi, near Kanthapuram Colony.\n• **Visiting Hours**: Monday to Saturday, 9:00 AM to 7:00 PM.\n• **Plant Consultations**: Clients, business owners, and packaging procurement teams are welcome to visit our plant to inspect machine lines and discuss custom production!`,
    responseTa: `🏭 **சூர்யா பாலி பேக் உற்பத்தி ஆலை**:\n\n**முகவரி**: 281C, கந்தபுரம் காலனி, காமராஜர் சாலை, சிவகாசி - 626 124, தமிழ்நாடு, இந்தியா.\n\n• **அடையாளம்**: சிவகாசி காமராஜர் சாலை, கந்தபுரம் காலனி அருகில் அமைந்துள்ளது.\n• **பார்வையிடும் நேரம்**: திங்கள் முதல் சனி வரை, காலை 9:00 மணி முதல் மாலை 7:00 மணி வரை.\n• **நேரடி ஆலோசனைகள்**: வாடிக்கையாளர்கள் மற்றும் தொழில் முனைவோர் எங்கள் தொழிற்சாலைக்கு நேரடியாக வந்து இயந்திர செயல்பாடுகளைப் பார்வையிட்டு ஆர்டர்களை உறுதி செய்யலாம்!`
  },

  // 16. Phone & WhatsApp Contacts
  {
    id: 'contact',
    chipEn: '📞 Phone & WhatsApp Contacts',
    chipTa: '📞 தொலைபேசி & வாட்ஸ்அப் எண்கள்',
    keywords: [
      'contact', 'phone', 'call', 'whatsapp', 'number', 'mobile', 'email', 'support', 'help',
      'தொடர்பு', 'தொலைபேசி', 'வாட்ஸ்அப்', 'எண்', 'மின்னஞ்சல்', 'phone number', 'number kudunga', 'contact details'
    ],
    responseEn: `You can reach our sales and technical team immediately through:\n\n📞 **Voice Call Support**:\n• Primary: **${COMPANY_INFO.phone.primary}**\n• Secondary: **${COMPANY_INFO.phone.secondary}**\n\n💬 **WhatsApp Direct Chat**:\n• Number 1: **${COMPANY_INFO.phone.primary}** (New Enquiries & Quotes)\n• Number 2: **${COMPANY_INFO.phone.secondary}** (Orders & Factory Coordination)\n\n✉️ **Email**: ${COMPANY_INFO.email.sales}\n🕒 **Working Hours**: Monday – Saturday, 9:00 AM – 7:00 PM (Closed on Sundays).`,
    responseTa: `எங்கள் விற்பனை மற்றும் தொழில்நுட்ப குழுவை நேரடியாக தொடர்புகொள்ள:\n\n📞 **தொலைபேசி எண்கள்**:\n• முதன்மை: **${COMPANY_INFO.phone.primary}**\n• துணை: **${COMPANY_INFO.phone.secondary}**\n\n💬 **வாட்ஸ்அப் எண்கள்**:\n• எண் 1: **${COMPANY_INFO.phone.primary}** (புதிய விசாரணைகள் & கொட்டேஷன்)\n• எண் 2: **${COMPANY_INFO.phone.secondary}** (ஆர்டர்கள் & ஆலை மேலாண்மை)\n\n✉️ **மின்னஞ்சல்**: ${COMPANY_INFO.email.sales}\n🕒 **வேலை நேரம்**: திங்கள் முதல் சனி வரை, காலை 9:00 முதல் மாலை 7:00 வரை (ஞாயிறு விடுமுறை).`
  },

  // 17. Payment & GST Terms
  {
    id: 'payment',
    chipEn: '💳 Payment Terms & GST Invoice',
    chipTa: '💳 கட்டண முறைகள் & GST ரசீது',
    keywords: [
      'payment', 'pay', 'advance', 'gst', 'tax', 'invoice', 'bill', 'bank', 'neft', 'rtgs', 'upi', 'credit',
      'கட்டணம்', 'பணம்', 'ஜிஎஸ்டி', 'ரசீது', 'payment epdi', 'advance evlo', 'gst bill'
    ],
    responseEn: `• **GST Invoicing**: All commercial orders are supplied with a 100% authentic Tax Invoice (18% GST for polymer packaging products) eligible for complete Input Tax Credit (ITC).\n• **Payment Terms**: Standard terms are 50% advance upon order and stereo confirmation, with the remaining 50% balance payable upon completion prior to dispatch.\n• **Payment Methods**: We accept Bank NEFT / RTGS transfers, IMPS, and official Business UPI.`,
    responseTa: `• **GST வணிக ரசீது**: அனைத்து ஆர்டர்களுக்கும் முறையான ஜிஎஸ்டி (18% GST) வரி ரசீது வழங்கப்படும். இதன் மூலம் நீங்கள் Input Tax Credit (ITC) பெற்றுக்கொள்ளலாம்.\n• **கட்டண முறைகள்**: ஆர்டர் மற்றும் ஸ்டீரியோ உறுதி செய்யும்போது 50% முன்பணம், சரக்கு தயாராகி அனுப்பப்படும் முன் மீதி 50% செலுத்த வேண்டும்.\n• **பரிவர்த்தனை வழிகள்**: வங்கி NEFT / RTGS, IMPS மற்றும் வணிக UPI மூலம் செலுத்தலாம்.`
  },

  // 18. Recyclability & Eco-compliance
  {
    id: 'eco',
    chipEn: '🌱 Recyclability & Norms',
    chipTa: '🌱 மறுசுழற்சி & அரசு விதிமுறைகள்',
    keywords: [
      'eco', 'green', 'recycle', 'recyclable', 'plastic ban', 'bio', 'biodegradable', 'environment', 'pollution', 'norms',
      'சுற்றுச்சூழல்', 'மறுசுழற்சி', 'அரசு விதிமுறை', 'plastic ban irukka'
    ],
    responseEn: `Surya Poly Pack is committed to environmentally compliant manufacturing:\n\n• **100% Recyclable Polymers**: We process virgin polyolefins (HDPE, LDPE, PP) that can be fully re-granulated and recycled into post-consumer products.\n• **Regulatory Gauge Compliance**: We manufacture carry bags and covers in compliance with government-specified thickness thresholds (120+ microns) where required.\n• **Non-Plastic Alternative**: We also supply non-plastic carry bags for customers prioritizing zero-plastic alternatives.`,
    responseTa: `சூர்யா பாலி பேக் சுற்றுச்சூழல் விதிமுறைகளுக்கு உட்பட்டு செயல்படுகிறது:\n\n• **100% மறுசுழற்சி பாலிமர்**: நாங்கள் பயன்படுத்தும் தூய பாலிமர்கள் (HDPE, LDPE, PP) முழுமையாக மறுசுழற்சி செய்யக்கூடியவை.\n• **அரசு விதிமுறைகளுக்கு இணங்குதல்**: அரசு நிர்ணயித்துள்ள மைக்ரான் விதிமுறைகளுக்கு (120+ மைக்ரான்) ஏற்ப பைகள் தயாரிக்கப்படுகின்றன.\n• **பிளாஸ்டிக் அல்லாத மாற்று பைகள்**: பிளாஸ்டிக் அல்லாத சூழலுக்கு உகந்த மாற்று பைகளும் எங்களிடம் கிடைக்கின்றன.`
  },

  // 19. Gratitude / Closure
  {
    id: 'thanks',
    chipEn: '🙏 Thank You',
    chipTa: '🙏 நன்றி',
    keywords: [
      'thanks', 'thank you', 'thank u', 'thx', 'nandri', 'romba nandri', 'ok thanks', 'okay thanks',
      'நன்றி', 'மிக்க நன்றி', 'சரி நன்றி', 'super', 'great', 'awesome'
    ],
    responseEn: `You are most welcome! 😊 It is our pleasure assisting you.\n\nIf you have your packaging sizes ready or need an immediate quote, please feel free to message our team on WhatsApp anytime. Have a wonderful day!`,
    responseTa: `மிக்க மகிழ்ச்சி! 😊 தங்களுக்கு உதவ முடிந்ததில் பெருமகிழ்ச்சி அடைகிறோம்.\n\nபேக்கேஜிங் குறித்த மேலும் தகவல்கள் அல்லது உடனடி கொட்டேஷன் பெற எப்போது வேண்டுமானாலும் எங்கள் வாட்ஸ்அப் எண்ணில் தொடர்புகொள்ளலாம். நல்ல நாளாக அமையட்டும்!`
  }
];

/**
 * Smart bilingual query matching algorithm
 * Handles exact phrases, token overlaps, Tanglish, and intent recognition
 */
export function findBotResponse(query, lang = 'en') {
  if (!query || typeof query !== 'string') {
    return null;
  }

  // Clean and normalize query
  const cleanQuery = query
    .toLowerCase()
    .replace(/[?!.,;:()[\]{}"'\\/_\-+*&^%$#@~`]/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();

  if (!cleanQuery) {
    return {
      topicId: 'greetings',
      text: lang === 'ta' ? FAQ_TOPICS[0].responseTa : FAQ_TOPICS[0].responseEn,
      hasWhatsAppCTA: true,
      suggestedTopicIds: ['products', 'pricing', 'moq', 'contact']
    };
  }

  const queryWords = cleanQuery.split(' ').filter(w => w.length > 0);

  // Intent 1: Check for quick greetings ("hi", "hello", "hey", "vanakkam", "வணக்கம்")
  const greetingWords = ['hi', 'hello', 'hey', 'hai', 'helo', 'vanakkam', 'வணக்கம்'];
  if (greetingWords.includes(cleanQuery) || (queryWords.length <= 2 && queryWords.some(w => greetingWords.includes(w)))) {
    const greetingTopic = FAQ_TOPICS.find(t => t.id === 'greetings');
    return {
      topicId: 'greetings',
      text: lang === 'ta' ? greetingTopic.responseTa : greetingTopic.responseEn,
      hasWhatsAppCTA: true,
      suggestedTopicIds: ['products', 'pricing', 'moq', 'contact']
    };
  }

  // Intent 2: Check for thanks / gratitude
  const thanksWords = ['thanks', 'thank you', 'thank', 'thx', 'nandri', 'நன்றி'];
  if (thanksWords.some(w => cleanQuery === w || cleanQuery.startsWith(w) || cleanQuery.endsWith(w))) {
    const thanksTopic = FAQ_TOPICS.find(t => t.id === 'thanks');
    return {
      topicId: 'thanks',
      text: lang === 'ta' ? thanksTopic.responseTa : thanksTopic.responseEn,
      hasWhatsAppCTA: true,
      suggestedTopicIds: ['products', 'pricing', 'contact']
    };
  }

  // Generic words that appear often in queries (should not dominate specific topic keywords)
  const genericWords = new Set([
    'cover', 'covers', 'bag', 'bags', 'packaging', 'pack', 'product', 'products', 'make', 'seiveengala',
    'கவர்கள்', 'பைகள்', 'பொருட்கள்'
  ]);

  // Score all topics based on keyword matching
  let bestTopic = null;
  let highestScore = 0;

  for (const topic of FAQ_TOPICS) {
    let score = 0;

    for (const kw of topic.keywords) {
      const cleanKw = kw.toLowerCase().trim();
      if (!cleanKw) continue;

      const isGeneric = genericWords.has(cleanKw);

      // Exact multi-word phrase match (e.g., "calendar covers", "how much", "rate per kg", "vilai enna")
      if (cleanKw.includes(' ') && cleanQuery.includes(cleanKw)) {
        score += 25;
        continue;
      }

      // Check if it's an exact word match
      if (queryWords.includes(cleanKw)) {
        score += isGeneric ? 2 : 10;
      } else if (cleanQuery.includes(cleanKw)) {
        // Substring match
        score += isGeneric ? 1 : 4;
      } else if (!isGeneric && cleanKw.length >= 4) {
        // Partial root match for non-generic words
        for (const qw of queryWords) {
          if (qw.length >= 4 && (qw.startsWith(cleanKw) || cleanKw.startsWith(qw))) {
            score += 3;
            break;
          }
        }
      }
    }

    if (score > highestScore) {
      highestScore = score;
      bestTopic = topic;
    }
  }

  // If match found with reliable confidence (score >= 4)
  if (bestTopic && highestScore >= 4) {
    // Determine 3 contextual follow-up topics
    const defaultSuggestions = ['pricing', 'moq', 'contact', 'samples', 'order_process'];
    const followUps = defaultSuggestions.filter(id => id !== bestTopic.id).slice(0, 3);

    return {
      topicId: bestTopic.id,
      text: lang === 'ta' ? bestTopic.responseTa : bestTopic.responseEn,
      hasWhatsAppCTA: true,
      suggestedTopicIds: followUps
    };
  }

  // Helpful contextual fallback with smart bilingual guidance
  const fallbackEn = `Thank you for reaching out! For custom dimension specifications, unique micron thickness, or tailored packaging quotes, our Sivakasi manufacturing team is ready to assist you directly.\n\n📌 **You can ask me about:**\n• **Packaging Products**: Food covers, grocery carry bags, calendar packaging\n• **Flexo Printing**: 1 to 6 colour printing with custom logo\n• **Pricing & MOQ**: Bulk kilogram rates and minimum order sizes\n\nOr click below to chat with our engineers directly on WhatsApp:`;

  const fallbackTa = `தங்களின் கேள்விக்கு நன்றி! உங்கள் துல்லியமான பேக்கேஜிங் அளவுகள், மைக்ரான் தடிமன் மற்றும் பிரத்யேக தேவைகளுக்கு எங்கள் சிவகாசி ஆலை குழு உங்களுக்கு நேரடியாக உதவ தயாராக உள்ளது.\n\n📌 **என்னிடம் நீங்கள் கேட்கலாம்:**\n• **தயாரிப்புகள்**: உணவு கவர்கள், மளிகை கேரி பைகள், காலண்டர் கவர்கள்\n• **பிரிண்டிங்**: 1 முதல் 6 வண்ண தனிப்பயன் லோகோ அச்சிடுதல்\n• **விலை & MOQ**: மொத்த விலை மற்றும் குறைந்தபட்ச ஆர்டர் அளவு\n\nஅல்லது கீழே உள்ள வாட்ஸ்அப் எண்களில் எங்கள் விற்பனை குழுவுடன் நேரடியாக உரையாடலாம்:`;

  return {
    topicId: 'fallback',
    text: lang === 'ta' ? fallbackTa : fallbackEn,
    hasWhatsAppCTA: true,
    suggestedTopicIds: ['products', 'pricing', 'moq', 'contact']
  };
}
