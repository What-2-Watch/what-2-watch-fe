<template>
    <header>
        <h1 class='app-title'>Watch to What</h1>
        <router-link to="/search">Search</router-link>
        <router-link to="/profile">Profile</router-link>
    </header>
</template>

<script>

export default {
    name: 'Header'
}
</script>

<style scoped>

    header {
        height: 75px; 
        background-color: whitesmoke; 
        display: flex;
        flex-direction: row;
        justify-content: space-between;
    }
    
    .prof-img {
        height: 50px;
        margin: 20px; 
    }

</style>