import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';

export default defineConfig({
  site: 'https://christonotes.com', // Your domain
  integrations: [mdx()],
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