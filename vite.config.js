import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: true,
    port: 5173,
    strictPort: true,
    allowedHosts: [
      'c5cf-168-0-17-128.ngrok-free.app' // Adicione seu domínio do ngrok aqui
    ]
  }
})
