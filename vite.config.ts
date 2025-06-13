import { defineConfig } from 'vite';

export default defineConfig({
  base: '/test/', // This should match your repo name
  build: {
    outDir: 'docs'
  }
});