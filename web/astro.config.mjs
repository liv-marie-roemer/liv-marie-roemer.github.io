// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  site: 'https://liv-marie-romer.github.io',
  devToolbar: {
    enabled: false,
  },
  redirects: {
    '/admin': 'https://liv-marie-roemer.sanity.studio/'
  }
});
