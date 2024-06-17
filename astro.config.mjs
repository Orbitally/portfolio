import { defineConfig } from 'astro/config';

import vercel from '@astrojs/vercel/serverless';

// https://astro.build/config
export default defineConfig({
  output: 'server',
  redirects: {
    '/projects': '/',
  },
  adapter: vercel({
    functionPerRoute: true,
    webAnalytics: {
      enabled: true,
    },
    maxDuration: 8,
  }),
  images: {
    domains: ['images.ctfassets.net', 'cdn.contentful.com'],
  },
});
