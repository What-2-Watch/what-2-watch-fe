<template>
    <section class="profile-container">
        <div class="welcome-container">
            <h1>Welcome, {{ user.first_name }}</h1>
            <h2 class="email">Email: {{ user.email }}</h2>
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
    </section>
</template>

<script>
import Service from './Service'; 
import { getServices, filterByTopServices, getUserById, getUserId } from '../utilities';

export default {
    name: 'Profile',
    components: {
        Service
    }, 
    data() {
        return {
         services: [],
         user: {}
        }
    },
    mounted() {
        getServices()
        .then(services => {
        this.services = filterByTopServices(services)
        getUserById(getUserId())
        .then(response => {
            this.user = response
        })
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
       @include serviceContainer(4);
    }

    .subscriptions-container::-webkit-scrollbar {
       @include serviceScroll
    }

    .subscriptions-container::-webkit-scrollbar-thumb {
      @include serviceScrollThumb
    }


@media screen and (max-width: 600px) {
    
    .profile-container {
        padding: 10px; 
        margin: 15px; 
    }

    .subscriptions-container {
        @include serviceContainer(3);
    }

  }


</style>