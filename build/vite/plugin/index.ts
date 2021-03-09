/*
 * @Description:
 * @version: 1.0.0
 * @Author: zhangtianhou
 * @Date: 2021-03-09 11:13:44
 * @LastEditors: zhangtianhou
 * @LastEditTime: 2021-03-09 13:32:00
 */
import type { Plugin } from "vite";
import { configWindiCssPlugin } from "./windicss";
import vue from "@vitejs/plugin-vue";

const createVitePlugins = () => {
  const vitePlugins: (Plugin | Plugin[])[] = [
    // have to
    vue(),
  ];
  // vite-plugin-windicss
  vitePlugins.push(configWindiCssPlugin());

  return vitePlugins
};

export { createVitePlugins };
