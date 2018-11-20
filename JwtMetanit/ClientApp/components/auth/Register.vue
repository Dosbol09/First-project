<template >
  <div class="app">
    <form class="login" @submit.prevent="Register">
      <h1>Sign in</h1>
      <div>
        <label>User name</label>
        <input required v-model="username" type="text" placeholder="Username" />
      </div>
      <div>
        <label>Password</label>
        <input required v-model="password" type="password" placeholder="Password" />
      </div>
      <div>
        <label>Re-Password</label>
        <input required v-model="repassword" type="password" placeholder="Re-Password">
      </div>
        <label >{{ error}}</label>
      <hr />
      <button type="submit">Register</button>
    </form>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  data(){
    return{
      username:'',
      password:'',
      repassword:'',
      role:'user',
      error:''
    }
  },
  methods:{
    Register(){
      var login = this.username;
      var password = this.password;
      var repassword = this.repassword;
      var role = this.role;
      if(password==repassword){
      axios.post('/register', {login, password, role})
      .then(response=>{
        console.log(response)
      })
      .catch(error=>{
        console.log(error)
      })}
      else{
      this.error="Error"
      }
    }
  }
}
</script>

<style >
</style>
