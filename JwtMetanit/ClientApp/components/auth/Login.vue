<template v-if="!loggedIn">
  <div class="app">
    <form class="login" @submit.prevent="login">
      <h1>Sign in</h1>
      <div>
        <label>User name</label>
        <input required v-model="username" type="text" placeholder="admin" />
      </div>
      <div >


      <label>Password</label>
      <input required v-model="password" type="password" placeholder="admin" />
      </div>
      <hr />
      <button type="submit">Login</button>
    </form>
  </div>
</template>

<script>
  import qs from 'qs'
  import axios from 'axios'

  export default {

    data() {
      return {
        username: '',
        password: ''
      }
    },
    computed: {
   loggedIn() {
     return this.$store.getters.loggedIn
   }
 },
    methods: {
      login() {
        this.$store.dispatch('retriveToken',{
          username:this.username,
          password:this.password
        })
        .then(response=>{
          this.$router.push('/')
        })
      /*  const { username, password } = this
        axios.post('/token',



          qs.stringify({
            "grant_type": "password",
            "username": username,
            "password": password
          }),
          {
            headers: {
              'Content-Type': 'application/x-www-form-urlencoded'
            }
          })

          .then(
          response => {
            const token = response.data.access_token
            console.log(token)
          }
        ).catch(
          error => {
            conslo.log(error)
          }
        )*/


      }
    }
  }
  </script>
