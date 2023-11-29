import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    chunkSizeWarningLimit: 1100, // Set your desired limit in kilobytes
  },
  plugins: [react()],
  assetsInclude:['**/*.glb'],
  base:"/mayan-world/"
})
