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
    path: "/brazil",
    name: "Brazil",
    component: () =>
      import(/* webpackChunkName: "brazil" */ "../views/Brazil.vue"),
  },
  {
    path: "/panama",
    name: "Panama",
    component: () =>
      import(/* webpackChunkName: "panama" */ "../views/Panama.vue"),
  },
  {
    path: "/jamaica",
    name: "Jamaica",
    component: () =>
      import(/* webpackChunkName: "jamaica" */ "../views/Jamaica.vue"),
  },
  {
    path: "/hawaii",
    name: "Hawaii",
    component: () =>
      import(/* webpackChunkName: "hawaii" */ "../views/Hawaii.vue"),
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
    path: "/details",
    name: "DestinationDetails",
    component: () =>
      import(
        /* webpackChunkName: "destinationDetails" */ "../views/DestinationDetails.vue"
      ),
  },
];

const router = new VueRouter({
  // Creando nombre de link activo
  linkExactActiveClass: "itgam-link-active-class",
  routes,
});

export default router;
