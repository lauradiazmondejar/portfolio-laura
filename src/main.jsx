import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

// Set custom cursor from public if available, using BASE_URL for GitHub Pages builds
try {
  const base = import.meta.env.BASE_URL || '/';
  const pngUrl = `${base}cursors/rocket.png`;
  // Set CSS var to be used in index.css; include hotspot 2 2
  document.documentElement.style.setProperty('--cursor-url', `url('${pngUrl}') 2 2`);
} catch (_) {
  // Non-fatal if DOM not available during SSR (not used here)
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
