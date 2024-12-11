import i18next from 'i18next';
import { initReactI18next } from 'react-i18next';
import enTranslation from './en.json';
import frTranslation from './fr.json';

i18next.use(initReactI18next).init({
  lng: 'en', // Set default language
  fallbackLng: 'en', // Fallback language in case translation for current language is not available
  debug: true, // Enable debug mode for development
  resources: {
    en: {
      translation: enTranslation, // Use 'translation' as the namespace for English translations
    },
    fr: {
      translation: frTranslation, // Use 'translation' as the namespace for French translations
    },
  },
  // Set additional options as needed
});

export default i18next;