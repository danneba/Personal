import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import { Icons } from "./components/icons/icons";
import Unicon from "vue-unicons";
Unicon.add(Icons);

createApp(App).use(Unicon).mount("#app");
