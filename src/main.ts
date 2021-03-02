import { createApp } from "vue";
import APP from "./APP.vue";
import router from "./router";
import "./styles/index.scss";
import "ant-design-vue/dist/antd.css";
import { Input, Button } from "ant-design-vue";

const app = createApp(APP);

app.use(router);
app.use(Input);
app.use(Button);

app.mount("#app");
