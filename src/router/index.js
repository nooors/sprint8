import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Starships from "../views/Starships.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue"),
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
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
