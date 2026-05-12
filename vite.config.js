import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

export default defineConfig({
  base: '/customer-lists/',
  plugins: [react()],
  resolve: {
    alias: {
      react: path.resolve('./node_modules/react'),
      'react-dom': path.resolve('./node_modules/react-dom'),
    },
    dedupe: ['react', 'react-dom', 'styled-components'],
  },
  optimizeDeps: {
    include: ['react', 'react-dom', 'styled-components'],
  },
})
