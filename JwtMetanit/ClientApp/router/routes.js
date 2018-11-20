import CounterExample from 'components/counter-example'
import FetchData from 'components/fetch-data'
import HomePage from 'components/home-page'
import Login from'components/auth/Login'
import Todo from 'components/todo'
import Register from 'components/auth/Register'
import Logoff from 'components/auth/Logoff'
import store from '../store'

export const routes = [
 //{ name: 'home', path: '/', component: HomePage, display: 'Home', icon: 'home' },
//  { name: 'counter', path: '/counter', component: CounterExample, display: 'Counter', icon: 'graduation-cap' },
//  { name: 'fetch-data', path: '/fetch-data', component: FetchData, display: 'Fetch data', icon: 'list' },
{ name:'todo',  path: '/', component: Todo, display: 'Todo', icon: 'list', meta: {
    requiresAuth: true,
  },   },
  { name:'login', path: '/auth/login', component: Login, display: 'Login', icon: 'list',meta: {
      requiresVisitor: true,
    }, loggedIn: true,},

  { name: 'Register', path: '/auth/Register', component: Register, display: 'Register',meta: {
      requiresVisitor: true,
    }, loggedIn: true,icon: 'list'},
  {name:'Logoff', path:'/auth/Logoff', component: Logoff, display: 'Logoff', loggedInn:true,icon: 'list'}
]
