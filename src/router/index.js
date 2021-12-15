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
    path: "/details/:id",
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
