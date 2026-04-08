import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// GitHub Pages: https://hotjuun.github.io/Donation_guide/
export default defineConfig({
  plugins: [react()],
  base: '/Donation_guide/',
})
