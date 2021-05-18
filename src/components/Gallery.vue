<template>
    <section class='gallery-display'>
        <h2 class='gallery-title'>{{ listTitle || 'Recommendations' }}</h2>
        <article class='list-container'>
            <li :key="movie.id" v-for="movie in movieList">
             <MovieCard :list="listTitle" :movie="movie"/>
            </li> 
        </article>
    </section>
</template>

<script>
import MovieCard from '../components/MovieCard';

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
            movieList: [{id: 0, title: "Us baby!", src: "https://www.indiewire.com/wp-content/uploads/2019/12/us-1.jpg?w=758"}, {id: 1, title: "Us baby!", src:"https://www.indiewire.com/wp-content/uploads/2019/12/us-1.jpg?w=758"}, {id: 2, title: "Us baby!", src: "https://www.indiewire.com/wp-content/uploads/2019/12/us-1.jpg?w=758"},  {id: 3, title: "Us baby!", src: "https://www.indiewire.com/wp-content/uploads/2019/12/us-1.jpg?w=758"},  {id: 4, title: "Us baby!", src: "https://www.indiewire.com/wp-content/uploads/2019/12/us-1.jpg?w=758"},  {id: 5, title: "Us baby!", src: "https://www.indiewire.com/wp-content/uploads/2019/12/us-1.jpg?w=758"},  {id: 6, title: "Us baby!", src: "https://www.indiewire.com/wp-content/uploads/2019/12/us-1.jpg?w=758"},  {id: 7, title: "Us baby!", src: "https://www.indiewire.com/wp-content/uploads/2019/12/us-1.jpg?w=758"},  {id: 8, title: "Us baby!", src: "https://www.indiewire.com/wp-content/uploads/2019/12/us-1.jpg?w=758"},  {id: 9, title: "Us baby!", src: "https://www.indiewire.com/wp-content/uploads/2019/12/us-1.jpg?w=758"},  {id: 10, title: "Us baby!", src: "https://www.indiewire.com/wp-content/uploads/2019/12/us-1.jpg?w=758"},  {id: 11, title: "Us baby!", src: "https://www.indiewire.com/wp-content/uploads/2019/12/us-1.jpg?w=758"},  {id: 12, title: "Us baby!", src: "https://www.indiewire.com/wp-content/uploads/2019/12/us-1.jpg?w=758"},
              {id: 13, title: "Us baby!", src: "https://www.indiewire.com/wp-content/uploads/2019/12/us-1.jpg?w=758"}]
        }
    },
    methods: {
        upVote() {
            
        }, 
        downVote() {

        }, 
        AddToWatchList() {

        }, 
        removeFromWatchList() {

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

    .gallery-title {
        color: $gray;
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