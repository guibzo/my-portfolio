import { useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import { useSearchParams } from 'react-router-dom'

export const LanguageProvider = ({ children }: { children: React.ReactNode }) => {
  const { i18n } = useTranslation()
  const [searchParams] = useSearchParams()

  useEffect(() => {
    const storedLanguage = searchParams.get('locale')

    if (storedLanguage) {
      i18n.changeLanguage(storedLanguage)
    }
  }, [])

  return <>{children}</>
}
