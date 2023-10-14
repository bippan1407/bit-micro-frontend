import { createApp } from "vue";
import App from "./my-app.vue";

import router from './router'
import {pinia} from "@my-org/my-scope.common.store";

const app = createApp(App)

app.use(pinia)
app.use(router)
app.mount("#app");
