import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/sign',
      name: 'sign',
      component: () => import('../views/SignView.vue'),
      children: [
        {
          path: '',
          name: 'signin',
          component: () => import('../views/sign/SignInView.vue')
        },
        {
          path: 'signup',
          name: 'signup',
          component: () => import('../views/sign/SignUpView.vue')
        }
      ]
    }
  ]
})

export default router
