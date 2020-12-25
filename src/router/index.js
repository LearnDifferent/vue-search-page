import Vue from 'vue'
import VueRouter from 'vue-router'
import SearchPage from '../views/SearchPage'

Vue.use(VueRouter)

const routes = [
  {path: '/', redirect: '/search'},
  {path: "/search", component: SearchPage}


]

const router = new VueRouter({
  base: process.env.BASE_URL,
  routes
})

export default router
