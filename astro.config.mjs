import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";
import storyblok from '@storyblok/astro';
import { loadEnv } from 'vite';
import basicSsl from '@vitejs/plugin-basic-ssl'

import vue from "@astrojs/vue";

const env = loadEnv("", process.cwd(), 'STORYBLOK');

// https://astro.build/config
export default defineConfig({
  vite: {
    plugins: [basicSsl()],
    server: {
      https: true,
    },
  },
  integrations: [
    tailwind(),
    vue(),
    storyblok({
        accessToken: env.STORYBLOK_TOKEN,
        components: {
          profileheader: 'storyblok/components/Profile',
          imagegallery: 'storyblok/components/ImageGallery',
          page: 'storyblok/components/Page',
        },
        apiOptions: {
          region: 'eu',
        },
      }
    )]
});