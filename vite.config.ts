/// <reference types="vitest" />

import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// TODO: check for a fix in versions > 5.0.2
// Workaround for a strange Vite hot-reloading bug, see:
// https://github.com/vitejs/vite/issues/7839#issuecomment-1352977807
import liveReload from 'vite-plugin-live-reload'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), liveReload('./src')],
  test: {
    globals: true,
    environment: 'happy-dom',
    setupFiles: './tests/setup.ts'
  },
})
