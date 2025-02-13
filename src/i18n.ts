import enTranslation from '@/locales/en-US.json'
import ptTranslation from '@/locales/pt-BR.json'
import i18n from 'i18next'
import LanguageDetector from 'i18next-browser-languagedetector'
import { initReactI18next } from 'react-i18next'

const resources = {
  'en-US': enTranslation,
  'pt-BR': ptTranslation,
}

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    lng: 'pt-BR',
    interpolation: {
      escapeValue: false,
    },
    compatibilityJSON: 'v4',
    supportedLngs: ['en-US', 'pt-BR'],
  })

export default i18n
