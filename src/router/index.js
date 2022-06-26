import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: Home,
  },
  {
    path: "/login",
    name: "Login",
    component: () =>
      import(/* webpackChunkName: "login" */ "../views/Login.vue"),
  },
  {
    path: "/addpassword",
    name: "AddPassword",
    component: () =>
      import(/* webpackChunkName: "AddPassword" */ "../views/AddPassword.vue"),
  },
  {
    path: "/editpassword",
    name: "EditPassword",
    component: () =>
      import(
        /* webpackChunkName: "EditPassword" */ "../views/EditPassword.vue"
      ),
  },
  {
    path: "/passwordlist",
    name: "PasswordList",
    component: () =>
      import(
        /* webpackChunkName: "passwordlist" */ "../views/PasswordList.vue"
      ),
  },

  {
    path: "/register",
    name: "register",
    component: () =>
      import(/* webpackChunkName: "register" */ "../views/Register.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
