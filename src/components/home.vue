<template lang="html">
  <div class="container">
    <label for="nombre">Nombre: </label>
    <input type="text" name="nombre" v-model="user.nombre" disabled>

    <label for="username">Username: </label>
    <input type="text" name="username" v-model="user.username" disabled>

    <label for="pass">Password: </label>
    <input type="text" name="password" v-model="user.pass" disabled>

    <label for="ocupacion">Previa Ocupacion: </label>
    <input type="text" name="ocupacion" v-model="user.ocupacion" disabled>

    <label for="fecha">Fecha de Nacimiento: </label>
    <input type="text" name="fecha" v-model="user.fecha" disabled>

    <label for="pais">Pais de Origen: </label>
    <input type="text" name="pais" v-model="user.pais" disabled>

    <label for="religion">Creencias religiosas: </label>
    <input type="text" name="religion" v-model="user.religion" disabled>

    <label for="hechizos">Hechizos aprendidos: </label>
    <input type="text" name="hechizos" v-model="user.hechizos">
    <router-link to="/agregarhechizo">
      <span class="psw"><a class="flow-text">Agregar hechizo</a></span>
    </router-link>

    <label for="amigos">Lista de amigos: </label>
    <input type="text" name="amigos" v-model="user.amigos">
    <router-link to="/agregaramigo">
      <span class="psw"><a class="flow-text">Agregar amigo</a></span>
    </router-link>
  </div>
</template>

<script>
export default {
  data(){
    return{
      user:{
        nombre: "",
        username: "",
        pass:"",
        ocupacion: "",
        fecha: "",
        pais: "",
        religion: "",
        hechizos:"",
        amigos:""
      }
    }
  }
}
</script>

<style lang="css">
</style>
