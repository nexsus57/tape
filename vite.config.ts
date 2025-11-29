import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  // Load env file based on `mode` in the current working directory.
  // Set the third parameter to '' to load all env regardless of the `VITE_` prefix.
  // Fix: Cast process to any to access cwd() as TypeScript definition for Node process might be missing
  const env = loadEnv(mode, (process as any).cwd(), '');
  return {
    plugins: [react()],
    define: {
      // Define process.env.API_KEY globally so the Google GenAI SDK can use it without crashing
      'process.env.API_KEY': JSON.stringify(env.API_KEY),
    },
  }
})
