import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  site: 'https://racoona-org.github.io',
  base: '/racoona-dashboard', 
  integrations: [
    react(),
    tailwind()
  ],
  vite: {
    optimizeDeps: {
      include: ['react', 'react-dom/client', 'react/jsx-runtime']
    }
  }
});
