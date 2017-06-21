<template lang="html">
  <form>

    <div class="container">
      <label for="username">Username: </label>
      <input type="text" name="username" class="username" placeholder="Ingrese Usuario" required>

      <label for="password">Password:</label>
      <input type="text" name="password" class="password" placeholder="Ingrese Contraseña" required>

      <a class="waves-effect waves-light btn" @click="clickLogin">Log In</a>
    </div>
  </form>
</template>

<script>
var sweetAlert = require('sweetalert');
export default {
  data(){
    return{

    }
  },
  methods:{
    clickLogin: function(){
      console.log("Log In Hola Mundo!");
      sweetAlert({
        title: "Perfecto!",
        text:  "LogIn",
        type:  "success",
      });
    }
  }
}
</script>

<style lang="css">
</style>
