import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App'
import { printConsoleArt } from './components/Party'
import './index.css'

// We restore scroll ourselves when moving between Discover and app pages (see useRoute).
window.history.scrollRestoration = 'manual'
printConsoleArt()

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>
)
