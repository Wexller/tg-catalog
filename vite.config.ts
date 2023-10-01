import { defineConfig, loadEnv } from 'vite';
import vue from '@vitejs/plugin-vue';

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  process.env = { ...process.env, ...loadEnv(mode, process.cwd()) };

  return {
    plugins: [vue()],
    root: './',
    base: process.env.VITE_BASE_PREFIX,
    build: {
      outDir: process.env.VITE_OUT_DIR,
    },
  };
});
