import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000, // now server runs on `https://localhost:3000`
  },
  base: '/deploy-vite-react-gh-pages/', // Change this to your GitHub repo name
});
