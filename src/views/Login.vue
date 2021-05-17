<template>
    <LoginForm v-on:createUser="newUser(userData)" v-on:existingLogin="userLogin(user)" v-bind:updateLogin="updateLogin" />
</template>


<script>
import LoginForm from '../components/LoginForm'; 

export default ({
  name: 'Login',
  components: {
    LoginForm
  },
  props: {
    updateLogin: {type: Function}
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
      this.$emit('newUser', userData)
    }

  }

})
</script>
