<template>
    <header>
        <div class="header-content">
            <h1 class='app-title'>Flick Finder</h1>
            <aside class="nav-links">
                <router-link to="/search">Search</router-link>
                <router-link to="/profile">Profile</router-link>
            </aside>
        </div>
    </header>
</template>

<script>

export default {
    name: 'Header'
}
</script>

<style scoped lang="scss">
@import '../index'; 
    header {
        height: 75px; 
        background-color: whitesmoke; 
        display: flex;
        flex-direction: column-reverse;
        justify-content: space-between;
        padding: 0 10px 0 10px;
        width: 100%;
        top: 0;
    }
    h1 {
        // align-self: center;
        // height: 75px;
        // align-self: flex-end;
        // height:60%;
        // font-size: 30px;
    }
    .nav-links {
        align-self: flex-end;
        width: 140px;
        display: flex;
        justify-content: space-between;
        height: unset;
    }
    
    .header-content {
        height: 50px;
        width: 100%;
        display: flex;
        justify-content: space-between;
    }
</style>