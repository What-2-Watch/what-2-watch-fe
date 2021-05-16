<template>
 <section class="form-view">
    <form v-if="!newUser"
    @submit="existingLogin"
    class="login-form"
    >
      <input
        type="text" 
        name="email"
        placeholder="EMAIL"
        v-on:change="inputEmail"/>
      <label for="email"></label>
      <input 
        type="text"
        name="password"
        placeholder="PASSWORD"/>
        <label for="password"></label>
        <p v-on:click="showNewUser">Don't have an account? Create one here!</p>
        <button type="submit">LOGIN</button>
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
   </section>
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
  emits: [
    'existingLogin'
  ],
  methods: {
    showNewUser() {
        this.newUser = true;
    },
    existingLogin(obj) {
      console.log(obj)
      this.$emit('existingLogin', obj)
    }

  }
})
</script>

<style scoped lang='scss'>
  @import '../index.scss';
  .hidden {
    @include hide 
  }

  .form-view {
    @include centerColumn; 
    background-image: url('../assets/red_seats.jpg');
    height: 90%;
    background-size: cover;
    background-repeat: no-repeat;
    background-position: 50% 70%;
  }

  .login-form {
    @include centerColumn; 
    height: 300px;
    width: 60%;
    border: solid black; 
    border-radius: 10px;
    box-shadow: 0 0 .75em #808080;
    backdrop-filter: blur(5px);
  }
</style>