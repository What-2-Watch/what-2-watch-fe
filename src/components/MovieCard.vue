<template>
    <router-link to="/movieDetailTest">
     <img src="https://www.indiewire.com/wp-content/uploads/2019/12/us-1.jpg?w=758"/>
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

<style >

</style>