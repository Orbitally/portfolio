import { defineConfig } from 'astro/config';
import vercel from '@astrojs/vercel/serverless';
import icon from 'astro-icon';
import sitemap from '@astrojs/sitemap';

import robotsTxt from "astro-robots-txt";

// https://astro.build/config
export default defineConfig({
  output: 'server',
  site: 'https://jacob.kreindler.ca',
  redirects: {
    '/projects': '/'
  },
  adapter: vercel({
    webAnalytics: {
      enabled: true
    },
    maxDuration: 8
  }),
  images: {
    domains: ['images.ctfassets.net', 'cdn.contentful.com']
  },
  integrations: [icon({
    include: {
      mdi: ['github'],
      carbon: ['email']
    }
  }), sitemap(), robotsTxt()]
});