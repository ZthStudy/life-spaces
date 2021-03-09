/*
 * @Description: 
 * @version: 1.0.0
 * @Author: zhangtianhou
 * @Date: 2021-03-09 11:10:40
 * @LastEditors: zhangtianhou
 * @LastEditTime: 2021-03-09 13:40:18
 */
import type { Plugin } from 'vite';

import windiCSS from 'vite-plugin-windicss';

export function configWindiCssPlugin(): Plugin[] {
  return windiCSS({
    safelist: 'no-select',
    preflight: {
      enableAll: true,
    },
  });
}
