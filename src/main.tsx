import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App'

// Global styles
import './index.css'

const rootElement = document.getElementById('root')
if (rootElement) {
  createRoot(rootElement).render(
    <StrictMode>
      <App />
    </StrictMode>,
  )
}
