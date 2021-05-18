<template>
    <section class='gallery-display'>
        <h2 class='gallery-title'>
        <article class='list-container'>
            <li :key="movie.id" v-for="movie in movieList">
             <MovieCard :movie="movie">
            </li> 
        </article>
    </section>
</template>

<script>
import MovieCard from './components/MovieCard'

export default { 
    name: 'Gallery', 
    props: {
        listTitle: {type: String},
    }, 
    components: {
        MovieCard
    },
    data() {
        return {
            movieList: [{id: 0, src: "https://www.indiewire.com/wp-content/uploads/2019/12/us-1.jpg?w=758"}, {id: 1, src:"https://www.indiewire.com/wp-content/uploads/2019/12/us-1.jpg?w=758"}, {id: 2, src: "https://www.indiewire.com/wp-content/uploads/2019/12/us-1.jpg?w=758"}]
        }
    }
}
</script>

<style scoped lang='scss'>
    .gallery-display {
        /* grid display for all films */
    }

</style>