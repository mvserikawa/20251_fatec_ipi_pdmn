import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import 'primeflex/primeflex.min.css'
import 'primereact/resources/themes/lara-light-teal/theme.css'
import 'primeicons/primeicons.css'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
