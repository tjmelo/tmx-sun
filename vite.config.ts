import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { federation } from '@module-federation/vite';
import dotenv from 'dotenv'

dotenv.config({ path: `.env.${process.env.NODE_ENV}` })

import packageJson from './package.json'
const deps = packageJson.dependencies

export default defineConfig({
  plugins: [
    react(),
    federation({
      name: 'TmxHost ',
      remotes: {
        TmxMercury: process.env.VITE_REMOTE_TMX_MERCURY_PATH ?? '',
        TmxMoon: process.env.VITE_REMOTE_TMX_MOON_PATH ?? '',
        TmxEarth: process.env.VITE_REMOTE_TMX_EARTH_PATH ?? '',
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
});
