<template>
    <section class="profile-container">
        <h1>Welcome {{ `Nick Cage`|| user.first_name }}</h1>
        <div class="lang-reg-container">
            <h2>Language: {{ 'English' || user.language }} | </h2>
            <h2>| Region: {{ 'United States' || user.region }}</h2>
        </div>
        <h3>Email: {{ 'nick.cage@gmail.com' || user.email }}</h3>
        <h3>Services: {{ 'a long list of services' || user.services }}</h3>
    </section>
</template>

<script>
export default {
    name: 'Profile',
    props: {
        user: {type: Object}
    }
}
</script>

<style scoped  lang="scss">
  @import '../index.scss';

    .profile-container {
        color: $gray; 
    }

    .lang-reg-container {
        display: flex;
        justify-content: center;
    }

</style>