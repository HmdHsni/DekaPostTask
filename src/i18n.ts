import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import translationEN from './locals/en/translation.json';
import translationFA from './locals/fa/translation.json';
const resources = {
  en: {
    translation: translationEN,
  },
  fa: {
    translation: translationFA,
  },
};

i18n
  .use(LanguageDetector) 
  .use(initReactI18next) 
  .init({
    resources,
    fallbackLng: 'en', 

    interpolation: {
      escapeValue: false, 
    },
    keySeparator: false,
  });

export default i18n;
