import { defineConfig } from 'vite';
import { dependencies } from './package.json';
import react from '@vitejs/plugin-react';
import { splitVendorChunkPlugin } from 'vite';
import svgr from 'vite-plugin-svgr';
import viteCompression from 'vite-plugin-compression';
function renderChunks(deps) {
  let chunks = {};
  Object.keys(deps).forEach((key) => {
    if (['react', 'react-router-dom', 'react-dom'].includes(key)) return;
    chunks[key] = [key];
  });
  return chunks;
}
export default defineConfig({
  plugins: [svgr(), react(), splitVendorChunkPlugin(), viteCompression()],
  server: {
    port: 3000,
  },
  build: {
    sourcemap: false,
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-router-dom', 'react-dom'],
          ...renderChunks(dependencies),
        },
      },
    },
  },
});
