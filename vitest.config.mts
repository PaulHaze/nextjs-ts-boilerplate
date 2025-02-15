import { defineConfig } from 'vitest/config';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  test: {
    environment: 'jsdom',
    globals: true,

    // ['**/*.{test,spec}.?(c|m)[jt]s?(x)'] <- default vite settings
    include: ['src/**/?(*.)(test).[jt]s?(x)'],

    alias: {
      '@/': new URL('./src/', import.meta.url).pathname,
    },
  },
});
