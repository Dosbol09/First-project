import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import qs from 'qs'
Vue.use(Vuex)

// TYPES
const MAIN_SET_COUNTER = 'MAIN_SET_COUNTER'

// STATE
const state = {
  counter: 1,
  token:localStorage.getItem('access_token') || null
}

// MUTATIONS
const mutations = {
  [MAIN_SET_COUNTER] (state, obj) {
    state.counter = obj.counter
  },
  retriveToken(state,token){
    state.token=token
  },
  destroyToken(state){
    state.token=null
  }
}

// ACTIONS
const actions = ({
  setCounter ({ commit }, obj) {
    commit(MAIN_SET_COUNTER, obj)
  },
  destroyToken(context){
    if(context.getters.loggedIn){
return new Promise(()=>{

      localStorage.removeItem('access_token')
      context.commit('destroyToken')

    })}

  },
  retriveToken(context,credentials){
    return new Promise((resolve,reject)=>{
      axios.post('/token',
        qs.stringify({
          "grant_type": "password",
          "username": credentials.username,
          "password": credentials.password
        }),
        {
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
          }
        })

        .then(
        response => {
          const token = response.data.access_token
          localStorage.setItem('access_token', token)
          context.commit('retriveToken', token)
          resolve(response)
        //      console.log(response)
        }
      ).catch(
        error => {
          console.log(error)
          reject(error)

        })
    })
  }
})

const getters ={
  loggedIn(state){
    return state.token !== null
  }
}

export default new Vuex.Store({
  state,
  mutations,
  actions,
  getters,
})
