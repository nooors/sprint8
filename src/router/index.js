import Vue from "vue";
import VueRouter from "vue-router";

import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/starships",
    name: "Starships",
    component: () =>
      import(/* webpackChunkName: "starships" */ "../views/Starships.vue"),
  },
  {
    path: "/starships/starship/:name",
    name: "Starship",
    component: () =>
      import(/* webpackChunkName: "starships" */ "../views/Starship.vue"),
  },
  {
    path: "/login",
    name: "Login",
    component: () =>
      import(/* webpackChunkName: "login" */ "../views/Login.vue"),
  },
  {
    path: "/sign",
    name: "Sign",
    component: () => import(/* webpackChunkName: "sign" */ "../views/Sign.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
