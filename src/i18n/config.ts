import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import enTranslations from '../locales/en.json'
import bnTranslations from '../locales/bn.json'

const resources = {
  en: {
    translation: enTranslations
  },
  bn: {
    translation: bnTranslations
  }
}

// Get saved language from localStorage or use browser default
const savedLanguage = localStorage.getItem('language')
const defaultLanguage = savedLanguage || 'en'

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: defaultLanguage,
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false // React already protects from XSS
    }
  })

export default i18n
