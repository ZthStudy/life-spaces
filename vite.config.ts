import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import { defineColors } from "./src/styles/config";
import { resolve } from "path";

function pathResolve(dir: string) {
  return resolve(__dirname, ".", dir);
}

export default defineConfig({
  plugins: [vue()],
  alias: {
    "@": pathResolve("src"),
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: defineColors,
      },
    },
  },
});
