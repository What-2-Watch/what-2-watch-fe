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