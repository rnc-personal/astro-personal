import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";
import storyblok from '@storyblok/astro';
import { loadEnv } from 'vite';

import vue from "@astrojs/vue";

const env = loadEnv("", process.cwd(), 'STORYBLOK');

// https://astro.build/config
export default defineConfig({
  integrations: [
    tailwind(),
    vue(),
    storyblok(
      {
        accessToken: env.STORYBLOK_TOKEN,
        components: {
          // Add your components here
        },
        apiOptions: {
          region: 'eu',
        },
      }
    )]
});