import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// Project Pages serves the site at /company-website/. Local dev stays at /.
const base = process.env.GITHUB_PAGES === 'true' ? '/company-website/' : '/'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base,
})
