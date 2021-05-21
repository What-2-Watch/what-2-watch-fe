<template>
  <section class="search-grid">
      <MovieCard 
      :list="title" v-for="result in searchResults" 
      :movie="result" 
      :key="result.id"
      v-on:upVote="thumbsUp($event)"
      v-on:downVote="thumbsDown($event)"
      v-on:add="addToWatchList($event)"
      v-on:remove="removeFromWatchlist($event)"/>
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
    }
  }
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