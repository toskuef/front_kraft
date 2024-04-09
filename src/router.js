import { createRouter, createWebHistory } from 'vue-router'
import MainPage from './components/MainPage.vue'
import SecondPage from "@/components/SecondPage.vue";
import CustomerDetailPage from "@/components/CustomerDetailPage.vue";
import CustomerList from "@/components/CustomerList.vue";

export default createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      component: CustomerList,
    },
      {
      path: '/second',
      component: SecondPage,
    },
      {
      path: '/customers/:customer_id',
      component: CustomerDetailPage,
    }
  ]
})