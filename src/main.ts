import "windi.css";

import { createApp } from "vue";
import APP from "./APP.vue";

import { setupRouter } from "@/router";

import "./styles/index.scss";
// import Antd from "ant-design-vue";
// import "ant-design-vue/dist/antd.css";

const app = createApp(APP);

setupRouter(app);

console.log({ meta: import.meta });

// app.use(Antd);
app.mount("#app");
