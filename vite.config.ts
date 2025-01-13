import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { federation } from '@module-federation/vite';

import packageJson from './package.json'
const deps = packageJson.dependencies

export default defineConfig(() => {

  return {
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
    build: {
      target: 'chrome89',
    },
    server: {
      watch: {
        usePolling: true
      }
    },
  };
});
