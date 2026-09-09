import { defineConfig } from 'astro/config';
import cloudflare from '@astrojs/cloudflare';

export default defineConfig({
  site: "https://atmois.com",
  output: 'static',
  adapter: cloudflare()
});
