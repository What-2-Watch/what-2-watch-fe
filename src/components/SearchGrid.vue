<template>
  <section class="search-grid">
      <MovieCard 
      v-for="result in searchResults" 
      :movie="result" 
      :key="result.id"
      v-on:clickMovie="showMovie($event)"/>
  </section>
</template>

<script>
import MovieCard from '../components/MovieCard'
export default {
  name: 'SearchGrid', 
  props: {
    searchResults: Array,
  },
  components: {
      MovieCard,
  },
  data() {
      return {
          movieList: []
      }
  },
  methods: {
    thumbsUp({id, title}) {
      this.$emit('postThumb', {api_movie_id: id, up: true, title: title})
    },
    thumbsDown(id, title) {
      this.$emit('postThumb', {api_movie_id: id, up: false, title: title})
    },
    addToWatchList({id, title}) {
      this.$emit('postWatchList', {api_movie_id: id, title})
    },
    showMovie(movie) {
      this.$emit('displayMovieModal', movie)
    }
  }
}
</script>

<style lang="scss">
@import '../index.scss'; 

  .search-grid {
    margin: 0 auto;
    width: 95%;
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    column-gap: 16px;
    row-gap: 16px;
  }

@media screen and (max-width: 600px) {

  .search-grid {
      grid-template-columns: repeat(2, 1fr);
  }

  }


</style>