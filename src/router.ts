import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
import { useLoginStore } from 'modules/login/store/login-store'

import BookingPage from 'modules/booking/BookingPage.vue'

const routes: RouteRecordRaw[] = [
  {
    path: '/login',
    name: 'login-page',
    meta: {
      allowAnonymous: true,
    },
    component: () => import('modules/login/LoginPage.vue'),
  },
  {
    path: '/booking',
    name: 'booking-page',
    component: BookingPage,
  },
  {
    path: '/',
    redirect: '/booking',
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
})

router.beforeEach((to) => {
  const store = useLoginStore()

  if (!to.meta.allowAnonymous && !store.loggedIn) {
    return '/login'
  }

  else if (to.name === 'login-page' && store.loggedIn) {
    return '/'
  }
})

export default router