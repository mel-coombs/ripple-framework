import vue from '@vitejs/plugin-vue'
import dts from 'vite-dts'
import path from 'path'
import vueSvgPlugin from 'vite-plugin-vue-svg'
import { defineConfig } from 'vite'
import { createSvgIconsPlugin } from 'vite-plugin-svg-icons'

// https://vitejs.dev/config/
// https://vitejs.dev/guide/build.html#library-mode
export default defineConfig({
  resolve: {
    alias: {
      '/@': path.resolve(__dirname, './src')
    }
  },
  plugins: [
    vue(),
    dts(),
    createSvgIconsPlugin({
      iconDirs: [path.resolve(process.cwd(), 'src/assets/icons/core')],
      symbolId: 'rpl-icon--[name]'
    }),
    vueSvgPlugin({ defaultExport: 'component' })
  ],
  build: {
    emptyOutDir: false,
    lib: {
      entry: path.resolve(__dirname, 'src/index.ts'),
      name: 'rpl',
      fileName: (f) => `rpl-lib.${f}.js`
    },
    // outDir: './dist/lib',
    sourcemap: false,
    // Reduce bloat from legacy polyfills.
    target: 'esnext',
    // Leave minification up to applications.
    minify: false,
    rollupOptions: {
      external: ['vue'],
      output: {
        globals: {
          vue: 'Vue'
        }
      }
    }
  }
})
