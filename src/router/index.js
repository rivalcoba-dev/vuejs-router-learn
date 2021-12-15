import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
    props: true,
  },
  {
    path: "/details/:slug",
    name: "DestinationDetails",
    component: () =>
      import(
        /* webpackChunkName: "destinationDetails" */ "../views/DestinationDetails.vue"
      ),
    props: true,
  },
];

const router = new VueRouter({
  // Manejo de las rutas del navegador
  mode: "history",
  // Creando nombre de link activo
  linkExactActiveClass: "itgam-link-active-class",
  routes,
});

export default router;
