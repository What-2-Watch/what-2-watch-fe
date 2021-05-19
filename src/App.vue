<template>
  <body id="app">
    <Header :loggedIn="loggedIn"/>
    <Login v-if="!loggedIn" v-on:newUser="createNewUser($event)" v-on:userLogin="updateLogin()"/>
    <main v-else>
      <router-view />
      <Home/>
    </main>
  </body>
</template>

<script>
import Header from './components/Header'; 
import Login from './views/Login'; 
import { submitNewUser } from './utilities'; 

export default {
  name: 'App',
  components: {
    Header,
    Login
  },
  data() {
    return{
      loggedIn: true,
      currentUser: {        
        "id": 1,
        "email": "hope.gochnour@gmail.com",
        "first_name": "",
        "last_name": "",
        "language": "0",
        "region": "0"
        },
      genres: [],
      services: []
    }
  },
  methods: {
    updateLogin() {
      !this.loggedIn ? this.loggedIn = true : this.loggedIn = false 
    },
    createNewUser(userData) {
      console.log(userData)
      console.log(JSON.stringify(userData))
      submitNewUser(userData)
      .then(data => this.currentUser = data)
      this.updateLogin()
    },
  },
}
</script>

<style lang="scss">
@import './index.scss';

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  text-align: center;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>