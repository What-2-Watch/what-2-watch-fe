<template>
    <LoginForm 
    v-on:createUser="newUser($event)" 
    v-on:existingLogin="userLogin($event)" 
    v-bind:updateLogin="updateLogin" 
    v-on:postService="addSubscription($event)"
    />
</template>


<script>
import { postService } from '../utilities.js'
import LoginForm from '../components/LoginForm'; 

export default ({
  name: 'Login',
  components: {
    LoginForm
  },
  props: {
    updateLogin: Function,
    userId: Number
  },
  emits: [
    'userLogin:user',
    'newUser:userData'
  ],
  data() {
    return {
      selectedLanguage: '',
      selectedRegion: ''
    }
  },
  methods: {
    userLogin(user) {
      this.$emit('userLogin', user)
    },
    newUser(userData) {
      console.log(userData)
      this.$emit('newUser', userData)
    },
    addSubscription(service) {
      service.user = this.userId
      console.log(service)
      postService(service)
    }
  }

})
</script>
