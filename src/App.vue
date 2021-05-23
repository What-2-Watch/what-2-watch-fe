<template>
  <body id="app">
    <Header :loggedIn="loggedIn"/>
    <Login v-if="!loggedIn" 
    v-on:newUser="createNewUser($event)" 
    v-on:userLogin="existingLogin($event)"
    v-on:finishCreate="updateLogin()"
    :userId="currentUser" 
    />
    <main v-else>
      <router-view 

      :log="loggedIn"/>
    </main>
  </body>
</template>

<script>
import { } from 'vue'
import Header from './components/Header';   
import Login from './views/Login'; 
import { submitNewUser, getUsers, confirmLogin, setUserId } from './utilities'; 
import router from './router/index'

export default {
  name: 'App',
  components: {
    Header,
    Login,
  },
  data() {
    return{
      error:"",
      loggedIn: false,
      currentUser: null,
      allUsers: []
    }
  },
  async mounted() {
    const allUsers = await getUsers()
    this.allUsers = allUsers
  },
  methods: {
    updateLogin() {
      !this.loggedIn ? this.loggedIn = true : this.loggedIn = false
      this.loggedIn && router.push('home') 
    },
    existingLogin(userData) {
      const user = confirmLogin(userData, this.allUsers)
      if (user) {
        this.updateLogin()
        setUserId(user.id)
      }
    },
    createNewUser(userData) {
      submitNewUser(userData)
      .then(data => setUserId(data.id))
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



           <!-- :userId="currentUser"  -->