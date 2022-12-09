import { defineConfig } from 'astro/config'
import react from '@astrojs/react';

export default defineConfig({
  site: 'https://pike-kwc.github.io',
  base: '/astroTemplate',
  integrations: [react()]
})