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
        <button class="login-btn" type="submit">LOGIN</button>
        <p v-on:click="showNewUser">Don't have an account? Create one here!</p>
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
    background-image: url('../assets/red_seats.jpg');
    height: 90%;
    padding-top: 90px;
    background-size: cover;
    background-repeat: no-repeat;
    background-position: 50% 70%;
  }

  .login-form {
    @include centerColumn; 
    margin: 0 auto;
    height: 250px;
    width: 35%;
    border: solid black; 
    border-radius: 10px;
    color: $gray;
    box-shadow: 0 0 .75em #808080;
    backdrop-filter: blur(4px);
    background-color: rgba(217, 217, 217, 0)00;
    filter: brightness(200%);
    input {
      color: $gray;
      background-color: $black;
      width: 50%;
      height: 25px;
      margin: 5px; 
      outline: none; 
      font-size: 1.05em;
      padding: 2px;
    }
  }

  .login-btn {
    height: 30px; 
    width: 20%;
    margin: 30px; 
    background-color: $gray; 
    font-weight: bold;
  }

</style>