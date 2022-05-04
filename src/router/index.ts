import { ref } from "vue";
import { createRouter, createWebHashHistory, createWebHistory, RouteRecordRaw } from "vue-router";
import { getAuth, User } from "@firebase/auth";
import { onAuthStateChanged } from "firebase/auth";

import * as API from "../../API";
import Home from "../views/Home.vue";
import Login from "../views/Login.vue";
import Profile from "../views/Profile.vue";
import Stats from "../views/Stats.vue";
const routes: Array<RouteRecordRaw> = [
  {
    path: "/login",
    name: "Login",
    component: Login,
  },
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/Profile",
    name: "Profile",
    component: Profile,
  },
  {
    path: "/Stats",
    name: "Stats",
    component: Stats,
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export const currentUser = ref<(User & { username: string }) | null>(null);

const getCurrentUser = () => {
  const auth = getAuth();
  return new Promise((resolve, reject) => {
    const unsubscribe = onAuthStateChanged(
      auth,
      async user => {
        if (!currentUser.value) currentUser.value = user as any;
        currentUser.value = user && {
          ...user,
          username: await API.getUsername(),
        };
        unsubscribe();
        resolve(currentUser.value);
      },
      reject
    );
  });
};

router.beforeEach(async (to, from, next) => {
  if (!(await getCurrentUser()) && to.name != "Login") next("/login");
  else next();
});

export default router;
