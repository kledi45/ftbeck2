
export type Language = 'de' | 'en';

export interface Translations {
  [key: string]: {
    de: string;
    en: string;
  };
}

// Main navigation translations
export const navTranslations: Translations = {
  home: {
    de: 'Startseite',
    en: 'Home',
  },
  about: {
    de: 'Über uns',
    en: 'About Us',
  },
  contact: {
    de: 'Kontakt',
    en: 'Contact',
  },
};

// Home page translations
export const homeTranslations: Translations = {
  heroTitle: {
    de: 'Ihr Premium-Fensterhersteller',
    en: 'Your Premium Window Manufacturer',
  },
  heroSubtitle: {
    de: 'Hochwertige Fenster, Türen und Rollläden aus Kunststoff und Aluminium – maßgeschneidert für Langlebigkeit, Energieeffizienz und modernes Design.',
    en: 'High-quality windows, doors and roller shutters made of PVC and aluminum - tailored for durability, energy efficiency and modern design.',
  },
  ctaDiscover: {
    de: 'Jetzt entdecken',
    en: 'Discover Now',
  },
  ctaContact: {
    de: 'Kontaktieren Sie uns',
    en: 'Contact Us',
  },
  aboutSectionTitle: {
    de: 'Wer wir sind',
    en: 'Who We Are',
  },
  aboutSectionContent: {
    de: 'Die F&T Beck GmbH mit Sitz in Ebersbach an der Fils ist Ihr Spezialist für innovative Fenster-, Türen- und Rollladensysteme aus Kunststoff und Aluminium. Wir vereinen modernes Design, Energieeffizienz und Langlebigkeit in jeder Produktlinie. Mit über 20 Jahren Erfahrung stehen wir für Präzision, Nachhaltigkeit und kundenorientierte Lösungen – von der Planung bis zur Montage.',
    en: 'F&T Beck GmbH, based in Ebersbach an der Fils, is your specialist for innovative window, door and roller shutter systems made of PVC and aluminum. We combine modern design, energy efficiency and durability in every product line. With over 20 years of experience, we stand for precision, sustainability and customer-oriented solutions - from planning to installation.',
  },
  productWorldsTitle: {
    de: 'Unsere Produktwelten',
    en: 'Our Product Worlds',
  },
  pvcWindowsTitle: {
    de: 'Kunststofffenster & Türen',
    en: 'PVC Windows & Doors',
  },
  pvcWindowsDesc: {
    de: 'Systeme: Schüco LivIng 82 MD/AS, CT70, Rehau Synego\nExzellente Wärmedämmung dank 7-Kammer-Technologie\nSicherheitsklasse bis RC2\nGroße Auswahl an Farben und Dekoren',
    en: 'Systems: Schüco LivIng 82 MD/AS, CT70, Rehau Synego\nExcellent thermal insulation thanks to 7-chamber technology\nSecurity class up to RC2\nWide selection of colors and decors',
  },
  aluWindowsTitle: {
    de: 'Aluminiumfenster & Türen',
    en: 'Aluminum Windows & Doors',
  },
  aluWindowsDesc: {
    de: 'Systeme: Aliplast Genesis 75, Max Light\nHochwertige 3-Kammer-Konstruktion\nPerfekt für moderne Architektur mit minimalistischem Design',
    en: 'Systems: Aliplast Genesis 75, Max Light\nHigh-quality 3-chamber construction\nPerfect for modern architecture with minimalist design',
  },
  slidingSystemsTitle: {
    de: 'Schiebesysteme (PVC & ALU)',
    en: 'Sliding Systems (PVC & ALU)',
  },
  slidingSystemsDesc: {
    de: 'Schüco Easy Slide, Rehau Synego Slide, Ultraglide\nFür große Glasflächen mit hoher Stabilität & Barrierefreiheit',
    en: 'Schüco Easy Slide, Rehau Synego Slide, Ultraglide\nFor large glass surfaces with high stability & accessibility',
  },
  shuttersTitle: {
    de: 'Rollläden & Aufsatzkästen',
    en: 'Roller Shutters & Top-mounted Boxes',
  },
  shuttersDesc: {
    de: 'ROKA-TOP® 2 EX – für luftdichte, wärmegedämmte Integration\nIntegrierbar mit PVC-Fenstersystemen',
    en: 'ROKA-TOP® 2 EX – for airtight, thermally insulated integration\nIntegrated with PVC window systems',
  },
  efficiencyTitle: {
    de: 'Energieeffizienz & Nachhaltigkeit',
    en: 'Energy Efficiency & Sustainability',
  },
  efficiencyDesc: {
    de: 'Unsere Fenster und Türen setzen neue Standards in Sachen Energieeinsparung und Umweltbewusstsein.',
    en: 'Our windows and doors set new standards in terms of energy savings and environmental awareness.',
  },
  efficiencyPoint1: {
    de: 'Uw-Werte bis 0,73 W/m²K',
    en: 'Uw-values up to 0.73 W/m²K',
  },
  efficiencyPoint2: {
    de: 'Schallschutz bis 47 dB',
    en: 'Sound insulation up to 47 dB',
  },
  efficiencyPoint3: {
    de: 'Hergestellt mit EcoPuls-Rezyklatanteil (REHAU)',
    en: 'Made with EcoPuls recycled content (REHAU)',
  },
  efficiencyPoint4: {
    de: 'CE-zertifiziert gemäß EN 14351-1',
    en: 'CE certified according to EN 14351-1',
  },
  efficiencyFooter: {
    de: 'Unsere Materialien sind nicht nur hochwertig – sie sind auch nachhaltig, langlebig und vollständig recycelbar. Für einen ökologischen Fußabdruck, auf den Sie stolz sein können.',
    en: 'Our materials are not only high quality - they are also sustainable, durable and fully recyclable. For an ecological footprint you can be proud of.',
  },
  qualityTitle: {
    de: 'Qualität, die überzeugt',
    en: 'Quality that convinces',
  },
  qualityDesc: {
    de: 'Wir arbeiten ausschließlich mit marktführenden Marken wie Schüco, Rehau, Aliplast und Beck+Heun. Unsere Kunden profitieren von:',
    en: 'We work exclusively with market-leading brands such as Schüco, Rehau, Aliplast and Beck+Heun. Our customers benefit from:',
  },
  qualityPoint1: {
    de: 'Maßanfertigungen für jedes Bauprojekt',
    en: 'Custom-made solutions for every construction project',
  },
  qualityPoint2: {
    de: 'Kurze Lieferzeiten',
    en: 'Short delivery times',
  },
  qualityPoint3: {
    de: 'Deutsche Qualitätsnormen',
    en: 'German quality standards',
  },
  qualityPoint4: {
    de: 'Persönliche Beratung und Support',
    en: 'Personal advice and support',
  },
};

