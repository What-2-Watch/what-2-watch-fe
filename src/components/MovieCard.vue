<template>
    <router-link to="/movieDetailTest" class="poster-container">
     <img :src="movie.src" alt=""/>
        <aside class="movie-card-details">
            <h3>{{ movie.title }}</h3>
            <button name="upVote" v-on:click="emitActivity">👍</button>
            <button name="downVote" v-on:click="emitActivity">👎</button>
            <button 
            name="add" v-on:click="emitActivity"
            v-if="list !== 'My Watchlist'">Add to Watchlist</button>
            <button v-else
            name="remove" v-on:click="emitActivity">Remove from Watchlist</button>
        </aside>
    </router-link>
</template>


<script>
    export default {
        name: 'MovieCard', 
        props: {
          movie: {type: Object},
          list: {type: String}
        }, 
        emits: [
            'upVote:movie.id',
            'downVote:movie.id',
            'add:movie.id',
            'remove:movie.id'
        ],
        methods: {
          emitActivity(e) {
            this.$emit(e.target.name, this.movie.id)
          }
        }
    }
</script>

<style lang="scss">

    .poster-container {
        
        img {
          height: 200px;  
          margin: 20px; 
          border-radius: 2px;
        }
    }

    .movie-card-details {
        
    }
</style>