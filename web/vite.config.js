import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { splitVendorChunkPlugin } from 'vite';
import svgr from 'vite-plugin-svgr';

export default defineConfig({
  plugins: [svgr(), react(), splitVendorChunkPlugin()],
  server: {
    port: 3000,
  },
});
