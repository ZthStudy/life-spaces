/*
 * @Description:
 * @version: 1.0.0
 * @Author: zhangtianhou
 * @Date: 2021-03-09 11:13:44
 * @LastEditors: zhangtianhou
 * @LastEditTime: 2021-03-24 09:45:57
 */
import type { Plugin } from "vite";
import { configWindiCssPlugin } from "./windicss";
import vue from "@vitejs/plugin-vue";
import PurgeIcons from "vite-plugin-purge-icons";

const createVitePlugins = () => {
  const vitePlugins: (Plugin | Plugin[])[] = [
    // have to
    vue(),
  ];
  // vite-plugin-windicss
  vitePlugins.push(configWindiCssPlugin());
  // vite-plugin-purge-icons
  vitePlugins.push(PurgeIcons());

  return vitePlugins;
};

export { createVitePlugins };
