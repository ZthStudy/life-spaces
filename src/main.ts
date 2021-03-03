import { createApp } from "vue";
import APP from "./APP.vue";
import router from "./router";
import "./styles/index.scss";
import Antd from "ant-design-vue";
import "ant-design-vue/dist/antd.css";
const app = createApp(APP);


app.use(router);
app.use(Antd);
app.mount("#app");
