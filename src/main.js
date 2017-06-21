import Vue from 'vue'
import App from './App.vue'
import Objeto from './components/objeto.vue'
import crearObjeto from './components/crearObjeto.vue'
import eliminarObjeto from './components/eliminarObjeto.vue'
import editarObjeto from './components/editarObjeto.vue'
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
      component: Objeto
    },
    {
      name: 'CrearObjeto',
      path: '/crearobjeto',
      component: crearObjeto
    },
    {
      name: 'EliminarObjeto',
      path: '/eliminarObjeto',
      component: eliminarObjeto
    },
    {
      name: 'EditarObjeto',
      path: '/editarObjeto',
      component: editarObjeto
    }
  ]
})

new Vue({
  router,
  el: '#app',
  render: h => h(App)
})
