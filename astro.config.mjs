import { defineConfig } from 'astro/config';
import vercel from '@astrojs/vercel';
import icon from 'astro-icon';
import sitemap from '@astrojs/sitemap';

import robotsTxt from 'astro-robots-txt';

// https://astro.build/config
export default defineConfig({
  prefetch: {
    defaultStrategy: 'viewport',
  },
  output: 'server',
  site: 'https://jacob.kreindler.ca',
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
        mdi: ['github', 'instagram', 'linkedin'],
        carbon: ['email', 'close-outline'],
        solar: ['close-circle-bold'],
      },
    }),
    sitemap(),
    robotsTxt(),
  ],
});
