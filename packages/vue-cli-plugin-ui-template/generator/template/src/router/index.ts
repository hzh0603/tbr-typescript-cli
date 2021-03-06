import Vue from 'vue';
import VueRouter, { RouteConfig } from 'vue-router';
import Home from '../views/home';

Vue.use(VueRouter);

const routes: RouteConfig[] = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    redirect: '/adminLayout/home'
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/about'),
  },
  {
    path: '/adminLayout',
    name: 'adminLayout',
    component: () => import('../layouts/adminLayout'),
    children: [
      {
        path: 'home',
        name: 'adminHome',
        component: Home
      },
      {
        path: 'error/:type',
        name: 'error',
        component: () => import('../views/error')
      }
    ]
  },
  {
    path: '*',
    redirect: '/adminLayout/error/404'
  }
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
