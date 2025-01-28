import react from '@vitejs/plugin-react';
import { defineConfig } from 'vitest/config';

export default defineConfig({
  plugins: [react()],
  server: {
    port: 80,
    middlewareMode: false
  },
  test: {
    env: {
      BABEL_ENV: 'test',
      NODE_ENV: 'test',
      PUBLIC_URL: '',
      TZ: 'UTC'
    },
    //TODO: change to 3
    retry: 0,
    environment: 'jsdom',
    globals: true,
    setupFiles: './tests/setupTests.jsx'
  }
});
