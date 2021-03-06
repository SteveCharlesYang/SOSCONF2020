import Vue from "vue";
import VueRouter from "vue-router";

import VueLayers from "vuelayers";
import "vuelayers/lib/style.css"; // needs css-loader

Vue.use(VueLayers);

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: () => import("../views/Home.vue")
  },
  {
    path: "/reg",
    name: "reg",
    component: () => import("../views/Registration.vue")
  },
  {
    path: "/coop",
    name: "coop",
    component: () => import("../views/Cooperation.vue")
  },
  // {
  //   path: "/sub",
  //   name: "sub",
  //   component: () => import("../views/Sub.vue")
  // },
  /*
  {
    path: '/sub/:sub',
    name: 'sub',
    component: () => import('../views/Sub.vue')
  },
  */
  {
    path: "/events",
    name: "events",
    component: () => import("../views/Events.vue")
  },
  {
    path: "/about",
    name: "about",
    component: () => import("../views/About.vue")
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
