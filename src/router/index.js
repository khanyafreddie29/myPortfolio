import { createRouter, createWebHistory } from 'vue-router'
import Portfolio from '@/views/Portfolio.vue'
import NotFound from '@/components/NotFound.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', component: Portfolio },
    { path: '/:pathMatch(.*)*', component: NotFound },
  ]
})

export default router