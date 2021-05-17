<template>
  <body id="app">
    <Header :loggedIn="loggedIn"/>
    <Login v-if="!loggedIn" v-on:userLogin="updateLogin($event)"/>
    <main v-else>
      <router-view />
      <Home/>
    </main>
  </body>
</template>

<script>
import Header from './components/Header'; 
import Login from './views/Login'; 

export default {
  name: 'App',
  components: {
    Header,
    Login
  },
  data() {
    return{
      loggedIn: false
    }
  },
  methods: {
    updateLogin(event) {
      event.preventDefault();
      !this.loggedIn ? this.loggedIn = true : this.loggedIn = false 
      console.log(event)
    }
  },
  emits: [
    "existingLogin:obj"
  ]
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