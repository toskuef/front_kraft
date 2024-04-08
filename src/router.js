import { createRouter, createWebHistory } from 'vue-router'
import MainPage from './components/MainPage.vue'
import SecondPage from "@/components/SecondPage.vue";

export default createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      component: MainPage,
    },
      {
      path: '/second',
      component: SecondPage,
    }
  ]
})