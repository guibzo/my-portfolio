import { useEffect } from 'react'
import { useTranslation } from 'react-i18next'

export const LanguageProvider = ({ children }: { children: React.ReactNode }) => {
  const { i18n } = useTranslation()

  useEffect(() => {
    const storedLanguage = localStorage.getItem('language')

    if (storedLanguage) {
      i18n.changeLanguage(storedLanguage)
    }
  }, [])

  return <>{children}</>
}
