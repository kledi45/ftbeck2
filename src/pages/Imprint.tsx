import React from 'react';
import SectionHeading from '@/components/SectionHeading';
import { useLanguage } from '@/contexts/LanguageContext';

const Imprint: React.FC = () => {
  const { language } = useLanguage();

  return (
    <div className="min-h-screen bg-white py-16 md:py-24">
      <div className="container-custom">
        <SectionHeading title={language === 'de' ? 'Impressum' : 'Imprint'} center />

        <div className="max-w-4xl mx-auto text-gray-700 space-y-8 text-base leading-relaxed">
          <p>
            {language === 'de'
              ? 'Angaben gemäß § 5 TMG'
              : 'Information according to § 5 TMG'}
          </p>

          <p>
            F&T Beck GmbH<br />
            Steinbisstraße 3<br />
            73661 Ebersbach an der Fils<br />
            Deutschland
          </p>

          <p>
            {language === 'de' ? 'Vertreten durch:' : 'Represented by:'}<br />
            Geschäftsführer: [Name einfügen / insert name]
          </p>

          <p>
            {language === 'de' ? 'Kontakt:' : 'Contact:'}<br />
            Telefon: [Telefonnummer einfügen]<br />
            E-Mail: info@ftbeck.com
          </p>

          <p>
            {language === 'de' ? 'Handelsregistereintrag:' : 'Commercial Register Entry:'}<br />
            Registergericht: Amtsgericht [Ort einfügen]<br />
            Registernummer: [Nummer einfügen]
          </p>

          <p>
            {language === 'de' ? 'Umsatzsteuer-ID gemäß §27 a Umsatzsteuergesetz:' : 'VAT ID according to §27 a VAT Act:'}<br />
            DE[USt-ID einfügen]
          </p>

          <p>
            {language === 'de' ? 'Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV:' : 'Responsible for content according to § 55 para. 2 RStV:'}<br />
            [Name und Anschrift der verantwortlichen Person einfügen]
          </p>
        </div>
      </div>
    </div>
  );
};

export default Imprint;
