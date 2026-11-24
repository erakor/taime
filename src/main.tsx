import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import './index.css'
import { resolveTheme } from './themes'
import { ZenCanvas } from './components/ZenCanvas'

document.documentElement.dataset.zenTheme = resolveTheme(
  new URLSearchParams(location.search).get('theme'),
)

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ZenCanvas />
  </StrictMode>,
)
