/*
 * @Description:
 * @version: 1.0.0
 * @Author: zhangtianhou
 * @Date: 2021-02-15 11:21:05
 * @LastEditors: zhangtianhou
 * @LastEditTime: 2021-03-11 14:03:29
 */
import type { RouteRecordRaw } from "vue-router";
import type { App } from "vue";
import { createRouter, createWebHashHistory } from "vue-router";
import { basicRoutes } from "./routes";



const router = createRouter({
  history: createWebHashHistory(),
  routes: basicRoutes as RouteRecordRaw[],
  scrollBehavior: () => ({ left: 0, top: 0 }),
});

const setupRouter = (app: App<Element>) => {
  app.use(router);
};

export { setupRouter };

export default router;
