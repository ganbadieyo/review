import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { readFileSync} from 'fs'
import unocss from 'unocss/vite'
import { presetWind } from 'unocss'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), unocss({
    presets: [
      presetWind()
    ]
  })],
  define: {
    DENGQING_RESUME: JSON.stringify(readFileSync( './README.md', 'utf-8').toString()),
  },
})
