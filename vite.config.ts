import { defineConfig } from "vite";
import { defineColors } from "./src/styles/config";
import { resolve } from "path";
import { createVitePlugins } from "./build/vite/plugin";

function pathResolve(dir: string) {
  return resolve(__dirname, ".", dir);
}

export default defineConfig({
  plugins: createVitePlugins(),
  resolve: {
    alias: {
      "@": pathResolve("src"),
      "#": pathResolve("types"),
    },
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: defineColors,
      },
      less: {
        modifyVars: {
          // Used for global import to avoid the need to import each style file separately
          // reference:  Avoid repeated references
          hack: `true; @import (reference) "${resolve('src/design/config.less')}";`,
        },
        javascriptEnabled: true,
      },
    },
  },
  server: {
    hmr: {
      overlay: true,
    },
    open: true,
  },
});
