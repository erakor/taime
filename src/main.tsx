import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import './index.css'
import { ZEN_THEMES, type ZenThemeId } from './themes'
import { ZenCanvas } from './components/ZenCanvas'

const requested = new URLSearchParams(location.search).get('theme') ?? 'default'
const theme: ZenThemeId = requested in ZEN_THEMES ? (requested as ZenThemeId) : 'default'
document.documentElement.dataset.zenTheme = theme

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ZenCanvas />
  </StrictMode>,
)
