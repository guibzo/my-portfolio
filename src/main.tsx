import React from 'react'
import ReactDOM from 'react-dom/client'
import './i18n'
import { LanguageProvider } from './language-provider.tsx'
import { RouterList } from './router.tsx'
import './styles/global.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <LanguageProvider>
      <RouterList />
    </LanguageProvider>
  </React.StrictMode>
)
