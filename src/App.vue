<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
import Objeto from './components/objeto.vue'
import crearObjeto from './components/crearObjeto.vue'
import eliminarObjeto from './components/eliminarObjeto.vue'
import editarObjeto from './components/editarObjeto.vue'

export default {
  name: 'app',
  components: {
    Objeto,
    crearObjeto,
    eliminarObjeto,
    editarObjeto
  },
  mounted(){

  }
}

</script>

<style>

</style>
