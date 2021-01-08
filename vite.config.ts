import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import { defineColors } from "./src/styles/config";

export default defineConfig({
  plugins: [vue()],
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: defineColors,
      },
    },
  },
});
