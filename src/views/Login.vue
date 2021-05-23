<template>
    <LoginForm 
    v-on:createUser="newUser($event)" 
    v-on:existingLogin="userLogin($event)" 
    v-bind:updateLogin="updateLogin" 
    />
</template>


<script>
import LoginForm from '../components/LoginForm'; 

export default ({
  name: 'Login',
  components: {
    LoginForm
  },
  props: {
    updateLogin: Function,

  },
  emits: [
    'userLogin:user',
    'newUser:userData'
  ],
  data() {
    return {
      selectedLanguage: '',
      selectedRegion: '',

    }
  },
  mounted() {
  },
  methods: {
    userLogin(user) {
      this.$emit('userLogin', user)
    },
    newUser(userData) {
      console.log(userData)
      this.$emit('newUser', userData)
    }
  }

})
</script>
