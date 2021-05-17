<template>
    <section class='gallery-display'>
        <h2 class='gallery-title'>
        <article class='list-container'>
            <li :key="movie.id" v-for="movie in movieList">
             <MovieCard>
            </li> 
        </article>
    </section>
</template>

<script>

export default { 
    name: 'Gallery', 
    props: {
        listTitle: {type: String},
        movieList: {type: Array}
    }, 
}
</script>

<style scoped lang='scss'>
    .gallery-display {
        /* grid display for all films */
    }

</style>