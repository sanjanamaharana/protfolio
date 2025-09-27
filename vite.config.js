import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // 
  // CRITICAL FIX FOR GITHUB PAGES DEPLOYMENT:
  // We set the base path to the repository name so assets (JS, CSS) 
  // are loaded correctly relative to the project folder.
  // 
  base: '/protfolio/', 
})
