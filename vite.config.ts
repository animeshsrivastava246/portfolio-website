import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  css: {
    postcss: {
      plugins: [
        // No need to call tailwindcss() here anymore
        // Tailwind will be configured through postcss automatically
      ],
    },
  },
});
