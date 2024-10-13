import { createApp } from "vue";
import "./assets/style/reset.css";
import "./style.css";
import App from "./App.vue";
import router from "./router";
import "virtual:svg-icons-register";
import { createPinia } from "pinia";
import icon from "./plugins/icon";
import 'element-plus/dist/index.css'

createApp(App).use(createPinia()).use(router).use(icon).mount("#app");
