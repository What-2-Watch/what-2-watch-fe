<template>
  <section>
    <h1 class="rec-title">{{user.first_name}}'s RECOMMENDED MOVIES</h1>
    <search-grid class="rec-grid" :searchResults="recommended"
    v-on:displayMovieModal="displayMovie($event)"></search-grid>
    <modal :movie="shownMovie" :showing="displayed"
    v-on:closeModal="displayMovie($event)"
    ></modal>
  </section>
</template>

<script>
import { getUserById, getMovieById, cleanMovieSearchData, getUserRecs, getUserId } from '../utilities'; 
import Modal from '../components/Modal'
import SearchGrid from '../components/SearchGrid'

export default {
  name: 'Home',
  components: {
    Modal,
    SearchGrid
  },
  data() {
    return {
      user: {},
      displayed: false,
      shownMovie: {},
      recommended: [],
    }
  },
  
  mounted() {
    getUserById(getUserId())
    .then(data => {
      this.user = data
      this.fetchRecommendations()
      })
  },
  methods: {
    fetchWatchlistMovies() {
      let movieList = this.user.watchlist.map(watchlistObj => {
        return getMovieById(watchlistObj.api_movie_id)
      })
      Promise.all(movieList)
      .then(responses => {
        this.watchlist = [...cleanMovieSearchData(responses)]
      })
      
    },

    displayMovie(movie) {
      if (this.displayed !== true && this.shownMovie !== movie) {
        this.shownMovie = movie;
        this.displayed = true;
      }
      else {
        this.shownMovie = {},
        this.displayed = false
      }
    },
    
    fetchRecommendations() {
      getUserRecs(getUserId())
      .then(data => {
        this.recommended = [...cleanMovieSearchData(data.results)]
      })
    }
}
}
</script>
<style scoped lang="scss">
@import '../index.scss';

.rec-title {
  margin: 20px; 
}

.rec-grid {
  margin: 0 auto;
}

</style>
