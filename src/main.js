import Vue from 'vue'
import App from './App.vue'
import Hechicero from './components/hechicero.vue'
import editarHechicero from './components/editarHechicero.vue'
import signup from './components/signup.vue'
import home from './components/home.vue'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'

Vue.use(VueResource)
Vue.use(VueRouter)

Vue.http.options.credentials = true;

const router = new VueRouter({
  routes:[
    {
      name: 'LogIn',
      path: '/',
      component: Hechicero
    },
    {
      name: 'EditarHechicero',
      path: '/editarhechicero',
      component: editarHechicero
    },
    {
      name: 'signup',
      path: '/signup',
      component: signup
    },
    {
      name: 'home',
      path: '/home',
      component: home
    }
  ]
})

new Vue({
  router,
  el: '#app',
  render: h => h(App)
})
