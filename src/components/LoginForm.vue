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
        required
        v-model="email"/>
      <label for="email"></label>
      <input 
        type="password"
        name="password"
        placeholder="PASSWORD"
        required
        v-model="password"/>
        <label for="password"></label>
        <button class="login-btn" type="submit" v-on:click="existingLogin">LOGIN</button>
        <p v-on:click="showNewUser">Don't have an account? Create one here!</p>
    </form>
    <form v-else class="login-form">
      <input
        type="text"
        name="email"
        placeholder="EMAIL" 
        v-model="email"
        required/>
      <label for="email"></label> 
      <input 
        type="password"
        name="password"
        placeholder="PASSWORD"
        v-model="password"
        required>
      <label for="password"></label>
      <input 
        type="password"
        name="confirmPassword"
        placeholder="RETYPE PASSWORD"
        v-model="confirmPassword"
        required/>
      <label for="confirmPassword"></label>
      <input 
        type="text"
        name="firstName"
        placeholder="FIRST NAME"
        required
        v-model="firstName"/>
      <label for="firstName"></label>
      <input 
        type="text"
        name="lastName"
        placeholder="LAST NAME"
        required
        v-model="lastName"/>
      <label for="lastName"></label>
      <aside class="dropDown">
        <select 
        v-model="selectedLanguage"
        required>
          <option disabled value="">Default language</option>
          <option>English</option>
          <option>Spanish</option>
          <option>German</option>
        </select>
        <select 
        v-model="selectedRegion"
        required>
          <option disabled value="">Default region</option>
          <option>United States</option>
          <option>Pits of Hell</option>
          <option>France</option>
        </select>
      </aside>
      <label for="language"></label>
      <button v-on:click="createUser" class="create-acct-btn">CREATE ACCOUNT</button>
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
      newUser: false,
      selectedLanguage: '',
      selectedRegion: '',
      email: '',
      password: '',
      confirmPassword: '',
      services: [],
      firstName: '',
      lastName: ''
    }
  },
  emits: [
    'existingLogin:user', 
    'createUser:userData'
  ],
  methods: {
    showNewUser() {
        this.newUser = true;
    },
    existingLogin(e) {
      e.preventDefault();
      const user = {
        email: this.email,
        password: this.password,
      }
      this.$emit('existingLogin', user)
    },

    createUser(e) {
      e.preventDefault()
      const newUser = {
        'language': this.selectedLanguage,
        'region': this.selectedRegion,
        'email': this.email,
        'password': this.password,
        'confirmPassword': this.confirmPassword,
        'services': this.services,
        'firstName': this.firstName,
        'lastName': this.lastName,
      }
      console.log(newUser)
      this.$emit('createUser', newUser)
    }
}})
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

  .login-form  {
    @include centerColumn; 
    margin: 0 auto;
    height: 330px;
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
      border-radius: 2px;
    }
    .dropDown {
      display: flex;

      select {
        margin: 20px;
        padding: 5px;
        
      }
    }
    p {
      cursor: pointer
    }
  }

  .login-btn {
    height: 30px; 
    width: 30%;
    margin: 30px; 
    background-color: $gray; 
    font-weight: bold;
  }

  .create-acct-btn {
    height: 30px; 
    width: 40%;
    margin: 10px; 
    background-color: $gray; 
    font-weight: bold;
    padding: 5px;
  }

</style>