<template>
    <LoginForm v-on:existingLogin="userLogin($event)" v-bind:updateLogin="updateLogin" />
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
    'userLogin:obj'
  ],
  data() {
    return {
      selectedLanguage: '',
      selectedRegion: ''
    }
  },
  methods: {
    userLogin(obj) {
      console.log(obj)
      this.$emit('userLogin', obj)
    }

  }

})
</script>
