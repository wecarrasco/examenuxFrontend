<template lang="html">
  <form>

    <div class="container">
      <label for="username">Username: </label>
      <input type="text" name="username" class="username" placeholder="Ingrese Usuario" required v-model="user.username">

      <label for="password">Password:</label>
      <input type="text" name="password" class="password" placeholder="Ingrese Contraseña" required v-model="user.pass">

      <a class="waves-effect waves-light btn" @click="clickLogin">Log In</a>
      <router-link to="/signup">
        <span class="psw"><a class="flow-text">Sign Up</a></span>
      </router-link>
    </div>
  </form>
</template>

<script>
import sweetAlert from 'sweetalert'
import baseUrl from '../../config'
export default {
  data(){
    return{
      user:{
        username:"",
        pass:""
      }
    }
  },
  methods:{
    clickLogin: function(){
      if (this.user.username == "" || this.user.pass == "") {
        sweetAlert({
          title: "Ohh No!...",
          text:  "Algo esta mal!...Ingrese Usuario y Contraseña!",
          type:  "error",
        });
      }else{
        this.$http.post(`${baseUrl.uri}/monasterio/login`, this.user).then((res)=>{
          if (res.body.success === true) {
            localStorage.setItem("username", this.user.username);
            sweetAlert({
              title: "LogIn",
              text:  "Bienvenido "+this.user.username+"!",
              type:  "success",
            });
            this.$router.push("/home");
            this.user.username="";
            this.user.pass="";
          }else if (res.body.success === false) {
            sweetAlert({
              title: "Ohh No!...",
              text:  "Algo esta mal!... Usuario o Contraseña incorrectos!",
              type:  "error",
            });
          }
        })
      }

    }
  }
}
</script>

<style lang="css">
</style>
