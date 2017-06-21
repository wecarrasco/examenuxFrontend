<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
import Hechicero from './components/hechicero.vue'
import editarHechicero from './components/editarHechicero.vue'
import home from './components/home.vue'

export default {
  name: 'app',
  components: {
    Hechicero,
    editarHechicero,
    home
  },
  mounted(){

  }
}

</script>

<style>

</style>
