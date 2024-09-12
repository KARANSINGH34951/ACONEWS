import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    proxy: {
      '/news': {
        target: 'http://localhost:5000',
        changeOrigin: true,
      },
      '/search': {
        target: 'http://localhost:5000',
        changeOrigin: true,
      }
    }
  },
  plugins: [react()],
})
