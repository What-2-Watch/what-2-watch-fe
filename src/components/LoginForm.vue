<template>
 <section class="form-view">
    <form v-if="!newUser"
    @submit.prevent="existingLogin"
    class="login-form"
    >
      <input
        type="email" 
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
        <button class="login-btn" type="submit">LOGIN</button>
        <p v-on:click="showNewUser">Don't have an account? Create one here!</p>
    </form>
    <form v-else-if="!servicePage" @submit.prevent="createUser"  class="login-form">
      <input
        type="email"
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
        required/>
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
      <label for="language"></label>
      <button class="create-acct-btn">CREATE ACCOUNT</button>
    </form>
    <form  v-else-if="servicePage">
      <h3 class="service-message">Select which services you use</h3>
      <article class="subscriptions-container">
          <section :key="service.id" v-for="service in services">
            <Service 
              :provider="service"
              :location="location" 
              v-on:addProvider="postService($event)"
            />
          </section>
      </article>
      <button class="login-btn" type="submit" v-on:click="finishUserCreate">CLICK HERE TO GET STARTED</button>
    </form>
   </section>
</template>

<script>
  
import Service from './Service.vue'; 
import { getServices, filterByTopServices } from '../utilities';

export default ({
  name: 'LoginForm',
  components: {
    Service
  },
  data() {
    return {
      newUser: false,
      servicePage: false,
      selectedLanguage: 'en-US',
      selectedRegion: 'US',
      email: '',
      password: '',
      confirmPassword: '',
      services: [],
      firstName: '',
      lastName: '',
      location: 'login'
    }
  },
  props: {
  },
  mounted() {
    getServices()
    .then( services => {
      this.services = filterByTopServices(services)
    })
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
    finishUserCreate() {
      this.$emit('finishCreate')
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
        'first_name': this.firstName,
        'last_name': this.lastName,
      }
      this.$emit('createUser', newUser)
      this.servicePage = true;
    },

    postService(service) {
      this.$emit('postService', service)
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
    padding-top: 50px; 
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

    .service-message {
      color:$gray;
      font-size: 24px;
      margin: 0 0 40px 0;
    }
    .subscriptions-container {
      margin: 0 auto;
      width:65%;
       @include serviceContainer(4);
      overflow-x: hidden;
    }

    .subscriptions-container::-webkit-scrollbar {
       @include serviceScroll
    }

    .subscriptions-container::-webkit-scrollbar-thumb {
      @include serviceScrollThumb
    }

@media screen and (max-width: 1024px) {

      .login-form {
        width: 45%; 
      }

  }

@media screen and (max-width: 600px) {
    
      .login-form {
        width: 70%; 
         input {
           width: 80%;
         }
      }

  }

</style>