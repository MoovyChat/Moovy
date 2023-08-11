import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import svgr from 'vite-plugin-svgr';
import viteCompression from 'vite-plugin-compression';

const isProduction = process.env.NODE_ENV === 'production';

export default defineConfig({
  plugins: [svgr(), react(), viteCompression()],
  server: {
    port: 3000,
  },
  build: {
    sourcemap: !isProduction,
    outDir: 'build',
  },
});
