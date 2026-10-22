import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import ErroLimite from './ErroLimite.jsx'
import CinemaHost from './Cinema.jsx'

// atalho de desenvolvimento: ?semanim=1 pula as animações CSS para o estado final
if (new URLSearchParams(window.location.search).get('semanim')) document.body.classList.add('sem-anim')

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ErroLimite>
      <App />
      <CinemaHost />
    </ErroLimite>
  </StrictMode>,
)
