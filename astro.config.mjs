import { defineConfig } from 'astro/config'
import react from '@astrojs/react';
import preact from '@astrojs/preact';

export default defineConfig({
  site: 'https://pike-kwc.github.io',
  base: '/astroTemplate',
  integrations: [react(), preact()]
})