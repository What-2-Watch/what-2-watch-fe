<template>
    <section>
        <MovieDetails :movie="movie"/>
    </section>
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
    created() {
        Promise.all([getMovieDetails(399566)])
        .then(response => {
            console.log(response)
            this.movie = response[0]
            console.log(this.movie)
            this.$forceUpdate()
        })

    }
}

</script>

<style scoped lang="scss">

</style>