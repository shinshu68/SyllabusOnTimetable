import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    // {
    //   path: '/about',
    //   name: 'about',
    //   // route level code-splitting
    //   // this generates a separate chunk (about.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    //   component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    // },
    {
      path: '/:school',
      name: 'school',
      component: () => import('./views/School.vue')
    },
    {
      path: '/:school/:year',
      name: 'year',
      component: () => import('./views/Year.vue')
    },
    {
      path: '/:school/:year/:class',
      name: 'class',
      component: () => import(`./views/Class.vue`)
    }
  ]
})
