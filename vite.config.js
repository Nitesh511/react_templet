// import { defineConfig } from 'vite';
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import jsconfigPaths from 'vite-jsconfig-paths';
import path from 'path';
import eslintPlugin from 'vite-plugin-eslint';
import { visualizer } from 'rollup-plugin-visualizer';
import timeReporter from 'vite-plugin-time-reporter';
import Inspect from 'vite-plugin-inspect';
import { VitePWA } from 'vite-plugin-pwa';
import dotenv from 'dotenv';
import dotenvExpand from 'dotenv-expand';

// ==============================||  CONFIGURATION SETTINGS ||============================== //
export default defineConfig(({ command }) => {
   const isServe = command === 'serve';
   const isBuild = command === 'build';

   // Load and expand environment variables
   const env = dotenv.config();
   dotenvExpand.expand(env);

   // Manually define environment variables to be used in client-side code
   const envVars = {
      'process.env.REACT_APP_VERSION': JSON.stringify(process.env.REACT_APP_VERSION),
      'process.env.GENERATE_SOURCEMAP': JSON.stringify(process.env.GENERATE_SOURCEMAP),
      'process.env.REACT_APP_BACKEND_DEV': JSON.stringify(process.env.REACT_APP_BACKEND_DEV),
      'process.env.REACT_APP_BACKEND_PROD': JSON.stringify(process.env.REACT_APP_BACKEND_PROD),
      'process.env.REACT_APP_NODE_ENV': JSON.stringify(process.env.REACT_APP_NODE_ENV)
   };

   //common configration for serve && build
   const config = {
      base: '/',
      clearScreen: true,
      plugins: [
         react(),
         jsconfigPaths(),
         eslintPlugin({
            cache: false,
            include: ['src/**/*.js', 'src/**/*.jsx', 'src/**/*.ts', 'src/**/*.tsx'],
            exclude: ['node_modules'],
            emitWarning: true,
            emitError: true
         }),
         timeReporter(),
         Inspect(),
         VitePWA({
            registerType: 'prompt',
            manifest: {
               name: 'setup',
               short_name: 'ssp',
               description: 'Kathmandu Nepal',
               theme_color: '#ffffff',
               icons: [
                  {
                     src: '1.png',
                     sizes: '192x192',
                     type: 'image/png'
                  },
                  {
                     src: '2.png',
                     sizes: '192x192',
                     type: 'image/png'
                  },
                  {
                     src: '3.png',
                     sizes: '192x192',
                     type: 'image/png'
                  }
               ]
            }
         })
      ],
      resolve: {
         alias: {
            '@src': path.resolve(__dirname, 'src')
         }
      },
      define: envVars
   };

   //development configration
   if (isServe) {
      Object.assign(config, {
         server: {
            open: true,
            port: 3000,
            process: import.meta.env,
            strictPort: true,
            hmr: {
               clientPort: 3000, // Ensure the client connects to the correct port
               overlay: true // Disable the server error overlay if desired
            }
         }
      });
   }

   //production configration
   if (isBuild) {
      Object.assign(config, {
         build: {
            target: 'esnext',
            outDir: 'dist',
            assetsDir: 'static',
            sourcemap: false,
            manifest: false
         },
         plugins: [
            ...config.plugins,
            visualizer({
               template: 'treemap', //sunburst Treemap Network
               open: true,
               gzipSize: true,
               brotliSize: true,
               filename: './build/analyse.html'
            })
         ]
      });
   }

   return config;
});