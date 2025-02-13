import React from 'react'
import ReactDOM from 'react-dom/client'
import './i18n'
import { RouterList } from './router.tsx'
import './styles/global.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterList />
  </React.StrictMode>
)
