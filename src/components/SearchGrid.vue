<template>
  <section class="search-grid">
      <MovieCard :list="title" v-for="result in searchResults" :movie="result" :key="result.id"/>
  </section>
</template>

<script>
import MovieCard from '../components/MovieCard'
export default {
  name: 'SearchGrid', 
  props: {
    searchResults: [],
  },
  components: {
      MovieCard,
  },
  data() {
      return {
          movieList: [{id: 0, title: "Us baby!", src: "https://www.indiewire.com/wp-content/uploads/2019/12/us-1.jpg?w=758"}, {id: 1, title: "Us baby!", src:"https://www.indiewire.com/wp-content/uploads/2019/12/us-1.jpg?w=758"}, {id: 2, title: "Us baby!", src: "https://www.indiewire.com/wp-content/uploads/2019/12/us-1.jpg?w=758"},  {id: 3, title: "Us baby!", src: "https://www.indiewire.com/wp-content/uploads/2019/12/us-1.jpg?w=758"},  {id: 4, title: "Us baby!", src: "https://www.indiewire.com/wp-content/uploads/2019/12/us-1.jpg?w=758"},  {id: 5, title: "Us baby!", src: "https://www.indiewire.com/wp-content/uploads/2019/12/us-1.jpg?w=758"},  {id: 6, title: "Us baby!", src: "https://www.indiewire.com/wp-content/uploads/2019/12/us-1.jpg?w=758"},  {id: 7, title: "Us baby!", src: "https://www.indiewire.com/wp-content/uploads/2019/12/us-1.jpg?w=758"},  {id: 8, title: "Us baby!", src: "https://www.indiewire.com/wp-content/uploads/2019/12/us-1.jpg?w=758"},  {id: 9, title: "Us baby!", src: "https://www.indiewire.com/wp-content/uploads/2019/12/us-1.jpg?w=758"},  {id: 10, title: "Us baby!", src: "https://www.indiewire.com/wp-content/uploads/2019/12/us-1.jpg?w=758"},  {id: 11, title: "Us baby!", src: "https://www.indiewire.com/wp-content/uploads/2019/12/us-1.jpg?w=758"},  {id: 12, title: "Us baby!", src: "https://www.indiewire.com/wp-content/uploads/2019/12/us-1.jpg?w=758"},
            {id: 13, title: "Us baby!", src: "https://www.indiewire.com/wp-content/uploads/2019/12/us-1.jpg?w=758"}],
          title: 'Search',
      
      }
  },
}
</script>

<style lang="scss">
@import '../index.scss'; 

  .search-grid {
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    padding: 0 20px;
    .movie-card {
      transform: scale(.9);
      .poster {
        margin: .75em;
        box-shadow: 0 0 .75em $lightRed;
      }
    }
  }
</style>