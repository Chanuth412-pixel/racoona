import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import tailwind from '@astrojs/tailwind';

// Check which repository is running the build
const isClientRepo = process.env.GITHUB_REPOSITORY === 'racoona-org/racoona-dashboard';

export default defineConfig({
  // Dynamically assign the site URL
  site: isClientRepo ? 'https://racoona.ai' : 'https://Chanuth412-pixel.github.io',
  
  // Dynamically assign the base path
  base: isClientRepo ? '/' : '/racoona',
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
