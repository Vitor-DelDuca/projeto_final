import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue';
import About from '../views/About.vue';
import ListUsers from '../views/ListUsers.vue';
import Login from '../views/Login.vue';
import Register from '../views/Register.vue';
import Feed from '../views/Feed.vue';

export const routerHistory = createWebHistory()
export const router = createRouter({
  history: routerHistory,
  strict: true,
  routes: [
    {
      path: '/',
      component: Home
    },
    {
      path: '/about',
      component: About
    },
    {
        path: '/listusers',
        component: ListUsers
    },
    {
      path: '/login',
      component: Login
    },
    {
      path: '/register',
      component: Register
    },
    {
        path: '/feed',
        component: Feed
      }
  ]
})

export default router;