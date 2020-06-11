import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import JianShu from "../views/JianShu.vue";
import CnBlog from "../views/cnblog.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/csdn",
    name: "CSDN",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ "../views/CSDN.vue")
  },{
    path: "/jianshu",
    name: "JIANSHU",
    component: JianShu
  },
  {
    path: "/cnblog",
    name: "cnblog",
    component: CnBlog
  }
];

const router = new VueRouter({
  // mode: "history",
  mode: process.env.IS_ELECTRON ? "hash" : "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
