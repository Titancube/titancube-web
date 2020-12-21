import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import NotFound from '../views/NotFound.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    meta: {
      title: 'Titancube'
    }
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue'),
    meta: {
      title: 'Titancube - About'
    }
  },
  {
    path: '/Works',
    name: 'Works',
    component: () => import(/* webpackChunkName: "404" */ '../views/Works.vue')
  },
  {
    path: '*',
    name: 'NotFound',
    component: NotFound
  },
  // ANCHOR - ADMINS
  {
    path: '/xjalsjf',
    name: 'Login',
    component: () => import(/* webpackChunkName: "Login" */ '../views/Admin/Login.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
