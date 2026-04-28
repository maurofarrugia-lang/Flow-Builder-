import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// For GitHub Pages, set base to '/<repo>/' or './' if using a custom build step.
export default defineConfig({
  plugins: [react()],
  base: './',
})
