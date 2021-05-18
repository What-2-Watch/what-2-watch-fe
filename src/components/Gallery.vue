<template>
    <section class='gallery-display'>
        <h2 class='gallery-title'>Recommendations</h2>
        <article class='list-container'>
            <li :key="movie.id" v-for="movie in movieList">
             <MovieCard :movie="movie"/>
            </li> 
        </article>
    </section>
</template>

<script>
import MovieCard from '../components/MovieCard'

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
            movieList: [{id: 0, src: "https://www.indiewire.com/wp-content/uploads/2019/12/us-1.jpg?w=758"}, {id: 1, src:"https://www.indiewire.com/wp-content/uploads/2019/12/us-1.jpg?w=758"}, {id: 2, src: "https://www.indiewire.com/wp-content/uploads/2019/12/us-1.jpg?w=758"},  {id: 3, src: "https://www.indiewire.com/wp-content/uploads/2019/12/us-1.jpg?w=758"},  {id: 4, src: "https://www.indiewire.com/wp-content/uploads/2019/12/us-1.jpg?w=758"},  {id: 5, src: "https://www.indiewire.com/wp-content/uploads/2019/12/us-1.jpg?w=758"},  {id: 6, src: "https://www.indiewire.com/wp-content/uploads/2019/12/us-1.jpg?w=758"},  {id: 7, src: "https://www.indiewire.com/wp-content/uploads/2019/12/us-1.jpg?w=758"},  {id: 8, src: "https://www.indiewire.com/wp-content/uploads/2019/12/us-1.jpg?w=758"},  {id: 9, src: "https://www.indiewire.com/wp-content/uploads/2019/12/us-1.jpg?w=758"},  {id: 10, src: "https://www.indiewire.com/wp-content/uploads/2019/12/us-1.jpg?w=758"},  {id: 11, src: "https://www.indiewire.com/wp-content/uploads/2019/12/us-1.jpg?w=758"},  {id: 12, src: "https://www.indiewire.com/wp-content/uploads/2019/12/us-1.jpg?w=758"},  {id: 13, src: "https://www.indiewire.com/wp-content/uploads/2019/12/us-1.jpg?w=758"}]
        }
    }
}
</script>

<style scoped lang='scss'>
@import '../index.scss';

    .gallery-display {
        display: flex;
        flex-direction: column;
        text-align: left;
    }

    .list-container {
        display: flex;
        background-color: $gray;
        overflow-x: scroll;
        overflow-y: hidden;
    }
    .list-container::-webkit-scrollbar {
        background-color: transparent;
        border-radius: 10px;
        height: 55px;
    }

    .list-container::-webkit-scrollbar-thumb {
        background-image: url('../assets/image.png');
        border-radius: 10px;
        background-size: contain;
        background-repeat: no-repeat;
    }

</style>