import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { VitePWA } from 'vite-plugin-pwa'

// https://vite.dev/config/
export default defineConfig({
  base: '/photobooth/',
  plugins: [
    react(),
    tailwindcss(),
    VitePWA({
      registerType: 'autoUpdate',
      manifestFilename: 'manifest.json',
      manifest: {
        id: '/photobooth/',
        name: '인생네컷 프레임 미리보기',
        short_name: '인생네컷',
        description: '웹에서 네컷 사진을 가상으로 조합하고 꾸며보세요',
        lang: 'ko',
        dir: 'ltr',
        theme_color: '#000000',
        background_color: '#ffffff',
        display: 'standalone',
        start_url: '/photobooth/',
        scope: '/photobooth/',
        categories: ['entertainment', 'photo'],
        icons: [
          {
            src: '/photobooth/icon-192.png',
            sizes: '192x192',
            type: 'image/png',
            purpose: 'any'
          },
          {
            src: '/photobooth/icon-512.png',
            sizes: '512x512',
            type: 'image/png',
            purpose: 'any'
          }
        ]
      },
      workbox: {
        globPatterns: ['**/*.{js,css,html,ico,png,svg}'],
        runtimeCaching: [
          {
            urlPattern: /^https:\/\/cdn\.jsdelivr\.net\/.*/i,
            handler: 'CacheFirst',
            options: {
              cacheName: 'cdn-cache',
              expiration: {
                maxEntries: 10,
                maxAgeSeconds: 60 * 60 * 24 * 365
              }
            }
          }
        ]
      }
    })
  ],
})
