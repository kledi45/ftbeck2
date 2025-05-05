import React from 'react';
import SectionHeading from '@/components/SectionHeading';
import { useLanguage } from '@/contexts/LanguageContext';

const PrivacyPolicy: React.FC = () => {
  const { language } = useLanguage();

  return (
    <div className="min-h-screen bg-white py-16 md:py-24">
      <div className="container-custom">
        <SectionHeading title={language === 'de' ? 'Datenschutzerklärung' : 'Privacy Policy'} center />

        <div className="max-w-4xl mx-auto text-gray-700 space-y-8 text-base leading-relaxed">
          <p>
            {language === 'de' ? (
              <>Wir freuen uns über Ihr Interesse an unserer Website. Der Schutz Ihrer Privatsphäre ist für uns sehr wichtig. Nachstehend informieren wir Sie ausführlich über den Umgang mit Ihren Daten gemäß der Datenschutz-Grundverordnung (DSGVO).</>
            ) : (
              <>We appreciate your interest in our website. Protecting your privacy is very important to us. Below you will find detailed information on how we handle your data according to the General Data Protection Regulation (GDPR).</>
            )}
          </p>

          <h2 className="text-xl font-semibold">{language === 'de' ? '1. Verantwortlicher' : '1. Controller'}</h2>
          <p>
            F&T Beck GmbH<br />
            Steinbisstraße 3<br />
            73661 Ebersbach an der Fils<br />
            Email: info@ftbeck.com
          </p>

          <h2 className="text-xl font-semibold">{language === 'de' ? '2. Datenerhebung beim Besuch der Website' : '2. Data Collection When Visiting the Website'}</h2>
          <p>
            {language === 'de'
              ? 'Beim Besuch unserer Website speichern unsere Server keine Informationen. Diese Website wurde ausschließlich zu Demonstrationszwecken erstellt und sammelt keine Daten.'
              : "When visiting our website, our servers don't store any information. This website is build only for demonstration purposes and doesn't collect any data."}
          </p>

          <h2 className="text-xl font-semibold">{language === 'de' ? '3. Kontaktaufnahme' : '3. Contact'}</h2>
          <p>
            {language === 'de'
              ? 'Wenn Sie uns per E-Mail kontaktieren, speichern wir Ihre Daten ausschließlich in unserem beruflichen E-Mail-Postfach.'
              : 'If you contact us via email, we store your data only to our professional e-mail.'}
          </p>

          <h2 className="text-xl font-semibold">{language === 'de' ? '4. Ihre Rechte' : '4. Your Rights'}</h2>
          <ul className="list-disc list-inside">
            <li>{language === 'de' ? 'Auskunft über Ihre gespeicherten Daten' : 'Access to your stored data'}</li>
            <li>{language === 'de' ? 'Berichtigung unrichtiger Daten' : 'Correction of inaccurate data'}</li>
            <li>{language === 'de' ? 'Löschung Ihrer Daten' : 'Deletion of your data'}</li>
            <li>{language === 'de' ? 'Widerruf Ihrer Einwilligung' : 'Withdrawal of your consent'}</li>
            <li>{language === 'de' ? 'Beschwerde bei der Aufsichtsbehörde' : 'Complaint to the supervisory authority'}</li>
          </ul>

          <h2 className="text-xl font-semibold">{language === 'de' ? '5. Cookies' : '5. Cookies'}</h2>
          <p>
            {language === 'de'
              ? 'Unsere Website verwendet Cookies zur Verbesserung der Benutzerfreundlichkeit. Sie können Cookies in Ihrem Browser deaktivieren.'
              : 'Our website uses cookies to improve user experience. You can disable cookies in your browser settings.'}
          </p>

          <h2 className="text-xl font-semibold">{language === 'de' ? '6. Datensicherheit' : '6. Data Security'}</h2>
          <p>
            {language === 'de'
              ? 'Wir verwenden SSL-Verschlüsselung, um Ihre Daten sicher zu übertragen.'
              : 'We use SSL encryption to securely transmit your data.'}
          </p>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;