<template>
    <section class="profile-container">
        <div class="welcome-container">
            <h1>Welcome, {{ `Nick Cage`|| currentUser.first_name }}</h1>
            <h2 class="email">Email: {{ 'nick.cage@gmail.com' || currentUser.email }}</h2>
        </div>
        <div class="lang-reg-container">
            <h2>Language: {{ 'English' || currentUser.language }} | </h2>
            <h2>| Region: {{ 'United States' || currentUser.region }}</h2>
        </div>
        <h2>YOUR SERVICES:</h2>
        <article class="subscriptions-container"> 
            <div :key="service.id" v-for="service in subscriptionList">
                <Service :provider="service" />
            </div>
<div :key="service.id" v-for="service in subscriptionList">
                <Service :provider="service" />
            </div>
                        <div :key="service.id" v-for="service in subscriptionList">
                <Service :provider="service" />
            </div>
                        <div :key="service.id" v-for="service in subscriptionList">
                <Service :provider="service" />
            </div>
                        <div :key="service.id" v-for="service in subscriptionList">
                <Service :provider="service" />
            </div>
                        <div :key="service.id" v-for="service in subscriptionList">
                <Service :provider="service" />
            </div>
                        <div :key="service.id" v-for="service in subscriptionList">
                <Service :provider="service" />
            </div>
                                    <div :key="service.id" v-for="service in subscriptionList">
                <Service :provider="service" />
            </div>
                                    <div :key="service.id" v-for="service in subscriptionList">
                <Service :provider="service" />
            </div>
                                    <div :key="service.id" v-for="service in subscriptionList">
                <Service :provider="service" />
            </div>
                                    <div :key="service.id" v-for="service in subscriptionList">
                <Service :provider="service" />
            </div>
        </article>
        <button class="edit-btn">EDIT PROFILE</button>
    </section>
</template>

<script>
import Service from './Service'; 

export default {
    name: 'Profile',
    props: {
        currentUser: {type: Object}
    }, 
    components: {
        Service
    }, 
    data() {
        return {
            subscriptionList: [
                {id: 0, sub: "NutFlex"}, 
                {id: 1, sub: "FlexNuts"}
            ]
        }
    }
}
</script>

<style scoped  lang="scss">
  @import '../index.scss';

    .profile-container {
        color: $gray;
        padding: 50px; 
        border: solid .1px #d9d9d956; 
        box-shadow: 0 0 .75em #808080;
        margin: 50px; 
        min-height: 550px;
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
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        height: 175px;
        margin-top: 20px; 
        overflow: auto; 
    }
</style>