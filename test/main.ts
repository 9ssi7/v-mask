import mask from "../src";
import { createApp } from "vue";
import App from "./App.vue";

const app = createApp(App);
app.use(mask);
app.mount("#app");
