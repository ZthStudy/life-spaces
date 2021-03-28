/*
 * @Description:
 * @version: 1.0.0
 * @Author: zhangtianhou
 * @Date: 2021-03-28 15:13:11
 * @LastEditors: zhangtianhou
 * @LastEditTime: 2021-03-28 15:19:45
 */
import styleImport from "vite-plugin-style-import";

export function configStyleImportPlugin() {
  const pwaPlugin = styleImport({
    libs: [
      {
        libraryName: "ant-design-vue",
        esModule: true,
        resolveStyle: (name) => {
          return `ant-design-vue/es/${name}/style/index`;
        },
      },
    ],
  });
  return pwaPlugin;
}
