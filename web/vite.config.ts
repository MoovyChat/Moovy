import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import svgr from 'vite-plugin-svgr';
import viteCompression from 'vite-plugin-compression';

export default defineConfig({
  plugins: [svgr(), react(), viteCompression()],
  server: {
    port: 3000,
  },
  build: {
    outDir: 'build',
  },
});
