import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { federation } from '@module-federation/vite';

import packageJson from './package.json'
const deps = packageJson.dependencies

export default defineConfig(({ mode }) => {
  const isProduction = mode === 'production'; // Check if in production mode

  return {
    base: isProduction ? '/https://tjmelo.github.io/tmx-sun/' : '/', // Conditional base
    plugins: [
      react(),
      federation({
        name: 'TmxHost ',
        remotes: {
          TmxMercury: 'TmxMercury@https://tjmelo.github.io/tmx-mercury/remoteEntry.js',
        },
        shared: {
          react: {
            requiredVersion: deps.react
          },
          'react-dom': {
            requiredVersion: deps['react-dom']
          },
        },
      }),
    ],
    server: {
      watch: {
        usePolling: true
      }
    },
    build: {
      target: 'chrome89',
    },
  };
});
