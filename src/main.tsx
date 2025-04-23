import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import './i18n'
import { LanguageProvider } from './language-provider.tsx'
import { RouterList } from './router.tsx'
import './styles/global.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <LanguageProvider>
        <RouterList />
      </LanguageProvider>
    </BrowserRouter>
  </React.StrictMode>
)
