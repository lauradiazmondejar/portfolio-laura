import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
// Use repo base only for production build (GitHub Pages)
export default defineConfig(({ command }) => ({
  base: command === 'build' ? '/portfolio-laura/' : '/',
  plugins: [react()],
}))
