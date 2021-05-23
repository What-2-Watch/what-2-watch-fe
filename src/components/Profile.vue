<template>
    <section class="profile-container">
        <div class="welcome-container">
            <h1>Welcome, {{ user.first_name }}</h1>
            <h2 class="email">Email: {{ user.email }}</h2>
        </div>
        <div class="lang-reg-container">
            <h2>Language: {{ user.language }} | </h2>
            <h2>| Region: {{ user.region }}</h2>
        </div>
        <h2>YOUR SERVICES:</h2>
        <article class="subscriptions-container"> 
          <section :key="service.id" v-for="service in services">
            <Service 
             :provider="service" 
             v-on:addProvider="postService($event)"
            />
          </section>
        </article>
        <button class="edit-btn">EDIT PROFILE</button>
    </section>
</template>

<script>
import Service from './Service'; 
import { getServices, filterByTopServices } from '../utilities';

export default {
    name: 'Profile',
    props: {
        user: Object
    }, 
    components: {
        Service
    }, 
    data() {
        return {
         services: [],
        }
    },
    mounted() {
        getServices()
        .then( services => {
        this.services = filterByTopServices(services)
    })
  },
}
</script>

<style scoped  lang="scss">
  @import '../index.scss';

    .profile-container {
        color: $gray;
        padding: 50px; 
        margin: 35px; 
        min-height: 550px;
        @include primaryBorder;
    }

    .lang-reg-container {
        @include flex-row; 
        margin-bottom: 20px; 
    }

    .welcome-container {
        border-bottom: 1px solid $gray; 
        margin: 0 10px 20px 10px; 
    }

    .email {
        font-size: 17px;
        margin: 0 10px 20px 10px; 
    }

    .edit-btn {
        background-color: transparent;
        border-bottom: 1px solid $gray; 
        color: $gray; 
        width: 100px;
        height: 25px; 
        margin: 40px; 
        float: left;  
    }

    .subscriptions-container {
       @include serviceContainer
    }

    .subscriptions-container::-webkit-scrollbar {
       @include serviceScroll
    }

    .subscriptions-container::-webkit-scrollbar-thumb {
      @include serviceScrollThumb
    }

</style>