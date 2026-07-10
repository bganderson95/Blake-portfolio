import { defineConfig, type Plugin } from 'vite'
import react from '@vitejs/plugin-react'

// Dev-only: resolve /resume to public/resume/index.html like preview/Vercel do,
// so the request doesn't fall through to the SPA (which has no /resume route).
function staticDirIndex(): Plugin {
  return {
    name: 'static-dir-index',
    apply: 'serve',
    configureServer(server) {
      server.middlewares.use((req, _res, next) => {
        if (req.url === '/resume' || req.url === '/resume/') {
          req.url = '/resume/index.html'
        }
        next()
      })
    },
  }
}

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), staticDirIndex()],
})
