import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// GitHub Actions(Pages) 빌드 → '/Donation_guide/' (서브디렉토리)
// Vercel/로컬 등 다른 환경 → '/' (루트)
const isGitHubPages = process.env.GITHUB_ACTIONS === 'true'

export default defineConfig({
  plugins: [react()],
  base: isGitHubPages ? '/Donation_guide/' : '/',
})
