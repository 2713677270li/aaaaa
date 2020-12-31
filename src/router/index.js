import Vue from "vue";
import VueRouter from "vue-router";
// import Home from "../../views/Home.vue";
// import Sport from "../../views/Sport.vue";

//处理重复点击路由报错
const originalPush = VueRouter.prototype.push;
VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch((err) => err);
};

Vue.use(VueRouter);

let router = new VueRouter({
  // mode: "history",
  linkActiveClass: "is-active",
  routes: [
    // {
    //   path: "/login",
    //   name: "login",
    //   component: () => import("@/views/Login.vue"),
    // },
    {
      //路由地址
      path: "/home",
      name: "home",
      component: () => import("@/views/Home/Home.vue"),
    },
    {
      //路由地址
      path: "/player",
      name: "player",
      component: () => import("@/views/player"),
    },
    {
      //路由地址
      path: "/homeson",
      name: "homeson",
      component: () => import("@/views/Home/homeson.vue"),
    },
    {
      //路由地址
      path: "/hotsong",
      name: "Hotsong",
      component: () => import("@/views/Hotsong/Hotsong.vue"),
    },
    {
      //路由地址
      path: "/search",
      name: "search",
      component: () => import("@/views/Search/Search.vue"),
    },
    {
      path: "*",
      component: () => import("@/views/Home/Home.vue"),
    }
  ],
});




export default router;
