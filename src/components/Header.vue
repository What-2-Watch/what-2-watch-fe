<template>
    <header>
        <div class="header-content">
            <h1 class='app-title'>Flick Finder</h1>
            <aside class="nav-links" v-if="loggedIn">
                <router-link to="/search">Search</router-link>
                <router-link to="/profile">Profile</router-link>
            </aside>
        </div>
    </header>
</template>

<script>

export default {
    name: 'Header',
    props: {
        loggedIn: Boolean
     },
}
</script>

<style scoped lang="scss">
@import '../index.scss'; 
    header {
        height: 75px; 
        background-color: black; 
        display: flex;
        flex-direction: column-reverse;
        justify-content: space-between;
        padding: 0 10px 0 10px;
        width: 100%;
        top: 0;
        vertical-align:bottom;
        border-bottom: solid $gray 6px;
    }
    h1 {
        margin-top: 15px;
    }
    .nav-links {
        align-self: flex-end;
        width: 140px;
        display: flex;
        justify-content: space-between;
        height: unset;
        a {
            color: $gray;
            font-family: 'Bebas Neue', cursive;
            letter-spacing: 2px;
            font-size: 15px;
        }
    }
    
    .header-content {
        height: 50px;
        width: 100%;
        display: flex;
        justify-content: space-between;
    }
</style>