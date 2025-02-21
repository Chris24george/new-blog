import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  site: 'https://christonotes.com', // Your domain
  integrations: [mdx(), tailwind()],
  server: {
    host: true,
    port: 3000,
    headers: {
      "Access-Control-Allow-Origin": "*"
    }
  },
  markdown: {
    shikiConfig: {
      theme: 'github-light',
      wrap: true
    }
  },
  vite: {
    server: {
      strictPort: true,
      allowedHosts: [
        'localhost',
        '127.0.0.1',
        '.ngrok-free.app',
        'all'
      ]
    }
  }
});