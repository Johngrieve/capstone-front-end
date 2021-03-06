import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import SignUp from "../views/SignUp.vue";
import LogIn from "../views/LogIn.vue";
import LogOut from "../views/LogOut.vue";
import AccountsIndex from "../views/AccountsIndex.vue";
import AccountsNew from "../views/AccountsNew.vue";
import AccountsShow from "../views/AccountsShow.vue";
import AccountsEdit from "../views/AccountsEdit.vue";
const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/about",
    name: "about",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ "../views/AboutView.vue"),
  },
  {
    path: "/signup",
    name: "signup",
    component: SignUp,
  },
  {
    path: "/login",
    name: "login",
    component: LogIn,
  },
  {
    path: "/logout",
    name: "logout",
    component: LogOut,
  },
  {
    path: "/accounts",
    name: "accounts-index",
    component: AccountsIndex,
  },
  {
    path: "/accounts/new",
    name: "accounts-new",
    component: AccountsNew,
  },
  {
    path: "/accounts/:id",
    name: "accounts-show",
    component: AccountsShow,
  },
  {
    path: "/accounts/:id/edit",
    name: "accounts-edit",
    component: AccountsEdit,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
