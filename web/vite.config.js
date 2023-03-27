import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import svgr from 'vite-plugin-svgr';

export default defineConfig({
  plugins: [svgr(), react()],
  server: {
    port: 3000,
  },
  build: {
    outDir: 'build',
    rollupOptions: {
      output: {
        entryFileNames: 'index.html',
      },
    },
    // html: {
    //   title: 'Moovy',
    //   meta: [
    //     { charset: 'utf-8' },
    //     {
    //       name: 'viewport',
    //       content:
    //         'width=device-width, initial-scale=1, maximum-scale=1, minimum-scale=1, viewport-fit=cover',
    //     },
    //     {
    //       name: 'description',
    //       content:
    //         'Join the conversation about your favorite shows and movies with MoovyChat - the chrome extension that lets you comment and review on OTT platforms like Netflix. Discover new perspectives and share your thoughts with the community today',
    //     },
    //     { name: 'theme-color', content: '#000000' },
    //     {
    //       name: 'apple-mobile-web-app-capable',
    //       content: 'yes',
    //     },
    //     {
    //       name: 'apple-mobile-web-app-status-bar-style',
    //       content: 'black',
    //     },
    //     {
    //       name: 'twitter:card',
    //       content: 'summary_large_image',
    //     },
    //     {
    //       name: 'twitter:site',
    //       content: '@MoovyChat',
    //     },
    //     {
    //       name: 'twitter:title',
    //       content: 'MoovyChat',
    //     },
    //     {
    //       name: 'twitter:description',
    //       content:
    //         'Join the conversation about your favorite shows and movies with MoovyChat - the chrome extension that lets you comment and review on OTT platforms like Netflix. Discover new perspectives and share your thoughts with the community today',
    //     },
    //     {
    //       name: 'twitter:image',
    //       content:
    //         'https://pbs.twimg.com/profile_images/1631504975858929664/QbV7mmfa_400x400.jpg',
    //     },
    //     {
    //       name: 'mobile-web-app-capable',
    //       content: 'yes',
    //     },
    //     {
    //       name: 'apple-mobile-web-app-title',
    //       content: 'Moovy.chat',
    //     },
    //     {
    //       name: 'msapplication-navbutton-color',
    //       content: '#4285f4',
    //     },
    //     {
    //       property: 'og:title',
    //       content: 'MoovyChat',
    //     },
    //     {
    //       property: 'og:description',
    //       content:
    //         'Join the conversation about your favorite shows and movies with MoovyChat - the chrome extension that lets you comment and review on OTT platforms like Netflix. Discover new perspectives and share your thoughts with the community today',
    //     },
    //     {
    //       property: 'og:image',
    //       content:
    //         'https://pbs.twimg.com/profile_images/1631504975858929664/QbV7mmfa_400x400.jpg',
    //     },
    //   ],
    // },
  },
});
