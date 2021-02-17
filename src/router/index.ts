/*
 * @Description:
 * @version: 1.0.0
 * @Author: zhangtianhou
 * @Date: 2021-02-15 11:21:05
 * @LastEditors: zhangtianhou
 * @LastEditTime: 2021-02-17 10:29:41
 */
import { createRouter, createWebHashHistory } from "vue-router";
import JsList from "@/components/Main/JsList/index.vue";
import CssList from "@/components/Main/CssList/index.vue";

const routes = [
  { path: "/js", component: JsList },
  { path: "/css", component: CssList },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
