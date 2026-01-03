import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(),tailwindcss()],

 server: {
    // Allow requests from ngrok host
    allowedHosts: ["5d634135be9a.ngrok-free.app"],
  },
})
