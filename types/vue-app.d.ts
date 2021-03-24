/*
 * @Description:
 * @version: 1.0.0
 * @Author: zhangtianhou
 * @Date: 2021-03-24 11:26:13
 * @LastEditors: zhangtianhou
 * @LastEditTime: 2021-03-24 11:26:14
 */
declare module "*.vue" {
  import type { DefineComponent } from "vue";
  const component: DefineComponent<{}, {}, any>;
  export default component;
}
