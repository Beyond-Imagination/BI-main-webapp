import { createRouter, createWebHistory } from 'vue-router'

import Home from '@/views/Home.vue'
import Introduce from '@/views/Introduce.vue'
import Members from '@/views/Members.vue'
import Projects from '@/views/Projects.vue'
import History from '@/views/History.vue'
import Photo from '@/views/Photo.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/Introduce',
      name: 'Introduce',
      component: Introduce
    },
    {
      path: '/Members',
      name: 'Members',
      component: Members
    },
    {
      path: '/Projects',
      name: 'Projects',
      component: Projects
    },
    {
      path: '/History',
      name: 'History',
      component: History
    },
    {
      path: '/Photo',
      name: 'Photo',
      component: Photo
    }
  ],
})

export default router
