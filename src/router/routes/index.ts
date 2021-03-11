/*
 * @Description:
 * @version: 1.0.0
 * @Author: zhangtianhou
 * @Date: 2021-03-11 10:44:27
 * @LastEditors: zhangtianhou
 * @LastEditTime: 2021-03-11 16:40:44
 */

import type { AppRouteRecordRaw } from "../types";
import { PageEnum } from "@/enums/pageEnum";

// import JsList from "@/components/Main/JsList/index.vue";
// import CssList from "@/components/Main/CssList/index.vue";
// import Write from "@/components/Main/Write/index.vue";

// const routes = [
//   { path: "/js", component: JsList },
//   { path: "/css", component: CssList },
//   { path: "/write", component: Write },
// ];

const RootRoute: AppRouteRecordRaw = {
  path: "/",
  name: "Root",
  redirect: PageEnum.BASE_LOGIN,
  meta: {
    title: "Root",
  },
};

const LoginRoute: AppRouteRecordRaw = {
  path: "/login",
  name: "Login",
  component: () => import("@/views/sys/login/Login.vue"),
};

const basicRoutes = [RootRoute, LoginRoute];

export { basicRoutes };
