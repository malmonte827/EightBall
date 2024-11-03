import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import EightBall from './EightBall.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <EightBall />
  </StrictMode>,
)
