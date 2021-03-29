/*
 * @Description:
 * @version: 1.0.0
 * @Author: zhangtianhou
 * @Date: 2021-03-09 11:13:44
 * @LastEditors: zhangtianhou
 * @LastEditTime: 2021-03-27 22:22:51
 */
import type { Plugin } from "vite";
import { configWindiCssPlugin } from "./windicss";
import { configStyleImportPlugin } from './styleImport';
import vue from "@vitejs/plugin-vue";

const createVitePlugins = () => {
  const vitePlugins: (Plugin | Plugin[])[] = [
    // have to
    vue(),
  ];
  // vite-plugin-windicss
  vitePlugins.push(configWindiCssPlugin());
  // vite-plugin-style-import
  vitePlugins.push(configStyleImportPlugin());

  return vitePlugins;
};

export { createVitePlugins };
