import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'
import fs from 'fs'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, (process as any).cwd(), '');
  return {
    plugins: [
      react(),
      {
        name: 'cloudflare-dev-proxy',
        configureServer(server) {
          server.middlewares.use('/api/ask-ai', async (req, res, next) => {
            if (req.method === 'POST') {
              let body = '';
              req.on('data', chunk => body += chunk);
              req.on('end', async () => {
                try {
                  // Dynamically import the Cloudflare function so we use the exact same logic
                  // We use a dynamic import with a cache buster to ensure it gets the latest version
                  const modulePath = path.resolve(__dirname, './functions/api/ask-ai.ts');
                  
                  // In Vite dev server, we can use Vite's SSR module runner to safely load the TS file
                  const { onRequestPost } = await server.ssrLoadModule(modulePath);
                  
                  // Mock the Cloudflare context object
                  const context = {
                    request: {
                      json: async () => JSON.parse(body)
                    },
                    env: {
                      // Pass the AI Studio API key to the function
                      GEMINI_API_KEY: env.API_KEY || env.GEMINI_API_KEY
                    }
                  };

                  const cfResponse = await onRequestPost(context);
                  const responseText = await cfResponse.text();

                  res.statusCode = cfResponse.status;
                  res.setHeader('Content-Type', 'application/json');
                  res.end(responseText);
                } catch (e: any) {
                  console.error("Dev Proxy Error:", e);
                  res.statusCode = 500;
                  res.end(JSON.stringify({ error: e.message }));
                }
              });
            } else {
              next();
            }
          });
        }
      }
    ],
    define: {
      // Removed insecure API key injection
    },
  }
})
