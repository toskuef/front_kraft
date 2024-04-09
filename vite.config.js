import {fileURLToPath, URL} from 'node:url'

import {defineConfig} from 'vite'
import vue from '@vitejs/plugin-vue'
import {VitePWA} from "vite-plugin-pwa";

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [
        vue(),
        VitePWA({
            registerType: 'autoUpdate',
            manifest: {
                name: 'Kraft',
                short_name: 'Kraft',
                description: 'ERP система (PWA версия)',
                theme_color: '#f8f9fa',
            },
            devOptions: {
                enabled: true
            }
        })

    ],
    resolve: {
        alias: {
            '@': fileURLToPath(new URL('./src', import.meta.url))
        }
    }
})
