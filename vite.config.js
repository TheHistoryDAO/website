import { resolve } from 'path'
import { defineConfig, splitVendorChunkPlugin } from 'vite'
import { createHtmlPlugin } from 'vite-plugin-html'
import mkcert from 'vite-plugin-mkcert'

process.env.TAILWIND_MODE = 'watch'
export default defineConfig({
  server: {
    port: 3000,
    proxy: {},
    fs: { strict: false },
    host: true,
    https: true
  },
  resolve: {
    alias: {
      '@': resolve(process.cwd(), './src')
    }
  },
  plugins: [mkcert(), splitVendorChunkPlugin(), createHtmlPlugin({ minify: true })]
})
