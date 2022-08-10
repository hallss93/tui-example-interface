import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: "/",
    name: "home",
    component: () =>
      import(/* webpackChunkName: "HomeView" */ "../views/HomeView.vue"),
  },
];

const router = new VueRouter({
  routes,
});

export default router;
