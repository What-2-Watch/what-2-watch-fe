<template>
    <section>
        <MovieDetails :movie="movie"/>
</template>

<script>
import { MovieDetails } from '../components/MovieDetails'
import { getMovieDetails } from '../utilities.js'

export default {
    name: 'MovieDetailsPage',
    components: {
        MovieDetails
    },

    data() {
        return {
            movie: {}
        }
    },
    mounted() {
        Promise.all([getMovieDetails(399566)])
        .then(response => this.movie = response[0])
    }
}

/*
how to find the id of the movie from within the component, can it be passed 
*/
</script>great job