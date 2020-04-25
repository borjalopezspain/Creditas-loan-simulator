import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home/Home.vue'
import LoanForm from '../views/LoanForm/LoanFormPage.vue'
import ContactForm from '../views/ContactForm/ContactFormPage.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/loanform',
    name: 'LoanForm',
    component: LoanForm
  },
  {
    path: '/contact',
    name: 'ContactForm',
    component: ContactForm
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
