import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import WindiCSS from 'vite-plugin-windicss';
import Components from 'unplugin-vue-components/vite';
import ViteComponents, {
  AntDesignVueResolver,
  ElementPlusResolver,
  VantResolver,
} from 'unplugin-vue-components/resolvers';
import path from 'path';
import process from 'process';
import fs from 'fs';

const version = +new Date();

function handleUpdateCache() {
  return {
    name: 'handleCache',
    closeBundle() {
      let currentPath = process.cwd();
      let indexFiles = `index_${version}`;
      let indexFiletypes = ['.js'];

      indexFiletypes.forEach((type) => {
        fs.copyFile(
          `${currentPath}/dist/assets/${indexFiles}${type}`,
          `${currentPath}/dist/assets/index${type}`,
          (err) => {
            if (err) throw err;
            console.log(
              `Custom handle event: ${currentPath}\\dist\\assets\\${indexFiles}${type} was copied to ${currentPath}\\dist\\assets\\index${type}`
            );
          }
        );
      });
    },
  };
}

// https://vitejs.dev/config/
export default defineConfig({
  base: '/none-chinese-a-year/',
  plugins: [
    vue(),
    WindiCSS(),
    Components({
      resolvers: [
        AntDesignVueResolver(),
        ElementPlusResolver(),
        VantResolver(),
      ],
    }),
    handleUpdateCache(),
  ],
  build: {
    manifest: false,
    cssCodeSplit: false,
    rollupOptions: {
      input: {
        index: path.resolve(__dirname, 'index.html'),
      },
      output: {
        entryFileNames: `assets/[name]_${version}.js`,
        chunkFileNames: `assets/[name]_${version}.js`,
        assetFileNames: `assets/index.[ext]`,
      },
    },
  },
});

// your plugin installation
