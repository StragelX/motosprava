import { createRouter, createWebHistory } from "vue-router";
import Home from "@/views/Home.vue";
import Detail from "@/views/Detail.vue";
import AboutUs from "@/views/AboutUs.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/aboutUs",
    name: "About Us",
    component: AboutUs,
  },
  {
    path: "/services/:id",
    name: "Detail",
    component: Detail,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
  linkActiveClass: "!border-primary",
  scrollBehavior(to, from, savedPosition) {
    return { top: 0 };
  },
});

export default router;
