import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "home",
    component: () => import(/* webpackChunkName: "home" */ "../pages/Home.vue"),
  },
  {
    path: "/grid",
    name: "grid",
    component: () => import(/* webpackChunkName: "grid" */ "../pages/Grid.vue"),
  },
  {
    path: "/gridarea",
    name: "gridarea",
    component: () =>
      import(/* webpackChunkName: "gridarea" */ "../pages/Gridarea.vue"),
  },
  {
    path: "/gridarea2",
    name: "gridarea2",
    component: () =>
      import(/* webpackChunkName: "gridarea2" */ "../pages/Gridarea2.vue"),
  },
  {
    path: "/wave",
    name: "wave",
    component: () => import(/* webpackChunkName: "wave" */ "../pages/Wave.vue"),
  },
  {
    path: "/collision",
    name: "collision",
    component: () =>
      import(/* webpackChunkName: "collision" */ "../pages/Collision.vue"),
  },
  {
    path: "/spining",
    name: "spining",
    component: () =>
      import(/* webpackChunkName: "spining" */ "../pages/Spining.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
