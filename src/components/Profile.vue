<template>
    <section class="profile-container">
        <div class="welcome-container">
            <h1>Welcome {{ `Nick Cage`|| currentUser.first_name }}</h1>
            <h2 class="email">Email: {{ 'nick.cage@gmail.com' || currentUser.email }}</h2>
        </div>
        <div class="lang-reg-container">
            <h2>Language: {{ 'English' || currentUser.language }} | </h2>
            <h2>| Region: {{ 'United States' || currentUser.region }}</h2>
        </div>
        <h3>Services: {{ 'a long list of services' || currentUser.subscriptions }}</h3>
        <button class="edit-btn">Edit Profile</button>
    </section>
</template>

<script>
export default {
    name: 'Profile',
    props: {
        currentUser: {type: Object}
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
        display: flex;
        justify-content: center;
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
        background-color: $gray; 
        width: 100px;
        height: 20px; 
        border-radius: 3px;
    }
</style>