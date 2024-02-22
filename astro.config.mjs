import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";
import storyblok from '@storyblok/astro';
import { loadEnv } from 'vite';
import basicSsl from '@vitejs/plugin-basic-ssl';
import vue from "@astrojs/vue";
import vercel from "@astrojs/vercel/serverless";
const env = loadEnv("", process.cwd(), 'STORYBLOK');


// https://astro.build/config
export default defineConfig({
  vite: {
    plugins: [basicSsl()],
    server: {
      https: true
    }
  },
  integrations: [tailwind(), vue(), storyblok({
    accessToken: env.STORYBLOK_TOKEN,
    components: {
      page: 'storyblok/components/Page',
      profileheader: 'storyblok/components/Profile',
      imagegallery: 'storyblok/components/ImageGallery',
      projectlisting: 'storyblok/components/ProjectListing',
      projectcard: 'storyblok/components/ProjectCard',
      projectdetail: 'storyblok/components/ProjectDetail',
      cventry: 'storyblok/components/CvEntry',
      cv_task_block: 'storyblok/components/CVTaskBlock',
      profile_skills: 'storyblok/components/ProfileSkills',
      profile_skill_block: 'storyblok/components/ProfileSkillBlock',
      profile_skill_detail: 'storyblok/components/SkillDetailBlock',
      contact_card: 'storyblok/components/ContactCard',
      contact_services_block: 'storyblok/components/ContactServicesBlock'
    },
    apiOptions: {
      region: 'eu'
    }
  })],
  output: "server",
  adapter: vercel()
});