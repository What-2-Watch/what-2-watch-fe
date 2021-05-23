<template>
  <section class="home-view">
    <Gallery 
    :listTitle="watchlist_title"
    :list="watchlist"
    v-on:displayMovieModal="displayMovie($event)"/>
    <Gallery 
    :listTitle="watchlist_title"
    :list="watchlist"
    v-on:displayMovieModal="displayMovie($event)"/>
    <modal :movie="shownMovie" :showing="displayed"
    v-on:closeModal="displayMovie($event)"
    v-on:postThumb="updateThumb($event)"
    v-on:postWatchList="updateWatchList($event)"></modal>
  </section>
</template>

<script>
import Gallery from '../components/Gallery';
import { getUserById, getMovieById, cleanMovieSearchData, postWatchlist, postThumb } from '../utilities'; 
import Modal from '../components/Modal'

export default {
  name: 'Home',
  components: {
    Gallery,
    Modal
  },
  data() {
    return {
      'watchlist_title':"My Watchlist",
      user: {},
      watchlist : [],
      displayed: false,
      shownMovie: {}
    }
  },
  mounted() {
    getUserById(this.userId)
    .then(data => {
      this.user = data
      this.fetchWatchlistMovies()
      })
  },
  props: {
    userId: Number
  },
  methods: {
    fetchWatchlistMovies() {
      let movieList = this.user.watchlist.map(watchlistObj => {
        return getMovieById(watchlistObj.api_movie_id)
      })
      Promise.all(movieList)
      .then(responses => {
        this.watchlist = [...cleanMovieSearchData(responses)]
        console.log(responses)
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
    updateThumb(thumb) {
      
      postThumb(thumb, this.userId)
      .then(res => console.log(res))
    },
    updateWatchList(obj) {
      obj.user = this.userId
      postWatchlist(obj)
      .then(res => console.log(res))
    },
}
}
</script>
<style scoped lang="scss">
@import '../index.scss';
  .home-view {
 
  }

</style>
