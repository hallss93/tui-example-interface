import Vue from "vue";
import App from "./App/index.vue";
import "./registerServiceWorker";
import router from "./router";
import store from "./store";
import "./assets/styles/tailwind.css";
import "./plugins/vue-mq";

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
