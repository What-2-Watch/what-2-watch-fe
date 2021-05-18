<template>
    <router-link to="/movieDetailTest" class="poster-container">
     <img :src="movie.src" alt=""/>
    </router-link>
</template>


<script>
    export default {
        name: 'MovieCard', 
        props: {
          movie: {type: Object}
        }
    }
</script>

<style lang="scss">

    .poster-container {
        
        img {
            
        }
    }

</style>