// About page translations
export const aboutTranslations: Translations = {
  pageTitle: {
    de: 'Über uns',
    en: 'About Us',
  },
  mainText: {
    de: 'Seit über zwei Jahrzehnten steht F&T Beck GmbH für Qualität, Vertrauen und technische Perfektion im Fenster- und Türenbau. Unser familiengeführtes Unternehmen kombiniert deutsche Ingenieurskunst mit einer starken Kundenorientierung und bietet Komplettlösungen für Neubauten, Renovierungen und gewerbliche Projekte.',
    en: 'For over two decades, F&T Beck GmbH has stood for quality, trust and technical perfection in window and door construction. Our family-run company combines German engineering with a strong customer focus and offers complete solutions for new buildings, renovations and commercial projects.',
  },
  strengthsTitle: {
    de: 'Unsere Stärken im Überblick',
    en: 'Our strengths at a glance',
  },
  strength1: {
    de: 'Maßgeschneiderte Systeme – passend zu jedem Architekturstil',
    en: 'Customized systems - suitable for any architectural style',
  },
  strength2: {
    de: 'Hochwertige Materialien – PVC & Aluminium',
    en: 'High-quality materials - PVC & aluminum',
  },
  strength3: {
    de: 'Energieeffiziente Lösungen – für nachhaltiges Wohnen',
    en: 'Energy-efficient solutions - for sustainable living',
  },
  strength4: {
    de: 'Breite Farbpalette & modernes Design',
    en: 'Wide color palette & modern design',
  },
  strength5: {
    de: 'Persönlicher Kundenservice – vom Erstgespräch bis zur Montage',
    en: 'Personal customer service - from the initial consultation to installation',
  },
  madeInGermany: {
    de: 'Vertrauen Sie auf Qualität – Made in Germany.',
    en: 'Trust in quality - Made in Germany.',
  },
};

