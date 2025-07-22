// vite.config.js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: './', // ✅ S3 호스팅 시 상대 경로로 설정
  build: {
    outDir: 'dist',
  },
})
