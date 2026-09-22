import { defineConfig } from 'vite'

// Note: @vitejs/plugin-react is optional. It provides React fast-refresh and JSX transformation
// enhancements. This project currently does not have @vitejs/plugin-react installed (not listed
// in package.json). Avoid importing a missing plugin to prevent build-time errors. If you add
// the plugin later, re-enable it here: import react from '@vitejs/plugin-react' and add to plugins.

export default defineConfig({
  server: {
    port: 3000,
  },
})