// Contact page translations
export const contactTranslations: Translations = {
  pageTitle: {
    de: 'Kontakt',
    en: 'Contact',
  },
  formTitle: {
    de: 'Haben Sie Fragen oder wünschen ein Angebot? Schreiben Sie uns – wir beraten Sie gern!',
    en: 'Do you have questions or would you like a quote? Write to us - we will be happy to advise you!',
  },
  firstName: {
    de: 'Vorname',
    en: 'First Name',
  },
  lastName: {
    de: 'Nachname',
    en: 'Last Name',
  },
  email: {
    de: 'E-Mail-Adresse',
    en: 'Email Address',
  },
  phone: {
    de: 'Telefonnummer',
    en: 'Phone Number',
  },
  message: {
    de: 'Nachricht',
    en: 'Message',
  },
  submit: {
    de: 'Absenden',
    en: 'Submit',
  },
  contactInfo: {
    de: 'Kontaktinformationen',
    en: 'Contact Information',
  },
  emailLabel: {
    de: 'E-Mail',
    en: 'Email',
  },
  phoneLabel: {
    de: 'Telefon',
    en: 'Phone',
  },
  addressLabel: {
    de: 'Adresse',
    en: 'Address',
  },
  openingHours: {
    de: 'Öffnungszeiten: Mo–Fr: 08:00–17:00 Uhr',
    en: 'Opening Hours: Mon–Fri: 08:00–17:00',
  },
};

// Footer translations
export const footerTranslations: Translations = {
  companyInfo: {
    de: 'F&T Beck GmbH',
    en: 'F&T Beck GmbH',
  },
  address: {
    de: 'Steinbisstraße 3, 73061 Ebersbach an der Fils',
    en: 'Steinbisstraße 3, 73061 Ebersbach an der Fils',
  },
  downloads: {
    de: 'Downloads',
    en: 'Downloads',
  },
  careAndInstallation: {
    de: 'Pflege und Montage der Fenster (PDF)',
    en: 'Care and Installation of Windows (PDF)',
  },
  productPerformancePass: {
    de: 'Schüco Produktleistungspass (PDF)',
    en: 'Schüco Product Performance Pass (PDF)',
  },
  catalog: {
    de: 'Katalog Türen & Fenster (PDF)',
    en: 'Catalog Doors & Windows (PDF)',
  },
  legalInfo: {
    de: 'Rechtliches',
    en: 'Legal Information',
  },
  privacyPolicy: {
    de: 'Datenschutzerklärung',
    en: 'Privacy Policy',
  },
  imprint: {
    de: 'Impressum',
    en: 'Imprint',
  },
  newsletter: {
    de: 'Newsletter',
    en: 'Newsletter',
  },
  newsletterPlaceholder: {
    de: 'Ihre E-Mail-Adresse',
    en: 'Your email address',
  },
  subscribe: {
    de: 'Abonnieren',
    en: 'Subscribe',
  },
  copyright: {
    de: '© 2023 F&T Beck GmbH. Alle Rechte vorbehalten.',
    en: '© 2023 F&T Beck GmbH. All rights reserved.',
  },
};

// Create a context for the language
export const getTranslation = (
  translations: Translations,
  key: string,
  language: Language
): string => {
  if (!translations[key]) {
    console.warn(`Translation key "${key}" not found`);
    return key;
  }
  return translations[key][language];
};
