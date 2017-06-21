<template lang="html">
  <form>
    <div class="container">
      <label for="nombre">Nombre: </label>
      <input type="text" name="nombre" required v-model="user.nombre">

      <label for="username">Username: </label>
      <input type="text" name="username" required v-model="user.username">

      <label for="pass">Password: </label>
      <input type="text" name="password" required v-model="user.pass">

      <label for="ocupacion">Previa Ocupacion: </label>
      <input type="text" name="ocupacion" required v-model="user.ocupacion">

      <label for="fecha">Fecha de Nacimiento: </label>
      <input type="text" name="fecha" required v-model="user.fecha">

      <label for="pais">Pais de Origen: </label>
      <input type="text" name="pais" required v-model="user.pais">

      <label for="religion">Creencias religiosas: </label>
      <input type="text" name="religion" required v-model="user.religion">

      <a class="waves-effect waves-light btn"  @click="signup">Sign Up</a>
    </div>
  </form>
</template>

<script>
import baseUrl from '../../config'
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
        religion: ""
      }
    }
  },
  methods:{
    signup: function(){
      this.$http.post(`${baseUrl.uri}/monasterio/createhechicero`, this.user).then((res)=>{
        if (res.body.success === true) {
          sweetAlert({
            title: "Genial!",
            text:  "Empleado creado con exito!",
            type:  "success",
          });
        }
      })
    }
  }
}
</script>

<style lang="css">
</style>
