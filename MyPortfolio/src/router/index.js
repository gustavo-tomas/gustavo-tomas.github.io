import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      meta: {
        title: "MyPortfolio",
      },
      component: () => import("@/views/HomeView.vue"), // lazy-loaded
    },
    {
      path: "/projects",
      name: "projects",
      meta: {
        title: "MyProjects",
      },
      component: () => import("@/views/ProjectsView.vue"),
    },
    {
      path: "/renders",
      name: "renders",
      meta: {
        title: "MyRenders",
      },
      component: () => import("@/views/RendersView.vue"),
    },
  ],
});

router.beforeEach((to, from, next) => {
  document.title = `${to.meta.title}`;
  next();
});

export default router;
