import { defineConfig } from 'astro/config';
import vercel from '@astrojs/vercel/serverless';

import icon from 'astro-icon';

// https://astro.build/config
export default defineConfig({
  output: 'server',
  redirects: {
    '/projects': '/',
  },
  adapter: vercel({
    webAnalytics: {
      enabled: true,
    },
    maxDuration: 8,
  }),
  images: {
    domains: ['images.ctfassets.net', 'cdn.contentful.com'],
  },
  integrations: [
    icon({
      include: {
        mdi: ['github'],
        carbon: ['email'],
      },
    }),
  ],
});
