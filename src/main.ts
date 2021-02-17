import { createApp } from "vue";
import APP from "./APP.vue";
import router from "./router";
import "./styles/index.scss";

const app = createApp(APP);

app.use(router);

app.mount("#app");
