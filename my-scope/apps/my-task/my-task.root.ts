import { createApp } from "vue";
import App from "./my-task.vue";
import { pinia } from "@my-org/my-scope.common.store";

const app = createApp(App);

app.use(pinia);
app.mount("#app");
