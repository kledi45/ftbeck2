
import React, { useState } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { contactTranslations, getTranslation } from '@/utils/translations';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { toast } from 'sonner';

const ContactForm: React.FC = () => {
  const { language } = useLanguage();
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
  
    try {
      const response = await fetch('https://formspree.io/f/mzzeaowr', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
  
      if (response.ok) {
        toast.success(language === 'de' ? 'Vielen Dank für Ihre Nachricht!' : 'Thank you for your message!');
        setFormData({ firstName: '', lastName: '', email: '', phone: '', message: '' });
      } else {
        toast.error(language === 'de' ? 'Nachricht konnte nicht gesendet werden.' : 'Failed to send message.');
      }
    } catch (err) {
      toast.error(language === 'de' ? 'Fehler beim Senden der Nachricht.' : 'Error sending message.');
    }
  
    setIsSubmitting(false);
  };
  

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label htmlFor="firstName" className="block mb-2 text-sm font-medium">
            {getTranslation(contactTranslations, 'firstName', language)}
          </label>
          <Input
            id="firstName"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="lastName" className="block mb-2 text-sm font-medium">
            {getTranslation(contactTranslations, 'lastName', language)}
          </label>
          <Input
            id="lastName"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            required
          />
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label htmlFor="email" className="block mb-2 text-sm font-medium">
            {getTranslation(contactTranslations, 'email', language)}
          </label>
          <Input
            id="email"
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="phone" className="block mb-2 text-sm font-medium">
            {getTranslation(contactTranslations, 'phone', language)}
          </label>
          <Input
            id="phone"
            name="phone"
            type="tel"
            value={formData.phone}
            onChange={handleChange}
            required
          />
        </div>
      </div>
      
      <div>
        <label htmlFor="message" className="block mb-2 text-sm font-medium">
          {getTranslation(contactTranslations, 'message', language)}
        </label>
        <Textarea
          id="message"
          name="message"
          rows={5}
          value={formData.message}
          onChange={handleChange}
          required
        />
      </div>
      
      <Button 
        type="submit" 
        className="w-full sm:w-auto bg-ftbeck-blue hover:bg-blue-700"
        disabled={isSubmitting}
      >
        {isSubmitting ? (
          <span className="flex items-center">
            <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
            </svg>
            {language === 'de' ? 'Wird gesendet...' : 'Sending...'}
          </span>
        ) : (
          getTranslation(contactTranslations, 'submit', language)
        )}
      </Button>
    </form>
  );
};

export default ContactForm;
