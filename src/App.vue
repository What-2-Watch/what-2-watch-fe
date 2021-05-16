<template>
  <body id="app">
    <Header>
    <Login v-if="!loggedIn" />
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
  }
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