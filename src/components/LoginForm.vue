<template>
  <form v-if="!newUser">
    <input
      type="text"
      name="email"
      placeholder="EMAIL"/>
    <label for="email"></label>
    <input 
      type="text"
      name="password"
      placeholder="PASSWORD"/>
      <label for="password"></label>
      <button v-on:click="showNewUser">Don't have an account? Create one here!</button>
      <button>LOGIN</button>
  </form>
  <form v-else>
    <input
      type="text"
      name="email"
      placeholder="EMAIL"/>
    <label for="email"></label> 
    <input 
      type="text"
      name="password"
      placeholder="PASSWORD"/>
    <label for="password"></label>
    <input 
      type="text"
      name="confirmPassword"
      placeholder="RETYPE PASSWORD"/>
    <label for="confirmPassword"></label>
    <input 
      type="text"
      name="firstName"
      placeholder="FIRST NAME"/>
    <label for="firstName"></label>
    <input 
      type="text"
      name="lastName"
      placeholder="LAST NAME"/>
    <label for="lastName"></label>

    <select v-model="selectedLanguage">
      <option disabled value="">Default language</option>
      <option>English</option>
      <option>Spanish</option>
      <option>German</option>
    </select>
    <select v-model="selectedRegion">
      <option disabled value="">Default region</option>
      <option>United States</option>
      <option>Pits of Hell</option>
      <option>France</option>
    </select>


      
    <label for="language"></label>
    <button>CREATE ACCOUNT</button>
  </form>
</template>


<script>

export default ({
  name: 'LoginForm',
  components: {

  },
  data() {
    return {
      selectedLanguage: '',
      selectedRegion: '',
      newUser: false
    }
  },
  methods: {
    showNewUser() {
        this.newUser = true;
    }
  }
})
</script>

<style scoped lang='scss'>
  @import '../index.scss';
  .hidden {
    @include hide 
  }


</style>