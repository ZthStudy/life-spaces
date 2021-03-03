/*
 * @Description:
 * @version: 1.0.0
 * @Author: zhangtianhou
 * @Date: 2021-02-15 11:21:05
 * @LastEditors: zhangtianhou
 * @LastEditTime: 2021-03-03 15:12:52
 */
import { createRouter, createWebHashHistory } from "vue-router";
import JsList from "@/components/Main/JsList/index.vue";
import CssList from "@/components/Main/CssList/index.vue";
import Write from "@/components/Main/Write/index.vue";

const routes = [
  { path: "/js", component: JsList },
  { path: "/css", component: CssList },
  { path: "/write", component: Write },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
