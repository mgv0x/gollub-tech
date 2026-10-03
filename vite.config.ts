import path from "path"
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    {
      name: 'bio-trailing-slash-redirect',
      configureServer(server) {
        server.middlewares.use((req, res, next) => {
          if (req.url && (req.url === '/bio' || req.url.startsWith('/bio?'))) {
            res.writeHead(301, { Location: '/bio/' + (req.url.includes('?') ? req.url.slice(req.url.indexOf('?')) : '') });
            res.end();
            return;
          }
          next();
        });
      },
    },
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  build: {
    rollupOptions: {
      input: {
        main: path.resolve(__dirname, 'index.html'),
        bio: path.resolve(__dirname, 'bio/index.html'),
      },
    },
  },
})
